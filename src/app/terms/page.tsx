import type { Metadata } from "next";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use | M&M Engineering",
  description:
    "Terms of use for mmengineeringcc.com operated by M&M Engineering & Consultancy CC (CC/2013/6661).",
  alternates: { canonical: `${SITE.url}/terms` },
  openGraph: {
    title: "Terms of Use | M&M Engineering",
    description:
      "Terms of use for mmengineeringcc.com operated by M&M Engineering & Consultancy CC (CC/2013/6661).",
    type: "website",
    url: `${SITE.url}/terms`,
    images: [{ url: SITE.ogImage }],
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero" style={{ minHeight: "44svh" }}>
        <div className="page-hero__bg">
          <ResponsivePicture
            slug="structural"
            alt="Concrete building under construction against a bright sky"
            width={1200}
            height={686}
            sizes="100vw"
            priority
          />
        </div>
        <div className="page-hero__inner sc-stack" data-sc-in data-sc-stagger="70">
          <p className="eyebrow">Legal</p>
          <h1 className="sc-display sc-display--xl">Terms of use</h1>
          <p className="sc-body lede">The ground rules for using this website.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap article" data-sc-in data-sc-stagger="60">
          <p className="article__meta">
            <span>Last updated: 9 November 2026</span>
            <span>Applies to mmengineeringcc.com</span>
          </p>
          <p>
            By using this website you accept these terms. The site is operated by{" "}
            <strong>{SITE.name}</strong> (Reg. <strong>{SITE.reg}</strong>, Tax ID{" "}
            <strong>{SITE.taxId}</strong>), Windhoek, Namibia.
          </p>

          <h2>Information, not advice</h2>
          <p>
            Content on this website is general information about our capabilities, project track
            record, fleet and statutory safety policy. It does not form a binding tender offer or
            project-specific engineering advice. Any commercial engagement is governed by a
            separately signed contract or purchase order.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The M&amp;M Engineering name, shield logo and original publications belong to{" "}
            {SITE.name} or its licensors. Client and institutional marks shown in our track record
            belong to their respective owners and appear strictly to reflect documented contracts.
          </p>

          <h2>Website credit</h2>
          <p>
            This website was designed and built by{" "}
            <a href="https://studio.tangison.com" target="_blank" rel="noopener">
              studio.tangison.com
            </a>
            .
          </p>

          <h2>Availability &amp; links</h2>
          <p>
            We work to keep specifications, fleet schedules and track record tables current, though
            details may be updated without notice. External links (maps, WhatsApp) remain subject to
            those providers&apos; terms.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the Republic of Namibia, including the Labour
            Act, 2007 and applicable statutory engineering regulations. Enquiries:{" "}
            <a href={SITE.emailHref}>{SITE.email}</a>, {SITE.postalAddress}, Namibia.
          </p>
        </div>
      </section>
    </>
  );
}
