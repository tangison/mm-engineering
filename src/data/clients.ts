export interface ClientPartner {
  slug: string;
  name: string;
  summary: string;
}

export const CLIENT_SECTORS = [
  {
    sector: "Public Sector",
    title: "Ministries & Public Institutions",
    detail: "Infrastructure and building packages executed under formal tender governance and statutory OHS standards.",
  },
  {
    sector: "Private Sector",
    title: "Developers & Commercial Firms",
    detail: "Commercial, industrial and residential builds delivered from setting out through final handover.",
  },
  {
    sector: "Regional",
    title: "Namibia & Zimbabwe Corridors",
    detail: "Regional works coordinated from our Kleine Kuppe and Windhoek North offices across ten Namibian regions.",
  },
  {
    sector: "International",
    title: "International Engineering Partners",
    detail: "Cross-border firms partnering with an experienced Namibian contracting and consulting practice.",
  },
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  {
    slug: "namibia-coat-of-arms",
    name: "Republic of Namibia",
    summary: "Ministries of Safety & Security, Works, Health & Social Services, Defence, Education, Trade & Agriculture.",
  },
  {
    slug: "nampol",
    name: "Namibian Police Force (NAMPOL)",
    summary: "Police stations, barracks, charge offices and road works at Nyae Nyae, Nkurenkuru and Simanya.",
  },
  {
    slug: "unam",
    name: "University of Namibia (UNAM)",
    summary: "UNAM Clinic Main Campus delivery and tertiary institutional engineering works.",
  },
  {
    slug: "namcol",
    name: "NAMCOL",
    summary: "NAMCOL Centre Rundu Phase 2 construction plus regional HVAC and ventilation systems.",
  },
  {
    slug: "mva-fund",
    name: "MVA Fund Namibia",
    summary: "MVA Ongwediva Phase II electrical installation and distribution works.",
  },
  {
    slug: "nhe",
    name: "National Housing Enterprise (NHE)",
    summary: "Construction of 63 houses and Kaisosi Rundu bulk electrical reticulation.",
  },
  {
    slug: "ongwediva-town-council",
    name: "Ongwediva Town Council",
    summary: "Ongwediva Social Housing Phase II Centre on Erf 4797.",
  },
  {
    slug: "oshakati-town-council",
    name: "Oshakati Town Council",
    summary: "Bulk Electrical Services across Ekuku Township Phase 2.",
  },
  {
    slug: "rundu-town-council",
    name: "Rundu Town Council",
    summary: "Kaisosi NHE Phase I mass housing and township electrical infrastructure.",
  },
  {
    slug: "namibia-defence-force",
    name: "Namibian Defence Force",
    summary: "New electrical reticulation across Nukwa Military Base in the Zambezi Region.",
  },
  {
    slug: "mhss-namibia",
    name: "Ministry of Health & Social Services",
    summary: "Hospital additions, HV cable works and HVAC across Rundu, Okakarara, Tsumeb & Okahandja.",
  },
  {
    slug: "nida-ndc",
    name: "NIDA / NDC",
    summary: "Omulunga Community Market (Onayena) and Ongenga Business Estate construction works.",
  },
  {
    slug: "emcon",
    name: "Emcon Consulting Group",
    summary: "Consulting electrical engineering partner on Rundu VTC and Nkurenkuru works.",
  },
  {
    slug: "wml",
    name: "WML Consulting Engineers",
    summary: "Consulting partner on Omusati Regional HQ low-voltage reticulation.",
  },
  {
    slug: "aurecon",
    name: "Aurecon Consultancy",
    summary: "Engineering partner on Simanya NAMPOL roads, walkways and accommodation.",
  },
  {
    slug: "jacobs",
    name: "Jacobs Engineering Consulting",
    summary: "Consulting engineering partner on MVA Ongwediva Phase II electrical works.",
  },
];

export const ASSOCIATED_CONSULTANTS = [
  "Barnard Mutua Architects",
  "Kondjeni Kandji Architects",
  "Kenny McNamara Architects",
  "Agustono Ferreira Architects",
  "Robert Lock Architect",
  "Richard Frankle & Partners",
  "Conselect Engineering",
  "Consulting Services Africa",
  "V Fischer-Buder Consulting Engineers",
  "Emcon Consulting Engineers & WML",
  "Aurecon Consultancy",
  "AIJ Consulting / AIJ Project Cost Consultants",
  "RFPQS Quantity Surveyors",
  "Jacobs Engineering Consulting CC",
  "Tangi Trading Enterprise CC & NDC",
  "MAWF Technical Services",
];
