import type { Metadata } from "next";
import { AppLink } from "@/components/AppLink";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/Icons";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title:
    "M&M Engineering | Contracting, construction, civil engineering and management in Namibia",
  description:
    "M&M Engineering & Consultancy CC is a Windhoek-based contracting, construction, civil engineering and management company serving Namibia and Southern Africa.",
  alternates: { canonical: `${SITE.url}/` },
  openGraph: {
    title:
      "M&M Engineering | Contracting, construction, civil engineering and management in Namibia",
    description:
      "M&M Engineering & Consultancy CC is a Windhoek-based contracting, construction, civil engineering and management company serving Namibia and Southern Africa.",
    type: "website",
    url: `${SITE.url}/`,
    images: [{ url: SITE.ogImage }],
  },
};

export default function HomePage() {
  return (
    <>
      <div className="crosshair" aria-hidden="true">
        <div className="crosshair__dot" />
        <div className="crosshair__readout" />
      </div>

      <section data-sc-act="pin" data-sc-span="2.2" data-sc-drift="#FFFFFF">
        <div data-sc-stage data-sc-spotlight>
          <div data-sc-parallax="-0.45" className="hero-bed">
            <ResponsivePicture
              slug="hero-wide"
              alt="Construction site with tower crane and scaffolding at sunset"
              width={1360}
              height={768}
              sizes="100vw"
              priority
              has2400
            />
          </div>
          <div className="scrim-hero" aria-hidden="true" />
          <div className="sc-copy sc-copy--lead">
            <h1 className="sc-display sc-display--xl" data-sc-cue="0 0.72 0" data-sc-kinetic="lines">
              Built to keep Namibia moving.
            </h1>
            <p className="sc-body" data-sc-cue="0 0.72 0" style={{ marginTop: "var(--sc-4)" }}>
              {SITE.name} is a contracting, construction, civil engineering and management company
              undertaking the overall planning, coordination and control of projects across Namibia
              and Southern Africa.
            </p>
            <p className="status" data-sc-cue="0 0.72 0" style={{ marginTop: "var(--sc-5)" }}>
              <span>
                Est. <b>2013</b>
              </span>
              <span>
                Windhoek, <b>Namibia</b>
              </span>
              <span>
                Reg. <b>{SITE.reg}</b>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section data-sc-act="pin" data-sc-span="2.6" data-sc-drift="#F4F5F7">
        <div data-sc-stage className="who">
          <p className="who__line sc-display sc-display--lg" data-sc-cue="0 0.30 0">
            Contracting. Construction. Civil engineering. Management.
          </p>
          <p className="who__line sc-display sc-display--lg" data-sc-cue="0.26 0.58">
            Hospitals. Police stations. Clinics. Housing and bulk electrical networks.
          </p>
          <p className="who__line sc-display sc-display--lg" data-sc-cue="0.54 0.86">
            25 verified contracts totaling N$ 152.77 million across Namibia.
          </p>
          <p className="who__line sc-display sc-display--lg who__accent" data-sc-cue="0.84">
            Public sector and private. The standard does not change.
          </p>
        </div>
      </section>

      <section data-sc-act="pan" data-sc-span="3.6" data-sc-drift="#FFFFFF">
        <div data-sc-stage>
          <div className="rail" data-sc-pan="0.06">
            <div className="rail__lead">
              <p className="eyebrow">Disciplines</p>
              <h2 className="sc-display sc-display--md">Thirteen disciplines. One standard.</h2>
              <p className="sc-body">
                Proven engineering, technology and construction expertise tested across every corner
                of Namibia and SADC.
              </p>
            </div>

            <article className="disc">
              <div className="disc__media" data-sc-tilt="5">
                <ResponsivePicture
                  slug="switchgear"
                  alt="Switchgear cabinets in an industrial electrical control room"
                  width={1376}
                  height={768}
                  sizes="340px"
                />
              </div>
              <h3>Electrical Engineering</h3>
              <p>
                MV/LV switchgear, power distribution, lighting, generators, fire detection,
                PLC/SCADA and 10 kV instrumentation.
              </p>
            </article>

            <article className="disc">
              <div className="disc__media" data-sc-tilt="5">
                <ResponsivePicture
                  slug="fibre"
                  alt="Network cables plugged into a server rack"
                  width={1376}
                  height={768}
                  sizes="340px"
                />
              </div>
              <h3>Energy &amp; HV/Solar Systems</h3>
              <p>
                Solar PV, hybrid microgrids, hydrogen energy engineering, and grid-tied MV/LV
                electrical reticulation.
              </p>
            </article>

            <article className="disc">
              <div className="disc__media" data-sc-tilt="5">
                <ResponsivePicture
                  slug="telecom"
                  alt="Fibre-optic patch panel with neatly arranged cabling"
                  width={2048}
                  height={1152}
                  sizes="340px"
                />
              </div>
              <h3>Telecommunications &amp; IT</h3>
              <p>
                Carrier and campus fibre-optic networks, OTDR splicing, towers, equipment rooms and
                structured cabling.
              </p>
            </article>

            <article className="disc">
              <div className="disc__media" data-sc-tilt="5">
                <ResponsivePicture
                  slug="structural"
                  alt="Concrete building under construction against a bright sky"
                  width={1200}
                  height={686}
                  sizes="340px"
                />
              </div>
              <h3>Civil, Roads &amp; Rail</h3>
              <p>
                Buildings, reinforced concrete, structural steel, highways, earthworks, paving and
                railway corridor infrastructure.
              </p>
            </article>

            <article className="disc">
              <div className="disc__media" data-sc-tilt="5">
                <ResponsivePicture
                  slug="office"
                  alt="Modern office building exterior at dusk"
                  width={1376}
                  height={768}
                  sizes="340px"
                />
              </div>
              <h3>Mechanical, HVAC &amp; Mining</h3>
              <p>
                Static/rotary plant, process piping, commercial/hospital HVAC systems and mining
                infrastructure support.
              </p>
            </article>

            <article className="disc">
              <div className="disc__media" data-sc-tilt="5">
                <ResponsivePicture
                  slug="consult"
                  alt="Total station set up for surveying on a construction site"
                  width={1376}
                  height={768}
                  sizes="340px"
                />
              </div>
              <h3>Consultancy &amp; Management</h3>
              <p>
                Geological, architectural and independent consulting engineering for ministries,
                councils and developers.
              </p>
            </article>

            <div className="rail__note">
              <p className="sc-body">
                Each discipline stands alone, and each one holds up the others. Backed by owned
                cranes, 4x4 field trucks and 10 kV test gear.
              </p>
              <AppLink className="btn btn--ghost" href="/services">
                All 13 services <ArrowRightIcon />
              </AppLink>
            </div>
          </div>
        </div>
      </section>

      <section
        className="sc-section section--tight band--night band--blueprint"
        data-sc-act="flow"
        data-sc-drift="#101114"
      >
        <div className="wrap split">
          <div className="sc-stack" data-sc-in data-sc-stagger="70">
            <h2 className="sc-display sc-display--lg">The proof is in the paperwork.</h2>
            <p className="sc-body">
              Established in 2013 within the Africa School of Engineering and Technology network,
              M&amp;M operates out of Kleine Kuppe and Windhoek North across all regions of Namibia
              and SADC.
            </p>
            <p className="sc-body">
              Everything we build carries full statutory governance under the Labour Act (2007) and
              Government Notice No. 156, our registered tax standing and verifiable completion
              certificates.
            </p>
            <div className="facts" style={{ marginTop: "var(--sc-5)" }}>
              <div>
                <span className="n">
                  <span data-sc-count="0 2013">2013</span>
                </span>
                <span className="l">Year established</span>
              </div>
              <div>
                <span className="n">
                  <span data-sc-count="0 25">25</span>
                </span>
                <span className="l">Verified contracts</span>
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
                <span className="l">Tax identification</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: "var(--sc-3)" }}>
              <a className="btn btn--accent" href={SITE.pdfHref} download>
                Download Profile ({SITE.pdfSizeLabel})
              </a>
              <AppLink className="btn btn--ghost" href="/safety-policy">
                OHS Safety Policy
              </AppLink>
            </div>
          </div>
          <figure className="fig" data-sc-reveal="left" data-sc-reveal-at="0.18 0.62">
            <ResponsivePicture
              slug="macro-hat"
              alt="White hard hat and spirit level on a construction plan"
              width={1152}
              height={864}
              sizes="(min-width: 860px) 45vw, 100vw"
            />
            <figcaption>
              Signed construction drawings, OHS registers and 10 kV calibration records.
            </figcaption>
          </figure>
        </div>
        <div className="wrap" style={{ marginTop: "var(--sc-9)" }}>
          <p className="sc-body" data-sc-in style={{ maxWidth: "48ch" }}>
            Twenty-five completed contracts worth N$ 152,768,801.37 for Namibian ministries, town
            councils, UNAM, NAMCOL, NHE and MVA Fund.
          </p>
        </div>
      </section>

      <section data-sc-act="pin" data-sc-span="2.9" data-sc-drift="#FFFFFF">
        <div data-sc-stage data-sc-spotlight>
          <div data-sc-parallax="-0.5" className="hero-bed hero-bed--peak">
            <ResponsivePicture
              slug="team"
              alt="White hard hat and rolled drawings on the site plan table"
              width={2816}
              height={1584}
              sizes="100vw"
            />
          </div>
          <div className="scrim-peak" aria-hidden="true" />
          <div className="sc-copy sc-copy--trail peak-copy">
            <h2
              className="sc-display sc-display--xl"
              data-sc-cue="0.10 0.88"
              data-sc-kinetic="lines"
            >
              Own plant. Own test gear. One standard.
            </h2>
            <p
              className="sc-body"
              data-sc-cue="0.12 0.88"
              style={{ marginTop: "var(--sc-4)", maxWidth: "38ch" }}
            >
              MAN 4x4 crane truck, 14-ton stringing gear and Major Tech 10 kV testing fleet — ready
              24/7 across Namibia.
            </p>
          </div>
        </div>
      </section>

      <section
        id="start"
        className="band--night band--watermark"
        data-sc-act="pin"
        data-sc-span="1.2"
        data-sc-drift="#101114"
      >
        <div data-sc-stage className="close" data-sc-spotlight>
          <div className="close__inner">
            <h2 className="sc-display sc-display--lg" data-sc-cue="0.06" data-sc-kinetic="lines">
              Let&apos;s set it out.
            </h2>
            <p className="sc-body" data-sc-cue="0.10" style={{ maxWidth: "44ch" }}>
              Tell us what you are building. We will bring the plan, the crew, the fleet and the
              compliance pack.
            </p>
            <div className="close__channels" data-sc-cue="0.14">
              <AppLink
                className="btn btn--accent"
                href="/contact"
                data-sc-magnet="0.24"
                data-sc-rise="0"
              >
                Start a project
              </AppLink>
              <a className="btn btn--wa" href={SITE.whatsappHref} target="_blank" rel="noopener">
                <WhatsAppIcon /> WhatsApp
              </a>
              <AppLink className="btn btn--ghost" href="/profile">
                View 2026 Profile
              </AppLink>
            </div>
          </div>

          <footer className="foot">
            <div className="foot__grid">
              <AppLink
                className="foot__brand"
                href="/"
                style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
              >
                <img
                  src="/assets/brand/mm-logo-lockup-on-dark.svg"
                  alt="M&M Engineering Consultancy"
                  width={142}
                  height={34}
                />
              </AppLink>
              <p className="credit">
                <AppLink href="/projects">Projects</AppLink> &middot;{" "}
                <AppLink href="/safety-policy">Safety Policy</AppLink> &middot;{" "}
                <AppLink href="/profile">Profile PDF</AppLink> &middot; Website by{" "}
                <a href="https://studio.tangison.com" target="_blank" rel="noopener">
                  studio.tangison.com
                </a>
              </p>
              <p>
                &copy; 2013&ndash;<span data-year>2026</span> {SITE.name} &middot; Reg. {SITE.reg}
              </p>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
