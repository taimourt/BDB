import type { Metadata } from "next";
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
import { DETAILED_SERVICES } from "@/data/servicesData";
import { BRAND_INFO, CATCHPHRASES } from "@/data/brandData";

export const metadata: Metadata = {
  title: "Construction Services | Black Diamond Builders Islamabad & Rawalpindi",
  description:
    "Explore Black Diamond Builders' core services: A+ Grey Structure, Turnkey Luxury Construction, Seismic Architectural Design, and Anti-Shapper Structural Remediation.",
  openGraph: {
    title: "Construction Services — Black Diamond Builders",
    description:
      "Engineered with 100% Prime Grade 60 steel, laser levels, and Furqan Butt's on-site acoustic stick audit. Explore our detailed scopes.",
    type: "website",
    url: "https://blackdiamondbuilders.pk/services",
  },
};

export default function ServicesIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-ivory selection:bg-brand-gold selection:text-brand-black font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* Editorial Services Hero */}
        <section className="relative w-full py-20 lg:py-28 bg-brand-charcoal/40 border-b border-brand-border/60 overflow-hidden bg-architectural-grid">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-muted mb-6">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-gold">Services</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <Badge variant="gold" size="md" pulse icon={<MoustacheIcon size={16} />}>
                Authentic Engineering Services
              </Badge>
              <Badge variant="dark" size="md" icon={<CaneIcon size={16} />}>
                Zero Outsourcing
              </Badge>
              <Badge variant="outline" size="md">
                Islamabad • Rawalpindi
              </Badge>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-ivory tracking-tight mb-4 max-w-4xl">
              CONSTRUCTION SERVICES:{" "}
              <span className="text-gold-gradient block sm:inline">
                BUILT ON STRUCTURAL TRUTH
              </span>
            </h1>

            <p className="text-base sm:text-lg text-brand-muted max-w-2xl leading-relaxed mb-8">
              We do not offer 50 generic subcontracted trades. We specialize in the four core construction disciplines that define the lifespan, seismic safety, and luxury value of your property.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#estimator"
                className="px-7 py-3.5 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-xl"
              >
                <span>Calculate Construction Cost</span>
                <MoustacheIcon size={18} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold hover:border-brand-gold text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>Request Project Quotation</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Laser Plumb Stick Divider */}
        <StickDivider label="100% GRADE 60 STEEL • MULTI-AXIS LASER ALIGNMENT • 14-DAY CURING" />

        {/* Services Catalog Grid */}
        <section className="w-full py-20 bg-brand-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {DETAILED_SERVICES.map((service, idx) => (
                <Card
                  key={service.id}
                  variant="dark"
                  glow
                  hoverEffect
                  className="p-8 sm:p-10 flex flex-col justify-between border-brand-border/80 hover:border-brand-gold/60 transition-all relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-brand-gold font-bold">
                        Service 0{idx + 1}
                      </span>
                      <Badge variant="gold" size="sm">
                        {service.heroBadge}
                      </Badge>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory mb-2">
                      {service.title}
                    </h2>

                    <p className="text-xs font-mono uppercase tracking-wider text-brand-gold/90 mb-4">
                      {service.subtitle}
                    </p>

                    <p className="text-sm text-brand-muted leading-relaxed mb-6">
                      {service.overview.slice(0, 220)}...
                    </p>

                    {/* Deliverables snippet */}
                    <div className="mb-6 p-4 rounded-xl bg-brand-surface/70 border border-brand-border/60">
                      <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-brand-ivory mb-3">
                        Key Engineering Scope:
                      </h4>
                      <ul className="flex flex-col gap-2 text-xs text-brand-muted">
                        {service.keyDeliverables.slice(0, 4).map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <span className="text-brand-gold shrink-0">❖</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline & Pricing Snippet */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-brand-black border border-brand-border">
                        <span className="text-brand-muted block text-[10px] uppercase">
                          Indicative Duration:
                        </span>
                        <span className="text-brand-ivory font-semibold">
                          {service.indicativeTimeline.split("(")[0]}
                        </span>
                      </div>
                      <div className="p-3 rounded-lg bg-brand-black border border-brand-border">
                        <span className="text-brand-muted block text-[10px] uppercase">
                          Indicative Benchmark:
                        </span>
                        <span className="text-brand-gold font-semibold">
                          {service.pricingTiers[0]?.rateRange || "Custom BOQ"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="relative z-10 pt-6 border-t border-brand-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <span>Explore Full Scope & Process</span>
                      <span>→</span>
                    </Link>

                    <Link
                      href="/contact"
                      className="w-full sm:w-auto text-xs text-brand-muted hover:text-brand-gold transition-colors text-center font-mono py-2"
                    >
                      Request Quotation ↗
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Engineering Matrix — Shapper vs Black Diamond */}
        <section className="w-full py-20 bg-brand-charcoal/30 border-y border-brand-border/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-brand-gold">
                Comparison
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-ivory mt-2 mb-3">
                THE BLACK DIAMOND SPECIFICATION ADVANTAGE
              </h2>
              <p className="text-sm text-brand-muted">
                How our physical on-site engineering benchmarks eliminate the most common contractor failures in Pakistan.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-brand-border bg-brand-dark">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-brand-border/80 bg-brand-surface/80 text-brand-ivory font-serif">
                    <th className="py-4 px-6 uppercase tracking-wider">Engineering Checkpoint</th>
                    <th className="py-4 px-6 uppercase tracking-wider text-rose-400">Common Market Practice (“Shapper”)</th>
                    <th className="py-4 px-6 uppercase tracking-wider text-brand-gold">Black Diamond Standard</th>
                    <th className="py-4 px-6 uppercase tracking-wider">Verification Protocol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border/50 text-brand-muted">
                  <tr>
                    <td className="py-4 px-6 font-semibold text-brand-ivory">Structural Steel (Rebar)</td>
                    <td className="py-4 px-6 text-rose-300">Uncertified re-rolled scrap mixed into beams to save 25% cost</td>
                    <td className="py-4 px-6 text-brand-gold font-medium">100% Prime Mill-Tested Grade 60 (60,000 PSI) rebar exclusively</td>
                    <td className="py-4 px-6 font-mono text-xs">Mill test certificates + Caliper check</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-brand-ivory">Concrete Curing</td>
                    <td className="py-4 px-6 text-rose-300">Shuttering stripped in 3–4 days to rush to next site</td>
                    <td className="py-4 px-6 text-brand-gold font-medium">14-day mandatory continuous water ponding on all horizontal slabs</td>
                    <td className="py-4 px-6 font-mono text-xs">Physical water depth logs daily</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-brand-ivory">Brickwork & Plaster</td>
                    <td className="py-4 px-6 text-rose-300">Eyeballed walls hidden under 2-inch hollow plaster wedges</td>
                    <td className="py-4 px-6 text-brand-gold font-medium">Multi-axis digital laser projected alignment (0mm deviation)</td>
                    <td className="py-4 px-6 font-mono text-xs">Acoustic stick tapping audit</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-brand-ivory">Basement Waterproofing</td>
                    <td className="py-4 px-6 text-rose-300">Single brush coat of bitumen paint that leaks within 2 monsoons</td>
                    <td className="py-4 px-6 text-brand-gold font-medium">Dual-layer 4mm SBS torch-applied elastomer membrane (ASTM D5147)</td>
                    <td className="py-4 px-6 font-mono text-xs">48-hour hydrostatic flood test</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-brand-ivory">Client Remote Visibility</td>
                    <td className="py-4 px-6 text-rose-300">Staged photos, vague texts, surprise invoices halfway through</td>
                    <td className="py-4 px-6 text-brand-gold font-medium">Uncut 4K weekly WhatsApp video audits + Milestone escrow billing</td>
                    <td className="py-4 px-6 font-mono text-xs">Direct video calls with Furqan Butt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: Conversion Callout */}
        <section className="w-full py-16 bg-brand-dark border-t border-brand-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <ChallengeSeal size="sm" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory mt-4 mb-2">
              Ready To Discuss Your Plot In The Twin Cities?
            </h3>
            <p className="text-sm text-brand-muted max-w-xl mb-6">
              Bring your architectural drawings to our office corridor or schedule an on-site structural audit with Furqan Butt.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Schedule Project Consultation</span>
                <MoustacheIcon size={18} />
              </Link>
              <Link
                href="/#estimator"
                className="px-6 py-3.5 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Launch Construction Cost Estimator</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
