import type {
  NavItem,
  ComparisonItem,
  ProjectCaseStudy,
  ViralMoment,
  ConstructionService,
  OwnerPersonaContent,
  CatchphraseCardItem,
  ShapperFaqItem,
  ChallengeProofTier,
} from "@/types";

// Configurable contact details
export const BRAND_INFO = {
  name: "Black Diamond Builders",
  shortName: "BDB",
  tagline: "Uncompromising Construction Luxury & Engineered Integrity",
  founder: "Furqan Butt",
  founderRole: "Founder & CEO, Black Diamond Builders",
  tiktokHandle: "@blackdiamondbuilders",
  tiktokUrl: "https://www.tiktok.com/@blackdiamondbuilders",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "Official Desk (Configurable via env)",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  emailContact: "info@blackdiamondbuilders.pk",
  headquarters: "Islamabad / Rawalpindi Corridor, Pakistan",
  operatingRegions: [
    "Islamabad (DHA, Bahria, Gulberg, Sectoral)",
    "Rawalpindi & Cantt",
    "Wah Cantt & Taxila",
    "Kohistan Enclave",
    "Taj Residencia",
  ],
  enableSignatureIntroAnimation: true,
};

export const CATCHPHRASES = {
  challenge: "POORE PAKISTAN KO MERA CHALLENGE HAI.",
  challengeSub:
    "Match our structural steel ratios, concrete curing cycles, and laser-guided alignment. We don't build to sell quickly; we build to outlast generations.",
  shapperCritique:
    "Say NO to 'Shapper' Builders. No hollow plaster, no adulterated cement, no counterfeit steel.",
  shapperSectionTitle: "SHAPPERS WILL TALK. OUR WORK WILL ANSWER.",
  shapperSectionSubtitle:
    "When you build with Grade 60 steel and laser levels, cheap contractors get uncomfortable. Here is how our engineering answers the noise.",
  moustachePledge:
    "Mooch ko tao tabhi diya jata hai jab bunyaad mein sachai ho.",
  stickAuthority:
    "Every inch inspected with the stick. If it rings hollow, it gets broken down and rebuilt right.",
  overseasPromise:
    "Aap bahir baithein, aapka ghar mard ban kar banayenge.",
  enquiryHeading: "APNA GHAR BANWANA HAI?",
  enquirySubheading:
    "Whether you are building your personal residence in Pakistan or managing your estate from abroad, demand uncompromising structural excellence.",
};

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects", isBadge: true, badgeText: "Verified" },
  { label: "Videos", href: "/social", isBadge: true, badgeText: "TikTok" },
  { label: "Cost Estimator", href: "/#estimator", isBadge: true, badgeText: "Calculator" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Social Content Hub", href: "/social" },
];

export const OWNER_PERSONA: OwnerPersonaContent = {
  sectionTitle: "THE MAN. THE MISSION. THE METHOD.",
  subtitle:
    "Behind the viral catchphrases and social media authority is a relentless commitment to structural engineering honesty.",
  theMan: {
    title: "THE MAN",
    tagline: "Furqan Butt — The Voice of Construction Accountability",
    bio: "In an industry plagued by evasive contractors and sugarcoated promises, Furqan Butt created a viral movement across Pakistan through fearless on-site transparency. With his signature walking stick in hand, razor-sharp Punjabi directness, and the iconic moustache twirl, he has become one of Pakistan's most recognizable construction figures. He does not hide behind office desks; he lives on the job sites where concrete is poured and steel is tied.",
    signatureTraits: [
      "The Walking Stick: His inspection instrument to audit plaster density and structural plumb lines.",
      "Mooch Ko Tao: A cultural seal of honor—pledging personal reputation on every foundation.",
      "Uncompromising Directness: Calling out shoddy subcontracting in plain, honest language.",
    ],
  },
  theMission: {
    title: "THE MISSION",
    tagline: "Eradicating 'Shapper' Shortcuts from Pakistani Homes",
    bio: "Building a home in Pakistan is often the biggest financial investment of a family's lifetime, especially for Overseas Pakistanis sending hard-earned remittances from the UK, Gulf, USA, and Europe. Furqan Butt's mission is to demolish the culture of 'shapper' builders—fly-by-night operators who use adulterated cement, under-gauge steel, and crooked masonry hidden under thick, brittle plaster.",
    manifesto:
      "A home must stand for 100 years, not start cracking after the first monsoon. If a contractor cuts a single corner, they steal from a family's future. That practice ends here.",
    keyCommitments: [
      "100% Certified Prime Grade 60 Steel with batch test certificates.",
      "Complete transparency: verified BOQs with zero hidden escalations.",
      "Direct owner access for overseas clients with daily high-resolution video audits.",
    ],
  },
  theMethod: {
    title: "THE METHOD",
    tagline: "Engineering Rigor Over Surface Fluff",
    protocol:
      "Every Black Diamond project follows a strict structural discipline that leaves zero room for error. We do not eyeball walls—we use digital multi-axis laser levels. We do not strip shuttering early to rush progress—we mandate 14 full days of dedicated water ponding and curing. And before any wall is plastered, Furqan Butt inspects every foot with the stick.",
    inspectionPoints: [
      "Digital Laser-Level Plumb Verification across all brick coursing.",
      "Dual-layer SBS torch-applied waterproofing membrane for all basements & wet areas.",
      "High-density vibrated concrete mixes with washed Chenab / Lawrencepur aggregate.",
      "Heavy-duty rebar spacing with seismic ring ties in all columns and plinth beams.",
    ],
  },
};

export const CHALLENGE_PROOF_TIERS: ChallengeProofTier[] = [
  {
    id: "tier-1",
    title: "Structural Steel Integrity",
    metric: "100% Prime Grade 60 Rebar",
    marketShortcut:
      "Sub-contractors routinely mix uncertified re-rolled steel or use under-gauge rebar to save 20-30% on material budgets, risking catastrophic failure in earthquakes.",
    blackDiamondProof:
      "Mill-certified prime deformed Grade 60 steel only. Spacing verified with calipers and seismic tie rings installed in every column before concrete pour.",
    stickVerificationNote: "Rapped with the stick and audited on-site before shutter closing.",
  },
  {
    id: "tier-2",
    title: "Masonry & Digital Laser Plumb",
    metric: "0mm Deviation Across Height",
    marketShortcut:
      "Eyeballed plumb-bobs result in crooked brick coursing. Subcontractors subsequently conceal 2-inch hollow plaster wedges that shear and crack within two seasons.",
    blackDiamondProof:
      "Multi-axis digital laser projections on every single wall. First-class AWWAL kiln bricks laid with millimeter joint alignment; thin, uniform plaster only.",
    stickVerificationNote: "The stick raps on every finished wall. If hollow, the wall is broken down.",
  },
  {
    id: "tier-3",
    title: "Concrete Curing Discipline",
    metric: "14-Day Mandatory Ponding",
    marketShortcut:
      "Contractors remove wooden shuttering in 3 to 4 days to rush to their next gig, leaving concrete unhydrated and structurally brittle.",
    blackDiamondProof:
      "Full 14-day dedicated water ponding protocol on all roof slabs and wet curing wraps on columns. Laboratory core-compressive tests verify 3000+ PSI.",
    stickVerificationNote: "Inspected daily with physical water pond depth logs.",
  },
  {
    id: "tier-4",
    title: "Radical Remote Transparency",
    metric: "Daily 4K WhatsApp Audits",
    marketShortcut:
      "Overseas clients receive vague text messages, staged photos, and surprise bill escalations while materials are quietly stolen from the site.",
    blackDiamondProof:
      "Uncut 4K video walkthroughs, steel delivery batch sheets, and milestone escrow accounts. Furqan Butt directly walks overseas owners through every pour.",
    stickVerificationNote: "Every milestone verified by Furqan Butt before invoice release.",
  },
];

export const SHAPPER_SECTION_DATA: {
  title: string;
  subtitle: string;
  introText: string;
  faqs: ShapperFaqItem[];
  videoPlaceholderNote: string;
} = {
  title: "SHAPPERS WILL TALK. OUR WORK WILL ANSWER.",
  subtitle:
    "In Pakistani construction, doing things right makes corner-cutting competitors very nervous. Here is our playful, evidence-backed answer to the noise.",
  introText:
    "When you use certified Grade 60 steel, wash your sand, and bring digital laser levels to a job site, traditional contractors say you are 'doing too much.' We call them 'shappers'—because just like a cheap plastic bag, their promises tear under the first storm.",
  videoPlaceholderNote:
    "[Authentic Video Slot: Furqan Butt Addressing Contractor Myths & Tapping Walls With The Stick]",
  faqs: [
    {
      id: "faq-1",
      question: "“Why does Black Diamond use so much heavy steel?”",
      critiqueQuote: "Bhai itna saria lagane ki kya zaroorat hai? Paison ka zaya hai.",
      ourAnswer:
        "Because earthquakes do not negotiate with your budget. We build homes to outlast generations, not to save a quick buck on plinth beams.",
      engineeringProof:
        "Grade 60 prime steel ratio follows international seismic structural engineering codes, ensuring ductile flex during seismic ground motion.",
    },
    {
      id: "faq-2",
      question: "“Isn't hollow plaster normal in Pakistani houses?”",
      critiqueQuote: "Thori bohat aawaz to aati hai, Pakistan mein koi aisi diwaar nahi jis mein aawaz na ho.",
      ourAnswer:
        "It is only normal for 'shapper' builders who rush unwashed sand and uneven mortar. At Black Diamond, if a wall sounds hollow when rapped with the stick, it gets broken down.",
      engineeringProof:
        "Laser-straight masonry ensures an even 0.5-inch plaster coat that bonds chemically to the brickwork without void pockets.",
    },
    {
      id: "faq-3",
      question: "“Why wait 14 days for slab curing when others do 3 days?”",
      critiqueQuote: "Chhat sookh gayi hai, 3 din baad shuttering kholo agla kaam shuru karo.",
      ourAnswer:
        "Surface drying is not curing. Cement hydration is a chemical reaction that requires continuous water contact for a minimum of 14 days to reach peak compressive strength.",
      engineeringProof:
        "Premature de-shuttering produces micro-fissures and deflection sag in reinforced concrete slabs that cannot be repaired later.",
    },
    {
      id: "faq-4",
      question: "“What exactly is a 'Shapper' builder?”",
      critiqueQuote: "Yeh shapper ka lafz kahan se aaya?",
      ourAnswer:
        "A shapper is a contractor who cuts corners on rebar gauge, uses adulterated cement, covers crooked walls with 2 inches of hollow plaster, and disappears when leaks start.",
      engineeringProof:
        "Black Diamond Builders represents the absolute anti-shapper standard: certified bills of quantities, laser alignment, and personal on-site accountability.",
    },
  ],
};

export const CATCHPHRASE_WALL_ITEMS: CatchphraseCardItem[] = [
  {
    id: "quote-1",
    quote: "Poore Pakistan ko mera challenge hai.",
    romanUrduQuote: "POORE PAKISTAN KO MERA CHALLENGE HAI",
    category: "The Challenge",
    context:
      "Furqan Butt's open technical dare to the construction sector: match Black Diamond's steel ratios, laser plumbing, and curing protocols or stop deceiving homeowners.",
    mediaPlaceholderNote:
      "[Video Clip Placeholder: The Challenge Speech on Site]",
    verifiedSource: "Official TikTok Signature Address",
  },
  {
    id: "quote-2",
    quote: "Mooch ko tao tabhi diya jata hai jab bunyaad mein sachai ho.",
    romanUrduQuote: "MOOCH KO TAO TABHI DIYA JATA HAI JAB BUNYAAD MEIN SACHAI HO",
    category: "Structural Honor",
    context:
      "The cultural meaning of the twirled moustache: it is not cosmetic vanity, but a personal seal of warranty. When your face and reputation are on the line, the foundation must be flawless.",
    mediaPlaceholderNote:
      "[Video Clip Placeholder: Mooch Ko Tao Signature Gesture]",
    verifiedSource: "Site Foundation Pour Milestone",
  },
  {
    id: "quote-3",
    quote: "Every inch inspected with the stick. If it rings hollow, it gets broken down and rebuilt right.",
    romanUrduQuote: "AGAR AAWAZ KHOKHLI HAI TO DIWAAR GIRAO",
    category: "The Stick Discipline",
    context:
      "The stick is Furqan Butt's acoustic test instrument. Rapping against newly plastered walls exposes hollow pockets left by corner-cutting subcontractors.",
    mediaPlaceholderNote:
      "[Video Clip Placeholder: Tapping Walls with the Stick]",
    verifiedSource: "Plaster Audit & Quality Walkthrough",
  },
  {
    id: "quote-4",
    quote: "Say NO to 'Shapper' Builders. No hollow plaster, no adulterated cement, no counterfeit steel.",
    romanUrduQuote: "SHAPPER BUILDERS SE BACHEIN",
    category: "Anti-Shapper",
    context:
      "His consumer advocacy rally cry warning Pakistani homeowners and expatriates against hiring cheap, fraudulent contractors who cut material gauges.",
    mediaPlaceholderNote:
      "[Video Clip Placeholder: Calling Out Counterfeit Steel Gauges]",
    verifiedSource: "Anti-Shapper Consumer Manifesto",
  },
  {
    id: "quote-5",
    quote: "Aap bahir baithein, aapka ghar mard ban kar banayenge.",
    romanUrduQuote: "AAP BAHIR BAITHEIN, AAPKA GHAR MARD BAN KAR BANAYENGE",
    category: "Overseas Assurance",
    context:
      "Direct pledge to Overseas Pakistanis in the UK, USA, Gulf, and Canada: you work hard abroad; we build your home with complete, radical on-site transparency.",
    mediaPlaceholderNote:
      "[Video Clip Placeholder: Direct WhatsApp Video Call with Overseas Expat]",
    verifiedSource: "Overseas Expatriate Priority Desk",
  },
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "proj-01",
    title: "1 Kanal Contemporary Monolith",
    location: "Sector B-17 / Kohistan Enclave, Islamabad Corridor",
    plotSize: "1 Kanal (50x90)",
    category: "Luxury Grey Structure & Turnkey",
    status: "Completed",
    shortDescription:
      "A monolithic contemporary residence featuring 12-foot high ceiling spans, a subterranean luxury basement with complete tanking waterproofing, and double-height architectural glazing.",
    verifiedSpecs: [
      "Grade 60 Steel Reinforcement (Oversized Cantilevers)",
      "Dual SBS Torch-Applied Tanking (Zero Moisture Guarantee)",
      "Multi-Axis Laser Aligned Brickwork",
      "14-Day Mandatory Slab Ponding",
    ],
    scope: [
      "Soil Bearing Capacity & Deep Raft Excavation",
      "Reinforced Concrete Sub-Base & Retaining Walls",
      "Custom Architectural Facade Cladding",
      "Full MEP & Smart Home Infrastructure",
    ],
    structuralHighlights:
      "Engineered to withstand seismic activity with 25% higher steel-to-concrete density than municipal minimum standards. 0% hollow plaster detected during stick inspection.",
    mediaPlaceholderNote:
      "[Sample Media Placeholder: Authentic Jobsite Photography — 1 Kanal Monolith, Kohistan Enclave]",
  },
  {
    id: "proj-02",
    title: "10 Marla Architectural Villa",
    location: "DHA Phase 2, Islamabad",
    plotSize: "10 Marla (35x70)",
    category: "Turnkey Luxury Modern Estate",
    status: "Under Construction",
    shortDescription:
      "High-density modern luxury villa designed for an Overseas Pakistani family living in Manchester, UK. Features double-height front entrance lobby and cantilevered terrace.",
    verifiedSpecs: [
      "Inspected by Furqan Butt on Site",
      "Laser-Aligned Double Height Portico",
      "Washed Lawrencepur Coarse Sand Mix",
      "Daily WhatsApp 4K Drone Auditing",
    ],
    scope: [
      "A+ Structural Grey Structure Handover",
      "Imported Facade Cladding & Thermal Break Windows",
      "Concealed Inverter Ducting & Concealed Piping",
      "Custom Solid Wood Architectural Joinery",
    ],
    structuralHighlights:
      "Full remote client visibility. Milestone escrow payments released only after physical stick audit of the roof slab casting.",
    mediaPlaceholderNote:
      "[Sample Media Placeholder: Authentic Jobsite Photography — 10 Marla Villa, DHA Phase 2]",
  },
  {
    id: "proj-03",
    title: "2 Kanal Executive Sanctuary",
    location: "Bahria Town Phase 8, Rawalpindi",
    plotSize: "2 Kanal (75x120)",
    category: "High-End Residential Architecture",
    status: "Site Excavation",
    shortDescription:
      "An expansive residential estate with dual-level underground parking, perimeter retaining structures, and heavy-gauge reinforced concrete frames.",
    verifiedSpecs: [
      "Raft Foundation with Gravel Sub-drainage Packing",
      "Heavy Section Retaining Walls with Waterstop Bars",
      "Grade 60 Prime Rebar (Mill Tested)",
      "Overseas Priority Desk Escalation",
    ],
    scope: [
      "Deep Slope Excavation & Shoring",
      "Cast-in-Place Retaining Concrete Walls",
      "Full Grey Structure Framework",
      "Turnkey Architectural Finishes",
    ],
    structuralHighlights:
      "Sub-base moisture barriers engineered to eliminate efflorescence ('seam') permanently in sub-grade living spaces.",
    mediaPlaceholderNote:
      "[Sample Media Placeholder: Authentic Jobsite Photography — 2 Kanal Sanctuary, Bahria Town]",
  },
];

export const VIRAL_MOMENTS: ViralMoment[] = [
  {
    id: "clip-01",
    title: "The Signature Stick Inspection",
    catchphrase: "Agar aawaz khokhli hai to diwaar girao!",
    description:
      "Furqan Butt walks a newly plastered site, using his signature stick to rap against the walls. He detects hollow pockets left by corner-cutting subcontractors and orders immediate rectification.",
    tiktokUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    badge: "The Stick Audit",
    mediaPlaceholderLabel:
      "[Authentic Clip Placeholder: Stick Rapping on Plaster & Structural Integrity Audit]",
  },
  {
    id: "clip-02",
    title: "Exposing 'Shapper' Contractors",
    catchphrase: "Shapper builders se apni zindagi bhar ki kamai bachao.",
    description:
      "A fiery breakdown of how unethical contractors use low-gauge counterfeit steel, unwashed sand, and premature shuttering removal to maximize illicit margins.",
    tiktokUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    badge: "Anti-Shapper Breakdown",
    mediaPlaceholderLabel:
      "[Authentic Clip Placeholder: Explaining Rebar Gauge Fraud & Cement Adulteration]",
  },
  {
    id: "clip-03",
    title: "Poore Pakistan Ko Mera Challenge",
    catchphrase: "Poore Pakistan ko mera challenge hai — standard match karo!",
    description:
      "The definitive challenge to the Pakistani construction industry: match Black Diamond Builders' structural steel ratios, laser levels, and curing protocols or stop deceiving clients.",
    tiktokUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    badge: "The Challenge",
    mediaPlaceholderLabel:
      "[Authentic Clip Placeholder: Furqan Butt Site Address & The Challenge Speech]",
  },
  {
    id: "clip-04",
    title: "Overseas Client WhatsApp Walkthrough",
    catchphrase: "Aap bahir baithein, aapka ghar mard ban kar banayenge.",
    description:
      "Live unedited video call showing an expat in Birmingham the exact steel placement, column ties, and concrete density before roof slab casting.",
    tiktokUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    badge: "Overseas Transparency",
    mediaPlaceholderLabel:
      "[Authentic Clip Placeholder: Live Video Site Audit with Overseas Homeowner]",
  },
];

export const CONSTRUCTION_SERVICES: ConstructionService[] = [
  {
    id: "service-01",
    title: "A+ Grey Structure Engineering",
    tagline: "The Core Foundation of Your Generation's Home",
    description:
      "Our signature expertise. We execute the critical bones of your building with 100% certified Grade 60 prime steel, laser-aligned AWWAL brickwork, vibrated high-density concrete mixes, and mandatory 14-day curing ponding.",
    deliverables: [
      "Deep Raft / Strip Foundation with Sub-Base Gravel Packing",
      "100% Certified Prime Grade 60 Deformed Rebar",
      "Multi-Axis Digital Laser Level Brick Masonry",
      "Dual SBS Torch-Applied Basement & DPC Waterproofing",
      "Sanitary & Electrical Conduit Concealment",
    ],
    highlight: "Inspected on-site with Furqan Butt's Stick & Laser verification.",
    isPopular: true,
  },
  {
    id: "service-02",
    title: "Complete Turnkey Luxury Execution",
    tagline: "From Bare Concrete to Cinematic Interior Living",
    description:
      "Comprehensive end-to-end luxury project management. We handle architectural finishes, imported porcelain flooring, bespoke woodwork, concealed HVAC ducting, and designer facades with zero subcontracting headaches.",
    deliverables: [
      "Custom Architectural Facade Cladding & Weatherproof Finishing",
      "Imported Tile & Italian Marble Flooring Installation",
      "Solid Wood Architectural Joinery & Wardrobes",
      "Designer False Ceilings with Indirect Lighting Schemes",
      "Premium Imported Sanitary & Smart Bath Fittings",
    ],
    highlight: "Fixed-timeline handover with milestone escrow verification.",
  },
  {
    id: "service-03",
    title: "Architectural & Structural Engineering Design",
    tagline: "Seismic-Safe Blueprints & Photorealistic 3D Planning",
    description:
      "Before a shovel touches your soil, our structural and architectural engineering team crafts comprehensive blueprints, seismic load calculations, municipal approval drawings, and transparent bills of quantities (BOQ).",
    deliverables: [
      "Seismic Structural Analysis & Rebar Detailing",
      "Photorealistic 3D Day/Night Exterior Elevations",
      "Functional Floor Layouts Optimizing Light & Ventilation",
      "Complete Line-Item Bill of Quantities (BOQ)",
      "Municipal & Society Submission Drawing Approvals",
    ],
    highlight: "Eliminates surprise budget escalations before breaking ground.",
  },
  {
    id: "service-04",
    title: "Anti-Shapper Structural Retrofitting",
    tagline: "Remediating Foundation Flaws & Plaster Failures",
    description:
      "For homeowners who suffered under bad contractors and are now facing sinking foundations, wall cracks, or chronic moisture efflorescence (seam). We conduct a thorough stick audit and engineer structural reinforcement.",
    deliverables: [
      "Acoustic & Rebound Hammer Structural Plaster Audits",
      "Micro-Piling & Underpinning for Settling Foundations",
      "High-Pressure Chemical Epoxy Crack Injection",
      "Negative-Side Crystalline Waterproofing Treatments",
      "Load-Bearing Steel Reinforcement Retrofitting",
    ],
    highlight: "Salvages compromised structures without tearing down the property.",
  },
];

export const SHAPPER_COMPARISON: ComparisonItem[] = [
  {
    category: "Structural Steel & Rebar",
    shapperStandard:
      "Sub-grade uncertified rebar, reduced bar diameter, inadequate spacing, corner-cutting at critical lintels and plinth beams.",
    blackDiamondStandard:
      "100% Certified Prime Grade 60 deformed rebar. Structural engineer cross-verified tie spacing, seismic-band reinforcement, and oversized plinth beams.",
    iconName: "ShieldAlert",
  },
  {
    category: "Concrete Mix & Curing Discipline",
    shapperStandard:
      "Hand-shoveled unwashed sand, arbitrary 1:2:4 ratios, premature stripping of shuttering within 3 to 5 days.",
    blackDiamondStandard:
      "High-density vibrated mix design, washed Chenab/Lawrencepur sand, minimum 14-day dedicated water ponding/curing protocol.",
    iconName: "Droplets",
  },
  {
    category: "Masonry & Laser Level Alignment",
    shapperStandard:
      "Eyeballed plumb lines, crooked brick coursing compensated later with 2-inch thick hollow plaster that cracks within a monsoon season.",
    blackDiamondStandard:
      "Multi-axis digital laser levels on every wall. First-class AWWAL kiln bricks laid with millimeter joint precision; zero uneven plaster wedges.",
    iconName: "Compass",
  },
  {
    category: "Sub-Base & Moisture Proofing",
    shapperStandard:
      "Single coat bitumen painted over damp surface; cheap plastic sheeting that tears during backfilling, leading to chronic efflorescence (seam).",
    blackDiamondStandard:
      "Dual-layer SBS modified torch-applied waterproofing membrane, DPC barrier across all threshold courses, and gravel sub-drainage gravel packing.",
    iconName: "Layers",
  },
];

export const OVERSEAS_PERKS = [
  {
    title: "Daily 4K Drone & Site Walkthroughs",
    desc: "Unedited video updates delivered to your WhatsApp directly from the job site. See your rebar tied and concrete poured in real time.",
  },
  {
    title: "Direct Access to Furqan Butt's Core Team",
    desc: "No middlemen or evasive project managers. Straight-talking progress reports, transparent bills of quantities (BOQ), and material delivery slips.",
  },
  {
    title: "Anti-Shapper Material Procurement",
    desc: "Every bag of cement, truckload of Lawrencepur sand, and ton of prime steel is documented with batch certificates.",
  },
];

export const PLACEHOLDER_PROJECTS = FEATURED_PROJECTS;
