export const MEDIA = {
  heroVideo: "/archemist_delivery_reel.mp4",
  heroFallback: "/commercial-warehouse.jpeg",
  industrialPlant: "/industrial-complex.jpeg",
  pebStructure: "/peb-structure.jpeg",
  commercialFacility: "/commercial-warehouse.jpeg",
  corporateInterior: "/commercial-interior.jpeg",
};

export type ProjectSector =
  | "INDUSTRIAL"
  | "COMMERCIAL"
  | "INSTITUTIONAL"
  | "WORKPLACE & RETAIL";

export type ProjectStatus = "COMPLETED" | "ONGOING";

export type HighlightIconType =
  | "spatial"
  | "material"
  | "climate"
  | "engineering"
  | "mep"
  | "turnkey";

export interface ProjectHighlight {
  title: string;
  description: string;
  iconType: HighlightIconType;
}

export interface ProjectItem {
  id: number;
  slug: string;
  name: string;
  category: string;
  scope: string;
  type: string;
  sector: ProjectSector;
  tags: string[];
  client: string;
  status: ProjectStatus;
  location: string;
  refCode?: string;
  size?: string;
  briefQuote: string;
  briefDescription: string[];
  highlights: ProjectHighlight[];
  photos: string[];
  images: string[];
  description?: string;
}

const crodaPhotos = [
  "/images/projects/croda-chemicals-01.webp",
  "/images/projects/croda-chemicals-02.webp",
  "/images/projects/croda-chemicals-03.webp",
  "/images/projects/croda-chemicals-04.webp",
  "/images/projects/croda-chemicals-05.webp",
];

const shellPhotos = [
  "/images/projects/shell-01.webp",
  "/images/projects/shell-02.webp",
  "/images/projects/shell-03.webp",
  "/images/projects/shell-04.webp",
  "/images/projects/shell-05.webp",
  "/images/projects/shell-06.webp",
  "/images/projects/shell-07.webp",
  "/images/projects/shell-08.webp",
  "/images/projects/shell-09.webp",
];

const keniPhotos = [
  "/images/projects/mr-keni-01.webp",
  "/images/projects/mr-keni-02.webp",
  "/images/projects/mr-keni-03.webp",
  "/images/projects/mr-keni-04.webp",
  "/images/projects/mr-keni-05.webp",
  "/images/projects/mr-keni-06.webp",
];

const gondhaliPhotos = [
  "/images/projects/santosh-gondhali-01.webp",
  "/images/projects/santosh-gondhali-02.webp",
  "/images/projects/santosh-gondhali-03.webp",
  "/images/projects/santosh-gondhali-04.webp",
  "/images/projects/santosh-gondhali-05.webp",
  "/images/projects/santosh-gondhali-06.webp",
];

const mahajanPhotos = ["/images/projects/sandeep-mahajan-01.webp"];

const pokhalePhotos = [
  "/images/projects/santosh-pokhale-01.webp",
  "/images/projects/santosh-pokhale-02.webp",
  "/images/projects/santosh-pokhale-03.webp",
  "/images/projects/santosh-pokhale-04.webp",
  "/images/projects/santosh-pokhale-05.webp",
];

const hiltonPhotos = [
  "/images/projects/hilton-center-01.webp",
  "/images/projects/hilton-center-02.webp",
  "/images/projects/hilton-center-03.webp",
  "/images/projects/hilton-center-04.webp",
  "/images/projects/hilton-center-05.webp",
  "/images/projects/hilton-center-06.webp",
  "/images/projects/hilton-center-07.webp",
];

const waterfront501Photos = [
  "/images/projects/Waterfront501-1.webp",
  "/images/projects/Waterfront501-2.webp",
  "/images/projects/Waterfront501-3.webp",
  "/images/projects/Waterfront501-4.webp",
  "/images/projects/Waterfront501-5.webp",
  "/images/projects/Waterfront501-6.webp",
  "/images/projects/Waterfront501-7.webp",
  "/images/projects/Waterfront501-8.webp",
  "/images/projects/Waterfront501-9.webp",
];

const waterfront502Photos = [
  "/images/projects/Waterfront502-1.webp",
  "/images/projects/Waterfront502-2.webp",
  "/images/projects/Waterfront502-3.webp",
  "/images/projects/Waterfront502-4.webp",
  "/images/projects/Waterfront502-5.webp",
  "/images/projects/Waterfront502-6.webp",
  "/images/projects/Waterfront502-7.webp",
  "/images/projects/Waterfront502-8.webp",
  "/images/projects/Waterfront502-9.webp",
];

const elevatePhotos = [
  "/images/projects/elevate-01.webp",
  "/images/projects/elevate-02.webp",
  "/images/projects/elevate-03.webp",
  "/images/projects/elevate-04.webp",
  "/images/projects/elevate-05.webp",
  "/images/projects/elevate-06.webp",
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    slug: "croda-chemicals",
    name: "Croda Chemicals",
    category: "Industrial Architecture",
    scope: "Industrial Facility",
    type: "Industrial",
    sector: "INDUSTRIAL",
    tags: ["Industrial Architecture", "Chemical Processing", "Structural Engineering", "Safety Compliance"],
    client: "Croda India",
    status: "COMPLETED",
    location: "NAVI MUMBAI INDUSTRIAL ZONE, INDIA",
    refCode: "ARC-IND-CC01",
    size: "Specialist Processing",
    briefQuote:
      "Precision-engineered chemical processing infrastructure balancing stringent safety standards with uninterrupted operational flow.",
    briefDescription: [
      "Croda Chemicals required a specialized industrial processing facility engineered to meet international specialty chemical manufacturing and hazard-containment protocols within the Navi Mumbai industrial belt.",
      "Archemist delivered integrated architectural planning, heavy structural engineering, and coordinated utility routing—aligning process bays, laboratory zones, and clean service corridors for efficient, compliant operations."
    ],
    highlights: [
      {
        title: "Process Zoning",
        description: "Clear separation between controlled chemical processing bays, clean laboratories, and administrative zones.",
        iconType: "spatial",
      },
      {
        title: "Industrial Durability",
        description: "Corrosion-resistant finishes, heavy-duty structural framing, and chemical-grade flooring assemblies.",
        iconType: "material",
      },
      {
        title: "Safety & Utilities",
        description: "Engineered ventilation, fire-rated compartmentalization, and accessible overhead MEP service spines.",
        iconType: "engineering",
      },
    ],
    photos: crodaPhotos,
    images: crodaPhotos,
    description:
      "Specialized industrial chemical plant architecture and structural execution built for advanced manufacturing standards and safety protocols.",
  },
  {
    id: 2,
    slug: "shell",
    name: "SHELL",
    category: "Workplace & Interiors",
    scope: "Industrial Facility",
    type: "Interior Design",
    sector: "WORKPLACE & RETAIL",
    tags: ["Corporate Interiors", "Industrial Campus", "MEP Coordination", "Turnkey Fit-Out"],
    client: "SHELL",
    status: "COMPLETED",
    location: "CORPORATE INDUSTRIAL CAMPUS, INDIA",
    refCode: "ARC-WPI-SH02",
    size: "Turnkey Fit-Out",
    briefQuote:
      "A high-performance corporate operations workspace unified by clean architectural lines and disciplined MEP integration.",
    briefDescription: [
      "SHELL commissioned a turnkey interior architecture and operations workspace fit-out capable of supporting multidisciplinary engineering teams inside a demanding industrial campus.",
      "Our studio designed acoustic-balanced workstations, executive meeting suites, and collaborative breakout zones backed by precision-coordinated HVAC, lighting, and life-safety systems."
    ],
    highlights: [
      {
        title: "Workspace Flow",
        description: "Ergonomic floorplates connecting focused operational desks, conference suites, and collaborative lounges.",
        iconType: "spatial",
      },
      {
        title: "Tactile Surfaces",
        description: "Acoustic wall panelling, modular glazing, and durable corporate finishes calibrated for daily heavy use.",
        iconType: "material",
      },
      {
        title: "Integrated MEP",
        description: "Seamless ceiling coordination uniting linear architectural lighting, climate control, and AV readiness.",
        iconType: "mep",
      },
    ],
    photos: shellPhotos,
    images: shellPhotos,
    description:
      "World-class corporate interior architecture and operations workspace delivery for SHELL with high-performance MEP coordination.",
  },
  {
    id: 3,
    slug: "mr-keni-swapnapurti",
    name: "Mr Keni - Swapnapurti",
    category: "Residential Architecture",
    scope: "Residential Architecture",
    type: "Architecture",
    sector: "INSTITUTIONAL",
    tags: ["Residential Architecture", "Contemporary Villa", "Passive Ventilation", "Bespoke Design"],
    client: "Mr. Keni",
    status: "COMPLETED",
    location: "MAHARASHTRA, INDIA",
    refCode: "ARC-RES-KS03",
    size: "Private Residence",
    briefQuote:
      "Contemporary geometric clarity shaped around natural cross-ventilation, shaded terraces, and multi-generational family living.",
    briefDescription: [
      "Swapnapurti was envisioned as a calm, enduring family residence in Maharashtra that responds directly to the local tropical climate without relying on excessive mechanical cooling.",
      "Archemist articulated clean cantilevered volumes, deep recessed balconies, and double-height social spaces that invite filtered daylight while preserving privacy from the street."
    ],
    highlights: [
      {
        title: "Spatial Flow",
        description: "Open-plan living and dining cores connected vertically to private upper-level family suites.",
        iconType: "spatial",
      },
      {
        title: "Material Palette",
        description: "Warm timber soffits, textured neutral plaster, and crisp architectural glazing across facade planes.",
        iconType: "material",
      },
      {
        title: "Climate & Light",
        description: "Deep overhangs and cross-ventilated openings engineered to moderate solar heat gain year-round.",
        iconType: "climate",
      },
    ],
    photos: keniPhotos,
    images: keniPhotos,
    description:
      "Bespoke contemporary residential architectural design blending clean geometric lines, natural ventilation, and functional elegance.",
  },
  {
    id: 4,
    slug: "mr-santosh-gondhali-matru-vatsalya",
    name: "Mr Santosh Gondhali - Matru Vatsalya",
    category: "Residential Architecture",
    scope: "Residential Architecture",
    type: "Architecture",
    sector: "INSTITUTIONAL",
    tags: ["Residential Architecture", "Multi-Storey Villa", "Structural Design", "Facade Detailing"],
    client: "Mr. Santosh Gondhali",
    status: "COMPLETED",
    location: "MAHARASHTRA, INDIA",
    refCode: "ARC-RES-SG04",
    size: "Multi-Storey Villa",
    briefQuote:
      "A dignified multi-storey residence pairing sculptural facade proportions with enduring structural permanence.",
    briefDescription: [
      "Matru Vatsalya was briefed as a multi-storey private villa tailored for joint-family living, generous hospitality spaces, and low-maintenance exterior longevity.",
      "Our architectural and structural teams worked in tandem to frame expressive balconies, shaded sit-outs, and crisp vertical fins that give the residence a distinct neighborhood presence."
    ],
    highlights: [
      {
        title: "Multi-Level Zoning",
        description: "Clearly organized social entertaining floors below tranquil, sunlit private family quarters.",
        iconType: "spatial",
      },
      {
        title: "Facade Composition",
        description: "Layered stone cladding, weather-resistant exterior coats, and minimalist metal balustrade detailing.",
        iconType: "material",
      },
      {
        title: "Daylight & Shading",
        description: "Oriented fenestration and stepped projections capturing soft ambient daylight while blocking harsh glare.",
        iconType: "climate",
      },
    ],
    photos: gondhaliPhotos,
    images: gondhaliPhotos,
    description:
      "Custom residential architecture engineered for structural durability, optimal spatial flow, and enduring aesthetic harmony.",
  },
  {
    id: 5,
    slug: "mr-sandeep-mahajan",
    name: "Mr Sandeep Mahajan",
    category: "Workplace & Interiors",
    scope: "Residential Interior",
    type: "Interior Design",
    sector: "WORKPLACE & RETAIL",
    tags: ["Residential Interior", "Bespoke Woodwork", "Lighting Design", "Turnkey Execution"],
    client: "Mr. Sandeep Mahajan",
    status: "COMPLETED",
    location: "NAVI MUMBAI, INDIA",
    refCode: "ARC-INT-SM05",
    size: "Luxury Residence",
    briefQuote:
      "Tailored residential interiors defined by warm custom millwork, layered ambient lighting, and quiet sophistication.",
    briefDescription: [
      "For Mr. Sandeep Mahajan's residence in Navi Mumbai, the design brief called for a serene, clutter-free interior environment with concealed storage and refined material warmth.",
      "Archemist executed bespoke joinery, recessed cove illumination, and a cohesive neutral palette that elevates everyday comfort across the living spaces."
    ],
    highlights: [
      {
        title: "Tailored Layout",
        description: "Built-in cabinetry and clean spatial transitions maximizing usable floor area without visual clutter.",
        iconType: "spatial",
      },
      {
        title: "Crafted Millwork",
        description: "Custom veneer panelling, fluted timber accents, and precision-finished stone surfaces.",
        iconType: "material",
      },
      {
        title: "Ambient Lighting",
        description: "Layered warm indirect coves and focused architectural accents tuned for evening relaxation.",
        iconType: "climate",
      },
    ],
    photos: mahajanPhotos,
    images: mahajanPhotos,
    description:
      "Premium interior fit-out featuring tailored woodwork, ambient lighting schemes, and bespoke finishes.",
  },
  {
    id: 6,
    slug: "mr-santosh-pokhale",
    name: "Mr Santosh Pokhale",
    category: "Commercial Interiors",
    scope: "Commercial Interior",
    type: "Commercial Interior Fit-out",
    sector: "COMMERCIAL",
    tags: ["Commercial Interior", "Office Fit-Out", "Executive Suite", "Ergonomic Design"],
    client: "Mr. Santosh Pokhale",
    status: "COMPLETED",
    location: "NAVI MUMBAI COMMERCIAL HUB, INDIA",
    refCode: "ARC-COM-SP06",
    size: "Office Fit-Out",
    briefQuote:
      "An executive commercial office sculpted for decisive leadership, transparent collaboration, and acoustic poise.",
    briefDescription: [
      "Located in a busy Navi Mumbai commercial hub, this office fit-out needed to project executive credibility while keeping client meeting rooms and staff zones effortlessly connected.",
      "Archemist combined rich timber wall panelling, glazed acoustic partitions, and streamlined boardroom ergonomics under a disciplined turnkey delivery schedule."
    ],
    highlights: [
      {
        title: "Executive Flow",
        description: "Intuitive circulation linking the reception lounge, glass-enclosed boardroom, and director cabin.",
        iconType: "spatial",
      },
      {
        title: "Refined Finishes",
        description: "Walnut-toned fluted panelling, sleek acoustic glass framing, and muted stone desking.",
        iconType: "material",
      },
      {
        title: "Turnkey Precision",
        description: "Single-window execution covering bespoke furniture, concealed wiring, and climate distribution.",
        iconType: "turnkey",
      },
    ],
    photos: pokhalePhotos,
    images: pokhalePhotos,
    description:
      "High-productivity commercial interior workspace designed for operational efficiency, collaboration, and modern ergonomics.",
  },
  {
    id: 7,
    slug: "hilton-centre",
    name: "Hilton Centre",
    category: "Commercial Infrastructure",
    scope: "Commercial Building",
    type: "Maintenance / Commercial",
    sector: "COMMERCIAL",
    tags: ["Commercial Building", "Infrastructure Delivery", "Facility Upgrade", "Technical Maintenance"],
    client: "Hilton Centre Association",
    status: "COMPLETED",
    location: "CBD BELAPUR, NAVI MUMBAI, INDIA",
    refCode: "ARC-COM-HC07",
    size: "Commercial Complex",
    briefQuote:
      "Enduring commercial building architecture and technical stewardship keeping a landmark CBD Belapur address performing at its best.",
    briefDescription: [
      "Hilton Centre in Sector 11, CBD Belapur required comprehensive commercial infrastructure execution alongside ongoing technical building maintenance for its common areas and tenant corridors.",
      "Archemist upgraded arrival lobbies, circulation concourses, and essential building services with minimal disruption to daily business operations."
    ],
    highlights: [
      {
        title: "Arrival Experience",
        description: "Refreshed lobby and circulation lobbies designed for high daily footfall and clear wayfinding.",
        iconType: "spatial",
      },
      {
        title: "Commercial Grade",
        description: "Hard-wearing stone flooring, architectural timber slats, and resilient facade maintenance systems.",
        iconType: "material",
      },
      {
        title: "Service Continuity",
        description: "Proactive MEP and structural maintenance engineered for zero operational downtime.",
        iconType: "engineering",
      },
    ],
    photos: hiltonPhotos,
    images: hiltonPhotos,
    description:
      "Comprehensive commercial infrastructure execution and ongoing technical building maintenance ensuring uninterrupted business continuity.",
  },
  {
    id: 8,
    slug: "waterfront-unit-501",
    name: "Waterfront - Unit 501",
    category: "Workplace & Interiors",
    scope: "Residential Interior",
    type: "Interior Design",
    sector: "WORKPLACE & RETAIL",
    tags: ["Luxury Apartment", "Interior Architecture", "Minimalist Warmth", "Smart Living"],
    client: "Waterfront Residences — Unit 501",
    status: "COMPLETED",
    location: "WATERFRONT RESIDENCES, INDIA",
    refCode: "ARC-INT-W501",
    size: "Luxury Apartment",
    briefQuote:
      "Warm minimalist interior architecture uniting bespoke arches, Italian-inspired finishes, and seamless smart living.",
    briefDescription: [
      "Unit 501 at Waterfront Residences was designed to amplify natural waterfront light through an airy, warm-neutral material story and soft architectural curves.",
      "Archemist crafted custom backlit arched headboard niches, streamlined wardrobe systems, and integrated lighting controls that shift effortlessly from bright daytime living to calm evening ambiance."
    ],
    highlights: [
      {
        title: "Fluid Proportions",
        description: "Balanced furniture placement and full-height storage keeping rooms open and uncluttered.",
        iconType: "spatial",
      },
      {
        title: "Curated Palette",
        description: "Soft matte laminates, arched mirror backdrops, warm oak tones, and brushed brass accents.",
        iconType: "material",
      },
      {
        title: "Light & Automation",
        description: "Dimming scenes and concealed perimeter coves calibrated to enhance natural daylight.",
        iconType: "climate",
      },
    ],
    photos: waterfront501Photos,
    images: waterfront501Photos,
    description:
      "Sophisticated interior execution combining warm minimalist aesthetics with smart living integration and premium Italian finishes.",
  },
  {
    id: 9,
    slug: "waterfront-unit-502",
    name: "Waterfront - Unit 502",
    category: "Workplace & Interiors",
    scope: "Residential Interior",
    type: "Interior Design",
    sector: "WORKPLACE & RETAIL",
    tags: ["Luxury Apartment", "Artisan Styling", "Custom Cabinetry", "Architectural Lighting"],
    client: "Waterfront Residences — Unit 502",
    status: "COMPLETED",
    location: "WATERFRONT RESIDENCES, INDIA",
    refCode: "ARC-INT-W502",
    size: "Luxury Apartment",
    briefQuote:
      "Artisan interior detailing with sculpted lighting, tailored cabinetry, and serene acoustic calm.",
    briefDescription: [
      "Neighboring Unit 502 shares the waterfront orientation while establishing its own distinctive residential character through deeper timber contrasts and bespoke dining and living focal points.",
      "From custom ceiling luminaires to acoustically quiet bedroom retreats, every detail was detailed and executed by Archemist's turnkey interior team."
    ],
    highlights: [
      {
        title: "Cohesive Living",
        description: "Connected dining and kitchen sightlines anchored by sculptural pendant illumination.",
        iconType: "spatial",
      },
      {
        title: "Bespoke Joinery",
        description: "Fluted glass partitions, custom marble-top dining tables, and precision-built wardrobes.",
        iconType: "material",
      },
      {
        title: "Acoustic & Light",
        description: "Thoughtful glazing treatments and warm architectural lighting supporting restful interiors.",
        iconType: "climate",
      },
    ],
    photos: waterfront502Photos,
    images: waterfront502Photos,
    description:
      "Artisan interior styling with curated palettes, custom cabinetry, acoustic isolation, and architectural illumination.",
  },
  {
    id: 10,
    slug: "elevate",
    name: "Elevate",
    category: "Workplace & Interiors",
    scope: "Commercial / Residential",
    type: "Interior Design",
    sector: "WORKPLACE & RETAIL",
    tags: ["Mixed-Use Fit-Out", "Hospitality Finishes", "Modular Design", "Interior Architecture"],
    client: "Elevate Developments",
    status: "COMPLETED",
    location: "METROPOLITAN REGION, INDIA",
    refCode: "ARC-MIX-EL10",
    size: "Mixed-Use Fit-Out",
    briefQuote:
      "Expressive mixed-use interiors blending modular adaptability with hospitality-grade material richness.",
    briefDescription: [
      "Elevate required a forward-looking interior environment suited to both executive hospitality and flexible contemporary living within a fast-paced metropolitan setting.",
      "Archemist introduced adaptable spatial zones, bold textural contrasts, and refined lighting layers delivered under strict quality benchmarks."
    ],
    highlights: [
      {
        title: "Modular Flexibility",
        description: "Adaptable lounge and reception zones designed to transition smoothly between work and hospitality.",
        iconType: "spatial",
      },
      {
        title: "Hospitality Palette",
        description: "Statement stone surfaces, warm metallic trims, and bespoke upholstered seating vignettes.",
        iconType: "material",
      },
      {
        title: "Turnkey Execution",
        description: "End-to-end procurement, site supervision, and commissioning completed to schedule.",
        iconType: "turnkey",
      },
    ],
    photos: elevatePhotos,
    images: elevatePhotos,
    description:
      "Dynamic modern fit-out integrating flexible modular spaces, bold accents, and premium hospitality-grade finishes.",
  },
];

export function getProjectBySlug(slug?: string): ProjectItem | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase();
  return PROJECTS.find((p) => p.slug.toLowerCase() === normalized);
}

export const CLIENTS = [
  "Atlas Copco",
  "Magna",
  "JCB Siddharth Auto Engineers",
  "Inox Air Products",
  "Pricol",
  "Knorr-Bremse",
  "Praj",
  "DSV",
  "Stanley Black & Decker",
  "Shell",
  "Shell Energy",
  "Croda",
  "MAN",
  "Iberchem",
  "Aquapharm",
  "IAC",
  "TSI",
  "Femco",
  "Emdep",
  "Weiss",
];

export const STATS = [
  { value: "12+", label: "Years of Industry Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "25+", label: "Architects & Engineers" },
];

export const METHODOLOGY_STEPS = [
  { no: "01", verb: "Understand", title: "The Opportunity", desc: "Analyze site conditions, operational goals, capacity targets, and regulatory parameters before committing to form." },
  { no: "02", verb: "Identify", title: "Constraints", desc: "Surface structural, MEP, statutory, and schedule risks early so technical trade-offs are resolved on paper." },
  { no: "03", verb: "Coordinate", title: "The Solution", desc: "Align architecture, structural steel, PEB engineering, utilities, and BOQ specs within one integrated team." },
  { no: "04", verb: "Deliver", title: "The Outcome", desc: "Execute procurement, site construction, quality audits, and commissioning with single-window accountability." },
];

export const CAPABILITIES = [
  {
    no: "01",
    title: "Architecture",
    desc: "Concept design, space planning and construction documentation, led by our in-house architects.",
  },
  {
    no: "02",
    title: "Engineering",
    desc: "Structural, MEP and technical engineering, delivered by our dedicated team of engineers.",
  },
  {
    no: "03",
    title: "EPC",
    desc: "Engineering, procurement and construction executed end-to-end by one accountable team.",
  },
  {
    no: "04",
    title: "Turnkey",
    desc: "Single-window delivery from first drawing to handover, with ongoing maintenance support.",
  },
];

export interface SectorInfo {
  sectorKey: ProjectSector;
  title: string;
  desc: string;
  image: string;
  tag: string;
}

export const SECTORS: SectorInfo[] = [
  {
    sectorKey: "INDUSTRIAL",
    title: "INDUSTRIAL",
    desc: "Factories, manufacturing facilities, warehouses, logistics, PEB structures, industrial infrastructure.",
    image: MEDIA.pebStructure,
    tag: "HEAVY INFRA",
  },
  {
    sectorKey: "COMMERCIAL",
    title: "COMMERCIAL",
    desc: "Corporate offices, commercial developments, logistics hubs, tech parks, and commercial workplaces.",
    image: MEDIA.commercialFacility,
    tag: "CAMPUSES",
  },
  {
    sectorKey: "INSTITUTIONAL",
    title: "INSTITUTIONAL & RESIDENTIAL",
    desc: "Healthcare, education, residential architecture, laboratories, data centres, and dedicated institutions.",
    image: MEDIA.industrialPlant,
    tag: "ARCHITECTURE",
  },
  {
    sectorKey: "WORKPLACE & RETAIL",
    title: "WORKPLACE & INTERIORS",
    desc: "Corporate interiors, collaborative workplaces, luxury residential fit-outs, and turnkey interior design.",
    image: MEDIA.corporateInterior,
    tag: "INTERIORS",
  },
];

export const DELIVERY_CONTROLS = [
  "SAFETY",
  "QUALITY",
  "PROGRAMME",
  "COST",
  "COORDINATION",
  "COMMUNICATION",
];
