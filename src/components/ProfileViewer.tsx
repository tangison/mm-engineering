"use client";

import { useState } from "react";
import { PROFILE_PAGES_HTML } from "@/data/profilePages";
import { SITE } from "@/data/site";

type ProfileViewMode = "split" | "web" | "pdf";

export function ProfileViewer() {
  const [view, setView] = useState<ProfileViewMode>("split");

  const modes: { id: ProfileViewMode; label: string }[] = [
    { id: "split", label: "Side-by-Side" },
    { id: "web", label: "Web Pages" },
    { id: "pdf", label: "PDF Reader" },
  ];

  return (
    <>
      <section className="profile-toolbar">
        <div className="profile-toolbar__inner">
          <div>
            <p className="sc-eyebrow" style={{ color: "var(--mm-red-dark)" }}>
              Tender Pre-Qualification &amp; Statutory Pack
            </p>
            <h1>Company Profile &amp; OHS Policy Manual 2026</h1>
            <p className="profile-toolbar__sub">
              Inspect the complete 15-page web edition alongside the official downloadable PDF
              &middot; Reg. CC/2013/6661 &middot; 25 Verified Contracts (N$ 152,768,801.37).
            </p>
          </div>
          <div className="profile-toolbar__controls">
            {modes.map((m) => (
              <button
                key={m.id}
                className={`mode-btn${view === m.id ? " is-active" : ""}`}
                type="button"
                aria-pressed={view === m.id}
                onClick={() => setView(m.id)}
              >
                {m.label}
              </button>
            ))}
            <a className="btn" href={SITE.pdfHref} download>
              Download Company Profile (PDF, {SITE.pdfSizeLabel})
            </a>
          </div>
        </div>
      </section>

      <section className="profile-shell">
        <div className="profile-split" id="profile-split" data-view={view}>
          <div
            className="brochure-pane"
            dangerouslySetInnerHTML={{ __html: PROFILE_PAGES_HTML }}
          />
          <aside className="pdf-pane" aria-label="Embedded Company Profile PDF">
            <div className="pdf-pane__bar">
              <div>
                <strong>M_and_M_Company_Profile_and_Policies.pdf</strong> &middot; 15 A4 Pages
              </div>
              <div className="pdf-pane__actions">
                <a className="sec" href={SITE.pdfHref} target="_blank" rel="noopener">
                  Open Full Tab
                </a>
                <a href={SITE.pdfHref} download>
                  Download PDF
                </a>
              </div>
            </div>
            <iframe
              className="pdf-pane__frame"
              width={640}
              height={880}
              src={`${SITE.pdfHref}#view=FitH`}
              title="M&M Engineering 2026 Company Profile & OHS Policy Manual PDF"
            />
          </aside>
        </div>
      </section>
    </>
  );
}
