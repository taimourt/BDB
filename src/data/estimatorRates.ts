/**
 * Black Diamond Builders - Administrator-Configurable Construction Estimator Rates
 * 
 * Rates are reviewed periodically based on the Islamabad/Rawalpindi Construction Index
 * (Grade 60 steel rebar, AWWAL kiln bricks, Cherat/Bestway cement, coarse sand, and skilled labor).
 * 
 * Note: These are baseline indicative benchmark rates for budgeting purposes.
 * Final BOQ is calculated individually following architectural drawings & soil test analysis.
 */

export interface QualityTierRate {
  id: "executive-standard" | "luxury-signature" | "ultra-monolith";
  name: string;
  tagline: string;
  ratePerSqFtMin: number; // PKR per sq ft
  ratePerSqFtMax: number; // PKR per sq ft
  highlights: string[];
  recommendedFor: string;
}

export interface ScopeRates {
  id: "grey-structure" | "complete-finishing" | "turnkey-luxury";
  label: string;
  description: string;
  tiers: Record<string, QualityTierRate>;
}

export interface PlotPreset {
  id: string;
  label: string;
  marlaEquivalent: number;
  typicalDimensions: string;
  plotAreaSqFt: number;
  typicalCoveredAreaSqFt: number; // typical double-story layout
  description: string;
}

export interface CityFactor {
  city: string;
  factor: number;
  note: string;
}

export const ESTIMATOR_CONFIG = {
  version: "2026.Q4",
  lastUpdatedDate: "October 15, 2026",
  currency: "PKR",
  currencySymbol: "Rs.",
  disclaimer:
    "This interactive cost calculator provides an indicative preliminary estimate based on standard municipal covered area ratios in Islamabad and Rawalpindi. It does not constitute a legally binding quotation. Actual construction cost varies based on architectural drawings, soil bearing capacity tests, contour excavation requirements, and client-selected material grades.",
  
  assumptions: [
    "Standard soil bearing capacity (minimum 1.0 ton/sq.ft) on flat or leveled terrain.",
    "Municipal approved standard double-story residential architectural floor plan.",
    "100% Prime Mill-Tested Grade 60 Deformed Steel Rebar throughout.",
    "AWWAL class kiln-burnt red clay bricks and 3,000+ PSI core compressive concrete.",
    "14-day mandatory water ponding protocol on all cast roof slabs.",
    "Dual-axis digital laser alignment with 0mm deviation on structural walls.",
    "Dedicated site supervisor and Furqan Butt walking stick quality audit protocols."
  ],

  exclusions: [
    "Plot purchase cost and society transfer/possession taxes.",
    "Municipal (CDA, RDA, DHA, Bahria) architectural map approval fees and scrutiny dues.",
    "Electricity, Sui Gas, and Water bulk demand notices and transformer installation fees.",
    "Deep rock blasting, pneumatic shoring, or hydraulic piling on unstable terrain.",
    "Subterranean basement excavation & tanking (calculated separately upon soil inspection).",
    "Loose decorative interior furniture, curtains, and movable appliances.",
    "Solar PV generation systems and backup diesel generators (available as add-ons)."
  ],

  plotPresets: [
    {
      id: "5-marla",
      label: "5 Marla",
      marlaEquivalent: 5,
      typicalDimensions: "25' x 50'",
      plotAreaSqFt: 1125,
      typicalCoveredAreaSqFt: 2150,
      description: "Double-story residential plan (Ground + First + Mumty)",
    },
    {
      id: "7-marla",
      label: "7 Marla",
      marlaEquivalent: 7,
      typicalDimensions: "30' x 60'",
      plotAreaSqFt: 1575,
      typicalCoveredAreaSqFt: 2850,
      description: "Double-story modern plan with dual portico",
    },
    {
      id: "10-marla",
      label: "10 Marla",
      marlaEquivalent: 10,
      typicalDimensions: "35' x 70'",
      plotAreaSqFt: 2250,
      typicalCoveredAreaSqFt: 3450,
      description: "Executive double-story villa with terrace lounge",
    },
    {
      id: "1-kanal",
      label: "1 Kanal",
      marlaEquivalent: 20,
      typicalDimensions: "50' x 90'",
      plotAreaSqFt: 4500,
      typicalCoveredAreaSqFt: 5900,
      description: "Luxury signature residence with double-height lobby",
    },
    {
      id: "2-kanal",
      label: "2 Kanal",
      marlaEquivalent: 40,
      typicalDimensions: "75' x 120'",
      plotAreaSqFt: 9000,
      typicalCoveredAreaSqFt: 11200,
      description: "Architectural estate with sprawling courtyards and porticos",
    },
    {
      id: "commercial-custom",
      label: "Commercial / Custom",
      marlaEquivalent: 0,
      typicalDimensions: "Custom Dimensions",
      plotAreaSqFt: 3000,
      typicalCoveredAreaSqFt: 4500,
      description: "Multi-story plaza, corporate floor, or bespoke dimensions",
    },
  ] as PlotPreset[],

  cityFactors: [
    { city: "Islamabad", factor: 1.0, note: "Baseline rate (DHA, Gulberg, E-11, B-17, etc.)" },
    { city: "Rawalpindi", factor: 0.99, note: "Baseline rate (Bahria Town 1-8, Cantt, Chaklala)" },
    { city: "Wah Cantt & Taxila", factor: 0.97, note: "Regional quarry logistics advantage" },
    { city: "Kohistan Enclave", factor: 0.98, note: "Direct priority hub" },
    { city: "Taj Residencia", factor: 1.0, note: "Standard Islamabad corridor" },
    { city: "Lahore", factor: 1.02, note: "Logistics and regional supply factor" },
    { city: "Other Region (Pakistan)", factor: 1.04, note: "Logistics mobilization allowance" },
  ] as CityFactor[],

  scopeRates: {
    "grey-structure": {
      id: "grey-structure",
      label: "A+ Grey Structure",
      description:
        "Excavation, Grade 60 steel frame, AWWAL brick masonry, 3000 PSI concrete, underground water tank, roof waterproofing, concealed electric conduits & plumbing piping.",
      tiers: {
        "executive-standard": {
          id: "executive-standard",
          name: "Executive Standard",
          tagline: "Solid, uncompromised structural foundation",
          ratePerSqFtMin: 2850,
          ratePerSqFtMax: 3200,
          highlights: [
            "100% Certified Grade 60 Rebar (Mughal / Amreli / Model)",
            "AWWAL kiln-fired red clay bricks",
            "Cherat / Bestway 53-grade OPC cement",
            "Lawrencepur washed coarse sand",
            "14-day mandatory slab ponding curing",
          ],
          recommendedFor: "Standard residential plots seeking verified structural safety",
        },
        "luxury-signature": {
          id: "luxury-signature",
          name: "Luxury Signature",
          tagline: "Heavy-gauge reinforced frame with laser precision",
          ratePerSqFtMin: 3400,
          ratePerSqFtMax: 3850,
          highlights: [
            "Oversized column sections with high steel density for seismic Zone 2B/3",
            "Double-layer bitumen membrane & polythene subterranean damp proofing",
            "Multi-axis digital laser alignment for zero-deviation masonry",
            "Concealed PPRC/uPVC pipes (Dadex / Master / IIL)",
            "Furqan Butt stick audit on every plaster panel",
          ],
          recommendedFor: "High-end villas with large cantilever spans and double-height lobbies",
        },
        "ultra-monolith": {
          id: "ultra-monolith",
          name: "Ultra Monolith",
          tagline: "Heavy engineering for architectural masterpieces",
          ratePerSqFtMin: 4050,
          ratePerSqFtMax: 4750,
          highlights: [
            "Engineered raft foundation with subterranean perimeter retaining walls",
            "Dual SBS torch-applied elastomeric waterproofing tanking",
            "Post-tensioned or oversized waffle slabs for column-free interior expanses",
            "Heavy-duty imported UPVC/HDPE drainage network",
            "Daily 4K WhatsApp drone & video audits directly with Furqan Butt",
          ],
          recommendedFor: "1 Kanal & 2 Kanal bespoke estates and commercial plazas",
        },
      },
    },

    "complete-finishing": {
      id: "complete-finishing",
      label: "Turnkey Finishing Only",
      description:
        "For clients with existing grey structure: porcelain tile/marble installation, false ceiling, solid wood joinery, luxury sanitary, electrical fixtures, interior/exterior paint.",
      tiers: {
        "executive-standard": {
          id: "executive-standard",
          name: "Executive Standard",
          tagline: "Durable, high-grade contemporary finishes",
          ratePerSqFtMin: 3300,
          ratePerSqFtMax: 3900,
          highlights: [
            "Local premium porcelain tiles (Master / Sonex / Stile)",
            "Semi-solid ash veneer doors with brass/chrome hardware",
            "Jotun / ICI Dulux weather-shield exterior & plastic emulsion interior",
            "Porta / Sonex luxury sanitary ware & chrome mixer fittings",
            "LED downlight false ceilings throughout",
          ],
          recommendedFor: "Practical elegance and high durability",
        },
        "luxury-signature": {
          id: "luxury-signature",
          name: "Luxury Signature",
          tagline: "Imported luxury surfaces and custom architectural carpentry",
          ratePerSqFtMin: 4300,
          ratePerSqFtMax: 5400,
          highlights: [
            "Imported Spanish/Italian large-format 60x120cm porcelain tiles",
            "Solid Canadian ash or Malaysian oak 8-foot doors",
            "Grohe / Kohler concealed flush tanks & rain-shower mixers",
            "Custom acrylic/lacquer UV kitchen cabinetry with quartz countertops",
            "Thermal-break double glazed aluminum/uPVC window sections",
          ],
          recommendedFor: "Overseas families and luxury homeowners demanding showroom finish",
        },
        "ultra-monolith": {
          id: "ultra-monolith",
          name: "Ultra Monolith",
          tagline: "Bespoke palatial finishes with full smart home integration",
          ratePerSqFtMin: 5900,
          ratePerSqFtMax: 7600,
          highlights: [
            "Bookmatched imported Italian statuario / bottochino marble floors",
            "Complete multi-zone IoT smart home automation (lighting, climate, security)",
            "Custom architectural metal & fluted wood wall paneling",
            "Villeroy & Boch / Axor Hansgrohe gold/matte black sanitary installations",
            "Imported German Schuco or Turkish thermal-break architectural glass facade",
          ],
          recommendedFor: "Elite executive residences and prime luxury estates",
        },
      },
    },

    "turnkey-luxury": {
      id: "turnkey-luxury",
      label: "Turnkey A-to-Z Construction",
      description:
        "Complete end-to-end delivery: soil excavation, A+ grey structure, laser masonry, and complete luxury turnkey finishes delivered ready to move in with zero owner headache.",
      tiers: {
        "executive-standard": {
          id: "executive-standard",
          name: "Executive Standard",
          tagline: "Complete turnkey house ready for immediate living",
          ratePerSqFtMin: 6150,
          ratePerSqFtMax: 7100,
          highlights: [
            "Full A+ Grey Structure + Executive interior/exterior finishing",
            "100% Grade 60 steel frame + 14-day water ponding curing",
            "Premium porcelain tiling, solid ash veneer doors, Jotun paints",
            "Complete turnkey electrical, plumbing, sanitary, and modular kitchen",
            "1-Year comprehensive maintenance & 10-year structural guarantee",
          ],
          recommendedFor: "Hassle-free complete construction delivered to key handover",
        },
        "luxury-signature": {
          id: "luxury-signature",
          name: "Luxury Signature",
          tagline: "Uncompromising luxury estate delivered turnkey",
          ratePerSqFtMin: 7700,
          ratePerSqFtMax: 9250,
          highlights: [
            "Seismic-reinforced structural skeleton with zero hollow plaster",
            "Imported large format tiles, solid wood 8ft doors, Grohe fixtures",
            "Double-glazed architectural windows & designer false ceilings",
            "Dedicated overseas portal with daily 4K unedited WhatsApp video walkthroughs",
            "Milestone escrow payments verified by Furqan Butt on site",
          ],
          recommendedFor: "Our most requested package for Overseas Pakistanis in UK, USA & Gulf",
        },
        "ultra-monolith": {
          id: "ultra-monolith",
          name: "Ultra Monolith",
          tagline: "Pakistani construction redefined — architectural immortality",
          ratePerSqFtMin: 9950,
          ratePerSqFtMax: 12350,
          highlights: [
            "Raft foundation + subterranean tanking + post-tensioned spans",
            "Imported Italian marble, full IoT automation, custom fluted carpentry",
            "Schuco/Turkish thermal break glass + architectural facade lighting",
            "Direct personal oversight and site sign-off by Furqan Butt",
            "100% Anti-Shapper certification with complete mill testing dossiers",
          ],
          recommendedFor: "Discerning clients building premier trophy homes in Islamabad/Rawalpindi",
        },
      },
    },
  } as Record<string, ScopeRates>,
};

/**
 * Helper calculation function
 */
export function calculateIndicativeEstimate({
  coveredAreaSqFt,
  scopeId,
  tierId,
  city = "Islamabad",
}: {
  coveredAreaSqFt: number;
  scopeId: "grey-structure" | "complete-finishing" | "turnkey-luxury";
  tierId: "executive-standard" | "luxury-signature" | "ultra-monolith";
  city?: string;
}): {
  isValid: boolean;
  minTotalPkr: number;
  maxTotalPkr: number;
  avgTotalPkr: number;
  minRatePerSqFt: number;
  maxRatePerSqFt: number;
  cityMultiplier: number;
  formattedMin: string;
  formattedMax: string;
  formattedAvg: string;
  scopeLabel: string;
  tierName: string;
} {
  const scopeData = ESTIMATOR_CONFIG.scopeRates[scopeId];
  if (!scopeData) {
    return {
      isValid: false,
      minTotalPkr: 0,
      maxTotalPkr: 0,
      avgTotalPkr: 0,
      minRatePerSqFt: 0,
      maxRatePerSqFt: 0,
      cityMultiplier: 1.0,
      formattedMin: "Rs. 0",
      formattedMax: "Rs. 0",
      formattedAvg: "Rs. 0",
      scopeLabel: "",
      tierName: "",
    };
  }

  const tierData = scopeData.tiers[tierId] || scopeData.tiers["luxury-signature"];
  const cityData = ESTIMATOR_CONFIG.cityFactors.find((c) => c.city === city) || { factor: 1.0 };
  const cityMultiplier = cityData.factor;

  const validArea = Math.max(500, Math.min(50000, coveredAreaSqFt || 2000));
  const minRate = Math.round(tierData.ratePerSqFtMin * cityMultiplier);
  const maxRate = Math.round(tierData.ratePerSqFtMax * cityMultiplier);

  const minTotal = minRate * validArea;
  const maxTotal = maxRate * validArea;
  const avgTotal = Math.round((minTotal + maxTotal) / 2);

  return {
    isValid: true,
    minTotalPkr: minTotal,
    maxTotalPkr: maxTotal,
    avgTotalPkr: avgTotal,
    minRatePerSqFt: minRate,
    maxRatePerSqFt: maxRate,
    cityMultiplier,
    formattedMin: formatPkrCurrency(minTotal),
    formattedMax: formatPkrCurrency(maxTotal),
    formattedAvg: formatPkrCurrency(avgTotal),
    scopeLabel: scopeData.label,
    tierName: tierData.name,
  };
}

/**
 * Format numbers in Lakhs and Crores (Standard Pakistani currency presentation)
 */
export function formatPkrCurrency(amount: number): string {
  if (amount >= 10000000) {
    const crores = amount / 10000000;
    return `PKR ${crores.toFixed(2)} Crore`;
  }
  if (amount >= 100000) {
    const lakhs = amount / 100000;
    return `PKR ${lakhs.toFixed(2)} Lakh`;
  }
  return `PKR ${amount.toLocaleString("en-PK")}`;
}
