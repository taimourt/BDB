"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { CATCHPHRASE_WALL_ITEMS, BRAND_INFO } from "@/data/brandData";
import { CatchphraseCardItem } from "@/types";

export const CatchphraseWall: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeMediaClip, setActiveMediaClip] = useState<CatchphraseCardItem | null>(null);

  const categories = [
    "All",
    "The Challenge",
    "Structural Honor",
    "The Stick Discipline",
    "Anti-Shapper",
    "Overseas Assurance",
  ];

  const filteredQuotes =
    selectedCategory === "All"
      ? CATCHPHRASE_WALL_ITEMS
      : CATCHPHRASE_WALL_ITEMS.filter((item) => item.category === selectedCategory);

  const handleCopy = (item: CatchphraseCardItem) => {
    const textToCopy = `“${item.quote}” — Furqan Butt, Black Diamond Builders (${BRAND_INFO.tiktokUrl})`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  const getWhatsAppShareUrl = (item: CatchphraseCardItem) => {
    const text = encodeURIComponent(
      `“${item.quote}”\n— Furqan Butt (Black Diamond Builders)\nCheck out their structural standards: ${BRAND_INFO.tiktokUrl}`
    );
    return `https://wa.me/?text=${text}`;
  };

  return (
    <section
      id="catchphrases"
      className="w-full py-24 bg-brand-black border-t border-brand-border/60 relative overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="gold" size="sm" pulse icon={<MoustacheIcon size={16} />}>
                The Catchphrase Wall
              </Badge>
              <Badge variant="outline" size="sm">
                Authentic Client Verified Quotes
              </Badge>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ivory leading-tight">
              Words That Built A Movement
            </h2>

            <p className="text-sm sm:text-base text-brand-muted max-w-2xl leading-relaxed">
              Every catchphrase spoken by Furqan Butt originates from an actual site milestone, an unbending engineering principle, or an open challenge to construction fraud.
            </p>
          </div>

          <a
            href={BRAND_INFO.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory font-semibold text-xs uppercase tracking-wider hover:border-brand-gold hover:text-brand-gold transition-colors flex items-center gap-2"
          >
            <span>Hear Him On TikTok</span>
            <span className="text-brand-gold">↗</span>
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar select-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-serif font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-gold-gradient text-brand-black shadow-md"
                  : "bg-brand-surface/60 text-brand-muted hover:text-brand-ivory border border-brand-border/60 hover:border-brand-gold/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Catchphrase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((item) => (
            <Card
              key={item.id}
              variant="default"
              hasFacetedCorner
              padding="lg"
              className="flex flex-col justify-between group hover:border-brand-gold/70 transition-all duration-300 bg-brand-dark/95"
            >
              <div>
                {/* Card Top: Category and Icon */}
                <div className="flex items-center justify-between pb-3 border-b border-brand-border/60 mb-5">
                  <Badge variant="gold" size="sm">
                    {item.category}
                  </Badge>
                  {item.category === "The Stick Discipline" ? (
                    <CaneIcon size={20} />
                  ) : (
                    <MoustacheIcon size={20} />
                  )}
                </div>

                {/* Roman Urdu Big Motto */}
                <div className="text-[10px] uppercase font-mono tracking-[0.2em] text-brand-gold-light/70 mb-2 font-semibold">
                  {item.romanUrduQuote}
                </div>

                {/* Main Quote */}
                <div className="relative mb-5">
                  <span className="absolute -top-3 -left-2 text-3xl font-serif text-brand-gold/30 select-none">
                    “
                  </span>
                  <blockquote className="font-serif text-lg sm:text-xl font-bold text-brand-ivory group-hover:text-brand-gold-light transition-colors leading-snug pl-3">
                    “{item.quote}”
                  </blockquote>
                </div>

                {/* Context Description */}
                <p className="text-xs text-brand-muted leading-relaxed mb-6">
                  {item.context}
                </p>

                {/* Video / Poster Slot Indicator */}
                <div
                  onClick={() => setActiveMediaClip(item)}
                  className="p-3 rounded-lg bg-brand-surface/70 border border-brand-border/80 flex items-center justify-between gap-3 cursor-pointer hover:border-brand-gold/50 transition-colors mb-4"
                >
                  <div className="flex items-center gap-2 text-xs text-brand-ivory">
                    <span className="w-5 h-5 rounded-full bg-gold-gradient text-brand-black flex items-center justify-center text-[10px]">
                      ▶
                    </span>
                    <span className="text-[11px] font-mono text-brand-muted truncate max-w-[180px]">
                      {item.mediaPlaceholderNote || "Signature Clip"}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase text-brand-gold font-semibold">
                    Preview
                  </span>
                </div>
              </div>

              {/* Bottom Actions: Share & Copy */}
              <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between gap-2 text-xs">
                <span className="text-[10px] text-brand-muted font-mono truncate max-w-[140px]">
                  {item.verifiedSource}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Copy Quote Button */}
                  <button
                    onClick={() => handleCopy(item)}
                    className="p-2 rounded bg-brand-charcoal hover:bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold transition-colors text-xs flex items-center gap-1"
                    title="Copy Quote to Clipboard"
                    aria-label="Copy Quote"
                  >
                    {copiedId === item.id ? (
                      <span className="text-emerald-400 font-bold text-[11px]">Copied ✓</span>
                    ) : (
                      <span>📋 Copy</span>
                    )}
                  </button>

                  {/* Share on WhatsApp */}
                  <a
                    href={getWhatsAppShareUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 transition-colors text-xs flex items-center gap-1"
                    title="Share on WhatsApp"
                    aria-label="Share on WhatsApp"
                  >
                    <span>💬</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Preview Modal for Catchphrase Clips */}
        {activeMediaClip && (
          <div className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-xl bg-brand-dark border-2 border-brand-gold/60 rounded-2xl p-6 sm:p-7 shadow-2xl text-left">
              <button
                onClick={() => setActiveMediaClip(null)}
                className="absolute top-4 right-4 text-brand-muted hover:text-brand-ivory text-xl p-1"
                aria-label="Close quote clip"
              >
                ✕
              </button>

              <Badge variant="gold" size="sm" className="mb-2">
                {activeMediaClip.category}
              </Badge>

              <h3 className="font-serif text-xl font-bold text-brand-ivory mb-2">
                “{activeMediaClip.quote}”
              </h3>

              <div className="aspect-video w-full rounded-xl bg-brand-black border border-brand-border flex flex-col items-center justify-center p-6 text-center my-4">
                <CaneIcon size={42} />
                <span className="text-xs text-brand-gold font-mono mt-3">
                  {activeMediaClip.mediaPlaceholderNote}
                </span>
                <p className="text-xs text-brand-muted mt-2 max-w-sm">
                  Authentic site clip container: Furqan Butt speaking on structural integrity and contractor discipline.
                </p>
              </div>

              <p className="text-xs text-brand-muted leading-relaxed mb-6">
                {activeMediaClip.context}
              </p>

              <div className="flex items-center justify-between gap-4 pt-4 border-t border-brand-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveMediaClip(null)}
                >
                  Close
                </Button>
                <a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
                >
                  <span>Watch On TikTok</span>
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
