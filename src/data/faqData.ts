export interface FaqItem {
  id: string;
  category: "planning" | "cost" | "timeline" | "quality" | "overseas";
  question: string;
  answer: string;
  indicativeNote?: string;
  highlightKey?: string;
}

export interface FaqCategory {
  id: "planning" | "cost" | "timeline" | "quality" | "overseas";
  name: string;
  badge: string;
  description: string;
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "quality",
    name: "Quality & Anti-Shapper Standards",
    badge: "The Challenge",
    description: "Our Grade 60 steel guarantees, 14-day curing ponding, and Furqan Butt's physical stick audits.",
  },
  {
    id: "cost",
    name: "Cost, Quotations & BOQs",
    badge: "Estimator",
    description: "How contracts are priced, transparent line-item BOQs, and price escalation protection.",
  },
  {
    id: "timeline",
    name: "Timelines & Construction Stages",
    badge: "Milestones",
    description: "Expected phase durations, monsoon protocols, and handover schedules.",
  },
  {
    id: "planning",
    name: "Project Planning & Approvals",
    badge: "CDA / RDA / DHA",
    description: "Plot possession, soil testing, society drawings, and municipal NOC approvals.",
  },
  {
    id: "overseas",
    name: "Overseas Expatriate Services",
    badge: "UK / USA / Gulf",
    description: "Remote video inspections, escrow milestones, and fraud-free construction for expats.",
  },
];

export const FAQS: FaqItem[] = [
  // --- Quality Standards ---
  {
    id: "faq-q1",
    category: "quality",
    question: "What exactly is a 'Shapper' builder, and why is Furqan Butt so vocal about them?",
    answer:
      "In Pakistani construction, 'Shapper' (literally, a flimsy, disposable plastic bag) is Furqan Butt's term for unethical, cut-corner contractors who promise the moon at unrealistically cheap rates, only to compromise on fundamental structural safety. They cut steel gauges from #6 to #4, mix uncertified re-roll scrap into concrete, use unwashed salty quarry sand, remove shuttering in 3 days, and cover crooked walls with 2 inches of hollow plaster. When the building starts leaking and cracking, they disappear. Furqan Butt created Black Diamond Builders to demolish this culture through radical on-site transparency.",
    highlightKey: "Uncompromising integrity",
  },
  {
    id: "faq-q2",
    category: "quality",
    question: "Why does Furqan Butt carry a walking stick ('chhaddi') on every job site?",
    answer:
      "The walking stick is not a fashion accessory—it is a functional acoustic diagnostic instrument. When a contractor eyeballed a crooked wall, they often hide the mistake under 2 to 3 inches of wet plaster. Over time, that plaster pulls away from the brick, leaving hollow pockets that sound like a hollow drum when tapped. Furqan Butt raps the stick against every square foot of plastered wall. If the stick rings hollow, the wall is broken down immediately. The stick also serves as a manual plumb ruler and rebar spacing gauge.",
    highlightKey: "Acoustic stick audit",
  },
  {
    id: "faq-q3",
    category: "quality",
    question: "How do you verify that the steel used in my house is genuine Grade 60?",
    answer:
      "We exclusively purchase steel directly from premier certified mills (such as Amreli, Mughal Supreme, Model Steel, or Agha). Every bundle arrives with its original mill tag and Mill Test Certificate (MTC) detailing its chemical composition and 60,000 PSI yield strength. Furthermore, deformed ribs are stamped directly with 'G60' every meter. Clients receive copies of the MTC for every delivery batch before steel is tied.",
    highlightKey: "100% Prime Grade 60",
  },
  {
    id: "faq-q4",
    category: "quality",
    question: "Why do you mandate 14 days of slab ponding when other contractors only water for 4 days?",
    answer:
      "Concrete does not harden by 'drying out'; it gains strength through a chemical process called hydration. Depriving newly poured concrete of water causes hydration to halt prematurely, resulting in irreversible micro-fissures and losing up to 35% of design compressive strength. At Black Diamond Builders, we build mortar bunds (kayarian) on all roof slabs and keep them continuously submerged in water for 14 uninterrupted days. Vertical columns are wrapped in wet burlap (hessian cloth).",
    highlightKey: "14-Day Mandatory Hydration",
  },

  // --- Cost & Quotations ---
  {
    id: "faq-c1",
    category: "cost",
    question: "Why are your construction rates slightly higher than typical market contractors?",
    answer:
      "Because we do not participate in contractor rate traps. Cut-corner builders quote a dangerously low initial rate (e.g., PKR 2,400/sq.ft for grey structure), but they cut 30% of the steel tonnage, use unwashed sand, and leave out essential scope like DPC waterproofing, septic tank construction, and roof heat insulation. Then, halfway through the build, they stop work and demand massive budget increases. Our rates reflect 100% Prime Grade 60 steel, full laser alignment, dual-layer SBS basement waterproofing, and zero surprise escalations.",
    indicativeNote: "Indicative rates are calibrated against prevailing market cement and steel prices.",
    highlightKey: "Airtight guaranteed BOQ",
  },
  {
    id: "faq-c2",
    category: "cost",
    question: "What is the difference between a 'Lump-Sum Per Square Foot' rate and an 'Itemized BOQ'?",
    answer:
      "A lump-sum per square foot rate is a vague generalization that gives the contractor freedom to substitute cheaper materials without your knowledge. In contrast, an itemized Bill of Quantities (BOQ) calculates the exact kilograms of steel, cubic feet of coarse aggregate, thousands of AWWAL bricks, and brands of sanitary fittings. Black Diamond Builders provides a fully itemized, legally binding BOQ so you know down to the single rupee where your capital is invested.",
    highlightKey: "Itemized transparency",
  },
  {
    id: "faq-c3",
    category: "cost",
    question: "What are your current indicative construction price benchmarks in Islamabad & Rawalpindi?",
    answer:
      "For standard double-story residential properties in CDA, DHA, and Bahria Town, our current indicative benchmarks are: A+ Grey Structure ranges from PKR 2,900 to 3,250 per sq. ft. (or PKR 3,350 to 3,750 for subterranean luxury with basements); Turnkey Luxury starts from PKR 6,500 to 7,200 per sq. ft. for Executive tier, PKR 7,500 to 8,800 for Luxury Signature tier, and PKR 9,200 to 11,500+ for Ultra Monolith bespoke finishes.",
    indicativeNote:
      "Disclaimer: All rates are indicative preliminary benchmarks. Final binding pricing is determined exclusively by your plot's soil test, architectural drawings, and signed line-item BOQ.",
    highlightKey: "Indicative benchmarks",
  },
  {
    id: "faq-c4",
    category: "cost",
    question: "How do payment milestones work during construction?",
    answer:
      "We never ask for large upfront cash advances. Payments are structured across verifiable physical construction milestones (e.g., Raft Foundation Handover, Plinth Level, Ground Floor Roof Slab, First Floor Roof Slab, Masonry Handover, MEP Rough-in, Wet Finishes, Key Handover). Each milestone is inspected by Furqan Butt, documented with uncut 4K video, and verified by the client before the next escrow tranche is disbursed.",
    highlightKey: "Milestone escrow disbursements",
  },

  // --- Timelines & Construction Stages ---
  {
    id: "faq-t1",
    category: "timeline",
    question: "How long does it take to construct a 5 Marla, 10 Marla, or 1 Kanal house?",
    answer:
      "Timelines depend on whether your scope is Grey Structure or Full Turnkey. As indicative standards: A 5 Marla Grey Structure typically takes 3.5 to 5 months (or 8 to 10 months for Turnkey); a 10 Marla Grey Structure takes 4 to 6 months (or 10 to 12 months for Turnkey); a 1 Kanal Grey Structure takes 5 to 7 months (or 12 to 14 months for Turnkey). Basements typically add 4 to 6 weeks for deep shoring, excavation, and dual SBS tanking.",
    indicativeNote:
      "Timelines are indicative and assume uninterrupted utility access, standard weather, and prompt society milestone approvals.",
    highlightKey: "Predictable schedules",
  },
  {
    id: "faq-t2",
    category: "timeline",
    question: "How do you handle construction during Pakistan's heavy monsoon season?",
    answer:
      "Monsoons require strict engineering discipline. We install high-capacity perimeter dewatering pumps before excavation, protect open brick coursing with heavy polythene covers, and avoid casting horizontal roof slabs during active rainfall. However, rainy periods are actually beneficial for concrete curing ponding, provided structural joints are protected.",
    highlightKey: "Weather-resilient planning",
  },
  {
    id: "faq-t3",
    category: "timeline",
    question: "What happens if there are delays caused by society or municipal authorities?",
    answer:
      "While we fast-track all submissions through our experienced liaison team, municipal approvals (CDA/RDA/DHA/Bahria) occasionally experience bureaucratic delays outside our direct control. Our contracts feature clear force majeure and authority-review clauses so both parties are completely aligned on realistic handover targets.",
    highlightKey: "Clear contractual clarity",
  },

  // --- Project Planning & Approvals ---
  {
    id: "faq-p1",
    category: "planning",
    question: "At what point should I contact Black Diamond Builders when planning to build?",
    answer:
      "The earlier, the better! Ideally, reach out before finalizing architectural drawings. Many architects draw dramatic cantilevers or deep basements that are structurally inefficient or prohibitively expensive to build. Involving our structural team early allows us to value-engineer your layout, saving you millions of rupees in avoidable rebar and excavation costs.",
    highlightKey: "Early structural consultation",
  },
  {
    id: "faq-p2",
    category: "planning",
    question: "Do I need a soil bearing test before starting foundation work?",
    answer:
      "Non-negotiable yes! Building a house without a soil test is like prescribing medicine without a blood test. In areas like Islamabad B-17, Kohistan Enclave, Bahria Phase 8, and DHA Phase 2, soil conditions vary wildly from rock strata to loose fill. A geotechnical soil test tells us the exact bearing capacity (tons/sq.ft) and determines whether your house requires a strip footing, raft slab, or underground micro-piles.",
    highlightKey: "Mandatory Geotechnical Test",
  },
  {
    id: "faq-p3",
    category: "planning",
    question: "Does Black Diamond Builders handle drawing approvals in DHA, Bahria Town, and CDA?",
    answer:
      "Yes. Our architectural team prepares complete submission sets compliant with the specific building bylaws of DHA Islamabad/Rawalpindi, Bahria Town, CDA, RDA, and surrounding housing authorities. Our liaison officers manage society inspections from demarcation to final completion certificate issuance.",
    highlightKey: "End-to-end society approvals",
  },

  // --- Overseas Expatriate Services ---
  {
    id: "faq-o1",
    category: "overseas",
    question: "I live in the UK / USA / Gulf. How can I be sure my money isn't being wasted or stolen?",
    answer:
      "Furqan Butt's personal pledge to Overseas Pakistanis is: 'Aap bahir baithein, aapka ghar mard ban kar banayenge.' We have built our reputation on serving expatriates. You do not send lump-sum cash to relatives or questionable accounts. All transactions are routed through documented business accounts tied to verifiable construction milestones. Before each milestone invoice, you receive uncut 4K WhatsApp walk-through videos showing the exact steel tied, brickwork laser alignment, and laboratory test reports.",
    highlightKey: "Radical expat transparency",
  },
  {
    id: "faq-o2",
    category: "overseas",
    question: "Can I do live video walkthroughs directly with Furqan Butt from abroad?",
    answer:
      "Yes. For our overseas clients, Furqan Butt hosts scheduled WhatsApp and Zoom video site inspections before major milestones (such as basement raft casting, ground floor slab pour, and final plaster audits). You see the stick in action on your plot live in real time.",
    highlightKey: "Direct owner access",
  },
  {
    id: "faq-o3",
    category: "overseas",
    question: "What currencies and payment methods do you support for overseas remittances?",
    answer:
      "We accept direct official banking remittances in PKR, GBP, USD, EUR, and AED into our official corporate bank accounts in Pakistan, fully compliant with State Bank of Pakistan foreign remittance regulations. Official PRCs (Proceed Realization Certificates) are provided for tax compliance.",
    highlightKey: "State Bank compliant banking",
  },
];
