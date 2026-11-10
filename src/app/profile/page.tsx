import type { Metadata } from "next";
import { COMPANY } from "@/data/company";
import { ProfileViewer } from "@/components/ProfileViewer";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Company Profile & OHS Policy Manual 2026",
  description:
    "M&M Engineering & Consultancy CC 15-page Company Profile, 25-contract register, equipment schedule, and OHS Policy Manual in responsive web and PDF editions.",
};

export default function ProfilePage() {
  return (
    <>
      <link rel="stylesheet" href="/profile.css" />
      <main id="main" className="page-flow">
        <section className="subhero">
          <div className="wrap">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <p className="hero__kicker">
                <span className="dot" aria-hidden="true" />
                <span>Tender Pre-Qualification &amp; Statutory Pack</span>
              </p>
              <h1>Company Profile &amp; OHS Policy Manual 2026</h1>
              <p className="t-lead">
                Inspect all 15 brochure spreads in readable web layout alongside the print-ready PDF
                · Reg. {COMPANY.registration} · {COMPANY.totalContractsCount} verified contracts (
                {COMPANY.totalValueFormatted}).
              </p>
            </div>
          </div>
        </section>

        <section className="section ground-surface">
          <div className="wrap">
            <ProfileViewer />
          </div>
        </section>
      </main>
      <SiteFooter showClosingBand={false} />
    </>
  );
}
