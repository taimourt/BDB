import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { StickDivider } from "@/components/branding/StickDivider";
import { BRAND_INFO } from "@/data/brandData";

export const metadata: Metadata = {
  title: "Construction Portfolio & Case Studies | Black Diamond Builders",
  description:
    "Explore Black Diamond Builders' construction portfolio across Islamabad, Rawalpindi, and surrounding corridors. Filter by residential, commercial, grey structure, and turnkey finishes.",
  openGraph: {
    title: "Construction Portfolio & Case Studies | Black Diamond Builders",
    description:
      "Uncompromising construction luxury and structural evidence across Islamabad and Rawalpindi. Inspected on-site with the stick.",
    type: "website",
    url: "https://blackdiamondbuilders.pk/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-ivory selection:bg-brand-gold selection:text-brand-black font-sans overflow-x-hidden">
      {/* Navigation Header */}
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* Editorial Portfolio Hero Banner */}
        <section className="relative w-full py-20 bg-brand-charcoal/40 border-b border-brand-border/60 overflow-hidden bg-architectural-grid">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-gold/10 blur-[140px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-muted mb-6">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-gold">Portfolio</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <Badge variant="gold" size="md" pulse icon={<MoustacheIcon size={16} />}>
                Workmanship Evidence
              </Badge>
              <Badge variant="dark" size="md" icon={<CaneIcon size={16} />}>
                Inspected With The Stick
              </Badge>
              <Badge variant="outline" size="md">
                [Demonstration Project Data]
              </Badge>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-ivory tracking-tight mb-4">
              CONSTRUCTION PORTFOLIO:{" "}
              <span className="text-gold-gradient block sm:inline">
                EVIDENCE OVER CLAIMS
              </span>
            </h1>

            <p className="text-base sm:text-lg text-brand-muted max-w-2xl leading-relaxed mb-8">
              Explore authentic structural benchmarks from subterranean 1 Kanal basements in Kohistan Enclave to double-height DHA Phase 2 luxury atriums. Filter by sector, scope, or completion status.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#enquiry"
                className="px-6 py-3 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Request Custom Project Quote</span>
                <MoustacheIcon size={18} />
              </Link>

              <a
                href={BRAND_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold hover:border-brand-gold text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <span>Watch Site Inspections</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Laser Plumb Stick Divider */}
        <StickDivider label="MULTI-AXIS LASER MASONRY • 0MM JOINT TOLERANCE" />

        {/* Interactive Filterable Gallery Section */}
        <section className="w-full py-16 bg-brand-black relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <PortfolioGallery />
          </div>
        </section>

        {/* Sticky Conversion Callout Banner */}
        <section className="w-full py-16 bg-brand-dark/90 border-t border-brand-border/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-brand-black via-brand-charcoal to-brand-black border-2 border-brand-gold/60 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="w-16 h-16 rounded-full bg-brand-surface border border-brand-gold/50 flex items-center justify-center text-brand-gold shrink-0">
                  <CaneIcon size={36} />
                </div>
                <div>
                  <span className="text-xs font-serif font-bold uppercase tracking-widest text-brand-gold">
                    Have A Plot In The Twin Cities?
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory mt-1">
                    Demand Uncompromising Structural Rigor.
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-xl leading-relaxed">
                    Bring your architectural drawings to Furqan Butt&apos;s team for a free Anti-Shapper structural audit. We verify your steel tonnage, beam depths, and soil compatibility.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
                <Link
                  href="/#enquiry"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all text-center flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Submit Drawings For Audit</span>
                  <MoustacheIcon size={18} />
                </Link>

                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Assalam-o-Alaikum%2C%20I%20am%20reviewing%20the%20Black%20Diamond%20Builders%20portfolio%20and%20would%20like%20to%20discuss%20my%20plot.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                  <span>💬</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
