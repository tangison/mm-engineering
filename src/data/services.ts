export interface EngineeringDivision {
  key: string;
  title: string;
  group: string;
  summary: string;
  photo: "switchgear" | "structural" | "telecom" | "consult" | "site-crane" | "electrical";
  alt: string;
}

export interface ServiceDiscipline {
  id: string;
  group: string;
  name: string;
  summary: string;
}

export interface PlantItem {
  description: string;
  classification: string;
  reference: string;
  qty: string;
}

export const CORE_DIVISIONS: EngineeringDivision[] = [
  {
    key: "electrical",
    title: "Electrical & HV/Solar",
    group: "Power & Energy",
    summary:
      "MV/LV switchgear, transformer bays, township bulk reticulation, standby generators, solar PV microgrids and calibrated 10 kV commissioning.",
    photo: "switchgear",
    alt: "Medium-voltage and low-voltage switchgear panels lined inside an electrical control room",
  },
  {
    key: "civil",
    title: "Civil & Structural Works",
    group: "Buildings & Corridors",
    summary:
      "Reinforced concrete superstructures, public hospitals, police stations, NHE social housing, paved roads, box culverts, bridges and TSE pipelines.",
    photo: "structural",
    alt: "Reinforced concrete and steel structural engineering site in Namibia",
  },
  {
    key: "telecom",
    title: "Telecommunications & IT",
    group: "Networks & Fibre",
    summary:
      "Carrier and campus fibre-optic backbones, fusion splicing, OTDR testing, lattice communications towers, equipment shelters and PLC/SCADA telemetry.",
    photo: "telecom",
    alt: "Telecommunications equipment shelter, cabling and tower communications route",
  },
  {
    key: "consultancy",
    title: "Mechanical, HVAC & Consultancy",
    group: "Plant & Advisory",
    summary:
      "Commercial and hospital HVAC chillers, fire-fighting networks, independent tender reviews, HAZOP supervision, EIAs and EPIC cost control.",
    photo: "consult",
    alt: "Project engineer reviewing technical site drawings and installation schedules",
  },
];

export const THIRTEEN_DISCIPLINES: ServiceDiscipline[] = [
  {
    id: "electrical",
    group: "Power & E&I",
    name: "Electrical Engineering",
    summary:
      "HV/MV switchgear, transformer substations, township power reticulation, lighting, backup generators, PLC/SCADA, fire detection and instrumentation.",
  },
  {
    id: "civil",
    group: "Structural Civils",
    name: "Civil Engineering",
    summary:
      "Underground and multi-storey concrete structures, silos, cooling towers, precast concrete, pipe racks, culverts, structural steel and institutional buildings.",
  },
  {
    id: "telecoms",
    group: "Telecoms & Fibre",
    name: "Telecommunications",
    summary:
      "Carrier and campus fibre-optic backbones, splicing and OTDR testing, lattice towers, equipment shelters and structured network cabling.",
  },
  {
    id: "mining",
    group: "Mining Support",
    name: "Mining Engineering",
    summary:
      "Surface and underground mine infrastructure support, plant electrical reticulation, earthworks and utility civil packages.",
  },
  {
    id: "it",
    group: "Digital & IT",
    name: "Information Technology",
    summary:
      "Enterprise data networks, active telemetry, security and building management integration, and institutional IT infrastructure.",
  },
  {
    id: "energy",
    group: "Clean Energy",
    name: "Energy Services (Solar & Hydrogen)",
    summary:
      "Grid-tied solar PV, hybrid microgrids, clean-energy substations and hydrogen-ready energy installations from feasibility through commissioning.",
  },
  {
    id: "mechanical",
    group: "Plant & HVAC",
    name: "Mechanical Engineering",
    summary:
      "Static and rotary plant installation, process piping, fire-fighting networks, pipe gantries, cranes, HVAC, insulation and scaffolding.",
  },
  {
    id: "roads",
    group: "Roads & Bridges",
    name: "Road Construction & Highways",
    summary:
      "Highways, paved urban roads, bridges, underpasses, major earthworks, street lighting, traffic signalisation and TSE pipelines.",
  },
  {
    id: "geological",
    group: "Geotechnical",
    name: "Geological Services",
    summary:
      "Geotechnical site investigations, ground condition verification and subsurface support for infrastructure corridors.",
  },
  {
    id: "building",
    group: "General Building",
    name: "Building Civils & Construction",
    summary:
      "Design coordination, 3D planning, site clearing, grading, general contracting and turnaround building refurbishments.",
  },
  {
    id: "architecture",
    group: "Architecture",
    name: "Architectural Services",
    summary:
      "Functional architectural design, space planning, facade cladding, curtain walling and interior build coordination.",
  },
  {
    id: "epic",
    group: "EPIC & PM",
    name: "Project Management & Consulting",
    summary:
      "Overall planning, competitive tendering, EPIC procurement, HAZOP subcontractor supervision, cost control and strategic advisory.",
  },
  {
    id: "rail",
    group: "Rail Corridors",
    name: "Railway Infrastructure",
    summary:
      "Trackside civils, station precincts, level-crossing civil and electrical interfaces, and rail corridor support works.",
  },
];

export const EPC_PILLARS = [
  {
    step: "Engineering",
    title: "Design managed to specification",
    summary:
      "Qualified technical leads coordinate design sub-contractors, HAZOP reviews, fault-level checks and statutory test documentation.",
  },
  {
    step: "Procurement",
    title: "Early equipment staging",
    summary:
      "Dedicated purchasing tracks transformer, switchgear, HVAC and pipe lead times against the site critical path across nine regions.",
  },
  {
    step: "Construction",
    title: "Site execution & commissioning",
    summary:
      "Owned plant, stringing crews and calibrated test instruments execute complex public and commercial works through final handover.",
  },
];

export const SCOPE_LISTS = [
  {
    title: "Electrical, Energy & Digital Systems",
    items: [
      "Transformers, MV/LV switchgear & standby generators",
      "Township power reticulation & public street lighting",
      "Fire detection, alarm & access security systems",
      "PLC/SCADA automation & structured optical fibre cabling",
    ],
  },
  {
    title: "Mechanical, Process & Plant Works",
    items: [
      "Hospital & institutional HVAC chillers and ventilation",
      "Process piping, fire-fighting hydrant mains & cranes",
      "Water, sewage, stormwater drainage & TSE pipelines",
      "Industrial insulation, pipe gantries & scaffolding",
    ],
  },
  {
    title: "Civil, Roads & Building Structures",
    items: [
      "Highways, urban paving, bridges & concrete culverts",
      "Underground & multi-storey reinforced concrete frames",
      "Structural steelwork, hospitals, stations & housing",
      "Curtain walling, stone cladding & turnkey refurbishments",
    ],
  },
];

export const PLANT_FLEET: PlantItem[] = [
  { description: "2014 MAN TGM 18.240 Crane Truck (4x4 - 8 Ton)", classification: "Heavy Load Vehicle", reference: "AHTH8CB003590536", qty: "1" },
  { description: "2016 Toyota Hilux GD-6 2.8 4x4", classification: "Light Load Vehicle", reference: "AAMN640562PX31209", qty: "1" },
  { description: "2016 Nissan NP300", classification: "Light Load Vehicle", reference: "Fleet Registry Verified", qty: "1" },
  { description: "14 Ton Hydraulic Tension Stringing Equipment", classification: "Overhead Powerline Equipment", reference: "Stringing Kit", qty: "2 Sets" },
  { description: "Run Out Pulleys", classification: "Overhead Powerline Equipment", reference: "Stringing Kit", qty: "10" },
  { description: "Chain Block 2 Ton", classification: "Overhead Powerline Equipment", reference: "Lifting Gear", qty: "5" },
  { description: "Cable Drum Stand", classification: "Overhead Powerline Equipment", reference: "Reticulation", qty: "2" },
  { description: "Clamping Shoes", classification: "Overhead Powerline Equipment", reference: "Overhead Line", qty: "6 Pairs" },
  { description: "Major Tech High Voltage Insulation Tester 10,000V (K3123A)", classification: "HV Testing Equipment", reference: "#7029346", qty: "2" },
  { description: "Hellermann Tyton T1825 Loop / PSC / Load Tester (1000V)", classification: "Testing Equipment", reference: "1851635", qty: "5" },
  { description: "Fluke 1000V AC/DC Clamp Meter", classification: "Testing Equipment", reference: "16739867", qty: "4" },
  { description: "Major Tech Phase Rotation Meter (8031F, 600V)", classification: "Testing Equipment", reference: "15638903", qty: "3" },
  { description: "Major Tech K4105A Digital Earth Resistance Tester (2000 Ohm / 2mA)", classification: "Testing Equipment", reference: "1941723", qty: "3" },
  { description: "Major Tech TEL1TLB Polarity Tester (500mA)", classification: "Testing Equipment", reference: "1734468", qty: "4" },
  { description: "Hellermann Analog Insulation Tester (100V)", classification: "Testing Equipment", reference: "19234879", qty: "2" },
  { description: "Honda Generator 6kVA / 12000W", classification: "Power Plant", reference: "Site Power", qty: "3" },
  { description: "Hilti Jack Hammer & Hydraulic Crimping Tools", classification: "Power / Hydraulic Tools", reference: "Workshop & Site", qty: "2 / 3" },
  { description: "Makita 1250W Drills & Bosch 720W Angle Grinders", classification: "Power Tools", reference: "Fabrication", qty: "6 / 5" },
  { description: "Gedore Master Tool Boxes, Measuring Wheels & Extension Ladders", classification: "Hand, Survey & Access Gear", reference: "Field Kits", qty: "4 / 3 / 4" },
];

export const CONSULTANCY_SPECIALISTS = [
  "Consulting engineers across civil, structural, electrical, mechanical & telecoms",
  "Engineering technologists & calibration testing specialists",
  "Project planners, CAD draughtspersons & site surveyors",
  "Architects, environmental biologists & geoscientists",
  "Quantity surveyors, financial analysts & procurement specialists",
  "Construction managers & statutory OHS officers",
];
