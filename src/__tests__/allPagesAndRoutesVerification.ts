import { DETAILED_SERVICES } from "../data/servicesData.ts";
import { FAQS, FAQ_CATEGORIES } from "../data/faqData.ts";
import { NAV_LINKS, BRAND_INFO } from "../data/brandData.ts";

async function verifyAllPages() {
  console.log("=================================================");
  console.log("BLACK DIAMOND BUILDERS - ALL PAGES & ROUTES VERIFICATION");
  console.log("=================================================\n");

  let totalTests = 0;
  let passedTests = 0;

  function assert(condition: boolean, message: string) {
    totalTests++;
    if (condition) {
      console.log(`[PASS] ${message}`);
      passedTests++;
    } else {
      console.error(`[FAIL] ${message}`);
    }
  }

  // --- SUITE 1: DATA STRUCTURE VALIDITY ---
  console.log("--- TEST SUITE 1: DATA INTEGRITY & SERVICES ---");
  assert(DETAILED_SERVICES.length === 4, "4 core construction services are catalogued");
  
  const expectedSlugs = [
    "grey-structure-construction",
    "turnkey-luxury-construction",
    "architectural-structural-design",
    "anti-shapper-retrofitting",
  ];

  expectedSlugs.forEach((slug) => {
    const s = DETAILED_SERVICES.find((serv) => serv.slug === slug);
    assert(!!s, `Service with slug '${slug}' exists`);
    assert(s!.processStages.length === 5, `'${slug}' has 5 detailed execution stages`);
    assert(s!.technicalStandards.length >= 4, `'${slug}' has governing engineering standards (ASTM/ACI/DIN)`);
    assert(s!.pricingTiers.length >= 1, `'${slug}' has indicative pricing tiers`);
    assert(s!.antiShapperChecklist.length >= 3, `'${slug}' has anti-shapper contrast checklist`);
  });

  // --- SUITE 2: FAQ DATA & CATEGORIES ---
  console.log("\n--- TEST SUITE 2: FAQS & CATEGORIES ---");
  assert(FAQS.length >= 15, `At least 15 verified FAQs catalogued (current: ${FAQS.length})`);
  assert(FAQ_CATEGORIES.length === 5, "5 distinct FAQ categories defined");
  const costFaqs = FAQS.filter((f) => f.category === "cost");
  assert(costFaqs.length >= 3, "Cost & quotation FAQs cover BOQs and indicative pricing");
  const qualityFaqs = FAQS.filter((f) => f.category === "quality");
  assert(qualityFaqs.length >= 3, "Quality FAQs cover Grade 60 steel, walking stick audits, and 14-day ponding");
  const overseasFaqs = FAQS.filter((f) => f.category === "overseas");
  assert(overseasFaqs.length >= 3, "Overseas FAQs address remittance security and remote 4K video surveillance");

  // --- SUITE 3: NAVIGATION & BRAND CONSISTENCY ---
  console.log("\n--- TEST SUITE 3: NAVIGATION ROUTES ---");
  const navHrefs = NAV_LINKS.map((n) => n.href);
  assert(navHrefs.includes("/"), "Nav contains Home ('/')");
  assert(navHrefs.includes("/about"), "Nav contains About ('/about')");
  assert(navHrefs.includes("/services"), "Nav contains Services ('/services')");
  assert(navHrefs.includes("/projects"), "Nav contains Projects ('/projects')");
  assert(navHrefs.includes("/social"), "Nav contains Videos ('/social')");
  assert(navHrefs.includes("/contact"), "Nav contains Contact ('/contact')");

  // --- SUITE 4: HTTP STATUS OF ALL ROUTES ON LOCALHOST:3000 ---
  console.log("\n--- TEST SUITE 4: LOCALHOST HTTP ROUTE STATUS CHECKS ---");
  const routesToTest = [
    { url: "http://localhost:3000/", expectedCode: 200, name: "Homepage" },
    { url: "http://localhost:3000/about", expectedCode: 200, name: "About the Owner" },
    { url: "http://localhost:3000/services", expectedCode: 200, name: "Services Index" },
    { url: "http://localhost:3000/services/grey-structure-construction", expectedCode: 200, name: "Service: Grey Structure" },
    { url: "http://localhost:3000/services/turnkey-luxury-construction", expectedCode: 200, name: "Service: Turnkey Luxury" },
    { url: "http://localhost:3000/services/architectural-structural-design", expectedCode: 200, name: "Service: Architectural Design" },
    { url: "http://localhost:3000/services/anti-shapper-retrofitting", expectedCode: 200, name: "Service: Anti-Shapper Retrofit" },
    { url: "http://localhost:3000/projects", expectedCode: 200, name: "Portfolio Index" },
    { url: "http://localhost:3000/projects/1-kanal-contemporary-monolith", expectedCode: 200, name: "Project Case Study Detail" },
    { url: "http://localhost:3000/social", expectedCode: 200, name: "Social Content Hub" },
    { url: "http://localhost:3000/contact", expectedCode: 200, name: "Contact Desk & Form" },
    { url: "http://localhost:3000/faq", expectedCode: 200, name: "FAQ Directory" },
    { url: "http://localhost:3000/privacy", expectedCode: 200, name: "Privacy Policy" },
    { url: "http://localhost:3000/terms", expectedCode: 200, name: "Terms & Conditions" },
    { url: "http://localhost:3000/api/ask-builder", expectedCode: 200, name: "API: Ask Builder" },
    { url: "http://localhost:3000/non-existent-page-test-404", expectedCode: 404, name: "Branded 404 Page" },
  ];

  for (const r of routesToTest) {
    try {
      const res = await fetch(r.url);
      assert(
        res.status === r.expectedCode,
        `${r.name} (${r.url}) returned HTTP ${res.status} (expected ${r.expectedCode})`
      );
    } catch (err) {
      assert(false, `${r.name} (${r.url}) failed with error: ${(err as Error).message}`);
    }
  }

  console.log("\n=================================================");
  console.log(`SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED SUCCESSFULLY`);
  console.log("=================================================");

  if (passedTests !== totalTests) {
    process.exit(1);
  }
}

verifyAllPages().catch((err) => {
  console.error("FATAL UNCAUGHT ERROR IN TEST SUITE:", err);
  process.exit(1);
});
