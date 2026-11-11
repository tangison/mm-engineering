import type { Metadata } from "next";
import { AppLink } from "@/components/AppLink";
import { ResponsivePicture } from "@/components/ResponsivePicture";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Health & Safety Policy | M&M Engineering",
  description:
    "M&M Engineering Occupational Health and Safety Policy governed by the Labour Act, 2007 and Government Notice No. 156 of 1992.",
  alternates: { canonical: `${SITE.url}/safety-policy` },
  openGraph: {
    title: "Health & Safety Policy | M&M Engineering",
    description:
      "M&M Engineering Occupational Health and Safety Policy governed by the Labour Act, 2007 and Government Notice No. 156 of 1992.",
    type: "website",
    url: `${SITE.url}/safety-policy`,
    images: [{ url: SITE.ogImage }],
  },
};

export default function SafetyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <ResponsivePicture
            slug="macro-hat"
            alt="White hard hat and spirit level on a construction plan"
            width={1152}
            height={864}
            sizes="100vw"
            priority
          />
        </div>
        <div className="page-hero__inner sc-stack" data-sc-in data-sc-stagger="70">
          <p className="eyebrow">Occupational Health &amp; Safety Policy</p>
          <h1 className="sc-display sc-display--xl">
            Zero-LTI site discipline built on Namibian law.
          </h1>
          <p className="sc-body lede">
            Governing every M&amp;M Engineering office, depot and active construction site under
            the Labour Act, 2007 and Government Notice No. 156 of 1992.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap sc-stack" data-sc-in>
          <div className="ohs-banner">
            <p className="eyebrow" style={{ marginBottom: "var(--sc-2)" }}>
              Statutory Framework
            </p>
            <p className="sc-body" style={{ color: "var(--mm-ink)", margin: 0 }}>
              <strong>Governing Legislation:</strong> The Constitution of the Republic of Namibia
              &middot; Labour Act, 2007 (Act No. 11 of 2007) &middot; Government Notice No. 156 of
              1992 (&ldquo;Regulations Relating to the Health and Safety of Employees at Work&rdquo;)
              &middot; Presidential Proclamation No. 10 (Part XI, Section 101).
            </p>
          </div>

          <div className="policy-grid" style={{ marginTop: "var(--sc-4)" }}>
            <div className="policy-card">
              <h3>General Policy Statement</h3>
              <ul>
                <li>
                  Control occupational health and safety risks across every site and workshop.
                </li>
                <li>
                  Consult regularly with employees and elected safety representatives on workplace
                  conditions.
                </li>
                <li>
                  Provide, test and maintain safe plant, lifting machinery and calibrated electrical
                  test gear.
                </li>
                <li>
                  Control storage, handling and safe disposal of hazardous substances (COSHH).
                </li>
                <li>
                  Provide induction, task competency training and supervision at zero cost to
                  employees.
                </li>
                <li>
                  Prevent workplace accidents, injuries and occupational illnesses through annual
                  policy review.
                </li>
              </ul>
            </div>

            <div className="policy-card">
              <h3>Organisation &amp; Governance</h3>
              <ul>
                <li>
                  <strong>Directors &amp; Managing Member:</strong> Hold overall statutory
                  responsibility and approve annual safety funding.
                </li>
                <li>
                  <strong>Appointed Safety Officer:</strong> Audits risk assessments, registers, PPE
                  issue, permits and training compliance.
                </li>
                <li>
                  <strong>Line Managers &amp; Foremen:</strong> Enforce method statements, induction
                  records and daily site housekeeping.
                </li>
                <li>
                  <strong>Safety Representatives &amp; Committees:</strong> Conduct quarterly
                  inspections; committee convened within 3 months when requested by two or more
                  representatives.
                </li>
              </ul>
            </div>

            <div className="policy-card">
              <h3>Five-Tier Risk Hierarchy</h3>
              <ol>
                <li>
                  <strong>Eliminate</strong> hazardous activities wherever safer alternative work
                  methods exist.
                </li>
                <li>
                  <strong>Substitute</strong> plant or substances for lower-hazard equipment or
                  chemicals.
                </li>
                <li>
                  <strong>Isolate or segregate</strong> hazards using interlocked guarding and
                  physical barriers.
                </li>
                <li>
                  <strong>Apply engineering controls</strong> (local exhaust ventilation, enclosures,
                  lifting aids).
                </li>
                <li>
                  <strong>Provide compatible PPE</strong> strictly as secondary protection where
                  residual risk remains.
                </li>
              </ol>
            </div>

            <div className="policy-card">
              <h3>Right &amp; Duty to Stop Unsafe Work</h3>
              <p style={{ marginBottom: 10 }}>
                Every employee, subcontractor and visitor is empowered and required to pause work
                immediately if machinery guarding is missing, electrical gear is ungrounded or site
                ground conditions turn unsafe, reporting at once to the Site Supervisor or Safety
                Officer.
              </p>
              <p>
                <strong>No Cost Guarantee:</strong> No member of staff is charged for mandatory OHS
                training, inductions or compliant personal protective equipment.
              </p>
            </div>

            <div className="policy-card">
              <h3>Fire Safety &amp; Emergency Drills</h3>
              <ul>
                <li>
                  Escape routes, exits and fire doors kept unlocked and unobstructed throughout
                  shifts.
                </li>
                <li>
                  Weekly alarm checks; monthly user seal/gauge verification on fire extinguishers;
                  annual external certification (GN 156 Chapter 3).
                </li>
                <li>
                  Emergency evacuation drills executed in month 1 of employment, 3-monthly for night
                  crews and 6-monthly for day teams.
                </li>
                <li>
                  Immediate isolation and fire brigade notification for any gas leak or ignition
                  hazard.
                </li>
              </ul>
            </div>

            <div className="policy-card">
              <h3>Electrical Safety &amp; Lockout / Tagout</h3>
              <ul>
                <li>
                  Strict compliance with GN 156 Chapter 9; zero unqualified intervention on live
                  conductors.
                </li>
                <li>
                  Residual current circuit breakers (RCDs) protecting portable electrical tools;
                  trailing leads excluded from pedestrian walkways.
                </li>
                <li>
                  Cleaning, servicing or maintenance inside unguarded machinery authorised only
                  after electrical isolation, physical lock-off and tagging.
                </li>
              </ul>
            </div>

            <div className="policy-card">
              <h3>Lifting Equipment &amp; Plant Inspections</h3>
              <ul>
                <li>
                  Cranes, forklifts, HIAB lorry loaders, excavators, telehandlers and hoists display
                  stamped Safe Working Load (SWL) and valid certificates.
                </li>
                <li>
                  Pre-service thorough examination prior to deployment and following site
                  re-assembly; statutory inspections every 6 or 12 months.
                </li>
              </ul>
            </div>

            <div className="policy-card">
              <h3>Statutory Accident &amp; Incident Reporting</h3>
              <ul>
                <li>
                  Every injury, first-aid case and near miss logged and investigated to prevent
                  recurrence.
                </li>
                <li>
                  <strong>Ministry of Labour / Health Notification:</strong> Fatalities, major
                  injuries (fractures other than digits, amputations, dislocations, loss of sight,
                  electric shock/burns &gt;24h hospitalisation, acute chemical/biological illness),
                  hospitalised members of the public, &gt;7-day lost-time injuries (reported within
                  15 working days) and dangerous occurrences (crane failure, overhead line contact,
                  scaffold collapse &gt;5 m).
                </li>
              </ul>
            </div>

            <div className="policy-card">
              <h3>COSHH, Noise &amp; Vibration Exposure</h3>
              <ul>
                <li>
                  <strong>COSHH:</strong> Assessed chemical register &amp; Safety Data Sheets held
                  on site; mixing chemical products strictly prohibited.
                </li>
                <li>
                  <strong>Hand-Arm Vibration (HAV):</strong> Daily EAV 2.5 m/s&sup2; A(8) &middot;
                  Mandatory ELV cap 5.0 m/s&sup2; A(8).
                </li>
                <li>
                  <strong>Whole-Body Vibration (WBV):</strong> Daily EAV 0.5 m/s&sup2; A(8) &middot;
                  Mandatory ELV cap 1.15 m/s&sup2; A(8).
                </li>
                <li>
                  <strong>Manual Handling:</strong> Task, load and terrain assessed prior to
                  lifting; hoists and trolleys used wherever practicable.
                </li>
              </ul>
            </div>

            <div className="policy-card">
              <h3>Welfare, Edge Protection &amp; Permits</h3>
              <ul>
                <li>
                  Minimum 11 m&sup3; workspace volume per employee, pedestrian/vehicle traffic
                  segregation and daily waste clearing.
                </li>
                <li>
                  Guardrails at &ge;1,100 mm with mid-rail wherever falls &ge;2 m (or over hazards)
                  exist; fragile roof signage posted clearly.
                </li>
                <li>
                  Potable water, washing basins, lockers and clean dining spaces separated from dust
                  zones.
                </li>
                <li>
                  Subcontractors submit OHS policies, risk assessments and liability insurance prior
                  to arrival plus obtain Permits to Work for hot work, electrical switching, height
                  work and confined spaces.
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
        <div className="wrap sc-stack" data-sc-in>
          <div>
            <p className="eyebrow">Appendix 1 &middot; Site Notice Board Template</p>
            <h2 className="sc-display sc-display--md">
              Project Site Appointed Safety Personnel Register
            </h2>
            <p className="sc-body" style={{ maxWidth: "64ch", marginTop: "var(--sc-2)" }}>
              Completed and displayed on every active M&amp;M Engineering construction notice board
              prior to site handover:
            </p>
          </div>
          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Statutory Safety Role</th>
                  <th>Designated Personnel Slots</th>
                  <th>Posting Requirement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Site Safety Officer(s)</strong>
                  </td>
                  <td>Two designated site safety officers per active works package</td>
                  <td>Full contact details posted on site notice board</td>
                </tr>
                <tr>
                  <td>
                    <strong>Safety Representative(s)</strong>
                  </td>
                  <td>Worker-elected workplace health &amp; safety representatives</td>
                  <td>Quarterly inspection schedule logged</td>
                </tr>
                <tr>
                  <td>
                    <strong>First Aid Personnel</strong>
                  </td>
                  <td>Certified first aiders allocated per shift &amp; crew size</td>
                  <td>First aid station &amp; ambulance contacts posted</td>
                </tr>
                <tr>
                  <td>
                    <strong>Fire Safety Wardens</strong>
                  </td>
                  <td>Designated emergency marshals &amp; muster point leads</td>
                  <td>Extinguisher &amp; alarm check logs maintained</td>
                </tr>
                <tr>
                  <td>
                    <strong>Health &amp; Safety Committee Chair</strong>
                  </td>
                  <td>Convened within 3 months of representative request</td>
                  <td>Annual policy endorsement signed by Management</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="profile-cta">
            <div>
              <h3>Complete Printable Company Profile &amp; Policy Pack</h3>
              <p>
                Download the 15-page print-ready PDF containing our full OHS Manual, Appendix 1
                form, 25 projects and 23 owned equipment items.
              </p>
            </div>
            <div className="profile-cta__actions">
              <a className="btn btn--accent" href={SITE.pdfHref} download>
                Download Full PDF ({SITE.pdfSizeLabel})
              </a>
              <AppLink className="btn btn--ghost" href="/profile">
                View Web Edition
              </AppLink>
              <AppLink className="btn btn--ghost" href="/contact">
                Contact Safety Desk
              </AppLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
