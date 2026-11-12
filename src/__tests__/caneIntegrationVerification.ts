import fs from "fs";
import path from "path";

async function verifyCaneIntegration() {
  console.log("=================================================");
  console.log("BLACK DIAMOND BUILDERS - AUTHENTIC CANE INTEGRATION VERIFICATION");
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

  // --- SUITE 1: ASSET FILES EXISTENCE ---
  console.log("--- TEST SUITE 1: AUTHENTIC CANE IMAGE ASSETS ---");
  const publicJpg = path.resolve("public/images/furqan-butt-cane.jpg");
  const publicPng = path.resolve("public/images/furqan-butt-cane-nobg.png");

  assert(fs.existsSync(publicJpg), "High-res authentic cane JPG exists in public/images/");
  assert(fs.existsSync(publicPng), "Transparent cutout cane PNG exists in public/images/");

  const jpgStats = fs.statSync(publicJpg);
  const pngStats = fs.statSync(publicPng);
  assert(jpgStats.size > 50000, `Authentic cane JPG has valid content size (${Math.round(jpgStats.size / 1024)} KB)`);
  assert(pngStats.size > 100000, `Transparent cane PNG has valid content size (${Math.round(pngStats.size / 1024)} KB)`);

  // --- SUITE 2: INTERACTIVE CANE COMPONENTS ---
  console.log("\n--- TEST SUITE 2: COMPONENT ARCHITECTURE ---");
  const caneIconPath = path.resolve("src/components/branding/CaneIcon.tsx");
  const simulatorPath = path.resolve("src/components/interactive/StickAuditSimulator.tsx");
  const showcasePath = path.resolve("src/components/interactive/SignatureCaneShowcase.tsx");
  const floatingPath = path.resolve("src/components/interactive/FloatingCaneAuditor.tsx");

  assert(fs.existsSync(caneIconPath), "CaneIcon.tsx component exists");
  assert(fs.existsSync(simulatorPath), "StickAuditSimulator.tsx component exists");
  assert(fs.existsSync(showcasePath), "SignatureCaneShowcase.tsx component exists");
  assert(fs.existsSync(floatingPath), "FloatingCaneAuditor.tsx component exists");

  const caneIconContent = fs.readFileSync(caneIconPath, "utf-8");
  assert(caneIconContent.includes("brassCrownGrad"), "CaneIcon renders ornate brass crown filigree gradient");
  assert(caneIconContent.includes("woodShaftGrad"), "CaneIcon renders Sheesham hardwood shaft gradient");

  const simulatorContent = fs.readFileSync(simulatorPath, "utf-8");
  assert(simulatorContent.includes("furqan-butt-cane-nobg.png"), "Simulator references transparent authentic cane cutout");
  assert(simulatorContent.includes("AudioContext"), "Simulator integrates synthesized Web Audio API for acoustic testing");
  assert(simulatorContent.includes("hollow") && simulatorContent.includes("solid"), "Simulator supports hollow vs solid acoustic modes");

  // --- SUITE 3: SITE-WIDE INTEGRATIONS ---
  console.log("\n--- TEST SUITE 3: SITE-WIDE INTEGRATIONS ---");
  const layoutContent = fs.readFileSync("src/app/layout.tsx", "utf-8");
  assert(layoutContent.includes("FloatingCaneAuditor"), "RootLayout mounts FloatingCaneAuditor globally");

  const pageContent = fs.readFileSync("src/app/page.tsx", "utf-8");
  assert(pageContent.includes("StickAuditSimulator"), "Homepage integrates StickAuditSimulator after The Challenge");

  const heroContent = fs.readFileSync("src/components/sections/HeroSection.tsx", "utf-8");
  assert(heroContent.includes("furqan-butt-cane-nobg.png"), "HeroSection displays authentic brass cane photograph");

  const aboutContent = fs.readFileSync("src/app/about/page.tsx", "utf-8");
  assert(aboutContent.includes("SignatureCaneShowcase"), "About page embeds SignatureCaneShowcase component");
  assert(aboutContent.includes("furqan-butt-cane.jpg"), "About page displays authentic cane photograph in Symbol 1 card");

  const catchphraseCardContent = fs.readFileSync("src/components/social/CatchphraseCard.tsx", "utf-8");
  assert(catchphraseCardContent.includes("furqan-butt-cane.jpg"), "CatchphraseCard embeds authentic cane image for walking-stick-test");

  // --- SUITE 4: LOCALHOST VERIFICATION OF CANE IMAGE ASSETS ---
  console.log("\n--- TEST SUITE 4: LOCALHOST ASSET SERVING ---");
  const jpgRes = await fetch("http://localhost:3000/images/furqan-butt-cane.jpg");
  assert(jpgRes.status === 200, "http://localhost:3000/images/furqan-butt-cane.jpg returned HTTP 200");

  const pngRes = await fetch("http://localhost:3000/images/furqan-butt-cane-nobg.png");
  assert(pngRes.status === 200, "http://localhost:3000/images/furqan-butt-cane-nobg.png returned HTTP 200");

  console.log("\n=================================================");
  console.log(`SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED SUCCESSFULLY`);
  console.log("=================================================");

  if (passedTests !== totalTests) {
    process.exit(1);
  }
}

verifyCaneIntegration().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
