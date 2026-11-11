export interface BlogArticle {
  slug: string;
  category: string;
  readTime: string;
  tileClass: "w7" | "w5";
  cardSummary: string;
  title: string;
  seoTitle: string;
  description: string;
  heroSlug: string;
  heroAlt: string;
  heroWidth: number;
  heroHeight: number;
  lead: string;
  sections: Array<
    | { type: "h2"; text: string }
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
  >;
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "the-business-of-good-ethics",
    category: "Ethics",
    readTime: "6 min read",
    tileClass: "w7",
    cardSummary: "Why on-time, on-budget, standards-holding delivery is an operational choice across every contract.",
    title: "The business of good ethics",
    seoTitle: "The business of good ethics | M&M Engineering",
    description: "Why on-time, on-budget, safety-compliant delivery is an operational commitment across M&M Engineering contracts.",
    heroSlug: "team",
    heroAlt: "White hard hat and rolled drawings on the site plan table",
    heroWidth: 2816,
    heroHeight: 1584,
    lead: "In construction and engineering, business ethics is measured on the site rather than in brochures. Across 25 public and private contracts in Namibia, clients feel those standards directly in three areas: the programme, the budget and statutory compliance.",
    sections: [
      { type: "h2", text: "On time is an operational promise" },
      { type: "p", text: "When a clinic, school or police barracks opens late, public services and tenants carry the cost. Treating the programme seriously requires taking responsibility for overall planning, coordination and control—not simply handing schedules down the subcontracting chain." },
      { type: "h2", text: "On budget is honest pricing" },
      { type: "p", text: "A financially sound build is not the cheapest tender number on paper; it is one whose quantities were verified at tender stage, whose procurement moved early, and whose variations match genuine site changes. Our procurement team manages EPIC material orders so commercial records match physical progress at final account." },
      { type: "h2", text: "The statutory safety standard" },
      { type: "p", text: "Our projects follow Namibia's Labour Act, 2007 and Government Notice No. 156 regardless of site remoteness. Whether inspecting 10 kV switchgear or excavating drainage trenches, the same PPE, permit-to-work and lockout-tagout rules govern every crew and subcontractor." },
      { type: "h2", text: "Governance beyond the perimeter" },
      { type: "p", text: "Structured CSR planning and transparent public administration liaison reinforce engineering execution: baseline assessment first, measurable delivery second, and audited reporting on completion." },
    ],
  },
  {
    slug: "electrical-instrumentation",
    category: "E&I",
    readTime: "5 min read",
    tileClass: "w5",
    cardSummary: "The nine core systems an E&I contractor delivers, from 10 kV testing to PLC/SCADA commissioning.",
    title: "Inside electrical & instrumentation",
    seoTitle: "Inside electrical & instrumentation | M&M Engineering",
    description: "The electrical, HV/LV testing, fire detection, PLC, SCADA and instrumentation disciplines delivered across Namibian facilities.",
    heroSlug: "switchgear",
    heroAlt: "Switchgear cabinets in an industrial electrical control room",
    heroWidth: 1376,
    heroHeight: 768,
    lead: "Structure gives a building its shell, while electrical and instrumentation (E&I) systems make hospitals, campuses, pump stations and industrial plants operate reliably every hour of the day.",
    sections: [
      { type: "h2", text: "Power distribution and MV/LV switchgear" },
      { type: "p", text: "From transformer bays and backup generators to sub-distribution boards and township reticulation (such as Ekuku Township Phase 2 and Kaisosi NHE Phase 1), reliable power starts with proper fault-level calculation, earthing and cable sizing." },
      { type: "h2", text: "Commissioning with calibrated 10 kV & 1,000 V test gear" },
      { type: "p", text: "Before energising any installation, M&M technicians verify earth resistance, loop impedance, phase rotation and high-voltage insulation integrity in-house using calibrated Major Tech 10,000 V insulation testers, Hellermann Tyton 1,000 V loop/PSC testers and Fluke instrumentation." },
      { type: "h2", text: "Controls, fire detection & SCADA" },
      {
        type: "ul",
        items: [
          "Lighting and general power circuits installed to statutory SANS/Namibian codes",
          "Addressable fire detection and suppression alarm systems",
          "Programmable logic control (PLC) and SCADA monitoring networks",
          "Structured campus cabling, access security and field instrumentation",
        ],
      },
    ],
  },
  {
    slug: "what-a-consulting-engineer-does",
    category: "Consulting",
    readTime: "5 min read",
    tileClass: "w5",
    cardSummary: "Independent expertise, multi-disciplinary teams, and design-to-handover technical accountability.",
    title: "What a consulting engineer actually does",
    seoTitle: "What a consulting engineer actually does | M&M Engineering",
    description: "Independent technical oversight, multi-disciplinary project leadership and Environmental Impact Assessments in Namibia.",
    heroSlug: "consult",
    heroAlt: "Total station set up for surveying on a construction site",
    heroWidth: 1376,
    heroHeight: 768,
    lead: "Public ministries, town councils and private developers commission consulting engineers for one primary reason: independent technical judgement from initial feasibility through final commissioning.",
    sections: [
      { type: "h2", text: "Coordinating multi-disciplinary teams" },
      { type: "p", text: "Complex public infrastructure rarely sits inside a single discipline. A single police station or hospital upgrade calls for civil/structural engineers, electrical specialists, quantity surveyors, architects and safety officers working to one unified design specification." },
      { type: "h2", text: "Strategic & environmental consulting" },
      { type: "p", text: "Beyond detailed drawings, consulting covers competitive tender documentation, contractor pre-qualification, HAZOP safety reviews, Environmental Impact Assessments (EIAs) and independent build quality audits." },
      { type: "h2", text: "Accountability through handover" },
      { type: "p", text: "Consulting ends only when commissioning certificates, calibrated test sheets, as-built drawings and statutory Labour Act / GN 156 safety dossiers are safely handed to the employer." },
    ],
  },
  {
    slug: "procurement-for-epic-contracts",
    category: "Procurement",
    readTime: "5 min read",
    tileClass: "w7",
    cardSummary: "Engineering, Procurement, Installation and Commissioning: protecting cost, lead time and build quality.",
    title: "Procurement for large EPIC contracts",
    seoTitle: "Procurement for large EPIC contracts | M&M Engineering",
    description: "Managing long-lead electrical switchgear, pipes, structural steel and site logistics across remote Namibian regions.",
    heroSlug: "pipeline",
    heroAlt: "Drainage pipes laid in an excavated trench",
    heroWidth: 1376,
    heroHeight: 768,
    lead: "In Engineering, Procurement, Installation and Commissioning (EPIC) contracts across Namibia, long-lead equipment and regional transport logistics decide whether a construction programme holds its completion date.",
    sections: [
      { type: "h2", text: "Purchasing follows approved specifications" },
      { type: "p", text: "Early technical submittals for switchgear, transformers, HVAC chillers and HDPE/steel piping prevent late site delays. Every material order tracks lead times against the critical path before trenching or structural steel begins." },
      { type: "h2", text: "Mobilising across 9+ regions" },
      { type: "p", text: "Delivering contracts in Kunene, Zambezi, Kavango East/West, Ohangwena and Oshana requires owned transport alongside disciplined vendor staging. M&M pairs our MAN 4x4 crane truck and utility vehicles with verified local and SADC suppliers so cranes, drums and test instruments reach remote sites on schedule." },
      { type: "h2", text: "Traceable certification at handover" },
      { type: "p", text: "Every purchased transformer, fire extinguisher, lifting sling and protective relay arrives with factory test documentation compiled directly into the project commissioning file." },
    ],
  },
];

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return BLOG_ARTICLES.find((a) => a.slug === slug);
}
