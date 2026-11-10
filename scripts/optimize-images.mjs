import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SRC_ASSETS = path.join(ROOT, "assets");
const PUB_OPT = path.join(ROOT, "public", "assets", "opt");

fs.mkdirSync(path.join(PUB_OPT, "photos"), { recursive: true });
fs.mkdirSync(path.join(PUB_OPT, "projects"), { recursive: true });
fs.mkdirSync(path.join(PUB_OPT, "clients"), { recursive: true });
fs.mkdirSync(path.join(PUB_OPT, "brand"), { recursive: true });

const PHOTO_SLUGS = [
  "hero-wide",
  "civil-roads",
  "consult",
  "electrical",
  "fibre",
  "office",
  "pipeline",
  "site-crane",
  "stock-desert-road",
  "structural",
  "switchgear",
  "telecom",
  "windhoek",
  "team",
  "tower-comms",
  "macro-hat",
];

const EXCLUDE_PROJECTS = new Set(["namibia-hospital-clinic.jpg"]);

let totalBefore = 0;
let totalAfter = 0;
const manifest = {
  photos: {},
  projects: {},
  clients: {},
  misc: {},
};

async function optimizePhoto(slug) {
  const srcPath = path.join(SRC_ASSETS, `${slug}.jpg`);
  if (!fs.existsSync(srcPath)) return;
  const srcBytes = fs.statSync(srcPath).size;
  totalBefore += srcBytes;

  const img = sharp(srcPath).rotate();
  const meta = await img.metadata();
  const natW = meta.width || 1600;
  const natH = meta.height || 1066;

  // Target widths strictly <= natW so zero artificial upscaling occurs
  const candidateWidths = [480, 960, 1440].filter((w) => w <= natW);
  if (!candidateWidths.length) candidateWidths.push(natW);

  const variants = [];
  for (const w of candidateWidths) {
    const h = Math.round((w * natH) / natW);
    const avifOut = path.join(PUB_OPT, "photos", `${slug}-${w}.avif`);
    const webpOut = path.join(PUB_OPT, "photos", `${slug}-${w}.webp`);
    const jpgOut = path.join(PUB_OPT, "photos", `${slug}-${w}.jpg`);

    await sharp(srcPath)
      .rotate()
      .resize(w, h, { withoutEnlargement: true })
      .avif({ quality: w >= 1200 ? 40 : 44, effort: 2 })
      .toFile(avifOut);

    await sharp(srcPath)
      .rotate()
      .resize(w, h, { withoutEnlargement: true })
      .webp({ quality: w >= 1200 ? 68 : 74, effort: 3 })
      .toFile(webpOut);

    await sharp(srcPath)
      .rotate()
      .resize(w, h, { withoutEnlargement: true })
      .jpeg({ quality: 76, mozjpeg: true, progressive: true })
      .toFile(jpgOut);

    totalAfter += fs.statSync(avifOut).size;
    variants.push({ w, h, avif: fs.statSync(avifOut).size, webp: fs.statSync(webpOut).size, jpg: fs.statSync(jpgOut).size });
  }

  // Also keep legacy assets/<slug>-{480,960,1600}.{webp,jpg} compressed cleanly if referenced by company-profile.html
  for (const w of [480, 960, 1600]) {
    if (w > natW) continue;
    const h = Math.round((w * natH) / natW);
    const legWebp = path.join(SRC_ASSETS, `${slug}-${w}.webp`);
    const legJpg = path.join(SRC_ASSETS, `${slug}-${w}.jpg`);
    if (fs.existsSync(legWebp)) {
      await sharp(srcPath).rotate().resize(w, h).webp({ quality: 70, effort: 3 }).toFile(legWebp + ".tmp");
      fs.renameSync(legWebp + ".tmp", legWebp);
    }
    if (fs.existsSync(legJpg)) {
      await sharp(srcPath).rotate().resize(w, h).jpeg({ quality: 76, mozjpeg: true }).toFile(legJpg + ".tmp");
      fs.renameSync(legJpg + ".tmp", legJpg);
    }
  }

  const maxV = variants[variants.length - 1];
  manifest.photos[slug] = {
    base: `/assets/opt/photos/${slug}`,
    width: maxV.w,
    height: maxV.h,
    widths: variants.map((v) => v.w),
    ext: "jpg",
    srcKB: Math.round(srcBytes / 1024),
    bestAvifKB: Math.round(variants.find((v) => v.w >= 960 || true).avif / 1024),
  };
  console.log(
    `photo  ${slug.padEnd(20)} ${String(natW + "x" + natH).padEnd(11)} master=${String(Math.round(srcBytes / 1024)).padStart(4)}KB -> ${variants
      .map((v) => `${v.w}w:${Math.round(v.avif / 1024)}k/${Math.round(v.webp / 1024)}k`)
      .join(" ")}`
  );
}

async function optimizeProject(fileName) {
  if (EXCLUDE_PROJECTS.has(fileName)) return;
  const slug = fileName.replace(/\.(jpg|jpeg|png)$/i, "");
  const srcPath = path.join(SRC_ASSETS, "projects", fileName);
  const srcBytes = fs.statSync(srcPath).size;
  totalBefore += srcBytes;

  const meta = await sharp(srcPath).rotate().metadata();
  const natW = meta.width || 800;
  const natH = meta.height || 533;

  const targetWidths = Array.from(new Set([Math.min(320, natW), Math.min(480, natW), Math.min(960, natW)])).sort((a, b) => a - b);
  const variants = [];
  for (const w of targetWidths) {
    const h = Math.round((w * natH) / natW);
    const avifOut = path.join(PUB_OPT, "projects", `${slug}-${w}.avif`);
    const webpOut = path.join(PUB_OPT, "projects", `${slug}-${w}.webp`);
    const jpgOut = path.join(PUB_OPT, "projects", `${slug}-${w}.jpg`);

    await sharp(srcPath).rotate().resize(w, h, { withoutEnlargement: true }).avif({ quality: 44, effort: 2 }).toFile(avifOut);
    await sharp(srcPath).rotate().resize(w, h, { withoutEnlargement: true }).webp({ quality: 74, effort: 3 }).toFile(webpOut);
    await sharp(srcPath).rotate().resize(w, h, { withoutEnlargement: true }).jpeg({ quality: 76, mozjpeg: true }).toFile(jpgOut);
    variants.push({ w, h, avif: fs.statSync(avifOut).size, webp: fs.statSync(webpOut).size });
  }

  const maxV = variants[variants.length - 1];
  totalAfter += maxV.avif;
  manifest.projects[slug] = {
    base: `/assets/opt/projects/${slug}`,
    width: maxV.w,
    height: maxV.h,
    widths: variants.map((v) => v.w),
    ext: "jpg",
    srcKB: Math.round(srcBytes / 1024),
  };
  console.log(
    `proj   ${slug.padEnd(26)} ${String(natW + "x" + natH).padEnd(11)} master=${String(Math.round(srcBytes / 1024)).padStart(4)}KB -> ${variants
      .map((v) => `${v.w}w:${Math.round(v.avif / 1024)}k/${Math.round(v.webp / 1024)}k`)
      .join(" ")}`
  );
}

async function optimizeClient(fileName) {
  if (!/\.(png|jpg|jpeg|webp)$/i.test(fileName)) return;
  const slug = fileName.replace(/\.(png|jpg|jpeg|webp)$/i, "");
  const ext = fileName.toLowerCase().endsWith(".png") ? "png" : "jpg";
  const srcPath = path.join(SRC_ASSETS, "clients", fileName);
  const srcBytes = fs.statSync(srcPath).size;
  totalBefore += srcBytes;

  const meta = await sharp(srcPath).metadata();
  const natW = meta.width || 180;
  const natH = meta.height || 180;
  const w = Math.min(natW, 180);
  const h = Math.round((w * natH) / natW);

  const webpOut = path.join(PUB_OPT, "clients", `${slug}.webp`);
  const fallbackOut = path.join(PUB_OPT, "clients", `${slug}.${ext}`);

  await sharp(srcPath).resize(w, h, { withoutEnlargement: true }).webp({ quality: 84, effort: 5 }).toFile(webpOut);
  if (ext === "png") {
    await sharp(srcPath).resize(w, h, { withoutEnlargement: true }).png({ compressionLevel: 9, palette: true }).toFile(fallbackOut);
  } else {
    await sharp(srcPath).resize(w, h, { withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(fallbackOut);
  }

  totalAfter += fs.statSync(webpOut).size;
  manifest.clients[slug] = {
    base: `/assets/opt/clients/${slug}`,
    width: w,
    height: h,
    widths: [],
    ext,
    srcKB: Math.round(srcBytes / 1024),
  };
  console.log(
    `client ${slug.padEnd(26)} ${String(natW + "x" + natH).padEnd(11)} ${String(Math.round(srcBytes / 1024)).padStart(3)}KB -> webp ${Math.round(fs.statSync(webpOut).size / 1024)}KB`
  );
}

async function optimizeMisc() {
  const qrSrc = path.join(SRC_ASSETS, "wechat-qr.png");
  if (fs.existsSync(qrSrc)) {
    const srcBytes = fs.statSync(qrSrc).size;
    totalBefore += srcBytes;
    const webpOut = path.join(PUB_OPT, "brand", "wechat-qr.webp");
    const pngOut = path.join(PUB_OPT, "brand", "wechat-qr.png");
    await sharp(qrSrc).webp({ lossless: true }).toFile(webpOut);
    await sharp(qrSrc).png({ compressionLevel: 9, palette: true }).toFile(pngOut);
    totalAfter += fs.statSync(webpOut).size;
    manifest.misc["wechat-qr"] = {
      base: "/assets/opt/brand/wechat-qr",
      width: 250,
      height: 250,
      widths: [],
      ext: "png",
    };
  }
  const ogSrc = path.join(SRC_ASSETS, "brand", "other", "og-image-1200x630.png");
  if (fs.existsSync(ogSrc)) {
    const ogOut = path.join(PUB_OPT, "brand", "og-image.jpg");
    await sharp(ogSrc).jpeg({ quality: 84, mozjpeg: true }).toFile(ogOut);
  }
}

async function main() {
  for (const slug of PHOTO_SLUGS) await optimizePhoto(slug);
  const projFiles = fs.readdirSync(path.join(SRC_ASSETS, "projects")).sort();
  for (const f of projFiles) {
    if (/\.(jpg|jpeg|png)$/i.test(f)) await optimizeProject(f);
  }
  const clientFiles = fs.readdirSync(path.join(SRC_ASSETS, "clients")).sort();
  for (const f of clientFiles) await optimizeClient(f);
  await optimizeMisc();

  const tsOut = `// Auto-generated by scripts/optimize-images.mjs — do not edit by hand
export interface ImageAsset {
  readonly base: string;
  readonly width: number;
  readonly height: number;
  readonly widths: readonly number[];
  readonly ext: "jpg" | "png";
  readonly srcKB?: number;
  readonly bestAvifKB?: number;
}

export const IMAGE_MANIFEST = ${JSON.stringify(manifest, null, 2)} as const;
`;
  fs.mkdirSync(path.join(ROOT, "src", "data"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "src", "data", "imageManifest.ts"), tsOut, "utf8");
  console.log(`\nOptimized all images: source masters ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> primary AVIF/WebP set ${(totalAfter / 1024).toFixed(0)} KB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
