import { AppLink as Link } from "@/components/AppLink";
import { COMPANY } from "@/data/company";
import { CORE_DIVISIONS, THIRTEEN_DISCIPLINES } from "@/data/services";
import { FEATURED_PROJECTS } from "@/data/projects";
import { CLIENT_PARTNERS } from "@/data/clients";
import { Picture } from "@/components/Picture";
import { SiteFooter } from "@/components/SiteFooter";

const HOME_SERVICE_PEEK = [
  {
    key: "electrical",
    name: "Electrical Engineering & Solar Systems",
    value: "Up to 10 kV tested",
    detail:
      "MV/LV switchgear, township reticulation, standby generation and solar PV microgrids.",
    photo: "site-crane",
    alt: "Tower crane and concrete works supporting primary campus electrical substations",
  },
  {
    key: "civil",
    name: "Civil Structures, Hospitals & Police Works",
    value: "Design to handover",
    detail:
      "Reinforced concrete buildings, regional clinics, police barracks and mass housing.",
    photo: "structural",
    alt: "Multi-storey reinforced concrete structural engineering works on site",
  },
  {
    key: "roads",
    name: "Roads, Culverts & Water Reticulation",
    value: "10 Namibian regions",
    detail:
      "Paved municipal streets, box culverts, water pipelines, TSE mains and street lighting.",
    photo: "office",
    alt: "Windhoek civil and municipal engineering coordination drawings desk",
  },
  {
    key: "telecom",
    name: "Telecoms Fibre, HVAC & Consultancy",
    value: "OTDR & HAZOP",
    detail:
      "Optical fibre networks, hospital HVAC chillers, EIAs and statutory site supervision.",
    photo: "fibre",
    alt: "Terminated single-mode optical fibre patch enclosure in a utility room",
  },
] as const;

export default function HomePage() {
  const topProjects = FEATURED_PROJECTS.slice(0, 3);
  const keyPartners = CLIENT_PARTNERS.slice(0, 4);

  return (
    <>
      <main id="main">
        {/* Screen 1: Hero Split */}
        <section className="hero hero--split" data-enter="">
          <div className="wrap">
            <div className="hero-text grid hero-split">
              <div className="hero-copy span-6">
                <p className="hero-notice">
                  <b>Windhoek &amp; All Regions</b> · Registered {COMPANY.registration} since{" "}
                  {COMPANY.founded}
                </p>
                <h1>Civil and electrical engineering in Namibia</h1>
                <p className="hero__lead">
                  Contracting, construction and multidisciplinary engineering consultancy across{" "}
                  {THIRTEEN_DISCIPLINES.length} disciplines nationwide.
                </p>
                <div className="btn-row">
                  <Link className="btn btn--primary" href="/contact">
                    Request a quote
                  </Link>
                  <Link className="btn btn--secondary" href="/projects">
                    View 25 projects
                  </Link>
                </div>
                <dl className="hero-facts">
                  <div>
                    <dt>Registration</dt>
                    <dd>{COMPANY.registration}</dd>
                  </div>
                  <div>
                    <dt>Verified contracts</dt>
                    <dd>{COMPANY.totalValueShort}</dd>
                  </div>
                  <div>
                    <dt>Integrated trades</dt>
                    <dd>{COMPANY.disciplinesCount} disciplines</dd>
                  </div>
                </dl>
              </div>

              <div className="hero-visual frame frame--photo span-6 start-7">
                <Picture
                  bucket="photos"
                  slug="civil-roads"
                  minWidth={960}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  priority
                  alt="Civil engineering works, reinforced concrete culverts and structural construction in Namibia"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Screens 2-3: Pinned Chapters Moment — 4 Core Divisions */}
        <section
          className="section"
          id="divisions"
          style={{ "--h": 2 } as React.CSSProperties}
          data-moment="pinned-chapters"
        >
          <div className="wrap mo-pc__grid">
            <div className="mo-pc__text">
              <h2>4 engineering divisions across Namibia</h2>
              <ol className="mo-pc__steps">
                {CORE_DIVISIONS.map((div) => (
                  <li key={div.key} className="mo-pc__step">
                    <h3>{div.title} Engineering</h3>
                    <p>{div.summary}</p>
                    <figure className="mo-pc__visual">
                      <Picture
                        bucket="photos"
                        slug={div.photo}
                        minWidth={960}
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        alt={div.alt}
                      />
                    </figure>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mo-pc__visuals frame" />
          </div>
        </section>

        {/* Screen 4: Interactive Peek + Picture Develops Moment */}
        <section className="section ground-surface" id="services">
          <div className="wrap">
            <div className="section-head">
              <h2>13 integrated engineering services</h2>
              <p>
                One Windhoek contracting and consultancy desk covering all {THIRTEEN_DISCIPLINES.length}{" "}
                disciplines, mobilised with owned crane transport and 10 kV test gear.{" "}
                <Link className="link" href="/services">
                  All 13 services
                </Link>
              </p>
            </div>

            <div className="grid grid--middle fill" data-peek="">
              <ul className="rows span-6">
                {HOME_SERVICE_PEEK.map((row) => (
                  <li key={row.key} data-peek-to={row.key}>
                    <span className="rows__name">{row.name}</span>
                    <span className="rows__value">{row.value}</span>
                    <p>{row.detail}</p>
                  </li>
                ))}
              </ul>

              <figure
                className="frame frame--photo frame--develops span-6 start-7"
                data-moment="picture-develops"
              >
                {HOME_SERVICE_PEEK.map((row, idx) => (
                  <Picture
                    key={row.key}
                    bucket="photos"
                    slug={row.photo}
                    minWidth={960}
                    className="frame__img"
                    data-peek-for={row.key}
                    hidden={idx !== 0}
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    alt={row.alt}
                  />
                ))}
              </figure>
            </div>
          </div>
        </section>

        {/* Screen 5: Dark Architectural Band — Verified Public Contracts */}
        <section className="section ground-inverse" id="work">
          <div className="wrap">
            <div className="section-head">
              <h2>25 verified Namibia contracts</h2>
              <p>
                Completed hospitals, police barracks, mass housing and municipal electrical works.{" "}
                <Link className="link" href="/projects">
                  All 25 contracts
                </Link>
              </p>
            </div>

            <div className="grid">
              {topProjects.map((proj, idx) => (
                <Link key={proj.title} className="tile span-4" href="/projects">
                  <div className="tile__media m-zoom">
                    <Picture
                      bucket={proj.photoType === "project" ? "projects" : "photos"}
                      slug={proj.photoSlug}
                      sizes={
                        idx < 2
                          ? "(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 44vw"
                          : "(min-width: 1024px) 30vw, 100vw"
                      }
                      alt={proj.alt}
                    />
                  </div>
                  <div className="tile__head">
                    <h3>{proj.title}</h3>
                    <span className="tile__price">{proj.value}</span>
                  </div>
                  <p className="tile__facts">
                    {proj.client} · {proj.duration}
                  </p>
                  <p>{proj.consultant}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Screen 6: Institutional Employers, Owned Fleet & Safety */}
        <section className="section" id="clients">
          <div className="wrap">
            <div className="grid grid--middle fill">
              <div className="split-col span-5">
                <div className="section-head" style={{ marginBottom: 0 }}>
                  <h2>16 Namibian clients &amp; Windhoek plant fleet</h2>
                  <p>
                    Delivering public and commercial infrastructure under Namibia&apos;s Labour Act,
                    2007 and Government Notice No. 156 of 1992 alongside 16 institutional employers.
                  </p>
                </div>

                <div className="home-clients-strip">
                  {keyPartners.map((partner) => (
                    <div key={partner.slug} className="client-logo-box" title={partner.name}>
                      <Picture
                        bucket="clients"
                        slug={partner.slug}
                        sizes="180px"
                        alt={`${partner.name} emblem`}
                      />
                    </div>
                  ))}
                </div>

                <div className="btn-row split-col__end">
                  <Link className="btn btn--secondary" href="/clients">
                    16 client partners
                  </Link>
                  <Link className="link" href="/safety-policy">
                    Safety policy
                  </Link>
                </div>
              </div>

              <div className="span-6 start-7 stack-5">
                <figure className="frame frame--photo">
                  <Picture
                    bucket="photos"
                    slug="pipeline"
                    minWidth={960}
                    className="frame__img"
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    alt="Water bulk pipeline and municipal infrastructure delivery in Namibia"
                  />
                </figure>
                <div className="clients-pack">
                  <h3>2026 Company Profile &amp; Safety Pack</h3>
                  <p>
                    15-page pre-qualification dossier covering all 25 contracts, 19 plant assets and
                    Labour Act 2007 OHS compliance.
                  </p>
                  <div className="btn-row" style={{ marginTop: "var(--s-2)" }}>
                    <Link className="link" href="/profile">
                      Open web profile
                    </Link>
                    <a className="link" href={COMPANY.profilePdfHref} download>
                      Download PDF ({COMPANY.profilePdfSize})
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showClosingBand />
    </>
  );
}
