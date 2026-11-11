import type { Metadata } from "next";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | M&M Engineering",
  description:
    "Privacy notice for mmengineeringcc.com operated by M&M Engineering & Consultancy CC, Windhoek.",
  alternates: { canonical: `${SITE.url}/privacy` },
  openGraph: {
    title: "Privacy Policy | M&M Engineering",
    description:
      "Privacy notice for mmengineeringcc.com operated by M&M Engineering & Consultancy CC, Windhoek.",
    type: "website",
    url: `${SITE.url}/privacy`,
    images: [{ url: SITE.ogImage }],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: "44svh" }}>
        <div className="page-hero__bg">
          <ResponsivePicture
            slug="office"
            alt="Modern office building exterior at dusk"
            width={1376}
            height={768}
            sizes="100vw"
            priority
          />
        </div>
        <div className="page-hero__inner sc-stack" data-sc-in data-sc-stagger="70">
          <p className="eyebrow">Legal</p>
          <h1 className="sc-display sc-display--xl">Privacy notice</h1>
          <p className="sc-body lede">
            Plain English about what this site collects, what it does not, and how to reach us.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap article" data-sc-in data-sc-stagger="60">
          <p className="article__meta">
            <span>Last updated: 9 November 2026</span>
            <span>Applies to mmengineeringcc.com</span>
          </p>
          <p>
            This website is operated by <strong>{SITE.name}</strong> (Registration{" "}
            <strong>{SITE.reg}</strong>, Tax ID <strong>{SITE.taxId}</strong>), with Head Office at{" "}
            {SITE.headOffice}, Namibia.
          </p>

          <h2>What this website collects</h2>
          <p>
            This site does not set advertising cookies, run third-party analytics or embed tracking
            pixels. Fonts, icons and scripts are hosted directly on our own origin.
          </p>

          <h2>When you contact us</h2>
          <p>
            If you contact M&amp;M Engineering by email (<strong>{SITE.email}</strong>), telephone (
            {SITE.phone}), WhatsApp ({SITE.whatsappDisplay}), WeChat or via our enquiry form, we use
            your contact details solely to respond to your enquiry, prepare tenders or perform
            contracted works.
          </p>

          <h2>Public register redactions</h2>
          <p>
            To protect stakeholder privacy, personal mobile phone numbers of individual project
            consultants and company banking details are excluded from public web pages and issued
            only inside authenticated tender correspondence.
          </p>

          <h2>Third-party services</h2>
          <p>
            The Contact page embeds an interactive OpenStreetMap frame to show Windhoek office
            locations. When you load that page, your browser fetches map tiles directly from
            OpenStreetMap.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of or deletion of any enquiry correspondence held
            by M&amp;M Engineering by emailing <a href={SITE.emailHref}>{SITE.email}</a> or writing
            to {SITE.postalAddress}, Namibia.
          </p>
        </div>
      </section>
    </>
  );
}
