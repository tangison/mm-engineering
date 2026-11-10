import type { Metadata } from "next";
import { AppLink as Link } from "@/components/AppLink";
import { COMPANY } from "@/data/company";
import { SAFETY_POLICY } from "@/data/safety";
import { SubpageHero } from "@/components/SubpageHero";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Health & Safety Policy",
  description:
    "Zero-LTI occupational health and safety discipline built on Namibia's Labour Act, 2007 and Government Notice No. 156 of 1992.",
};

export default function SafetyPolicyPage() {
  return (
    <>
      <main id="main" className="page-flow">
        <SubpageHero
          kicker="Occupational Health & Safety Policy"
          title="Zero-LTI site discipline built on Namibian law"
          lead="Governing every M&M Engineering office, depot and active construction site under the Labour Act, 2007 and Government Notice No. 156 of 1992."
          photoSlug="team"
          photoAlt="Site engineering personnel wearing compliant high-visibility safety gear and hard hats"
        >
          <div className="btn-row">
            <a className="btn btn--primary" href={COMPANY.profilePdfHref} download>
              Download full policy pack ({COMPANY.profilePdfSize} PDF)
            </a>
            <Link className="btn btn--secondary" href="/contact">
              Contact safety desk
            </Link>
          </div>
        </SubpageHero>

        <section className="section ground-surface">
          <div className="wrap grid">
            <div className="span-6 stack-5">
              <h2>Statutory framework and general statement</h2>
              <p>{SAFETY_POLICY.legislation}</p>
              <ul className="checks">
                {SAFETY_POLICY.generalStatements.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="span-6 stack-4">
              <h2>Organisation and governance</h2>
              <ul className="rows">
                {SAFETY_POLICY.governance.map((g) => (
                  <li key={g.role}>
                    <span className="rows__name">{g.role}</span>
                    <p>{g.duty}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Five-tier risk hierarchy and stop-work authority</h2>
              <p>{SAFETY_POLICY.stopWorkRule}</p>
            </div>

            <div className="grid">
              {SAFETY_POLICY.riskHierarchy.map((tier) => (
                <div key={tier.tier} className="card span-4">
                  <h3>{tier.tier}</h3>
                  <p>{tier.detail}</p>
                </div>
              ))}
              <div className="card span-4 ground-surface">
                <h3>No cost guarantee</h3>
                <p>{SAFETY_POLICY.noCostGuarantee}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section ground-surface">
          <div className="wrap">
            <div className="section-head">
              <h2>Site operational safety controls</h2>
              <p>Mandated procedures enforced across fire safety, LOTO electrical isolation, lifting plant, COSHH and site welfare.</p>
            </div>
            <div className="grid">
              {SAFETY_POLICY.controls.map((c) => (
                <div key={c.title} className="card span-6">
                  <h3>{c.title}</h3>
                  <ul className="checks">
                    {c.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Appendix 1 · Site notice board register</h2>
              <p>Completed and displayed on every active M&amp;M Engineering construction notice board prior to site handover.</p>
            </div>
            <div className="table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Statutory Safety Role</th>
                    <th>Designated Personnel Slots</th>
                    <th>Posting Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {SAFETY_POLICY.appendix1.map((row) => (
                    <tr key={row.role}>
                      <td><strong>{row.role}</strong></td>
                      <td>{row.slots}</td>
                      <td>{row.posting}</td>
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
