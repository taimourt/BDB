"use client";

import React, { useState } from "react";
import { TikTokEmbed } from "./TikTokEmbed";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { BRAND_INFO } from "@/data/brandData";

interface TikTokFeedShowcaseProps {
  onVideoSelect?: (videoId: string, title: string) => void;
  className?: string;
}

export const TikTokFeedShowcase: React.FC<TikTokFeedShowcaseProps> = ({
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(BRAND_INFO.tiktokUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      id="tiktok-live-feed"
      className={`rounded-3xl bg-gradient-to-br from-brand-charcoal via-brand-dark to-brand-black border-2 border-brand-gold/40 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden ${className}`}
    >
      {/* Background Lighting & Motifs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-6 right-6 opacity-10 pointer-events-none">
        <MoustacheIcon size={140} />
      </div>

      {/* Header Profile Section */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-brand-border/60 mb-8">
        <div className="flex items-start sm:items-center gap-4 sm:gap-5">
          {/* Avatar Container with Golden Ring */}
          <div className="relative shrink-0">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-tr from-brand-gold via-brand-gold-light to-amber-200 shadow-xl">
              <div className="w-full h-full rounded-full bg-brand-black flex items-center justify-center overflow-hidden border border-brand-gold/50">
                <CaneIcon size={34} />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#fe2c55] text-white flex items-center justify-center text-xs shadow-md">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48c1.64-1.63 2.18-3.92 2.18-6.16V8.14a8.16 8.16 0 0 0 4.85 1.57v-3.4a4.85 4.85 0 0 1-1.26.38z" />
              </svg>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-brand-ivory">
                Black Diamond Builders 👷
              </h2>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-brand-gold/20 text-brand-gold border border-brand-gold/40">
                <span>✓</span>
                <span>Official Channel</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm font-mono text-brand-gold-light mb-2">
              {BRAND_INFO.tiktokHandle} <span className="text-brand-muted">• CEO BDB: M Furqan Butt</span>
            </p>

            <p className="text-xs text-brand-muted max-w-xl leading-relaxed">
              Real unedited site inspections, acoustic walking stick plaster tests, and Grade 60 steel density audits across Islamabad &amp; Rawalpindi.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 shrink-0">
          <a
            href={BRAND_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-black font-semibold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48c1.64-1.63 2.18-3.92 2.18-6.16V8.14a8.16 8.16 0 0 0 4.85 1.57v-3.4a4.85 4.85 0 0 1-1.26.38z" />
            </svg>
            <span>Follow On TikTok</span>
            <span className="text-brand-black font-bold">↗</span>
          </a>

          <button
            onClick={handleCopyLink}
            className="px-4 py-3 rounded-xl bg-brand-surface hover:bg-brand-surface/80 border border-brand-border text-brand-ivory text-xs font-medium transition-all flex items-center gap-1.5"
            aria-label="Copy TikTok link"
          >
            <span>{copied ? "✓ Copied" : "📋 Share"}</span>
          </button>
        </div>
      </div>

      {/* Verified Stats Bar */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-2xl bg-brand-black/60 border border-brand-border/60 text-center">
          <span className="block text-xl sm:text-2xl font-serif font-extrabold text-gold-gradient">
            171,000+
          </span>
          <span className="text-[11px] font-mono text-brand-muted uppercase tracking-wider">
            TikTok Followers
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-brand-black/60 border border-brand-border/60 text-center">
          <span className="block text-xl sm:text-2xl font-serif font-extrabold text-gold-gradient">
            6.1 Million+
          </span>
          <span className="text-[11px] font-mono text-brand-muted uppercase tracking-wider">
            Video Likes
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-brand-black/60 border border-brand-border/60 text-center">
          <span className="block text-xl sm:text-2xl font-serif font-extrabold text-brand-ivory">
            100%
          </span>
          <span className="text-[11px] font-mono text-brand-muted uppercase tracking-wider">
            Authentic Site Footage
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-brand-black/60 border border-brand-border/60 text-center">
          <span className="block text-xl sm:text-2xl font-serif font-extrabold text-brand-ivory">
            Grade 60
          </span>
          <span className="text-[11px] font-mono text-brand-muted uppercase tracking-wider">
            Steel &amp; Laser Standard
          </span>
        </div>
      </div>

      {/* Live TikTok Interactive Feed Container */}
      <div className="relative z-10 rounded-2xl bg-brand-black/80 border border-brand-border p-4 sm:p-8 flex flex-col items-center">
        <div className="w-full flex items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-border/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fe2c55] animate-ping" />
            <h3 className="text-sm sm:text-base font-serif font-bold text-brand-ivory">
              Live TikTok Channel Stream
            </h3>
          </div>

          <span className="text-[11px] font-mono text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded-md border border-brand-gold/20">
            Interactive TikTok Player
          </span>
        </div>

        {/* Live TikTok Profile / Creator Embed */}
        <TikTokEmbed
          type="creator"
          creatorHandle="blackdiamondbuilders"
          maxWidth={760}
          minHeight={580}
        />
      </div>
    </div>
  );
};
