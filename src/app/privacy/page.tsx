import type { Metadata } from "next";
import { COMPANY } from "@/data/company";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy notice for mmengineeringcc.com, operated by M&M Engineering & Consultancy CC (Reg. CC/2013/6661).",
};

export default function PrivacyPage() {
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
              <h1>Privacy notice</h1>
              <p className="t-lead">
                How mmengineeringcc.com handles technical enquiries, what this site stores, and how
                to contact our office.
              </p>
            </div>
          </div>
        </section>

        <section className="section ground-surface">
          <div className="wrap">
            <div className="article-body">
              <p>
                This website is operated by {COMPANY.name} (Registration {COMPANY.registration}, Tax
                ID {COMPANY.taxId}), with Head Office at {COMPANY.headOffice.street},{" "}
                {COMPANY.headOffice.district}, {COMPANY.headOffice.country}.
              </p>
              <section>
                <h2>What this website collects</h2>
                <p>
                  This website sets no advertising cookies, runs no third-party ad analytics and embeds
                  no tracking pixels. All web fonts, stylesheets, scripts and photography are served
                  directly from our own origin.
                </p>
              </section>
              <section>
                <h2>When you contact us</h2>
                <p>
                  If you contact {COMPANY.shortName} by email ({COMPANY.email}), telephone (
                  {COMPANY.phone}), WhatsApp ({COMPANY.whatsapp}), WeChat or via our tender brief
                  form, we use your details solely to answer your technical enquiry, prepare tenders
                  or deliver contracted works.
                </p>
              </section>
              <section>
                <h2>Public register redactions</h2>
                <p>
                  To protect stakeholder privacy, private contact numbers of individual project
                  consultants and corporate banking details are omitted from public web pages and
                  issued only inside authenticated tender documentation.
                </p>
              </section>
              <section>
                <h2>Your rights</h2>
                <p>
                  You may request access to, correction of or deletion of any enquiry correspondence
                  by writing to <a href={COMPANY.emailHref}>{COMPANY.email}</a> or{" "}
                  {COMPANY.headOffice.postal}.
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
