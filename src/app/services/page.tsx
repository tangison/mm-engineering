import type { Metadata } from "next";
import { AppLink } from "@/components/AppLink";
import { ArrowRightIcon } from "@/components/Icons";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Services & Plant | M&M Engineering",
  description:
    "13 engineering, construction, electrical, solar/hydrogen, civil, rail and consultancy disciplines supported by owned crane trucks and 10 kV testing fleet.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Services & Plant | M&M Engineering",
    description:
      "13 engineering, construction, electrical, solar/hydrogen, civil, rail and consultancy disciplines supported by owned crane trucks and 10 kV testing fleet.",
    type: "website",
    url: `${SITE.url}/services`,
    images: [{ url: SITE.ogImage }],
  },
};

const EQUIPMENT_ROWS = [
  ["2014 MAN TGM 18.240 Crane Truck (4x4 – 8 Ton)", "Heavy Load Vehicle", "AHTH8CB003590536", "1"],
  ["2016 Toyota Hilux GD-6 2.8 4x4", "Light Load Vehicle", "AAMN640562PX31209", "1"],
  ["2016 Nissan NP300", "Light Load Vehicle", "Fleet Registry Verified", "1"],
  ["14 Ton Hydraulic Tension Stringing Equipment", "Overhead Powerline Equipment", "–", "2 Sets"],
  ["Run Out Pulleys", "Overhead Powerline Equipment", "–", "10"],
  ["Chain Block 2 Ton", "Overhead Powerline Equipment", "–", "5"],
  ["Cable Drum Stand", "Overhead Powerline Equipment", "–", "2"],
  ["Clamping Shoes", "Overhead Powerline Equipment", "–", "6 Pairs"],
  [
    "Major Tech High Voltage Insulation Tester 10,000V (K3123A)",
    "HV Testing Equipment",
    "#7029346",
    "2",
  ],
  ["Hellermann Tyton T1825 Loop / PSC / Load Tester (1000V)", "Testing Equipment", "1851635", "5"],
  ["Fluke 1000V AC/DC Clamp Meter", "Testing Equipment", "16739867", "4"],
  ["Major Tech Phase Rotation Meter (8031F, 600V)", "Testing Equipment", "15638903", "3"],
  [
    "Major Tech K4105A Digital Earth Resistance Tester (2000 Ohm / 2mA)",
    "Testing Equipment",
    "1941723",
    "3",
  ],
  ["Major Tech TEL1TLB Polarity Tester (500mA)", "Testing Equipment", "1734468", "4"],
  ["Hellermann Analog Insulation Tester (100V)", "Testing Equipment", "19234879", "2"],
  ["Honda Generator 6kVA / 12000W", "Power Plant", "–", "3"],
  ["Hilti Jack Hammer & Hydraulic Crimping Tools", "Power / Hydraulic Tools", "–", "2 / 3"],
  ["Makita 1250W Drills & Bosch 720W Angle Grinders", "Power Tools", "–", "6 / 5"],
  [
    "Gedore Master Tool Boxes, Measuring Wheels & Extension Ladders",
    "Hand, Survey & Access Gear",
    "–",
    "4 / 3 / 4",
  ],
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <ResponsivePicture
            slug="switchgear"
            alt="Switchgear cabinets in an industrial electrical control room"
            width={1376}
            height={768}
            sizes="100vw"
            priority
          />
        </div>
        <div className="page-hero__inner sc-stack" data-sc-in data-sc-stagger="70">
          <p className="eyebrow">13 Integrated Disciplines</p>
          <h1 className="sc-display sc-display--xl">
            Everything from the ground up. And the wires above it.
          </h1>
          <p className="sc-body lede">
            Backed by our owned MAN crane truck, 4x4 field vehicles, 14-ton stringing gear and
            calibrated 10 kV / 1,000 V testing instruments.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="feature-grid" data-sc-in data-sc-stagger="80">
            <div className="tile w4">
              <p className="idx">Engineering</p>
              <h3>Design managed to the letter</h3>
              <p>
                A qualified technical team manages the requirements and performance of design
                sub-contractors, including HAZOP and statutory testing.
              </p>
            </div>
            <div className="tile w4">
              <p className="idx">Procurement</p>
              <h3>Bought right, on time</h3>
              <p>
                Our procurement desk has extensive experience managing purchasing and logistics for
                large EPIC contracts.
              </p>
            </div>
            <div className="tile w4">
              <p className="idx">Construction</p>
              <h3>Built to international standards</h3>
              <p>
                Our construction teams execute complex public, commercial and remote regional works
                to international contracting standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sc-stack" data-sc-in style={{ marginBottom: "var(--sc-6)" }}>
            <p className="eyebrow">Capability Matrix</p>
            <h2 className="sc-display sc-display--lg">Thirteen Service Disciplines</h2>
          </div>
          <div className="svc-grid" data-sc-in data-sc-stagger="45">
            <div className="tile">
              <p className="idx">Power &amp; E&amp;I</p>
              <h3>Electrical Engineering</h3>
              <p>
                HV/MV switchgear, transformer substations, power reticulation, lighting, backup
                generators, PLC/SCADA, fire detection and instrumentation.
              </p>
            </div>
            <div className="tile">
              <p className="idx">Structural Civils</p>
              <h3>Civil Engineering</h3>
              <p>
                Underground and elevated concrete structures, silos, cooling towers, precast
                concrete, pipe racks, culverts, structural steel and industrial buildings.
              </p>
            </div>
            <div className="tile">
              <p className="idx">Telecoms &amp; Fibre</p>
              <h3>Telecommunications</h3>
              <p>
                Carrier and campus fibre-optic backbones, splicing and OTDR testing, lattice towers,
                equipment shelters and structured network cabling.
              </p>
            </div>
            <div className="tile">
              <p className="idx">Mining Support</p>
              <h3>Mining Engineering</h3>
              <p>
                Surface and underground mine infrastructure support, plant electrical reticulation,
                earthworks and utility civil packages.
              </p>
            </div>
            <div className="tile">
              <p className="idx">Digital &amp; IT</p>
              <h3>Information Technology</h3>
              <p>
                Enterprise data networks, active telemetry, security and building management
                integration, and institutional IT infrastructure.
              </p>
            </div>
            <div className="tile">
              <p className="idx">Clean Energy</p>
              <h3>Energy Services (Solar / Hydrogen)</h3>
              <p>
                Grid-tied solar PV, hybrid microgrids, clean-energy substations and hydrogen-ready
                energy installations — design through construction.
              </p>
            </div>
            <div className="tile">
              <p className="idx">Plant &amp; HVAC</p>
              <h3>Mechanical Engineering</h3>
              <p>
                Static and rotary plant installation, process piping, fire-fighting networks, pipe
                gantries, cranes, HVAC, insulation and scaffolding.
              </p>
            </div>
            <div className="tile">
              <p className="idx">Roads &amp; Bridges</p>
              <h3>Road Construction &amp; Highways</h3>
              <p>
                Highways, paved urban roads, bridges, underpasses, major earthworks, street
                lighting, traffic signalisation and TSE pipelines.
              </p>
            </div>
            <div className="tile">
              <p className="idx">Geotechnical</p>
              <h3>Geological Services</h3>
              <p>
                Geotechnical site investigations, ground condition verification and subsurface
                support for infrastructure corridors.
              </p>
            </div>
            <div className="tile">
              <p className="idx">General Building</p>
              <h3>Building Civils &amp; Construction</h3>
              <p>
                Design coordination, 3D planning, site clearing, grading, general contracting and
                turnaround building refurbishments.
              </p>
            </div>
            <div className="tile">
              <p className="idx">Architecture</p>
              <h3>Architectural Services</h3>
              <p>
                Functional architectural design, space planning, facade cladding, curtain walling
                and interior build coordination.
              </p>
            </div>
            <div className="tile">
              <p className="idx">EPIC &amp; PM</p>
              <h3>Project Management &amp; Consulting</h3>
              <p>
                Overall planning, competitive tendering, EPIC procurement, HAZOP subcontractor
                supervision, cost control and strategic advisory.
              </p>
            </div>
            <div className="tile">
              <p className="idx">Rail Corridors</p>
              <h3>Railway Infrastructure</h3>
              <p>
                Trackside civils, station precincts, level-crossing civil/electrical interfaces and
                rail corridor support works.
              </p>
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
            <div className="tile tile--media w6">
              <img
                src="/assets/projects/mariental-solar-namibia.jpg"
                alt="Utility-scale solar generation plant in Namibia"
                width={1200}
                height={797}
                loading="lazy"
              />
              <div className="tile__body">
                <p className="idx">Energy &amp; Power</p>
                <h3>Solar PV, Hybrid Microgrids &amp; Hydrogen</h3>
                <p>
                  Design, MV/LV grid connection, protection engineering and balance-of-plant
                  construction for clean energy across Namibia.
                </p>
              </div>
            </div>
            <div className="tile tile--media w6">
              <img
                src="/assets/projects/windhoek-railway-station.jpg"
                alt="Windhoek Railway Station and track precinct"
                width={1600}
                height={1066}
                loading="lazy"
              />
              <div className="tile__body">
                <p className="idx">Rail &amp; Civils</p>
                <h3>Railway Infrastructure &amp; Corridor Civils</h3>
                <p>
                  Station precincts, trackside earthworks, drainage, lighting and signalling utility
                  interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split split--rev">
          <div className="sc-stack" data-sc-in data-sc-stagger="70">
            <h2 className="sc-display sc-display--lg">Electrical, Mechanical &amp; Civil Scope</h2>
            <div className="svc-cols">
              <ul>
                <li>Transformers, MV/LV switchgear &amp; generators</li>
                <li>Power distribution, reticulation &amp; street lighting</li>
                <li>Fire detection, alarm &amp; security systems</li>
                <li>PLC, SCADA &amp; structured fibre cabling</li>
                <li>Commercial/hospital HVAC &amp; ventilation</li>
                <li>Process piping, fire hydrants &amp; cranes</li>
              </ul>
              <ul>
                <li>Water, sewage, drainage &amp; TSE pipelines</li>
                <li>Highways, bridges, earthworks &amp; paving</li>
                <li>Underground &amp; elevated reinforced concrete</li>
                <li>Silos, cooling towers, pipe racks &amp; culverts</li>
                <li>Structural steelwork &amp; turn-key buildings</li>
                <li>Curtain walling, stone cladding &amp; finishes</li>
              </ul>
            </div>
          </div>
          <figure className="fig" data-sc-in>
            <ResponsivePicture
              slug="fibre"
              alt="Network cables plugged into a server rack"
              width={1376}
              height={768}
              sizes="(min-width: 860px) 45vw, 100vw"
            />
            <figcaption>
              Telecom, PLC/SCADA and low-voltage systems installed and commissioned.
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        id="equipment"
        className="section"
        style={{ background: "var(--sc-surface)", borderBlock: "1px solid var(--sc-hairline)" }}
      >
        <div className="wrap sc-stack" data-sc-in data-sc-stagger="60">
          <div>
            <p className="eyebrow">Owned Plant &amp; Instrumentation</p>
            <h2 className="sc-display sc-display--lg">
              Company Vehicles, Stringing Gear &amp; Testing Fleet
            </h2>
            <p className="sc-body" style={{ maxWidth: "62ch", marginTop: "var(--sc-3)" }}>
              M&amp;M Engineering mobilises with owned heavy crane transport, 4x4 site utility
              bakkies, overhead tension stringing equipment and calibrated 10 kV / 1,000 V testing
              instruments.
            </p>
          </div>
          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Equipment Description</th>
                  <th>Classification</th>
                  <th>VIN / Serial Reference</th>
                  <th style={{ textAlign: "center" }}>Qty</th>
                </tr>
              </thead>
              <tbody>
                {EQUIPMENT_ROWS.map(([desc, cls, serial, qty]) => (
                  <tr key={desc}>
                    <td>
                      <strong>{desc}</strong>
                    </td>
                    <td>{cls}</td>
                    <td>{serial}</td>
                    <td style={{ textAlign: "center" }}>{qty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <AppLink className="btn btn--accent" href="/contact">
              Discuss your project <ArrowRightIcon />
            </AppLink>
            <AppLink className="btn btn--ghost" href="/projects">
              View 25 verified works
            </AppLink>
            <a className="btn btn--ghost" href={SITE.pdfHref} download>
              Company Profile (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className="section band--night band--watermark">
        <div className="wrap">
          <div className="sc-stack" data-sc-in data-sc-stagger="70" style={{ maxWidth: "72ch" }}>
            <h2 className="sc-display sc-display--md">A note on gratitude</h2>
            <p className="sc-body">
              We take this opportunity to thank all our customers, clients, business partners,
              friends and family who have walked with us through good and challenging times since
              2013.
            </p>
            <AppLink className="btn btn--accent" style={{ alignSelf: "flex-start" }} href="/contact">
              Request a quotation <ArrowRightIcon />
            </AppLink>
          </div>
        </div>
      </section>
    </>
  );
}
