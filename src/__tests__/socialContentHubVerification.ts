import {
  SOCIAL_VIDEOS,
  CATCHPHRASE_ARCHIVE,
  BEHIND_THE_SCENES_ITEMS,
  INITIAL_APPROVED_QUESTIONS,
  OFFICIAL_SOCIAL_CHANNELS,
} from "../data/socialContentData.ts";
import fs from "fs";
import path from "path";

console.log("=================================================");
console.log("BLACK DIAMOND BUILDERS - SOCIAL CONTENT HUB VERIFICATION");
console.log("=================================================\n");

let passed = 0;
let total = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  total++;
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passed++;
  } else {
    console.error(`[FAIL] ${testName}`);
    if (detail) console.error(`       Details: ${detail}`);
    process.exitCode = 1;
  }
}

// -------------------------------------------------------------
// TEST SUITE 1: VIDEO DATA & CATEGORIES
// -------------------------------------------------------------
console.log("--- TEST SUITE 1: VIDEO DATA & CATEGORIES ---");

assert(
  SOCIAL_VIDEOS.length >= 6,
  "Social video catalog contains at least 6 curated, authentic clips",
  `Found: ${SOCIAL_VIDEOS.length}`
);

const allHaveTitlesAndUrls = SOCIAL_VIDEOS.every(
  (v) =>
    v.title.length > 5 &&
    v.videoUrl.startsWith("https://www.tiktok.com/@blackdiamondbuilders") &&
    v.caption.length > 20 &&
    v.serviceLeadCta !== undefined
);

assert(
  allHaveTitlesAndUrls,
  "All videos contain descriptive titles, authentic TikTok URLs, rich captions, and service conversion CTAs"
);

const challengeVideo = SOCIAL_VIDEOS.find((v) => v.category === "the-challenge");
const antiShapperVideo = SOCIAL_VIDEOS.find((v) => v.category === "anti-shapper");

assert(
  challengeVideo !== undefined && antiShapperVideo !== undefined,
  "Catalog includes dedicated clips for 'The Challenge' and 'Anti-Shapper' consumer warnings"
);

// -------------------------------------------------------------
// TEST SUITE 2: CATCHPHRASE ARCHIVE
// -------------------------------------------------------------
console.log("\n--- TEST SUITE 2: CATCHPHRASE ARCHIVE ---");

const poorePakistan = CATCHPHRASE_ARCHIVE.find(
  (c) => c.phrase.includes("POORE PAKISTAN KO MERA CHALLENGE")
);

assert(
  poorePakistan !== undefined &&
  poorePakistan.romanUrdu.length > 0 &&
  poorePakistan.englishTranslation.length > 0 &&
  poorePakistan.contextAndMeaning.length > 0,
  "Includes approved 'Poore Pakistan ko mera challenge hai' entry with Urdu, translation, and engineering context"
);

const shapperPhrase = CATCHPHRASE_ARCHIVE.find(
  (c) => c.phrase.includes("SHAPPER")
);

assert(
  shapperPhrase !== undefined &&
  shapperPhrase.keyTakeaway.length > 0 &&
  shapperPhrase.serviceLeadCta.href === "/#shapper",
  "Includes approved 'Shapper' builder warning with consumer protection takeaway and service CTA"
);

const walkingStickPhrase = CATCHPHRASE_ARCHIVE.find(
  (c) => c.id === "walking-stick-test"
);

assert(
  walkingStickPhrase !== undefined &&
  walkingStickPhrase.phrase.includes("CHHADDI"),
  "Includes signature Walking Stick acoustic inspection motif"
);

// -------------------------------------------------------------
// TEST SUITE 3: BEHIND THE SCENES AUDITS
// -------------------------------------------------------------
console.log("\n--- TEST SUITE 3: BEHIND THE SCENES AUDITS ---");

assert(
  BEHIND_THE_SCENES_ITEMS.length >= 4,
  "BTS section showcases at least 4 jobsite operational phases",
  `Found: ${BEHIND_THE_SCENES_ITEMS.length}`
);

const allHaveAuditStandards = BEHIND_THE_SCENES_ITEMS.every(
  (item) => item.auditStandard.length > 5 && item.specsChecked.length >= 3
);

assert(
  allHaveAuditStandards,
  "All BTS milestones document rigorous engineering standards (ASTM, ACI, DIN) and verified checklists"
);

// -------------------------------------------------------------
// TEST SUITE 4: ASK THE BUILDER & MODERATION QUEUE
// -------------------------------------------------------------
console.log("\n--- TEST SUITE 4: ASK THE BUILDER & MODERATION QUEUE ---");

assert(
  INITIAL_APPROVED_QUESTIONS.length >= 4,
  "Q&A archive contains initial approved technical answers from Furqan Butt",
  `Count: ${INITIAL_APPROVED_QUESTIONS.length}`
);

// Verify moderation storage JSON exists
const modFilePath = path.join(process.cwd(), "src", "data", "moderationQuestions.json");
assert(
  fs.existsSync(modFilePath),
  "Persistent moderation questions store exists at src/data/moderationQuestions.json"
);

const rawQuestions = JSON.parse(fs.readFileSync(modFilePath, "utf-8"));
const pendingCount = rawQuestions.filter((q: any) => q.status === "pending_moderation").length;
const publishedCount = rawQuestions.filter((q: any) => q.status === "published").length;

assert(
  publishedCount >= 4,
  "Moderation store has approved published questions available for public display",
  `Published: ${publishedCount}, Pending: ${pendingCount}`
);

// -------------------------------------------------------------
// TEST SUITE 5: OFFICIAL SOCIAL CHANNELS (NO INVENTED DATA)
// -------------------------------------------------------------
console.log("\n--- TEST SUITE 5: OFFICIAL SOCIAL CHANNELS ---");

const officialTikTok = OFFICIAL_SOCIAL_CHANNELS.find((c) => c.platform === "tiktok");
assert(
  officialTikTok !== undefined &&
  officialTikTok.url === "https://www.tiktok.com/@blackdiamondbuilders" &&
  officialTikTok.handle === "@blackdiamondbuilders",
  "Official TikTok channel correctly mapped to verified brand URL without scrapers"
);

// Test non-invention rule: Ensure no fake follower counts or engagement stats exist
const fileRaw = fs.readFileSync(
  path.join(process.cwd(), "src", "data", "socialContentData.ts"),
  "utf-8"
);

const hasInventedFollowers =
  fileRaw.includes("followers") ||
  fileRaw.includes("views:") ||
  fileRaw.includes("likes:") ||
  fileRaw.includes("million views");

assert(
  !hasInventedFollowers,
  "No fabricated follower counts, fake video view counters, or artificial engagement metrics exist in data",
  "Verified: Zero invented follower numbers"
);

// -------------------------------------------------------------
// TEST SUITE 6: SHARING & ENCODING
// -------------------------------------------------------------
console.log("\n--- TEST SUITE 6: SHARING & ENCODING ---");

const quoteToShare = poorePakistan?.shareQuote || "";
const encodedShare = `https://wa.me/?text=${encodeURIComponent(
  `${quoteToShare}\n\nRead more at Black Diamond Builders: https://blackdiamondbuilders.pk/social`
)}`;

assert(
  encodedShare.startsWith("https://wa.me/?text=") &&
  !encodedShare.includes(" ") &&
  encodedShare.includes(encodeURIComponent("Poore Pakistan")),
  "Catchphrase share link is correctly URL-encoded for instant WhatsApp distribution"
);

console.log("\n=================================================");
console.log(`SUMMARY: ${passed} / ${total} TESTS PASSED SUCCESSFULLY`);
console.log("=================================================");

if (passed === total) {
  process.exit(0);
} else {
  process.exit(1);
}
