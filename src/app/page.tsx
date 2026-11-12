import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SignatureIntroduction } from "@/components/sections/SignatureIntroduction";
import { TheChallengeSection } from "@/components/sections/TheChallengeSection";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ShapperResponseSection } from "@/components/sections/ShapperResponseSection";
import { CatchphraseWall } from "@/components/sections/CatchphraseWall";
import { ViralMomentsSection } from "@/components/sections/ViralMomentsSection";
import { ConstructionServicesSection } from "@/components/sections/ConstructionServicesSection";
import { ConstructionCostEstimator } from "@/components/estimator/ConstructionCostEstimator";
import { OverseasPortalSection } from "@/components/sections/OverseasPortalSection";
import { LeadGenerationSection } from "@/components/sections/LeadGenerationSection";
import { WhatsAppContactButton } from "@/components/leads/WhatsAppContactButton";
import { DesignSystemKitchenSink } from "@/components/sections/DesignSystemKitchenSink";
import { StickDivider } from "@/components/branding/StickDivider";
import { SignatureIntroModal } from "@/components/branding/SignatureIntroModal";
import { StickAuditSimulator } from "@/components/interactive/StickAuditSimulator";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-ivory selection:bg-brand-gold selection:text-brand-black font-sans overflow-x-hidden">
      {/* Optional Skippable Signature Brand Intro (Non-blocking, respects reduced-motion) */}
      <SignatureIntroModal />

      {/* Global Navigation Header with Continuous Marquee Ticker & Mobile Drawer */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col w-full">
        {/* 1. Cinematic Hero Section */}
        <HeroSection />

        {/* Signature Stick Visual Motif: Laser Plumb Divider */}
        <StickDivider label="THE INSPECTION STICK • ZERO HOLLOW PLASTER" />

        {/* 2. Signature Introduction: THE MAN. THE MISSION. THE METHOD. */}
        <SignatureIntroduction />

        {/* 3. The Challenge Section with Interactive 'ACCEPT THE CHALLENGE' Reveal */}
        <TheChallengeSection />

        {/* Interactive Cane Audit: Test The Plaster With Furqan Butt's Authentic Stick */}
        <section className="w-full py-16 bg-brand-charcoal/40 border-y border-brand-border/60 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <StickAuditSimulator />
          </div>
        </section>

        {/* 4. Featured Construction Projects with Interactive Case Studies */}
        <ProjectsPreview />

        {/* Signature Stick Visual Motif: Quality Threshold */}
        <StickDivider label="MOOCH KO TAO • 100% PRIME GRADE 60 STEEL" />

        {/* 5. The Shapper Section: SHAPPERS WILL TALK. OUR WORK WILL ANSWER. */}
        <ShapperResponseSection />

        {/* 6. Catchphrase Wall: Client-Approved Quotes with Sharing & Video Slots */}
        <CatchphraseWall />

        {/* 7. Social Media & Viral Moments: YOU KNOW THE CATCHPHRASES. NOW KNOW THE WORK. */}
        <ViralMomentsSection />

        {/* 8. Construction Services (Only real offerings) */}
        <ConstructionServicesSection />

        {/* Signature Stick Visual Motif: Cost Transparency */}
        <StickDivider label="RADICAL COST TRANSPARENCY • ZERO HIDDEN SURPRISES" />

        {/* 9. Construction Cost Estimator: Interactive Benchmark Calculator */}
        <ConstructionCostEstimator />

        {/* 10. Dedicated Overseas Pakistanis Desk */}
        <OverseasPortalSection />

        {/* 11. Multi-Step Construction Enquiry Form: APNA GHAR BANWANA HAI? */}
        <LeadGenerationSection />

        {/* 12. UI Design System & Component Library Inspector (Expandable) */}
        <DesignSystemKitchenSink />
      </main>

      {/* Floating Configurable WhatsApp Direct Action Widget */}
      <WhatsAppContactButton />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
