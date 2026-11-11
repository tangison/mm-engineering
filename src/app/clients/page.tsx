import type { Metadata } from "next";
import { AppLink } from "@/components/AppLink";
import { ArrowRightIcon } from "@/components/Icons";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Clients & Partners | M&M Engineering",
  description:
    "Verified Namibian public employers, state enterprises, town councils and consulting partners across 25 completed contracts.",
  alternates: { canonical: `${SITE.url}/clients` },
  openGraph: {
    title: "Clients & Partners | M&M Engineering",
    description:
      "Verified Namibian public employers, state enterprises, town councils and consulting partners across 25 completed contracts.",
    type: "website",
    url: `${SITE.url}/clients`,
    images: [{ url: SITE.ogImage }],
  },
};

const CLIENTS = [
  {
    img: "/assets/clients/namibia-coat-of-arms.png",
    alt: "Republic of Namibia Coat of Arms",
    w: 120,
    h: 90,
    title: "Republic of Namibia",
    desc: "Ministries of Safety & Security, Works, Health & Social Services, Defence, Education, Trade & Agriculture.",
    compact: false,
  },
  {
    img: "/assets/clients/nampol.png",
    alt: "Namibian Police Force emblem",
    w: 90,
    h: 90,
    title: "Namibian Police Force (NAMPOL)",
    desc: "Police stations, barracks, charge offices and road works at Nyae Nyae, Nkurenkuru and Simanya.",
    compact: false,
  },
  {
    img: "/assets/clients/unam.png",
    alt: "University of Namibia logo",
    w: 150,
    h: 60,
    title: "University of Namibia (UNAM)",
    desc: "UNAM Clinic Main Campus delivery and institutional engineering works.",
    compact: false,
  },
  {
    img: "/assets/clients/namcol.png",
    alt: "NAMCOL logo",
    w: 140,
    h: 60,
    title: "NAMCOL",
    desc: "NAMCOL Centre Rundu Phase 2 construction plus regional HVAC and ventilation systems.",
    compact: false,
  },
  {
    img: "/assets/clients/mva-fund.png",
    alt: "MVA Fund Namibia logo",
    w: 150,
    h: 60,
    title: "MVA Fund Namibia",
    desc: "MVA Ongwediva Phase II electrical installation and distribution works.",
    compact: false,
  },
  {
    img: "/assets/clients/nhe.jpg",
    alt: "National Housing Enterprise logo",
    w: 140,
    h: 60,
    title: "National Housing Enterprise (NHE)",
    desc: "Construction of 63 houses and Kaisosi Rundu bulk electrical reticulation.",
    compact: false,
  },
  {
    img: "/assets/clients/ongwediva-town-council.png",
    alt: "Ongwediva Town Council coat of arms",
    w: 90,
    h: 90,
    title: "Ongwediva Town Council",
    desc: "Ongwediva Social Housing Phase II Centre on Erf 4797.",
    compact: false,
  },
  {
    img: "/assets/clients/oshakati-town-council.png",
    alt: "Oshakati Town Council emblem",
    w: 90,
    h: 90,
    title: "Oshakati Town Council",
    desc: "Bulk Electrical Services across Ekuku Township Phase 2.",
    compact: true,
  },
  {
    img: "/assets/clients/rundu-town-council.jpg",
    alt: "Rundu Town Council coat of arms",
    w: 120,
    h: 90,
    title: "Rundu Town Council",
    desc: "Kaisosi NHE Phase I mass housing and township electrical infrastructure.",
    compact: false,
  },
  {
    img: "/assets/clients/namibia-defence-force.png",
    alt: "Namibian Defence Force emblem",
    w: 120,
    h: 92,
    title: "Namibian Defence Force",
    desc: "New electrical reticulation across Nukwa Military Base in the Zambezi Region.",
    compact: false,
  },
  {
    img: "/assets/clients/mhss-namibia.jpg",
    alt: "Ministry of Health and Social Services emblem",
    w: 100,
    h: 100,
    title: "Ministry of Health",
    desc: "Hospital additions, HV cable works and HVAC across Rundu, Okakarara, Tsumeb & Okahandja.",
    compact: false,
  },
  {
    img: "/assets/clients/nida-ndc.png",
    alt: "NIDA and NDC logo",
    w: 140,
    h: 90,
    title: "NIDA / NDC",
    desc: "Omulunga Community Market (Onayena) and Ongenga Business Estate construction works.",
    compact: false,
  },
  {
    img: "/assets/clients/emcon.jpg",
    alt: "Emcon Consulting Group logo",
    w: 150,
    h: 60,
    title: "Emcon Consulting Group",
    desc: "Consulting electrical engineering partner on Rundu VTC and Nkurenkuru works.",
    compact: false,
  },
  {
    img: "/assets/clients/wml.jpg",
    alt: "WML Consulting Engineers logo",
    w: 150,
    h: 60,
    title: "WML Consulting Engineers",
    desc: "Consulting partner on Omusati Regional HQ low-voltage reticulation.",
    compact: false,
  },
  {
    img: "/assets/clients/aurecon.jpg",
    alt: "Aurecon Consultancy logo",
    w: 150,
    h: 60,
    title: "Aurecon Consultancy",
    desc: "Engineering partner on Simanya NAMPOL roads, walkways and accommodation.",
    compact: false,
  },
  {
    img: "/assets/clients/jacobs.png",
    alt: "Jacobs Engineering Consulting logo",
    w: 160,
    h: 44,
    title: "Jacobs Engineering Consulting",
    desc: "Consulting engineering partner on MVA Ongwediva Phase II electrical works.",
    compact: false,
  },
] as const;

export default function ClientsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <ResponsivePicture
            slug="stock-desert-road"
            alt="Desert road at sunset in Namibia"
            width={1400}
            height={816}
            sizes="100vw"
            priority
          />
        </div>
        <div className="page-hero__inner sc-stack" data-sc-in data-sc-stagger="70">
          <p className="eyebrow">Clients &amp; Partners &middot; Reg. {SITE.reg}</p>
          <h1 className="sc-display sc-display--xl">Trusted since 2013.</h1>
          <p className="sc-body lede">
            25 documented contracts executed across Namibia and Southern Africa for government
            ministries, town councils, state enterprises and tertiary institutions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap sc-stack" data-sc-in data-sc-stagger="70">
          <h2 className="sc-display sc-display--md">Who we work for</h2>
          <p className="sc-body">
            The continuity of our service agreements reflects practical site delivery across both
            public tenders and commercial contracts:
          </p>
          <div className="feature-grid" style={{ marginTop: "var(--sc-4)" }}>
            <div className="tile w6">
              <p className="idx">Public sector</p>
              <h3>Ministries &amp; public institutions</h3>
              <p>
                Infrastructure and building packages executed under formal tender governance and
                statutory OHS standards.
              </p>
            </div>
            <div className="tile w6">
              <p className="idx">Private sector</p>
              <h3>Developers &amp; private companies</h3>
              <p>
                Commercial, industrial and residential builds delivered from setting out through
                final handover.
              </p>
            </div>
            <div className="tile w6">
              <p className="idx">Regional</p>
              <h3>Namibia and Zimbabwe</h3>
              <p>
                Regional works coordinated out of our Kleine Kuppe and Windhoek North offices.
              </p>
            </div>
            <div className="tile w6">
              <p className="idx">International</p>
              <h3>Engineering partners</h3>
              <p>
                International firms seeking an experienced Namibian contracting and consulting
                partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap sc-stack" data-sc-in data-sc-stagger="60">
          <div>
            <p className="eyebrow">Public &amp; Institutional Record</p>
            <h2 className="sc-display sc-display--lg">
              Verified Employers &amp; Consulting Firms
            </h2>
            <p className="sc-body" style={{ maxWidth: "64ch", marginTop: "var(--sc-2)" }}>
              Every organisation below appears on our verified 25-contract register totaling{" "}
              <strong>N$ 152,768,801.37</strong>.
            </p>
          </div>

          <div className="client-grid" style={{ marginTop: "var(--sc-4)" }}>
            {CLIENTS.map((c) => (
              <div className="client-card" key={c.title}>
                <div
                  className={`client-card__logo${c.compact ? " client-card__logo--compact" : ""}`}
                >
                  <img src={c.img} alt={c.alt} width={c.w} height={c.h} loading="lazy" />
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--sc-surface)", borderBlock: "1px solid var(--sc-hairline)" }}
      >
        <div className="wrap sc-stack" data-sc-in data-sc-stagger="70">
          <h2 className="sc-display sc-display--md">
            Associated Architects, Quantity Surveyors &amp; Consultants
          </h2>
          <p className="sc-body" style={{ maxWidth: "68ch" }}>
            Every public contract runs alongside accredited independent professionals. Our completed
            schedules include projects delivered with:
          </p>
          <div className="svc-cols">
            <ul>
              <li>Barnard Mutua Architects</li>
              <li>Kondjeni Kandji Architects</li>
              <li>Kenny McNamara Architects</li>
              <li>Agustono Ferreira Architects</li>
              <li>Robert Lock Architect</li>
              <li>Richard Frankle &amp; Partners</li>
              <li>Conselect Engineering</li>
              <li>Consulting Services Africa</li>
            </ul>
            <ul>
              <li>V Fischer-Buder Consulting Engineers</li>
              <li>Emcon Consulting Engineers &amp; WML</li>
              <li>Aurecon Consultancy</li>
              <li>AIJ Consulting / AIJ Project Cost Consultants</li>
              <li>RFPQS Quantity Surveyors</li>
              <li>Jacobs Engineering Consulting CC</li>
              <li>Tangi Trading Enterprise CC &amp; NDC</li>
              <li>MAWF Technical Services</li>
            </ul>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: "var(--sc-2)" }}>
            <AppLink className="btn btn--accent" href="/projects">
              Inspect 25-Contract Schedule <ArrowRightIcon />
            </AppLink>
            <a className="btn btn--ghost" href={SITE.pdfHref} download>
              Download Company Profile (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="sc-stack" data-sc-in data-sc-stagger="70">
            <h2 className="sc-display sc-display--md">Regional presence &amp; training network</h2>
            <p className="sc-body">
              Established in 2013 within the{" "}
              <strong>Africa School of Engineering and Technology</strong> knowledge network, M&amp;M
              Engineering operates independently out of Windhoek with rapid deployment across
              Namibia and Southern Africa.
            </p>
            <p className="sc-body">
              Planning a tender, joint venture or sub-contracting package? Contact our Kleine Kuppe
              or Windhoek North offices directly.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <AppLink className="btn btn--accent" href="/contact">
                Start a project <ArrowRightIcon />
              </AppLink>
              <a className="btn btn--ghost" href={SITE.emailHref}>
                Email {SITE.email}
              </a>
            </div>
          </div>
          <div className="sc-stack" data-sc-in>
            <div className="tile" style={{ alignItems: "flex-start" }}>
              <p className="idx">Principal Practice</p>
              <h3 style={{ fontSize: "var(--sc-t-xl)", lineHeight: 1.15 }}>{SITE.name}</h3>
              <p>
                Close Corp Reg. {SITE.reg} &middot; Tax ID {SITE.taxId}
              </p>
            </div>
            <div className="tile" style={{ alignItems: "flex-start" }}>
              <p className="idx">Coverage</p>
              <h3 style={{ fontSize: "var(--sc-t-xl)", lineHeight: 1.15 }}>
                9+ Namibian Regions &amp; SADC
              </h3>
              <p>
                Khomas, Kavango East &amp; West, Oshana, Ohangwena, Oshikoto, Omusati, Zambezi,
                Otjozondjupa &amp; Kunene
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
