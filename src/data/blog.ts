export interface BlogArticle {
  slug: string;
  topic: string;
  readTime: string;
  title: string;
  summary: string;
  photo: "site-crane" | "switchgear" | "consult" | "pipeline";
  alt: string;
  lead: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
}

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "the-business-of-good-ethics",
    topic: "Ethics",
    readTime: "6 min read",
    title: "The business of good ethics",
    summary: "Why on-time, on-budget, statutory-holding delivery is an operational discipline across every Namibian contract.",
    photo: "site-crane",
    alt: "Tower crane and concrete superstructure construction site",
    lead:
      "In construction and engineering, business ethics is measured on the site. Across 25 public and private contracts in Namibia, clients feel those standards directly in three areas: the programme, the budget and statutory compliance.",
    sections: [
      {
        heading: "On time is an operational promise",
        paragraphs: [
          "When a clinic, school or police barracks opens late, public services and tenants carry the cost. Treating the programme seriously requires taking responsibility for overall planning, coordination and control, while coordinating directly with every trade subcontractor.",
        ],
      },
      {
        heading: "On budget is transparent pricing",
        paragraphs: [
          "A financially sound build is one whose quantities were verified at tender stage, whose procurement moved early, and whose variations match genuine site changes. Our procurement team manages EPIC material orders so commercial records match physical progress at final account.",
        ],
      },
      {
        heading: "The statutory safety standard",
        paragraphs: [
          "Our projects follow Namibia's Labour Act, 2007 and Government Notice No. 156 regardless of site remoteness. Whether inspecting 10 kV switchgear or excavating drainage trenches, the same PPE, permit-to-work and lockout-tagout rules govern every crew.",
        ],
      },
    ],
  },
  {
    slug: "electrical-instrumentation",
    topic: "E&I",
    readTime: "5 min read",
    title: "Inside electrical & instrumentation",
    summary: "The core systems an E&I contractor delivers, from 10 kV testing to PLC and SCADA commissioning.",
    photo: "switchgear",
    alt: "Medium-voltage and low-voltage switchgear panels inside an electrical substation",
    lead:
      "Structure gives a building its shell, while electrical and instrumentation (E&I) systems make hospitals, campuses, pump stations and industrial plants operate continuously every hour of the day.",
    sections: [
      {
        heading: "Power distribution and MV/LV switchgear",
        paragraphs: [
          "From transformer bays and backup generators to sub-distribution boards and township reticulation (such as Ekuku Township Phase 2 and Kaisosi NHE Phase 1), reliable power starts with proper fault-level calculation, earthing and cable sizing.",
        ],
      },
      {
        heading: "Commissioning with calibrated 10 kV & 1,000 V test gear",
        paragraphs: [
          "Before energising any installation, M&M technicians verify earth resistance, loop impedance, phase rotation and high-voltage insulation integrity in-house using calibrated Major Tech 10,000 V insulation testers, Hellermann Tyton 1,000 V loop/PSC testers and Fluke instrumentation.",
        ],
      },
      {
        heading: "Controls, fire detection & SCADA",
        bullets: [
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
    topic: "Consulting",
    readTime: "5 min read",
    title: "What a consulting engineer does",
    summary: "Independent technical judgement, multi-disciplinary teams, and design-to-handover accountability.",
    photo: "consult",
    alt: "Engineer inspecting building technical schematics and specifications",
    lead:
      "Public ministries, town councils and private developers commission consulting engineers for one primary reason: independent technical judgement from initial feasibility through final commissioning.",
    sections: [
      {
        heading: "Coordinating multi-disciplinary teams",
        paragraphs: [
          "Complex public infrastructure spans several trades at once. A single police station or hospital upgrade calls for civil/structural engineers, electrical specialists, quantity surveyors, architects and safety officers working to one unified design specification.",
        ],
      },
      {
        heading: "Strategic & environmental consulting",
        paragraphs: [
          "Beyond detailed drawings, consulting covers competitive tender documentation, contractor pre-qualification, HAZOP safety reviews, Environmental Impact Assessments (EIAs) and independent build quality audits.",
        ],
      },
      {
        heading: "Accountability through handover",
        paragraphs: [
          "Consulting ends only when commissioning certificates, calibrated test sheets, as-built drawings and statutory Labour Act / GN 156 safety dossiers are handed cleanly to the employer.",
        ],
      },
    ],
  },
  {
    slug: "procurement-for-epic-contracts",
    topic: "Procurement",
    readTime: "5 min read",
    title: "Procurement for large EPIC contracts",
    summary: "Engineering, Procurement, Installation and Commissioning: protecting cost, lead time and build quality.",
    photo: "pipeline",
    alt: "Industrial steel piping and reticulation corridor",
    lead:
      "In Engineering, Procurement, Installation and Commissioning (EPIC) contracts across Namibia, long-lead equipment and regional transport logistics decide whether a construction programme holds its completion date.",
    sections: [
      {
        heading: "Purchasing follows approved specifications",
        paragraphs: [
          "Early technical submittals for switchgear, transformers, HVAC chillers and HDPE/steel piping prevent late site delays. Every material order tracks lead times against the critical path before trenching or structural steel begins.",
        ],
      },
      {
        heading: "Mobilising across ten Namibian regions",
        paragraphs: [
          "Delivering contracts in Kunene, Zambezi, Kavango East/West, Ohangwena and Oshana requires owned transport alongside disciplined vendor staging. M&M pairs our MAN 4x4 crane truck and utility vehicles with verified local and SADC suppliers so cranes, drums and test instruments reach remote sites on schedule.",
        ],
      },
      {
        heading: "Traceable certification at handover",
        paragraphs: [
          "Every purchased transformer, fire extinguisher, lifting sling and protective relay arrives with factory test documentation compiled directly into the project commissioning file.",
        ],
      },
    ],
  },
];
