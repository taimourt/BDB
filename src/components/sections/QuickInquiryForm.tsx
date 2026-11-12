"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { BRAND_INFO } from "@/data/brandData";

export const QuickInquiryForm: React.FC = () => {
  const [isOverseas, setIsOverseas] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    plotSize: "1-kanal",
    projectType: "grey-structure",
    city: "Islamabad",
    countryOfResidence: "United Kingdom",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="consultation" className="w-full py-24 bg-brand-black relative">
      {/* Ambient Lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Badge variant="gold" size="md" pulse>
              Direct Consultation Desk
            </Badge>
            <Badge variant="dark" size="md">
              Islamabad & Rawalpindi
            </Badge>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ivory mb-4">
            Build With Absolute Confidence
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            Whether you are on ground in Pakistan or living in the UK, USA, or Gulf, discuss your project directly with Furqan Butt&apos;s technical construction team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-7">
            <Card variant="gold-rim" hasFacetedCorner padding="lg" className="shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 px-4 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center text-brand-gold text-2xl">
                    ✓
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-ivory">
                    Consultation Request Registered
                  </h3>
                  <p className="text-sm text-brand-muted max-w-md">
                    Thank you, <strong className="text-brand-ivory">{formData.fullName}</strong>. Our senior engineering team will contact your WhatsApp at <span className="text-brand-gold font-mono">{formData.phone}</span> within 24 hours.
                  </p>
                  <div className="p-4 rounded bg-brand-surface border border-brand-border text-xs text-brand-gold flex items-center gap-2 mt-2">
                    <MoustacheIcon size={20} />
                    <span>Mooch Ko Tao Guarantee: No pushy sales reps, only real engineers.</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Overseas Toggle Banner */}
                  <div className="flex items-center justify-between p-3.5 rounded bg-brand-surface border border-brand-border">
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">✈️</span>
                      <div className="text-left">
                        <div className="text-xs font-bold uppercase tracking-wider text-brand-ivory">
                          Are you an Overseas Pakistani?
                        </div>
                        <div className="text-[11px] text-brand-muted">
                          Enables dedicated WhatsApp 4K video auditing & escrow billing
                        </div>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isOverseas}
                        onChange={(e) => setIsOverseas(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-brand-charcoal peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-brand-muted peer-checked:after:bg-brand-black after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-gold"></div>
                    </label>
                  </div>

                  {/* Overseas Country Selector (conditional) */}
                  {isOverseas && (
                    <Select
                      label="Country of Residence"
                      options={[
                        { value: "United Kingdom", label: "United Kingdom (UK)" },
                        { value: "United States", label: "United States (USA)" },
                        { value: "UAE", label: "United Arab Emirates (Dubai / Abu Dhabi)" },
                        { value: "Saudi Arabia", label: "Kingdom of Saudi Arabia (KSA)" },
                        { value: "Canada", label: "Canada" },
                        { value: "Europe / Other", label: "Europe / Other" },
                      ]}
                      value={formData.countryOfResidence}
                      onChange={(e) =>
                        setFormData({ ...formData, countryOfResidence: e.target.value })
                      }
                    />
                  )}

                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                    <Input
                      label="WhatsApp / Mobile Number"
                      required
                      placeholder="+92 300 ... or +44 7..."
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  {/* Email & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Email Address"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    <Select
                      label="Project City / Corridor"
                      options={[
                        { value: "Islamabad", label: "Islamabad (DHA, Gulberg, Sectors)" },
                        { value: "Rawalpindi", label: "Rawalpindi & Cantt" },
                        { value: "Bahria Town", label: "Bahria Town (Phase 1-8)" },
                        { value: "Kohistan Enclave", label: "Kohistan Enclave / Wah" },
                        { value: "Taj Residencia", label: "Taj Residencia" },
                        { value: "Other Region", label: "Other Region in Pakistan" },
                      ]}
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                    />
                  </div>

                  {/* Plot Size & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Select
                      label="Plot Size"
                      options={[
                        { value: "5-marla", label: "5 Marla (approx 25x50)" },
                        { value: "10-marla", label: "10 Marla (approx 35x70)" },
                        { value: "1-kanal", label: "1 Kanal (approx 50x90)" },
                        { value: "2-kanal", label: "2 Kanal (approx 75x120)" },
                        { value: "commercial-custom", label: "Commercial Plaza / Custom" },
                      ]}
                      value={formData.plotSize}
                      onChange={(e) =>
                        setFormData({ ...formData, plotSize: e.target.value })
                      }
                    />
                    <Select
                      label="Scope of Construction"
                      options={[
                        { value: "grey-structure", label: "A+ Grey Structure Only (Laser Spec)" },
                        { value: "turnkey-luxury", label: "Complete Turnkey Luxury Finish" },
                        { value: "architectural-design", label: "Architectural Planning & 3D" },
                        { value: "drawing-audit", label: "Anti-Shapper Drawing Audit" },
                      ]}
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                    />
                  </div>

                  {/* Notes & Special Inquiries */}
                  <Textarea
                    label="Plot Details / Specific Requirements"
                    placeholder="Tell us about your plot location, expected start timeline, or any specific architectural requests..."
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    fullWidth
                    isLoading={isLoading}
                    rightIcon={<MoustacheIcon size={20} />}
                  >
                    Request Construction Consultation
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Right Column: Trust Perks & Overseas Direct Line */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card variant="glass" padding="md" className="border-brand-border">
              <div className="flex items-center gap-3 pb-4 border-b border-brand-border/60">
                <CaneIcon size={26} />
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-ivory">
                    What Happens Next?
                  </h4>
                  <p className="text-xs text-brand-gold uppercase tracking-wider font-semibold">
                    The 3-Step Verification Process
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 py-4 text-xs text-brand-muted">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold font-bold shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-brand-ivory block text-sm">
                      Technical Preliminary Call
                    </strong>
                    A site engineer reviews your plot dimensions, soil conditions, and architectural feasibility.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold font-bold shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-brand-ivory block text-sm">
                      Transparent BOQ & Material Breakdown
                    </strong>
                    No hidden line items. You receive the exact steel tonnage, cement brand specs, and laser curing schedule.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold font-bold shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-brand-ivory block text-sm">
                      On-Site Inspection Guarantee
                    </strong>
                    Inspected on-site with the stick. If any subcontractor cuts corners, it is rectified on our balance sheet.
                  </div>
                </div>
              </div>
            </Card>

            {/* Direct WhatsApp Callout Card */}
            <Card variant="challenge" padding="md">
              <div className="flex flex-col gap-3 text-left">
                <div className="flex items-center justify-between">
                  <Badge variant="gold" size="sm">
                    Priority WhatsApp
                  </Badge>
                  <MoustacheIcon size={22} />
                </div>
                <h4 className="font-serif text-xl font-bold text-brand-ivory">
                  Urgent Inquiries? Speak Directly.
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Overseas Pakistanis can connect with our direct coordination desk for instant structural advice and site visit scheduling.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Assalam-o-Alaikum%20Black%20Diamond%20Builders%20Team%2C%20I%20would%20like%20to%20inquire%20about%20a%20construction%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg transition-colors"
                  >
                    <span>Chat on WhatsApp</span>
                    <span>💬</span>
                  </a>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
