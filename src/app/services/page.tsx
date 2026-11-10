import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { COMPANY } from "@/data/company";
import {
  EPC_PILLARS,
  PLANT_FLEET,
  SCOPE_LISTS,
  THIRTEEN_DISCIPLINES,
} from "@/data/services";
import { SubpageHero } from "@/components/SubpageHero";
import { Picture } from "@/components/Picture";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Services & Plant",
  description:
    "Thirteen engineering disciplines backed by owned heavy crane transport, 4x4 field vehicles, 14-ton stringing gear and calibrated 10 kV testing equipment.",
};

export default function ServicesPage() {
  return (
    <>
      <main id="main" className="page-flow">
        <SubpageHero
          kicker="13 Integrated Disciplines"
          title="Everything from foundations to overhead lines"
          lead="Backed by our owned MAN 4x4 crane truck, utility fleet, 14-ton hydraulic tension stringing gear and calibrated 10 kV / 1,000 V testing instruments."
          photoSlug="switchgear"
          photoAlt="Electrical switchgear room and calibrated industrial distribution panels"
        >
          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">
              Request a tender quote
            </Link>
            <Link className="btn btn--secondary" href="/consultancy">
              Consultancy division
            </Link>
          </div>
        </SubpageHero>

        <section className="section ground-surface">
          <div className="wrap">
            <div className="section-head">
              <h2>Engineering, procurement and construction</h2>
              <p>Unified accountability across drawings, equipment staging and site build quality.</p>
            </div>
            <div className="grid">
              {EPC_PILLARS.map((p) => (
                <div key={p.step} className="card span-4">
                  <p className="t-label muted">{p.step}</p>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head section-head--row">
              <div>
                <h2>Thirteen engineering and contracting disciplines</h2>
                <p>Structured delivery across electrical power, civil engineering, telecoms, energy and plant.</p>
              </div>
              <a className="link" href={COMPANY.profilePdfHref} download>
                Full technical pack ({COMPANY.profilePdfSize} PDF)
              </a>
            </div>

            <div className="grid">
              {THIRTEEN_DISCIPLINES.map((d) => (
                <div key={d.id} className="card span-4">
                  <p className="t-label muted">{d.group}</p>
                  <h3>{d.name}</h3>
                  <p>{d.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section ground-surface">
          <div className="wrap grid grid--middle">
            <div className="span-6 stack-5">
              <h2>Scope across site packages</h2>
              <div className="stack-5">
                {SCOPE_LISTS.map((group) => (
                  <div key={group.title} className="stack-2">
                    <h3>{group.title}</h3>
                    <ul className="checks">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="span-5 start-8 stack-4">
              <div className="tile__media" style={{ borderRadius: "var(--r-lg)" }}>
                <Picture
                  bucket="photos"
                  slug="pipeline"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  alt="Process piping and civil reticulation infrastructure corridor"
                />
              </div>
              <div className="tile__media" style={{ borderRadius: "var(--r-lg)" }}>
                <Picture
                  bucket="photos"
                  slug="telecom"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  alt="Telecommunications cabinet and structural rack installation"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="plant">
          <div className="wrap">
            <div className="section-head">
              <h2>Owned vehicles, overhead stringing gear and test fleet</h2>
              <p>
                M&amp;M Engineering mobilises with owned heavy transport, field vehicles and calibrated
                testing instruments verified in our corporate asset register.
              </p>
            </div>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Equipment Description</th>
                    <th>Classification</th>
                    <th>VIN / Serial Reference</th>
                    <th>Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {PLANT_FLEET.map((item) => (
                    <tr key={`${item.description}-${item.reference}`}>
                      <td><strong>{item.description}</strong></td>
                      <td>{item.classification}</td>
                      <td className="num">{item.reference}</td>
                      <td className="num">{item.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showClosingBand={false} />
    </>
  );
}
