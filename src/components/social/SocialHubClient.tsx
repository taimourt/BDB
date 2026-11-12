"use client";

import React, { useState } from "react";
import { SOCIAL_VIDEOS, CATCHPHRASE_ARCHIVE } from "@/data/socialContentData";
import { SocialVideo, VideoCategory } from "@/types/socialTypes";
import { VideoCard } from "@/components/social/VideoCard";
import { VideoModal } from "@/components/social/VideoModal";
import { CatchphraseCard } from "@/components/social/CatchphraseCard";
import { BehindTheScenesGallery } from "@/components/social/BehindTheScenesGallery";
import { AskTheBuilderSection } from "@/components/social/AskTheBuilderSection";
import { SocialFollowBanner } from "@/components/social/SocialFollowBanner";
import { TikTokFeedShowcase } from "@/components/social/TikTokFeedShowcase";

const CATEGORIES: { label: string; value: VideoCategory }[] = [
  { label: "All Videos", value: "all" },
  { label: "The Challenge", value: "the-challenge" },
  { label: "Anti-Shapper Audits", value: "anti-shapper" },
  { label: "Site Inspections", value: "site-inspection" },
  { label: "Behind The Scenes", value: "behind-the-scenes" },
  { label: "Overseas Walkthroughs", value: "overseas-walkthrough" },
];

export const SocialHubClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>("all");
  const [activeModalVideo, setActiveModalVideo] = useState<SocialVideo | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const filteredVideos = SOCIAL_VIDEOS.filter((video) => {
    if (!video.published) return false;
    if (selectedCategory === "all") return true;
    return video.category === selectedCategory;
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Toast Notification Container */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-xl bg-brand-gold text-brand-black font-semibold text-xs shadow-2xl flex items-center gap-2 animate-fadeIn"
        >
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* SECTION 0: OFFICIAL TIKTOK FEED SHOWCASE */}
      <section id="tiktok-feed" className="scroll-mt-28">
        <TikTokFeedShowcase />
      </section>

      {/* SECTION 1: LATEST VIDEOS */}
      <section id="videos" className="scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold block mb-1">
              Real Jobsite Evidence
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-ivory">
              Latest Video Reels & Site Inspections
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-brand-gold text-brand-black shadow"
                      : "bg-brand-surface/70 text-brand-muted hover:text-brand-ivory border border-brand-border/60 hover:border-brand-border"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={(v) => setActiveModalVideo(v)}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-brand-charcoal/40 border border-brand-border/60">
            <p className="text-sm text-brand-muted mb-4">
              No videos currently published in this category.
            </p>
            <a
              href="https://www.tiktok.com/@blackdiamondbuilders"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 rounded-xl bg-brand-gold text-brand-black text-xs font-semibold uppercase tracking-wider"
            >
              Watch On Official TikTok ↗
            </a>
          </div>
        )}
      </section>

      {/* SECTION 2: CATCHPHRASE ARCHIVE */}
      <section id="catchphrases" className="scroll-mt-28">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold block mb-1">
            Verbal Engineering Standards
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-ivory mb-3">
            Catchphrase Archive & Shareable Cards
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
            Furqan Butt&apos;s memorable catchphrases are not mere viral memes — they are consumer advocacy benchmarks exposing contractor shortcuts and celebrating structural honesty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATCHPHRASE_ARCHIVE.map((entry) => (
            <CatchphraseCard
              key={entry.id}
              entry={entry}
              onCopySuccess={showToast}
            />
          ))}
        </div>
      </section>

      {/* SECTION 3: BEHIND THE SCENES */}
      <section id="behind-the-scenes" className="scroll-mt-28">
        <div className="mb-8">
          <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold block mb-1">
            Raw Construction Protocols
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-ivory mb-2">
            Behind The Scenes: Daily Site Operations
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted max-w-2xl leading-relaxed">
            Step onto real Black Diamond jobsites across Islamabad and Rawalpindi. See how Grade 60 rebar grids are tied, laser alignment is verified, and subterranean basements are torched with dual SBS membranes.
          </p>
        </div>

        <BehindTheScenesGallery />
      </section>

      {/* SECTION 4: ASK THE BUILDER */}
      <section id="ask-builder" className="scroll-mt-28">
        <AskTheBuilderSection />
      </section>

      {/* SECTION 5: FOLLOW THE BRAND */}
      <section id="follow" className="scroll-mt-28">
        <SocialFollowBanner />
      </section>

      {/* Video Modal Player */}
      <VideoModal
        video={activeModalVideo}
        onClose={() => setActiveModalVideo(null)}
      />
    </div>
  );
};
