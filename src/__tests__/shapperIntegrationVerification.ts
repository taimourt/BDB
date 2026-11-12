import fs from "fs";
import path from "path";

async function verifyShapperIntegration() {
  console.log("=================================================");
  console.log("BLACK DIAMOND BUILDERS - SHAPPER INTEGRATION VERIFICATION");
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
  console.log("--- TEST SUITE 1: SHAPPER IMAGE ASSETS ---");
  const shapperWebp = path.resolve("public/images/blue-shapper.webp");
  const shapperPng = path.resolve("public/images/blue-shapper-nobg.png");

  assert(fs.existsSync(shapperWebp), "Original blue shapper WebP exists in public/images/");
  assert(fs.existsSync(shapperPng), "Transparent blue shapper PNG cutout exists in public/images/");

  const webpStats = fs.statSync(shapperWebp);
  const pngStats = fs.statSync(shapperPng);
  assert(webpStats.size > 20000, `Original shapper has valid size (${Math.round(webpStats.size / 1024)} KB)`);
  assert(pngStats.size > 100000, `Cutout shapper PNG has valid size (${Math.round(pngStats.size / 1024)} KB)`);

  // --- SUITE 2: SHAPPER AUDITOR COMPONENT ---
  console.log("\n--- TEST SUITE 2: SHAPPER AUDITOR COMPONENT ARCHITECTURE ---");
  const auditorPath = path.resolve("src/components/interactive/ShapperAuditor.tsx");
  assert(fs.existsSync(auditorPath), "ShapperAuditor.tsx component exists");

  const auditorContent = fs.readFileSync(auditorPath, "utf-8");
  assert(auditorContent.includes("blue-shapper-nobg.png"), "ShapperAuditor references transparent cutout image");
  assert(auditorContent.includes("AudioContext"), "ShapperAuditor synthesizes Web Audio API effects");
  assert(auditorContent.includes("cane-strike"), "ShapperAuditor supports cane strike audit action");
  assert(auditorContent.includes("wind-gust"), "ShapperAuditor supports wind gust test action");
  assert(auditorContent.includes("steel-crush"), "ShapperAuditor supports Grade-60 steel compression test");
  assert(auditorContent.includes("blown-away"), "ShapperAuditor supports blow-away dismissal action");
  assert(auditorContent.includes("CONTRACTOR_EXCUSES"), "ShapperAuditor includes contractor excuse dialogs");

  // --- SUITE 3: SECTION & PAGE INTEGRATIONS ---
  console.log("\n--- TEST SUITE 3: SECTION & PAGE INTEGRATIONS ---");
  const sectionPath = path.resolve("src/components/sections/ShapperResponseSection.tsx");
  const sectionContent = fs.readFileSync(sectionPath, "utf-8");
  assert(sectionContent.includes("ShapperAuditor"), "ShapperResponseSection mounts ShapperAuditor");
  assert(sectionContent.includes("animate-shapper-drift-slow"), "ShapperResponseSection integrates ambient background drifting bags");

  const homePagePath = path.resolve("src/app/page.tsx");
  const homePageContent = fs.readFileSync(homePagePath, "utf-8");
  assert(homePageContent.includes("ShapperResponseSection"), "Homepage renders ShapperResponseSection");

  const cssPath = path.resolve("src/app/globals.css");
  const cssContent = fs.readFileSync(cssPath, "utf-8");
  assert(cssContent.includes("shapperFloat"), "globals.css contains @keyframes shapperFloat");
  assert(cssContent.includes("shapperFlutter"), "globals.css contains @keyframes shapperFlutter");
  assert(cssContent.includes("caneStrikeMotion"), "globals.css contains @keyframes caneStrikeMotion");
  assert(cssContent.includes("excuseFloatBubble"), "globals.css contains @keyframes excuseFloatBubble");

  // --- SUITE 4: LOCALHOST ASSET SERVING ---
  console.log("\n--- TEST SUITE 4: LOCALHOST ASSET SERVING ---");
  const webpRes = await fetch("http://localhost:3000/images/blue-shapper.webp");
  assert(webpRes.status === 200, "http://localhost:3000/images/blue-shapper.webp returned HTTP 200");

  const pngRes = await fetch("http://localhost:3000/images/blue-shapper-nobg.png");
  assert(pngRes.status === 200, "http://localhost:3000/images/blue-shapper-nobg.png returned HTTP 200");

  console.log("\n=================================================");
  console.log(`SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED SUCCESSFULLY`);
  console.log("=================================================");

  if (passedTests !== totalTests) {
    process.exit(1);
  }
}

verifyShapperIntegration().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
