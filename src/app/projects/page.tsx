import type { Metadata } from "next";
import { COMPANY } from "@/data/company";
import { FEATURED_PROJECTS } from "@/data/projects";
import { SubpageHero } from "@/components/SubpageHero";
import { Picture } from "@/components/Picture";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "25 Verified Projects & Track Record",
  description:
    "25 documented public, institutional, electrical and civil contracts totaling N$ 152,768,801.37 delivered across Namibia.",
};

export default function ProjectsPage() {
  return (
    <>
      <main id="main" className="page-flow">
        <SubpageHero
          kicker={`Track Record · ${COMPANY.totalContractsCount} Documented Works`}
          title="25 verified contracts across Namibia"
          lead={`${COMPANY.totalValueFormatted} in completed hospitals, police stations, tertiary clinics, mass housing and township electrical infrastructure.`}
          photoSlug="site-crane"
          photoAlt="Reinforced concrete structure and tower crane on site"
        >
          <dl className="stats" style={{ marginTop: "var(--s-2)" }}>
            <div>
              <dt className="t-small muted">Verified contracts</dt>
              <dd className="t-stat">{COMPANY.totalContractsCount}</dd>
            </div>
            <div>
              <dt className="t-small muted">Total portfolio</dt>
              <dd className="t-stat">{COMPANY.totalValueShort}</dd>
            </div>
            <div>
              <dt className="t-small muted">Regions served</dt>
              <dd className="t-stat">10</dd>
            </div>
          </dl>
        </SubpageHero>

        <section className="section ground-surface">
          <div className="wrap">
            <div className="section-head">
              <h2>Key Namibian contracts</h2>
              <p>
                Delivered public buildings, tertiary clinics, correctional hospitals, mass housing
                and bulk electrical networks across ten Namibian regions.
              </p>
            </div>

            <div className="grid">
              {FEATURED_PROJECTS.map((proj) => (
                <article key={proj.title} className="tile span-4">
                  <div className="tile__media">
                    <Picture
                      bucket={proj.photoType === "project" ? "projects" : "photos"}
                      slug={proj.photoSlug}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                      alt={proj.alt}
                    />
                  </div>
                  <div className="tile__head">
                    <h3>{proj.title}</h3>
                    <span className="tile__price">{proj.value}</span>
                  </div>
                  <p className="tile__facts">
                    {proj.sectorLabel} · {proj.duration}
                  </p>
                  <p>
                    {proj.client} · {proj.consultant}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Complete 25-contract register</h2>
              <p>Filter by infrastructure sector or search by employer, town or consulting firm.</p>
            </div>
            <ProjectsExplorer />
          </div>
        </section>
      </main>
      <SiteFooter showClosingBand={false} />
    </>
  );
}
