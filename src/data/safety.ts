export const SAFETY_POLICY = {
  legislation:
    "The Constitution of the Republic of Namibia, Labour Act, 2007 (Act No. 11 of 2007), Government Notice No. 156 of 1992 (Regulations Relating to the Health and Safety of Employees at Work), and Presidential Proclamation No. 10 (Part XI, Section 101).",
  generalStatements: [
    "Control occupational health and safety risks across every site and workshop.",
    "Consult regularly with employees and elected safety representatives on workplace conditions.",
    "Provide, test and maintain safe plant, lifting machinery and calibrated electrical test gear.",
    "Control storage, handling and safe disposal of hazardous substances (COSHH).",
    "Provide induction, task competency training and supervision at zero cost to employees.",
    "Prevent workplace accidents, injuries and occupational illnesses through annual policy review.",
  ],
  governance: [
    { role: "Directors & Managing Member", duty: "Hold overall statutory responsibility and approve annual safety funding." },
    { role: "Appointed Safety Officer", duty: "Audits risk assessments, registers, PPE issue, permits and training compliance." },
    { role: "Line Managers & Foremen", duty: "Enforce method statements, induction records and daily site housekeeping." },
    { role: "Safety Representatives & Committees", duty: "Conduct quarterly inspections; committee convened within 3 months when requested by two or more representatives." },
  ],
  riskHierarchy: [
    { tier: "1. Eliminate", detail: "Remove hazardous activities wherever safer alternative work methods exist." },
    { tier: "2. Substitute", detail: "Replace plant or substances with lower-hazard equipment or chemicals." },
    { tier: "3. Isolate or segregate", detail: "Contain hazards using interlocked guarding and physical barriers." },
    { tier: "4. Engineering controls", detail: "Apply local exhaust ventilation, acoustic enclosures and mechanical lifting aids." },
    { tier: "5. Compatible PPE", detail: "Issue compliant personal protective equipment strictly as secondary protection where residual risk remains." },
  ],
  stopWorkRule:
    "Every employee, subcontractor and visitor is authorised and required to pause work immediately if machinery guarding is missing, electrical gear is ungrounded or site ground conditions turn unsafe, reporting at once to the Site Supervisor or Safety Officer.",
  noCostGuarantee:
    "No member of staff is charged for mandatory OHS training, inductions or compliant personal protective equipment.",
  controls: [
    {
      title: "Fire Safety & Emergency Drills",
      points: [
        "Escape routes, exits and fire doors kept unlocked and unobstructed throughout shifts.",
        "Weekly alarm checks; monthly user seal/gauge verification on fire extinguishers; annual external certification (GN 156 Chapter 3).",
        "Emergency evacuation drills executed in month 1 of employment, 3-monthly for night crews and 6-monthly for day teams.",
        "Immediate isolation and fire brigade notification for any gas leak or ignition hazard.",
      ],
    },
    {
      title: "Electrical Safety & Lockout / Tagout",
      points: [
        "Strict compliance with GN 156 Chapter 9; zero unqualified intervention on live conductors.",
        "Residual current circuit breakers (RCDs) protecting portable electrical tools; trailing leads excluded from pedestrian walkways.",
        "Cleaning, servicing or maintenance inside unguarded machinery authorised only after electrical isolation, physical lock-off and tagging.",
      ],
    },
    {
      title: "Lifting Equipment & Plant Inspections",
      points: [
        "Cranes, forklifts, HIAB lorry loaders, excavators, telehandlers and hoists display stamped Safe Working Load (SWL) and valid certificates.",
        "Pre-service thorough examination prior to deployment and following site re-assembly; statutory inspections every 6 or 12 months.",
      ],
    },
    {
      title: "Statutory Accident & Incident Reporting",
      points: [
        "Every injury, first-aid case and near miss is logged and investigated to prevent recurrence.",
        "Ministry of Labour / Health notification for fatalities, major injuries, electric shock/burns (>24h hospitalisation), lost-time injuries (>7 days within 15 working days) and dangerous occurrences (crane failure, overhead line contact, scaffold collapse >5m).",
      ],
    },
    {
      title: "COSHH, Noise & Vibration Exposure",
      points: [
        "COSHH: Assessed chemical register and Safety Data Sheets held on site; mixing chemical products strictly prohibited.",
        "Hand-Arm Vibration (HAV): Daily EAV 2.5 m/s² A(8) with mandatory ELV cap 5.0 m/s² A(8).",
        "Whole-Body Vibration (WBV): Daily EAV 0.5 m/s² A(8) with mandatory ELV cap 1.15 m/s² A(8).",
        "Manual handling tasks assessed prior to lifting; hoists and trolleys used wherever practicable.",
      ],
    },
    {
      title: "Welfare, Edge Protection & Permits",
      points: [
        "Minimum 11 m³ workspace volume per employee, pedestrian and vehicle traffic segregation and daily waste clearing.",
        "Guardrails at >= 1,100 mm with mid-rail wherever falls >= 2 m exist; fragile roof signage posted clearly.",
        "Potable water, washing basins, lockers and clean dining spaces separated from dust zones.",
        "Subcontractors submit OHS policies, risk assessments and liability insurance prior to arrival and obtain Permits to Work for hot work, electrical switching, height work and confined spaces.",
      ],
    },
  ],
  appendix1: [
    { role: "Site Safety Officer(s)", slots: "Two designated site safety officers per active works package", posting: "Full contact details posted on site notice board" },
    { role: "Safety Representative(s)", slots: "Worker-elected workplace health & safety representatives", posting: "Quarterly inspection schedule logged" },
    { role: "First Aid Personnel", slots: "Certified first aiders allocated per shift & crew size", posting: "First aid station & ambulance contacts posted" },
    { role: "Fire Safety Wardens", slots: "Designated emergency marshals & muster point leads", posting: "Extinguisher & alarm check logs maintained" },
    { role: "Health & Safety Committee Chair", slots: "Convened within 3 months of representative request", posting: "Annual policy endorsement signed by Management" },
  ],
};
