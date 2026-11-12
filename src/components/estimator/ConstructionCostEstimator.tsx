"use client";

import React, { useState, useMemo } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import {
  ESTIMATOR_CONFIG,
  calculateIndicativeEstimate,
  PlotPreset,
} from "@/data/estimatorRates";
import { EstimatorSummary } from "@/types/leadTypes";

interface ConstructionCostEstimatorProps {
  onTransferToEnquiry?: (summary: EstimatorSummary, plotPresetId: string, city: string) => void;
}

export const ConstructionCostEstimator: React.FC<ConstructionCostEstimatorProps> = ({
  onTransferToEnquiry,
}) => {
  const [selectedCity, setSelectedCity] = useState("Islamabad");
  const [selectedPlotPreset, setSelectedPlotPreset] = useState("1-kanal");
  const [isCustomArea, setIsCustomArea] = useState(false);
  const [customCoveredArea, setCustomCoveredArea] = useState<number>(5900);
  const [scopeId, setScopeId] = useState<"grey-structure" | "complete-finishing" | "turnkey-luxury">(
    "turnkey-luxury"
  );
  const [tierId, setTierId] = useState<"executive-standard" | "luxury-signature" | "ultra-monolith">(
    "luxury-signature"
  );
  const [showAssumptionsModal, setShowAssumptionsModal] = useState(false);
  const [hasTransferred, setHasTransferred] = useState(false);

  // Active plot preset details
  const currentPreset = useMemo<PlotPreset>(() => {
    return (
      ESTIMATOR_CONFIG.plotPresets.find((p) => p.id === selectedPlotPreset) ||
      ESTIMATOR_CONFIG.plotPresets[3]
    );
  }, [selectedPlotPreset]);

  // Determine effective covered area
  const effectiveCoveredArea = useMemo(() => {
    if (isCustomArea) {
      return customCoveredArea > 0 ? customCoveredArea : currentPreset.typicalCoveredAreaSqFt;
    }
    return currentPreset.typicalCoveredAreaSqFt;
  }, [isCustomArea, customCoveredArea, currentPreset]);

  // When plot preset changes, reset or update custom area preview
  const handlePlotSelect = (preset: PlotPreset) => {
    setSelectedPlotPreset(preset.id);
    if (!isCustomArea) {
      setCustomCoveredArea(preset.typicalCoveredAreaSqFt);
    }
  };

  // Perform calculation via administrator-configured engine
  const calculation = useMemo(() => {
    return calculateIndicativeEstimate({
      coveredAreaSqFt: effectiveCoveredArea,
      scopeId,
      tierId,
      city: selectedCity,
    });
  }, [effectiveCoveredArea, scopeId, tierId, selectedCity]);

  // Selected Scope & Tier objects
  const activeScope = ESTIMATOR_CONFIG.scopeRates[scopeId];
  const activeTier = activeScope.tiers[tierId];

  // Handler for Transferring to Enquiry Form
  const handleGetDetailedQuotation = () => {
    const summary: EstimatorSummary = {
      coveredAreaSqFt: effectiveCoveredArea,
      scopeId,
      scopeLabel: activeScope.label,
      tierId,
      tierName: activeTier.name,
      minTotalPkr: calculation.minTotalPkr,
      maxTotalPkr: calculation.maxTotalPkr,
      formattedRange: `${calculation.formattedMin} – ${calculation.formattedMax}`,
    };

    setHasTransferred(true);
    setTimeout(() => setHasTransferred(false), 3000);

    if (onTransferToEnquiry) {
      onTransferToEnquiry(summary, selectedPlotPreset, selectedCity);
    } else {
      // Dispatch custom DOM event so the Lead Generation form can listen
      const event = new CustomEvent("bdb:estimator-transferred", {
        detail: { summary, plotPresetId: selectedPlotPreset, city: selectedCity },
      });
      window.dispatchEvent(event);

      const target = document.getElementById("enquiry-form-card") || document.getElementById("enquiry");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="estimator" className="w-full py-20 bg-brand-black border-t border-brand-border/60 relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-brand-gold/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-gold/8 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge variant="gold" size="md" icon={<CaneIcon size={16} />}>
              Indicative Construction Estimator
            </Badge>
            <Badge variant="dark" size="sm">
              Index: {ESTIMATOR_CONFIG.lastUpdatedDate}
            </Badge>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ivory tracking-tight mb-4">
            Transparent Cost Estimation
          </h2>
          <p className="text-sm sm:text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Calculate benchmark construction figures based on verified Grade 60 steel and laser-plumb masonry rates. No hidden contractor margins; authentic engineering baseline.
          </p>
        </div>

        {/* Main Grid: Controls on Left, Live Financial Output on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Card variant="gold-rim" hasFacetedCorner padding="lg" className="bg-brand-charcoal/80 shadow-2xl">
              
              {/* Step 1: Location & Sector Factor */}
              <div className="pb-6 border-b border-brand-border/60">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs uppercase font-serif font-bold tracking-widest text-brand-gold">
                    1. Project City &amp; Region
                  </label>
                  <span className="text-[11px] text-brand-muted font-mono">
                    Logistics factor: {calculation.cityMultiplier}x
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {ESTIMATOR_CONFIG.cityFactors.map((cf) => (
                    <button
                      key={cf.city}
                      type="button"
                      onClick={() => setSelectedCity(cf.city)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left border transition-all ${
                        selectedCity === cf.city
                          ? "bg-brand-gold/15 border-brand-gold text-brand-ivory font-bold shadow-[0_0_15px_rgba(212,175,55,0.15)]"
                          : "bg-brand-surface/60 border-brand-border/60 text-brand-muted hover:border-brand-border hover:text-brand-ivory"
                      }`}
                    >
                      <div className="truncate">{cf.city}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Plot Size Presets */}
              <div className="py-6 border-b border-brand-border/60">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs uppercase font-serif font-bold tracking-widest text-brand-gold">
                    2. Select Plot Size
                  </label>
                  <span className="text-[11px] text-brand-muted font-mono">
                    {currentPreset.typicalDimensions} ({currentPreset.plotAreaSqFt} sq.ft land)
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {ESTIMATOR_CONFIG.plotPresets.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handlePlotSelect(preset)}
                      className={`p-2.5 rounded-xl text-center border transition-all flex flex-col items-center justify-center ${
                        selectedPlotPreset === preset.id
                          ? "bg-brand-gold text-brand-black border-brand-gold font-bold shadow-lg scale-[1.02]"
                          : "bg-brand-surface border-brand-border/70 text-brand-muted hover:border-brand-gold/50 hover:text-brand-ivory"
                      }`}
                    >
                      <span className="text-xs font-serif leading-tight">{preset.label}</span>
                      <span className="text-[9px] opacity-75 mt-0.5 font-mono">
                        {preset.id === "commercial-custom" ? "Custom" : preset.typicalDimensions}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Covered Area Slider & Override Toggle */}
                <div className="mt-5 p-4 rounded-xl bg-brand-surface/90 border border-brand-border flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-brand-ivory block">
                        Estimated Covered Area:
                      </span>
                      <span className="text-[11px] text-brand-muted">
                        Double-story standard municipal permissible ratio
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-base font-serif font-bold text-brand-gold font-mono">
                        {effectiveCoveredArea.toLocaleString()}
                      </span>
                      <span className="text-xs text-brand-muted">sq.ft</span>
                    </div>
                  </div>

                  {/* Manual Area Override Control */}
                  <div className="flex items-center gap-3 pt-2 border-t border-brand-border/40">
                    <input
                      type="range"
                      min={800}
                      max={15000}
                      step={50}
                      value={effectiveCoveredArea}
                      onChange={(e) => {
                        setIsCustomArea(true);
                        setCustomCoveredArea(Number(e.target.value));
                      }}
                      className="w-full h-1.5 bg-brand-charcoal rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    />
                    {isCustomArea && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsCustomArea(false);
                          setCustomCoveredArea(currentPreset.typicalCoveredAreaSqFt);
                        }}
                        className="text-[10px] text-brand-muted hover:text-brand-gold underline shrink-0"
                      >
                        Reset Default
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 3: Construction Scope Selector */}
              <div className="py-6 border-b border-brand-border/60">
                <label className="text-xs uppercase font-serif font-bold tracking-widest text-brand-gold block mb-3">
                  3. Construction Scope
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {(["turnkey-luxury", "grey-structure", "complete-finishing"] as const).map(
                    (scopeKey) => {
                      const item = ESTIMATOR_CONFIG.scopeRates[scopeKey];
                      const isSelected = scopeId === scopeKey;
                      return (
                        <button
                          key={scopeKey}
                          type="button"
                          onClick={() => setScopeId(scopeKey)}
                          className={`p-3.5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? "bg-gradient-to-b from-brand-charcoal to-brand-surface border-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.18)]"
                              : "bg-brand-surface/40 border-brand-border/60 text-brand-muted hover:border-brand-border hover:text-brand-ivory"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span
                              className={`text-xs font-serif font-bold ${
                                isSelected ? "text-brand-gold" : "text-brand-ivory"
                              }`}
                            >
                              {item.label}
                            </span>
                            {scopeKey === "turnkey-luxury" && (
                              <Badge variant="gold" size="sm">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <p className="text-[10px] text-brand-muted line-clamp-2 leading-relaxed">
                            {item.description}
                          </p>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* Step 4: Quality & Specification Tier */}
              <div className="pt-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs uppercase font-serif font-bold tracking-widest text-brand-gold">
                    4. Material &amp; Specification Tier
                  </label>
                  <span className="text-[11px] text-brand-muted font-mono">
                    Grade 60 steel across all tiers
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(["executive-standard", "luxury-signature", "ultra-monolith"] as const).map(
                    (tKey) => {
                      const tier = activeScope.tiers[tKey];
                      const isSelected = tierId === tKey;
                      return (
                        <button
                          key={tKey}
                          type="button"
                          onClick={() => setTierId(tKey)}
                          className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                            isSelected
                              ? "bg-brand-surface border-brand-gold shadow-[0_4px_25px_rgba(212,175,55,0.2)]"
                              : "bg-brand-surface/30 border-brand-border/60 text-brand-muted hover:border-brand-border"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span
                                className={`text-xs font-serif font-bold ${
                                  isSelected ? "text-brand-gold" : "text-brand-ivory"
                                }`}
                              >
                                {tier.name}
                              </span>
                              {tKey === "luxury-signature" && (
                                <Badge variant="gold" size="sm">
                                  Signature
                                </Badge>
                              )}
                            </div>
                            <span className="text-[10px] text-brand-gold/90 font-mono block mb-2">
                              Rs. {tier.ratePerSqFtMin.toLocaleString()} - {tier.ratePerSqFtMax.toLocaleString()}/sq.ft
                            </span>
                            <p className="text-[10px] text-brand-muted leading-relaxed line-clamp-2 mb-2">
                              {tier.tagline}
                            </p>
                          </div>

                          <div className="mt-2 pt-2 border-t border-brand-border/40 text-[9px] text-brand-muted">
                            <span className="text-brand-gold mr-1">✓</span>
                            <span>{tier.highlights[0]}</span>
                          </div>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

            </Card>
          </div>

          {/* Output & Conversion Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sticky top-28">
            
            {/* Indicative Estimate Card */}
            <Card variant="gold-rim" hasFacetedCorner padding="lg" className="bg-gradient-to-b from-brand-charcoal via-brand-dark to-brand-black shadow-2xl text-left border-brand-gold/70">
              
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center text-brand-gold">
                    <MoustacheIcon size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-serif tracking-widest text-brand-gold font-bold block">
                      Estimated Cost Envelope
                    </span>
                    <span className="text-xs font-medium text-brand-ivory">
                      {selectedCity} • {currentPreset.label}
                    </span>
                  </div>
                </div>

                <Badge variant="outline" size="sm">
                  {activeTier.name}
                </Badge>
              </div>

              {/* Big Price Range Banner */}
              <div className="py-6 text-center border-b border-brand-border/60">
                <span className="text-[11px] uppercase tracking-wider text-brand-muted block mb-1">
                  Indicative Construction Budget Range
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-gradient tracking-tight">
                  {calculation.formattedMin} – {calculation.formattedMax}
                </div>
                <div className="mt-2 flex items-center justify-center gap-2 text-xs text-brand-muted font-mono">
                  <span>Effective Benchmark:</span>
                  <span className="text-brand-ivory font-bold">
                    Rs. {calculation.minRatePerSqFt.toLocaleString()} - {calculation.maxRatePerSqFt.toLocaleString()} / sq.ft
                  </span>
                </div>
              </div>

              {/* Detailed Breakdown Metrics */}
              <div className="py-4 space-y-2.5 text-xs text-brand-muted border-b border-brand-border/60">
                <div className="flex items-center justify-between">
                  <span>Selected Scope:</span>
                  <strong className="text-brand-ivory">{activeScope.label}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Quality Standard:</span>
                  <strong className="text-brand-gold">{activeTier.name}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Calculated Covered Area:</span>
                  <span className="font-mono text-brand-ivory">
                    {effectiveCoveredArea.toLocaleString()} sq.ft
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Structural Steel Standard:</span>
                  <span className="text-emerald-400 font-semibold">100% Prime Grade 60</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Curing &amp; Plumb Protocol:</span>
                  <span className="text-brand-ivory">14-Day Ponding + Laser Alignment</span>
                </div>
              </div>

              {/* Key Inclusions Preview */}
              <div className="pt-4 pb-2">
                <span className="text-[10px] uppercase font-semibold text-brand-gold tracking-widest block mb-2">
                  Key Inclusions in {activeTier.name}:
                </span>
                <ul className="space-y-1.5 text-[11px] text-brand-muted">
                  {activeTier.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-gold">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transparency Links */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-border/60 text-[11px]">
                <button
                  type="button"
                  onClick={() => setShowAssumptionsModal(true)}
                  className="text-brand-gold hover:text-brand-gold-light underline flex items-center gap-1"
                >
                  <span>View Assumptions &amp; Exclusions</span>
                  <span>ℹ️</span>
                </button>
                <span className="text-brand-muted font-mono text-[10px]">
                  Verified Rates
                </span>
              </div>

              {/* Primary Call to Action Button */}
              <div className="mt-6">
                <Button
                  variant="gold"
                  size="lg"
                  fullWidth
                  onClick={handleGetDetailedQuotation}
                  rightIcon={<CaneIcon size={18} />}
                  className="uppercase tracking-wider font-bold shadow-xl hover:scale-[1.01]"
                >
                  {hasTransferred ? "✓ Transferred to Enquiry" : "GET A DETAILED QUOTATION"}
                </Button>
                <span className="text-[10px] text-brand-muted text-center block mt-2">
                  Transfers your {currentPreset.label} &amp; {activeScope.label} specs directly to Furqan Butt&apos;s senior engineering desk.
                </span>
              </div>

            </Card>

            {/* Transparent Disclaimer Box */}
            <div className="p-4 rounded-xl bg-brand-surface/60 border border-brand-border/60 text-left">
              <div className="flex items-start gap-2.5">
                <span className="text-brand-gold text-base">⚖️</span>
                <p className="text-[11px] text-brand-muted leading-relaxed">
                  <strong className="text-brand-ivory">Transparency Commitment:</strong> {ESTIMATOR_CONFIG.disclaimer}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Assumptions & Exclusions Modal */}
      {showAssumptionsModal && (
        <div className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-brand-dark border-2 border-brand-gold/60 rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setShowAssumptionsModal(false)}
              className="absolute top-5 right-5 text-brand-muted hover:text-brand-ivory text-xl p-1"
              aria-label="Close Modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Badge variant="gold" size="sm">
                Engineering Assumptions
              </Badge>
              <Badge variant="dark" size="sm">
                Last Updated: {ESTIMATOR_CONFIG.lastUpdatedDate}
              </Badge>
            </div>

            <h3 className="font-serif text-2xl font-bold text-brand-ivory mb-4">
              Cost Calculation Assumptions &amp; Exclusions
            </h3>

            <p className="text-xs text-brand-muted leading-relaxed mb-6">
              Unlike speculative contractors who quote deceptively low rates and introduce surprise bill escalations mid-project, Black Diamond Builders operates on radical engineering honesty. Here are the baseline boundaries:
            </p>

            {/* Assumptions List */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-serif tracking-widest text-brand-gold font-bold mb-3 flex items-center gap-1.5">
                <span>✓ Included Assumptions:</span>
              </h4>
              <ul className="space-y-2 text-xs text-brand-muted">
                {ESTIMATOR_CONFIG.assumptions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold text-sm">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions List */}
            <div className="mb-6 pt-4 border-t border-brand-border">
              <h4 className="text-xs uppercase font-serif tracking-widest text-brand-gold font-bold mb-3 flex items-center gap-1.5">
                <span>✕ Standard Exclusions (Budgeted Separately):</span>
              </h4>
              <ul className="space-y-2 text-xs text-brand-muted">
                {ESTIMATOR_CONFIG.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold text-sm">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-brand-border flex justify-end">
              <Button
                variant="gold"
                size="sm"
                onClick={() => setShowAssumptionsModal(false)}
              >
                Close &amp; Return to Estimator
              </Button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
