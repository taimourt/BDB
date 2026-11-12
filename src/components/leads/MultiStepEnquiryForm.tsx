"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { BRAND_INFO } from "@/data/brandData";
import {
  LeadFormData,
  ServiceNeed,
  ConstructionStage,
  PreferredContactMethod,
  EstimatorSummary,
  LeadSubmissionResponse,
} from "@/types/leadTypes";

interface MultiStepEnquiryFormProps {
  initialEstimatorSummary?: EstimatorSummary | null;
  initialPlotPreset?: string;
  initialCity?: string;
}

const COUNTRY_CODES = [
  { code: "+92", country: "Pakistan (PK)" },
  { code: "+44", country: "United Kingdom (UK)" },
  { code: "+1", country: "United States / Canada (US/CA)" },
  { code: "+971", country: "United Arab Emirates (UAE)" },
  { code: "+966", country: "Saudi Arabia (KSA)" },
  { code: "+974", country: "Qatar (QA)" },
  { code: "+968", country: "Oman (OM)" },
  { code: "+965", country: "Kuwait (KW)" },
  { code: "+61", country: "Australia (AU)" },
  { code: "+49", country: "Germany (DE)" },
  { code: "+39", country: "Italy (IT)" },
];

export const MultiStepEnquiryForm: React.FC<MultiStepEnquiryFormProps> = ({
  initialEstimatorSummary,
  initialPlotPreset,
  initialCity,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submissionResult, setSubmissionResult] = useState<LeadSubmissionResponse | null>(null);
  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<LeadFormData>({
    serviceNeed: "turnkey-luxury" as ServiceNeed,
    serviceNeedCustom: "",
    city: initialCity || "Islamabad",
    customCity: "",
    areaLocation: "",
    plotPreset: initialPlotPreset || "1-kanal",
    isCustomDimensions: false,
    customDimensions: {
      lengthFeet: 50,
      widthFeet: 90,
      customUnit: "marla",
      customValue: 20,
    },
    constructionStage: "planning-design",
    approxCoveredAreaSqFt: initialEstimatorSummary
      ? String(initialEstimatorSummary.coveredAreaSqFt)
      : "5900",
    budgetRange: "PKR 2.5 - 4.5 Crore",
    expectedStartDate: "1-3 Months",
    additionalRequirements: "",
    isOverseasClient: false,
    countryOfResidence: "United Kingdom",
    fullName: "",
    countryCode: "+92",
    phone: "",
    email: "",
    preferredContactMethod: "whatsapp",
    consentGiven: false,
    estimatorSummary: initialEstimatorSummary || undefined,
    botTrapWebsite: "",
    formLoadTimestamp: Date.now(),
  });

  // Listen for external estimator transfer events
  useEffect(() => {
    const handleEstimatorTransferred = (e: any) => {
      const detail = e.detail;
      if (detail && detail.summary) {
        setFormData((prev) => ({
          ...prev,
          estimatorSummary: detail.summary,
          plotPreset: detail.plotPresetId || prev.plotPreset,
          city: detail.city || prev.city,
          approxCoveredAreaSqFt: String(detail.summary.coveredAreaSqFt),
          serviceNeed:
            detail.summary.scopeId === "grey-structure"
              ? "grey-structure"
              : detail.summary.scopeId === "complete-finishing"
              ? "complete-finishing"
              : "new-house",
          budgetRange: detail.summary.formattedRange,
        }));
      }
    };

    window.addEventListener("bdb:estimator-transferred", handleEstimatorTransferred);
    return () =>
      window.removeEventListener("bdb:estimator-transferred", handleEstimatorTransferred);
  }, []);

  // Sync props if changed externally
  useEffect(() => {
    if (initialEstimatorSummary) {
      setFormData((prev) => ({
        ...prev,
        estimatorSummary: initialEstimatorSummary,
        approxCoveredAreaSqFt: String(initialEstimatorSummary.coveredAreaSqFt),
      }));
    }
  }, [initialEstimatorSummary]);

  // Step 1 Validation
  const validateStep1 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.serviceNeed) {
      errors.serviceNeed = "Please select a construction requirement.";
    }
    if (formData.serviceNeed === "other" && !formData.serviceNeedCustom?.trim()) {
      errors.serviceNeedCustom = "Please specify your requirements.";
    }
    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.city) {
      errors.city = "Please select your project city.";
    }
    if (formData.city === "Other Region" && !formData.customCity?.trim()) {
      errors.customCity = "Please enter your city name.";
    }
    if (!formData.areaLocation.trim()) {
      errors.areaLocation = "Please specify the sector, phase, or society name.";
    }
    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Step 3 Validation
  const validateStep3 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.budgetRange) {
      errors.budgetRange = "Please select an estimated budget range.";
    }
    if (!formData.expectedStartDate) {
      errors.expectedStartDate = "Please indicate your timeline.";
    }
    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Step 4 Validation
  const validateStep4 = (): boolean => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (minimum 2 characters).";
    }
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim() || cleanPhone.length < 7) {
      errors.phone = "Please enter a valid telephone or WhatsApp number.";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.consentGiven) {
      errors.consentGiven = "You must give consent to be contacted regarding this enquiry.";
    }
    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (currentStep === 1 && !validateStep1()) return;
    if (currentStep === 2 && !validateStep2()) return;
    if (currentStep === 3 && !validateStep3()) return;
    setStepErrors({});
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevStep = () => {
    setStepErrors({});
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep4()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sourceUrl: window.location.href,
          referrer: document.referrer,
        }),
      });

      const data: LeadSubmissionResponse = await response.json();

      if (response.ok && data.success) {
        setSubmissionResult(data);
      } else {
        const errorMsg =
          data.errors && data.errors.length > 0
            ? data.errors.join(" ")
            : data.message || "An unexpected error occurred while saving your enquiry.";
        setSubmitError(errorMsg);
      }
    } catch (err: any) {
      console.error("[Submission Network Exception]:", err);
      setSubmitError(
        "Could not connect to the construction desk server. You can still reach Furqan Butt directly on WhatsApp below."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp Fallback Message URL
  const whatsappFallbackUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Assalam-o-Alaikum Black Diamond Builders, I was trying to submit an enquiry on your website for a ${formData.plotPreset} plot in ${formData.city} (${formData.areaLocation || "N/A"}). Name: ${formData.fullName || "Prospective Client"}. Please connect me with engineering.`
  )}`;

  return (
    <Card
      id="enquiry-form-card"
      variant="gold-rim"
      hasFacetedCorner
      padding="lg"
      className="shadow-2xl bg-gradient-to-b from-brand-charcoal via-brand-dark to-brand-black text-left"
    >
      {/* Honeypot Anti-Spam Field - Hidden from human users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="botTrapWebsite">Leave this field blank</label>
        <input
          id="botTrapWebsite"
          type="text"
          name="botTrapWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={formData.botTrapWebsite || ""}
          onChange={(e) => setFormData({ ...formData, botTrapWebsite: e.target.value })}
        />
      </div>

      {/* Success State Screen */}
      {submissionResult && submissionResult.success ? (
        <div className="py-10 px-4 text-center flex flex-col items-center gap-5 animate-fadeIn">
          <div className="w-20 h-20 rounded-full bg-brand-gold/20 border-2 border-brand-gold flex items-center justify-center text-brand-gold text-3xl shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            ✓
          </div>

          <div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge variant="gold" size="sm">
                Verified Desk Intake
              </Badge>
              <Badge variant="outline" size="sm">
                Ref: {submissionResult.leadId}
              </Badge>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-ivory">
              Construction Enquiry Registered
            </h3>
            <p className="text-sm text-brand-muted max-w-lg mx-auto mt-2 leading-relaxed">
              Thank you, <strong className="text-brand-ivory">{formData.fullName}</strong>. Your structural inquiry for <span className="text-brand-gold font-semibold">{formData.plotPreset}</span> in <span className="text-brand-ivory">{formData.city} ({formData.areaLocation})</span> has been received.
            </p>
          </div>

          {/* CRM Delivery Transparency Status */}
          <div className="p-4 rounded-xl bg-brand-surface border border-brand-border/70 max-w-md w-full text-xs text-left flex flex-col gap-2">
            <div className="flex items-center justify-between text-brand-muted">
              <span>Intake Status:</span>
              <span className="text-emerald-400 font-mono font-bold">● Active in Pipeline</span>
            </div>
            <div className="flex items-center justify-between text-brand-muted">
              <span>Lead Identifier:</span>
              <span className="text-brand-ivory font-mono">{submissionResult.leadId}</span>
            </div>
            {submissionResult.crmDeliveryStatus === "simulated_development_mode" && (
              <div className="mt-1 pt-2 border-t border-brand-border/50 text-[11px] text-amber-300/90 leading-tight">
                ℹ️ <strong>Development Mode:</strong> Saved to simulated pipeline. Ready for GoHighLevel / Webhook sync.
              </div>
            )}
          </div>

          {/* Mooch Ko Tao Seal & WhatsApp Direct Action */}
          <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-gold/40 flex items-center gap-3 text-xs text-brand-gold max-w-md w-full text-left">
            <MoustacheIcon size={24} />
            <span>
              <strong>Mooch Ko Tao Guarantee:</strong> A senior structural engineer will review your plot parameters within 24 business hours. No evasive sales reps.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mt-2">
            <a
              href={submissionResult.whatsappEscalationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Instant WhatsApp Priority</span>
              <span>💬</span>
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSubmissionResult(null);
                setCurrentStep(1);
                setFormData((prev) => ({
                  ...prev,
                  fullName: "",
                  phone: "",
                  email: "",
                  consentGiven: false,
                  additionalRequirements: "",
                }));
              }}
              className="w-full sm:w-auto text-xs uppercase tracking-wider"
            >
              New Enquiry
            </Button>
          </div>
        </div>
      ) : (
        <div>
          {/* Form Header with Step Indicator */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-brand-border/60">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="gold" size="sm">
                  Step {currentStep} of 4
                </Badge>
                {formData.estimatorSummary && (
                  <Badge variant="dark" size="sm" icon={<CaneIcon size={14} />}>
                    Estimator Linked
                  </Badge>
                )}
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory">
                {currentStep === 1 && "What Construction Service Do You Need?"}
                {currentStep === 2 && "Project Location & Plot Specifications"}
                {currentStep === 3 && "Indicative Budget & Project Timeline"}
                {currentStep === 4 && "Contact Details & Direct Engineering Handover"}
              </h4>
            </div>

            {/* Stepper Dots */}
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-8 h-2 rounded-full transition-all ${
                    currentStep === step
                      ? "bg-brand-gold w-10 shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                      : currentStep > step
                      ? "bg-emerald-500"
                      : "bg-brand-charcoal"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Active Estimator Notice if Transferred */}
          {formData.estimatorSummary && (
            <div className="mt-4 p-3 rounded-xl bg-brand-gold/10 border border-brand-gold/40 flex items-center justify-between text-xs text-brand-gold animate-fadeIn">
              <div className="flex items-center gap-2">
                <span>📋</span>
                <span>
                  <strong>Loaded Estimator Specs:</strong> {formData.estimatorSummary.scopeLabel} • {formData.estimatorSummary.tierName} ({formData.estimatorSummary.formattedRange})
                </span>
              </div>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, estimatorSummary: undefined })}
                className="text-[10px] text-brand-muted hover:text-brand-ivory underline uppercase tracking-wider shrink-0"
              >
                Clear
              </button>
            </div>
          )}

          {/* Global Submission Error Message */}
          {submitError && (
            <div className="mt-4 p-4 rounded-xl bg-rose-950/40 border border-rose-500/60 text-xs text-rose-200 flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <span className="text-base text-rose-400">⚠️</span>
                <span>{submitError}</span>
              </div>
              <div className="pt-2 border-t border-rose-500/30 flex items-center justify-between">
                <span className="text-[11px] text-brand-muted">
                  Need immediate engineering support?
                </span>
                <a
                  href={whatsappFallbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-brand-gold-light underline font-semibold flex items-center gap-1"
                >
                  <span>Open WhatsApp Direct</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          )}

          {/* Multi-Step Form Body */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
            
            {/* ================= STEP 1: WHAT DO YOU NEED? ================= */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <label className="text-xs uppercase font-serif tracking-widest text-brand-gold font-bold block mb-1">
                  Select Required Construction Scope:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      id: "new-house",
                      title: "Build a New House",
                      desc: "Complete ground-up residential construction from foundation to finish.",
                      icon: "🏡",
                    },
                    {
                      id: "grey-structure",
                      title: "A+ Grey Structure Only",
                      desc: "Grade 60 steel framework, AWWAL kiln brick masonry, and water ponded slabs.",
                      icon: "🏛️",
                    },
                    {
                      id: "complete-finishing",
                      title: "Complete Finishing & Interiors",
                      desc: "Porcelain tiles, solid wood joinery, false ceiling, and luxury fixtures.",
                      icon: "✨",
                    },
                    {
                      id: "renovation",
                      title: "Extensive Remodeling / Renovation",
                      desc: "Structural retrofit, facade transformation, and premium modern upgrades.",
                      icon: "🔨",
                    },
                    {
                      id: "commercial",
                      title: "Commercial Project / Plaza",
                      desc: "Multi-story commercial framing, retail plazas, or corporate headquarters.",
                      icon: "🏢",
                    },
                    {
                      id: "other",
                      title: "Other Specific Inquiries",
                      desc: "Custom architectural planning, 3D elevation, or anti-shapper drawing audits.",
                      icon: "📐",
                    },
                  ].map((item) => {
                    const isSelected = formData.serviceNeed === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, serviceNeed: item.id as ServiceNeed })
                        }
                        className={`p-4 rounded-xl border text-left transition-all flex items-start gap-3 ${
                          isSelected
                            ? "bg-brand-surface border-brand-gold shadow-[0_4px_25px_rgba(212,175,55,0.2)]"
                            : "bg-brand-surface/40 border-brand-border/70 text-brand-muted hover:border-brand-border hover:text-brand-ivory"
                        }`}
                      >
                        <span className="text-2xl mt-0.5">{item.icon}</span>
                        <div>
                          <span
                            className={`text-sm font-serif font-bold block ${
                              isSelected ? "text-brand-gold" : "text-brand-ivory"
                            }`}
                          >
                            {item.title}
                          </span>
                          <span className="text-xs text-brand-muted leading-relaxed block mt-1">
                            {item.desc}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {formData.serviceNeed === "other" && (
                  <div className="pt-2">
                    <Input
                      label="Specify Your Construction Requirement"
                      required
                      placeholder="e.g. Structural stability audit, basement water leakage retrofit, etc."
                      value={formData.serviceNeedCustom || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceNeedCustom: e.target.value })
                      }
                      error={stepErrors.serviceNeedCustom}
                    />
                  </div>
                )}
                {stepErrors.serviceNeed && (
                  <p className="text-xs text-rose-400 mt-1">{stepErrors.serviceNeed}</p>
                )}
              </div>
            )}

            {/* ================= STEP 2: PROJECT DETAILS ================= */}
            {currentStep === 2 && (
              <div className="space-y-5 animate-fadeIn">
                {/* City & Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Select
                      label="Project City / Corridor"
                      options={[
                        { value: "Islamabad", label: "Islamabad (DHA, Gulberg, Sectoral)" },
                        { value: "Rawalpindi", label: "Rawalpindi & Cantt (Bahria Town 1-8)" },
                        { value: "Wah Cantt & Taxila", label: "Wah Cantt & Taxila" },
                        { value: "Kohistan Enclave", label: "Kohistan Enclave" },
                        { value: "Taj Residencia", label: "Taj Residencia" },
                        { value: "Lahore", label: "Lahore (DHA, Lake City, Cantt)" },
                        { value: "Other Region", label: "Other Region in Pakistan" },
                      ]}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      error={stepErrors.city}
                    />
                  </div>

                  <div>
                    <Input
                      label="Specific Area / Sector / Phase"
                      required
                      placeholder="e.g. DHA Phase 2 Sector F, Bahria Phase 8, etc."
                      value={formData.areaLocation}
                      onChange={(e) =>
                        setFormData({ ...formData, areaLocation: e.target.value })
                      }
                      error={stepErrors.areaLocation}
                    />
                  </div>
                </div>

                {formData.city === "Other Region" && (
                  <Input
                    label="Enter City Name"
                    required
                    placeholder="e.g. Faisalabad, Gujranwala, Abbottabad"
                    value={formData.customCity || ""}
                    onChange={(e) => setFormData({ ...formData, customCity: e.target.value })}
                    error={stepErrors.customCity}
                  />
                )}

                {/* Plot Size Selection */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold text-brand-ivory tracking-wide">
                      Plot Dimensions / Category:
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          isCustomDimensions: !formData.isCustomDimensions,
                        })
                      }
                      className="text-xs text-brand-gold hover:text-brand-gold-light underline"
                    >
                      {formData.isCustomDimensions
                        ? "← Back to Standard Presets"
                        : "+ Custom Dimensions / Units"}
                    </button>
                  </div>

                  {!formData.isCustomDimensions ? (
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {[
                        { id: "5-marla", label: "5 Marla (25x50)" },
                        { id: "7-marla", label: "7 Marla (30x60)" },
                        { id: "10-marla", label: "10 Marla (35x70)" },
                        { id: "1-kanal", label: "1 Kanal (50x90)" },
                        { id: "2-kanal", label: "2 Kanal (75x120)" },
                      ].map((preset) => (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              plotPreset: preset.id,
                              approxCoveredAreaSqFt:
                                preset.id === "5-marla"
                                  ? "2150"
                                  : preset.id === "7-marla"
                                  ? "2850"
                                  : preset.id === "10-marla"
                                  ? "3450"
                                  : preset.id === "1-kanal"
                                  ? "5900"
                                  : "11200",
                            })
                          }
                          className={`p-2.5 rounded-xl text-center border transition-all text-xs font-serif ${
                            formData.plotPreset === preset.id
                              ? "bg-brand-gold text-brand-black border-brand-gold font-bold shadow-md"
                              : "bg-brand-surface border-brand-border text-brand-muted hover:border-brand-gold/60 hover:text-brand-ivory"
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-3">
                      <span className="text-xs text-brand-gold font-semibold block">
                        Custom Dimensions Specification:
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <Input
                          label="Length (Feet)"
                          type="number"
                          placeholder="e.g. 50"
                          value={formData.customDimensions?.lengthFeet || 50}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              customDimensions: {
                                ...formData.customDimensions!,
                                lengthFeet: Number(e.target.value),
                              },
                            })
                          }
                        />
                        <Input
                          label="Width (Feet)"
                          type="number"
                          placeholder="e.g. 90"
                          value={formData.customDimensions?.widthFeet || 90}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              customDimensions: {
                                ...formData.customDimensions!,
                                widthFeet: Number(e.target.value),
                              },
                            })
                          }
                        />
                        <Input
                          label="Total Marlas or Sq.Yds (Optional)"
                          type="number"
                          placeholder="e.g. 20"
                          value={formData.customDimensions?.customValue || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              customDimensions: {
                                ...formData.customDimensions!,
                                customValue: Number(e.target.value),
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Construction Stage */}
                <div>
                  <Select
                    label="Current Project Stage"
                    options={[
                      {
                        value: "planning-design",
                        label: "Planning Stage (Need Architectural / Structural Maps)",
                      },
                      {
                        value: "vacant-plot",
                        label: "Vacant Plot In Possession (Ready for Soil Testing & Excavation)",
                      },
                      {
                        value: "foundation-active",
                        label: "Active Site (Foundation or Basement Work in Progress)",
                      },
                      {
                        value: "grey-complete",
                        label: "Grey Structure Already Built (Seeking Turnkey Finishing)",
                      },
                      {
                        value: "existing-renovation",
                        label: "Existing Built House (Extensive Renovation)",
                      },
                    ]}
                    value={formData.constructionStage}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        constructionStage: e.target.value as ConstructionStage,
                      })
                    }
                  />
                </div>

                {/* Approximate Covered Area */}
                <div>
                  <Input
                    label="Approximate Total Covered Area (Sq.Ft, if known)"
                    placeholder="e.g. 5,900 sq.ft (Double story layout)"
                    value={formData.approxCoveredAreaSqFt}
                    onChange={(e) =>
                      setFormData({ ...formData, approxCoveredAreaSqFt: e.target.value })
                    }
                    helperText="Standard double-story guidelines: 5 Marla ~ 2,150 sq.ft | 10 Marla ~ 3,450 sq.ft | 1 Kanal ~ 5,900 sq.ft"
                  />
                </div>
              </div>
            )}

            {/* ================= STEP 3: BUDGET & TIMELINE ================= */}
            {currentStep === 3 && (
              <div className="space-y-5 animate-fadeIn">
                {/* Overseas Client Toggle */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-brand-surface border border-brand-border">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✈️</span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-ivory block">
                        Overseas Pakistani Client Desk
                      </span>
                      <span className="text-[11px] text-brand-muted">
                        Unlocks unedited 4K WhatsApp drone walkthroughs and milestone escrow billing
                      </span>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={formData.isOverseasClient}
                      onChange={(e) =>
                        setFormData({ ...formData, isOverseasClient: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-brand-charcoal peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-brand-muted peer-checked:after:bg-brand-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-gold"></div>
                  </label>
                </div>

                {formData.isOverseasClient && (
                  <Select
                    label="Your Country of Residence"
                    options={[
                      { value: "United Kingdom", label: "United Kingdom (UK)" },
                      { value: "United States", label: "United States (USA)" },
                      { value: "UAE", label: "United Arab Emirates (Dubai / Abu Dhabi)" },
                      { value: "Saudi Arabia", label: "Kingdom of Saudi Arabia (KSA)" },
                      { value: "Canada", label: "Canada" },
                      { value: "Qatar", label: "Qatar" },
                      { value: "Europe / Other", label: "Europe / Other" },
                    ]}
                    value={formData.countryOfResidence || "United Kingdom"}
                    onChange={(e) =>
                      setFormData({ ...formData, countryOfResidence: e.target.value })
                    }
                  />
                )}

                {/* Indicative Budget Range */}
                <div>
                  <label className="text-xs font-semibold text-brand-ivory tracking-wide block mb-2">
                    Estimated Construction Budget:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      "Under PKR 1.5 Crore",
                      "PKR 1.5 - 2.5 Crore",
                      "PKR 2.5 - 4.5 Crore",
                      "PKR 4.5 - 7.5 Crore",
                      "PKR 7.5 - 12+ Crore",
                      "Need BOQ Consultation",
                    ].map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setFormData({ ...formData, budgetRange: budget })}
                        className={`p-3 rounded-xl text-center border text-xs font-serif transition-all ${
                          formData.budgetRange === budget
                            ? "bg-brand-gold text-brand-black border-brand-gold font-bold shadow-md"
                            : "bg-brand-surface border-brand-border text-brand-muted hover:border-brand-gold/50 hover:text-brand-ivory"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                  {stepErrors.budgetRange && (
                    <p className="text-xs text-rose-400 mt-1">{stepErrors.budgetRange}</p>
                  )}
                </div>

                {/* Expected Start Date */}
                <div>
                  <label className="text-xs font-semibold text-brand-ivory tracking-wide block mb-2">
                    Expected Site Mobilization Timeline:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      "Immediate / 30 Days",
                      "1-3 Months",
                      "3-6 Months",
                      "Planning Phase",
                    ].map((timeline) => (
                      <button
                        key={timeline}
                        type="button"
                        onClick={() => setFormData({ ...formData, expectedStartDate: timeline })}
                        className={`p-2.5 rounded-xl text-center border text-xs font-serif transition-all ${
                          formData.expectedStartDate === timeline
                            ? "bg-brand-gold text-brand-black border-brand-gold font-bold shadow-md"
                            : "bg-brand-surface border-brand-border text-brand-muted hover:border-brand-gold/50 hover:text-brand-ivory"
                        }`}
                      >
                        {timeline}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-brand-ivory">
                      Specific Architectural Requirements / Notes:
                    </label>
                  </div>
                  <Textarea
                    placeholder="Specify special requirements: e.g. Subterranean basement, swimming pool, solar infrastructure, solid ash doors, overseas video reports..."
                    rows={3}
                    value={formData.additionalRequirements}
                    onChange={(e) =>
                      setFormData({ ...formData, additionalRequirements: e.target.value })
                    }
                  />

                  {/* Quick requirement chips */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="text-[10px] text-brand-muted uppercase font-mono">
                      Add to notes:
                    </span>
                    {[
                      "+ Full Basement",
                      "+ Swimming Pool",
                      "+ Rooftop Pergola",
                      "+ Smart Home IoT",
                      "+ Overseas Remote Audits",
                    ].map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => {
                          const current = formData.additionalRequirements.trim();
                          const updated = current ? `${current}, ${chip.replace("+ ", "")}` : chip.replace("+ ", "");
                          setFormData({ ...formData, additionalRequirements: updated });
                        }}
                        className="px-2 py-1 rounded bg-brand-charcoal text-[11px] text-brand-gold border border-brand-border hover:border-brand-gold transition-colors"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ================= STEP 4: CONTACT INFORMATION ================= */}
            {currentStep === 4 && (
              <div className="space-y-5 animate-fadeIn">
                <div className="p-3.5 rounded-xl bg-brand-surface/70 border border-brand-border/70 text-xs text-brand-muted leading-relaxed">
                  🔒 <strong>Privacy Assurance:</strong> Your contact information is transferred directly to Furqan Butt&apos;s senior engineering office. We do not sell data or route leads to unknown subcontractors.
                </div>

                {/* Full Name */}
                <Input
                  label="Full Name"
                  required
                  placeholder="e.g. Tariq Mehmood"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  error={stepErrors.fullName}
                />

                {/* Telephone with Country Code Selector */}
                <div>
                  <label className="text-xs font-semibold text-brand-ivory block mb-1.5">
                    WhatsApp / Contact Number <span className="text-brand-gold">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-36 bg-brand-charcoal border border-brand-border rounded-xl px-3 py-3 text-xs text-brand-ivory font-mono focus:outline-none focus:border-brand-gold"
                    >
                      {COUNTRY_CODES.map((item) => (
                        <option key={item.code} value={item.code} className="bg-brand-dark">
                          {item.code} {item.country}
                        </option>
                      ))}
                    </select>

                    <input
                      type="tel"
                      required
                      placeholder="e.g. 300 1234567 or 7700 900077"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`flex-1 bg-brand-surface border rounded-xl px-4 py-3 text-xs text-brand-ivory font-mono focus:outline-none transition-colors ${
                        stepErrors.phone
                          ? "border-rose-500 focus:border-rose-400"
                          : "border-brand-border focus:border-brand-gold"
                      }`}
                    />
                  </div>
                  {stepErrors.phone && (
                    <p className="text-xs text-rose-400 mt-1">{stepErrors.phone}</p>
                  )}
                </div>

                {/* Email Address & Preferred Method */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Email Address (Optional)"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    error={stepErrors.email}
                  />

                  <Select
                    label="Preferred Follow-Up Method"
                    options={[
                      { value: "whatsapp", label: "WhatsApp Chat & Voice Note" },
                      { value: "phone", label: "Direct Phone Call" },
                      { value: "email", label: "Formal Email Quotation" },
                    ]}
                    value={formData.preferredContactMethod}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        preferredContactMethod: e.target.value as PreferredContactMethod,
                      })
                    }
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.consentGiven}
                      onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded border-brand-border bg-brand-charcoal text-brand-gold focus:ring-brand-gold accent-brand-gold cursor-pointer"
                    />
                    <span className="text-xs text-brand-muted leading-relaxed">
                      I consent to being contacted by Black Diamond Builders regarding this construction enquiry. I understand this preliminary estimate is non-binding and subject to architectural BOQ evaluation.
                    </span>
                  </label>
                  {stepErrors.consentGiven && (
                    <p className="text-xs text-rose-400 mt-1">{stepErrors.consentGiven}</p>
                  )}
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between pt-6 border-t border-brand-border/60">
              {currentStep > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={handlePrevStep}
                  disabled={isSubmitting}
                >
                  ← Back
                </Button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <Button
                  type="button"
                  variant="gold"
                  size="md"
                  onClick={handleNextStep}
                  rightIcon={<CaneIcon size={16} />}
                >
                  Continue to Step {currentStep + 1} →
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  isLoading={isSubmitting}
                  rightIcon={<MoustacheIcon size={20} />}
                  className="uppercase tracking-wider font-bold shadow-xl"
                >
                  SUBMIT CONSTRUCTION ENQUIRY
                </Button>
              )}
            </div>

          </form>
        </div>
      )}
    </Card>
  );
};
