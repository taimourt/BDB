import { PortfolioProject } from "@/types";

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "proj-01",
    slug: "1-kanal-contemporary-monolith",
    title: "1 Kanal Contemporary Monolith",
    subtitle: "Seismic-Engineered Subterranean Luxury Villa",
    location: "Sector B-17 / Kohistan Enclave, Islamabad Corridor",
    cityCorridor: "Islamabad West",
    sector: "residential",
    scope: "grey-structure",
    status: "completed",
    plotSize: "1 Kanal (50x90)",
    coveredArea: "6,200 sq. ft.",
    featuredImagePlaceholder:
      "[Demonstration Media: 1 Kanal Monolith Exterior Facade & Grey Structure Slab]",
    shortDescription:
      "A subterranean contemporary estate featuring a reinforced concrete basement, 12-foot cantilevered architectural overhangs, and dual-layer SBS torch-applied waterproofing.",
    fullOverview:
      "This 1 Kanal modern residence in the Kohistan Enclave corridor was engineered to solve complex soil settlement challenges on sloping terrain. Black Diamond Builders executed a deep raft foundation, oversized plinth beams, and Grade 60 certified rebar cage with zero hollow plaster detected during Furqan Butt's on-site stick audit.",
    clientRequirements: {
      clientType: "Overseas Expatriate Family (London, UK)",
      primaryNeeds: [
        "100% moisture-free underground home theater and gym in the basement",
        "High-ceiling open-plan living spaces without intermediate structural columns",
        "Uncut daily 4K WhatsApp video documentation of every rebar tie and concrete pour",
        "Zero material substitution on Grade 60 steel and OPC cement brands",
      ],
      specialChallenges:
        "High water table and soil variance required deep perimeter shoring, continuous dewatering, and dual-layer SBS torch-applied bitumen tanking with gravel packing.",
    },
    projectScope: [
      "Soil Bearing Capacity & Deep Raft Shoring Excavation",
      "Reinforced Concrete Sub-Base & Perimeter Retaining Walls",
      "Grade 60 Certified Prime Rebar Framing with Seismic Tie Rings",
      "Dual-Layer SBS Torch-Applied Tanking with Polyethylene Protection",
      "Multi-Axis Digital Laser Masonry with AWWAL Kiln Bricks",
      "14-Day Continuous Water Pond Curing on all Floor Slabs",
    ],
    materialsAndWorkmanship: {
      steelGrade: "100% Prime Deformed Grade 60 (60,000 PSI Yield)",
      steelProof:
        "Batch mill test certificates supplied directly to client escrow before casting. 25% higher rebar density than municipal minimums.",
      concreteMix: "High-density 1:1.5:3 machine-vibrated mix with washed Chenab sand",
      concreteProof:
        "Standard slump testing logged on site. Compressive cylinder crush test verified 3,250 PSI at 28 days.",
      masonryAlignment: "Multi-axis laser level plumb with 0mm joint variance",
      masonryProof:
        "Zero wedge-shaped plaster compensation. Uniform 0.5-inch acoustic plaster coat.",
      waterproofing: "Dual SBS torch-applied elastomer membrane + DPC barrier",
      waterproofingProof:
        "48-hour hydrostatic water retention pond test verified zero seepage across all basement retaining walls.",
      stickAuditSummary:
        "Inspected by Furqan Butt on site. 100% solid acoustic resonance with the stick; zero hollow plaster voids detected.",
    },
    stages: [
      {
        stageNumber: "01",
        stageName: "Raft Excavation & Shoring",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 3 Weeks]",
        description:
          "Excavated to 14 feet below natural ground level. Sub-base compacted with heavy road rollers, blinded with 4-inch lean concrete, and wrapped in drainage geotextile.",
        inspectionCheckpoint: "Soil compaction density test verified by certified geotechnical engineer.",
        mediaPlaceholder:
          "[Demonstration Footage: Raft Shoring Excavation & Lean Concrete Blind]",
        evidenceTags: ["Sub-Grade", "Soil Test", "Compaction"],
      },
      {
        stageNumber: "02",
        stageName: "Subterranean Tanking & Basement Walls",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 4 Weeks]",
        description:
          "Applied dual-layer SBS modified torch-on membrane across foundation raft and perimeter retaining walls, protected with PVC dimple drainage sheets.",
        inspectionCheckpoint: "48-hour water immersion test with zero dampness penetration.",
        mediaPlaceholder:
          "[Demonstration Footage: SBS Torch-Applied Membrane & Retaining Wall Pour]",
        evidenceTags: ["Dual SBS", "Zero Moisture", "Retaining Wall"],
      },
      {
        stageNumber: "03",
        stageName: "Grade 60 Steel Cage & Plinth Beams",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 5 Weeks]",
        description:
          "Fabricated oversized column cages with seismic ring ties spaced at 4-inch centers at beam-column junctions. Verified with digital calipers.",
        inspectionCheckpoint: "On-site bar-bending schedule (BBS) cross-check prior to shuttering close.",
        mediaPlaceholder:
          "[Demonstration Footage: Rebar Caliper Verification & Tie Spacing]",
        evidenceTags: ["Grade 60", "Seismic Rings", "BBS Verified"],
      },
      {
        stageNumber: "04",
        stageName: "Monolithic Slab Cast & 14-Day Ponding",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 3 Weeks]",
        description:
          "Poured 6-inch monolithic roof slab with needle immersion vibrators. Clay water bunds constructed immediately; flooded with continuous water for 14 full days.",
        inspectionCheckpoint: "Physical water depth logs audited daily with no early stripping of jacks.",
        mediaPlaceholder:
          "[Demonstration Footage: Concrete Pouring & 14-Day Water Ponding]",
        evidenceTags: ["Vibrated Mix", "14-Day Curing", "Zero Fissures"],
      },
      {
        stageNumber: "05",
        stageName: "Laser Plumb Masonry & Stick Inspection",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 4 Weeks]",
        description:
          "Laid first-class AWWAL kiln bricks aligned with multi-axis green lasers. Furqan Butt inspected the walls with the stick before handover.",
        inspectionCheckpoint: "Stick acoustic rap audit: 100% solid strike tone across all living areas.",
        mediaPlaceholder:
          "[Demonstration Footage: Furqan Butt Tapping Finished Walls With The Stick]",
        evidenceTags: ["Laser Plumb", "The Stick Audit", "Acoustic Solid"],
      },
    ],
    beforeAfterGallery: [
      {
        id: "ba-01",
        title: "Sub-Base Excavation to Monolithic Concrete Frame",
        beforeStage: "Raw Sub-Grade Soil & Water Shoring Pit",
        afterStage: "Cast-in-Place Seismic Frame & Basement Shell",
        description:
          "Comparison showing the transformation from an unstable mud slope into an unshakeable reinforced concrete foundation.",
        beforePlaceholder:
          "[Demonstration Comparison: Raw Excavation Trench]",
        afterPlaceholder:
          "[Demonstration Comparison: Completed Monolithic Grey Structure Frame]",
      },
      {
        id: "ba-02",
        title: "Masonry Brickwork to Laser-Straight Render",
        beforeStage: "AWWAL Kiln Brick Masonry with Laser Alignment",
        afterStage: "Smooth Uniform Render Audited with the Stick",
        description:
          "Comparison showing razor-sharp 90-degree internal corners with zero hollow plaster buildup.",
        beforePlaceholder:
          "[Demonstration Comparison: Laser Plumb Brickwork]",
        afterPlaceholder:
          "[Demonstration Comparison: Finished Wall Tested with the Stick]",
      },
    ],
    walkthroughVideo: {
      title: "1 Kanal Monolith Walkthrough with Furqan Butt",
      description:
        "Furqan Butt walks the site, inspects rebar tie spacing, raps the basement walls with his signature stick, and confirms the 14-day curing pond depth.",
      mediaPlaceholderNote:
        "[Demonstration Video Container: 4K Site Tour & Stick Audit]",
      tiktokUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    },
    completionData: {
      deliveredDatePlaceholder: "[Demonstration Milestone: Verified Grey Structure Handover]",
      handoverMilestone: "Grey Structure Phase Completed & Inspected on Schedule",
      warrantyStatus: "10-Year Structural Integrity & Anti-Efflorescence Guarantee",
      demonstrationDataDisclaimer:
        "[Demonstration Project Data — Authentic Client Specs & Media Pending Verification]",
    },
    relatedProjectSlugs: ["10-marla-architectural-villa", "2-kanal-executive-sanctuary"],
  },
  {
    id: "proj-02",
    slug: "10-marla-architectural-villa",
    title: "10 Marla Architectural Villa",
    subtitle: "Turnkey Luxury Modern Estate with Double-Height Atrium",
    location: "DHA Phase 2, Sector J, Islamabad",
    cityCorridor: "Islamabad Expressway",
    sector: "residential",
    scope: "turnkey-luxury",
    status: "in-progress",
    plotSize: "10 Marla (35x70)",
    coveredArea: "4,100 sq. ft.",
    featuredImagePlaceholder:
      "[Demonstration Media: 10 Marla Modern Facade & Turnkey Architectural Lobby]",
    shortDescription:
      "A turnkey modern luxury villa featuring a 22-foot double-height glass lobby, imported porcelain tile cladding, solid ash wood joinery, and concealed inverter ducting.",
    fullOverview:
      "Commissioned by an Overseas Pakistani physician based in Manchester, UK, this 10 Marla villa exemplifies Black Diamond's end-to-end turnkey precision. Every milestone from raw rebar tying to imported sanitary fixtures is managed transparently with milestone escrow payments and WhatsApp 4K video walkthroughs.",
    clientRequirements: {
      clientType: "Overseas Expatriate Physician (Manchester, UK)",
      primaryNeeds: [
        "Complete turnkey execution from foundation excavation to designer interior handover",
        "Strict adherence to modern minimalist architecture with double-height entrance glass",
        "Concealed air-conditioning and central vacuum conduit systems",
        "Milestone-linked escrow bank accounts—zero upfront payments without verified site video",
      ],
      specialChallenges:
        "Narrow 35-foot frontage required ingenious structural cantilever design to allow a wide 2-car garage without interior obstructing pillars.",
    },
    projectScope: [
      "A+ Grey Structure with Heavy-Gauge Cantilevered Beams",
      "Thermal Break Double-Glazed Aluminum Windows",
      "Solid Ash Wood Architectural Doors & Custom Wardrobes",
      "Imported 60x120cm Porcelain Tile Flooring with Laser-Leveled Screed",
      "Concealed Inverter Copper Piping & Centralized Drainage",
      "Designer False Ceilings with Architectural Shadow Grooves",
    ],
    materialsAndWorkmanship: {
      steelGrade: "Grade 60 Deformed Rebar (Mill Batch Verified)",
      steelProof: "Independent lab pull-test certificate verified 64,200 PSI tensile strength.",
      concreteMix: "Pre-mix plant vibrated concrete (3,500 PSI spec)",
      concreteProof: "Concrete batch slips and test cubes crushed at 7 and 28 days.",
      masonryAlignment: "Multi-axis digital laser levels on every partition wall",
      masonryProof: "Vertical plumb deviation under 1mm over full 11-foot wall height.",
      waterproofing: "Torch-applied SBS membrane across all sunken bath slabs and roof terrace",
      waterproofingProof: "Water logged in bathrooms for 72 hours with zero underside dampness.",
      stickAuditSummary:
        "Inspected by Furqan Butt. Plaster thickness strictly regulated to 12mm; zero hollow voids.",
    },
    stages: [
      {
        stageNumber: "01",
        stageName: "Excavation & Strip Foundation",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 3 Weeks]",
        description:
          "Excavated to firm clay stratum, laid heavy-duty stone soling, and cast continuous reinforced plinth beams with Grade 60 steel.",
        inspectionCheckpoint: "Plinth beam rebar inspected on site before casting.",
        mediaPlaceholder:
          "[Demonstration Footage: Strip Foundation Rebar Placement]",
        evidenceTags: ["Plinth Beams", "Grade 60", "Stone Soling"],
      },
      {
        stageNumber: "02",
        stageName: "Double-Height Cantilever Framing",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 6 Weeks]",
        description:
          "Cast 22-foot double-height columns and front cantilevered terrace slab with heavy tension steel to support floor-to-ceiling glass.",
        inspectionCheckpoint: "Shoring jack inspection and 14-day water ponding log audited.",
        mediaPlaceholder:
          "[Demonstration Footage: Double-Height Column Shuttering]",
        evidenceTags: ["Double Height", "Cantilever", "Pond Curing"],
      },
      {
        stageNumber: "03",
        stageName: "MEP Rough-Ins & Laser Screeding",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 4 Weeks]",
        description:
          "Installed German-spec PPRC water supply lines, concealed copper AC pipes, and laser-guided floor screeding for zero floor waviness.",
        inspectionCheckpoint: "PPRC hydraulic pressure test at 10 bar for 24 hours.",
        mediaPlaceholder:
          "[Demonstration Footage: Hydraulic Pressure Testing of Plumbing]",
        evidenceTags: ["MEP Rough-in", "Pressure Test", "Laser Screed"],
      },
      {
        stageNumber: "04",
        stageName: "Luxury Porcelain & Architectural Joinery",
        status: "In Progress",
        durationEstimate: "[Demonstration Timeline: Ongoing]",
        description:
          "Currently laying 60x120cm imported porcelain tiles with anti-lip leveling spacers and fitting solid ash wood door jambs.",
        inspectionCheckpoint: "Tile flatness audit with digital digital spirit level.",
        mediaPlaceholder:
          "[Demonstration Footage: Tile Leveling Spacer Installation]",
        evidenceTags: ["Porcelain Tile", "Solid Wood", "In Progress"],
      },
    ],
    beforeAfterGallery: [
      {
        id: "ba-03",
        title: "Bare Concrete Slab to Double-Height Glass Atrium",
        beforeStage: "Concrete Shuttering Stripping & Rough Structure",
        afterStage: "Double-Height Architectural Portal with Ambient Lighting",
        description:
          "Progression from raw industrial grey concrete into high-fashion luxury living.",
        beforePlaceholder:
          "[Demonstration Comparison: Rough Concrete Shuttering]",
        afterPlaceholder:
          "[Demonstration Comparison: Atrium Facade with Imported Cladding]",
      },
    ],
    walkthroughVideo: {
      title: "10 Marla Turnkey Walkthrough — DHA Phase 2",
      description:
        "Furqan Butt walks the double-height entrance, inspects the laser plumb tiles, and tests the electrical conduit rough-ins with the stick.",
      mediaPlaceholderNote:
        "[Demonstration Video Container: 4K Turnkey Site Walkthrough]",
      tiktokUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    },
    completionData: {
      deliveredDatePlaceholder: "[Demonstration Milestone: Active Turnkey Site Execution]",
      handoverMilestone: "Finishing & Interior Joinery Phase in Progress",
      warrantyStatus: "5-Year Complete Turnkey Warranty & 10-Year Structural Guarantee",
      demonstrationDataDisclaimer:
        "[Demonstration Project Data — Authentic Client Specs & Media Pending Verification]",
    },
    relatedProjectSlugs: ["1-kanal-contemporary-monolith", "5-marla-modern-residence"],
  },
  {
    id: "proj-03",
    slug: "2-kanal-executive-sanctuary",
    title: "2 Kanal Executive Sanctuary",
    subtitle: "Heavy-Gauge Reinforced Concrete Estate on Sloped Terrain",
    location: "Bahria Town Phase 8, Sector F, Rawalpindi",
    cityCorridor: "Rawalpindi South",
    sector: "residential",
    scope: "grey-structure",
    status: "excavation",
    plotSize: "2 Kanal (75x120)",
    coveredArea: "11,500 sq. ft.",
    featuredImagePlaceholder:
      "[Demonstration Media: 2 Kanal Estate Architectural Framing & Retaining Structures]",
    shortDescription:
      "A monumental 2 Kanal estate featuring dual underground parking, multi-tier reinforced retaining structures, and heavy-gauge seismic structural columns.",
    fullOverview:
      "Positioned on a dramatic natural ridge in Bahria Town Phase 8, this massive executive estate demanded heavy-duty geotechnical engineering. Black Diamond Builders engineered deep step-down retaining walls with hydrophilic waterstops and a monolithic raft foundation.",
    clientRequirements: {
      clientType: "Executive Industrialist Family (Rawalpindi)",
      primaryNeeds: [
        "Unshakeable structural foundation capable of resisting hill slope lateral earth pressure",
        "Underground multi-car parking garage with reinforced ramp and sub-drainage gravel packing",
        "Large open spans for banqueting hall without compromising seismic safety",
        "Direct personal site oversight by Furqan Butt on every concrete pour",
      ],
      specialChallenges:
        "A 14-foot natural slope across the plot length required structural counterfort retaining walls and continuous sub-surface perforated French drains.",
    },
    projectScope: [
      "Hillside Slope Excavation, Shoring & Anchored Retaining Walls",
      "Hydrophilic Waterstop Gaskets on all Cold Construction Joints",
      "Grade 60 High-Yield Steel Reinforcement with Double Rebar Mats",
      "High-Strength 4,000 PSI Raft Foundation Pour with Transit Mixers",
      "Extensive Underground Sub-Drainage Gravel Bedding & Sump System",
    ],
    materialsAndWorkmanship: {
      steelGrade: "Prime Grade 60 (Mill Tested)",
      steelProof: "Double layer #8 (1-inch) rebar matting on foundation raft.",
      concreteMix: "4,000 PSI Ready-Mix with superplasticizer for void-free flow",
      concreteProof: "Slump and temperature logged for every transit mixer delivery.",
      masonryAlignment: "Multi-axis laser level plumb",
      masonryProof: "Reinforced concrete core walls used in place of standard partition brickwork.",
      waterproofing: "3-coat crystalline waterproofing + torch-applied SBS membrane",
      waterproofingProof: "Double barrier defense tested under negative water pressure.",
      stickAuditSummary:
        "Retaining wall forms and steel ties audited on site by Furqan Butt prior to pour.",
    },
    stages: [
      {
        stageNumber: "01",
        stageName: "Topographic Survey & Slope Shoring",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 4 Weeks]",
        description:
          "Completed 3D topographic drone survey and engineered soldier pile shoring along the hillside to secure neighbor property boundaries.",
        inspectionCheckpoint: "Total station laser survey confirming zero slope shifting.",
        mediaPlaceholder:
          "[Demonstration Footage: 3D Topographic Laser Survey & Shoring]",
        evidenceTags: ["Topographic", "Hillside Shoring", "Drone Survey"],
      },
      {
        stageNumber: "02",
        stageName: "Deep Retaining Walls & Raft Excavation",
        status: "In Progress",
        durationEstimate: "[Demonstration Timeline: 5 Weeks]",
        description:
          "Currently excavating 4,000 cubic yards of sub-surface rock and placing perforated drainage piping wrapped in non-woven geotextile.",
        inspectionCheckpoint: "Sub-base gravel compaction and drainage line slope verification.",
        mediaPlaceholder:
          "[Demonstration Footage: Heavy Excavation & French Drain Installation]",
        evidenceTags: ["Deep Excavation", "French Drain", "In Progress"],
      },
      {
        stageNumber: "03",
        stageName: "Counterfort Retaining Wall Pour",
        status: "Upcoming",
        durationEstimate: "[Demonstration Timeline: 4 Weeks]",
        description:
          "Upcoming cast of 14-foot reinforced concrete counterfort retaining walls with hydrophilic PVC waterstops at all floor-wall junctions.",
        inspectionCheckpoint: "Formwork alignment and tie-rod spacing inspection.",
        mediaPlaceholder:
          "[Demonstration Footage: Counterfort Shuttering & Rebar Cage]",
        evidenceTags: ["Counterfort", "Waterstops", "Upcoming"],
      },
    ],
    beforeAfterGallery: [
      {
        id: "ba-04",
        title: "Hillside Cliff to Engineered Stepped Foundation",
        beforeStage: "Unstable Natural Ridge Slope",
        afterStage: "Heavy-Gauge Stepped Raft & Retaining System",
        description:
          "Progression showing how dangerous hillside terrain is tamed into rock-solid foundation platforms.",
        beforePlaceholder:
          "[Demonstration Comparison: Raw Slope Ridge]",
        afterPlaceholder:
          "[Demonstration Comparison: Engineered Retaining Framework]",
      },
    ],
    walkthroughVideo: {
      title: "2 Kanal Ridge Excavation Audit with Furqan Butt",
      description:
        "Furqan Butt explains why cheap builders cut retaining wall thickness on slopes and demonstrates the heavy steel reinforcement used on this site.",
      mediaPlaceholderNote:
        "[Demonstration Video Container: Hillside Retaining Wall Inspection]",
      tiktokUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    },
    completionData: {
      deliveredDatePlaceholder: "[Demonstration Milestone: Active Sub-Structure Excavation]",
      handoverMilestone: "Excavation & Shoring Phase Underway",
      warrantyStatus: "Lifetime Anti-Settlement & Structural Safety Certification",
      demonstrationDataDisclaimer:
        "[Demonstration Project Data — Authentic Client Specs & Media Pending Verification]",
    },
    relatedProjectSlugs: ["1-kanal-contemporary-monolith", "commercial-plaza-corridor"],
  },
  {
    id: "proj-04",
    slug: "commercial-plaza-corridor",
    title: "Commercial Multi-Story Plaza",
    subtitle: "Heavy Load-Bearing Retail & Executive Office Tower",
    location: "Main Commercial Boulevard, Rawalpindi / Islamabad Corridor",
    cityCorridor: "Twin Cities Commercial Hub",
    sector: "commercial",
    scope: "grey-structure",
    status: "completed",
    plotSize: "8 Marla Commercial (40x90)",
    coveredArea: "9,800 sq. ft.",
    featuredImagePlaceholder:
      "[Demonstration Media: Commercial Plaza Modern Facade & Column Grid]",
    shortDescription:
      "A multi-story commercial monument built with oversized circular columns, post-tensioned beam corridors, and high-load capacity commercial slab design.",
    fullOverview:
      "Designed for high-traffic retail on the ground floor and corporate executive suites on upper levels. Built with heavy-gauge Grade 60 steel and fire-retardant structural masonry, setting a new benchmark for twin-city commercial plazas.",
    clientRequirements: {
      clientType: "Commercial Real Estate Investor Group",
      primaryNeeds: [
        "Maximum clear retail frontage without bulky central load-bearing masonry",
        "High live-load slab capacity (100 lbs/sq ft) to support bank vaults and retail equipment",
        "Concealed high-amperage 3-phase electrical busway ducts and firefighting pipe conduits",
        "Strict compliance with municipal commercial fire safety and seismic codes",
      ],
      specialChallenges:
        "Tight zero-lot-line commercial plot with active adjacent commercial buildings required vibration-controlled excavation and zero property settlement.",
    },
    projectScope: [
      "Zero-Lot-Line Shoring & Perimeter Underpinning",
      "Heavy Circular Column Cages with Spiral Rebar Reinforcement",
      "Long-Span Drop Panel Beam System for Pillar-Free Retail Floors",
      "Dual Emergency Fire Stairwell Concrete Enclosure",
      "Heavy-Duty Water Tanking in Basement for Fire Hydrant Capacity",
    ],
    materialsAndWorkmanship: {
      steelGrade: "Prime Grade 60 Deformed Rebar with Mill Test Slips",
      steelProof: "100% radiographic weld testing and mechanical rebar couplers.",
      concreteMix: "3,500 PSI High-Early Strength Concrete",
      concreteProof: "Core drilled cylinder compression testing verified 3,800 PSI average.",
      masonryAlignment: "Laser plumb on all elevator shafts and stairwells",
      masonryProof: "Elevator shaft plumb tolerance under 3mm over 60 feet height.",
      waterproofing: "Torch-applied SBS membrane on underground water tanks",
      waterproofingProof: "Certified potable water storage test with zero leakage.",
      stickAuditSummary:
        "Every floor slab and shear wall personally audited by Furqan Butt before pouring.",
    },
    stages: [
      {
        stageNumber: "01",
        stageName: "Zero-Lot Shoring & Excavation",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 3 Weeks]",
        description:
          "Installed contiguous pile shoring along neighboring commercial boundaries to prevent soil settlement under adjacent structures.",
        inspectionCheckpoint: "Inclinometer monitoring of adjacent structures during excavation.",
        mediaPlaceholder:
          "[Demonstration Footage: Contiguous Pile Shoring Installation]",
        evidenceTags: ["Commercial", "Zero Lot", "Inclinometer"],
      },
      {
        stageNumber: "02",
        stageName: "Heavy Column Framework & Shear Walls",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 7 Weeks]",
        description:
          "Fabricated oversized spiral column cages and concrete shear walls for earthquake lateral resistance.",
        inspectionCheckpoint: "Spiral tie pitch and mechanical rebar coupler torque audit.",
        mediaPlaceholder:
          "[Demonstration Footage: Spiral Rebar Columns & Shear Wall Pour]",
        evidenceTags: ["Spiral Columns", "Shear Walls", "Mechanical Couplers"],
      },
      {
        stageNumber: "03",
        stageName: "Monolithic Commercial Floor Slabs",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 6 Weeks]",
        description:
          "Cast drop-panel floor slabs designed for heavy retail loads. Continuous 14-day curing ponding maintained on every level.",
        inspectionCheckpoint: "Live-load deflection test after 28 days of curing.",
        mediaPlaceholder:
          "[Demonstration Footage: Commercial Drop Panel Slab Curing]",
        evidenceTags: ["Drop Panel", "High Load", "14-Day Curing"],
      },
    ],
    beforeAfterGallery: [
      {
        id: "ba-05",
        title: "Excavation Pit to Multi-Story Commercial Tower",
        beforeStage: "Zero-Lot-Line Concrete Shoring Trench",
        afterStage: "Multi-Tier Pillar-Free Retail Structure",
        description:
          "Progression showing maximum usable commercial floor space with heavy-duty structural columns.",
        beforePlaceholder:
          "[Demonstration Comparison: Commercial Excavation Pit]",
        afterPlaceholder:
          "[Demonstration Comparison: Completed Commercial Grey Structure Shell]",
      },
    ],
    walkthroughVideo: {
      title: "Commercial Plaza Walkthrough with Furqan Butt",
      description:
        "Furqan Butt inspects the spiral rebar columns and explains why commercial builders in Pakistan often cut corners on fire stairwell thickness.",
      mediaPlaceholderNote:
        "[Demonstration Video Container: Commercial Plaza Inspection Tour]",
      tiktokUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    },
    completionData: {
      deliveredDatePlaceholder: "[Demonstration Milestone: Verified Commercial Handover]",
      handoverMilestone: "Grey Structure Framework Completed & Approved by Municipal Authorities",
      warrantyStatus: "Commercial Structural Warranty with Periodic Engineering Audits",
      demonstrationDataDisclaimer:
        "[Demonstration Project Data — Authentic Client Specs & Media Pending Verification]",
    },
    relatedProjectSlugs: ["2-kanal-executive-sanctuary", "1-kanal-contemporary-monolith"],
  },
  {
    id: "proj-05",
    slug: "5-marla-modern-residence",
    title: "5 Marla Smart Luxury Residence",
    subtitle: "High-Efficiency Turnkey Villa with Custom Millwork",
    location: "Taj Residencia, Sector Lily, Islamabad West",
    cityCorridor: "Rawalpindi / Islamabad West",
    sector: "residential",
    scope: "finishing-interiors",
    status: "completed",
    plotSize: "5 Marla (25x50)",
    coveredArea: "2,350 sq. ft.",
    featuredImagePlaceholder:
      "[Demonstration Media: 5 Marla Modern Residence Facade & Designer Living Room]",
    shortDescription:
      "A high-efficiency 5 Marla residence maximizing natural daylight with custom solid ash cabinetry, Spanish floor tiles, and space-saving architectural joinery.",
    fullOverview:
      "5 Marla plots in Pakistan often suffer from dark, cramped rooms due to generic contractor templates. Black Diamond Builders redesigned this home with central skylight shafts, laser-aligned interior partitions, and custom space-saving woodwork.",
    clientRequirements: {
      clientType: "Young Professional Family",
      primaryNeeds: [
        "Spacious feel on a compact 25x50 plot with open-plan kitchen and dining",
        "High-end turnkey finishes that resist moisture and wear from young children",
        "Concealed LED strip lighting and architectural false ceiling drops",
        "Strict budget adherence with a guaranteed itemized BOQ",
      ],
      specialChallenges:
        "Compact footprint required millimeter-level interior accuracy to fit custom wardrobes and vanity counters without dead corners.",
    },
    projectScope: [
      "Custom Interior Architectural Planning & 3D Lighting Design",
      "Laser-Plumb Interior Brickwork with Zero Plaster Bulges",
      "Spanish Glazed Porcelain Flooring (60x60cm) with Epoxy Grout",
      "Custom Solid Ash Wood Kitchen Cabinets & Soft-Close Hardware",
      "Double-Glazed Powder-Coated Aluminum Windows with Thermal Barriers",
    ],
    materialsAndWorkmanship: {
      steelGrade: "Grade 60 Prime Rebar (Mill Tested)",
      steelProof: "Seismic column ties verified in all corners.",
      concreteMix: "Machine-vibrated 1:2:4 mix with washed Lawrencepur sand",
      concreteProof: "14-day dedicated water curing on roof and intermediate slabs.",
      masonryAlignment: "Multi-axis digital laser levels",
      masonryProof: "Interior plaster thickness kept to exactly 12mm across all walls.",
      waterproofing: "Polymer-modified cementitious waterproofing in all baths and laundry",
      waterproofingProof: "100% leak-free test logged over 72 hours.",
      stickAuditSummary:
        "Furqan Butt rapped all bedroom and kitchen walls with the stick; zero hollow resonance.",
    },
    stages: [
      {
        stageNumber: "01",
        stageName: "Compact Space Planning & Grey Framework",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 5 Weeks]",
        description:
          "Cast high-ceiling structural frame with central light-well cutouts to illuminate ground floor living spaces naturally.",
        inspectionCheckpoint: "Light-well rebar perimeter reinforcement check.",
        mediaPlaceholder:
          "[Demonstration Footage: 5 Marla Light-Well Framing]",
        evidenceTags: ["Light Well", "High Ceiling", "Grey Framework"],
      },
      {
        stageNumber: "02",
        stageName: "Turnkey Finishing & Custom Millwork",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 6 Weeks]",
        description:
          "Installed Spanish porcelain floor tiles, moisture-resistant kitchen cabinetry, and premium sanitary fittings.",
        inspectionCheckpoint: "Tile levelness and soft-close cabinet alignment audit.",
        mediaPlaceholder:
          "[Demonstration Footage: Interior Millwork & Kitchen Cabinet Installation]",
        evidenceTags: ["Custom Millwork", "Spanish Tile", "Turnkey Finish"],
      },
    ],
    beforeAfterGallery: [
      {
        id: "ba-06",
        title: "Rough Brick Shell to Designer Interior Living",
        beforeStage: "Laser-Aligned Brick Shell with Electrical Chases",
        afterStage: "Warm Luxury Living Room with Ambient Lighting",
        description:
          "Progression showing how thoughtful interior architecture transforms a compact 5 Marla space into a spacious estate.",
        beforePlaceholder:
          "[Demonstration Comparison: 5 Marla Rough Brickwork]",
        afterPlaceholder:
          "[Demonstration Comparison: Finished Living Room with Designer Woodwork]",
      },
    ],
    walkthroughVideo: {
      title: "5 Marla Smart Luxury Tour with Furqan Butt",
      description:
        "Furqan Butt tours this 5 Marla home in Taj Residencia, demonstrating how laser-straight walls make compact rooms feel expansive and elegant.",
      mediaPlaceholderNote:
        "[Demonstration Video Container: 5 Marla Interior Walkthrough]",
      tiktokUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    },
    completionData: {
      deliveredDatePlaceholder: "[Demonstration Milestone: Completed Turnkey Handover]",
      handoverMilestone: "Full Turnkey Handover Completed on Schedule",
      warrantyStatus: "3-Year Turnkey Interior Warranty & 10-Year Structural Guarantee",
      demonstrationDataDisclaimer:
        "[Demonstration Project Data — Authentic Client Specs & Media Pending Verification]",
    },
    relatedProjectSlugs: ["10-marla-architectural-villa", "luxury-penthouse-interior"],
  },
  {
    id: "proj-06",
    slug: "luxury-penthouse-interior",
    title: "Executive Luxury Penthouse Suite",
    subtitle: "High-End Architectural Interior & Custom Woodcraft",
    location: "Gulberg Greens, Islamabad Corridor",
    cityCorridor: "Islamabad South",
    sector: "residential",
    scope: "finishing-interiors",
    status: "in-progress",
    plotSize: "Penthouse Suite (4,500 sq. ft.)",
    coveredArea: "4,500 sq. ft.",
    featuredImagePlaceholder:
      "[Demonstration Media: Penthouse Panoramic Living Room & Italian Marble Cladding]",
    shortDescription:
      "A high-floor luxury penthouse interior featuring book-matched Italian Statuario marble, acoustic acoustic ceiling baffles, and smart automation.",
    fullOverview:
      "Executed for an overseas entrepreneur returning to Pakistan, this penthouse interior project demanded precision joinery and zero tolerance for uneven surfaces. Black Diamond Builders re-screeded all floor substrates with digital laser levels before laying imported book-matched marble.",
    clientRequirements: {
      clientType: "Overseas Tech Entrepreneur (San Francisco, USA)",
      primaryNeeds: [
        "Italian Statuario book-matched marble flooring with microscopic grout lines",
        "Concealed architectural linear diffusers for centralized climate control",
        "Smart lighting automation with scene control across all suites",
        "Acoustic isolation between master suite and entertainment lounge",
      ],
      specialChallenges:
        "High-floor logistics required external crane hoisting of 300kg marble slabs and specialized lightweight screed formulations.",
    },
    projectScope: [
      "Substrate Laser Leveling & Micro-Crack Epoxy Injection",
      "Imported Italian Marble Book-Matching & Diamond Polishing",
      "Architectural Veneer Wall Paneling with Concealed Flush Doors",
      "Concealed VRF Air Conditioning Ducting & Linear Diffusers",
      "Full Lutron/KNX Smart Automation & Sound Insulation",
    ],
    materialsAndWorkmanship: {
      steelGrade: "N/A (Interior Finishing Discipline)",
      steelProof: "Lightweight galvanized steel framing for false ceilings (26-gauge heavy).",
      concreteMix: "Polymer-modified self-leveling floor screed",
      concreteProof: "Floor level variance under 0.5mm across entire 50-foot open salon.",
      masonryAlignment: "Laser-aligned drywall partitions with rockwool acoustic battens",
      masonryProof: "Acoustic STC rating 52 verified with decibel meter tests.",
      waterproofing: "Dual polyurethane liquid membrane in all master en-suites",
      waterproofingProof: "100% moisture barrier certification under Italian marble baths.",
      stickAuditSummary:
        "Furqan Butt inspected wall panel flush lines and ceiling drops with the stick.",
    },
    stages: [
      {
        stageNumber: "01",
        stageName: "Substrate Laser Screeding & Hoisting",
        status: "Completed",
        durationEstimate: "[Demonstration Timeline: 3 Weeks]",
        description:
          "Hoisted Italian marble slabs via crane, primed concrete slab, and poured laser-guided self-leveling screed.",
        inspectionCheckpoint: "Laser level variance check across 4,500 sq ft floor plate.",
        mediaPlaceholder:
          "[Demonstration Footage: Crane Hoisting of Marble Slabs & Laser Screed]",
        evidenceTags: ["Laser Screed", "Marble Hoist", "Substrate Prep"],
      },
      {
        stageNumber: "02",
        stageName: "Marble Laying & Diamond Polishing",
        status: "In Progress",
        durationEstimate: "[Demonstration Timeline: 4 Weeks]",
        description:
          "Currently laying book-matched slabs with diamond polishing pads and zero-lip vacuum suction cups.",
        inspectionCheckpoint: "Book-match vein alignment audit and gloss reflectometry test.",
        mediaPlaceholder:
          "[Demonstration Footage: Book-Match Marble Vein Alignment]",
        evidenceTags: ["Italian Marble", "Diamond Polish", "In Progress"],
      },
    ],
    beforeAfterGallery: [
      {
        id: "ba-07",
        title: "Bare Concrete Penthouse to Italian Marble Salon",
        beforeStage: "Rough Concrete Floor with Exposed Conduit Runs",
        afterStage: "Mirror-Polished Statuario Marble with Linear Lighting",
        description:
          "Progression showing substrate leveling into museum-grade luxury living.",
        beforePlaceholder:
          "[Demonstration Comparison: Rough Penthouse Concrete Shell]",
        afterPlaceholder:
          "[Demonstration Comparison: Polished Italian Marble Salon]",
      },
    ],
    walkthroughVideo: {
      title: "Penthouse Marble & Finish Tour with Furqan Butt",
      description:
        "Furqan Butt inspects the micro-grout joints of the Italian marble and tests the acoustic wall isolation.",
      mediaPlaceholderNote:
        "[Demonstration Video Container: Luxury Penthouse Interior Walkthrough]",
      tiktokUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    },
    completionData: {
      deliveredDatePlaceholder: "[Demonstration Milestone: Active Interior Execution]",
      handoverMilestone: "Marble Polishing & Millwork Installation in Progress",
      warrantyStatus: "5-Year Premium Interior Craftsmanship Warranty",
      demonstrationDataDisclaimer:
        "[Demonstration Project Data — Authentic Client Specs & Media Pending Verification]",
    },
    relatedProjectSlugs: ["5-marla-modern-residence", "10-marla-architectural-villa"],
  },
];

// Helper functions for easy access across pages
export function getAllProjects(): PortfolioProject[] {
  return PORTFOLIO_PROJECTS;
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string): PortfolioProject[] {
  const current = getProjectBySlug(currentSlug);
  if (!current || !current.relatedProjectSlugs) {
    return PORTFOLIO_PROJECTS.filter((p) => p.slug !== currentSlug).slice(0, 3);
  }
  return PORTFOLIO_PROJECTS.filter((p) =>
    current.relatedProjectSlugs?.includes(p.slug)
  );
}
