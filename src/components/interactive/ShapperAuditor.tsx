"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";

interface ExcuseItem {
  id: number;
  textUrdu: string;
  textEn: string;
  x: number;
  y: number;
}

const CONTRACTOR_EXCUSES: Array<{ urdu: string; en: string }> = [
  {
    urdu: "“Ustaad kal subha 9 baje pakka aayega!”",
    en: "The master mason will definitely show up tomorrow morning at 9!",
  },
  {
    urdu: "“Bhai cement theek tha, dhoop bohat tez thi!”",
    en: "The cement was fine, the sun was just too harsh!",
  },
  {
    urdu: "“Deewar thori tehri hai to parda aage aa jayega!”",
    en: "If the wall is slightly crooked, just hang a nice curtain in front!",
  },
  {
    urdu: "“Laser level angrezon ka chochla hai, aankh ka andaza kafi hai!”",
    en: "Laser levels are Western gimmicks, my naked eye estimate is enough!",
  },
  {
    urdu: "“Saria 60-grade hi tha bhai, bas mill stamp mit gaya!”",
    en: "The rebar was Grade-60 bro, the mill stamp just rubbed off!",
  },
  {
    urdu: "“Plaster mein khokhla-pan to ventilation ke liye acha hota hai!”",
    en: "Hollow voids in plaster are actually great for natural ventilation!",
  },
  {
    urdu: "“Monsoon ke baad cracks khud hi settling se bhar jayenge!”",
    en: "After monsoon the cracks will automatically fill up during soil settling!",
  },
  {
    urdu: "“Bhai poore Pakistan mein sab aese hi banate hain!”",
    en: "Brother, this is how everyone in the entire country builds!",
  },
];

export const ShapperAuditor: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  // State
  const [integrity, setIntegrity] = useState<number>(100);
  const [excuses, setExcuses] = useState<ExcuseItem[]>([]);
  const [actionState, setActionState] = useState<
    "idle" | "cane-strike" | "wind-gust" | "steel-crush" | "blown-away"
  >("idle");
  const [whackCount, setWhackCount] = useState<number>(0);
  const [dismissedCount, setDismissedCount] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // Audio Context Ref
  const audioCtxRef = useRef<AudioContext | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const getAudioContext = useCallback(() => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Synthesize realistic plastic crinkle & bag rustle using audio noise
  const playPlasticCrinkle = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // 1. Noise buffer for realistic crinkly plastic friction
      const bufferSize = ctx.sampleRate * 0.15;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      // High-pass + Band-pass to mimic 15-micron thin polyethylene crinkle
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(3200, now);
      filter.frequency.exponentialRampToValueAtTime(1600, now + 0.12);
      filter.Q.setValueAtTime(4.0, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.7, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + 0.15);
    } catch {
      // Audio context fallbacks ignored safely
    }
  }, [getAudioContext, soundEnabled]);

  // Synthesize Cane strike impact
  const playCaneWhack = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Brass cane head transient
      const click = ctx.createOscillator();
      const clickGain = ctx.createGain();
      click.type = "square";
      click.frequency.setValueAtTime(2200, now);
      click.frequency.exponentialRampToValueAtTime(400, now + 0.03);
      clickGain.gain.setValueAtTime(0.5, now);
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
      click.connect(clickGain);
      clickGain.connect(ctx.destination);
      click.start(now);
      click.stop(now + 0.04);

      // Hollow plastic rebound thud
      const body = ctx.createOscillator();
      const bodyGain = ctx.createGain();
      body.type = "sine";
      body.frequency.setValueAtTime(260, now);
      body.frequency.exponentialRampToValueAtTime(90, now + 0.12);
      bodyGain.gain.setValueAtTime(0.6, now);
      bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
      body.connect(bodyGain);
      bodyGain.connect(ctx.destination);
      body.start(now);
      body.stop(now + 0.14);

      // Follow with plastic crinkle
      playPlasticCrinkle();
    } catch {
      // Audio context fallbacks ignored safely
    }
  }, [getAudioContext, playPlasticCrinkle, soundEnabled]);

  // Synthesize wind gust rush
  const playWindWhoosh = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const bufferSize = ctx.sampleRate * 0.6;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(180, now);
      filter.frequency.linearRampToValueAtTime(800, now + 0.25);
      filter.frequency.exponentialRampToValueAtTime(120, now + 0.58);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.6, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.58);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + 0.6);
    } catch {
      // Audio fallback
    }
  }, [getAudioContext, soundEnabled]);

  // Synthesize heavy steel clang
  const playSteelClang = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(840, now);
      osc1.frequency.exponentialRampToValueAtTime(220, now + 0.4);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(1680, now);
      osc2.frequency.exponentialRampToValueAtTime(440, now + 0.2);

      gain.gain.setValueAtTime(0.7, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.45);
      osc2.stop(now + 0.45);

      playPlasticCrinkle();
    } catch {
      // Fallback
    }
  }, [getAudioContext, playPlasticCrinkle, soundEnabled]);

  // Clean up excuses
  useEffect(() => {
    if (excuses.length === 0) return;
    const timer = setTimeout(() => {
      setExcuses((prev) => prev.slice(1));
    }, 3500);
    return () => clearTimeout(timer);
  }, [excuses]);

  // Trigger Cane Strike
  const handleCaneStrike = () => {
    setActionState("cane-strike");
    playCaneWhack();
    setWhackCount((c) => c + 1);
    setIntegrity((prev) => Math.max(0, prev - 25));

    // Add random excuse
    const randomExcuse =
      CONTRACTOR_EXCUSES[Math.floor(Math.random() * CONTRACTOR_EXCUSES.length)];
    const newExcuse: ExcuseItem = {
      id: Date.now(),
      textUrdu: randomExcuse.urdu,
      textEn: randomExcuse.en,
      x: (Math.random() - 0.5) * 60,
      y: (Math.random() - 0.5) * 40 - 20,
    };
    setExcuses((prev) => [...prev.slice(-2), newExcuse]);

    setTimeout(() => {
      setActionState("idle");
    }, 700);
  };

  // Trigger Wind Gust
  const handleWindGust = () => {
    setActionState("wind-gust");
    playWindWhoosh();
    playPlasticCrinkle();

    setTimeout(() => {
      setActionState("idle");
    }, 1800);
  };

  // Trigger Steel Crush Test
  const handleSteelCrush = () => {
    setActionState("steel-crush");
    playSteelClang();
    setIntegrity(0);

    setTimeout(() => {
      setActionState("idle");
    }, 2200);
  };

  // Blow Away completely
  const handleBlowAway = () => {
    setActionState("blown-away");
    playWindWhoosh();
    setDismissedCount((c) => c + 1);
    setIntegrity(0);
  };

  // Reset fresh bag
  const handleResetBag = () => {
    setActionState("idle");
    setIntegrity(100);
    setExcuses([]);
    playPlasticCrinkle();
  };

  // 3D Perspective interactive mouse tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePos({ x: 0, y: 0 });
      }}
      className={`relative rounded-3xl bg-gradient-to-b from-brand-charcoal via-brand-dark to-brand-black border-2 border-brand-gold/40 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden text-left ${className}`}
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />

      {/* Top Controls Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-brand-border/70 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/30 border border-sky-400/40 flex items-center justify-center text-xl shadow-inner">
            🛍️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-ivory tracking-wide">
                The Shapper Contractor Stress-Test
              </h3>
              <Badge variant="shapper" size="sm" pulse>
                15-Micron Flimsy
              </Badge>
            </div>
            <p className="text-xs text-brand-muted">
              Interactive laboratory: Tap the authentic plastic bag to audit flimsy contractor promises.
            </p>
          </div>
        </div>

        {/* Audio Mute & Stats Pill */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            aria-label="Toggle Sound Effects"
            className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium border transition-colors flex items-center gap-1.5 cursor-pointer ${
              soundEnabled
                ? "bg-brand-surface text-brand-gold border-brand-gold/40 hover:bg-brand-surface/80"
                : "bg-brand-surface/50 text-brand-muted border-brand-border hover:text-brand-ivory"
            }`}
          >
            <span>{soundEnabled ? "🔊 Sound On" : "🔇 Sound Muted"}</span>
          </button>

          {dismissedCount > 0 && (
            <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-500/40">
              ✓ {dismissedCount} Shappers Dismissed
            </span>
          )}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: The Interactive 3D Shapper Bag Stage */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[360px] relative">
          
          {/* Integrity Bar on Top of Stage */}
          <div className="w-full max-w-sm mb-3">
            <div className="flex items-center justify-between text-xs font-mono mb-1.5">
              <span className="text-brand-muted flex items-center gap-1">
                <span>Structural Integrity:</span>
              </span>
              <span
                className={`font-bold ${
                  integrity > 60
                    ? "text-sky-400"
                    : integrity > 25
                    ? "text-amber-400"
                    : "text-red-400 animate-pulse"
                }`}
              >
                {integrity}% {integrity === 0 ? "— CRITICAL COLLAPSE!" : ""}
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-brand-surface/80 border border-brand-border overflow-hidden">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  integrity > 60
                    ? "bg-gradient-to-r from-sky-400 to-blue-500"
                    : integrity > 25
                    ? "bg-gradient-to-r from-amber-400 to-orange-500"
                    : "bg-gradient-to-r from-red-500 to-rose-600"
                }`}
                style={{ width: `${integrity}%` }}
              />
            </div>
          </div>

          {/* Interactive Bag Canvas Container */}
          <div
            onClick={actionState !== "blown-away" ? handleCaneStrike : undefined}
            style={{
              transform:
                actionState === "blown-away"
                  ? "translate3d(600px, -450px, 0) rotate(720deg) scale(0.08)"
                  : actionState === "wind-gust"
                  ? "translate3d(40px, -80px, 0) rotate(-18deg) scale(1.15)"
                  : actionState === "steel-crush"
                  ? "scale3d(1.4, 0.22, 1) translateY(80px)"
                  : actionState === "cane-strike"
                  ? "scale3d(0.92, 1.08, 1) rotate(5deg) translateY(10px)"
                  : isHovering
                  ? `perspective(800px) rotateY(${mousePos.x * 24}deg) rotateX(${
                      -mousePos.y * 24
                    }deg) scale(1.03)`
                  : "none",
              transition:
                actionState === "blown-away"
                  ? "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease"
                  : actionState === "steel-crush"
                  ? "transform 0.25s cubic-bezier(0.2, 0.9, 0.3, 1.2)"
                  : actionState === "wind-gust"
                  ? "transform 0.6s ease-in-out"
                  : actionState === "cane-strike"
                  ? "transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  : "transform 0.35s ease-out",
              opacity: actionState === "blown-away" ? 0 : 1,
            }}
            className={`relative w-64 h-64 sm:w-80 sm:h-80 select-none ${
              actionState === "idle"
                ? "animate-shapper-float cursor-pointer"
                : ""
            }`}
          >
            {/* Ambient Glowing Aura under Shapper */}
            <div
              className={`absolute inset-4 rounded-full bg-sky-500/25 blur-3xl transition-opacity pointer-events-none ${
                isHovering ? "opacity-90" : "opacity-40"
              }`}
            />

            {/* Authentic Transparent Blue Shapper Cutout */}
            <div className="relative w-full h-full flex items-center justify-center animate-shapper-flutter">
              <Image
                src="/images/blue-shapper-nobg.png"
                alt="Authentic Blue Shapper Plastic Bag - Black Diamond Builders Anti-Shapper Motif"
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="object-contain drop-shadow-[0_20px_35px_rgba(2,132,199,0.45)] filter"
              />
            </div>

            {/* Click Tap Indicator Hint (Only when idle) */}
            {actionState === "idle" && (
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-black/90 border border-brand-gold/50 text-[10px] font-mono text-brand-gold-light pointer-events-none whitespace-nowrap shadow-lg flex items-center gap-1.5 animate-pulse">
                <CaneIcon size={13} />
                <span>Click bag to whack with cane</span>
              </div>
            )}

            {/* Animated Cane Strike Graphic that whacks the bag */}
            {actionState === "cane-strike" && (
              <div
                style={{
                  animation: "caneStrikeMotion 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                }}
                className="absolute -top-12 -right-8 w-24 h-64 pointer-events-none z-30 drop-shadow-[0_0_20px_rgba(200,169,81,0.8)]"
              >
                <div className="w-full h-full flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-200 via-brand-gold to-yellow-500 border border-amber-100 shadow-md flex items-center justify-center">
                    <span className="text-[10px] font-serif font-black text-brand-black">BDB</span>
                  </div>
                  <div className="w-3 h-52 bg-gradient-to-b from-amber-700 via-stone-900 to-amber-900 rounded-b-full border-x border-brand-gold/40 shadow-xl" />
                </div>
              </div>
            )}

            {/* Steel Anvil / Beam crushing graphic */}
            {actionState === "steel-crush" && (
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 p-3 rounded-lg bg-gradient-to-r from-stone-800 via-brand-charcoal to-stone-800 border-2 border-brand-gold shadow-[0_0_35px_rgba(200,169,81,0.6)] z-30 flex items-center justify-center gap-2 animate-bounce">
                <span className="text-brand-gold font-mono font-black text-xs">
                  🏗️ CERTIFIED PRIME GRADE 60 STEEL (60,000 PSI)
                </span>
              </div>
            )}

            {/* Wind animation streaks */}
            {actionState === "wind-gust" && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-10 w-48 h-0.5 bg-gradient-to-r from-transparent via-sky-300 to-transparent animate-pulse" />
                <div className="absolute top-1/2 -left-16 w-60 h-0.5 bg-gradient-to-r from-transparent via-cyan-200 to-transparent animate-pulse delay-100" />
                <div className="absolute top-3/4 -left-8 w-52 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-pulse delay-200" />
              </div>
            )}
          </div>

          {/* Floating Excuse Bubbles that explode out from the shapper */}
          <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center z-40">
            {excuses.map((excuse) => (
              <div
                key={excuse.id}
                style={{
                  transform: `translate(${excuse.x}px, ${excuse.y}px)`,
                  animation: "excuseFloatBubble 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                }}
                className="absolute max-w-xs p-3.5 rounded-2xl bg-brand-black/95 border-2 border-red-500/70 shadow-[0_10px_30px_rgba(239,68,68,0.35)] backdrop-blur-md text-left"
              >
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-red-400 uppercase font-bold mb-1">
                  <span>⚠️ Shapper Excuse Detected:</span>
                </div>
                <p className="font-serif text-xs sm:text-sm font-bold text-brand-ivory leading-snug mb-0.5">
                  {excuse.textUrdu}
                </p>
                <p className="text-[10px] text-brand-muted leading-tight">
                  {excuse.textEn}
                </p>
              </div>
            ))}
          </div>

          {/* Blown Away State Reset Banner */}
          {actionState === "blown-away" && (
            <div className="mt-6 text-center animate-fadeIn p-6 rounded-2xl bg-brand-surface/70 border border-brand-gold/40">
              <span className="text-3xl block mb-2">💨</span>
              <h4 className="font-serif text-base sm:text-lg font-bold text-brand-ivory mb-1">
                SHAPPER URR GAYA!
              </h4>
              <p className="text-xs text-brand-muted max-w-xs mx-auto mb-4">
                At the first sign of a real engineering audit, flimsy contractors turn off their phones and fly away in the wind.
              </p>
              <Button
                variant="gold"
                size="sm"
                onClick={handleResetBag}
                className="cursor-pointer"
              >
                <span>Summon Another Shapper Contractor ↺</span>
              </Button>
            </div>
          )}
        </div>

        {/* Right Column: Interactive Action Trigger Deck */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-4 rounded-xl bg-brand-surface/40 border border-brand-border text-left">
            <span className="text-[11px] font-mono uppercase tracking-wider text-brand-gold font-bold flex items-center gap-1.5 mb-1">
              <MoustacheIcon size={14} />
              <span>Furqan Butt&apos;s Audit Methodology</span>
            </span>
            <p className="text-xs text-brand-muted leading-relaxed">
              Real foundations are built from 100% Prime Grade-60 steel, washed sand, and cured slabs. Trigger audit simulations below to test how flimsy contractors hold up under scrutiny:
            </p>
          </div>

          {/* Action Buttons Grid */}
          <div className="flex flex-col gap-2.5">
            {/* Button 1: Stick Whack */}
            <button
              onClick={handleCaneStrike}
              disabled={actionState === "blown-away"}
              className="w-full p-3.5 rounded-xl bg-gradient-to-r from-brand-charcoal to-brand-surface border border-brand-gold/40 hover:border-brand-gold hover:shadow-[0_0_20px_rgba(200,169,81,0.25)] transition-all flex items-center justify-between text-left group cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-black border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0 group-hover:scale-110 transition-transform">
                  <CaneIcon size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm font-bold text-brand-ivory">
                      Chharri Audit Strike
                    </span>
                    <span className="text-[10px] font-mono text-brand-gold bg-brand-gold/15 px-2 py-0.5 rounded">
                      Tap Wall
                    </span>
                  </div>
                  <span className="text-[11px] text-brand-muted block">
                    Rap with Furqan&apos;s cane to reveal counterfeit contractor excuses.
                  </span>
                </div>
              </div>
              <span className="text-brand-gold font-bold text-sm group-hover:translate-x-1 transition-transform">
                🦯 →
              </span>
            </button>

            {/* Button 2: Wind Gust */}
            <button
              onClick={handleWindGust}
              disabled={actionState === "blown-away"}
              className="w-full p-3.5 rounded-xl bg-gradient-to-r from-brand-charcoal to-brand-surface border border-sky-500/30 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] transition-all flex items-center justify-between text-left group cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-black border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-110 transition-transform">
                  💨
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm font-bold text-brand-ivory">
                      Wind Storm Test (ہوا کا جھونکا)
                    </span>
                    <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                      5 km/h
                    </span>
                  </div>
                  <span className="text-[11px] text-brand-muted block">
                    Watch the contractor bag inflate and billow out of control.
                  </span>
                </div>
              </div>
              <span className="text-sky-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                🌪️ →
              </span>
            </button>

            {/* Button 3: Steel Crush Test */}
            <button
              onClick={handleSteelCrush}
              disabled={actionState === "blown-away"}
              className="w-full p-3.5 rounded-xl bg-gradient-to-r from-brand-charcoal to-brand-surface border border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] transition-all flex items-center justify-between text-left group cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-black border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                  🏗️
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm font-bold text-brand-ivory">
                      Grade-60 Steel Compression
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                      60,000 PSI
                    </span>
                  </div>
                  <span className="text-[11px] text-brand-muted block">
                    Drop heavy prime rebar to test load-bearing capability.
                  </span>
                </div>
              </div>
              <span className="text-amber-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                ⚡ →
              </span>
            </button>

            {/* Button 4: Blow Away Completely */}
            <button
              onClick={handleBlowAway}
              disabled={actionState === "blown-away"}
              className="w-full p-3.5 rounded-xl bg-gradient-to-r from-brand-charcoal to-brand-surface border border-red-500/30 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all flex items-center justify-between text-left group cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-black border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 group-hover:scale-110 transition-transform">
                  🚀
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm font-bold text-brand-ivory">
                      Dismiss Shapper (باہر کرو)
                    </span>
                    <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                      Exorcise
                    </span>
                  </div>
                  <span className="text-[11px] text-brand-muted block">
                    Launch flimsy contractor into the sky and reset your site.
                  </span>
                </div>
              </div>
              <span className="text-red-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                💨 →
              </span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-brand-border/60">
            <div className="p-2.5 rounded-lg bg-brand-surface/40 border border-brand-border/60 text-center">
              <span className="text-[10px] text-brand-muted block font-mono">Whacks</span>
              <span className="font-serif text-base font-bold text-brand-gold">{whackCount}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-brand-surface/40 border border-brand-border/60 text-center">
              <span className="text-[10px] text-brand-muted block font-mono">Flimsiness</span>
              <span className="font-serif text-base font-bold text-sky-400">99.8%</span>
            </div>
            <div className="p-2.5 rounded-lg bg-brand-surface/40 border border-brand-border/60 text-center">
              <span className="text-[10px] text-brand-muted block font-mono">Tensile Limit</span>
              <span className="font-serif text-base font-bold text-red-400">0.02 MPa</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

