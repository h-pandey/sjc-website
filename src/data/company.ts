export const company = {
  legalName: 'M/s Shree Jagannath Construction',
  tagline: 'Engineers and Contractors',
  description:
    'Fabrication, erection, heavy structural, pipelines, equipment, general order supply, manpower supply and maintenance works for integrated steel plants.',
  gstin: '21ACZFS0543D1Z7',
  email: 'sjcon.33@gmail.com',
  phone: '+91 890 500 5000',
  phoneHref: 'tel:+918905005000',
  location: 'Jajpur Road, Jajpur, Odisha 755019, India',
  address: 'Jajpur Road, Jajpur, Odisha 755019',
  foundedBalaji: 1992,
  foundedSjc: 2016,
  activeSite: 'Tata Steel Kalinganagar (Running)',
} as const

export const stats = [
  { value: 34, suffix: '+', label: 'Years of steel-plant experience' },
  { value: 350, suffix: '+', label: 'Workers at TSK & JSP Angul' },
  { value: 450, suffix: '+', label: 'Workers under L&T at various sites' },
  { value: 600, suffix: ' MT', label: 'Largest single-structure erection' },
] as const

export const services = [
  {
    title: 'Structural Fabrication',
    description:
      'Heavy structural fabrication for blast furnaces, cast houses, CRM buildings, pellet plants and junction houses.',
    icon: 'Layers',
  },
  {
    title: 'Erection & Alignment',
    description:
      'Precision erection of columns, roof trusses, crane guiders, furnace shells, cast house structures and equipment.',
    icon: 'Construction',
  },
  {
    title: 'Pipelines & Ducting',
    description:
      'Equipment piping, waste gas duct erection, ESP ducting and process piping across BF, SMS, HSM and sinter plants.',
    icon: 'GitBranch',
  },
  {
    title: 'Equipment Erection',
    description:
      'EOT cranes, caster equipment, RH/LF systems, conveyors, stock house equipment and material handling systems.',
    icon: 'Cog',
  },
  {
    title: 'Manpower Supply',
    description:
      'Skilled and unskilled workforce deployment — fitters, welders, riggers, supervisors and safety stewards.',
    icon: 'Users',
  },
  {
    title: 'Maintenance & Shutdowns',
    description:
      'Regular field maintenance and planned shutdown jobs to extend plant life and operational reliability.',
    icon: 'Wrench',
  },
  {
    title: 'General Order Supply',
    description:
      'Procurement and supply support aligned to project schedules and client specifications.',
    icon: 'Package',
  },
  {
    title: 'Safety & Quality',
    description:
      'Strict adherence to site safety protocols — 4-Star Safety rating from Tata Steel.',
    icon: 'ShieldCheck',
  },
] as const

export const plantAreas = [
  'Blast Furnace (BF)',
  'COBP',
  'Sinter Plant',
  'RMHS',
  'SMS',
  'CEPT',
  'Pellet Plant',
  'HSM / CRM',
] as const

export const clients = [
  'Tata Steel Kalinganagar',
  'Tata Steel Jamshedpur',
  'Tata Steel Joda',
  'Jindal Steel Angul',
  'L&T',
  'Bokaro Steel Plant',
  'Vizag Steel Plant',
  'Bhushan Steel Angul',
] as const

export const leadership = [
  {
    name: 'Mr. Y Narayan Rao',
    role: 'Founder',
    bio: 'Started Balaji Construction in 1992. A veteran in steel plant construction with decades of experience across major integrated steel plants in India.',
  },
  {
    name: 'Mr. Shankar Rao',
    role: 'Director',
    bio: 'Joined in 2016 to form Shree Jagannath Construction — combining legacy expertise with modern technology and ambitious growth in steel infrastructure.',
  },
] as const

export const technicians = [
  'Mechanical Engineer',
  'Mechanical Foreman / Supervisor',
  'Safety Supervisor',
  'Mechanical Fitter',
  'General Fitter (Piping, Ducting, Vessels & Plates)',
  'Fabricator (Structural Fabrication & Erection)',
  'Welder (Arc, Argon, CO₂)',
  'Gas Cutter & Grinder',
  'Rigging Foreman',
  'Rigger and Driller',
  'Skilled & Unskilled Workmen',
] as const

export const timeline = [
  { year: '1992', title: 'Balaji Construction founded', detail: 'Mr. Y Narayan Rao establishes the firm in Jamshedpur steel-plant ecosystem.' },
  { year: '1992–2016', title: 'L&T partnership era', detail: 'Major fabrication & erection at Tata Steel Jamshedpur, Bokaro, Vizag, Bhushan Angul, Jindal Angul and Noamundi.' },
  { year: '2016', title: 'Shree Jagannath Construction', detail: 'Shankar Rao joins — new entity focused on new-age steel plant infrastructure.' },
  { year: '2016–2020', title: 'Tata Steel Kalinganagar Phase-I', detail: 'BF, SMS, HSM, BPP, coke plant, sinter plant — Duburi site completed.' },
  { year: '2020–2026', title: 'TSK Phase-II Expansion', detail: 'CRM, Pellet Plant and BF-2 — ongoing major structural erection (600 MT single job).' },
  { year: 'Today', title: 'Active operations', detail: '350+ workers at TSK & JSP Angul; 450+ under L&T at various locations.' },
] as const

export const legacyProjects = [
  { location: 'Tata Steel, Jamshedpur', scope: 'HSM, Sinter (SP1–SP4), LD#2/3, Pellet Plant, CRM, Furnaces E–I', status: 'Completed' },
  { location: 'Bokaro Steel Plant', scope: 'BF#3 modernisation — ESP, cast house, piping', status: 'Completed' },
  { location: 'Vizag Steel Plant', scope: 'BF#3 greenfield — fabrication, erection, ducting, equipment', status: 'Completed' },
  { location: 'Bhushan Steel, Angul', scope: 'BF, sinter, BOF, CHS, HSM fabrication & erection', status: 'Completed' },
  { location: 'Jindal Steel & Power, Angul', scope: 'LD#2 finishing, RMHS conveyor system', status: 'Completed' },
  { location: 'Noamundi TISCO Mines', scope: 'Conveyor galleries, junction houses, bins, reclaimers', status: 'Completed' },
  { location: 'Tata Steel Kalinganagar Phase-I', scope: 'BF, SMS, HSM piping, BPP, coke plant, sinter', status: 'Completed' },
  { location: 'Reliance Jamnagar', scope: 'Coal handling system', status: 'Completed' },
] as const

export const activeProjects = [
  {
    area: 'CETP',
    location: 'Tata Steel Kalinganagar',
    scope: 'Building erection & fabrication, crane guider and rail alignment',
    tonnage: '~600 MT',
    progress: '80% complete',
  },
  {
    area: 'PC#4 & PC#5 — RMBS',
    location: 'Tata Steel Kalinganagar',
    scope: 'GR-23, GR-3, TR-3, TW-1 and CJH#16 fabrication, erection & alignment',
    tonnage: '~400 MT',
    progress: '100% complete',
  },
  {
    area: 'SJH#7 — RMHS',
    location: 'Tata Steel Kalinganagar',
    scope: 'Slag circuit junction house, SRC#5, GR-1, wagon tippler control room',
    tonnage: '—',
    progress: 'Completed',
  },
  {
    area: 'HSM',
    location: 'Tata Steel Kalinganagar',
    scope: 'Side runner, sheeting post, wind girder, staircase, control room, shutter gate',
    tonnage: '~150 MT',
    progress: '100% complete',
  },
] as const

export const tskPhase2Jobs = [
  { period: '2020–2021', location: 'CRM', activity: 'ARP Building — total structure erection', tonnage: 600 },
  { period: '2021–2022', location: 'CRM', activity: 'Role Colland Plant — rostar tank, equipment, chute, columns, roof truss', tonnage: 300 },
  { period: '2022–2024', location: 'Pellet Plant', activity: 'Induration building — crane guider, floor beam, staircase', tonnage: 200 },
  { period: '2022–2024', location: 'Pellet Plant', activity: 'Screen building — floor, roof truss, roof beam, staircase', tonnage: 150 },
  { period: '2022–2024', location: 'BF-2', activity: 'Main furnace shell erection (Parts 3 & 4)', tonnage: 950 },
  { period: '2022–2024', location: 'BF-2', activity: 'Furnace middle & upper towers', tonnage: 978 },
  { period: '2022–2024', location: 'BF-2', activity: 'Cast house — tyre platform, floor beams, roof girders & trusses', tonnage: 956 },
] as const

export const awards = [
  { year: '2024', title: '4-Star Safety Rating', org: 'Tata Steel' },
  { year: '2024', title: 'India 5000 Best MSME Awards — Winner', org: 'India 5000' },
  { year: '2024', title: 'Certificate of Appreciation — Best Safety Compliance Business Partner', org: 'Tata Steel (Service Category)' },
  { year: '2024', title: 'Vendors Conclave — Token of Appreciation', org: 'Tata Steel Kalinganagar' },
  { year: '2025', title: 'Universal Global Excellence Award — Winner', org: 'Universal Global' },
  { year: '2025', title: 'Rashtriya Udyog Ratan Award — Winner', org: 'National Achievers Recognition Forum' },
  { year: '2025', title: 'India 500 CEO Awards — Winner', org: 'National Achievers Recognition Forum' },
  { year: '2025', title: 'Certificate of Appreciation — TSK PH-II Expansion', org: 'Tata Steel' },
  { year: '2026', title: 'Excellence Award — Heavy Structural Fabrication & Erection', org: 'National Achievers Recognition Forum' },
  { year: '2026', title: 'India 5000 Best MSME Awards — Winner', org: 'India 5000' },
  { year: '2026', title: 'India 500 CEO Awards — Winner', org: 'National Achievers Recognition Forum' },
] as const

export const mission =
  'To become a leading infrastructure company — building units that are productive, efficient, eco-friendly and sustainable.'

export const vision =
  'To help build new, better, efficient, innovative and eco-friendly steel plants — ensuring longevity through proper maintenance works and shutdowns.'
