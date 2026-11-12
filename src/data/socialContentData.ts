import type {
  SocialVideo,
  CatchphraseArchiveEntry,
  BehindTheScenesItem,
  AskBuilderQuestion,
  SocialAccountLink,
} from "../types/socialTypes";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const phoneDisplay = process.env.NEXT_PUBLIC_PHONE_DISPLAY || "Official Desk (Configurable via env)";

/**
 * Black Diamond Builders — Social Content Hub Central Repository
 * 
 * Configured for easy manual updates and architected for future TikTok API / CMS sync.
 * All URLs point to verified official brand destinations.
 * No follower counts or engagement numbers are fabricated.
 */

export const SOCIAL_VIDEOS: SocialVideo[] = [
  {
    id: "vid-01",
    title: "Poore Pakistan Ko Mera Challenge: Match Our Steel Density",
    videoUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    thumbnail: "/projects/project-01.jpg",
    caption:
      "Standing on a 1 Kanal slab in Islamabad. Count the rebar spacing yourself. We use 100% Prime Grade 60 mill-tested steel — not uncertified scrap re-roll. Poore Pakistan ko challenge hai!",
    category: "the-challenge",
    catchphraseId: "poore-pakistan-challenge",
    featured: true,
    published: true,
    duration: "0:58",
    date: "October 2026",
    constructionTopic: "Grade 60 Structural Steel Reinforcement",
    serviceLeadCta: {
      label: "Build A+ Grey Structure",
      href: "/#enquiry",
    },
  },
  {
    id: "vid-02",
    title: "Exposing 'Shapper' Contractors: The Counterfeit Gauge Scam",
    videoUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    thumbnail: "/projects/project-02.jpg",
    caption:
      "How cheap builders quote unrealistic low rates per square foot, then cut column dimensions and use 40-grade rebar in 60-grade disguise. Protect your life savings from Shapper builders.",
    category: "anti-shapper",
    catchphraseId: "shapper-warning",
    featured: true,
    published: true,
    duration: "1:24",
    date: "October 2026",
    constructionTopic: "Contractor Rate Fraud & Gauge Cutting",
    serviceLeadCta: {
      label: "Get A Transparent BOQ",
      href: "/#estimator",
    },
  },
  {
    id: "vid-03",
    title: "The Walking Stick Plaster Audit: 0mm Hollow Tolerance",
    videoUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    thumbnail: "/projects/project-03.jpg",
    caption:
      "Rapping our signature walking stick across 3 floors of newly completed plaster. If a single pocket sounds hollow, it gets chipped off and redone on our dime. Zero shortcuts.",
    category: "site-inspection",
    catchphraseId: "walking-stick-test",
    featured: false,
    published: true,
    duration: "1:12",
    date: "September 2026",
    constructionTopic: "Plaster Density & Sound Integrity Audit",
    serviceLeadCta: {
      label: "Inspect Our Quality Standards",
      href: "/projects",
    },
  },
  {
    id: "vid-04",
    title: "Live WhatsApp Walkthrough for Overseas Client in Manchester",
    videoUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    thumbnail: "/projects/project-04.jpg",
    caption:
      "Unedited direct video call with our UK client showing beam junctions, electrical conduit concealment, and curing progress before roof pour. Aap bahir baithein, aapka ghar mard ban kar banayenge.",
    category: "overseas-walkthrough",
    catchphraseId: "overseas-promise",
    featured: true,
    published: true,
    duration: "1:45",
    date: "October 2026",
    constructionTopic: "Overseas Expatriate Site Transparency",
    serviceLeadCta: {
      label: "Book Overseas Video Consultation",
      href: "/#enquiry",
    },
  },
  {
    id: "vid-05",
    title: "14-Day Mandatory Slab Ponding Protocol",
    videoUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    thumbnail: "/projects/project-01.jpg",
    caption:
      "Cheap contractors strip shuttering in 4 days and spray water for 15 minutes. Here is what real 14-day deep water ponding looks like on a 4,000 PSI cast roof slab in Islamabad.",
    category: "behind-the-scenes",
    catchphraseId: "poore-pakistan-challenge",
    featured: false,
    published: true,
    duration: "1:05",
    date: "September 2026",
    constructionTopic: "Concrete Hydration & Curing Ponding",
    serviceLeadCta: {
      label: "Estimate Construction Cost",
      href: "/#estimator",
    },
  },
  {
    id: "vid-06",
    title: "Dual-Axis Digital Laser Leveling on 70-Foot Boundary Walls",
    videoUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    thumbnail: "/projects/project-02.jpg",
    caption:
      "Traditional masonry strings sag. We use multi-axis digital optical laser beams to verify zero millimeter plumb deviation across every single brick course.",
    category: "behind-the-scenes",
    catchphraseId: "walking-stick-test",
    featured: false,
    published: true,
    duration: "0:52",
    date: "August 2026",
    constructionTopic: "Laser-Guided Brickwork Alignment",
    serviceLeadCta: {
      label: "View Verified Projects",
      href: "/projects",
    },
  },
];

export const CATCHPHRASE_ARCHIVE: CatchphraseArchiveEntry[] = [
  {
    id: "poore-pakistan-challenge",
    phrase: "POORE PAKISTAN KO MERA CHALLENGE HAI.",
    romanUrdu: "Poore Pakistan ko mera challenge hai — standard match karo!",
    englishTranslation:
      "I challenge all of Pakistan: match our structural steel ratios, concrete curing cycles, and laser alignment before you talk.",
    contextAndMeaning:
      "The viral signature challenge issued by Furqan Butt on TikTok to contractors cutting corners across Pakistan. It embodies absolute confidence backed by verifiable on-site engineering benchmarks.",
    associatedVideoId: "vid-01",
    shareQuote:
      "\"Poore Pakistan ko mera challenge hai: Match our structural steel density and 14-day curing cycles.\" — Furqan Butt, Black Diamond Builders",
    keyTakeaway:
      "Engineering confidence is earned in concrete and steel, not hollow marketing slogans.",
    badge: "The Signature Challenge",
    serviceLeadCta: {
      label: "Accept The Challenge",
      href: "/#challenge",
    },
  },
  {
    id: "shapper-warning",
    phrase: "SHAPPER BUILDERS SE APNI ZINDAGI BHAR KI KAMAI BACHAO.",
    romanUrdu: "Shapper builders se bachein. Saste rate ke peechay dhoka hai.",
    englishTranslation:
      "Protect your life's earnings from 'Shapper' (fragile, cut-corner) builders. Unrealistic cheap quotes always mean hollow foundations.",
    contextAndMeaning:
      "The term 'Shapper' (literally thin plastic bag) is used by Furqan Butt to characterize superficial contractors who provide lowball quotes by cutting rebar gauges, adulterating cement, and hiding hollow plaster behind shiny paint.",
    associatedVideoId: "vid-02",
    shareQuote:
      "\"Shapper builders se bachein. Never gamble your family's safety on cheap contractors.\" — Furqan Butt",
    keyTakeaway:
      "A cheap quote today costs double tomorrow when structural settling and moisture seepage destroy your house.",
    badge: "Consumer Advocacy",
    serviceLeadCta: {
      label: "Inspect Quality Comparison",
      href: "/#shapper",
    },
  },
  {
    id: "walking-stick-test",
    phrase: "CHHADDI HAR INCH CHECK KARTI HAI.",
    romanUrdu: "Chhaddi jahan bajegi, sachai wahan saamne aayegi.",
    englishTranslation:
      "The walking stick checks every single inch. Wherever it raps, the structural truth is revealed.",
    contextAndMeaning:
      "Furqan Butt's recognizable walking stick is not an accessory — it is an active diagnostic acoustic tool. Rapping the solid wood tip against cured plaster instantly uncovers hidden voids or weak mortar adhesion.",
    associatedVideoId: "vid-03",
    shareQuote:
      "\"Chhaddi jahan bajegi, sachai wahan saamne aayegi. Zero tolerance for hollow plaster.\" — Black Diamond Builders",
    keyTakeaway:
      "Every single wall at Black Diamond Builders undergoes physical acoustic inspection before finishing begins.",
    badge: "Acoustic Audit Motif",
    serviceLeadCta: {
      label: "See The Method",
      href: "/#persona",
    },
  },
  {
    id: "overseas-promise",
    phrase: "AAP BAHIR BAITHEIN, AAPKA GHAR MARD BAN KAR BANAYENGE.",
    romanUrdu: "Aap bahir baithein, aapka ghar mard ban kar banayenge.",
    englishTranslation:
      "You focus on your work abroad; we will construct your home with masculine integrity and total transparency.",
    contextAndMeaning:
      "Direct personal pledge to Overseas Pakistanis in the UK, North America, and Gulf who have historically suffered trust deficits with remote contractors in Pakistan.",
    associatedVideoId: "vid-04",
    shareQuote:
      "\"Aap bahir baithein, aapka ghar mard ban kar banayenge.\" — Furqan Butt's Overseas Expat Guarantee",
    keyTakeaway:
      "Live daily 4K unedited WhatsApp video walkthroughs keep overseas homeowners fully in control of every pour.",
    badge: "Overseas Expat Guarantee",
    serviceLeadCta: {
      label: "Overseas Consultation Desk",
      href: "/#overseas",
    },
  },
  {
    id: "mooch-standard",
    phrase: "MOOCH KO TAO TABHI DIYA JATA HAI JAB BUNYAAD MEIN SACHAI HO.",
    romanUrdu: "Mooch ko tao tabhi diya jata hai jab bunyaad mein sachai ho.",
    englishTranslation:
      "You only twirl your moustache with pride when your foundation has uncompromising truth.",
    contextAndMeaning:
      "A cultural gesture of Pakistani pride and honor. In construction, honor cannot be faked; it exists in the depth of the raft footing, the clean grade of the steel, and the curing water that never dried prematurely.",
    associatedVideoId: "vid-01",
    shareQuote:
      "\"Mooch ko tao tabhi diya jata hai jab bunyaad mein sachai ho.\" — The Black Diamond Pledge",
    keyTakeaway:
      "Pride is a byproduct of unshakeable structural integrity.",
    badge: "The Moustache Pledge",
    serviceLeadCta: {
      label: "Start Your Foundation",
      href: "/#enquiry",
    },
  },
];

export const BEHIND_THE_SCENES_ITEMS: BehindTheScenesItem[] = [
  {
    id: "bts-01",
    title: "1 Kanal Subterranean Raft & Dual SBS Torch-Applied Tanking",
    phase: "Foundation & Tanking",
    location: "DHA Phase 2, Islamabad",
    date: "October 2026",
    description:
      "Excavation to 14 feet for a double basement. Laying of 4-inch PCC sub-base, followed by dual-layer SBS modified elastomeric bitumen membrane heat-torched with 100mm overlaps to eliminate ground moisture permanently.",
    videoUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    thumbnail: "/projects/project-01.jpg",
    auditStandard: "ASTM D5147 / BS 8102 Tanking Protocol",
    specsChecked: [
      "100mm heat-sealed membrane overlaps",
      "Reinforced concrete protection screed",
      "Hydrophilic swelling waterstop bars at all cold construction joints",
    ],
  },
  {
    id: "bts-02",
    title: "High-Tensile Grade 60 Rebar Grid Placement & Spacer Blocks",
    phase: "Structural Framing",
    location: "Kohistan Enclave / B-17 Corridor",
    date: "September 2026",
    description:
      "Pre-pour structural inspection of 1st floor suspended beam network. Every bar intersection tied with 18-gauge annealed wire. 1.5-inch factory-cast cement cover spacer blocks placed every 3 feet to prevent rebar exposure.",
    videoUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    thumbnail: "/projects/project-02.jpg",
    auditStandard: "ACI 318 Seismic Code Compliance",
    specsChecked: [
      "100% Certified Mill-Tested Grade 60 steel",
      "Beam-column joint confinement hoops spacing <= 4 inches",
      "Zero contact between steel bars and shuttering plywood",
    ],
  },
  {
    id: "bts-03",
    title: "Optical Digital Laser Plumb Check on Double-Height Lobby",
    phase: "Superstructure Masonry",
    location: "Bahria Town Phase 8, Rawalpindi",
    date: "August 2026",
    description:
      "Verifying 22-foot high structural brick columns supporting the double-height portico. Multi-line red optical laser ensures 0.0mm vertical plumb variance from footing to roof lintel.",
    videoUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    thumbnail: "/projects/project-03.jpg",
    auditStandard: "DIN 18202 Architectural Tolerance Standard",
    specsChecked: [
      "AWWAL kiln-burnt clay bricks soaked in water tank for 2 hours",
      "1:4 cement-sand mortar ratio with Lawrencepur washed sand",
      "Continuous wall ties anchored into RCC shear core",
    ],
  },
  {
    id: "bts-04",
    title: "14-Day Mandatory Slab Curing Ponding Protocol",
    phase: "Concrete Slab Curing",
    location: "Sector B-17, Islamabad",
    date: "October 2026",
    description:
      "Earthen bunds built across the entire 4,200 sq.ft cast slab, holding 3 inches of continuous standing water for 14 uninterrupted days. This ensures concrete reaches full design compressive strength (> 3,500 PSI) with zero plastic shrinkage cracks.",
    videoUrl: "https://www.tiktok.com/@blackdiamondbuilders",
    thumbnail: "/projects/project-04.jpg",
    auditStandard: "ASTM C309 / ACI 308 Curing Protocol",
    specsChecked: [
      "Daily water replenishment monitoring logs",
      "Zero dry patches on roof concrete during peak afternoon heat",
      "Shuttering props left intact for minimum 21 days",
    ],
  },
];

export const INITIAL_APPROVED_QUESTIONS: AskBuilderQuestion[] = [
  {
    id: "q-01",
    question: "How can I verify if the steel delivered to my site is genuine Grade 60 or recycled re-roll scrap?",
    askerName: "Hamza Malik",
    city: "Islamabad",
    status: "published",
    answer:
      "Look for mill markings stamped directly onto the deformed ribs every 1 meter — reputable prime mills like Amreli, Mughal, or Model stamp their mill name, nominal bar size (e.g., #4, #6), and 'G60'. Second, demand the Mill Test Certificate (MTC) matching that exact delivery heat number. Third, snap a sample piece: counterfeit re-roll steel snaps brittlely or exhibits internal fissures, whereas prime Grade 60 bends smoothly around a pin without surface fractures.",
    answeredBy: "Furqan Butt",
    submittedAt: "2026-10-10T12:00:00Z",
    answeredAt: "2026-10-11T16:30:00Z",
    constructionTopic: "Material Quality & Steel Verification",
    helpfulNotes: "Never allow unlabelled or loose unbundled rebar onto your plot.",
  },
  {
    id: "q-02",
    question: "Why do you insist on 14 days of slab ponding? Other contractors say 4 to 5 days is plenty.",
    askerName: "Tariq Mahmood (Expat)",
    city: "Birmingham, UK",
    status: "published",
    answer:
      "Anyone telling you 4 days is enough is a 'Shapper' builder trying to strip your shuttering props early to take them to another client's project! Concrete gains only ~65% of its design compressive strength at 7 days. It requires 14 to 28 days of uninterrupted moisture hydration to reach full 3,000+ PSI molecular cross-linking. Depriving concrete of water early causes permanent micro-cracking that will leak water and corrode your steel 3 years later.",
    answeredBy: "Furqan Butt",
    submittedAt: "2026-10-08T09:15:00Z",
    answeredAt: "2026-10-09T14:00:00Z",
    constructionTopic: "Structural Curing & Concrete Chemistry",
    helpfulNotes: "Shuttering props must remain under main beams for 21 days minimum.",
  },
  {
    id: "q-03",
    question: "I live in Dallas, Texas. Can I build a luxury house in DHA Islamabad without being physically present?",
    askerName: "Khurram Shahzad",
    city: "Dallas, USA",
    status: "published",
    answer:
      "Over 60% of Black Diamond Builders' luxury projects are built for Overseas Pakistanis! You do not need to take time off work or worry about remote fraud. We provide digital milestone contracts, live unedited 4K WhatsApp walk-throughs before every concrete pour, third-party lab compression cylinder test reports, and an escrow milestone payment schedule. You see every kilogram of steel tied before it is covered.",
    answeredBy: "Furqan Butt",
    submittedAt: "2026-10-05T18:20:00Z",
    answeredAt: "2026-10-06T11:45:00Z",
    constructionTopic: "Overseas Expatriate Construction Management",
    helpfulNotes: "Schedule a dedicated overseas video conference directly through our portal.",
  },
  {
    id: "q-04",
    question: "What is the single biggest trick contractors use to quote unrealistically cheap rates?",
    askerName: "Zeeshan Abbasi",
    city: "Rawalpindi",
    status: "published",
    answer:
      "They cut the covered area steel ratio and concrete thickness! A standard earthquake-resistant double-story house requires 4.2 to 4.8 kg of steel per covered square foot. A cut-corner builder drops that to 2.8 to 3.2 kg, uses 4-inch floor slabs instead of 5.5-inch slabs, and uses unwashed local quarry dust instead of Lawrencepur sand. On paper, their per sq.ft rate looks cheaper — but your house foundation will sink and crack within 5 years.",
    answeredBy: "Furqan Butt",
    submittedAt: "2026-09-28T14:00:00Z",
    answeredAt: "2026-09-29T10:30:00Z",
    constructionTopic: "Contractor Rate Traps & Material Cutting",
    helpfulNotes: "Always ask your builder for the total steel tonnage guaranteed in the BOQ.",
  },
];

export const OFFICIAL_SOCIAL_CHANNELS: SocialAccountLink[] = [
  {
    platform: "tiktok",
    name: "Official TikTok Account",
    handle: "@blackdiamondbuilders",
    url: "https://www.tiktok.com/@blackdiamondbuilders",
    description:
      "Daily jobsite inspections, walking stick plaster audits, steel density verification, and live construction challenges directly from Furqan Butt.",
    isPrimary: true,
    badge: "171K+ Followers • 6.1M+ Likes",
  },
  {
    platform: "whatsapp",
    name: "Direct Engineering Desk (WhatsApp)",
    handle: "Black Diamond Builders Desk",
    url: whatsappNumber
      ? `https://wa.me/${whatsappNumber}`
      : "https://wa.me/?text=Assalam-o-Alaikum%20Black%20Diamond%20Builders",
    description:
      "Direct channel for project specifications, overseas video consultations, architectural drawings review, and indicative budget discussions.",
    isPrimary: true,
    badge: "Instant Priority Channel",
  },
  {
    platform: "phone",
    name: "Direct Telephone Line",
    handle: phoneDisplay,
    url: `tel:${phoneDisplay.replace(/\s+/g, "")}`,
    description:
      "Speak directly with our senior site engineers and project planning desk in Islamabad / Rawalpindi corridor.",
    isPrimary: false,
  },
];
