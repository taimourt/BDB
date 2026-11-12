"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { ChallengeSeal } from "@/components/branding/ChallengeSeal";
import { CHALLENGE_PROOF_TIERS, SHAPPER_COMPARISON, CATCHPHRASES } from "@/data/brandData";

export const TheChallengeSection: React.FC = () => {
  const [isChallengeAccepted, setIsChallengeAccepted] = useState(false);
  const [activeTier, setActiveTier] = useState<string>("tier-1");

  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="challenge"
      className="w-full py-28 bg-brand-charcoal/40 border-t border-brand-border/60 relative overflow-hidden"
    >
      {/* Background Lighting Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Giant Challenge Statement Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="gold" size="md" pulse icon={<MoustacheIcon size={18} />}>
              The Open Industry Challenge
            </Badge>
            <Badge variant="shapper" size="md">
              Anti-Shapper Guarantee
            </Badge>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-ivory tracking-tight mb-6 leading-tight">
            <span className="block text-gold-gradient">
              “{CATCHPHRASES.challenge}”
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-brand-ivory/90 font-light max-w-3xl mx-auto leading-relaxed mb-6">
            This is not an empty boast for social media applause. It is an open technical challenge to the construction sector across Pakistan: match our structural steel ratios, laser plumb alignment, and curing protocols or stop deceiving clients.
          </p>

          <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed mb-8">
            Click below to unlock our verified engineering standards, laboratory test thresholds, and inspection records.
          </p>

          {/* Interactive "ACCEPT THE CHALLENGE" Transition Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsChallengeAccepted(!isChallengeAccepted)}
              className={`relative px-8 py-4 rounded-xl font-serif text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-3 shadow-2xl ${
                isChallengeAccepted
                  ? "bg-brand-surface border-2 border-brand-gold text-brand-gold hover:bg-brand-charcoal"
                  : "bg-gold-gradient text-brand-black hover:brightness-110 hover:scale-[1.02] shadow-[0_0_35px_rgba(200,169,81,0.4)]"
              }`}
            >
              {isChallengeAccepted ? (
                <>
                  <MoustacheIcon size={20} />
                  <span>CHALLENGE ACCEPTED — REVEALING STANDARDS</span>
                  <span className="text-xs">▼</span>
                </>
              ) : (
                <>
                  <span>ACCEPT THE CHALLENGE</span>
                  <CaneIcon size={22} />
                  <span className="w-2 h-2 rounded-full bg-brand-black animate-ping" />
                </>
              )}
            </button>

            <Button
              variant="outline"
              size="lg"
              onClick={scrollToProjects}
              rightIcon={<span className="text-sm">→</span>}
              className="uppercase tracking-wider"
            >
              Skip To Projects
            </Button>
          </div>
        </div>

        {/* REVEALED CONTENT: Workmanship Evidence & Quality Standards */}
        {isChallengeAccepted && (
          <div className="mb-20 animate-fadeIn transition-all duration-700">
            <div className="rounded-2xl bg-gradient-to-b from-brand-charcoal via-brand-dark to-brand-black border-2 border-brand-gold/60 p-6 sm:p-10 shadow-[0_15px_60px_rgba(0,0,0,0.8)] relative">
              
              {/* Header inside revealed container */}
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-brand-border gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="gold" size="sm">
                      Audit Unlocked
                    </Badge>
                    <span className="text-xs font-mono text-brand-muted">
                      [Engineering Verification Matrix]
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory">
                    The 4 Pillars of Structural Superiority
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={scrollToProjects}
                    rightIcon={<span className="text-xs">→</span>}
                  >
                    See Verified Projects
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={scrollToEnquiry}
                  >
                    Request Free Audit
                  </Button>
                </div>
              </div>

              {/* Tier Selection Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                {CHALLENGE_PROOF_TIERS.map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setActiveTier(tier.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-1.5 ${
                      activeTier === tier.id
                        ? "bg-brand-surface border-brand-gold shadow-[0_0_15px_rgba(200,169,81,0.25)]"
                        : "bg-brand-black/60 border-brand-border/60 hover:border-brand-gold/40 text-brand-muted"
                    }`}
                  >
                    <span className="text-[10px] uppercase font-mono tracking-wider text-brand-gold">
                      {tier.title}
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-bold text-brand-ivory truncate">
                      {tier.metric}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Tier Detailed Proof Card */}
              {(() => {
                const tier =
                  CHALLENGE_PROOF_TIERS.find((t) => t.id === activeTier) ||
                  CHALLENGE_PROOF_TIERS[0];
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl bg-brand-surface/90 border border-brand-border/80">
                    {/* The Market Shortcut (What competitors do) */}
                    <div className="p-5 rounded-lg bg-red-950/25 border border-red-500/30 text-left">
                      <div className="flex items-center justify-between pb-3 border-b border-red-500/20 mb-3">
                        <span className="text-xs font-serif font-bold uppercase tracking-wider text-red-400">
                          The &apos;Shapper&apos; Shortcut
                        </span>
                        <span className="text-xs text-red-400">✕ Compromised</span>
                      </div>
                      <p className="text-xs sm:text-sm text-red-200/90 leading-relaxed">
                        {tier.marketShortcut}
                      </p>
                    </div>

                    {/* The Black Diamond Proof (Our Guarantee) */}
                    <div className="p-5 rounded-lg bg-brand-black border border-brand-gold/50 text-left flex flex-col justify-between shadow-inner">
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-brand-gold/30 mb-3">
                          <span className="text-xs font-serif font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1.5">
                            <MoustacheIcon size={16} />
                            <span>Black Diamond Standard</span>
                          </span>
                          <span className="text-xs text-brand-gold font-bold">✓ Guaranteed</span>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-ivory leading-relaxed">
                          {tier.blackDiamondProof}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-brand-border/60 flex items-center gap-2 text-xs text-brand-gold">
                        <CaneIcon size={18} />
                        <span className="italic">{tier.stickVerificationNote}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Sticky bottom CTA strip */}
              <div className="mt-8 pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span className="text-brand-muted">
                  Have an ongoing site or drawings? Bring them to our Islamabad/Rawalpindi desk.
                </span>
                <button
                  onClick={scrollToEnquiry}
                  className="text-brand-gold font-semibold uppercase tracking-wider hover:underline flex items-center gap-1"
                >
                  <span>Book Technical Drawing Audit</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* Quality Matrix (Always visible for accessibility) */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-brand-border/60 mb-8 gap-4">
            <div>
              <span className="text-xs uppercase font-serif font-bold tracking-widest text-brand-gold block">
                Evidence of Workmanship
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-ivory mt-1">
                The Anti-Shapper Quality Matrix
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-brand-muted">Inspected with the stick:</span>
              <CaneIcon size={22} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SHAPPER_COMPARISON.map((item, idx) => (
              <Card
                key={item.category}
                variant="default"
                hasFacetedCorner
                className="flex flex-col justify-between border-brand-border hover:border-brand-gold/60 transition-all duration-300 bg-brand-dark/95"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded bg-brand-charcoal border border-brand-gold/40 flex items-center justify-center text-brand-gold text-xs font-mono font-bold">
                        0{idx + 1}
                      </span>
                      <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-ivory">
                        {item.category}
                      </h4>
                    </div>
                    <CaneIcon size={20} />
                  </div>

                  {/* Shapper shortcut callout */}
                  <div className="mb-4 p-4 rounded-xl bg-red-950/20 border border-red-500/30 flex flex-col gap-1.5 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-red-400">
                        Market &apos;Shapper&apos; Shortcut
                      </span>
                      <span className="text-xs text-red-400 font-semibold">✕ Compromised</span>
                    </div>
                    <p className="text-xs sm:text-sm text-red-200/90 leading-relaxed">
                      {item.shapperStandard}
                    </p>
                  </div>

                  {/* Black Diamond Engineering Standard */}
                  <div className="p-4 rounded-xl bg-brand-charcoal/90 border border-brand-gold/40 flex flex-col gap-1.5 text-left shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold flex items-center gap-1.5">
                        <MoustacheIcon size={14} />
                        <span>Black Diamond Standard</span>
                      </span>
                      <span className="text-xs text-brand-gold font-bold">✓ Guaranteed</span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-ivory leading-relaxed">
                      {item.blackDiamondStandard}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between text-[11px] text-brand-muted">
                  <span>Digital Laser Level Precision</span>
                  <span className="text-brand-gold font-medium">100% Certified Steel Batch</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Signature Bottom Pledge Medallion */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-brand-black via-brand-charcoal to-brand-black border-2 border-brand-gold/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <ChallengeSeal size="sm" />
            <div>
              <span className="text-xs font-serif font-bold uppercase tracking-widest text-brand-gold">
                The Moustache Pledge
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-brand-ivory font-bold mt-1">
                “{CATCHPHRASES.moustachePledge}”
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted max-w-xl mt-2 leading-relaxed">
                If you have architectural drawings or an ongoing plot in Islamabad, Rawalpindi, or Bahria/DHA, bring your drawings for a direct structural audit. If our steel specs don&apos;t outperform the market, the audit is on us.
              </p>
            </div>
          </div>

          <Button
            variant="gold"
            size="md"
            onClick={scrollToProjects}
            rightIcon={<span className="text-sm">→</span>}
            className="shrink-0 uppercase tracking-wider"
          >
            SEE THE WORK
          </Button>
        </div>

      </div>
    </section>
  );
};
