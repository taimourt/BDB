export type ProjectType = "grey-structure" | "turnkey-luxury" | "commercial" | "renovation";

export type PlotSize = "5-marla" | "10-marla" | "1-kanal" | "2-kanal" | "commercial-custom";

export type CityLocation = "Islamabad" | "Rawalpindi" | "Wah Cantt" | "Lahore" | "Overseas Client (Building in Pakistan)";

export interface NavItem {
  label: string;
  href: string;
  isBadge?: boolean;
  badgeText?: string;
}

export interface ComparisonItem {
  category: string;
  shapperStandard: string;
  blackDiamondStandard: string;
  iconName: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  plotSize: string;
  category: string;
  status: "Completed" | "Under Construction" | "Site Excavation";
  shortDescription: string;
  verifiedSpecs: string[];
  scope: string[];
  structuralHighlights: string;
  mediaPlaceholderNote: string;
}

export interface ViralMoment {
  id: string;
  title: string;
  catchphrase: string;
  description: string;
  tiktokUrl: string;
  badge: string;
  mediaPlaceholderLabel: string;
}

export interface ConstructionService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  highlight: string;
  isPopular?: boolean;
}

export interface OwnerPersonaContent {
  sectionTitle: string;
  subtitle: string;
  theMan: {
    title: string;
    tagline: string;
    bio: string;
    signatureTraits: string[];
  };
  theMission: {
    title: string;
    tagline: string;
    bio: string;
    manifesto: string;
    keyCommitments: string[];
  };
  theMethod: {
    title: string;
    tagline: string;
    protocol: string;
    inspectionPoints: string[];
  };
}

export interface CatchphraseCardItem {
  id: string;
  quote: string;
  romanUrduQuote: string;
  category: "The Challenge" | "Structural Honor" | "The Stick Discipline" | "Anti-Shapper" | "Overseas Assurance";
  context: string;
  mediaPlaceholderNote?: string;
  verifiedSource: string;
}

export interface ShapperFaqItem {
  id: string;
  question: string;
  critiqueQuote: string;
  ourAnswer: string;
  engineeringProof: string;
}

export interface ChallengeProofTier {
  id: string;
  title: string;
  metric: string;
  marketShortcut: string;
  blackDiamondProof: string;
  stickVerificationNote: string;
}

export interface ConsultationFormData {
  fullName: string;
  phoneOrWhatsApp: string;
  email: string;
  isOverseas: boolean;
  countryOfResidence?: string;
  plotSize: PlotSize;
  projectType: ProjectType;
  city: CityLocation;
  plotNumberSociety?: string;
  message?: string;
}

// Portfolio Architecture Types
export type PortfolioSector = "residential" | "commercial";
export type PortfolioScope = "grey-structure" | "finishing-interiors" | "turnkey-luxury";
export type PortfolioStatus = "completed" | "in-progress" | "excavation";

export interface ProjectConstructionStage {
  stageNumber: string;
  stageName: string;
  status: "Completed" | "In Progress" | "Upcoming";
  durationEstimate: string;
  description: string;
  inspectionCheckpoint: string;
  mediaPlaceholder: string;
  evidenceTags: string[];
}

export interface BeforeAfterPair {
  id: string;
  title: string;
  beforeStage: string;
  afterStage: string;
  description: string;
  beforePlaceholder: string;
  afterPlaceholder: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  cityCorridor: string;
  sector: PortfolioSector; // residential | commercial
  scope: PortfolioScope; // grey-structure | finishing-interiors | turnkey-luxury
  status: PortfolioStatus; // completed | in-progress | excavation
  plotSize: string;
  coveredArea: string;
  featuredImagePlaceholder: string;
  shortDescription: string;
  fullOverview: string;
  clientRequirements: {
    clientType: string;
    primaryNeeds: string[];
    specialChallenges: string;
  };
  projectScope: string[];
  materialsAndWorkmanship: {
    steelGrade: string;
    steelProof: string;
    concreteMix: string;
    concreteProof: string;
    masonryAlignment: string;
    masonryProof: string;
    waterproofing: string;
    waterproofingProof: string;
    stickAuditSummary: string;
  };
  stages: ProjectConstructionStage[];
  beforeAfterGallery: BeforeAfterPair[];
  walkthroughVideo: {
    title: string;
    description: string;
    mediaPlaceholderNote: string;
    tiktokUrl: string;
  };
  completionData: {
    deliveredDatePlaceholder: string;
    handoverMilestone: string;
    warrantyStatus: string;
    demonstrationDataDisclaimer: string;
  };
  relatedProjectSlugs?: string[];
}
