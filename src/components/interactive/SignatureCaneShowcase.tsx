"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { ChallengeSeal } from "@/components/branding/ChallengeSeal";

export const SignatureCaneShowcase: React.FC<{
  className?: string;
  showAuditCta?: boolean;
}> = ({ className = "", showAuditCta = true }) => {
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playSolidThud = () => {
    if (isPlayingSound) return;
    setIsPlayingSound(true);

    try {
      if (!audioCtxRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx) {
        if (ctx.state === "suspended") ctx.resume();
        const now = ctx.currentTime;

        // Brass impact click
        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        clickOsc.type = "triangle";
        clickOsc.frequency.setValueAtTime(1400, now);
        clickOsc.frequency.exponentialRampToValueAtTime(120, now + 0.04);
        clickGain.gain.setValueAtTime(0.6, now);
        clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        clickOsc.connect(clickGain);
        clickGain.connect(ctx.destination);
        clickOsc.start(now);
        clickOsc.stop(now + 0.05);

        // Low dense body thud
        const bodyOsc = ctx.createOscillator();
        const bodyGain = ctx.createGain();
        bodyOsc.type = "sine";
        bodyOsc.frequency.setValueAtTime(110, now);
        bodyOsc.frequency.exponentialRampToValueAtTime(55, now + 0.12);
        bodyGain.gain.setValueAtTime(0.8, now);
        bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);
        bodyOsc.connect(bodyGain);
        bodyGain.connect(ctx.destination);
        bodyOsc.start(now);
        bodyOsc.stop(now + 0.15);
      }
    } catch {
      // Audio fallback
    }

    setTimeout(() => {
      setIsPlayingSound(false);
    }, 400);
  };

  return (
    <div
      className={`rounded-3xl bg-gradient-to-r from-brand-charcoal via-brand-dark to-brand-charcoal border-2 border-brand-gold/60 p-8 sm:p-12 shadow-2xl relative overflow-hidden ${className}`}
    >
      {/* Decorative Gold Radial Aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-brand-gold/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Authentic Photo Showcase with Frame */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl bg-brand-surface border-2 border-brand-gold/80 p-4 shadow-2xl overflow-hidden group">
            {/* Ambient Corner Accents */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/20 rounded-bl-full pointer-events-none" />

            <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center bg-brand-black">
              <Image
                src="/images/furqan-butt-cane.jpg"
                alt="Furqan Butt's Authentic Ornate Brass Walking Stick"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute bottom-6 inset-x-6 p-3 rounded-xl bg-brand-black/90 backdrop-blur-md border border-brand-gold/60 flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-2">
                <CaneIcon size={24} />
                <div className="text-left">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-gold">
                    Authentic Artifact
                  </div>
                  <div className="text-xs font-serif font-bold text-brand-ivory">
                    Furqan Butt&apos;s Cane
                  </div>
                </div>
              </div>
              <ChallengeSeal size="sm" />
            </div>
          </div>

          {/* Quick Sound Test Trigger */}
          <button
            onClick={playSolidThud}
            className={`mt-4 px-4 py-2 rounded-xl border text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              isPlayingSound
                ? "bg-brand-gold text-brand-black border-brand-gold scale-95 shadow-[0_0_20px_rgba(200,169,81,0.5)]"
                : "bg-brand-surface border-brand-border text-brand-ivory hover:border-brand-gold hover:text-brand-gold"
            }`}
          >
            <span>{isPlayingSound ? "⚡ Rapped On Wall!" : "🔊 Tap To Hear Solid Strike"}</span>
          </button>
        </div>

        {/* Narrative & Craftsmanship Breakdown */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="gold" size="md" pulse icon={<CaneIcon size={16} />}>
              The Instrument of Accountability
            </Badge>
            <Badge variant="outline" size="md">
              Twin Cities On-Site
            </Badge>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl font-extrabold text-brand-ivory tracking-tight">
            THE WALKING STICK:{" "}
            <span className="text-gold-gradient block sm:inline">
              ACOUSTIC AUDIT OVER PROMISES
            </span>
          </h3>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            In viral social videos across Pakistan, you see Furqan Butt walking job sites with this exact ornate brass-knob cane. It is not an ornamental prop—it is a calibrated acoustic diagnostic tool.
          </p>

          {/* 3 Physical Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-brand-dark/90 border border-brand-border/80">
              <span className="text-brand-gold font-mono font-bold text-xs block mb-1">
                01. Brass Bulb Knob
              </span>
              <p className="text-xs text-brand-muted leading-snug">
                Solid brass acoustic striking hammer detecting hollow voids beneath wet plaster.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-dark/90 border border-brand-border/80">
              <span className="text-brand-gold font-mono font-bold text-xs block mb-1">
                02. Concave Ferrule
              </span>
              <p className="text-xs text-brand-muted leading-snug">
                Precision collar used as a fast manual check for column tie ring spacing.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-brand-dark/90 border border-brand-border/80">
              <span className="text-brand-gold font-mono font-bold text-xs block mb-1">
                03. Sheesham Shaft
              </span>
              <p className="text-xs text-brand-muted leading-snug">
                Straight-turned dense hardwood straightedge verifying 0mm wall deviations.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          {showAuditCta && (
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-xl"
              >
                <span>Book Site Audit With Furqan Butt</span>
                <MoustacheIcon size={18} />
              </Link>
              <Link
                href="/social#catchphrases"
                className="px-5 py-3.5 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Read Stick Catchphrases ↗</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
