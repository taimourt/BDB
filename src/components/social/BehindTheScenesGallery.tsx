"use client";

import React, { useState } from "react";
import { BEHIND_THE_SCENES_ITEMS } from "@/data/socialContentData";
import { BehindTheScenesItem } from "@/types/socialTypes";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { TikTokEmbed } from "./TikTokEmbed";

export const BehindTheScenesGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<BehindTheScenesItem>(
    BEHIND_THE_SCENES_ITEMS[0]
  );
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List of BTS Milestones */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {BEHIND_THE_SCENES_ITEMS.map((item) => {
            const isSelected = item.id === activeItem.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? "bg-brand-surface/90 border-brand-gold shadow-[0_4px_20px_rgba(200,169,81,0.15)]"
                    : "bg-brand-charcoal/60 border-brand-border/60 hover:border-brand-border hover:bg-brand-charcoal/90"
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="font-mono text-brand-gold font-medium">
                    {item.phase}
                  </span>
                  <span className="text-brand-muted">{item.date}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-serif font-bold text-brand-ivory line-clamp-1 mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between text-[11px] text-brand-muted">
                  <span className="truncate">📍 {item.location}</span>
                  <span className="text-[10px] text-brand-gold font-mono">🎵 TikTok</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Detailed Audit Showcase */}
        <div className="lg:col-span-7 rounded-2xl bg-brand-charcoal border border-brand-gold/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Watermark */}
          <div className="absolute top-4 right-4 opacity-15">
            <CaneIcon size={80} />
          </div>

          {/* Phase Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-brand-border/60 mb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                  Verified Site Audit
                </span>
                <span className="text-[10px] font-mono text-brand-muted bg-brand-surface px-2 py-0.5 rounded border border-brand-border">
                  Official Reel
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-ivory mt-2">
                {activeItem.title}
              </h3>
            </div>
            <span className="text-xs text-brand-muted font-mono">
              {activeItem.location}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-brand-ivory/90 leading-relaxed mb-6">
            {activeItem.description}
          </p>

          {/* Engineering Audit Standard Box */}
          <div className="mb-6 p-4 rounded-xl bg-brand-dark/90 border border-brand-border/80">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold mb-3">
              <span>🛡️</span>
              <span>Audit Standard: {activeItem.auditStandard}</span>
            </div>

            <ul className="space-y-2">
              {activeItem.specsChecked.map((spec, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-brand-muted"
                >
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-brand-border/60">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setShowVideoModal(true)}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md"
              >
                <span>▶ Watch Reel Preview</span>
              </button>

              <a
                href={activeItem.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-brand-surface hover:bg-brand-surface/80 border border-brand-border text-brand-ivory text-xs font-medium transition-all"
              >
                TikTok ↗
              </a>
            </div>

            <a
              href="/#enquiry"
              className="text-xs text-brand-gold-light hover:text-brand-gold underline font-medium"
            >
              Inquire for your plot →
            </a>
          </div>
        </div>
      </div>

      {/* Video Preview Modal */}
      {showVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn overflow-y-auto"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="relative w-full max-w-xl bg-brand-dark border-2 border-brand-gold/60 rounded-3xl p-6 sm:p-8 shadow-2xl text-left my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 text-brand-muted hover:text-brand-ivory text-xl p-1"
              aria-label="Close modal"
            >
              ✕
            </button>

            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30 mb-2">
              {activeItem.phase}
            </span>

            <h3 className="font-serif text-xl font-bold text-brand-ivory mb-1">
              {activeItem.title}
            </h3>
            <p className="text-xs text-brand-muted mb-4">
              📍 {activeItem.location} • {activeItem.date}
            </p>

            <div className="my-4">
              <TikTokEmbed
                type="video"
                videoUrl={activeItem.videoUrl}
                title={activeItem.title}
                caption={activeItem.description}
                maxWidth={500}
                minHeight={420}
              />
            </div>

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-brand-border">
              <button
                onClick={() => setShowVideoModal(false)}
                className="px-4 py-2 rounded-lg bg-brand-surface border border-brand-border text-brand-ivory text-xs"
              >
                Close
              </button>
              <a
                href={activeItem.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-brand-gold text-brand-black font-semibold text-xs uppercase tracking-wider flex items-center gap-1.5"
              >
                <span>Open on TikTok</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
