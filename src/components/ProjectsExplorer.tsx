"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ALL_PROJECTS,
  SECTOR_FILTERS,
  type ProjectSector,
} from "@/data/projects";

export function ProjectsExplorer() {
  const [sector, setSector] = useState<ProjectSector>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get("sector");
    if (s && SECTOR_FILTERS.some((f) => f.id === s)) {
      setSector(s as ProjectSector);
    }
    const q = params.get("q");
    if (q) setQuery(q);
  }, []);

  const updateUrl = (nextSector: ProjectSector, nextQuery: string) => {
    const params = new URLSearchParams(window.location.search);
    if (nextSector === "all") params.delete("sector");
    else params.set("sector", nextSector);
    if (!nextQuery.trim()) params.delete("q");
    else params.set("q", nextQuery.trim());
    const qs = params.toString();
    const target = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
    window.history.replaceState(null, "", target);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_PROJECTS.filter((p) => {
      const sectorOk = sector === "all" || p.sectors.includes(sector);
      const queryOk =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.consultant.toLowerCase().includes(q);
      return sectorOk && queryOk;
    });
  }, [sector, query]);

  const sumFormatted = useMemo(() => {
    const sum = filtered.reduce((acc, item) => acc + item.valueNum, 0);
    return (
      "N$ " +
      sum.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }, [filtered]);

  const isFiltered = sector !== "all" || query.trim().length > 0;

  return (
    <div>
      <div className="filter-bar">
        <div className="filter-chips" role="group" aria-label="Filter projects by sector">
          {SECTOR_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className="tab"
              aria-pressed={sector === f.id}
              onClick={() => {
                setSector(f.id);
                updateUrl(f.id, query);
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
        <input
          className="filter-search"
          type="search"
          value={query}
          onChange={(e) => {
            const v = e.target.value;
            setQuery(v);
            updateUrl(sector, v);
          }}
          placeholder="Search employer, town or consultant…"
          aria-label="Search documented contracts"
        />
      </div>

      <div className="filter-summary" aria-live="polite">
        <span>
          Showing <strong style={{ fontVariantNumeric: "tabular-nums" }}>{filtered.length}</strong>{" "}
          {filtered.length === 1 ? "contract" : "contracts"}
          {isFiltered && (
            <>
              {" · "}
              <button
                type="button"
                className="link"
                onClick={() => {
                  setSector("all");
                  setQuery("");
                  updateUrl("all", "");
                }}
              >
                Reset filter
              </button>
            </>
          )}
        </span>
        <span>
          Filtered total <strong style={{ fontVariantNumeric: "tabular-nums" }}>{sumFormatted}</strong>
        </span>
      </div>

      <div className="table-wrap">
        <table className="data-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Contract Description</th>
              <th>Employer / Client</th>
              <th>Principal Agent / Consultant</th>
              <th>Duration</th>
              <th className="money">Contract Value</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  No contracts matched your current filter. Clear the search field or select All 25.
                </td>
              </tr>
            ) : (
              filtered.map((p) => (
                <tr key={p.num}>
                  <td className="num">{p.num}</td>
                  <td>
                    <strong>{p.name}</strong>
                  </td>
                  <td>{p.client}</td>
                  <td>{p.consultant}</td>
                  <td>{p.duration}</td>
                  <td className="money">{p.valueFmt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
