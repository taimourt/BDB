import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppContactButton } from "@/components/leads/WhatsAppContactButton";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { SocialHubClient } from "@/components/social/SocialHubClient";

export const metadata: Metadata = {
  title: "Social Content Hub & Catchphrase Archive | Black Diamond Builders",
  description:
    "Explore authentic jobsite video walkthroughs, Furqan Butt's viral catchphrases ('Poore Pakistan ko mera challenge hai', 'Anti-Shapper'), behind-the-scenes engineering audits, and submit your construction questions directly to the builder.",
  keywords: [
    "Black Diamond Builders TikTok",
    "Furqan Butt construction",
    "Poore Pakistan ko mera challenge hai",
    "Shapper builders Pakistan",
    "Islamabad house construction videos",
    "Grade 60 steel inspection",
    "Overseas Pakistani construction blog",
  ],
  openGraph: {
    title: "Social Content Hub | Black Diamond Builders & Furqan Butt",
    description:
      "Authentic site walkthroughs, structural steel audits, and viral construction commentary from Furqan Butt.",
    url: "https://blackdiamondbuilders.pk/social",
    siteName: "Black Diamond Builders",
    locale: "en_PK",
    type: "website",
  },
};

export default function SocialHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Black Diamond Builders Social Content Hub",
    "description": "Authentic TikTok video walkthroughs and construction commentary from Furqan Butt.",
    "url": "https://blackdiamondbuilders.pk/social",
    "publisher": {
      "@type": "Organization",
      "name": "Black Diamond Builders",
      "url": "https://blackdiamondbuilders.pk",
      "sameAs": ["https://www.tiktok.com/@blackdiamondbuilders"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-brand-black text-brand-ivory flex flex-col selection:bg-brand-gold selection:text-brand-black">
        <Header />

        <main className="flex-grow pt-24 sm:pt-28 pb-16">
          {/* Hero Banner */}
          <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto text-center overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-charcoal border border-brand-gold/30 text-brand-gold text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span>Official Media & Commentary Archive</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-ivory tracking-tight mb-4 max-w-4xl mx-auto leading-tight">
              THE BUILDER&apos;S <span className="text-brand-gold">SOCIAL HUB</span>
            </h1>

            <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed mb-8">
              Where viral authority meets unbending engineering truth. Watch daily unedited site inspections, browse approved catchphrase blueprints, and hold your contractor accountable.
            </p>

            {/* Quick Navigation Jump Anchors */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
              <a
                href="#tiktok-feed"
                className="px-4 py-2 rounded-xl bg-brand-surface/90 hover:bg-brand-gold hover:text-brand-black text-brand-gold border border-brand-gold/40 transition-all font-medium shadow-sm flex items-center gap-1.5"
              >
                <span>🎵 Live TikTok Feed</span>
              </a>
              <a
                href="#videos"
                className="px-4 py-2 rounded-xl bg-brand-surface/80 hover:bg-brand-surface text-brand-ivory border border-brand-border transition-colors font-medium"
              >
                📹 Latest Videos
              </a>
              <a
                href="#catchphrases"
                className="px-4 py-2 rounded-xl bg-brand-surface/80 hover:bg-brand-surface text-brand-ivory border border-brand-border transition-colors font-medium"
              >
                💬 Catchphrase Archive
              </a>
              <a
                href="#behind-the-scenes"
                className="px-4 py-2 rounded-xl bg-brand-surface/80 hover:bg-brand-surface text-brand-ivory border border-brand-border transition-colors font-medium"
              >
                🏗️ Behind The Scenes
              </a>
              <a
                href="#ask-builder"
                className="px-4 py-2 rounded-xl bg-brand-surface/80 hover:bg-brand-surface text-brand-ivory border border-brand-border transition-colors font-medium"
              >
                🎙️ Ask The Builder
              </a>
              <a
                href="#follow"
                className="px-4 py-2 rounded-xl bg-brand-surface/80 hover:bg-brand-surface text-brand-ivory border border-brand-border transition-colors font-medium"
              >
                🌐 Follow Channels
              </a>
            </div>

            {/* Subtle Divider Stick Motif */}
            <div className="mt-12 flex items-center justify-center gap-3 opacity-40">
              <span className="h-px w-20 bg-gradient-to-r from-transparent to-brand-gold" />
              <CaneIcon size={28} />
              <span className="h-px w-20 bg-gradient-to-l from-transparent to-brand-gold" />
            </div>
          </section>

          {/* Interactive Client Sections */}
          <SocialHubClient />

          {/* Conversion Footer CTA */}
          <section className="px-4 sm:px-6 lg:px-8 mt-16 max-w-5xl mx-auto text-center">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-charcoal via-brand-dark to-brand-black border border-brand-gold/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-2 right-4 opacity-10">
                <MoustacheIcon size={140} />
              </div>

              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-gold block mb-2 font-semibold">
                Direct Engineering Execution
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-ivory mb-4">
                Ready to Build Without Compromise?
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted max-w-xl mx-auto mb-8 leading-relaxed">
                Whether you are constructing in Islamabad, Rawalpindi, or managing your plot from the UK, USA, or Gulf — experience radical on-site transparency.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/#estimator"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-black font-semibold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
                >
                  Calculate Construction Cost
                </a>
                <a
                  href="/#enquiry"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-brand-surface hover:bg-brand-surface/80 text-brand-ivory border border-brand-border font-semibold text-xs uppercase tracking-wider transition-all"
                >
                  Submit Project Details
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppContactButton />
      </div>
    </>
  );
}
