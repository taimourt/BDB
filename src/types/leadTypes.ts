/**
 * Black Diamond Builders - Lead Generation & Enquiry Data Types
 */

export type ServiceNeed =
  | "new-house"
  | "grey-structure"
  | "complete-finishing"
  | "renovation"
  | "commercial"
  | "other";

export type ConstructionStage =
  | "planning-design"
  | "vacant-plot"
  | "foundation-active"
  | "grey-complete"
  | "existing-renovation";

export type PreferredContactMethod = "whatsapp" | "phone" | "email";

export interface CustomPlotDimensions {
  lengthFeet: number;
  widthFeet: number;
  customUnit: "marla" | "kanal" | "sqft";
  customValue?: number;
}

export interface EstimatorSummary {
  coveredAreaSqFt: number;
  scopeId: string;
  scopeLabel: string;
  tierId: string;
  tierName: string;
  minTotalPkr: number;
  maxTotalPkr: number;
  formattedRange: string;
}

export interface LeadFormData {
  // Step 1: Need
  serviceNeed: ServiceNeed;
  serviceNeedCustom?: string;

  // Step 2: Project Details
  city: string;
  customCity?: string;
  areaLocation: string; // e.g., DHA Phase 2, Bahria Phase 8, etc.
  plotPreset: string; // e.g. "5-marla", "10-marla", "1-kanal", "2-kanal", "custom"
  isCustomDimensions: boolean;
  customDimensions?: CustomPlotDimensions;
  constructionStage: ConstructionStage;
  approxCoveredAreaSqFt: string; // user input string or converted number

  // Step 3: Budget & Timeline
  budgetRange: string;
  expectedStartDate: string;
  additionalRequirements: string;
  isOverseasClient: boolean;
  countryOfResidence?: string;

  // Step 4: Contact Information
  fullName: string;
  countryCode: string; // e.g., "+92", "+44", "+1", "+971"
  phone: string;
  email: string;
  preferredContactMethod: PreferredContactMethod;
  consentGiven: boolean;

  // Estimator Linkage (if transferred)
  estimatorSummary?: EstimatorSummary;

  // Anti-Spam & Security
  botTrapWebsite?: string; // Honeypot field (must remain empty)
  formLoadTimestamp: number; // Client render timestamp
}

export interface LeadSubmissionPayload extends LeadFormData {
  leadId: string;
  submittedAt: string; // ISO 8601 string
  clientMetadata: {
    sourceUrl: string;
    referrer: string;
    campaignParams: {
      utmSource?: string;
      utmMedium?: string;
      utmCampaign?: string;
      utmTerm?: string;
      utmContent?: string;
    };
    userAgent?: string;
  };
  consentRecord: {
    consentGiven: boolean;
    consentStatement: string;
    timestamp: string;
  };
}

export type CrmDeliveryStatus =
  | "delivered_gohighlevel"
  | "delivered_webhook"
  | "simulated_development_mode"
  | "delivery_failed";

export interface LeadSubmissionResponse {
  success: boolean;
  leadId: string;
  message: string;
  timestamp: string;
  crmDeliveryStatus: CrmDeliveryStatus;
  crmDetails?: {
    contactId?: string;
    opportunityId?: string;
    note?: string;
  };
  whatsappEscalationUrl: string;
  errors?: string[];
}
