"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { BRAND_INFO, CATCHPHRASES } from "@/data/brandData";
import { MultiStepEnquiryForm } from "@/components/leads/MultiStepEnquiryForm";
import { EstimatorSummary } from "@/types/leadTypes";

interface PrefillProps {
  onPrefill: (project: string, title: string) => void;
}

const SearchParamsHandler: React.FC<PrefillProps> = ({ onPrefill }) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const project = searchParams.get("project");
    const title = searchParams.get("title");
    if (project || title) {
      onPrefill(project || "", title || "");
    }
  }, [searchParams, onPrefill]);

  return null;
};

export const LeadGenerationSection: React.FC = () => {
  const [referencedProject, setReferencedProject] = useState<string | null>(null);
  const [initialPlotPreset, setInitialPlotPreset] = useState<string>("1-kanal");
  const [initialCity, setInitialCity] = useState<string>("Islamabad");
  const [estimatorSummary, setEstimatorSummary] = useState<EstimatorSummary | null>(null);

  const handlePrefill = (projectSlug: string, projectTitle: string) => {
    const label = projectTitle || projectSlug;
    setReferencedProject(label);

    let detectedPlot = "1-kanal";
    const lower = (projectSlug + " " + projectTitle).toLowerCase();
    if (lower.includes("10-marla") || lower.includes("10 marla")) detectedPlot = "10-marla";
    else if (lower.includes("2-kanal") || lower.includes("2 kanal")) detectedPlot = "2-kanal";
    else if (lower.includes("5-marla") || lower.includes("5 marla")) detectedPlot = "5-marla";
    else if (lower.includes("commercial")) detectedPlot = "commercial-custom";

    setInitialPlotPreset(detectedPlot);
  };

  // WhatsApp quick consult message
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    referencedProject
      ? `Assalam-o-Alaikum Black Diamond Builders, I am inquiring regarding a project similar to "${referencedProject}". Please connect me with Furqan Butt's senior engineering desk.`
      : `Assalam-o-Alaikum Black Diamond Builders Team, I would like to schedule an engineering consultation for my plot in Pakistan.`
  )}`;

  return (
    <section
      id="enquiry"
      className="w-full py-28 bg-brand-black border-t border-brand-border/60 relative overflow-hidden"
    >
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/4 right-1/3 w-[650px] h-[650px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-brand-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <Suspense fallback={null}>
        <SearchParamsHandler onPrefill={handlePrefill} />
      </Suspense>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prominent Headline: “APNA GHAR BANWANA HAI?” */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="gold" size="md" pulse icon={<MoustacheIcon size={18} />}>
              Direct Consultation Desk
            </Badge>
            <Badge variant="dark" size="md">
              Configurable Contact Line
            </Badge>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-ivory tracking-tight mb-4">
            <span className="text-gold-gradient block">
              {CATCHPHRASES.enquiryHeading}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            {CATCHPHRASES.enquirySubheading} Speak directly with Furqan Butt&apos;s senior engineering team—no evasive middlemen, no inflated rates, no shortcuts.
          </p>

          {/* Quick Contact Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(16,185,129,0.35)] flex items-center gap-2.5 transition-all hover:scale-[1.02]"
            >
              <span>Connect on WhatsApp</span>
              <span className="text-base">💬</span>
            </a>

            <a
              href={`tel:${BRAND_INFO.phoneDisplay.replace(/\s+/g, "")}`}
              className="px-6 py-3.5 rounded-xl bg-brand-charcoal border border-brand-border text-brand-ivory font-semibold text-sm uppercase tracking-wider hover:border-brand-gold hover:text-brand-gold transition-colors flex items-center gap-2"
            >
              <span>Call: {BRAND_INFO.phoneDisplay}</span>
              <span>📞</span>
            </a>
          </div>
        </div>

        {/* Lead Gen Form & Trust Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Multi-Step Form Container (7 Columns) */}
          <div className="lg:col-span-7">
            {referencedProject && (
              <div className="mb-4 p-3.5 rounded-xl bg-brand-gold/15 border border-brand-gold/50 flex items-center justify-between gap-3 text-xs text-left animate-fadeIn">
                <div className="flex items-center gap-2.5 text-brand-gold">
                  <span className="text-base">📌</span>
                  <span>
                    Inquiring about portfolio project: <strong className="text-brand-ivory">{referencedProject}</strong>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setReferencedProject(null)}
                  className="text-[11px] text-brand-muted hover:text-brand-gold-light underline uppercase tracking-wider shrink-0"
                >
                  Reset
                </button>
              </div>
            )}

            <MultiStepEnquiryForm
              initialEstimatorSummary={estimatorSummary}
              initialPlotPreset={initialPlotPreset}
              initialCity={initialCity}
            />
          </div>

          {/* Right Column: Direct Contact & Guarantees (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-28">
            
            {/* Direct WhatsApp Callout Card */}
            <Card variant="challenge" padding="lg">
              <div className="flex flex-col gap-4 text-left">
                <div className="flex items-center justify-between">
                  <Badge variant="gold" size="sm">
                    Instant Channel
                  </Badge>
                  <MoustacheIcon size={24} />
                </div>

                <h4 className="font-serif text-2xl font-bold text-brand-ivory leading-snug">
                  Prefer a Direct WhatsApp Consultation?
                </h4>

                <p className="text-xs text-brand-muted leading-relaxed">
                  Skip the form and message our technical coordinator directly. Share your plot dimensions, society location, or preliminary architectural drawings for an instant structural opinion.
                </p>

                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-xl transition-all hover:scale-[1.01]"
                  >
                    <span>Message WhatsApp Core Desk</span>
                    <span className="text-base">💬</span>
                  </a>
                </div>

                <div className="pt-3 border-t border-brand-border/60 text-[11px] text-brand-gold flex items-center justify-between">
                  <span>Direct Desk Number:</span>
                  <span className="font-mono text-brand-ivory">{BRAND_INFO.phoneDisplay}</span>
                </div>
              </div>
            </Card>

            {/* The Black Diamond Guarantee Perks Card */}
            <Card variant="glass" padding="md" className="border-brand-border text-left">
              <div className="flex items-center gap-3 pb-4 border-b border-brand-border/60">
                <CaneIcon size={26} />
                <div>
                  <h4 className="font-serif text-base font-bold text-brand-ivory">
                    The Black Diamond Guarantee
                  </h4>
                  <p className="text-[10px] text-brand-gold uppercase tracking-wider font-semibold">
                    Radical Engineering Honesty
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3.5 py-4 text-xs text-brand-muted">
                <div className="flex items-start gap-2.5">
                  <span className="text-brand-gold font-bold">✓</span>
                  <div>
                    <strong className="text-brand-ivory block text-xs">
                      100% Certified Prime Grade 60 Steel
                    </strong>
                    All steel rebar is sourced directly from certified mills with verifiable batch test certificates. Caliper verified before casting.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-brand-gold font-bold">✓</span>
                  <div>
                    <strong className="text-brand-ivory block text-xs">
                      Multi-Axis Laser Plumb Walls
                    </strong>
                    Every single wall course is checked with digital laser projections. Zero wedge-shaped plaster compensation.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-brand-gold font-bold">✓</span>
                  <div>
                    <strong className="text-brand-ivory block text-xs">
                      Audited by Furqan Butt&apos;s Stick
                    </strong>
                    Personal physical site checks. If any plaster panel rings hollow, the wall is demolished and built right.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-brand-gold font-bold">✓</span>
                  <div>
                    <strong className="text-brand-ivory block text-xs">
                      Escrow Milestone Billing
                    </strong>
                    Overseas clients release payments only after unedited 4K video proof and milestone sign-off.
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-[11px] text-brand-muted">
                <span>Working in:</span>
                <span className="text-brand-ivory font-mono">Islamabad &amp; Rawalpindi</span>
              </div>
            </Card>

          </div>

        </div>

      </div>
    </section>
  );
};
