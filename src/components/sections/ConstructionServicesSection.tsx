"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { CONSTRUCTION_SERVICES } from "@/data/brandData";

export const ConstructionServicesSection: React.FC = () => {
  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="w-full py-24 bg-brand-dark/60 border-t border-brand-border/60 relative overflow-hidden"
    >
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-brand-gold/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="gold" size="sm" pulse>
                Verified Capabilities
              </Badge>
              <Badge variant="dark" size="sm">
                Real Offerings Only
              </Badge>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ivory leading-tight">
              Construction Services
            </h2>

            <p className="text-sm sm:text-base text-brand-muted max-w-2xl leading-relaxed">
              We do not claim to do everything under the sun. We focus strictly on the disciplines where engineering precision and personal on-site oversight create unmatched generational value.
            </p>
          </div>

          <Button
            variant="gold"
            size="md"
            onClick={scrollToEnquiry}
            rightIcon={<MoustacheIcon size={18} />}
            className="shrink-0 uppercase tracking-wider"
          >
            Get Custom Service Estimate
          </Button>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CONSTRUCTION_SERVICES.map((service, idx) => (
            <Card
              key={service.id}
              variant={service.isPopular ? "gold-rim" : "default"}
              hasFacetedCorner
              padding="lg"
              className={`flex flex-col justify-between group transition-all duration-300 bg-brand-dark/95 ${
                service.isPopular ? "border-brand-gold/50" : "hover:border-brand-gold/50"
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded bg-brand-charcoal border border-brand-gold/40 flex items-center justify-center text-brand-gold text-xs font-mono font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs uppercase font-serif tracking-widest text-brand-gold font-bold">
                      {service.tagline}
                    </span>
                  </div>

                  {service.isPopular ? (
                    <Badge variant="gold" size="sm">
                      Core Specialty
                    </Badge>
                  ) : (
                    <CaneIcon size={20} />
                  )}
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-brand-ivory group-hover:text-brand-gold-light transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border/80 mb-6 flex flex-col gap-2">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-brand-ivory mb-1">
                    Verified Deliverables:
                  </span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-brand-muted">
                      <span className="text-brand-gold font-bold text-xs mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with Highlight */}
              <div className="pt-4 border-t border-brand-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-brand-gold font-medium flex items-center gap-1.5">
                  <MoustacheIcon size={16} />
                  <span>{service.highlight}</span>
                </span>

                <button
                  onClick={scrollToEnquiry}
                  className="text-brand-ivory hover:text-brand-gold font-semibold uppercase tracking-wider text-xs transition-colors flex items-center gap-1 self-start sm:self-auto"
                >
                  <span>Select Scope</span>
                  <span>→</span>
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Custom Service Note Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-brand-charcoal/70 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0 hidden sm:flex">
              <CaneIcon size={26} />
            </div>
            <div>
              <h4 className="font-serif text-lg text-brand-ivory font-bold">
                Need a Bespoke Construction Scope?
              </h4>
              <p className="text-xs text-brand-muted mt-1">
                All service modules and contracts are fully editable in our client agreement system with guaranteed milestone billings.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="md"
            onClick={scrollToEnquiry}
            className="shrink-0 uppercase tracking-wider"
          >
            Request Custom Scope
          </Button>
        </div>

      </div>
    </section>
  );
};
