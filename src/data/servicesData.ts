export interface ServiceProcessStep {
  stepNumber: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  qualityControl: string;
}

export interface ServiceTechnicalStandard {
  category: string;
  specification: string;
  governingStandard: string;
  antiShapperContrast: string;
}

export interface ServicePricingTier {
  tierName: string;
  rateRange: string;
  scopeSummary: string;
  idealFor: string;
}

export interface DetailedService {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroBadge: string;
  overview: string;
  philosophicalQuote: string;
  quoteAttribution: string;
  keyDeliverables: string[];
  processStages: ServiceProcessStep[];
  technicalStandards: ServiceTechnicalStandard[];
  pricingTiers: ServicePricingTier[];
  indicativeTimeline: string;
  antiShapperChecklist: {
    cutShortcut: string;
    blackDiamondProtocol: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedProjectSlugs: string[];
  conversionCta: {
    heading: string;
    subheading: string;
    primaryButtonText: string;
    primaryButtonHref: string;
  };
}

export const DETAILED_SERVICES: DetailedService[] = [
  {
    id: "serv-01",
    slug: "grey-structure-construction",
    title: "A+ Grey Structure Engineering",
    subtitle: "Seismic-Resistant Foundations & Millimeter-True Brickwork",
    tagline: "The Core Backbone of Your Generation's Home",
    heroBadge: "Engineered With Prime Grade 60 Rebar",
    overview:
      "The grey structure is the irreversible skeleton of your building. Once concrete is cast and walls are plastered, structural faults cannot be fixed with expensive paint or Italian tiles. At Black Diamond Builders, we engineer grey structures using exclusively 100% certified Prime Deformed Grade 60 steel, multi-axis digital laser masonry, dual-layer SBS torch-applied waterproofing, and mandatory 14-day continuous water pond curing. We do not eyeball plumb lines; we verify every elevation with digital precision.",
    philosophicalQuote:
      "A house without a rock-solid foundation is just a decorative tent waiting for an earthquake. Poore Pakistan ko mera challenge hai — standard match karo!",
    quoteAttribution: "Furqan Butt, On-Site Structural Pour Audit",
    keyDeliverables: [
      "Soil bearing capacity testing & deep raft foundation engineering",
      "100% certified mill-stamped Prime Grade 60 steel with Mill Test Certificates (MTC)",
      "First-class AWWAL kiln bricks laid with multi-axis digital laser levels (0mm joint variance)",
      "High-density vibrated concrete mixes with washed Lawrencepur / Chenab aggregate",
      "Dual-layer SBS torch-applied elastomer membrane waterproofing on all basements and DPC levels",
      "Mandatory 14-day continuous water ponding on all horizontal reinforced concrete slabs",
      "Heavy-duty UPVC sanitary drainage pipes and high-gauge concealed electrical conduit",
      "Anti-termite chemical soil injection treatment with verified warranty",
    ],
    processStages: [
      {
        stepNumber: "01",
        title: "Soil Geotechnical Audit & Raft Excavation",
        duration: "Weeks 1 – 3",
        description:
          "Before digging, core soil samples are laboratory-tested for bearing capacity. Deep excavation is executed with shoring protection for adjoining plots.",
        deliverables: [
          "Soil test laboratory report",
          "Engineered excavation depth profile",
          "Sub-base gravel packing & lean concrete bed",
        ],
        qualityControl: "Compaction testing verified before lean concrete pour.",
      },
      {
        stepNumber: "02",
        title: "Grade 60 Steel Tying & Basement Tanking",
        duration: "Weeks 4 – 8",
        description:
          "Certified Grade 60 rebar is tied with seismic ring spacing according to ACI 318 standards. Subterranean walls receive dual-layer SBS torch-applied waterproofing.",
        deliverables: [
          "Rebar caliper gauge verification",
          "Concrete cover spacer blocks (50mm)",
          "Hydrostatic tanking flood test",
        ],
        qualityControl: "Physical stick audit and caliper gauge check by Furqan Butt before shutter closing.",
      },
      {
        stepNumber: "03",
        title: "Columns, Beams & Roof Slab Casting",
        duration: "Weeks 9 – 16",
        description:
          "Monolithic pour of columns and roof slabs using transit-mix high-density concrete with needle vibrators to eliminate honeycombing voids.",
        deliverables: [
          "Concrete slump cone test on site",
          "Compression test cylinders (7-day and 28-day breaks)",
          "Monolithic beam and slab junction inspection",
        ],
        qualityControl: "Mandatory 14-day continuous water ponding curing logged daily with water depth markers.",
      },
      {
        stepNumber: "04",
        title: "Laser-Aligned AWWAL Brick Masonry",
        duration: "Weeks 17 – 22",
        description:
          "First-class AWWAL bricks are laid with continuous multi-axis laser projections. Every vertical plumb and horizontal mortar line is maintained within millimeter tolerances.",
        deliverables: [
          "AWWAL kiln-fired clay bricks",
          "Uniform 1:4 cement-sand mortar beds",
          "Concealed electrical and sanitary conduit chasing",
        ],
        qualityControl: "Laser plumb verification; zero crooked walls to prevent thick, hollow plaster wedges.",
      },
      {
        stepNumber: "05",
        title: "Underground Infrastructure & Pre-Plaster Audit",
        duration: "Weeks 23 – 26",
        description:
          "Concealed piping pressure testing, roof heat insulation, and Furqan Butt's final grey structure stick audit before formal client milestone handover.",
        deliverables: [
          "Hydrostatic pipe pressure test at 100+ PSI",
          "Waterproof screed & thermal insulation installation",
          "Signed Grey Structure Milestone Handover Certificate",
        ],
        qualityControl: "Comprehensive acoustic stick inspection across all masonry and rebar conduits.",
      },
    ],
    technicalStandards: [
      {
        category: "Structural Steel",
        specification: "Prime Deformed Grade 60 (Yield Strength 60,000 PSI minimum)",
        governingStandard: "ASTM A615 / BS 4449",
        antiShapperContrast:
          "Shapper contractors use uncertified re-roll scrap that snaps brittlely during seismic ground flex.",
      },
      {
        category: "Concrete Hydration",
        specification: "14-Day uninterrupted water ponding on slabs; wet burlap wrapping on columns",
        governingStandard: "ACI 308R / ASTM C309",
        antiShapperContrast:
          "Cheap builders strip shuttering in 3 to 4 days to rush to their next gig, leaving concrete permanently brittle.",
      },
      {
        category: "Basement Waterproofing",
        specification: "Dual-layer 4mm SBS torch-applied elastomeric bitumen with geotextile protection",
        governingStandard: "ASTM D5147 / BS 8102 (Type A)",
        antiShapperContrast:
          "Traditional contractors brush on a single cheap coat of bitumastic paint that leaks within 2 monsoon seasons.",
      },
      {
        category: "Masonry Alignment",
        specification: "Digital laser projection with 0mm deviation per story height",
        governingStandard: "DIN 18202 (High Tolerance Architecture)",
        antiShapperContrast:
          "Eyeballed walls require 2-inch hollow plaster wedges that shear and sound like a drum when tapped.",
      },
    ],
    pricingTiers: [
      {
        tierName: "A+ Executive Grey Structure",
        rateRange: "PKR 2,900 – 3,250 per sq. ft.",
        scopeSummary:
          "Complete seismic-safe structure including raft foundation, Grade 60 rebar, laser masonry, roof screed, and sanitary/electrical rough-in.",
        idealFor: "Modern 5 Marla, 10 Marla, and 1 Kanal residential builds in DHA, Bahria, and CDA sectors.",
      },
      {
        tierName: "Subterranean Luxury Monolith",
        rateRange: "PKR 3,350 – 3,750 per sq. ft.",
        scopeSummary:
          "Includes deep basement excavation, double-sided retaining walls, dual SBS tanking, oversized cantilevers, and double-height ceiling spans.",
        idealFor: "Luxury 1 Kanal & 2 Kanal villas with basements, home cinemas, and underground living spaces.",
      },
    ],
    indicativeTimeline: "4 to 7 months (depending on plot size, basement scope, and society approval cycles)",
    antiShapperChecklist: [
      {
        cutShortcut: "Mixing 20-30% cheap re-rolled steel without batch certificates.",
        blackDiamondProtocol: "100% prime mill-certified rebar with matching heat certificates and batch logs.",
      },
      {
        cutShortcut: "Stripping slab formwork after 4 days to reuse shuttering wood.",
        blackDiamondProtocol: "14-day dedicated water ponding; props under main beams kept for 21 days minimum.",
      },
      {
        cutShortcut: "Using unwashed, salty local sand filled with silt and clay.",
        blackDiamondProtocol: "Triple-washed Chenab / Lawrencepur coarse aggregate with zero organic silt.",
      },
      {
        cutShortcut: "Eyeballing walls with weighted threads that sway in the wind.",
        blackDiamondProtocol: "Multi-axis self-leveling laser lines projected on every single brick course.",
      },
    ],
    faqs: [
      {
        question: "Can I hire Black Diamond Builders solely for Grey Structure and finish the interior myself?",
        answer:
          "Yes! Over 40% of our clients hire us strictly for the A+ Grey Structure. We deliver a certified, watertight, laser-true structural shell ready for any interior contractor, complete with MEP rough-in and waterproof warranties.",
      },
      {
        question: "How do you prove that you actually used Grade 60 steel throughout the build?",
        answer:
          "Every batch of steel arrives on site in original mill-tagged bundles with heat certificates. Furqan Butt personally audits bar deformations and provides unedited video evidence of all rebar spacing before concrete is poured.",
      },
      {
        question: "What happens if a wall fails Furqan Butt's stick audit?",
        answer:
          "If any finished wall sounds hollow or fails our laser plumb inspection, our policy is uncompromising: it is broken down and rebuilt from scratch at our expense. No excuses, no hollow plaster.",
      },
    ],
    relatedProjectSlugs: ["1-kanal-contemporary-monolith", "10-marla-architectural-villa"],
    conversionCta: {
      heading: "Build Your Foundation Without Regrets",
      subheading:
        "Do not gamble your life savings on lowball contractor promises. Request an engineering audit of your drawings today.",
      primaryButtonText: "Calculate Grey Structure Cost",
      primaryButtonHref: "/#estimator",
    },
  },
  {
    id: "serv-02",
    slug: "turnkey-luxury-construction",
    title: "Complete Turnkey Luxury Execution",
    subtitle: "From Bare Concrete to Cinematic Interior Living",
    tagline: "End-to-End Architectural Craftsmanship With Zero Headaches",
    heroBadge: "Full Escrow & Milestone Transparency",
    overview:
      "A luxury home is not defined merely by expensive imported materials, but by the precision with which they are installed. At Black Diamond Builders, our Turnkey Luxury service transforms architectural blueprints into bespoke residential masterpieces. We take complete ownership from initial foundation soil excavation all the way to bespoke ash wood joinery, imported large-format porcelain tiling, concealed multi-zone HVAC, designer false ceilings, and smart home automation. You enjoy a stress-free building journey backed by milestone escrow disbursements and direct video audits.",
    philosophicalQuote:
      "Finishing without structural truth is just makeup on a cracked skeleton. We give you both: monolithic engineering underneath and breathtaking luxury on the surface.",
    quoteAttribution: "Furqan Butt, Turnkey Project Milestone Handover",
    keyDeliverables: [
      "Full A+ Grey Structure execution (100% Grade 60 steel & laser brickwork included)",
      "Imported large-format porcelain slabs & Italian marble (Statuario, Botticino, Michelangelo)",
      "Bespoke solid Ash / Teak wood architectural joinery, doors, and walk-in wardrobes",
      "Designer multi-tiered false ceilings with concealed indirect LED architectural lighting",
      "Concealed copper refrigerant piping for VRF / multi-split inverter air conditioning",
      "Custom German-hardware kitchen cabinetry with quartz / granite worktops and Blum soft-close fittings",
      "Imported designer bathroom fittings (Grohe, Kohler, TOTO) with concealed cisterns and frameless tempered glass",
      "Architectural exterior facade treatments (rock-wall claddings, thermo-wood, travertine panels)",
    ],
    processStages: [
      {
        stepNumber: "01",
        title: "Architectural & Interior 3D Alignment",
        duration: "Weeks 1 – 4",
        description:
          "Before material orders, comprehensive 3D photorealistic elevations, electrical switchgear layouts, and material palettes are finalized with the client.",
        deliverables: [
          "Room-by-room 3D rendering albums",
          "Material sample boards (tiles, wood stains, veneers)",
          "Detailed MEP coordination blueprints",
        ],
        qualityControl: "Client sign-off on exact material specs and BOQ item pricing.",
      },
      {
        stepNumber: "02",
        title: "A+ Structural Shell & MEP Rough-In",
        duration: "Months 2 – 6",
        description:
          "Flawless grey structure casting followed by concealed electrical conduit, plumbing lines, HVAC ducting, and smart automation wiring.",
        deliverables: [
          "Complete structural shell handover",
          "Pressure-tested concealed sanitary network",
          "Dedicated low-voltage wiring for CCTV & networking",
        ],
        qualityControl: "100 PSI pressure test maintained across all concealed copper and PPRC lines.",
      },
      {
        stepNumber: "03",
        title: "Wet Finishes, Waterproofing & Floor Slabs",
        duration: "Months 7 – 9",
        description:
          "Triple-layer elastomeric waterproofing applied to all bathrooms and balconies. Large-format porcelain tiles installed with laser levels and leveling clips.",
        deliverables: [
          "72-hour bathroom flood test verification",
          "Zero-lippage porcelain tile installation",
          "Mitered 45-degree tile corner edges",
        ],
        qualityControl: "Acoustic stick check across 100% of floor tiles for zero hollow sound.",
      },
      {
        stepNumber: "04",
        title: "Woodwork, Kitchens & Architectural False Ceilings",
        duration: "Months 10 – 12",
        description:
          "Precision carpentry using moisture-resistant marine ply and seasoned solid ash wood. Custom kitchen installation with quartz stone fabrication.",
        deliverables: [
          "Solid wood door frames with magnetic locks",
          "Custom modular wardrobes with internal lighting",
          "Imported kitchen appliance integration",
        ],
        qualityControl: "Zero-sag ceiling alignment and seamless cabinet door reveals.",
      },
      {
        stepNumber: "05",
        title: "Final Snagging, Deep Clean & Key Handover",
        duration: "Month 13",
        description:
          "Exhaustive 200-point quality audit by Furqan Butt, professional deep cleaning, appliance testing, and celebratory key handover.",
        deliverables: [
          "Comprehensive client handover manual & warranties",
          "Furqan Butt certified inspection sign-off",
          "Keys & smart home access transfer",
        ],
        qualityControl: "All snags resolved to 100% satisfaction before final escrow release.",
      },
    ],
    technicalStandards: [
      {
        category: "Floor Tiling",
        specification: "Large-format porcelain slabs with polymer-modified flexible adhesive and mechanical leveling clips",
        governingStandard: "ANSI A118.4 / ISO 13007",
        antiShapperContrast:
          "Cheap contractors stick tiles directly on dry sand with raw cement slurry, leading to loose, drummy tiles in 6 months.",
      },
      {
        category: "Wood Seasoning",
        specification: "Kiln-dried solid Ash and Teak with moisture content below 10%",
        governingStandard: "ASTM D4442",
        antiShapperContrast:
          "Unseasoned local green wood warps and jams in door frames during the first humid monsoon.",
      },
      {
        category: "Bathroom Waterproofing",
        specification: "Polyurethane elastomeric liquid membrane + fiber mesh corners tested for 72 hours",
        governingStandard: "BS 8102 / ASTM D412",
        antiShapperContrast:
          "Placing floor tiles directly over screed causes chronic ceiling stains in the room below.",
      },
      {
        category: "Electrical Cables",
        specification: "99.9% pure electrolytic copper cables (Pakistan Cables or Pioneer) in fire-retardant PVC conduits",
        governingStandard: "BS 6004 / IEC 60227",
        antiShapperContrast:
          "Using recycled scrap copper wiring poses severe fire hazards when air conditioning units run in peak summer.",
      },
    ],
    pricingTiers: [
      {
        tierName: "Executive Standard Turnkey",
        rateRange: "PKR 6,500 – 7,200 per sq. ft.",
        scopeSummary:
          "Includes complete A+ Grey Structure, local premium tiles, solid veneer doors, Grohe fittings, designer false ceilings, and custom kitchens.",
        idealFor: "Quality-conscious homeowners wanting superior durability and modern aesthetics.",
      },
      {
        tierName: "Luxury Signature Turnkey",
        rateRange: "PKR 7,500 – 8,800 per sq. ft.",
        scopeSummary:
          "Includes imported porcelain slabs, solid seasoned ash wood, high-end quartz kitchens, architectural facade claddings, and VRF HVAC provisions.",
        idealFor: "10 Marla and 1 Kanal modern luxury villas seeking high architectural prestige.",
      },
      {
        tierName: "Ultra Monolith Bespoke",
        rateRange: "PKR 9,200 – 11,500+ per sq. ft.",
        scopeSummary:
          "Fully bespoke estate execution: Italian marble floors, smart home automation, imported facade louvers, designer baths, and subterranean luxury amenities.",
        idealFor: "2 Kanal+ architectural sanctuaries and landmark executive residences.",
      },
    ],
    indicativeTimeline: "10 to 14 months for complete turnkey luxury handover",
    antiShapperChecklist: [
      {
        cutShortcut: "Quoting a cheap initial rate and demanding massive extra payments halfway through.",
        blackDiamondProtocol: "Guaranteed detailed BOQ with zero hidden rate escalations.",
      },
      {
        cutShortcut: "Installing fake Chinese copies of sanitary fittings and electrical switches.",
        blackDiamondProtocol: "100% genuine verified brand warranties supplied with box serial numbers.",
      },
      {
        cutShortcut: "Using unseasoned pine wood that bends, warps, and cracks within months.",
        blackDiamondProtocol: "Kiln-dried seasoned hardwoods with moisture meter verification before cutting.",
      },
      {
        cutShortcut: "Cutting corners on bathroom waterproofing, causing seam seepage in adjacent bedrooms.",
        blackDiamondProtocol: "Mandatory 72-hour hydrostatic water retention pond test on every single bathroom floor.",
      },
    ],
    faqs: [
      {
        question: "Can Overseas Pakistanis monitor construction without visiting Pakistan?",
        answer:
          "Absolutely. Over 60% of our Turnkey clients live in the UK, USA, Gulf, and Canada. We provide uncut 4K weekly video walkthroughs, digital milestone invoicing, and direct WhatsApp conferences with Furqan Butt before each critical pour.",
      },
      {
        question: "Can I choose my own tile designs and paint colors?",
        answer:
          "Yes! We provide you with our curated architectural mood boards, or you can select custom finishes from authorized showrooms. We adjust allowances transparently in your BOQ.",
      },
      {
        question: "What warranties do you provide after key handover?",
        answer:
          "We provide a 1-year comprehensive post-handover maintenance warranty covering plumbing, electrical, and woodwork snags, alongside structural warranties on the concrete foundation.",
      },
    ],
    relatedProjectSlugs: ["1-kanal-contemporary-monolith", "10-marla-architectural-villa", "2-kanal-executive-sanctuary"],
    conversionCta: {
      heading: "Design Your Architectural Statement",
      subheading:
        "Experience turnkey construction where every centimeter of woodwork, tiling, and lighting is crafted with uncompromising care.",
      primaryButtonText: "Explore Turnkey Cost Estimator",
      primaryButtonHref: "/#estimator",
    },
  },
  {
    id: "serv-03",
    slug: "architectural-structural-design",
    title: "Architectural & Seismic Structural Design",
    subtitle: "Seismic-Safe Blueprints, 3D Elevations & Municipal Approvals",
    tagline: "Precision Planning Before A Single Shovel Hits The Dirt",
    heroBadge: "Zero Budget Surprise Guarantee",
    overview:
      "A successful construction project is won or lost during the design and engineering stage. At Black Diamond Builders, our architectural and structural engineering team ensures your home is visually iconic, climatically responsive, and structurally immune to earthquakes. We integrate seismic load analysis, functional space layouts, photorealistic 3D day/night visualizations, and an airtight, line-item Bill of Quantities (BOQ). We eliminate guesswork and ensure your project moves through municipal authorities (CDA, RDA, DHA, Bahria Town) without bureaucratic delays.",
    philosophicalQuote:
      "A contractor who estimates your home on the back of a cigarette pack will rob you on the site. True builders design every beam on paper before pouring concrete.",
    quoteAttribution: "Furqan Butt, Structural Design Briefing",
    keyDeliverables: [
      "Seismic structural analysis & structural detailing compliant with Building Code of Pakistan (BCP 2021)",
      "Photorealistic 3D architectural elevations (day, dusk, and nighttime lighting simulations)",
      "Climatically responsive floor layouts maximizing natural light, air circulation, and privacy",
      "Full municipal submission drawings and society approval facilitation (CDA, RDA, DHA, Bahria)",
      "Comprehensive MEP (Mechanical, Electrical, Plumbing) coordinated blueprints",
      "Line-item Bill of Quantities (BOQ) with exact steel tonnage and concrete volume calculations",
      "Soil bearing capacity testing and foundation type recommendations",
      "3D interior walkthrough animations and material palette specifications",
    ],
    processStages: [
      {
        stepNumber: "01",
        title: "Client Lifestyle & Spatial Briefing",
        duration: "Weeks 1 – 2",
        description:
          "In-depth consultation covering your family's space requirements, architectural preferences (contemporary, classical, minimalist), budget parameters, and plot orientation.",
        deliverables: [
          "Project design brief document",
          "Sun-path and wind-direction site analysis",
          "Preliminary zoning and setback calculations",
        ],
        qualityControl: "Validation against society building bylaws before drafting.",
      },
      {
        stepNumber: "02",
        title: "Architectural Concept & Floor Plans",
        duration: "Weeks 3 – 5",
        description:
          "Drafting optimized 2D floor plans ensuring fluid room transitions, efficient cross-ventilation, and double-height architectural moments.",
        deliverables: [
          "Ground & upper floor layout plans",
          "Basement & rooftop terrace layouts",
          "Furniture placement templates",
        ],
        qualityControl: "Client review meetings with unlimited revisions until floor plans are approved.",
      },
      {
        stepNumber: "03",
        title: "3D Photorealistic Exterior Facade Design",
        duration: "Weeks 6 – 8",
        description:
          "Creating high-definition 3D elevations testing various materials: travertine, thermo-wood, glass louvers, and architectural lighting.",
        deliverables: [
          "High-resolution 4K 3D exterior renders",
          "Night lighting simulations",
          "Material specification key sheets",
        ],
        qualityControl: "Climatic review ensuring facade materials withstand harsh Pakistani summers and monsoons.",
      },
      {
        stepNumber: "04",
        title: "Structural Engineering & Seismic Load Modeling",
        duration: "Weeks 9 – 11",
        description:
          "Structural engineers calculate dead, live, and seismic lateral loads in ETABS/SAFE software to engineer rebar schedules and foundation depths.",
        deliverables: [
          "Seismic Zone 2B/3 structural calculation sheet",
          "Complete foundation and slab rebar details",
          "Structural engineer vetting seal and certificate",
        ],
        qualityControl: "Design adheres to ACI 318 and Building Code of Pakistan seismic provisions.",
      },
      {
        stepNumber: "05",
        title: "Airtight BOQ & Municipal Authority Submission",
        duration: "Weeks 12 – 14",
        description:
          "Formulating the complete line-item Bill of Quantities and managing formal submission to municipal authorities for prompt building permit issuance.",
        deliverables: [
          "Itemized BOQ with steel, cement, brick, and finish schedules",
          "Sanctioned municipal building drawings",
          "Ready-to-build construction dossier",
        ],
        qualityControl: "Guaranteed BOQ variance under 3% for specified architectural scope.",
      },
    ],
    technicalStandards: [
      {
        category: "Seismic Engineering",
        specification: "Seismic Zone 2B and 3 dynamic response spectrum load modeling",
        governingStandard: "Building Code of Pakistan (BCP 2021) / ACI 318-19",
        antiShapperContrast:
          "Shapper draftsmen copy-paste generic column layouts from other houses without checking soil capacity or seismic shear.",
      },
      {
        category: "BOQ Precision",
        specification: "100% itemized quantity takeoff calculating exact kilograms of steel and bags of cement",
        governingStandard: "CSI MasterFormat / RICS Standards",
        antiShapperContrast:
          "Unethical contractors quote a vague 'lump-sum per square foot' and later claim steel price hikes as an excuse to pause work.",
      },
      {
        category: "Climatic Orientation",
        specification: "Passive solar heat gain minimization with shaded overhangs and thermal buffer zones",
        governingStandard: "ASHRAE 90.1 / Green Building Guidelines",
        antiShapperContrast:
          "Unplanned glass facades facing direct western sun turn Pakistani houses into ovens in June.",
      },
      {
        category: "Municipal Bylaw Compliance",
        specification: "100% compliance with DHA, Bahria, and CDA covered area and setback ratios",
        governingStandard: "Authority Zoning Regulations",
        antiShapperContrast:
          "Illegal encroachments result in municipal demolition notices or hefty penalties upon completion.",
      },
    ],
    pricingTiers: [
      {
        tierName: "Complete Design & Approval Dossier",
        rateRange: "PKR 120 – 180 per sq. ft.",
        scopeSummary:
          "Includes 2D architectural plans, 3D exterior renders, structural engineering drawings, MEP details, municipal submission set, and full BOQ.",
        idealFor: "Homeowners planning to build within the next 3 to 6 months who want complete control over their construction budget.",
      },
      {
        tierName: "Comprehensive Interior & Exterior Package",
        rateRange: "PKR 220 – 320 per sq. ft.",
        scopeSummary:
          "Includes full structural & architectural design PLUS room-by-room 3D interior design, lighting layouts, and custom cabinetry detailing.",
        idealFor: "Luxury villa owners seeking a cohesive, magazine-grade architectural identity throughout.",
      },
    ],
    indicativeTimeline: "6 to 10 weeks from initial brief to approved construction drawings",
    antiShapperChecklist: [
      {
        cutShortcut: "Downloading free internet plans and adjusting dimensions without structural recalculation.",
        blackDiamondProtocol: "Custom site-specific structural modeling calculated from actual plot soil reports.",
      },
      {
        cutShortcut: "Refusing to provide an itemized BOQ so the client cannot track material quantities.",
        blackDiamondProtocol: "Exhaustive line-item BOQ detailing every single steel bar, brick, and fixture.",
      },
      {
        cutShortcut: "Ignoring beam depths, resulting in sagging ceiling beams or awkward low headroom.",
        blackDiamondProtocol: "Coordinated architectural and MEP sections ensuring generous 11 to 12 ft clear ceilings.",
      },
      {
        cutShortcut: "Failing to check society setbacks, causing building plan rejection and months of delay.",
        blackDiamondProtocol: "Direct liaison with DHA, Bahria, and CDA approval directors ensuring first-time approval.",
      },
    ],
    faqs: [
      {
        question: "Can I bring my own floor plan ideas to your architects?",
        answer:
          "Yes! We encourage clients to bring sketches, Pinterest mood boards, and lifestyle preferences. Our architects refine your vision into an engineered, bylaw-compliant masterpiece.",
      },
      {
        question: "If I hire you for architectural design, am I obligated to build with Black Diamond Builders?",
        answer:
          "No. You own 100% of the completed blueprints and BOQs. However, if you choose Black Diamond Builders for construction, we discount the design fee directly against your construction milestone contract!",
      },
      {
        question: "Do you handle DHA and Bahria Town drawing approvals?",
        answer:
          "Yes. Our liaison officers manage the complete submission process, structural vetting, vetting engineer sign-offs, and authority NOCs so you don't waste time in government offices.",
      },
    ],
    relatedProjectSlugs: ["1-kanal-contemporary-monolith", "2-kanal-executive-sanctuary"],
    conversionCta: {
      heading: "Design With Structural Integrity",
      subheading:
        "Do not pour a single yard of concrete without verified engineering drawings. Consult our design team today.",
      primaryButtonText: "Book Design Consultation",
      primaryButtonHref: "/contact",
    },
  },
  {
    id: "serv-04",
    slug: "anti-shapper-retrofitting",
    title: "Anti-Shapper Structural Remediation & Renovation",
    subtitle: "Acoustic Stick Audits, Foundation Underpinning & Moisture Remediation",
    tagline: "Rescuing Pakistani Homes From Shoddy Contractor Shortcuts",
    heroBadge: "Furqan Butt Physical Stick Audit",
    overview:
      "Nothing is more heartbreaking than investing your life's earnings into a newly built home, only to watch foundation cracks appear, walls sound hollow, and moisture efflorescence ('seam') destroy expensive paint after the first monsoon. Black Diamond Builders offers a specialized engineering remediation service. Using acoustic stick audits, rebound hammer concrete tests, and digital laser plumbing, Furqan Butt's technical team diagnoses hidden defects left behind by corner-cutting contractors. We engineer permanent retrofits: foundation underpinning, high-pressure chemical epoxy injection, negative-side crystalline waterproofing, and structural column jacketing.",
    philosophicalQuote:
      "When a shapper contractor leaves you with cracking walls and water leaks, running away is not an option. We bring the stick, diagnose the truth, and fix it permanently.",
    quoteAttribution: "Furqan Butt, Site Remediation Walkthrough",
    keyDeliverables: [
      "Comprehensive on-site forensic audit with Furqan Butt's acoustic stick & ultrasonic rebound hammer",
      "Structural crack assessment distinguishing between superficial settlement and dangerous shear failure",
      "High-pressure epoxy and polyurethane resin injection into foundation and slab cracks",
      "Micro-piling, concrete underpinning, and soil grouting for sinking or settling foundations",
      "Negative-side crystalline capillary waterproofing to permanently cure chronic wall efflorescence ('seam')",
      "Removal and re-application of hollow, void-filled plaster with laser-straight bonding mortar",
      "Structural steel beam retrofitting to create open-plan living spaces safely in older homes",
      "Thermal insulation retrofits on roofs and exterior walls to cut summer electricity bills by up to 35%",
    ],
    processStages: [
      {
        stepNumber: "01",
        title: "Forensic Stick & Laser Site Audit",
        duration: "Days 1 – 3",
        description:
          "Furqan Butt and our senior structural engineer visit your property. Every wall is rapped with the stick; foundation levels are checked with laser equipment to map settling.",
        deliverables: [
          "Acoustic hollow-wall mapping report",
          "Digital laser tilt and differential settlement survey",
          "Root-cause diagnostic summary",
        ],
        qualityControl: "Physical verification of concrete compressive strength using Schmidt rebound hammer.",
      },
      {
        stepNumber: "02",
        title: "Engineering Remediation Strategy",
        duration: "Week 1",
        description:
          "Formulating a targeted structural restoration plan that addresses root causes (water leakage, soil settlement) rather than masking symptoms with fresh paint.",
        deliverables: [
          "Structural remediation blueprint",
          "Fixed-cost restorative BOQ",
          "Safety and shoring sequence protocol",
        ],
        qualityControl: "Structural engineer peer review ensuring zero collateral damage to adjoining rooms.",
      },
      {
        stepNumber: "03",
        title: "Foundation Underpinning & Crack Stabilization",
        duration: "Weeks 2 – 4",
        description:
          "Excavating in controlled segments beneath failing footings to pour reinforced concrete underpinning pads or inject expanding chemical compaction grout.",
        deliverables: [
          "Deep load-bearing foundation pads",
          "High-pressure epoxy crack sealing",
          "Laser monitoring verification of zero further movement",
        ],
        qualityControl: "Laser elevation sensors log complete structural stabilization before cosmetic work.",
      },
      {
        stepNumber: "04",
        title: "Negative-Side Crystalline Waterproofing",
        duration: "Weeks 5 – 7",
        description:
          "Chipping away compromised salty plaster and applying deep-penetrating crystalline waterproofing chemicals that react with free lime to seal concrete pores permanently.",
        deliverables: [
          "Chemical barrier blocking capillary ground moisture",
          "Vapor-permeable anti-efflorescence base coat",
          "Moisture-free wall test confirmation",
        ],
        qualityControl: "Electronic moisture meter confirms moisture content drops below 5%.",
      },
      {
        stepNumber: "05",
        title: "Laser Plastering, Refinishing & Post-Audit",
        duration: "Weeks 8 – 10",
        description:
          "Applying laser-straight plaster with zero voids, followed by premium breathable primers, interior painting, and final celebratory stick audit.",
        deliverables: [
          "Flawless solid acoustic walls",
          "Restored architectural aesthetics",
          "Signed 5-Year Anti-Seam & Structural Warranty Certificate",
        ],
        qualityControl: "100% solid acoustic resonance during Furqan Butt's final verification walkthrough.",
      },
    ],
    technicalStandards: [
      {
        category: "Epoxy Crack Repair",
        specification: "Low-viscosity structural epoxy resin injected at 200+ PSI to fuse fractured concrete monolithically",
        governingStandard: "ASTM C881 (Type IV) / ACI 503R",
        antiShapperContrast:
          "Shappers plaster over cracks with white cement that splits open again within 3 weeks.",
      },
      {
        category: "Moisture Remediation",
        specification: "Deep-penetrating crystalline waterproof barrier forming insoluble crystals inside concrete capillaries",
        governingStandard: "DIN 1048 (Water Impermeability)",
        antiShapperContrast:
          "Pasting plastic sheets or PVC panels over wet walls traps mold and ruins air quality inside your home.",
      },
      {
        category: "Structural Jacketing",
        specification: "Grade 60 micro-rebar cage tied to existing columns using Hilti chemical anchoring studs",
        governingStandard: "ACI 369.1 (Seismic Retrofitting)",
        antiShapperContrast:
          "Placing steel props without engineering calculations causes sudden slab collapse.",
      },
      {
        category: "Plaster Bond Strength",
        specification: "Polymer-modified SBR bonding agent applied before laser re-plastering",
        governingStandard: "BS 8204 / ASTM C1059",
        antiShapperContrast:
          "Throwing dry cement directly on dusty brick results in hollow sheets of plaster that drop off walls.",
      },
    ],
    pricingTiers: [
      {
        tierName: "Comprehensive Forensic Site Audit",
        rateRange: "PKR 35,000 – 60,000 (Adjusted against repair contract)",
        scopeSummary:
          "On-site physical inspection with Furqan Butt or senior structural engineer, acoustic stick test, rebound hammer test, laser plumb survey, and diagnostic report.",
        idealFor: "Homeowners in Islamabad/Rawalpindi experiencing unexplained cracks, sagging slabs, or chronic moisture.",
      },
      {
        tierName: "Engineered Remediation & Renovation",
        rateRange: "Custom Itemized BOQ",
        scopeSummary:
          "Custom tailored to forensic audit findings: crack injection, underpinning, crystalline damp-proofing, or structural remodeling.",
        idealFor: "Residences requiring permanent structural stabilization and premium renovation.",
      },
    ],
    indicativeTimeline: "3 to 10 weeks depending on severity of structural defects and area",
    antiShapperChecklist: [
      {
        cutShortcut: "Painting over wet, peeling plaster with expensive oil paint to hide dampness temporarily.",
        blackDiamondProtocol: "Removing compromised mortar and applying permanent chemical crystalline barrier.",
      },
      {
        cutShortcut: "Filling structural cracks with cosmetic plaster filler that breaks under thermal expansion.",
        blackDiamondProtocol: "High-pressure mechanical injection of industrial structural epoxy resins.",
      },
      {
        cutShortcut: "Ignoring foundation soil settlement, causing adjoining walls to shear apart.",
        blackDiamondProtocol: "Underpinning footings down to firm load-bearing strata before repairing masonry.",
      },
      {
        cutShortcut: "Covering damp walls with cheap PVC wall paneling that rots and breeds black mold.",
        blackDiamondProtocol: "Treating the masonry chemically so walls stay permanently dry, clean, and healthy.",
      },
    ],
    faqs: [
      {
        question: "How do I know if a crack in my wall is dangerous or just cosmetic?",
        answer:
          "Hairline vertical cracks in plaster are often superficial shrinkage. However, diagonal stair-step cracks through brickwork, cracks wider than 3mm, or cracks near doors and windows where doors stick indicate serious foundation settlement. Contact us immediately for a stick audit.",
      },
      {
        question: "Can chronic wall dampness ('seam') really be cured permanently in Pakistan?",
        answer:
          "Yes! The reason contractors fail is because they treat the surface. We identify the source—whether it is a missing DPC, leaking concealed pipe, or subterranean water pressure—and apply German-standard crystalline chemical barriers that penetrate deep into the brickwork.",
      },
      {
        question: "Will Furqan Butt personally inspect my house?",
        answer:
          "For severe structural remediation cases within the Islamabad/Rawalpindi corridor, Furqan Butt personally attends key audit stages with the stick to ensure the work meets his uncompromising standards.",
      },
    ],
    relatedProjectSlugs: ["1-kanal-contemporary-monolith"],
    conversionCta: {
      heading: "Stop Wasting Money On Temporary Fixes",
      subheading:
        "Don't let shoddy contractor shortcuts destroy your family's home. Book a forensic stick audit and restore structural peace of mind.",
      primaryButtonText: "Book Forensic Site Audit",
      primaryButtonHref: "/contact",
    },
  },
];

export function getServiceBySlug(slug: string): DetailedService | undefined {
  return DETAILED_SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return DETAILED_SERVICES.map((s) => s.slug);
}
