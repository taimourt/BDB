"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { ChallengeSeal } from "@/components/branding/ChallengeSeal";

type WallAuditType = "hollow" | "solid";

export const StickAuditSimulator: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const [selectedWall, setSelectedWall] = useState<WallAuditType>("solid");
  const [isStriking, setIsStriking] = useState(false);
  const [lastAuditResult, setLastAuditResult] = useState<WallAuditType | null>(null);
  const [auditCount, setAuditCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize or resume Web Audio context
  const getAudioContext = () => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Synthesize acoustic resonance based on wall density
  const playAcousticSound = (type: WallAuditType) => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      if (type === "solid") {
        // High-density solid concrete thud: tight, deep, instantaneous damping
        // Click transient (brass striking hard cement)
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

        // Low dense body thud (rock solid 85Hz)
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
        // Hollow void drum resonance: hollow cavity reverberation (190Hz & 320Hz oscillating with sustain)
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(260, now);
        osc1.frequency.exponentialRampToValueAtTime(160, now + 0.35);
        gain1.gain.setValueAtTime(0.7, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(380, now);
        osc2.frequency.exponentialRampToValueAtTime(210, now + 0.3);
        gain2.gain.setValueAtTime(0.4, now);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

        // Bandpass to emphasize "hollow room" cavity effect
        const filter = ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(280, now);
        filter.Q.setValueAtTime(3.5, now);

        osc1.connect(gain1);
        osc2.connect(gain2);
        gain1.connect(filter);
        gain2.connect(filter);
        filter.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.4);
        osc2.stop(now + 0.4);
      }
    } catch {
      // Audio playback fails gracefully if blocked by browser policy
    }
  };

  const handleStrike = () => {
    if (isStriking) return;
    setIsStriking(true);

    playAcousticSound(selectedWall);

    setTimeout(() => {
      setLastAuditResult(selectedWall);
      setAuditCount((prev) => prev + 1);
      setIsStriking(false);
    }, 380);
  };

  return (
    <div
      className={`rounded-3xl bg-gradient-to-b from-brand-charcoal via-brand-dark to-brand-black border-2 border-brand-gold/50 p-6 sm:p-10 shadow-2xl relative overflow-hidden ${className}`}
    >
      {/* Background ambient gold lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border/80 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="gold" size="sm" pulse icon={<CaneIcon size={16} />}>
              Acoustic Stick Simulator
            </Badge>
            <Badge variant="dark" size="sm">
              The Real Walking Stick
            </Badge>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory">
            TEST THE PLASTER WITH FURQAN BUTT&apos;S STICK
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted mt-1">
            Tap the wall with Furqan Butt&apos;s handcrafted brass inspection cane to hear the difference between a cheap contractor&apos;s hollow shortcut and our laser-aligned solid bond.
          </p>
        </div>

        {/* Audio Toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`shrink-0 px-3.5 py-2 rounded-xl border text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors ${
            soundEnabled
              ? "bg-brand-surface border-brand-gold/50 text-brand-gold"
              : "bg-brand-black border-brand-border text-brand-muted"
          }`}
          title="Toggle Acoustic Audio Feedback"
        >
          <span>{soundEnabled ? "🔊 Sound Enabled" : "🔇 Sound Muted"}</span>
        </button>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: The Authentic Cane Visual Presentation */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl bg-gradient-to-b from-brand-surface/90 to-brand-black/90 border border-brand-border flex items-center justify-center p-6 shadow-inner group overflow-hidden">
            {/* Visual Acoustic Ripple Shockwaves when striking */}
            {isStriking && (
              <div
                className={`absolute inset-0 pointer-events-none rounded-2xl border-4 animate-ping ${
                  selectedWall === "solid"
                    ? "border-brand-gold/60 bg-brand-gold/5"
                    : "border-rose-500/60 bg-rose-500/10"
                }`}
              />
            )}

            {/* The Authentic Cane Cutout Image with striking physics animation */}
            <div
              className={`relative w-48 h-80 transition-all duration-300 ease-out select-none ${
                isStriking
                  ? "rotate-[-18deg] translate-y-3 scale-105"
                  : "rotate-0 translate-y-0 hover:scale-102"
              }`}
            >
              <Image
                src="/images/furqan-butt-cane-nobg.png"
                alt="Furqan Butt's Authentic Ornate Brass Walking Stick"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-contain drop-shadow-[0_15px_30px_rgba(200,169,81,0.35)]"
                priority
              />

              {/* Interactive Hotspot 1: Brass Knob */}
              <button
                onClick={() =>
                  setActiveHotspot(
                    activeHotspot === "knob"
                      ? null
                      : "knob"
                  )
                }
                className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-gold/80 hover:bg-brand-gold text-brand-black text-[10px] font-bold flex items-center justify-center shadow-lg transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                aria-label="Inspect Brass Knob"
                title="Click to inspect the Ornate Brass Knob"
              >
                1
              </button>

              {/* Interactive Hotspot 2: Brass Collar */}
              <button
                onClick={() =>
                  setActiveHotspot(
                    activeHotspot === "collar"
                      ? null
                      : "collar"
                  )
                }
                className="absolute top-28 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-gold/80 hover:bg-brand-gold text-brand-black text-[10px] font-bold flex items-center justify-center shadow-lg transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                aria-label="Inspect Brass Collar"
                title="Click to inspect the Turned Collar"
              >
                2
              </button>

              {/* Interactive Hotspot 3: Wood Shaft */}
              <button
                onClick={() =>
                  setActiveHotspot(
                    activeHotspot === "shaft"
                      ? null
                      : "shaft"
                  )
                }
                className="absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-brand-gold/80 hover:bg-brand-gold text-brand-black text-[10px] font-bold flex items-center justify-center shadow-lg transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                aria-label="Inspect Wood Shaft"
                title="Click to inspect the Hardwood Shaft"
              >
                3
              </button>
            </div>

            {/* Hotspot details popover overlay */}
            {activeHotspot && (
              <div className="absolute inset-x-4 bottom-4 p-4 rounded-xl bg-brand-black/95 border border-brand-gold shadow-2xl text-xs z-20 animate-fadeIn">
                <div className="flex items-center justify-between text-brand-gold font-bold mb-1">
                  <span>
                    {activeHotspot === "knob" && "1. Ornate Floral Brass Knob"}
                    {activeHotspot === "collar" && "2. Turned Ferrule & Waist"}
                    {activeHotspot === "shaft" && "3. Sheesham Hardwood Shaft"}
                  </span>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="text-brand-muted hover:text-brand-ivory font-mono text-xs"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-brand-muted leading-relaxed text-[11px]">
                  {activeHotspot === "knob" &&
                    "Heavy solid brass head with hand-chiseled floral relief. Acts as an acoustic striking hammer whose resonant bounce detects hollow voids beneath plastered masonry."}
                  {activeHotspot === "collar" &&
                    "Turned brass ferrule machined to exactly 4 inches in circumference, used by Furqan Butt as a rapid manual check for seismic column tie ring spacing on site."}
                  {activeHotspot === "shaft" &&
                    "Hand-turned dense Sheesham hardwood shaft. Perfectly straight to serve as a fast physical straightedge against laser-projected wall plumbs."}
                </p>
              </div>
            )}
          </div>

          <span className="text-[11px] font-mono text-brand-muted mt-3">
            Click numbered pins (1, 2, 3) to inspect the cane&apos;s craftsmanship.
          </span>
        </div>

        {/* Right Column: Interactive Test Controls & Wall Results */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Wall Type Selector */}
          <div>
            <label className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold block mb-3">
              Step 1 — Choose The Wall Cross-Section To Audit:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Hollow Wall Button */}
              <button
                type="button"
                onClick={() => setSelectedWall("hollow")}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col gap-1.5 ${
                  selectedWall === "hollow"
                    ? "bg-rose-950/60 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.25)]"
                    : "bg-brand-surface/70 border-brand-border text-brand-muted hover:border-brand-border/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 font-serif">
                    “Shapper” Shortcut Wall
                  </span>
                  <span className="text-xs">⚠️</span>
                </div>
                <p className="text-[11px] text-brand-muted leading-tight">
                  Crooked brickwork masked under 2.5 inches of unwashed sand & hollow plaster wedges.
                </p>
              </button>

              {/* Solid Wall Button */}
              <button
                type="button"
                onClick={() => setSelectedWall("solid")}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col gap-1.5 ${
                  selectedWall === "solid"
                    ? "bg-brand-dark border-brand-gold shadow-[0_0_20px_rgba(200,169,81,0.3)]"
                    : "bg-brand-surface/70 border-brand-border text-brand-muted hover:border-brand-border/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold font-serif">
                    Black Diamond Standard
                  </span>
                  <span className="text-xs">🏆</span>
                </div>
                <p className="text-[11px] text-brand-muted leading-tight">
                  Laser-straight AWWAL bricks with 0.5-inch uniform mortar and 14-day ponding curing.
                </p>
              </button>
            </div>
          </div>

          {/* Action Trigger Button */}
          <div>
            <label className="text-xs uppercase font-mono tracking-widest text-brand-gold font-bold block mb-3">
              Step 2 — Strike The Surface With The Cane:
            </label>

            <Button
              variant={selectedWall === "solid" ? "gold" : "danger"}
              size="lg"
              fullWidth
              onClick={handleStrike}
              disabled={isStriking}
              rightIcon={<CaneIcon size={22} />}
              className="py-4 text-sm font-bold uppercase tracking-widest shadow-xl cursor-pointer"
            >
              {isStriking
                ? "Rapping On Wall..."
                : `Tap ${selectedWall === "solid" ? "Solid Monolith" : "Shortcut Wall"} With Cane`}
            </Button>
          </div>

          {/* Real-Time Acoustic Feedback Display */}
          {lastAuditResult && (
            <div
              className={`p-5 rounded-2xl border-2 transition-all animate-fadeIn ${
                lastAuditResult === "solid"
                  ? "bg-brand-dark/90 border-brand-gold/70 shadow-[0_0_30px_rgba(200,169,81,0.2)]"
                  : "bg-rose-950/80 border-rose-500/70 shadow-[0_0_30px_rgba(244,63,94,0.2)]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-bold uppercase tracking-widest ${
                    lastAuditResult === "solid" ? "text-brand-gold" : "text-rose-400"
                  }`}
                >
                  {lastAuditResult === "solid"
                    ? "✓ ACOUSTIC STATUS: 100% SOLID MONOLITH"
                    : "✕ ACOUSTIC STATUS: HOLLOW VOID DETECTED"}
                </span>
                <span className="text-xs font-mono text-brand-muted">
                  Audits: #{auditCount}
                </span>
              </div>

              <div className="font-serif italic text-base sm:text-lg text-brand-ivory mb-2">
                {lastAuditResult === "solid" ? (
                  <span>
                    “Thud! Aawaz solid hai. Bunyaad aur diwaar mein sachai hai—ab mooch ko tao banta hai!”
                  </span>
                ) : (
                  <span>
                    “Thuk-thuk! Suno khokhli aawaz! Yeh shapper builder ka kaam hai—diwaar girao aur dobara banao!”
                  </span>
                )}
              </div>

              <p className="text-xs text-brand-muted leading-relaxed">
                {lastAuditResult === "solid"
                  ? "Zero hollow pockets detected. The acoustic strike produces an immediate, highly damped low-frequency resonance characteristic of high-density vibrated concrete and laser-aligned mortar."
                  : "The strike produces a hollow, reverberant drum frequency caused by delaminated plaster pulling away from crooked brick coursing. Within 1 to 2 monsoons, this plaster will crack and drop."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
