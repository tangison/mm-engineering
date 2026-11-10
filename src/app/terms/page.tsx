import type { Metadata } from "next";
import { COMPANY } from "@/data/company";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for mmengineeringcc.com, operated by M&M Engineering & Consultancy CC under the laws of Namibia.",
};

export default function TermsPage() {
  return (
    <>
      <main id="main" className="page-flow">
        <section className="subhero">
          <div className="wrap">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="hero__kicker">
                <span className="dot" aria-hidden="true" />
                <span>Legal · Updated 9 November 2026</span>
              </p>
              <h1>Terms of use</h1>
              <p className="t-lead">
                Ground rules governing use of mmengineeringcc.com and published corporate tender
                material.
              </p>
            </div>
          </div>
        </section>

        <section className="section ground-surface">
          <div className="wrap">
            <div className="article-body">
              <p>
                By accessing this website you agree to these terms. The site is operated by{" "}
                {COMPANY.name} (Reg. {COMPANY.registration}, Tax ID {COMPANY.taxId}), Windhoek,
                Namibia.
              </p>
              <section>
                <h2>Information, not binding offer</h2>
                <p>
                  Content on this website provides general corporate information about our capability
                  divisions, contract track record, owned plant fleet and statutory safety policy.
                  Commercial engagements are governed strictly by separately signed tenders or
                  purchase orders.
                </p>
              </section>
              <section>
                <h2>Intellectual property</h2>
                <p>
                  The M&amp;M Engineering name, corporate emblem and original technical publications
                  belong to {COMPANY.name}. Client and institutional marks shown across our project
                  track record remain the property of their respective owners.
                </p>
              </section>
              <section>
                <h2>Website build credit</h2>
                <p>
                  This website was designed and built by{" "}
                  <a href={COMPANY.credit.href} target="_blank" rel="noopener noreferrer">
                    studio.tangison.com
                  </a>
                  .
                </p>
              </section>
              <section>
                <h2>Governing law</h2>
                <p>
                  These terms are governed by the laws of the Republic of Namibia, including the
                  Labour Act, 2007 and applicable engineering statutes. Enquiries:{" "}
                  <a href={COMPANY.emailHref}>{COMPANY.email}</a>, {COMPANY.headOffice.postal}.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showClosingBand={false} />
    </>
  );
}
