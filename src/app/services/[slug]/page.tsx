import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { ChallengeSeal } from "@/components/branding/ChallengeSeal";
import { StickDivider } from "@/components/branding/StickDivider";
import {
  DETAILED_SERVICES,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/servicesData";
import { getProjectBySlug } from "@/data/portfolioData";
import { BRAND_INFO } from "@/data/brandData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Black Diamond Builders",
      description: "The requested construction service could not be found.",
    };
  }

  return {
    title: `${service.title} | Black Diamond Builders Islamabad`,
    description: `${service.overview.slice(0, 160)}... Inspected with the stick by Furqan Butt.`,
    openGraph: {
      title: `${service.title} — Black Diamond Builders`,
      description: service.subtitle,
      type: "article",
      url: `https://blackdiamondbuilders.pk/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Fetch related project case studies
  const relatedProjects = service.relatedProjectSlugs
    .map((pSlug) => getProjectBySlug(pSlug))
    .filter(Boolean);

  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-ivory selection:bg-brand-gold selection:text-brand-black font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* Service Hero Section */}
        <section className="relative w-full py-20 lg:py-28 bg-brand-charcoal/50 border-b border-brand-border/60 overflow-hidden bg-architectural-grid">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-muted mb-8">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-brand-gold transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-brand-gold">{service.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="gold" size="md" pulse icon={<MoustacheIcon size={16} />}>
                    {service.heroBadge}
                  </Badge>
                  <Badge variant="dark" size="md" icon={<CaneIcon size={16} />}>
                    Stick Verified
                  </Badge>
                  <Badge variant="outline" size="md">
                    Twin Cities Corridor
                  </Badge>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-ivory tracking-tight leading-[1.1]">
                  {service.title}
                </h1>

                <p className="text-base sm:text-xl text-brand-gold/90 font-mono">
                  {service.subtitle}
                </p>

                <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
                  {service.overview}
                </p>

                {/* Philosophical Quote Box */}
                <div className="p-6 rounded-2xl bg-brand-dark/90 border-l-4 border-brand-gold border-r border-y border-brand-border/60 shadow-xl">
                  <p className="font-serif italic text-base sm:text-lg text-brand-ivory mb-2 leading-relaxed">
                    “{service.philosophicalQuote}”
                  </p>
                  <span className="text-xs text-brand-gold font-mono uppercase tracking-wider block">
                    — {service.quoteAttribution}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={service.conversionCta.primaryButtonHref}
                    className="px-7 py-3.5 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-xl"
                  >
                    <span>{service.conversionCta.primaryButtonText}</span>
                    <MoustacheIcon size={18} />
                  </Link>

                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Assalam-o-Alaikum%20Furqan%20Bhai%2C%20I%20would%20like%20to%20discuss%20your%20${encodeURIComponent(
                      service.title
                    )}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg"
                  >
                    <span>Discuss Scope on WhatsApp</span>
                    <span>💬</span>
                  </a>
                </div>
              </div>

              {/* Quick Specification Card */}
              <div className="lg:col-span-4">
                <Card variant="gold" className="p-6 sm:p-8 flex flex-col gap-5 border-brand-gold/60">
                  <div className="flex items-center justify-between border-b border-brand-gold/30 pb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold">
                      Service Snapshot
                    </span>
                    <ChallengeSeal size="sm" />
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-brand-muted uppercase block">
                      Indicative Timeline
                    </span>
                    <span className="text-sm font-semibold text-brand-ivory">
                      {service.indicativeTimeline}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-brand-muted uppercase block">
                      Pricing Benchmarks
                    </span>
                    <div className="flex flex-col gap-1 mt-1">
                      {service.pricingTiers.map((tier, idx) => (
                        <div key={idx} className="text-xs">
                          <span className="text-brand-ivory font-medium">{tier.tierName}: </span>
                          <span className="text-brand-gold font-bold">{tier.rateRange}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] text-brand-muted/80 block mt-1">
                      *Preliminary benchmarks subject to soil & signed BOQ.
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-brand-muted uppercase block">
                      Inspection Standard
                    </span>
                    <span className="text-xs text-brand-ivory flex items-center gap-1.5 mt-0.5">
                      <CaneIcon size={16} />
                      <span>Physical Stick & Laser Verification</span>
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-2 w-full py-3 rounded-lg bg-brand-black border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all text-xs font-bold uppercase tracking-wider text-center"
                  >
                    Request Line-Item BOQ
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Laser Plumb Stick Divider */}
        <StickDivider label="ENGINEERING RIGOR OVER SURFACE FLUFF • 0MM TOLERANCE" />

        {/* Section 2: Comprehensive Scope & Deliverables */}
        <section className="w-full py-20 bg-brand-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                Scope of Work
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-ivory mt-2 mb-4">
                WHAT WE ENGINEER & DELIVER
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Every milestone itemized. No hidden clauses, no surprise bills halfway through construction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.keyDeliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-brand-dark border border-brand-border hover:border-brand-gold/50 transition-all flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-brand-ivory font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: 5-Stage Engineering Process */}
        <section className="w-full py-20 bg-brand-charcoal/30 border-y border-brand-border/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                Milestone Workflow
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-ivory mt-2 mb-4">
                THE 5-STAGE EXECUTION DISCIPLINE
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Step-by-step progress tracking with physical quality control checkpoints before any invoice is released.
              </p>
            </div>

            <div className="space-y-6">
              {service.processStages.map((stage) => (
                <div
                  key={stage.stepNumber}
                  className="p-6 sm:p-8 rounded-2xl bg-brand-dark border border-brand-border hover:border-brand-gold/50 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                >
                  <div className="lg:col-span-4 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-brand-surface border border-brand-gold/60 flex items-center justify-center text-brand-gold font-serif font-bold text-2xl shrink-0">
                      {stage.stepNumber}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-brand-gold uppercase tracking-wider">
                        {stage.duration}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-ivory">
                        {stage.title}
                      </h3>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-3">
                      {stage.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stage.deliverables.map((del, dIdx) => (
                        <span
                          key={dIdx}
                          className="px-2.5 py-1 rounded bg-brand-surface border border-brand-border text-[11px] text-brand-ivory font-mono"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-3 pt-4 lg:pt-0 lg:border-l lg:border-brand-border/60 lg:pl-6">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold font-bold block mb-1">
                      Quality Checkpoint:
                    </span>
                    <p className="text-xs text-brand-ivory/90 font-medium leading-snug">
                      {stage.qualityControl}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Technical Standards & Anti-Shapper Table */}
        <section className="w-full py-20 bg-brand-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                Technical Rigor
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-ivory mt-2 mb-3">
                GOVERNING ENGINEERING STANDARDS
              </h2>
              <p className="text-sm text-brand-muted">
                How our technical specifications compare directly with cut-corner market shortcuts.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-brand-border bg-brand-dark mb-16">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-brand-border/80 bg-brand-surface/80 text-brand-ivory font-serif">
                    <th className="py-4 px-6 uppercase tracking-wider">Engineering Aspect</th>
                    <th className="py-4 px-6 uppercase tracking-wider text-brand-gold">Black Diamond Specification</th>
                    <th className="py-4 px-6 uppercase tracking-wider">Governing Code</th>
                    <th className="py-4 px-6 uppercase tracking-wider text-rose-400">Market Shortcut (“Shapper”)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/50 text-brand-muted">
                  {service.technicalStandards.map((std, idx) => (
                    <tr key={idx}>
                      <td className="py-4 px-6 font-semibold text-brand-ivory">{std.category}</td>
                      <td className="py-4 px-6 text-brand-gold font-medium">{std.specification}</td>
                      <td className="py-4 px-6 font-mono text-xs text-brand-ivory/80">{std.governingStandard}</td>
                      <td className="py-4 px-6 text-rose-300">{std.antiShapperContrast}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Anti-Shapper Checklist Box */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-brand-charcoal via-brand-dark to-brand-charcoal border-2 border-brand-gold/40 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <ChallengeSeal size="sm" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory">
                  Anti-Shapper Quality Protection Checklist
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.antiShapperChecklist.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-brand-black/70 border border-brand-border">
                    <div className="text-[11px] uppercase tracking-wider font-bold text-rose-400 mb-1">
                      ✕ Market Shortcut:
                    </div>
                    <p className="text-xs text-brand-muted mb-3 leading-relaxed">
                      {item.cutShortcut}
                    </p>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-emerald-400 mb-1">
                      ✓ Black Diamond Protocol:
                    </div>
                    <p className="text-xs text-brand-ivory font-medium leading-relaxed">
                      {item.blackDiamondProtocol}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: How To Request A Quotation */}
        <section className="w-full py-20 bg-brand-charcoal/40 border-t border-brand-border/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                Transparent Process
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-ivory mt-2 mb-4">
                HOW TO REQUEST A BINDING QUOTATION
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Four simple steps from preliminary cost estimates to a guaranteed, transparent Bill of Quantities (BOQ).
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-brand-dark border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono font-bold text-sm mb-4">
                    01
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-ivory mb-2">
                    Online Estimate
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Use our interactive Cost Estimator to calculate indicative price ranges based on your plot size (5 Marla, 10 Marla, 1 Kanal) and preferred finish tier.
                  </p>
                </div>
                <Link
                  href="/#estimator"
                  className="mt-6 text-xs text-brand-gold font-mono uppercase tracking-wider hover:underline"
                >
                  Launch Estimator →
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-brand-dark border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono font-bold text-sm mb-4">
                    02
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-ivory mb-2">
                    Drawing Audit
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Submit your architectural and structural drawings to Furqan Butt&apos;s team for a complimentary structural vetting and rebar tonnage audit.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 text-xs text-brand-gold font-mono uppercase tracking-wider hover:underline"
                >
                  Submit Drawings →
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-brand-dark border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono font-bold text-sm mb-4">
                    03
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-ivory mb-2">
                    Site Soil Survey
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    We conduct a physical site inspection across the Twin Cities corridor to verify plot levels, soil strata, and society water/electricity infrastructure.
                  </p>
                </div>
                <span className="mt-6 text-xs text-brand-muted font-mono uppercase tracking-wider">
                  Physical On-Site
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-brand-dark border border-brand-border flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-gold/40 flex items-center justify-center text-brand-gold font-mono font-bold text-sm mb-4">
                    04
                  </div>
                  <h4 className="font-serif text-lg font-bold text-brand-ivory mb-2">
                    Guaranteed BOQ
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Receive an airtight, line-item Bill of Quantities specifying exact steel kilograms, cement bags, tile brands, and milestone escrow schedules.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 text-xs text-brand-gold font-mono uppercase tracking-wider hover:underline"
                >
                  Book Consultation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Service-Specific FAQs */}
        <section className="w-full py-20 bg-brand-black relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                Questions Answered
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory mt-2">
                FREQUENTLY ASKED ABOUT {service.title.toUpperCase()}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-brand-dark border border-brand-border"
                >
                  <h4 className="font-serif text-base sm:text-lg font-bold text-brand-ivory mb-2">
                    Q: {faq.question}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="w-full py-16 bg-brand-charcoal/20 border-t border-brand-border/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-mono text-brand-gold uppercase tracking-wider">
                    Workmanship Evidence
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-ivory">
                    RELATED CASE STUDIES
                  </h3>
                </div>
                <Link
                  href="/projects"
                  className="text-xs font-mono text-brand-gold hover:underline"
                >
                  View All Projects →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((proj) => (
                  <div
                    key={proj!.id}
                    className="p-6 rounded-2xl bg-brand-dark border border-brand-border hover:border-brand-gold/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <Badge variant="gold" size="sm" className="mb-3">
                        {proj!.status}
                      </Badge>
                      <h4 className="font-serif text-xl font-bold text-brand-ivory mb-1">
                        {proj!.title}
                      </h4>
                      <p className="text-xs text-brand-gold font-mono mb-3">
                        {proj!.location} • {proj!.plotSize}
                      </p>
                      <p className="text-xs text-brand-muted leading-relaxed mb-4">
                        {proj!.shortDescription}
                      </p>
                    </div>

                    <Link
                      href={`/projects/${proj!.slug}`}
                      className="text-xs font-bold text-brand-gold hover:underline flex items-center gap-1.5 pt-3 border-t border-brand-border/60"
                    >
                      <span>Read Case Study</span>
                      <span>→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Section 8: Final Conversion Banner */}
        <section className="w-full py-16 bg-brand-dark border-t border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <ChallengeSeal size="sm" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory mt-4 mb-2">
              {service.conversionCta.heading}
            </h3>
            <p className="text-sm text-brand-muted max-w-xl mb-6">
              {service.conversionCta.subheading}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-xl"
              >
                <span>Request Project Quotation</span>
                <MoustacheIcon size={18} />
              </Link>
              <Link
                href="/#estimator"
                className="px-6 py-3.5 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Estimate Construction Cost</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
