"use client";

import { useEffect, useState } from "react";
import { COMPANY } from "@/data/company";
import { PROFILE_PAGES_HTML } from "@/data/profilePages";

type ViewMode = "split" | "web" | "pdf";

export function ProfileViewer() {
  const [mode, setMode] = useState<ViewMode>("split");

  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get("view");
    if (v === "split" || v === "web" || v === "pdf") {
      setMode(v);
    }
  }, []);

  const chooseMode = (next: ViewMode) => {
    setMode(next);
    const params = new URLSearchParams(window.location.search);
    if (next === "split") params.delete("view");
    else params.set("view", next);
    const qs = params.toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`
    );
  };

  return (
    <div>
      <div className="profile-toolbar-bar">
        <div className="tabs" role="group" aria-label="Choose Company Profile viewing mode">
          <button
            type="button"
            className="tab"
            aria-pressed={mode === "split"}
            onClick={() => chooseMode("split")}
          >
            Side-by-Side
          </button>
          <button
            type="button"
            className="tab"
            aria-pressed={mode === "web"}
            onClick={() => chooseMode("web")}
          >
            Web Pages
          </button>
          <button
            type="button"
            className="tab"
            aria-pressed={mode === "pdf"}
            onClick={() => chooseMode("pdf")}
          >
            PDF Reader
          </button>
        </div>

        <a className="btn btn--primary btn--sm" href={COMPANY.profilePdfHref} download>
          Download Profile ({COMPANY.profilePdfSize} PDF)
        </a>
      </div>

      <div className="profile-split-grid" data-view={mode}>
        <div
          className="profile-web-pane profile-pages-host"
          dangerouslySetInnerHTML={{ __html: PROFILE_PAGES_HTML }}
        />

        <aside className="profile-pdf-pane" aria-label="Official PDF reader">
          <div className="profile-pdf-bar">
            <span>
              <strong>Print Edition PDF</strong> · 15 Pages ({COMPANY.profilePdfSize})
            </span>
            <div className="btn-row">
              <a
                className="btn btn--secondary btn--sm"
                href={COMPANY.profilePdfHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Tab
              </a>
              <a className="btn btn--primary btn--sm" href={COMPANY.profilePdfHref} download>
                Download
              </a>
            </div>
          </div>
          <iframe
            className="profile-pdf-frame"
            src={`${COMPANY.profilePdfHref}#view=FitH`}
            title="M&M Engineering Company Profile and OHS Policy Manual 2026 PDF"
            loading="lazy"
          />
        </aside>
      </div>
    </div>
  );
}
