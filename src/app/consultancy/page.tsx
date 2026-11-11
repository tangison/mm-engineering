import type { Metadata } from "next";
import { AppLink } from "@/components/AppLink";
import { ArrowRightIcon } from "@/components/Icons";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Consultancy Firm | M&M Engineering",
  description:
    "Independent engineering, environmental impact, strategic construction consulting and multi-disciplinary project leadership in Windhoek, Namibia.",
  alternates: { canonical: `${SITE.url}/consultancy` },
  openGraph: {
    title: "Consultancy Firm | M&M Engineering",
    description:
      "Independent engineering, environmental impact, strategic construction consulting and multi-disciplinary project leadership in Windhoek, Namibia.",
    type: "website",
    url: `${SITE.url}/consultancy`,
    images: [{ url: SITE.ogImage }],
  },
};

export default function ConsultancyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <ResponsivePicture
            slug="consult"
            alt="Total station set up for surveying on a construction site"
            width={1376}
            height={768}
            sizes="100vw"
            priority
          />
        </div>
        <div className="page-hero__inner sc-stack" data-sc-in data-sc-stagger="70">
          <p className="eyebrow">Consultancy firm</p>
          <h1 className="sc-display sc-display--xl">
            Independent expertise, on your side of the table.
          </h1>
          <p className="sc-body lede">
            Professional consulting services providing independent expertise in engineering, science
            and related areas to governments, industries, developers and construction firms.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sc-stack" data-sc-in data-sc-stagger="70" style={{ maxWidth: "76ch" }}>
            <h2 className="sc-display sc-display--md">What our consulting does</h2>
            <p className="sc-body">
              Our consulting is a professional service providing independent expertise in
              engineering, science and related areas. Offered through our consulting engineering
              division, these teams design and supervise infrastructure vital to Namibia&apos;s
              social, economic and environmental quality of life.
            </p>
            <p className="sc-body">
              Projects are executed by multi-disciplinary teams combining engineers, technologists,
              quantity surveyors and environmental specialists under a dedicated professional team
              lead assembled from within our ranks.
            </p>
            <div className="svc-cols" style={{ columns: 1, marginTop: "var(--sc-4)" }}>
              <ul>
                <li>
                  <strong style={{ color: "var(--mm-ink)" }}>Environmental engineering.</strong>{" "}
                  Environmental impact assessments (EIAs), remediation and sustainable development
                </li>
                <li>
                  <strong style={{ color: "var(--mm-ink)" }}>
                    Strategic engineering, technology and construction consulting.
                  </strong>{" "}
                  Competitive tendering, project management effectiveness and evaluation, and
                  regional venture partnerships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--sc-surface)", borderBlock: "1px solid var(--sc-hairline)" }}
      >
        <div className="wrap">
          <div className="feature-grid" data-sc-in data-sc-stagger="80">
            <div className="tile w7">
              <p className="idx">Consulting engineers</p>
              <h3>Every discipline, one team</h3>
              <p>
                Our engineers cover every core specialty—supporting clients in scientific, design,
                coordination and project management roles across public and private commissions.
              </p>
            </div>
            <div className="tile w5">
              <p className="idx">Technologists</p>
              <h3>Implementation, close to the site</h3>
              <p>
                Engineering technologists translate design drawings into working
                infrastructure—managing calibration, testing and technical supervision alongside
                project engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="sc-stack" data-sc-in data-sc-stagger="70">
            <h2 className="sc-display sc-display--md">The wider team</h2>
            <p className="sc-body">
              Consulting commissions draw together specialist engineers, technologists, planners,
              CAD operators, surveyors, architects, environmental biologists, geoscientists,
              economists and construction managers.
            </p>
            <div className="svc-cols" style={{ columns: 1 }}>
              <ul>
                <li>Technical specialisation &amp; design review</li>
                <li>Business, financial and cost control expertise</li>
                <li>Construction knowledge and site supervision</li>
                <li>Managerial expertise &amp; programme scheduling</li>
                <li>Tender &amp; procurement advisory</li>
                <li>Dedicated project managers &amp; OHS officers</li>
              </ul>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <AppLink className="btn btn--accent" href="/contact">
                Request a proposal <ArrowRightIcon />
              </AppLink>
              <a className="btn btn--ghost" href={SITE.pdfHref} download>
                Company Profile (PDF)
              </a>
            </div>
          </div>
          <figure className="fig" data-sc-in>
            <ResponsivePicture
              slug="macro-hat"
              alt="White hard hat and spirit level on a construction plan"
              width={1152}
              height={864}
              sizes="(min-width: 860px) 45vw, 100vw"
            />
            <figcaption>Drawing-first engineering and verified handover documentation.</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
