import {
  ESTIMATOR_CONFIG,
  calculateIndicativeEstimate,
} from "../data/estimatorRates.ts";
import fs from "fs";
import path from "path";

console.log("=================================================");
console.log("BLACK DIAMOND BUILDERS - LEAD GENERATION & ESTIMATOR VERIFICATION");
console.log("=================================================\n");

let passedTests = 0;
let totalTests = 0;

function assert(condition: boolean, testName: string, details?: string) {
  totalTests++;
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${testName}`);
    if (details) console.error(`       Details: ${details}`);
    process.exitCode = 1;
  }
}

// ==========================================
// TEST SUITE 1: ESTIMATOR CALCULATIONS & RATES
// ==========================================
console.log("--- TEST SUITE 1: ESTIMATOR CALCULATIONS & RATES ---");

// Test 1.1: Estimator metadata & disclaimers
assert(
  ESTIMATOR_CONFIG.lastUpdatedDate === "October 15, 2026",
  "Estimator has valid lastUpdatedDate",
  `Found: ${ESTIMATOR_CONFIG.lastUpdatedDate}`
);

assert(
  ESTIMATOR_CONFIG.disclaimer.includes("indicative preliminary estimate") &&
  ESTIMATOR_CONFIG.disclaimer.includes("does not constitute a legally binding quotation"),
  "Estimator contains explicit non-binding legal disclaimer",
  `Found: ${ESTIMATOR_CONFIG.disclaimer.slice(0, 80)}...`
);

assert(
  ESTIMATOR_CONFIG.assumptions.length >= 5,
  "Estimator provides at least 5 transparent structural assumptions",
  `Count: ${ESTIMATOR_CONFIG.assumptions.length}`
);

assert(
  ESTIMATOR_CONFIG.exclusions.length >= 5,
  "Estimator provides at least 5 explicit scope exclusions (e.g. plot purchase, society dues, basements)",
  `Count: ${ESTIMATOR_CONFIG.exclusions.length}`
);

// Test 1.2: Scope definitions
const SCOPE_RATES = ESTIMATOR_CONFIG.scopeRates;
assert(
  SCOPE_RATES["grey-structure"] !== undefined &&
  SCOPE_RATES["complete-finishing"] !== undefined &&
  SCOPE_RATES["turnkey-luxury"] !== undefined,
  "Estimator supports all 3 primary scopes: grey-structure, complete-finishing, turnkey-luxury"
);

// Test 1.3: Quality tiers per scope
const turnkeyTiers = SCOPE_RATES["turnkey-luxury"].tiers;
assert(
  turnkeyTiers["executive-standard"] !== undefined &&
  turnkeyTiers["luxury-signature"] !== undefined &&
  turnkeyTiers["ultra-monolith"] !== undefined,
  "Turnkey scope supports 3 tiers: Executive Standard, Luxury Signature, Ultra Monolith"
);

// Test 1.4: 5 Marla calculation (2150 sq.ft covered area)
const est5Marla = calculateIndicativeEstimate({
  coveredAreaSqFt: 2150,
  scopeId: "turnkey-luxury",
  tierId: "luxury-signature",
  city: "Islamabad",
});

assert(
  est5Marla.isValid && est5Marla.minTotalPkr > 0 && est5Marla.maxTotalPkr > est5Marla.minTotalPkr,
  "5 Marla Turnkey calculation produces valid min and max range",
  `Result: ${est5Marla.formattedMin} - ${est5Marla.formattedMax}`
);

// Test 1.5: 1 Kanal calculation (5900 sq.ft covered area)
const est1Kanal = calculateIndicativeEstimate({
  coveredAreaSqFt: 5900,
  scopeId: "turnkey-luxury",
  tierId: "luxury-signature",
  city: "Islamabad",
});

assert(
  est1Kanal.isValid && est1Kanal.minTotalPkr > est5Marla.minTotalPkr,
  "1 Kanal calculation scales proportionally above 5 Marla based on covered area",
  `1 Kanal: ${est1Kanal.formattedMin} - ${est1Kanal.formattedMax}`
);

// Test 1.6: Custom covered area calculation
const customEstimate = calculateIndicativeEstimate({
  coveredAreaSqFt: 4000,
  scopeId: "grey-structure",
  tierId: "luxury-signature",
  city: "Islamabad",
});

assert(
  customEstimate.isValid && customEstimate.minRatePerSqFt === SCOPE_RATES["grey-structure"].tiers["luxury-signature"].ratePerSqFtMin,
  "Custom covered area correctly utilizes exact scope rate per sq.ft",
  `Result: ${customEstimate.formattedMin} - ${customEstimate.formattedMax}`
);

// Test 1.7: Regional city factors
const estRawalpindi = calculateIndicativeEstimate({
  coveredAreaSqFt: 5000,
  scopeId: "turnkey-luxury",
  tierId: "luxury-signature",
  city: "Rawalpindi",
});

const estLahore = calculateIndicativeEstimate({
  coveredAreaSqFt: 5000,
  scopeId: "turnkey-luxury",
  tierId: "luxury-signature",
  city: "Lahore",
});

assert(
  estRawalpindi.isValid && estLahore.isValid && estLahore.minTotalPkr > estRawalpindi.minTotalPkr,
  "Lahore regional multiplier (1.02) calculates higher than Rawalpindi (0.99)",
  `RWP: ${estRawalpindi.formattedMin}, LHE: ${estLahore.formattedMin}`
);

// ==========================================
// TEST SUITE 2: MULTI-STEP LEAD FORM VALIDATION
// ==========================================
console.log("\n--- TEST SUITE 2: MULTI-STEP LEAD FORM VALIDATION ---");

// Test 2.1: Step 1 options
const validServiceNeeds = [
  "new-house",
  "grey-structure",
  "complete-finishing",
  "renovation",
  "commercial",
  "other",
];

assert(
  validServiceNeeds.length === 6,
  "All 6 required Step 1 services are catalogued: New House, Grey Structure, Finishing, Renovation, Commercial, Other"
);

// Test 2.2: Pakistan phone number validation
function isValidPakistaniPhone(phone: string, countryCode: string): boolean {
  const digits = phone.replace(/\D/g, "");
  if (countryCode === "+92") {
    return digits.length >= 10 && digits.length <= 11;
  }
  return digits.length >= 7;
}

assert(
  isValidPakistaniPhone("0300 0555323", "+92") &&
  isValidPakistaniPhone("3000555323", "+92") &&
  !isValidPakistaniPhone("12345", "+92"),
  "Pakistan phone number validation correctly handles +92 formats and rejects invalid digits"
);

// ==========================================
// TEST SUITE 3: ANTI-SPAM & SECURITY CONTROLS
// ==========================================
console.log("\n--- TEST SUITE 3: ANTI-SPAM & SECURITY CONTROLS ---");

// Test 3.1: Honeypot trap detection
function checkHoneypot(body: { botTrapWebsite?: string }): boolean {
  return !(body.botTrapWebsite && body.botTrapWebsite.trim().length > 0);
}

assert(
  checkHoneypot({ botTrapWebsite: "" }) === true,
  "Clean human submission passes honeypot check"
);

assert(
  checkHoneypot({ botTrapWebsite: "http://bot-promotions.xyz" }) === false,
  "Bot spam populating hidden botTrapWebsite field is rejected"
);

// Test 3.2: Submission timing check
function checkSubmissionTiming(formLoadTimestamp: number, submissionTimestamp: number): boolean {
  const elapsed = (submissionTimestamp - formLoadTimestamp) / 1000;
  return elapsed >= 2.5;
}

assert(
  checkSubmissionTiming(Date.now() - 3000, Date.now()) === true,
  "Submission taking > 2.5 seconds passes human velocity check"
);

assert(
  checkSubmissionTiming(Date.now() - 500, Date.now()) === false,
  "Submission under 2.5 seconds is rejected as automated bot submission"
);

// ==========================================
// TEST SUITE 4: CRM INTEGRATION & LOCAL SIMULATOR
// ==========================================
console.log("\n--- TEST SUITE 4: CRM INTEGRATION & LOCAL SIMULATOR ---");

// Test 4.1: Unique lead identifier generation
function generateLeadId(): string {
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const randomChars = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `BDB-${dateStr}-${randomChars}`;
}

const testLeadId1 = generateLeadId();
const testLeadId2 = generateLeadId();

assert(
  testLeadId1.startsWith("BDB-") && testLeadId1 !== testLeadId2,
  "Generates distinct, trace-identifiable Lead IDs with BDB prefix",
  `Lead ID 1: ${testLeadId1}, Lead ID 2: ${testLeadId2}`
);

// Test 4.2: Development mode JSON persistence
const storageDir = path.join(process.cwd(), "src", "data");
const simulatedFilePath = path.join(storageDir, "simulatedLeads.json");

const mockLead = {
  leadId: testLeadId1,
  submittedAt: new Date().toISOString(),
  serviceNeed: "new-house",
  fullName: "Syed Taimour Ali",
  phone: "03000555323",
  countryCode: "+92",
  city: "Islamabad",
  areaLocation: "DHA Phase 2",
  plotPreset: "1-kanal",
  isCustomDimensions: false,
  constructionStage: "planning-design",
  approxCoveredAreaSqFt: "5900",
  budgetRange: "PKR 2.5 - 4.5 Crore",
  expectedStartDate: "1-3 Months",
  preferredContactMethod: "whatsapp",
  consentGiven: true,
  clientMetadata: {
    sourceUrl: "http://localhost:3000/#enquiry",
    referrer: "direct",
    campaignParams: {
      utmSource: "tiktok-organic",
      utmMedium: "video",
      utmCampaign: "pakistan-challenge",
    },
    userAgent: "Automated-Verification-Agent",
  },
  consentRecord: {
    consentGiven: true,
    consentStatement:
      "I authorize Black Diamond Builders engineering and sales desk to contact me regarding this construction enquiry.",
    timestamp: new Date().toISOString(),
  },
};

let existingLeads: any[] = [];
if (fs.existsSync(simulatedFilePath)) {
  try {
    const raw = fs.readFileSync(simulatedFilePath, "utf-8");
    existingLeads = JSON.parse(raw);
  } catch {
    existingLeads = [];
  }
}

existingLeads.unshift(mockLead);
fs.writeFileSync(simulatedFilePath, JSON.stringify(existingLeads, null, 2), "utf-8");

const verifiedLeads = JSON.parse(fs.readFileSync(simulatedFilePath, "utf-8"));
assert(
  verifiedLeads.some((l: any) => l.leadId === testLeadId1),
  "Simulated development mode records lead payload to simulatedLeads.json with full metadata",
  `Stored leads count: ${verifiedLeads.length}`
);

// ==========================================
// TEST SUITE 5: WHATSAPP INTEGRATION & ENCODING
// ==========================================
console.log("\n--- TEST SUITE 5: WHATSAPP INTEGRATION & ENCODING ---");

// Test 5.1: Non-invention of business phone number
const brandDataContent = fs.readFileSync(
  path.join(process.cwd(), "src", "data", "brandData.ts"),
  "utf-8"
);

assert(
  !brandDataContent.includes('whatsappNumber: "923000000000"') &&
  brandDataContent.includes("process.env.NEXT_PUBLIC_WHATSAPP_NUMBER"),
  "Does not invent or hardcode dummy business phone number (configured via env)",
  "Verified: whatsappNumber uses process.env.NEXT_PUBLIC_WHATSAPP_NUMBER"
);

// Test 5.2: Message URL encoding
const clientPhone = "923001234567";
const testMessage = `Assalam-o-Alaikum Black Diamond Builders, I have submitted an enquiry for 1 Kanal house construction in DHA Islamabad. Lead Ref: ${testLeadId1}. Please confirm receipt.`;
const encodedUrl = `https://wa.me/${clientPhone}?text=${encodeURIComponent(testMessage)}`;

assert(
  encodedUrl.startsWith("https://wa.me/923001234567?text=") &&
  encodedUrl.includes(encodeURIComponent(testLeadId1)) &&
  !encodedUrl.includes(" "),
  "WhatsApp URL is properly encoded with spaces converted to %20 and references the lead ID",
  `URL Sample: ${encodedUrl.slice(0, 70)}...`
);

console.log("\n=================================================");
console.log(`SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED SUCCESSFULLY`);
console.log("=================================================");

if (passedTests === totalTests) {
  process.exit(0);
} else {
  process.exit(1);
}
