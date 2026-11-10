import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { COMPANY } from "@/data/company";
import {
  ASSOCIATED_CONSULTANTS,
  CLIENT_PARTNERS,
  CLIENT_SECTORS,
} from "@/data/clients";
import { SubpageHero } from "@/components/SubpageHero";
import { Picture } from "@/components/Picture";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Clients & Partners",
  description:
    "16 institutional employers, ministries, town councils and independent consulting partners across Namibia and Southern Africa since 2013.",
};

export default function ClientsPage() {
  return (
    <>
      <main id="main" className="page-flow">
        <SubpageHero
          kicker={`Clients & Partners · Reg. ${COMPANY.registration}`}
          title="Trusted by public and institutional employers since 2013"
          lead="25 documented contracts executed across Namibia and Southern Africa for government ministries, town councils, state enterprises and tertiary institutions."
          photoSlug="structural"
          photoAlt="Institutional building works supervised by M&M Engineering crews"
        >
          <div className="btn-row">
            <Link className="btn btn--primary" href="/projects">
              Inspect 25-contract schedule
            </Link>
            <a className="btn btn--secondary" href={COMPANY.profilePdfHref} download>
              Download profile ({COMPANY.profilePdfSize} PDF)
            </a>
          </div>
        </SubpageHero>

        <section className="section ground-surface">
          <div className="wrap">
            <div className="section-head">
              <h2>Who we work for</h2>
              <p>Continuous service agreements across public tenders, municipal developments and commercial works.</p>
            </div>
            <div className="grid">
              {CLIENT_SECTORS.map((s) => (
                <div key={s.sector} className="card span-3">
                  <p className="t-label muted">{s.sector}</p>
                  <h3>{s.title}</h3>
                  <p>{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Verified employers and engineering partners</h2>
              <p>Every organisation below appears on our verified 25-contract register totaling {COMPANY.totalValueFormatted}.</p>
            </div>

            <div className="grid">
              {CLIENT_PARTNERS.map((partner) => (
                <div key={partner.slug} className="client-logo-card span-3">
                  <div className="client-logo-box">
                    <Picture
                      bucket="clients"
                      slug={partner.slug}
                      sizes="220px"
                      alt={`${partner.name} logo`}
                    />
                  </div>
                  <div className="stack-2">
                    <h4>{partner.name}</h4>
                    <p className="t-small muted">{partner.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section ground-surface">
          <div className="wrap grid grid--middle">
            <div className="span-6 stack-4">
              <h2>Associated architects, quantity surveyors and consultants</h2>
              <p>
                Every public contract runs alongside accredited independent professionals. Our
                completed project schedules include commissions delivered with these specialist firms.
              </p>
              <div className="btn-row" style={{ marginTop: "var(--s-2)" }}>
                <Link className="btn btn--primary" href="/contact">
                  Discuss a joint tender
                </Link>
              </div>
            </div>
            <div className="span-6">
              <ul className="checks cols-desktop-2">
                {ASSOCIATED_CONSULTANTS.map((c) => (
                  <li key={c} style={{ breakInside: "avoid", marginBottom: "var(--s-2)" }}>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showClosingBand={false} />
    </>
  );
}
