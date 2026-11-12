"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { SHAPPER_SECTION_DATA, BRAND_INFO } from "@/data/brandData";
import { ShapperAuditor } from "@/components/interactive/ShapperAuditor";

export const ShapperResponseSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<string>("faq-1");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
    <section
      id="shapper"
      className="w-full py-24 bg-brand-dark/80 border-t border-brand-border/60 relative overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-red-950/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Ambient Floating Shappers in the Wind (Creative Atmospheric Background) */}
      <div className="absolute top-16 left-0 w-36 h-36 opacity-20 pointer-events-none animate-shapper-drift-slow z-0">
        <Image
          src="/images/blue-shapper-nobg.png"
          alt="Atmospheric floating plastic bag"
          fill
          sizes="144px"
          className="object-contain"
        />
      </div>
      <div className="absolute top-2/3 -left-12 w-28 h-28 opacity-15 pointer-events-none animate-shapper-drift-fast z-0">
        <Image
          src="/images/blue-shapper-nobg.png"
          alt="Atmospheric floating plastic bag"
          fill
          sizes="112px"
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-20 right-8 w-32 h-32 opacity-20 pointer-events-none animate-shapper-float z-0">
        <Image
          src="/images/blue-shapper-nobg.png"
          alt="Atmospheric floating plastic bag"
          fill
          sizes="128px"
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge variant="shapper" size="md">
              Anti-Compromise Dialogue
            </Badge>
            <Badge variant="gold" size="md" icon={<MoustacheIcon size={16} />}>
              Confidence Over Excuses
            </Badge>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ivory tracking-tight mb-4 leading-tight">
            SHAPPERS WILL TALK.{" "}
            <span className="text-gold-gradient block sm:inline">
              OUR WORK WILL ANSWER.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            {SHAPPER_SECTION_DATA.subtitle}
          </p>
        </div>

        {/* Feature 1: The Interactive Shapper Contractor Stress-Test Laboratory */}
        <div className="mb-14">
          <ShapperAuditor />
        </div>

        {/* 2-Column Layout: Playful Mythbusters + Video Response Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Mythbusters Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="p-4 rounded-xl bg-brand-surface/60 border border-brand-border mb-2 text-left">
              <span className="text-xs font-serif font-bold uppercase tracking-wider text-brand-gold block mb-1">
                The Philosophy:
              </span>
              <p className="text-xs text-brand-muted leading-relaxed">
                {SHAPPER_SECTION_DATA.introText}
              </p>
            </div>

            {SHAPPER_SECTION_DATA.faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-brand-charcoal border-brand-gold/60 shadow-lg"
                      : "bg-brand-surface/40 border-brand-border/80 hover:border-brand-gold/30"
                  }`}
                >
                  {/* Header / Question Toggle */}
                  <button
                    onClick={() => setActiveFaq(isOpen ? "" : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 select-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-brand-black border border-brand-gold/40 flex items-center justify-center text-brand-gold text-xs font-mono font-bold shrink-0">
                        ?
                      </span>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-brand-ivory">
                        {faq.question}
                      </h4>
                    </div>

                    <span
                      className={`text-brand-gold text-sm font-bold transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Expanded Body */}
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-left border-t border-brand-border/60 animate-fadeIn flex flex-col gap-3">
                      {/* Critique Quote */}
                      <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/30 text-xs italic text-red-200">
                        Typical Contractor Remark: “{faq.critiqueQuote}”
                      </div>

                      {/* Furqan Butt's Witty Answer */}
                      <div className="p-3.5 rounded-lg bg-brand-black border border-brand-gold/40 flex flex-col gap-1.5">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold flex items-center gap-1.5">
                          <MoustacheIcon size={14} />
                          <span>Furqan Butt&apos;s Answer:</span>
                        </span>
                        <p className="text-xs sm:text-sm text-brand-ivory font-medium leading-relaxed">
                          {faq.ourAnswer}
                        </p>
                      </div>

                      {/* Engineering Proof */}
                      <div className="flex items-start gap-2 pt-1 text-xs text-brand-muted">
                        <span className="text-emerald-400 font-bold">✓ Proof:</span>
                        <span>{faq.engineeringProof}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Video Response Slot & Playful Anti-Shapper Checklist */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Video Response Container */}
            <Card variant="gold-rim" hasFacetedCorner padding="md" className="text-left bg-gradient-to-b from-brand-charcoal to-brand-black">
              <div className="flex items-center justify-between pb-3 border-b border-brand-border/60 mb-4">
                <span className="text-xs font-serif font-bold uppercase tracking-wider text-brand-gold">
                  Official Video Response
                </span>
                <Badge variant="shapper" size="sm">
                  Viral Series
                </Badge>
              </div>

              {/* Video Thumbnail Frame */}
              <div
                onClick={() => setIsPlayingVideo(true)}
                className="relative aspect-video w-full rounded-xl bg-brand-black border border-brand-border overflow-hidden flex flex-col items-center justify-center p-6 text-center cursor-pointer group shadow-inner"
              >
                <div className="absolute inset-0 bg-architectural-grid opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40 opacity-90" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gold-gradient text-brand-black flex items-center justify-center shadow-[0_0_25px_rgba(200,169,81,0.5)] group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="font-serif text-sm font-bold text-brand-ivory mt-3">
                    “Shapper Builders Se Bachein”
                  </span>
                  <span className="text-[10px] text-brand-muted font-mono mt-1 bg-brand-dark px-2.5 py-0.5 rounded border border-brand-border">
                    {SHAPPER_SECTION_DATA.videoPlaceholderNote}
                  </span>
                </div>
              </div>

              <p className="text-xs text-brand-muted mt-4 leading-relaxed">
                Watch Furqan Butt walk an active job site, demonstrating how hollow plaster occurs and how the stick catches corner-cutting contractors.
              </p>

              <div className="pt-3 mt-4 border-t border-brand-border/60 flex items-center justify-between text-xs">
                <span className="text-brand-muted">Watch full response clips:</span>
                <a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold font-semibold hover:underline flex items-center gap-1"
                >
                  <span>{BRAND_INFO.tiktokHandle}</span>
                  <span>↗</span>
                </a>
              </div>
            </Card>

            {/* Quick Playful Diagnostic Card */}
            <Card variant="glass" padding="md" className="text-left">
              <div className="flex items-center gap-2 pb-3 border-b border-brand-border/60 mb-3">
                <CaneIcon size={20} />
                <h5 className="font-serif text-sm font-bold text-brand-ivory">
                  3 Signs You Hired A &apos;Shapper&apos; Contractor
                </h5>
              </div>

              <ul className="flex flex-col gap-2.5 text-xs text-brand-muted">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold text-xs mt-0.5">✕</span>
                  <span>They eyeball wall plumb lines and mock you when you ask for digital lasers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold text-xs mt-0.5">✕</span>
                  <span>They remove roof slab shuttering after 3 days without water ponding.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold text-xs mt-0.5">✕</span>
                  <span>They refuse to supply steel mill batch test certificates.</span>
                </li>
              </ul>
            </Card>

          </div>

        </div>

      </div>

      {/* Video Modal Preview */}
      {isPlayingVideo && (
        <div className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-brand-dark border-2 border-brand-gold/60 rounded-2xl p-6 shadow-2xl text-left">
            <button
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-4 right-4 text-brand-muted hover:text-brand-ivory text-xl p-1"
              aria-label="Close video"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="shapper" size="sm">
                The Anti-Shapper Series
              </Badge>
            </div>
            <h3 className="font-serif text-xl font-bold text-brand-ivory mb-1">
              Shappers Will Talk. Our Work Will Answer.
            </h3>
            <p className="text-xs text-brand-gold font-mono mb-4">
              [Authentic Video Reel Container — Furqan Butt Site Address]
            </p>

            <div className="aspect-video w-full rounded-xl bg-brand-black border border-brand-border flex flex-col items-center justify-center p-6 text-center mb-6">
              <CaneIcon size={40} />
              <p className="font-serif text-base text-brand-ivory mt-4 font-bold">
                “Bunyaad mazboot ho to chat kabi nahi girti.”
              </p>
              <p className="text-xs text-brand-muted mt-2 max-w-sm">
                This frame is configured to stream Furqan Butt&apos;s direct TikTok or YouTube reel breaking down bad contractor practices.
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-brand-border">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPlayingVideo(false)}
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
    </section>
  );
};
