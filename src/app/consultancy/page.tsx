import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { COMPANY } from "@/data/company";
import { CONSULTANCY_SPECIALISTS } from "@/data/services";
import { SubpageHero } from "@/components/SubpageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Consultancy Firm",
  description:
    "Independent engineering, environmental impact assessment (EIA), tender management and HAZOP supervision for Namibian ministries, town councils and developers.",
};

export default function ConsultancyPage() {
  return (
    <>
      <main id="main" className="page-flow">
        <SubpageHero
          kicker="Consultancy Practice"
          title="Independent engineering judgement on your side of the table"
          lead="Providing engineering, scientific review, environmental impact assessment and construction supervision to governments, industries, developers and contractors."
          photoSlug="consult"
          photoAlt="Senior consulting engineer reviewing structural schematics and tender documentation"
        >
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">
              Request a proposal
            </Link>
            <a className="btn btn--secondary" href={COMPANY.profilePdfHref} download>
              Download profile ({COMPANY.profilePdfSize} PDF)
            </a>
          </div>
        </SubpageHero>

        <section className="section ground-surface">
          <div className="wrap grid">
            <div className="span-6 stack-4">
              <h2>Design, supervision and feasibility</h2>
              <p>
                Our consulting division designs and supervises infrastructure essential to
                Namibia&apos;s civic, social and industrial resilience. Commissions are delivered by
                multi-disciplinary teams combining engineers, technologists, quantity surveyors and
                environmental specialists under a dedicated project lead.
              </p>
            </div>
            <div className="span-6 stack-4">
              <div className="card">
                <h3>Environmental engineering</h3>
                <p>
                  Environmental Impact Assessments (EIAs), site remediation audits and sustainable
                  resource planning aligned with Namibian statutory frameworks.
                </p>
              </div>
              <div className="card">
                <h3>Strategic engineering &amp; tender advisory</h3>
                <p>
                  Competitive tender preparation, programme effectiveness evaluations, cost control
                  and regional joint-venture structuring.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Engineers, technologists and specialist disciplines</h2>
              <p>Every project pairs design verification with on-site commissioning control.</p>
            </div>
            <div className="grid">
              <div className="card span-6">
                <h3>Consulting engineers</h3>
                <p>
                  Covering civil, structural, electrical, mechanical and telecommunications design
                  coordination across ministries, municipal councils and commercial builds.
                </p>
              </div>
              <div className="card span-6">
                <h3>Engineering technologists</h3>
                <p>
                  Translating design schematics into working site installations, overseeing calibrated
                  10 kV / 1,000 V test protocols and handover dossiers.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "var(--s-6)" }}>
              <h3 style={{ marginBottom: "var(--s-4)" }}>The wider specialist bench</h3>
              <ul className="checks">
                {CONSULTANCY_SPECIALISTS.map((item) => (
                  <li key={item}>{item}</li>
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
