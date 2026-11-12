"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";

export const FloatingCaneAuditor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);

  const playSound = (type: "solid" | "hollow") => {
    setIsPlaying(type);
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

        if (type === "solid") {
          // Solid thud
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
        } else {
          // Hollow reverberation
          const osc1 = ctx.createOscillator();
          const gain1 = ctx.createGain();
          osc1.type = "sine";
          osc1.frequency.setValueAtTime(260, now);
          osc1.frequency.exponentialRampToValueAtTime(160, now + 0.35);
          gain1.gain.setValueAtTime(0.7, now);
          gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

          const filter = ctx.createBiquadFilter();
          filter.type = "bandpass";
          filter.frequency.setValueAtTime(280, now);
          filter.Q.setValueAtTime(3.5, now);

          osc1.connect(gain1);
          gain1.connect(filter);
          filter.connect(ctx.destination);

          osc1.start(now);
          osc1.stop(now + 0.4);
        }
      }
    } catch {
      // Audio fallback
    }

    setTimeout(() => {
      setIsPlaying(null);
    }, 450);
  };

  return (
    <>
      {/* Floating Trigger Button: Docked bottom-left to avoid colliding with WhatsApp on the right */}
      <aside aria-label="Acoustic Stick Audit Quick Tool" className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-charcoal/95 backdrop-blur-md border-2 border-brand-gold/70 text-brand-ivory shadow-[0_4px_25px_rgba(0,0,0,0.8)] hover:border-brand-gold hover:shadow-[0_0_25px_rgba(200,169,81,0.5)] transition-all cursor-pointer"
          aria-label="Open Furqan Butt's Stick Inspector"
        >
          {/* Authentic Cane Icon Motif with Pulse */}
          <div className="relative w-7 h-7 flex items-center justify-center">
            <CaneIcon size={26} className="text-brand-gold group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-gold animate-ping" />
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-gold">
              The Stick Audit
            </span>
            <span className="text-[11px] font-serif text-brand-ivory">
              Test Acoustic Plaster
            </span>
          </div>

          <span className="text-xs text-brand-gold font-mono ml-1">
            {isOpen ? "✕" : "❖"}
          </span>
        </button>
      </aside>

      {/* Slide-Up Drawer / Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Furqan Butt's Acoustic Stick Audit"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-brand-charcoal border-2 border-brand-gold/80 p-6 sm:p-8 shadow-2xl text-left overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/15 blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-brand-border/60 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold">
                  <CaneIcon size={28} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-gold">
                    Authentic On-Site Instrument
                  </span>
                  <h3 className="font-serif text-lg font-bold text-brand-ivory">
                    Furqan Butt&apos;s Stick Audit
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-ivory flex items-center justify-center text-xs font-mono"
              >
                ✕
              </button>
            </div>

            {/* Authentic Cane Photography Thumbnail & Provenance */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-dark border border-brand-border/80 mb-5">
              <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-brand-black shrink-0 border border-brand-gold/50">
                <Image
                  src="/images/furqan-butt-cane.jpg"
                  alt="Furqan Butt's Walking Stick"
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <div className="text-xs text-brand-muted leading-relaxed">
                <strong className="text-brand-ivory font-serif block text-sm">
                  Handcrafted Ornate Brass Knob Cane
                </strong>
                Carried onto every foundation pour across Islamabad & Rawalpindi to audit mortar density, rebar spacing, and plumb lines.
              </div>
            </div>

            {/* Quick Interactive Acoustic Test */}
            <div className="mb-5">
              <span className="text-[11px] font-mono text-brand-gold uppercase tracking-wider block mb-2 font-bold">
                Acoustic Resonance Test (Click To Strike):
              </span>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => playSound("hollow")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isPlaying === "hollow"
                      ? "bg-rose-950/80 border-rose-500 scale-95"
                      : "bg-brand-surface/60 border-brand-border hover:border-rose-400"
                  }`}
                >
                  <span className="text-xs font-bold text-rose-400 block font-serif">
                    Tap “Shapper” Wall
                  </span>
                  <span className="text-[10px] text-brand-muted block mt-0.5">
                    Hollow drum sound (void)
                  </span>
                </button>

                <button
                  onClick={() => playSound("solid")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isPlaying === "solid"
                      ? "bg-brand-gold text-brand-black border-brand-gold scale-95"
                      : "bg-brand-surface/60 border-brand-border hover:border-brand-gold"
                  }`}
                >
                  <span className="text-xs font-bold text-brand-gold block font-serif">
                    Tap Solid Monolith
                  </span>
                  <span className="text-[10px] text-brand-muted block mt-0.5">
                    Rock solid dense thud
                  </span>
                </button>
              </div>
            </div>

            {/* The Rule of the Stick */}
            <div className="p-3.5 rounded-xl bg-brand-black/70 border border-brand-gold/30 text-xs text-brand-gold font-serif italic mb-6">
              “Agar aawaz khokhli hai to diwaar girao. Bunyaad mein sachai ho to mooch ko tao banta hai!”
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full sm:flex-1 py-3 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider text-center hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <span>Request Site Audit</span>
                <MoustacheIcon size={18} />
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold text-xs font-mono uppercase tracking-wider text-center"
              >
                Read Story
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
