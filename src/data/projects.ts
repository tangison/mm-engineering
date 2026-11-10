export type ProjectSector = "all" | "health" | "security" | "power" | "housing" | "education";

export interface FeaturedProject {
  title: string;
  sectorLabel: string;
  client: string;
  consultant: string;
  duration: string;
  value: string;
  photoType: "project" | "photo";
  photoSlug: string;
  alt: string;
}

export interface ProjectRecord {
  num: string;
  name: string;
  client: string;
  consultant: string;
  duration: string;
  valueNum: number;
  valueFmt: string;
  sectors: ProjectSector[];
}

export const SECTOR_FILTERS: { id: ProjectSector; label: string }[] = [
  { id: "all", label: "All 25" },
  { id: "health", label: "Health & Hospitals" },
  { id: "security", label: "Defence & Police" },
  { id: "power", label: "Power & HV/LV" },
  { id: "housing", label: "Housing & Civic" },
  { id: "education", label: "Education & Trade" },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: "Nyae Nyae Police Station Works",
    sectorLabel: "Defence & Police",
    client: "Ministry of Safety & Security / Works",
    consultant: "Kondjeni Kandji Architects",
    duration: "24 Months",
    value: "N$ 43,000,000.00",
    photoType: "project",
    photoSlug: "namibia-police-station",
    alt: "Masonry perimeter and police complex works constructed in northern Namibia",
  },
  {
    title: "Divundu Hospital Engineering Works",
    sectorLabel: "Health & Correctional",
    client: "Ministry of Safety & Security / Works",
    consultant: "Barnard Mutua Architects",
    duration: "18 Months",
    value: "N$ 13,000,000.00",
    photoType: "project",
    photoSlug: "namibia-civic-courtyard",
    alt: "Institutional courtyard brickwork and ventilated screen corridor",
  },
  {
    title: "Ekuku Phase 2 Electrical Works",
    sectorLabel: "Municipal Power",
    client: "Oshakati Town Council",
    consultant: "Consulting Services Africa",
    duration: "8 Months",
    value: "N$ 13,608,000.00",
    photoType: "project",
    photoSlug: "oshakati-civic",
    alt: "Municipal civic and township service infrastructure in Oshakati",
  },
  {
    title: "UNAM Clinic Main Campus & Ongwediva",
    sectorLabel: "Tertiary Health",
    client: "University of Namibia (UNAM)",
    consultant: "Agustono Ferreira Architects",
    duration: "12 Months",
    value: "N$ 8,000,000.00",
    photoType: "project",
    photoSlug: "unam-main-campus",
    alt: "University of Namibia main campus buildings in Windhoek",
  },
  {
    title: "Kaisosi Rundu NHE Mass Housing & Electricals",
    sectorLabel: "Mass Housing",
    client: "Rundu Town Council (NHE)",
    consultant: "AIJ Consulting & Cost Consultants",
    duration: "24 Months",
    value: "N$ 30,445,350.00 combined",
    photoType: "project",
    photoSlug: "namibia-nhe-housing",
    alt: "Newly built low-cost housing units constructed for National Housing Enterprise",
  },
  {
    title: "Simanya NAMPOL Station & Road Works",
    sectorLabel: "Roads & Police Civils",
    client: "Ministry of Safety & Security (NAMPOL)",
    consultant: "Aurecon Consultancy",
    duration: "Completed",
    value: "N$ 4,843,162.03",
    photoType: "project",
    photoSlug: "namibia-roads-culvert",
    alt: "Regional road access and reinforced concrete drainage culvert in northern Namibia",
  },
  {
    title: "Ongwediva Social Housing Phase II (Erf 4797)",
    sectorLabel: "Civic Housing",
    client: "Ongwediva Town Council",
    consultant: "AIJ Consulting",
    duration: "12 Months",
    value: "N$ 3,400,000.00",
    photoType: "project",
    photoSlug: "ongwediva-civic",
    alt: "Civic infrastructure precinct in Ongwediva",
  },
  {
    title: "Rundu VTC & Campus Electrical Works",
    sectorLabel: "Vocational Power",
    client: "Ministry of Education",
    consultant: "Emcon Consulting Engineers",
    duration: "Completed",
    value: "N$ 4,183,637.10",
    photoType: "project",
    photoSlug: "unam-hp-ongwediva",
    alt: "Institutional training and campus complex in northern Namibia",
  },
  {
    title: "Nukwa Military Base & Omusati HQ Power",
    sectorLabel: "Defence Reticulation",
    client: "Ministry of Defence & MAWF",
    consultant: "V Fischer-Buder / WML",
    duration: "12 Months",
    value: "N$ 5,568,235.00 combined",
    photoType: "photo",
    photoSlug: "electrical",
    alt: "Electrical distribution gear and cable termination boards",
  },
];

export const ALL_PROJECTS: ProjectRecord[] = [
  { num: "01", name: "Divundu Correctional Facility Hospital and Programme Areas", client: "Ministry of Safety & Security & Ministry of Works", consultant: "Barnard Mutua Architects", duration: "18 Months", valueNum: 13000000, valueFmt: "N$ 13,000,000.00", sectors: ["health", "security"] },
  { num: "02", name: "Nyae Nyae Police Station and Barracks", client: "Ministry of Safety & Security & Ministry of Works", consultant: "Kondjeni Kandji Architects", duration: "24 Months", valueNum: 43000000, valueFmt: "N$ 43,000,000.00", sectors: ["security"] },
  { num: "03", name: "NAMCOL Centre Rundu Phase 2", client: "NAMCOL", consultant: "Kenny McNamara Architects", duration: "9 Months", valueNum: 8000000, valueFmt: "N$ 8,000,000.00", sectors: ["education"] },
  { num: "04", name: "UNAM Clinic Main Campus", client: "University of Namibia (UNAM)", consultant: "Agustono Ferreira Architects", duration: "12 Months", valueNum: 8000000, valueFmt: "N$ 8,000,000.00", sectors: ["health", "education"] },
  { num: "05", name: "Ongwediva Social Housing Phase II Centre on Erf 4797", client: "Ongwediva Town Council", consultant: "AIJ Consulting", duration: "12 Months", valueNum: 3400000, valueFmt: "N$ 3,400,000.00", sectors: ["housing"] },
  { num: "06", name: "Construction of Electrical Services (Ekuku Township Phase 2)", client: "Oshakati Town Council", consultant: "Consulting Services Africa", duration: "8 Months", valueNum: 13608000, valueFmt: "N$ 13,608,000.00", sectors: ["power", "housing"] },
  { num: "07", name: "Electrical Services at Kaisosi Rundu NHE Phase 1", client: "Rundu Town Council (NHE)", consultant: "AIJ Consulting", duration: "12 Months", valueNum: 11000000, valueFmt: "N$ 11,000,000.00", sectors: ["power", "housing"] },
  { num: "08", name: "Low Voltage Electrical Reticulation (Omusati Regional HQ)", client: "Ministry of Agriculture, Water & Forestry", consultant: "WML Consulting Engineers", duration: "Completed", valueNum: 2900000, valueFmt: "N$ 2,900,000.00", sectors: ["power"] },
  { num: "09", name: "New Electrical Reticulation of Nukwa Military Base (Zambezi Region)", client: "Ministry of Defence", consultant: "V Fischer-Buder Consulting Engineers", duration: "12 Months", valueNum: 2668235, valueFmt: "N$ 2,668,235.00", sectors: ["power", "security"] },
  { num: "10", name: "Renovation of Staff Houses at Verda Gate (Kunene Region)", client: "Ministry of Agriculture, Water & Forestry (Veterinary)", consultant: "MAWF Technical Services", duration: "12 Months", valueNum: 2970450, valueFmt: "N$ 2,970,450.00", sectors: ["housing"] },
  { num: "11", name: "Alterations & Additions to Rundu Hospital", client: "Ministry of Health & Social Services", consultant: "RFPQS", duration: "6 Months", valueNum: 2700000, valueFmt: "N$ 2,700,000.00", sectors: ["health"] },
  { num: "12", name: "Construction of 63 Houses at Kaisosi Rundu NHE Phase I", client: "Rundu Town Council (NHE)", consultant: "AIJ Project Cost Consultants", duration: "24 Months", valueNum: 19445350, valueFmt: "N$ 19,445,350.00", sectors: ["housing"] },
  { num: "13", name: "Electrical Installation at Omulunga Community Market, Onayena", client: "Ministry of Trade & Industry", consultant: "Conselect Engineering", duration: "Completed", valueNum: 1101707.49, valueFmt: "N$ 1,101,707.49", sectors: ["power", "education"] },
  { num: "14", name: "Electrical Installation - Rundu Vocational Training Centre", client: "Ministry of Education", consultant: "Emcon Consulting Engineers", duration: "Completed", valueNum: 4183637.10, valueFmt: "N$ 4,183,637.10", sectors: ["power", "education"] },
  { num: "15", name: "Faulty Electrical Cable Replacement & Generator at Okakarara District Hospital", client: "Ministry of Health & Social Services", consultant: "Tangi Trading Enterprise CC", duration: "Completed", valueNum: 1045713.53, valueFmt: "N$ 1,045,713.53", sectors: ["power", "health"] },
  { num: "16", name: "MVA Ongwediva Phase II Electrical Installation", client: "MVA Fund Namibia", consultant: "Jacobs Engineering Consulting CC", duration: "Completed", valueNum: 603346.35, valueFmt: "N$ 603,346.35", sectors: ["power"] },
  { num: "17", name: "Construction and Electrical Installation of Nkurenkuru Police Station", client: "Ministry of Safety & Security - NAMPOL", consultant: "Robert Lock Architect", duration: "Completed", valueNum: 4000000, valueFmt: "N$ 4,000,000.00", sectors: ["security", "power"] },
  { num: "18", name: "New Sub-Regional Office Nkurenkuru - Electrical Installation", client: "Ministry of Safety & Security - NAMPOL", consultant: "Emcon Consulting Engineers", duration: "Completed", valueNum: 310514.95, valueFmt: "N$ 310,514.95", sectors: ["security", "power"] },
  { num: "19", name: "Omulunga Community Market (Onayena, Oshikoto Region)", client: "Namibia Development Corporation (NDC)", consultant: "Conselect Engineering", duration: "Completed", valueNum: 890000, valueFmt: "N$ 890,000.00", sectors: ["education"] },
  { num: "20", name: "Alterations and Additions to Rundu Hospital Accommodation Block Phase 2", client: "Ministry of Health & Social Services", consultant: "Richard Frankle & Partners", duration: "Completed", valueNum: 1621642.60, valueFmt: "N$ 1,621,642.60", sectors: ["health"] },
  { num: "21", name: "Supply, Installation & Commissioning of Air Conditioning & Ventilation", client: "NAMCOL", consultant: "Conselect Engineering", duration: "Completed", valueNum: 495543.51, valueFmt: "N$ 495,543.51", sectors: ["education"] },
  { num: "22", name: "Supply, Installation, Repair & Servicing of Air Conditioners at Tsumeb Hospital", client: "Ministry of Health & Social Services", consultant: "Ministry of Health", duration: "Completed", valueNum: 187714.50, valueFmt: "N$ 187,714.50", sectors: ["health"] },
  { num: "23", name: "Simanya Completion of Accommodation Facilities, Charge Office, Roads & Walkways", client: "Ministry of Safety & Security - NAMPOL", consultant: "Aurecon Consultancy", duration: "Completed", valueNum: 4843162.03, valueFmt: "N$ 4,843,162.03", sectors: ["security", "housing"] },
  { num: "24", name: "Alterations and Additions to Existing Okahandja Hospital", client: "Ministry of Health & Social Services", consultant: "Richard Frankle & Partners", duration: "Completed", valueNum: 1908784.31, valueFmt: "N$ 1,908,784.31", sectors: ["health"] },
  { num: "25", name: "Ongenga Business Estate (Ohangwena Region)", client: "Namibia Development Corporation (NDC)", consultant: "Conselect Engineering", duration: "Completed", valueNum: 885000, valueFmt: "N$ 885,000.00", sectors: ["education"] },
];
