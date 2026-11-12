"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { OWNER_PERSONA } from "@/data/brandData";

export const SignatureIntroduction: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"man" | "mission" | "method">("man");

  return (
    <section id="persona" className="w-full py-24 bg-brand-dark/70 border-t border-brand-border/60 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge variant="gold" size="sm" pulse>
              The Brand Persona
            </Badge>
            <Badge variant="dark" size="sm">
              Leadership &amp; Standards
            </Badge>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ivory tracking-tight mb-4">
            {OWNER_PERSONA.sectionTitle}
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            {OWNER_PERSONA.subtitle}
          </p>

          {/* Interactive Navigation Pills for Mobile / Quick Selection */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 rounded-full bg-brand-charcoal/80 border border-brand-border max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("man")}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-serif font-bold uppercase tracking-wider transition-all ${
                activeTab === "man"
                  ? "bg-gold-gradient text-brand-black shadow-md"
                  : "text-brand-muted hover:text-brand-ivory"
              }`}
            >
              The Man
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-serif font-bold uppercase tracking-wider transition-all ${
                activeTab === "mission"
                  ? "bg-gold-gradient text-brand-black shadow-md"
                  : "text-brand-muted hover:text-brand-ivory"
              }`}
            >
              The Mission
            </button>
            <button
              onClick={() => setActiveTab("method")}
              className={`flex-1 py-2 px-4 rounded-full text-xs font-serif font-bold uppercase tracking-wider transition-all ${
                activeTab === "method"
                  ? "bg-gold-gradient text-brand-black shadow-md"
                  : "text-brand-muted hover:text-brand-ivory"
              }`}
            >
              The Method
            </button>
          </div>
        </div>

        {/* 3 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: THE MAN */}
          <Card
            variant={activeTab === "man" ? "challenge" : "default"}
            hasFacetedCorner
            padding="lg"
            className={`flex flex-col justify-between transition-all duration-300 ${
              activeTab === "man" ? "scale-[1.02] border-brand-gold" : "hover:border-brand-gold/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">
                  01 / IDENTITY
                </span>
                <MoustacheIcon size={28} />
              </div>

              <h3 className="font-serif text-2xl font-bold text-brand-ivory mb-2">
                {OWNER_PERSONA.theMan.title}
              </h3>
              <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider mb-4">
                {OWNER_PERSONA.theMan.tagline}
              </p>

              <p className="text-sm text-brand-muted leading-relaxed mb-6">
                {OWNER_PERSONA.theMan.bio}
              </p>

              <div className="pt-4 border-t border-brand-border/60 flex flex-col gap-2.5">
                <span className="text-[11px] uppercase font-bold tracking-wider text-brand-ivory">
                  Signature Persona Markers:
                </span>
                {OWNER_PERSONA.theMan.signatureTraits.map((trait, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-muted">
                    <span className="text-brand-gold font-bold text-xs mt-0.5">◆</span>
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-gold">
              <span>On-Site Presence</span>
              <span>100% Authentic</span>
            </div>
          </Card>

          {/* Card 2: THE MISSION */}
          <Card
            variant={activeTab === "mission" ? "challenge" : "default"}
            hasFacetedCorner
            padding="lg"
            className={`flex flex-col justify-between transition-all duration-300 ${
              activeTab === "mission" ? "scale-[1.02] border-brand-gold" : "hover:border-brand-gold/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">
                  02 / PURPOSE
                </span>
                <Badge variant="shapper" size="sm">Anti-Shapper</Badge>
              </div>

              <h3 className="font-serif text-2xl font-bold text-brand-ivory mb-2">
                {OWNER_PERSONA.theMission.title}
              </h3>
              <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider mb-4">
                {OWNER_PERSONA.theMission.tagline}
              </p>

              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                {OWNER_PERSONA.theMission.bio}
              </p>

              {/* Manifesto Quote Box */}
              <div className="p-4 rounded bg-brand-charcoal border border-brand-gold/30 mb-6 italic text-xs text-brand-ivory leading-relaxed">
                “{OWNER_PERSONA.theMission.manifesto}”
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <span className="text-[11px] uppercase font-bold tracking-wider text-brand-ivory">
                  Core Consumer Pledges:
                </span>
                {OWNER_PERSONA.theMission.keyCommitments.map((commit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-muted">
                    <span className="text-emerald-400 font-bold text-xs mt-0.5">✓</span>
                    <span>{commit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-gold">
              <span>Consumer Advocacy</span>
              <span>Generational Safety</span>
            </div>
          </Card>

          {/* Card 3: THE METHOD */}
          <Card
            variant={activeTab === "method" ? "challenge" : "default"}
            hasFacetedCorner
            padding="lg"
            className={`flex flex-col justify-between transition-all duration-300 ${
              activeTab === "method" ? "scale-[1.02] border-brand-gold" : "hover:border-brand-gold/40"
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">
                  03 / RIGOR
                </span>
                <CaneIcon size={24} />
              </div>

              <h3 className="font-serif text-2xl font-bold text-brand-ivory mb-2">
                {OWNER_PERSONA.theMethod.title}
              </h3>
              <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider mb-4">
                {OWNER_PERSONA.theMethod.tagline}
              </p>

              <p className="text-sm text-brand-muted leading-relaxed mb-6">
                {OWNER_PERSONA.theMethod.protocol}
              </p>

              <div className="pt-4 border-t border-brand-border/60 flex flex-col gap-2.5">
                <span className="text-[11px] uppercase font-bold tracking-wider text-brand-ivory">
                  The Stick Audit Discipline:
                </span>
                {OWNER_PERSONA.theMethod.inspectionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-muted">
                    <span className="text-brand-gold font-bold text-xs mt-0.5">◈</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-gold">
              <span>Scientific Execution</span>
              <span>Zero Hollow Plaster</span>
            </div>
          </Card>

        </div>

        {/* Bottom Persona Seal Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-brand-black via-brand-charcoal to-brand-black border border-brand-gold/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex shrink-0">
              <CaneIcon size={38} />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl text-brand-ivory font-bold">
                “Bunyaad mazboot ho to chat kabi nahi girti.”
              </h4>
              <p className="text-xs text-brand-muted mt-1">
                Editable biographical and philosophical framework — fully customizable as Black Diamond Builders evolves.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs uppercase font-serif tracking-widest text-brand-gold font-bold">
              Furqan Butt Verified
            </span>
            <MoustacheIcon size={24} />
          </div>
        </div>

      </div>
    </section>
  );
};
