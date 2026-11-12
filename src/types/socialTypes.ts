export type VideoCategory =
  | "all"
  | "site-inspection"
  | "the-challenge"
  | "anti-shapper"
  | "behind-the-scenes"
  | "overseas-walkthrough"
  | "q-and-a";

export interface SocialVideo {
  id: string;
  title: string;
  videoUrl: string;
  tiktokEmbedUrl?: string;
  thumbnail: string;
  caption: string;
  category: "site-inspection" | "the-challenge" | "anti-shapper" | "behind-the-scenes" | "overseas-walkthrough" | "q-and-a";
  catchphraseId?: string;
  featured: boolean;
  published: boolean;
  duration?: string;
  date: string;
  constructionTopic: string;
  serviceLeadCta: {
    label: string;
    href: string;
  };
}

export interface CatchphraseArchiveEntry {
  id: string;
  phrase: string;
  romanUrdu: string;
  englishTranslation: string;
  contextAndMeaning: string;
  associatedVideoId?: string;
  shareQuote: string;
  keyTakeaway: string;
  badge: string;
  serviceLeadCta: {
    label: string;
    href: string;
  };
}

export interface BehindTheScenesItem {
  id: string;
  title: string;
  phase: string;
  location: string;
  date: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  auditStandard: string;
  specsChecked: string[];
}

export interface AskBuilderQuestion {
  id: string;
  question: string;
  askerName: string;
  city: string;
  status: "published" | "pending_moderation" | "rejected";
  answer?: string;
  answeredBy?: string;
  submittedAt: string;
  answeredAt?: string;
  constructionTopic: string;
  helpfulNotes?: string;
}

export interface SocialAccountLink {
  platform: "tiktok" | "whatsapp" | "youtube" | "instagram" | "phone";
  name: string;
  handle: string;
  url: string;
  description: string;
  isPrimary: boolean;
  badge?: string;
}
