import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

async function resolveBrowser() {
  try {
    const pw = await import("playwright");
    return await pw.chromium.launch({ headless: true });
  } catch {
    // Fallback for sandbox environments without CDN browser binaries: use playwright-core + @sparticuz/chromium
    const pwCore = require("/tmp/pw-test/node_modules/playwright-core");
    const sparticuz = (await import("/tmp/pw-test/node_modules/@sparticuz/chromium/build/index.js")).default;
    const execPath = await sparticuz.executablePath();
    return await pwCore.chromium.launch({
      args: sparticuz.args,
      executablePath: execPath,
      headless: true,
      env: {
        ...process.env,
        LD_LIBRARY_PATH: "/tmp/al2023/lib" + (process.env.LD_LIBRARY_PATH ? ":" + process.env.LD_LIBRARY_PATH : ""),
      },
    });
  }
}

async function main() {
  const inputHtml = path.resolve("company-profile.html");
  const outputPdf = path.resolve("downloads/M_and_M_Company_Profile_and_Policies.pdf");
  if (!fs.existsSync(inputHtml)) {
    throw new Error(`Missing source HTML: ${inputHtml}`);
  }

  const browser = await resolveBrowser();
  try {
    const context = await browser.newContext({ viewport: { width: 1240, height: 1754 }, deviceScaleFactor: 2 });
    const page = await context.newPage();
    await page.goto("file://" + inputHtml, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts && document.fonts.ready);

    // Measure every page's exact fit against 297mm A4 box before exporting PDF
    const metrics = await page.evaluate(() => {
      const pages = Array.from(document.querySelectorAll(".bp-page"));
      return pages.map((el, idx) => {
        const pageRect = el.getBoundingClientRect();
        const content = el.querySelector(".page-content") || el.querySelector(".bp-cover-body");
        const footRect = el.querySelector(".page-footer")?.getBoundingClientRect();
        const pxPerMm = pageRect.height / 297;
        // Measure deepest rendered visual block (card/table/step/photo/text) inside content
        let maxBottom = 0;
        if (content) {
          const leaves = content.querySelectorAll(".bp-card, .bp-card-dark, .bp-card-red, .bp-ohs, .bp-port-card, .bp-logo-card, .bp-table-wrap, .bp-tiers, .v-step, .bp-photo-tint, .bp-p4-side, .bp-cover-meta-grid, .bp-stats-bar, p, dl");
          for (const node of leaves) {
            const r = node.getBoundingClientRect();
            if (r.height > 0 && r.bottom > maxBottom) maxBottom = r.bottom;
          }
          if (!maxBottom) maxBottom = content.getBoundingClientRect().bottom;
        }
        const gapPx = footRect ? footRect.top - maxBottom : 0;
        const overflowPx = el.scrollHeight - el.clientHeight;
        return {
          page: idx + 1,
          heightMm: +(pageRect.height / pxPerMm).toFixed(2),
          overflowPx: Math.round(overflowPx),
          footerTopMm: footRect ? +((footRect.top - pageRect.top) / pxPerMm).toFixed(2) : null,
          unusedAboveFooterMm: +(gapPx / pxPerMm).toFixed(2),
        };
      });
    });

    console.table(metrics);

    await page.pdf({
      path: outputPdf,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    const stats = fs.statSync(outputPdf);
    console.log(`Exported ${outputPdf} (${stats.size} bytes)`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
