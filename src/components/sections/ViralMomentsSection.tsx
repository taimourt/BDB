"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { TikTokEmbed } from "@/components/social/TikTokEmbed";
import { VIRAL_MOMENTS, BRAND_INFO } from "@/data/brandData";
import { ViralMoment } from "@/types";

export const ViralMomentsSection: React.FC = () => {
  const [activeClip, setActiveClip] = useState<ViralMoment | null>(null);
  const [activeTab, setActiveTab] = useState<"curated" | "live-feed">("curated");

  return (
    <section
      id="viral-moments"
      className="w-full py-24 bg-brand-black border-t border-brand-border/60 relative overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-gold/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="gold" size="sm" pulse>
                Official TikTok Channel
              </Badge>
              <Badge variant="dark" size="sm">
                {BRAND_INFO.tiktokHandle}
              </Badge>
              <span className="text-[11px] font-mono text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-full border border-brand-gold/30">
                171K+ Followers • 6.1M+ Likes
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ivory leading-tight">
              YOU KNOW THE CATCHPHRASES.{" "}
              <span className="text-gold-gradient block sm:inline">
                NOW KNOW THE WORK.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-brand-muted max-w-2xl leading-relaxed">
              From impromptu site audits using the stick to calling out fraudulent contractor practices, explore the authentic moments that redefined construction transparency across Pakistan.
            </p>
          </div>

          {/* Right Action: Follow On TikTok */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={BRAND_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory font-semibold text-xs uppercase tracking-wider hover:border-brand-gold hover:text-brand-gold transition-all flex items-center justify-center gap-2.5 shadow-lg group"
            >
              <svg
                className="w-4 h-4 fill-current group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48c1.64-1.63 2.18-3.92 2.18-6.16V8.14a8.16 8.16 0 0 0 4.85 1.57v-3.4a4.85 4.85 0 0 1-1.26.38z" />
              </svg>
              <span>Follow On TikTok</span>
              <span className="text-brand-gold">↗</span>
            </a>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-3 mb-8 p-1.5 rounded-2xl bg-brand-charcoal/60 border border-brand-border/60 w-fit">
          <button
            onClick={() => setActiveTab("curated")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "curated"
                ? "bg-brand-gold text-brand-black shadow-md"
                : "text-brand-muted hover:text-brand-ivory"
            }`}
          >
            <span>📹 Curated Viral Moments</span>
          </button>
          <button
            onClick={() => setActiveTab("live-feed")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
              activeTab === "live-feed"
                ? "bg-brand-gold text-brand-black shadow-md"
                : "text-brand-muted hover:text-brand-ivory"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#fe2c55] animate-pulse" />
            <span>🎵 Live TikTok Stream</span>
          </button>
        </div>

        {/* TAB 1: 4-Item Viral Moments Grid */}
        {activeTab === "curated" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VIRAL_MOMENTS.map((clip) => (
              <Card
                key={clip.id}
                variant="default"
                hasFacetedCorner
                padding="none"
                className="flex flex-col justify-between group hover:border-brand-gold/70 transition-all duration-300 bg-brand-dark/95"
              >
                <div>
                  {/* Interactive TikTok Video Trigger Thumbnail */}
                  <div
                    onClick={() => setActiveClip(clip)}
                    className="relative w-full h-72 bg-gradient-to-b from-brand-charcoal via-brand-dark to-brand-black overflow-hidden border-b border-brand-border flex flex-col justify-between p-4 cursor-pointer select-none group/thumb"
                  >
                    {/* Subtle Grid overlay */}
                    <div className="absolute inset-0 bg-architectural-grid opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40 opacity-90" />

                    {/* Top Bar inside thumbnail */}
                    <div className="relative z-10 flex items-center justify-between">
                      <Badge variant="gold" size="sm">
                        {clip.badge}
                      </Badge>
                      <span className="text-[10px] uppercase font-mono text-white bg-[#fe2c55]/90 px-2 py-0.5 rounded shadow">
                        TikTok
                      </span>
                    </div>

                    {/* Central Play Indicator & Persona Motif */}
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                      <div className="w-14 h-14 rounded-full bg-gold-gradient text-brand-black flex items-center justify-center shadow-[0_0_25px_rgba(200,169,81,0.5)] group-hover/thumb:scale-110 transition-transform">
                        <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <span className="text-[10px] text-brand-ivory/90 font-mono mt-3 bg-brand-black/85 px-2.5 py-1 rounded border border-brand-gold/30 max-w-[210px] text-center truncate">
                        Watch Reel Preview
                      </span>
                    </div>

                    {/* Bottom Bar inside thumbnail */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] text-brand-muted">
                      <span className="flex items-center gap-1 text-brand-ivory">
                        <MoustacheIcon size={16} />
                        <span className="font-serif">Furqan Butt</span>
                      </span>
                      <span className="text-brand-gold text-xs font-semibold">Play Video ↗</span>
                    </div>
                  </div>

                  {/* Card Text Content */}
                  <div className="p-5 flex flex-col gap-3 text-left">
                    <h3 className="font-serif text-lg font-bold text-brand-ivory group-hover:text-brand-gold-light transition-colors leading-snug">
                      {clip.title}
                    </h3>

                    {/* Viral Catchphrase Quote */}
                    <p className="font-serif italic text-xs text-brand-gold leading-relaxed">
                      “{clip.catchphrase}”
                    </p>

                    <p className="text-xs text-brand-muted line-clamp-3 leading-relaxed">
                      {clip.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3.5 bg-brand-charcoal/40 border-t border-brand-border/60 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setActiveClip(clip)}
                    className="text-brand-muted hover:text-brand-gold text-[11px] font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    <span>▶ Play Reel</span>
                  </button>
                  <a
                    href={clip.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-gold font-semibold uppercase tracking-wider text-[11px] hover:underline flex items-center gap-1"
                  >
                    <span>Watch on TikTok</span>
                    <span>↗</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* TAB 2: Live TikTok Stream Embed */}
        {activeTab === "live-feed" && (
          <div className="p-6 sm:p-10 rounded-3xl bg-brand-charcoal/60 border border-brand-gold/30 shadow-2xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold block mb-1">
                Direct From @blackdiamondbuilders
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-ivory mb-2">
                Live TikTok Profile &amp; Video Walkthroughs
              </h3>
              <p className="text-xs text-brand-muted">
                Browse Furqan Butt&apos;s daily on-site inspections, concrete slab curing tests, and structural updates straight from TikTok.
              </p>
            </div>

            <TikTokEmbed
              type="creator"
              creatorHandle="blackdiamondbuilders"
              maxWidth={760}
              minHeight={580}
            />
          </div>
        )}

        {/* Video Clip Modal Preview with TikTok Embed */}
        {activeClip && (
          <div className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="relative w-full max-w-xl bg-brand-dark border-2 border-brand-gold/60 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8">
              <button
                onClick={() => setActiveClip(null)}
                className="absolute top-4 right-4 text-brand-muted hover:text-brand-ivory text-xl p-1"
                aria-label="Close clip preview"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 mb-2">
                <Badge variant="gold" size="sm">
                  {activeClip.badge}
                </Badge>
                <span className="text-[10px] font-mono text-brand-muted bg-brand-surface px-2 py-0.5 rounded">
                  🎵 TikTok Clip
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-brand-ivory mb-1">
                {activeClip.title}
              </h3>
              <p className="font-serif italic text-xs text-brand-gold mb-4">
                “{activeClip.catchphrase}”
              </p>

              {/* Live TikTok Player Embed in Modal */}
              <div className="my-4">
                <TikTokEmbed
                  type="video"
                  videoUrl={activeClip.tiktokUrl}
                  title={activeClip.title}
                  caption={activeClip.description}
                  maxWidth={520}
                  minHeight={420}
                />
              </div>

              <p className="text-xs text-brand-muted leading-relaxed mb-6">
                {activeClip.description}
              </p>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-brand-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveClip(null)}
                >
                  Close
                </Button>
                <a
                  href={activeClip.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
                >
                  <span>Open On TikTok</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
