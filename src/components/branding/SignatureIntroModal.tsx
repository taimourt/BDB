"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { MoustacheIcon } from "./MoustacheIcon";
import { CaneIcon } from "./CaneIcon";
import { CATCHPHRASES, BRAND_INFO } from "@/data/brandData";

interface SignatureIntroModalProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export const SignatureIntroModal: React.FC<SignatureIntroModalProps> = ({
  onComplete,
  forceShow = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    // Check if user has already seen the intro during this session unless forceShow is true
    const hasSeenIntro = sessionStorage.getItem("bdb_intro_seen");
    if (!hasSeenIntro || forceShow) {
      setIsVisible(true);

      // Stage 1: Diamond Assembly
      const timer1 = setTimeout(() => setStage(1), 400);
      // Stage 2: The Challenge Catchphrase Revelation
      const timer2 = setTimeout(() => setStage(2), 1400);
      // Stage 3: Auto completion & dismiss
      const timer3 = setTimeout(() => {
        dismissIntro();
      }, 3400);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [forceShow]);

  // Handle ESC key to skip immediately
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        dismissIntro();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible]);

  const dismissIntro = () => {
    sessionStorage.setItem("bdb_intro_seen", "true");
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center p-6 select-none overflow-hidden animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Black Diamond Builders Signature Brand Intro"
    >
      {/* Background Architectural Grid & Spotlight */}
      <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/15 blur-[160px] rounded-full pointer-events-none" />

      {/* Prominent Instant Skip Button (Top Right) */}
      <button
        onClick={dismissIntro}
        className="absolute top-6 right-6 px-4 py-2 rounded-full bg-brand-surface/90 hover:bg-brand-charcoal border border-brand-gold/40 text-brand-gold text-xs font-mono uppercase tracking-widest transition-all hover:scale-105 z-20 flex items-center gap-2 cursor-pointer shadow-lg"
        aria-label="Skip Brand Intro"
      >
        <span>Skip Intro</span>
        <span className="text-sm font-bold">✕</span>
      </button>

      {/* Main Cinematic Animation Stage */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4">
        
        {/* Stage 0 & 1: Diamond Motif & Logo Assembly */}
        <div
          className={`transition-all duration-700 transform ${
            stage >= 1 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-4"
          }`}
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 mx-auto relative flex items-center justify-center">
            {/* Glowing gold ring behind diamond */}
            <div className="absolute -inset-4 rounded-full bg-brand-gold/20 blur-xl animate-pulse" />
            <BrandLogo size="lg" showTagline={false} />
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-brand-gold/60" />
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-brand-gold font-bold">
              BLACK DIAMOND BUILDERS
            </span>
            <span className="w-8 h-[1px] bg-brand-gold/60" />
          </div>
        </div>

        {/* Stage 2: The Challenge Catchphrase Revelation */}
        <div
          className={`transition-all duration-700 transform mt-4 ${
            stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-gold-gradient tracking-tight leading-tight mb-4">
            “{CATCHPHRASES.challenge}”
          </h1>

          <div className="flex items-center justify-center gap-4 text-brand-ivory text-xs uppercase tracking-widest font-semibold mt-4">
            <span className="flex items-center gap-1.5">
              <MoustacheIcon size={20} />
              <span>Mooch Ko Tao</span>
            </span>
            <span className="text-brand-gold">•</span>
            <span className="flex items-center gap-1.5">
              <CaneIcon size={18} />
              <span>Inspected With The Stick</span>
            </span>
          </div>
        </div>

        {/* Progress Bar Line at bottom of card */}
        <div className="w-48 h-1 bg-brand-surface rounded-full overflow-hidden mt-10">
          <div className="h-full bg-gold-gradient animate-[marquee_3.2s_linear_forwards]" />
        </div>
      </div>
    </div>
  );
};
