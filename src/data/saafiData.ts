export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  summary: string;
  outcomes: string[];
  imagePath?: string;
  imageAlt?: string;
  isMarquee?: boolean;
}

export interface ProcessStage {
  step: string;
  title: string;
  temperatureRange: string;
  description: string;
  keyControls: string[];
}

export interface ReactorConfiguration {
  id: string;
  label: string;
  shortLabel: string;
  capacityTpd: number;
  mode: 'Continuous' | 'Batch';
  feedstock: string;
  oilYieldPct: number;
  syngasPct: number;
  charPct: number;
  reactorTemp: string;
  calorificValue: string;
  primaryUse: string;
}

export interface OilAnalysisParameter {
  parameter: string;
  unit: string;
  value: string;
  highlight?: 'amber' | 'emerald';
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imagePath?: string;
}

export interface PlantSchematicItem {
  id: string;
  title: string;
  caption: string;
  imagePath: string;
}

export const COMPANY_INFO = {
  name: 'Saafi Renewables Pvt Ltd',
  shortName: 'Saafi Renewables',
  tagline: 'Nothing Wasted. Everything Valued.',
  description:
    'A pioneering clean-tech specialising in circular models addressing hard to recycle wastes eventually converting end-of-life waste streams into clean energy and industrial value.',
  address: 'D-202, Suyash Park, Sector 23, Ulwe, Navi Mumbai, Maharashtra, India',
  email: 'saafi@zenergies.biz',
  emailHref: 'mailto:saafi@zenergies.biz',
  workingHours: 'Monday – Saturday · Standard Business Hours (IST)',
  phoneDisplay: '+91 9920472576',
  phoneHref: 'tel:+919920472576',
  whatsappHref:
    'https://wa.me/919920472576?text=Hello%20Saafi%20Renewables%20Pvt%20Ltd%2C%20I%20would%20like%20to%20discuss%20industrial%20pyrolysis%20and%20chemical%20recycling%20solutions.',
  logoPath: '/assets/aistudio/logo_for_email_94d03d74.png',
  heroImagePath: '/src/assets/images/hero_pyrolysis_plant_1794657941366.jpg',
  fuelUpgradationImagePath: '/assets/aistudio/Gemini_Generated_Image_50b2l050b2l050b2_f3ad6ed7.png',
  segregationImagePath: '/src/assets/images/plastic_tyre_segregation_line_1794744746995.jpg',
  plantRenderPath: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_17.29.38_8ff0139b.jpeg',
  continuousReactorRenderPath: '/assets/aistudio/WhatsApp_Image_2026-11-14_at_17.29.37_54d1eaae.jpeg',
  plantPidPath: '/assets/aistudio/khanna_-_Edited_0d2ab19e.jpg',
  founderPhotoPath: '/assets/aistudio/WhatsApp_Image_2026-10-27_at_11.09.22_7f7527ef.jpeg',
};

export const PLANT_SCHEMATICS: PlantSchematicItem[] = [
  {
    id: 'layout-3d',
    title: 'Plant 3D Layout',
    caption: 'Rotary reactor, condensation towers, cooling basin, and PLC control unit',
    imagePath: COMPANY_INFO.plantRenderPath,
  },
  {
    id: 'continuous-line',
    title: 'Continuous Reactor Line',
    caption: 'Gas-sealed screw feeding, insulated thermal cracking kiln, and vertical scrubber',
    imagePath: COMPANY_INFO.continuousReactorRenderPath,
  },
  {
    id: 'pid-blueprint',
    title: 'Process P&ID Schematic',
    caption: 'Complete piping & instrumentation flow: water, oil, and process gas lines',
    imagePath: COMPANY_INFO.plantPidPath,
  },
];

export const LEADERSHIP: LeadershipMember[] = [
  {
    id: 'zainab-bookwala',
    name: 'Zainab Bookwala',
    role: 'Founder',
    bio: 'Zainab leads our waste-to-energy initiatives, driving clean energy innovation and circular-economy alignment.',
    imagePath: COMPANY_INFO.founderPhotoPath,
  },
  {
    id: 'kutbuddin-ujjainwala',
    name: 'Kutbuddin Ujjainwala',
    role: 'Consultant — Strategy & Commercial Operations',
    bio: 'Kutbuddin spearheads corporate strategy, industrial partnerships, and project execution to scale commercially viable circular-economy solutions.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'waste-segregation',
    index: '01',
    title: 'Waste Segregation Services',
    summary:
      'Automated and mechanical plastic segregation workflows that isolate high-value polymers until color separation as well as end-of-life tyre streams from mixed municipal, coastal, and industrial waste prior to eventual thermal processing.',
    outcomes: [],
    imagePath: COMPANY_INFO.segregationImagePath,
    imageAlt: 'Automated industrial conveyor sorting plastic polymers and tyre streams',
  },
  {
    id: 'chemical-recycling',
    index: '02',
    title: 'Development of Chemical Recycling Models',
    subtitle: 'Patented Reactor & Process Designs',
    summary:
      'Patented designs and techno-commercial plant architectures covering 5–30 TPD continuous and batch plastic pyrolysis systems, piping & instrumentation blueprints, and scalable chemical recycling models.',
    outcomes: [
      'Patented continuous feeding, cracking, and slag discharge configurations',
      'Modular 5–30 TPD continuous & batch plastic and tyre plant blueprints',
      'Integrated fractionating towers, desulfurization, and gas-loop scrubbing',
    ],
    isMarquee: true,
  },
  {
    id: 'fuel-upgradation',
    index: '03',
    title: 'Fuel Upgradation',
    summary:
      'Post-processing and catalytic filtration solutions paired with stepwise proprietary additives to remove impurities and achieve lab-verified, ideal industrial fuel characteristics.',
    outcomes: [
      'Verified Gross Calorific Value of 10,824 Cal/gm from upgraded waste plastic oil',
      'Ultra-low moisture output (0.28% water content) with 832 kg/m³ density',
      'Multi-stage catalytic polishing, dealcoholization, and natural nanofiltration',
    ],
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Color Segregation & Continuous Feeding',
    temperatureRange: 'Ambient · <5% Moisture',
    description:
      'Shredded plastic or tyre feedstock undergoes optical color and polymer separation before entering a gas-sealed feeding system to eliminate oxygen ingress and moisture spikes.',
    keyControls: ['Optical color sorting', 'Gas-sealed screw feeder', 'Automated hopper metering'],
  },
  {
    step: '02',
    title: 'Micro-Negative Pressure Cracking',
    temperatureRange: '380 °C – 460 °C',
    description:
      'Conditioned feedstock enters our patented Carbon Steel + 304 Stainless Steel cracking and pyrolyzing reactor operating under micro-negative pressure to break long polymer chains.',
    keyControls: ['Negative-pressure interlock', '4-burner thermal zones', 'Continuous slag discharge'],
  },
  {
    step: '03',
    title: 'Fuel Upgradation & Catalytic Filtration',
    temperatureRange: '45 °C – 260 °C',
    description:
      'Hydrocarbon vapors pass through fractionating towers, three-level cooling tanks, oil-water separators, catalytic desulfurization vessels, proprietary additive dosing, and natural nanofiltration.',
    keyControls: ['Dual fractionating towers', 'Stepwise additive dosing', 'Multi-stage nanofiltration'],
  },
  {
    step: '04',
    title: 'Syngas Loop & Emission Scrubbing',
    temperatureRange: 'Closed-Loop Recovery',
    description:
      'Non-condensable gas routes through biological gas buffers and anti-backfire arrestors back to environmental normal-pressure burners for smokeless heat recovery.',
    keyControls: ['Anti-backfire safety valves', 'Environmental gas burners', 'PLC automated monitoring'],
  },
];

export const REACTOR_CONFIGURATIONS: ReactorConfiguration[] = [
  {
    id: 'plastic-5tpd',
    label: '5 TPD Continuous / Batch Plastic',
    shortLabel: '5 TPD Plastic',
    capacityTpd: 5,
    mode: 'Continuous',
    feedstock: 'Segregated Waste Plastic (Polyolefins / MLP)',
    oilYieldPct: 72,
    syngasPct: 16,
    charPct: 8,
    reactorTemp: '410 – 450 °C',
    calorificValue: '10,824 Cal/gm',
    primaryUse: 'Modular industrial boiler fuel & chemical feedstock',
  },
  {
    id: 'plastic-15tpd',
    label: '15 TPD Continuous Plastic Line',
    shortLabel: '15 TPD Continuous',
    capacityTpd: 15,
    mode: 'Continuous',
    feedstock: 'Segregated Waste Plastic (Polyolefins / MLP)',
    oilYieldPct: 74,
    syngasPct: 15,
    charPct: 8,
    reactorTemp: '410 – 460 °C',
    calorificValue: '10,824 Cal/gm',
    primaryUse: 'Commercial industrial fuel oil & circular naphtha',
  },
  {
    id: 'tyre-20tpd',
    label: '20 TPD Batch Tyre / Plastic',
    shortLabel: '20 TPD Batch',
    capacityTpd: 20,
    mode: 'Batch',
    feedstock: 'End-of-Life Tyres (ELT) / Mixed Polymers',
    oilYieldPct: 46,
    syngasPct: 12,
    charPct: 35,
    reactorTemp: '390 – 430 °C',
    calorificValue: '10,400 Cal/gm',
    primaryUse: 'Tyre pyrolysis oil (TPO), recovered carbon black & steel',
  },
  {
    id: 'plastic-30tpd',
    label: '30 TPD Continuous Plastic Line',
    shortLabel: '30 TPD Continuous',
    capacityTpd: 30,
    mode: 'Continuous',
    feedstock: 'Segregated Waste Plastic (Polyolefins / MLP)',
    oilYieldPct: 75,
    syngasPct: 14,
    charPct: 8,
    reactorTemp: '420 – 460 °C',
    calorificValue: '10,824 Cal/gm',
    primaryUse: 'Utility-scale industrial pyrolysis & refinery upgrading',
  },
];

export const OIL_ANALYSIS_PARAMETERS: OilAnalysisParameter[] = [
  { parameter: 'Sample Temperature', unit: '°C', value: '31' },
  { parameter: 'Water Content (by reaction vessel)', unit: '%', value: '0.28', highlight: 'emerald' },
  { parameter: 'Density', unit: 'kg/m³', value: '832' },
  { parameter: 'Gross Calorific Value (GCV)', unit: 'Cal/gm', value: '10,824', highlight: 'amber' },
  { parameter: 'Sulphur', unit: '%', value: '0.56' },
];

export const STAKEHOLDER_METRICS = [
  {
    label: 'Verified Oil GCV',
    value: '10,824 Cal/gm',
    detail: 'High-energy Gross Calorific Value achieved from waste-plastic pyrolysis oil',
  },
  {
    label: 'Plant Configuration',
    value: '5–30 TPD',
    detail: 'Batch and continuous plastic & tyre pyrolysis plants',
  },
  {
    label: 'Water Content (Oil)',
    value: '0.28%',
    detail: 'Ultra-low moisture condensed pyrolysis oil after catalytic upgrading',
  },
  {
    label: 'Fuel Oil Density',
    value: '832 kg/m³',
    detail: 'Clean light-fraction industrial pyrolysis fuel oil density at 31 °C',
  },
];
