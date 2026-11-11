"use client";

import { useMemo, useState } from "react";
import { PROJECTS_25, SECTOR_FILTERS, type ProjectSector } from "@/data/projects";
import { SITE } from "@/data/site";
import { AppLink } from "./AppLink";

function formatNAD(num: number): string {
  return `N$ ${num.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function ProjectsRegister() {
  const [sector, setSector] = useState<ProjectSector>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS_25.filter((row) => {
      const matchSector = sector === "all" || row.sectors.includes(sector);
      if (!matchSector) return false;
      if (!q) return true;
      const haystack = `${row.num} ${row.name} ${row.client} ${row.consultant} ${row.duration} ${row.valueFmt}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [sector, query]);

  const totalNAD = useMemo(
    () => filtered.reduce((acc, row) => acc + row.valueNum, 0),
    [filtered]
  );

  const countLabel = filtered.length === 1 ? "1 contract" : `${filtered.length} contracts`;
  const sumLabel = formatNAD(totalNAD);

  return (
    <div className="wrap sc-stack" data-project-register>
      <div>
        <p className="eyebrow">Complete Project Register</p>
        <h2 className="sc-display sc-display--lg">All 25 Documented Contracts</h2>
        <p className="sc-body" style={{ maxWidth: "66ch", marginTop: "var(--sc-2)" }}>
          Filter by sector or search by employer, town or consulting firm. Personal mobile phone
          references are withheld on public pages and issued upon tender request.
        </p>
      </div>

      <div className="filter-bar">
        <div className="filter-chips" role="group" aria-label="Filter projects by sector">
          {SECTOR_FILTERS.map((f) => {
            const active = sector === f.id;
            return (
              <button
                key={f.id}
                className={`chip-btn${active ? " is-active" : ""}`}
                type="button"
                aria-pressed={active}
                onClick={() => setSector(f.id)}
              >
                {f.label}
              </button>
            );
          })}
        </div>
        <input
          className="filter-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search employer, town or consultant..."
          aria-label="Search projects"
        />
      </div>

      <p className="status" style={{ marginBottom: "var(--sc-2)" }} aria-live="polite">
        <span>
          Showing <b data-project-count>{countLabel}</b>
        </span>
        <span>
          Filtered total <b data-project-sum>{sumLabel}</b>
        </span>
      </p>

      <div className="data-table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>#</th>
              <th>Project Name</th>
              <th>Principal Employer</th>
              <th>Consulting Firm</th>
              <th>Duration</th>
              <th style={{ textAlign: "right" }}>Value (NAD)</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={row.num}>
                <td className="num">{row.num}</td>
                <td>
                  <strong>{row.name}</strong>
                </td>
                <td>{row.client}</td>
                <td>{row.consultant}</td>
                <td>{row.duration}</td>
                <td className="money">{row.valueFmt}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={5} data-project-foot-count>
                Showing {countLabel}
              </td>
              <td className="money" data-project-foot-sum>
                {sumLabel}
              </td>
            </tr>
          </tfoot>
        </table>
        {filtered.length === 0 ? (
          <div className="table-empty is-visible" data-project-empty>
            No matching contracts found. Clear the filter or choose &quot;All (25)&quot; above.
            {" "}
            <button
              type="button"
              className="chip-btn"
              style={{ marginLeft: 8 }}
              onClick={() => {
                setSector("all");
                setQuery("");
              }}
            >
              Reset filter
            </button>
          </div>
        ) : null}
      </div>

      <div className="profile-cta" style={{ marginTop: "var(--sc-5)" }}>
        <div>
          <h3>Tender Pre-Qualification &amp; Reference Pack</h3>
          <p>
            Need signed completion certificates, consulting referee contacts or our printable
            Company Profile and OHS Policy Manual?
          </p>
        </div>
        <div className="profile-cta__actions">
          <a className="btn btn--accent" href={SITE.pdfHref} download>
            Download Full PDF ({SITE.pdfSizeLabel})
          </a>
          <AppLink className="btn btn--ghost" href="/profile">
            View Web Edition
          </AppLink>
          <AppLink className="btn btn--ghost" href="/contact">
            Request Referees
          </AppLink>
        </div>
      </div>
    </div>
  );
}
