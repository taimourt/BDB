"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { SHAPPER_COMPARISON, CATCHPHRASES } from "@/data/brandData";

export const ChallengeManifesto: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <section id="manifesto" className="w-full py-24 bg-brand-dark/50 border-t border-brand-border/60 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="shapper" size="md">
              The Anti-Shapper Manifesto
            </Badge>
            <Badge variant="gold" size="md" icon={<CaneIcon size={16} />}>
              The Stick Audit
            </Badge>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ivory mb-6 tracking-tight">
            Why We Call Bad Builders{" "}
            <span className="text-red-400 underline decoration-red-500/40 underline-offset-8">
              “Shapper”
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            In Pakistani street slang, a <em>shapper</em> is a flimsy polythene shopping bag that tears at the slightest pressure. Furqan Butt coined this term for contractors who cut corners with substandard steel, unwashed sand, and hollow plaster. Here is how Black Diamond Builders crushes those shortcuts:
          </p>
        </div>

        {/* 4-Item Quality Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SHAPPER_COMPARISON.map((item, idx) => (
            <Card
              key={item.category}
              variant="default"
              hasFacetedCorner
              className="flex flex-col justify-between border-brand-border hover:border-brand-gold/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-brand-charcoal border border-brand-gold/40 flex items-center justify-center text-brand-gold text-xs font-mono font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-ivory">
                      {item.category}
                    </h3>
                  </div>
                  <CaneIcon size={20} />
                </div>

                {/* The Shapper Shortcut (Danger box) */}
                <div className="mb-4 p-4 rounded bg-red-950/20 border border-red-500/30 flex flex-col gap-1.5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-red-400">
                      Market &quot;Shapper&quot; Practice
                    </span>
                    <span className="text-xs text-red-400">✕ Compromise</span>
                  </div>
                  <p className="text-xs sm:text-sm text-red-200/90 leading-relaxed">
                    {item.shapperStandard}
                  </p>
                </div>

                {/* The Black Diamond Engineering Standard (Gold box) */}
                <div className="p-4 rounded bg-brand-charcoal/90 border border-brand-gold/40 flex flex-col gap-1.5 text-left shadow-inner">
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

              {/* Card Footer Note */}
              <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center justify-between text-[11px] text-brand-muted">
                <span>Inspected on-site with laser levels</span>
                <span className="text-brand-gold font-medium">100% Transparent BOQ</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Challenge Callout Strip */}
        <div className="mt-14 p-8 rounded-xl bg-gradient-to-r from-brand-black via-brand-charcoal to-brand-black border border-brand-gold/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex shrink-0">
              <MoustacheIcon size={42} />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-brand-ivory font-bold">
                “{CATCHPHRASES.moustachePledge}”
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted mt-1">
                Have an existing plot in Islamabad, Rawalpindi, or Bahria/DHA? Bring your structural drawings for a free anti-shapper audit.
              </p>
            </div>
          </div>

          <Button
            variant="gold"
            size="md"
            onClick={() => {
              const el = document.getElementById("consultation");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            rightIcon={<CaneIcon size={18} />}
            className="shrink-0"
          >
            Request Drawing Audit
          </Button>
        </div>

      </div>
    </section>
  );
};
