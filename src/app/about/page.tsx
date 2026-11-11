import type { Metadata } from "next";
import { AppLink } from "@/components/AppLink";
import { ArrowRightIcon } from "@/components/Icons";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us | M&M Engineering",
  description:
    "Registered Namibian engineering, construction and management firm (CC/2013/6661), operating from Kleine Kuppe and Windhoek North since 2013.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About Us | M&M Engineering",
    description:
      "Registered Namibian engineering, construction and management firm (CC/2013/6661), operating from Kleine Kuppe and Windhoek North since 2013.",
    type: "website",
    url: `${SITE.url}/about`,
    images: [{ url: SITE.ogImage }],
  },
};

export default function AboutPage() {
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
          <p className="eyebrow">About us &middot; Reg. {SITE.reg}</p>
          <h1 className="sc-display sc-display--xl">
            Registered Namibian engineering and contracting since 2013.
          </h1>
          <p className="sc-body lede">
            {SITE.name} delivers multi-disciplinary public works, electrical reticulation and
            commercial builds across Namibia and Southern Africa.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="sc-stack" data-sc-in data-sc-stagger="70">
            <h2 className="sc-display sc-display--md">Who we are</h2>
            <p className="sc-body">
              {SITE.name} (Registration <strong>{SITE.reg}</strong>, Tax ID{" "}
              <strong>{SITE.taxId}</strong>) operates out of Windhoek from our head office on Erf
              454 Rietfontein Street in Kleine Kuppe and our operations desk at 23 John Simms Street
              in Windhoek North. Since 2013 we have completed 25 documented projects totaling{" "}
              <strong>N$ 152,768,801.37</strong> for ministries, municipalities, tertiary
              institutions and state enterprises.
            </p>
            <p className="sc-body">
              Our teams pair practical construction management with formal design
              coordination—working seamlessly with independent architects, quantity surveyors and
              consulting engineers across Khomas, Kavango, Oshana, Ohangwena, Oshikoto, Omusati,
              Zambezi, Otjozondjupa and Kunene.
            </p>
          </div>
          <figure className="fig" data-sc-in>
            <ResponsivePicture
              slug="windhoek"
              alt="Tower crane over a building under construction against a blue sky"
              width={1600}
              height={1200}
              sizes="(min-width: 860px) 45vw, 100vw"
            />
            <figcaption>
              Windhoek, Namibia — Kleine Kuppe head office &amp; Windhoek North operations.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--sc-surface)", borderBlock: "1px solid var(--sc-hairline)" }}
      >
        <div className="wrap">
          <div className="feature-grid" data-sc-in data-sc-stagger="80">
            <div className="tile w7">
              <p className="idx">Vision</p>
              <h3>To provide engineering ingenuity and technical services.</h3>
            </div>
            <div className="tile w5">
              <p className="idx">Mission</p>
              <h3>
                To be the most sought-after provider of engineering and technical services for
                Namibia.
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="section band--night band--blueprint">
        <div className="wrap sc-stack" data-sc-in>
          <div className="facts" data-sc-stagger="60">
            <div>
              <span className="n">2013</span>
              <span className="l">Year established in Windhoek</span>
            </div>
            <div>
              <span className="n">25</span>
              <span className="l">Verified public &amp; civic contracts</span>
            </div>
            <div>
              <span className="n" style={{ fontSize: "var(--sc-t-lg)" }}>
                {SITE.reg}
              </span>
              <span className="l">Registration number</span>
            </div>
            <div>
              <span className="n" style={{ fontSize: "var(--sc-t-lg)" }}>
                {SITE.taxId}
              </span>
              <span className="l">Tax identification number</span>
            </div>
          </div>
          <div className="profile-cta" style={{ marginTop: "var(--sc-5)" }}>
            <div>
              <h3>2026 Company Profile &amp; OHS Policy Manual</h3>
              <p>
                Download our 15-page print-ready tender pack containing the 25-contract register,
                23-line owned equipment inventory, and Labour Act / GN 156 health and safety manual.
              </p>
            </div>
            <div className="profile-cta__actions">
              <a className="btn btn--accent" href={SITE.pdfHref} download>
                Download PDF ({SITE.pdfSizeLabel})
              </a>
              <AppLink className="btn btn--ghost" href="/profile">
                View Web Edition
              </AppLink>
              <AppLink className="btn btn--ghost" href="/safety-policy">
                Read OHS Policy
              </AppLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split split--rev">
          <div className="sc-stack" data-sc-in data-sc-stagger="70">
            <h2 className="sc-display sc-display--md">Our merits</h2>
            <div className="svc-cols" style={{ columns: 1 }}>
              <ul>
                <li>
                  <strong>Strict engineering ethics:</strong> Tailored solutions delivered to
                  statutory civil, electrical and building standards
                </li>
                <li>
                  <strong>Proactive scope value:</strong> Continuous search for opportunities and
                  durability upgrades beyond baseline objectives
                </li>
                <li>
                  <strong>Remote site readiness:</strong> Proven delivery from Kunene veterinary
                  posts to Zambezi defence reticulation
                </li>
                <li>
                  <strong>Cross-disciplinary delivery:</strong> Architects, quantity surveyors,
                  engineers and testing crews under unified programme control
                </li>
                <li>
                  <strong>Strategic consulting:</strong> Competitive tendering, PM effectiveness
                  audits, regional partnerships and Environmental Impact Assessments (EIAs)
                </li>
                <li>
                  <strong>24/7 dispatch:</strong> Dedicated Windhoek support for essential hospital,
                  power and municipal infrastructure
                </li>
              </ul>
            </div>
          </div>
          <figure className="fig" data-sc-in>
            <ResponsivePicture
              slug="structural"
              alt="Reinforced concrete columns, formwork and tower crane on a multi-storey site"
              width={1200}
              height={686}
              sizes="(min-width: 860px) 45vw, 100vw"
            />
            <figcaption>Reinforced concrete superstructure and structural works.</figcaption>
          </figure>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--sc-surface)", borderBlock: "1px solid var(--sc-hairline)" }}
      >
        <div className="wrap">
          <div className="sc-stack" data-sc-in data-sc-stagger="70" style={{ maxWidth: "70ch" }}>
            <h2 className="sc-display sc-display--md">Corporate social responsibility</h2>
            <p className="sc-body">
              With any company&apos;s success comes responsibility towards its surroundings and
              society. M&amp;M structures each phase of corporate social responsibility from
              baseline analysis, through strategy and capacity building, to transparent project
              selection and evaluation.
            </p>
          </div>
          <div
            className="feature-grid"
            style={{ marginTop: "var(--sc-6)" }}
            data-sc-in
            data-sc-stagger="80"
          >
            <div className="tile w4">
              <p className="idx">Strategy</p>
              <h3>CSR strategy preparation</h3>
              <p>Baseline analysis, strategy and capacity building grounded in local conditions.</p>
            </div>
            <div className="tile w4">
              <p className="idx">Delivery</p>
              <h3>CSR project management</h3>
              <p>Transparent processes, from selection through delivery to public reporting.</p>
            </div>
            <div className="tile w4">
              <p className="idx">Evaluation</p>
              <h3>CSR evaluation</h3>
              <p>Measured impact so community investment leaves lasting civic value.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="sc-stack" data-sc-in data-sc-stagger="70">
            <h2 className="sc-display sc-display--md">Public affairs</h2>
            <p className="sc-body">
              Public administration decisions carry major impact on infrastructure programmes.
              M&amp;M&apos;s specialists build informed opinions and constructive liaison at
              ministerial, regional council and local authority levels.
            </p>
          </div>
          <div className="sc-stack" data-sc-in data-sc-stagger="70">
            <div className="svc-cols" style={{ columns: 1 }}>
              <ul>
                <li>
                  Building relationships with public administration, local government and NGOs
                </li>
                <li>Support to investment and capital works programmes</li>
                <li>CSR recommendations and public reporting</li>
              </ul>
            </div>
            <AppLink className="btn btn--accent" style={{ alignSelf: "flex-start" }} href="/contact">
              Talk to us <ArrowRightIcon />
            </AppLink>
          </div>
        </div>
      </section>
    </>
  );
}
