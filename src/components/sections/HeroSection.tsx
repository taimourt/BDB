"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { ChallengeSeal } from "@/components/branding/ChallengeSeal";
import { CATCHPHRASES, BRAND_INFO } from "@/data/brandData";

export const HeroSection: React.FC = () => {
  const [isPlayingVideoModal, setIsPlayingVideoModal] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex flex-col justify-between pt-6 pb-12 overflow-hidden bg-brand-black bg-architectural-grid select-none"
    >
      {/* Cinematic Lighting Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-brand-gold/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-charcoal/40 blur-[100px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Headline & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
              <Badge variant="gold" size="md" pulse icon={<MoustacheIcon size={18} />}>
                Mooch Ko Tao Guarantee
              </Badge>
              <Badge variant="shapper" size="md">
                Zero Shapper Shortcuts
              </Badge>
              <Badge variant="dark" size="md" icon={<CaneIcon size={16} />}>
                Inspected With The Stick
              </Badge>
            </div>

            {/* Bold Catchphrase Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-ivory leading-[1.08] tracking-tight mb-6">
              <span className="block text-gold-gradient drop-shadow-sm">
                “{CATCHPHRASES.challenge}”
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl font-sans font-light tracking-wide text-brand-ivory/90 mt-3">
                Uncompromising Construction Luxury & Engineered Integrity.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-brand-muted max-w-2xl leading-relaxed mb-9">
              Led by <strong className="text-brand-ivory font-semibold">Furqan Butt</strong>, Black Diamond Builders backs unwavering social media confidence with verified on-site structural reality. From 100% certified Grade 60 prime steel to laser-straight brick courses, we eliminate contractor deception across Pakistan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                variant="gold"
                size="lg"
                onClick={() => scrollToSection("projects")}
                rightIcon={<span className="text-sm">→</span>}
                className="w-full sm:w-auto uppercase tracking-wider"
              >
                EXPLORE OUR PROJECTS
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("enquiry")}
                leftIcon={<MoustacheIcon size={18} />}
                className="w-full sm:w-auto uppercase tracking-wider"
              >
                LET&apos;S BUILD YOUR DREAM HOME
              </Button>
            </div>

            {/* Three Verified Engineering Anchors */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-brand-border/60 w-full max-w-xl">
              <div className="flex flex-col">
                <span className="text-lg sm:text-2xl font-serif font-bold text-brand-gold">
                  Grade 60
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-brand-muted mt-0.5">
                  Prime Deformed Steel
                </span>
              </div>
              <div className="flex flex-col border-l border-brand-border/60 pl-3 sm:pl-4">
                <span className="text-lg sm:text-2xl font-serif font-bold text-brand-gold">
                  Laser Plumb
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-brand-muted mt-0.5">
                  Digital Wall Alignment
                </span>
              </div>
              <div className="flex flex-col border-l border-brand-border/60 pl-3 sm:pl-4">
                <span className="text-lg sm:text-2xl font-serif font-bold text-brand-gold">
                  14-Day
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-brand-muted mt-0.5">
                  Water Pond Curing
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic Portrait / Authentic Video Media Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Rotating Challenge Seal floating over media corner */}
              <div className="absolute -top-8 -right-4 sm:-right-6 z-20">
                <ChallengeSeal size="sm" />
              </div>

              {/* The Cinematic Media Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-brand-gold/40 bg-gradient-to-b from-brand-charcoal via-brand-dark to-brand-black shadow-[0_20px_60px_rgba(0,0,0,0.85)] group">
                
                {/* Visual Frame Backdrop */}
                <div className="relative w-full h-[460px] sm:h-[500px] flex flex-col justify-between p-6 sm:p-7 overflow-hidden">
                  
                  {/* Subtle architectural grid & ambient spotlight inside frame */}
                  <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />
                  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-gold/15 blur-3xl rounded-full pointer-events-none" />
                  
                  {/* Authentic Cane & Owner Signature Presentation inside Frame */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-12">
                    <div className="relative flex flex-col items-center">
                      
                      {/* Authentic Cutout of Furqan Butt's Handcrafted Brass Cane */}
                      <div className="relative w-44 h-64 sm:h-72 drop-shadow-[0_15px_35px_rgba(200,169,81,0.4)] hover:scale-105 transition-transform duration-500">
                        <img
                          src="/images/furqan-butt-cane-nobg.png"
                          alt="Furqan Butt's Authentic Ornate Brass Walking Stick"
                          className="w-full h-full object-contain"
                        />

                        {/* Floating Seal beside the Brass Cane Head */}
                        <div className="absolute -top-2 -right-3 p-2 rounded-full bg-brand-black/90 border border-brand-gold/60 shadow-xl flex items-center justify-center text-brand-gold">
                          <MoustacheIcon size={24} />
                        </div>
                      </div>

                      <div className="mt-2 text-center px-4">
                        <span className="font-serif text-lg font-bold text-brand-ivory tracking-wider block">
                          FURQAN BUTT
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-brand-gold font-semibold flex items-center justify-center gap-1.5">
                          <CaneIcon size={16} />
                          <span>The Signature Stick Audit</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Top Bar inside Media Slot */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold bg-brand-black/80 px-2.5 py-1 rounded border border-brand-gold/30">
                      Authentic Owner Footage Slot
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] uppercase font-mono text-emerald-400 bg-brand-black/80 px-2 py-1 rounded border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Verified
                    </span>
                  </div>

                  {/* Bottom Interactive Area inside Media Frame */}
                  <div className="relative z-10 flex flex-col gap-3 bg-brand-black/90 backdrop-blur-md p-4 rounded-xl border border-brand-border">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-xs font-serif font-bold text-brand-ivory block">
                          “Agar bunyaad mazboot hai, to mooch ko tao do.”
                        </span>
                        <span className="text-[10px] text-brand-muted">
                          Official Site Audits &amp; Rebar Inspections
                        </span>
                      </div>
                      
                      {/* Play Reel Trigger */}
                      <button
                        onClick={() => setIsPlayingVideoModal(true)}
                        className="w-10 h-10 rounded-full bg-gold-gradient text-brand-black flex items-center justify-center shrink-0 hover:scale-105 transition-transform shadow-md"
                        aria-label="Play signature site tour preview"
                      >
                        <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-brand-border/60 text-[10px] text-brand-muted">
                      <span className="italic">Never fabricated. Authentic footage placeholder.</span>
                      <a
                        href={BRAND_INFO.tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-gold font-semibold hover:underline"
                      >
                        {BRAND_INFO.tiktokHandle} ↗
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              {/* Ambient Glow beneath the media frame */}
              <div className="absolute -inset-3 bg-gradient-to-r from-brand-gold/25 via-brand-gold/5 to-brand-gold/25 blur-2xl -z-10 rounded-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator (Respects reduced-motion) */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 text-brand-muted hover:text-brand-gold transition-colors cursor-pointer pt-2"
        onClick={() => scrollToSection("persona")}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-medium font-mono">
          Scroll To Discover
        </span>
        <div className="w-5 h-8 rounded-full border border-brand-gold/40 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-brand-gold motion-safe:animate-bounce" />
        </div>
      </div>

      {/* Video Modal Preview (Replaceable placeholder for authentic reel) */}
      {isPlayingVideoModal && (
        <div className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-brand-dark border border-brand-gold/50 rounded-2xl p-6 shadow-2xl text-left">
            <button
              onClick={() => setIsPlayingVideoModal(false)}
              className="absolute top-4 right-4 text-brand-muted hover:text-brand-ivory text-xl p-1"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="flex items-center gap-3 mb-4">
              <CaneIcon size={28} />
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-ivory">
                  Furqan Butt On-Site Inspection Tour
                </h3>
                <p className="text-xs text-brand-gold font-mono">
                  Authentic Jobsite Video Player Container
                </p>
              </div>
            </div>

            <div className="aspect-video w-full rounded-xl bg-brand-black border border-brand-border flex flex-col items-center justify-center p-6 text-center">
              <MoustacheIcon size={48} />
              <p className="font-serif text-lg text-brand-ivory mt-4 font-bold">
                “Poore Pakistan ko mera challenge hai — standard match karo!”
              </p>
              <p className="text-xs text-brand-muted max-w-md mt-2">
                This media frame is ready to embed authentic high-definition video reels of Furqan Butt walking the job site, checking laser lines, and holding the signature stick.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2"
                >
                  <span>Watch Reels on TikTok</span>
                  <span>↗</span>
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlayingVideoModal(false)}
                >
                  Close Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
