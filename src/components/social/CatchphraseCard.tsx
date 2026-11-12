"use client";

import React, { useState } from "react";
import { CatchphraseArchiveEntry } from "@/types/socialTypes";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";

interface CatchphraseCardProps {
  entry: CatchphraseArchiveEntry;
  onCopySuccess: (text: string) => void;
}

export const CatchphraseCard: React.FC<CatchphraseCardProps> = ({
  entry,
  onCopySuccess,
}) => {
  const [copiedQuote, setCopiedQuote] = useState(false);
  const [showFullContext, setShowFullContext] = useState(false);

  const handleCopyQuote = async () => {
    try {
      await navigator.clipboard.writeText(entry.shareQuote);
      setCopiedQuote(true);
      onCopySuccess("Quote copied to clipboard!");
      setTimeout(() => setCopiedQuote(false), 2500);
    } catch {
      onCopySuccess("Could not copy automatically. Please copy manually.");
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: entry.phrase,
          text: entry.shareQuote,
          url: typeof window !== "undefined" ? window.location.href : "https://blackdiamondbuilders.pk",
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopyQuote();
    }
  };

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `${entry.shareQuote}\n\nRead more at Black Diamond Builders: https://blackdiamondbuilders.pk/social`
  )}`;

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-brand-charcoal/90 border border-brand-border/70 hover:border-brand-gold/60 transition-all p-6 shadow-xl relative overflow-hidden group">
      {/* Decorative Gold Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" />

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
            {entry.badge}
          </span>
          <div className="opacity-40 group-hover:opacity-80 transition-opacity">
            <MoustacheIcon size={24} />
          </div>
        </div>

        {/* The Bold Phrase */}
        <blockquote className="text-base sm:text-lg font-serif font-bold text-brand-ivory mb-2 leading-snug">
          “{entry.phrase}”
        </blockquote>

        {/* Authentic Cane Artifact Preview for Walking Stick Catchphrase */}
        {entry.id === "walking-stick-test" && (
          <div className="my-3 p-3 rounded-xl bg-brand-black/80 border border-brand-gold/40 flex items-center gap-3">
            <div className="relative w-12 h-16 rounded-lg overflow-hidden bg-brand-surface border border-brand-gold/50 shrink-0">
              <img
                src="/images/furqan-butt-cane.jpg"
                alt="Furqan Butt's Authentic Ornate Brass Cane"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono text-brand-gold uppercase tracking-wider block font-bold">
                Authentic Jobsite Artifact
              </span>
              <p className="text-[11px] text-brand-ivory leading-tight mt-0.5">
                Furqan Butt&apos;s handcrafted brass-knob walking stick used on every inspection.
              </p>
            </div>
          </div>
        )}

        {/* Roman Urdu & Translation */}
        <p className="text-xs font-mono text-brand-gold mb-3 italic">
          {entry.romanUrdu}
        </p>

        <p className="text-xs text-brand-muted leading-relaxed mb-4">
          {entry.englishTranslation}
        </p>

        {/* Expandable Engineering Context */}
        {showFullContext && (
          <div className="mt-3 p-3 rounded-xl bg-brand-surface/70 border border-brand-border/60 text-xs text-brand-ivory/90 leading-relaxed animate-fadeIn">
            <p className="mb-2">
              <strong className="text-brand-gold">Engineering Context:</strong> {entry.contextAndMeaning}
            </p>
            <p className="text-[11px] text-brand-gold-light italic">
              <strong>Key Takeaway:</strong> {entry.keyTakeaway}
            </p>
          </div>
        )}

        <button
          onClick={() => setShowFullContext(!showFullContext)}
          className="text-[11px] text-brand-gold hover:text-brand-gold-light underline focus:outline-none mb-4"
        >
          {showFullContext ? "Hide engineering context" : "Why Furqan Butt says this →"}
        </button>
      </div>

      {/* Card Footer Actions */}
      <div className="pt-4 border-t border-brand-border/50 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          {/* Copy Quote Button */}
          <button
            onClick={handleCopyQuote}
            className="px-3 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-surface/80 text-brand-ivory text-[11px] font-medium border border-brand-border transition-colors flex items-center gap-1"
            title="Copy Quote Card"
          >
            <span>{copiedQuote ? "✓ Copied" : "Copy Quote"}</span>
          </button>

          {/* WhatsApp Direct Share */}
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-400 text-[11px] font-medium border border-emerald-500/40 transition-colors flex items-center gap-1"
            title="Share on WhatsApp"
          >
            <span>💬 Share</span>
          </a>

          {/* Native Web Share */}
          <button
            onClick={handleNativeShare}
            className="px-2.5 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-surface/80 text-brand-muted hover:text-brand-ivory text-[11px] border border-brand-border transition-colors"
            title="Share Link"
          >
            <span>🔗</span>
          </button>
        </div>

        {/* Lead Generation CTA */}
        <a
          href={entry.serviceLeadCta.href}
          className="text-[11px] text-brand-gold-light hover:text-brand-gold font-semibold underline"
        >
          {entry.serviceLeadCta.label} →
        </a>
      </div>
    </div>
  );
};
