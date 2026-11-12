"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { ChallengeSeal } from "@/components/branding/ChallengeSeal";
import { StickDivider } from "@/components/branding/StickDivider";
import { BRAND_INFO, CATCHPHRASES } from "@/data/brandData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "Islamabad",
    plotLocation: "",
    serviceNeeded: "new-house",
    plotSize: "1-kanal",
    coveredArea: "",
    budget: "",
    message: "",
    preferredContact: "whatsapp",
    botTrapWebsite: "", // Honeypot field
  });

  const [submitStartTime] = useState<number>(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [submittedLeadId, setSubmittedLeadId] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          city: formData.city,
          plotLocation: formData.plotLocation,
          serviceNeeded: formData.serviceNeeded,
          plotSize: formData.plotSize,
          approximateCoveredArea: formData.coveredArea,
          budgetRange: formData.budget,
          additionalRequirements: formData.message,
          preferredContactMethod: formData.preferredContact,
          consentToContact: true,
          botTrapWebsite: formData.botTrapWebsite,
          submitStartTime,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(true);
        setSubmittedLeadId(data.leadId || "BDB-" + Math.floor(Math.random() * 90000 + 10000));
      } else {
        setSubmitSuccess(false);
        setErrorMessage(data.message || "Failed to submit enquiry. Please try again or reach out on WhatsApp.");
      }
    } catch {
      setSubmitSuccess(false);
      setErrorMessage("Network error connecting to the engineering desk. Please reach out directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-ivory selection:bg-brand-gold selection:text-brand-black font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* Contact Hero Banner */}
        <section className="relative w-full py-20 lg:py-24 bg-brand-charcoal/40 border-b border-brand-border/60 overflow-hidden bg-architectural-grid">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-brand-gold/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-muted mb-6">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-gold">Contact Desk</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <Badge variant="gold" size="md" pulse icon={<MoustacheIcon size={16} />}>
                Direct Engineering Desk
              </Badge>
              <Badge variant="dark" size="md" icon={<CaneIcon size={16} />}>
                Twin Cities Corridor
              </Badge>
              <Badge variant="outline" size="md">
                Overseas Priority Queue
              </Badge>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-ivory tracking-tight mb-4">
              CONTACT FURQAN BUTT &{" "}
              <span className="text-gold-gradient block sm:inline">
                BLACK DIAMOND BUILDERS
              </span>
            </h1>

            <p className="text-base sm:text-lg text-brand-muted max-w-2xl leading-relaxed mb-6">
              Whether you are planning a new luxury build in DHA, casting a monolithic basement in Kohistan Enclave, or managing your ancestral home from the UK, demand structural truth.
            </p>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-brand-dark border border-brand-gold/30 text-xs font-mono text-brand-gold">
              <CaneIcon size={18} />
              <span>Furqan Butt personally audits major milestone foundation pours across Islamabad & Rawalpindi.</span>
            </div>
          </div>
        </section>

        {/* Laser Plumb Stick Divider */}
        <StickDivider label="DIRECT CONSULTATION • ZERO MIDDLEMEN • HONEST ESTIMATES" />

        {/* Main Contact Grid: Information + Form */}
        <section className="w-full py-20 bg-brand-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Verified Information & Office Hours */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                {/* Information Card */}
                <div className="p-8 rounded-2xl bg-brand-dark border border-brand-border flex flex-col gap-6">
                  <div className="flex items-center justify-between border-b border-brand-border/60 pb-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold">
                        Corporate Verification
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-brand-ivory mt-0.5">
                        Twin Cities Headquarters
                      </h3>
                    </div>
                    <ChallengeSeal size="sm" />
                  </div>

                  {/* Office Corridor */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
                      📍
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-brand-muted uppercase block">
                        Headquarters & Core Corridor
                      </span>
                      <p className="text-sm font-semibold text-brand-ivory mt-0.5">
                        {BRAND_INFO.headquarters}
                      </p>
                      <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                        Operating actively across DHA Phases 1–5, Bahria Town Phases 1–8, Sector B-17 Multi Gardens, Kohistan Enclave, Taj Residencia, and Wah Cantt.
                      </p>
                    </div>
                  </div>

                  {/* Phone & Direct Desk */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
                      📞
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-brand-muted uppercase block">
                        Telephone Inquiry Desk
                      </span>
                      <p className="text-sm font-semibold text-brand-ivory mt-0.5">
                        {BRAND_INFO.phoneDisplay}
                      </p>
                      <p className="text-xs text-brand-muted mt-1">
                        Corporate lines active during standard business hours.
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Direct */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shrink-0">
                      💬
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-brand-muted uppercase block">
                        Direct WhatsApp Desk (Recommended)
                      </span>
                      <a
                        href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Assalam-o-Alaikum%20Furqan%20Bhai%2C%20I%20would%20like%20to%20consult%20with%20Black%20Diamond%20Builders.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-emerald-400 hover:underline block mt-0.5"
                      >
                        Launch Direct WhatsApp Chat ↗
                      </a>
                      <p className="text-xs text-brand-muted mt-1">
                        Fastest response for architectural drawings, plot queries, and video consultations.
                      </p>
                    </div>
                  </div>

                  {/* Official TikTok */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
                      📱
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-brand-muted uppercase block">
                        Official TikTok Channel
                      </span>
                      <a
                        href={BRAND_INFO.tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-brand-gold hover:underline block mt-0.5"
                      >
                        {BRAND_INFO.tiktokHandle} ↗
                      </a>
                      <p className="text-xs text-brand-muted mt-1">
                        Daily jobsite walkthroughs, anti-shapper breakdowns, and authentic acoustic stick audits.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Operating Hours Card */}
                <div className="p-6 rounded-2xl bg-brand-dark/70 border border-brand-border">
                  <h4 className="font-serif text-base font-bold text-brand-ivory mb-4 flex items-center gap-2">
                    <span>🕒</span>
                    <span>Verified Operating Hours</span>
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between py-1.5 border-b border-brand-border/40">
                      <span className="text-brand-muted">Monday – Friday</span>
                      <span className="text-brand-ivory font-mono font-medium">09:00 AM – 06:30 PM PKT</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-brand-border/40">
                      <span className="text-brand-muted">Saturday</span>
                      <span className="text-brand-ivory font-mono font-medium">10:00 AM – 05:00 PM PKT</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-brand-border/40">
                      <span className="text-brand-muted">Sunday</span>
                      <span className="text-brand-gold font-mono font-medium">On-Site Pour Inspections Only</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-emerald-400 font-semibold">Overseas WhatsApp Desk</span>
                      <span className="text-emerald-400 font-mono font-bold">24/7 Digital Intake</span>
                    </div>
                  </div>
                </div>

                {/* Overseas Expatriate Callout Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-charcoal to-brand-dark border border-brand-gold/40 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="gold" size="sm">Overseas Clients</Badge>
                    <span className="text-xs text-brand-muted">UK • USA • Gulf • Canada</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-ivory mb-2">
                    Timezone-Coordinated Video Audits
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed mb-4">
                    Living abroad? Furqan Butt hosts scheduled evening WhatsApp and Zoom conferences to accommodate GMT, EST, PST, and Gulf Standard timezones.
                  </p>
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Assalam-o-Alaikum%20Furqan%20Bhai%2C%20I%20am%20an%20Overseas%20Pakistani%20and%20would%20like%20to%20schedule%20a%20video%20call.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-gold hover:underline flex items-center gap-1.5"
                  >
                    <span>Schedule Overseas Video Conference</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Consultation & Enquiry Form */}
              <div className="lg:col-span-7">
                <Card variant="gold" className="p-8 sm:p-10 border-brand-gold/60 shadow-2xl relative">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold">
                        Direct Inbound Queue
                      </span>
                      <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Desk Open
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory">
                      Submit Your Construction Enquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed">
                      Fill out your plot and scope details below. Furqan Butt&apos;s technical engineering team will review your requirements and provide an honest preliminary evaluation.
                    </p>
                  </div>

                  {submitSuccess ? (
                    <div className="p-8 rounded-2xl bg-brand-surface border-2 border-emerald-500/60 flex flex-col items-center text-center gap-4 animate-fadeIn">
                      <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 text-2xl">
                        ✓
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-brand-ivory">
                        Enquiry Received Successfully!
                      </h3>
                      <p className="text-xs font-mono text-brand-gold">
                        Assigned Reference ID: <span className="font-bold">{submittedLeadId}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-brand-muted max-w-md leading-relaxed">
                        Your project details have been logged onto Furqan Butt&apos;s technical desk. We typically review drawings and respond within 24 to 48 business hours.
                      </p>

                      <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full justify-center">
                        <a
                          href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Assalam-o-Alaikum%2C%20I%20have%20submitted%20my%20enquiry%20(Ref%3A%20${submittedLeadId})%20on%20the%20Black%20Diamond%20website%20and%20would%20like%20to%20fast-track%20review.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                        >
                          <span>Fast-Track on WhatsApp</span>
                          <span>💬</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => {
                            setSubmitSuccess(null);
                            setFormData({
                              fullName: "",
                              phone: "",
                              city: "Islamabad",
                              plotLocation: "",
                              serviceNeeded: "new-house",
                              plotSize: "1-kanal",
                              coveredArea: "",
                              budget: "",
                              message: "",
                              preferredContact: "whatsapp",
                              botTrapWebsite: "",
                            });
                          }}
                          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-brand-black border border-brand-border text-brand-muted hover:text-brand-ivory text-xs uppercase tracking-wider transition-colors"
                        >
                          Submit Another Enquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Honeypot hidden input */}
                      <input
                        type="text"
                        name="botTrapWebsite"
                        value={formData.botTrapWebsite}
                        onChange={(e) => setFormData({ ...formData, botTrapWebsite: e.target.value })}
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      {errorMessage && (
                        <div className="p-4 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs">
                          {errorMessage}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Your Full Name"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Tariq Mahmood"
                        />

                        <Input
                          label="Phone / WhatsApp Number (+92)"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0300 1234567 or +92 300 1234567"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Select
                          label="City / Region"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          options={[
                            { value: "Islamabad", label: "Islamabad (DHA, B-17, CDA)" },
                            { value: "Rawalpindi", label: "Rawalpindi (Bahria, Cantt)" },
                            { value: "Wah Cantt", label: "Wah Cantt / Taxila" },
                            { value: "Overseas Expatriate", label: "Overseas Expatriate (Building in Pakistan)" },
                          ]}
                        />

                        <Input
                          label="Plot Location & Sector"
                          value={formData.plotLocation}
                          onChange={(e) => setFormData({ ...formData, plotLocation: e.target.value })}
                          placeholder="e.g. DHA Phase 2, Sector J"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Select
                          label="Primary Service Needed"
                          value={formData.serviceNeeded}
                          onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                          options={[
                            { value: "new-house", label: "Complete Turnkey Luxury Build" },
                            { value: "grey-structure", label: "A+ Grey Structure Engineering" },
                            { value: "renovation", label: "Anti-Shapper Structural Remediation" },
                            { value: "architectural", label: "Architectural & Seismic Design" },
                          ]}
                        />

                        <Select
                          label="Plot Dimensions / Size"
                          value={formData.plotSize}
                          onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                          options={[
                            { value: "5-marla", label: "5 Marla (25x50)" },
                            { value: "7-marla", label: "7 Marla (30x60)" },
                            { value: "10-marla", label: "10 Marla (35x70)" },
                            { value: "1-kanal", label: "1 Kanal (50x90)" },
                            { value: "2-kanal", label: "2 Kanal+ (75x120 or larger)" },
                            { value: "commercial", label: "Commercial / Custom Plot" },
                          ]}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          label="Approximate Covered Area (Optional)"
                          value={formData.coveredArea}
                          onChange={(e) => setFormData({ ...formData, coveredArea: e.target.value })}
                          placeholder="e.g. 5,500 sq. ft."
                        />

                        <Select
                          label="Preferred Contact Channel"
                          value={formData.preferredContact}
                          onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                          options={[
                            { value: "whatsapp", label: "WhatsApp (Fastest)" },
                            { value: "phone", label: "Direct Phone Call" },
                            { value: "email", label: "Email Correspondence" },
                          ]}
                        />
                      </div>

                      <Textarea
                        label="Project Notes / Specific Inquiries"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your plot, timeline expectations, whether drawings are already prepared, or any specific concerns..."
                        rows={4}
                      />

                      <div className="pt-2">
                        <Button
                          type="submit"
                          variant="gold"
                          size="lg"
                          fullWidth
                          loading={isSubmitting}
                          rightIcon={<MoustacheIcon size={20} />}
                        >
                          Submit For Structural Review
                        </Button>
                      </div>

                      <p className="text-[11px] text-center text-brand-muted">
                        🔒 Confidential & Secure. We do not sell data. Submissions are reviewed under our{" "}
                        <Link href="/privacy" className="text-brand-gold hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </form>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Interactive Corridor Coverage Visualizer */}
        <section className="w-full py-16 bg-brand-charcoal/30 border-t border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                Corridor Coverage
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory mt-1">
                WHERE WE BUILD IN THE TWIN CITIES
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "DHA Islamabad", desc: "Phases 1, 2, 4, 5 & Valley" },
                { name: "Bahria Town", desc: "Phases 1 through 8, Executive" },
                { name: "Kohistan Enclave", desc: "Monolithic Luxury Villas" },
                { name: "Sector B-17", desc: "Multi Gardens Corridor" },
                { name: "Taj Residencia", desc: "Modern Architectural Builds" },
                { name: "Wah Cantt & Cantt", desc: "Residential Estates" },
              ].map((zone, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-brand-dark border border-brand-border text-center flex flex-col justify-center gap-1"
                >
                  <span className="text-xs font-bold text-brand-ivory font-serif">
                    {zone.name}
                  </span>
                  <span className="text-[10px] text-brand-muted">
                    {zone.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
