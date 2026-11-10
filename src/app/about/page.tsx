import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { COMPANY } from "@/data/company";
import { SubpageHero } from "@/components/SubpageHero";
import { Picture } from "@/components/Picture";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Registered Namibian civil, electrical and consulting engineering practice operating out of Windhoek since 2013 (Reg. CC/2013/6661).",
};

export default function AboutPage() {
  return (
    <>
      <main id="main" className="page-flow">
        <SubpageHero
          kicker={`About us · Reg. ${COMPANY.registration}`}
          title="Registered Namibian engineering and contracting since 2013"
          lead="M&M Engineering & Consultancy CC delivers public works, electrical reticulation and commercial builds across Namibia and Southern Africa."
          photoSlug="windhoek"
          photoAlt="Windhoek skyline and infrastructure corridor in Khomas Region"
        >
          <div className="btn-row">
            <Link className="btn btn--primary" href="/projects">
              View 25 contracts
            </Link>
            <a className="btn btn--secondary" href={COMPANY.profilePdfHref} download>
              Download profile ({COMPANY.profilePdfSize} PDF)
            </a>
          </div>
        </SubpageHero>

        <section className="section ground-surface">
          <div className="wrap grid grid--middle">
            <div className="span-6 stack-5">
              <h2>Who we are</h2>
              <p className="t-body">
                {COMPANY.name} (Registration {COMPANY.registration}, Tax ID {COMPANY.taxId})
                operates out of Windhoek from our head office on {COMPANY.headOffice.street} in{" "}
                {COMPANY.headOffice.district} and our operations desk at{" "}
                {COMPANY.operationsOffice.street} in {COMPANY.operationsOffice.district}. Since{" "}
                {COMPANY.founded} we have completed {COMPANY.totalContractsCount} documented contracts
                totaling {COMPANY.totalValueFormatted} for ministries, municipalities, tertiary
                institutions and state enterprises.
              </p>
              <p className="t-body">
                Our teams pair practical construction management with formal design coordination,
                working directly with independent architects, quantity surveyors and consulting
                engineers across {COMPANY.regions.join(", ")}.
              </p>
            </div>

            <div className="span-5 start-8 stack-4">
              <div className="card">
                <h3>Vision</h3>
                <p>{COMPANY.vision}</p>
              </div>
              <div className="card">
                <h3>Mission</h3>
                <p>{COMPANY.mission}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Operational standards and merits</h2>
              <p>Six principles governing tender delivery across Windhoek and remote regional sites.</p>
            </div>

            <div className="grid">
              {COMPANY.merits.map((m) => (
                <div key={m.title} className="card span-4">
                  <h3>{m.title}</h3>
                  <p>{m.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section ground-inverse">
          <div className="wrap grid grid--middle">
            <div className="span-6 stack-5">
              <h2>Corporate social responsibility and public affairs</h2>
              <p>
                With any company&apos;s success comes responsibility towards its surroundings and
                society. We structure each CSR programme from baseline analysis and local capacity
                building through transparent project delivery and post-completion review.
              </p>
              <ul className="rows">
                {COMPANY.csr.map((item) => (
                  <li key={item.title}>
                    <span className="rows__name">{item.title}</span>
                    <p>{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="span-5 start-8 stack-5">
              <div className="tile__media" style={{ borderRadius: "var(--r-lg)" }}>
                <Picture
                  bucket="photos"
                  slug="structural"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  alt="Reinforced concrete frame construction supervised by M&M site teams"
                />
              </div>
              <div className="card">
                <h3>Public liaison</h3>
                <ul className="checks">
                  {COMPANY.publicAffairs.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showClosingBand={false} />
    </>
  );
}
