import type { Metadata } from "next";
import { ProjectsRegister } from "@/components/ProjectsRegister";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "25 Verified Projects & Track Record | M&M Engineering",
  description:
    "25 documented public, institutional, electrical and civil contracts totaling N$ 152,768,801.37 delivered across Namibia.",
  alternates: { canonical: `${SITE.url}/projects` },
  openGraph: {
    title: "25 Verified Projects & Track Record | M&M Engineering",
    description:
      "25 documented public, institutional, electrical and civil contracts totaling N$ 152,768,801.37 delivered across Namibia.",
    type: "website",
    url: `${SITE.url}/projects`,
    images: [{ url: SITE.ogImage }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
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
          <p className="eyebrow">Track Record &middot; Reg. {SITE.reg}</p>
          <h1 className="sc-display sc-display--xl">25 Verified Contracts Across Namibia.</h1>
          <p className="sc-body lede">
            N$ 152,768,801.37 in delivered hospitals, police stations, tertiary clinics, mass
            housing and township electrical infrastructure.
          </p>
        </div>
      </section>

      <section className="section section--tight band--night band--blueprint">
        <div className="wrap">
          <div className="facts" data-sc-in data-sc-stagger="60">
            <div>
              <span className="n">25</span>
              <span className="l">Documented contracts</span>
            </div>
            <div>
              <span className="n" style={{ fontSize: "var(--sc-t-xl)" }}>
                N$ 152.77M
              </span>
              <span className="l">Cumulative verified value</span>
            </div>
            <div>
              <span className="n">9+</span>
              <span className="l">Namibian regions covered</span>
            </div>
            <div>
              <span className="n">15+</span>
              <span className="l">Partner consultants &amp; architects</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sc-stack" data-sc-in style={{ marginBottom: "var(--sc-6)" }}>
            <p className="eyebrow">Selected Works</p>
            <h2 className="sc-display sc-display--lg">Key Namibian Contracts</h2>
            <p className="sc-body" style={{ maxWidth: "62ch" }}>
              Delivered public buildings, tertiary clinics, correctional hospitals, mass housing and
              bulk electrical networks across nine Namibian regions.
            </p>
          </div>

          <div className="feature-grid" data-sc-in data-sc-stagger="70">
            <div className="tile tile--media w7">
              <img
                src="/assets/projects/unam-main-campus.jpg"
                alt="University of Namibia Main Campus Windhoek"
                width={1200}
                height={750}
                loading="lazy"
              />
              <div className="tile__body">
                <p className="idx">Tertiary Health</p>
                <h3>UNAM Clinic Main Campus &amp; Ongwediva Facilities</h3>
                <p>
                  University of Namibia (UNAM) &middot; Agustono Ferreira Architects &middot; 12
                  Months &middot; <strong>N$ 8,000,000.00</strong>
                </p>
              </div>
            </div>
            <div className="tile tile--media w5">
              <img
                src="/assets/projects/namibia-police-station.jpg"
                alt="Namibian Police station masonry and perimeter works under construction"
                width={600}
                height={381}
                loading="lazy"
              />
              <div className="tile__body">
                <p className="idx">Defence &amp; Police</p>
                <h3>Nyae Nyae Police Station and Barracks</h3>
                <p>
                  Ministry of Safety &amp; Security / Works &middot; Kondjeni Kandji Architects
                  &middot; 24 Months &middot; <strong>N$ 43,000,000.00</strong>
                </p>
              </div>
            </div>

            <div className="tile tile--media w5">
              <img
                src="/assets/projects/oshakati-civic.jpg"
                alt="Oshakati Civic municipal headquarters"
                width={1200}
                height={750}
                loading="lazy"
              />
              <div className="tile__body">
                <p className="idx">Municipal Power</p>
                <h3>Ekuku Township Phase 2 Bulk Electricals</h3>
                <p>
                  Oshakati Town Council &middot; Consulting Services Africa &middot; 8 Months
                  &middot; <strong>N$ 13,608,000.00</strong>
                </p>
              </div>
            </div>
            <div className="tile tile--media w7">
              <img
                src="/assets/projects/namibia-nhe-housing.jpg"
                alt="Mass masonry housing estate construction at Kaisosi, Rundu"
                width={1200}
                height={784}
                loading="lazy"
              />
              <div className="tile__body">
                <p className="idx">Mass Housing</p>
                <h3>63 Houses &amp; Bulk Electricals at Kaisosi Rundu (NHE)</h3>
                <p>
                  Rundu Town Council / NHE &middot; AIJ Project Cost Consultants &middot; 24 Months
                  &middot; <strong>N$ 30,445,350.00 combined</strong>
                </p>
              </div>
            </div>

            <div className="tile tile--media w6">
              <img
                src="/assets/projects/namibia-civic-courtyard.jpg"
                alt="Completed masonry civic courtyard with ventilated breeze screen"
                width={690}
                height={460}
                loading="lazy"
              />
              <div className="tile__body">
                <p className="idx">Health &amp; Correctional</p>
                <h3>Divundu Correctional Facility Hospital &amp; Programme Areas</h3>
                <p>
                  Ministry of Safety &amp; Security / Works &middot; Barnard Mutua Architects
                  &middot; 18 Months &middot; <strong>N$ 13,000,000.00</strong>
                </p>
              </div>
            </div>
            <div className="tile tile--media w6">
              <img
                src="/assets/projects/ongwediva-civic.jpg"
                alt="Ongwediva Town civic precinct"
                width={1200}
                height={750}
                loading="lazy"
              />
              <div className="tile__body">
                <p className="idx">Civic Social Housing</p>
                <h3>Ongwediva Social Housing Phase II (Erf 4797)</h3>
                <p>
                  Ongwediva Town Council &middot; AIJ Consulting &middot; 12 Months &middot;{" "}
                  <strong>N$ 3,400,000.00</strong>
                </p>
              </div>
            </div>

            <div className="tile tile--media w4">
              <img
                src="/assets/projects/unam-hp-ongwediva.jpg"
                alt="UNAM campus grounds in northern Namibia"
                width={1200}
                height={750}
                loading="lazy"
              />
              <div className="tile__body">
                <p className="idx">Vocational &amp; Campus</p>
                <h3>Rundu VTC Electricals</h3>
                <p>
                  Ministry of Education &middot; Emcon Consulting Engineers &middot;{" "}
                  <strong>N$ 4,183,637.10</strong>
                </p>
              </div>
            </div>
            <div className="tile tile--media w4">
              <ResponsivePicture
                slug="electrical"
                alt="Electrical control panels in an industrial substation"
                width={2048}
                height={1152}
                sizes="(min-width: 860px) 33vw, 100vw"
              />
              <div className="tile__body">
                <p className="idx">Reticulation</p>
                <h3>Nukwa Military Base &amp; Omusati HQ</h3>
                <p>
                  Ministry of Defence &amp; MAWF &middot; V Fischer-Buder / WML &middot;{" "}
                  <strong>N$ 5,568,235.00 combined</strong>
                </p>
              </div>
            </div>
            <div className="tile tile--media w4">
              <img
                src="/assets/projects/unam-khomasdal.jpg"
                alt="Institutional building facade in Namibia"
                width={1200}
                height={750}
                loading="lazy"
              />
              <div className="tile__body">
                <p className="idx">Regional Health</p>
                <h3>Regional Hospital Additions &amp; HV</h3>
                <p>
                  Rundu, Okakarara, Tsumeb &amp; Okahandja Hospitals &middot;{" "}
                  <strong>N$ 7.46M combined</strong>
                </p>
              </div>
            </div>

            <div className="tile tile--media w4">
              <ResponsivePicture
                slug="switchgear"
                alt="Switchgear installation inside a regional substation"
                width={1376}
                height={768}
                sizes="(min-width: 860px) 33vw, 100vw"
              />
              <div className="tile__body">
                <p className="idx">Police Infrastructure</p>
                <h3>Nkurenkuru Police Station &amp; Sub-Regional Office</h3>
                <p>
                  NAMPOL &middot; Robert Lock Architect / Emcon &middot;{" "}
                  <strong>N$ 4,310,514.95 combined</strong>
                </p>
              </div>
            </div>
            <div className="tile tile--media w4">
              <img
                src="/assets/projects/namibia-roads-culvert.jpg"
                alt="Namibian road corridor and concrete culvert works under construction"
                width={700}
                height={467}
                loading="lazy"
              />
              <div className="tile__body">
                <p className="idx">Roads &amp; Police Civils</p>
                <h3>Simanya Charge Office, Accommodation &amp; Roads</h3>
                <p>
                  NAMPOL &middot; Aurecon Consultancy &middot; <strong>N$ 4,843,162.03</strong>
                </p>
              </div>
            </div>
            <div className="tile tile--media w4">
              <ResponsivePicture
                slug="civil-roads"
                alt="Surfaced and graded regional corridor across Namibia"
                width={960}
                height={1280}
                sizes="(min-width: 860px) 33vw, 100vw"
              />
              <div className="tile__body">
                <p className="idx">Enterprise &amp; Trade</p>
                <h3>Omulunga Market &amp; Ongenga Business Estate</h3>
                <p>
                  NDC &amp; Trade Ministry &middot; Conselect Engineering &middot;{" "}
                  <strong>N$ 2,876,707.49</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="register"
        className="section"
        style={{ background: "var(--sc-surface)", borderBlock: "1px solid var(--sc-hairline)" }}
      >
        <ProjectsRegister />
      </section>
    </>
  );
}
