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
  PORTFOLIO_PROJECTS,
  getProjectBySlug,
  getRelatedProjects,
} from "@/data/portfolioData";
import { BRAND_INFO } from "@/data/brandData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Statically generate routes for all projects
export async function generateStaticParams() {
  return PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

// Generate dynamic SEO metadata per project
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Black Diamond Builders",
      description: "The requested project case study could not be found.",
    };
  }

  return {
    title: `${project.title} | Construction Case Study | Black Diamond Builders`,
    description: `${project.shortDescription} Located in ${project.location}. Inspected with the stick by Furqan Butt.`,
    openGraph: {
      title: `${project.title} — Construction Case Study`,
      description: project.shortDescription,
      type: "article",
      url: `https://blackdiamondbuilders.pk/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug);

  // Pre-filled WhatsApp enquiry link carrying project name
  const whatsappProjectUrl = `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Assalam-o-Alaikum Black Diamond Builders Team, I am interested in building a project similar to "${project.title}" (${project.plotSize}) in Pakistan. Please advise on architectural requirements and preliminary BOQ.`
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-ivory selection:bg-brand-gold selection:text-brand-black font-sans overflow-x-hidden">
      {/* Navigation Header */}
      <Header />

      <main className="flex-1 flex flex-col w-full">
        
        {/* 1. Large Architectural Hero Header */}
        <section className="relative w-full pt-12 pb-20 bg-brand-charcoal/50 border-b border-brand-border/60 overflow-hidden bg-architectural-grid">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-mono text-brand-muted mb-8 select-none"
            >
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-brand-gold transition-colors">
                Portfolio
              </Link>
              <span>/</span>
              <span className="text-brand-gold truncate max-w-[200px] sm:max-w-none">
                {project.title}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Title & Metadata */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge
                    variant={project.status === "completed" ? "success" : "gold"}
                    size="md"
                    pulse={project.status === "in-progress"}
                  >
                    {project.status === "completed"
                      ? "Completed Handover"
                      : project.status === "in-progress"
                      ? "Active Construction"
                      : "Excavation Stage"}
                  </Badge>

                  <Badge variant="dark" size="md">
                    {project.sector.toUpperCase()} • {project.scope.replace("-", " ").toUpperCase()}
                  </Badge>

                  <Badge variant="outline" size="md">
                    {project.plotSize}
                  </Badge>
                </div>

                <span className="text-xs uppercase font-serif font-bold tracking-[0.25em] text-brand-gold mb-2 block">
                  {project.subtitle}
                </span>

                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-brand-ivory tracking-tight mb-4 leading-tight">
                  {project.title}
                </h1>

                <p className="text-xs sm:text-sm text-brand-gold font-mono mb-6 flex items-center gap-2">
                  <span>📍</span>
                  <span>{project.location}</span>
                  <span className="text-brand-border">•</span>
                  <span>Covered Area: {project.coveredArea}</span>
                </p>

                <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-8">
                  {project.fullOverview}
                </p>

                {/* Primary Conversion CTA */}
                <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                  <Link
                    href={`/#enquiry?project=${project.slug}&title=${encodeURIComponent(
                      project.title
                    )}&plotSize=${encodeURIComponent(project.plotSize)}`}
                    className="px-7 py-3.5 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2.5 shadow-xl"
                  >
                    <span>WANT A PROJECT LIKE THIS?</span>
                    <MoustacheIcon size={18} />
                  </Link>

                  <a
                    href={whatsappProjectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-lg"
                  >
                    <span>Discuss via WhatsApp</span>
                    <span>💬</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Frame */}
              <div className="lg:col-span-5 relative w-full">
                <div className="relative rounded-2xl overflow-hidden border-2 border-brand-gold/60 bg-gradient-to-b from-brand-charcoal via-brand-dark to-brand-black shadow-2xl p-6 flex flex-col justify-between min-h-[360px] text-left">
                  <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />

                  {/* Top Bar */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono text-brand-gold bg-brand-black/80 px-2.5 py-1 rounded border border-brand-gold/40">
                      Architectural Case Study Media
                    </span>
                    <CaneIcon size={24} />
                  </div>

                  {/* Central Visual Identifier */}
                  <div className="relative z-10 my-auto py-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-brand-surface border border-brand-gold/50 flex items-center justify-center text-brand-gold shadow-xl mb-3">
                      <MoustacheIcon size={34} />
                    </div>
                    <span className="font-serif text-lg font-bold text-brand-ivory block">
                      {project.title}
                    </span>
                    <span className="text-[10px] text-brand-muted font-mono mt-1 bg-brand-black/80 px-3 py-1 rounded border border-white/10 max-w-[280px]">
                      {project.featuredImagePlaceholder}
                    </span>
                  </div>

                  {/* Bottom Verification Note */}
                  <div className="relative z-10 pt-3 border-t border-brand-border/60 text-[10px] text-brand-gold font-mono flex items-center justify-between">
                    <span>Furqan Butt Verified Site</span>
                    <span>{project.cityCorridor}</span>
                  </div>
                </div>

                {/* Subtle Ambient Underglow */}
                <div className="absolute -inset-2 bg-brand-gold/20 blur-xl -z-10 rounded-2xl pointer-events-none" />
              </div>

            </div>

          </div>
        </section>

        {/* Laser Plumb Stick Divider */}
        <StickDivider label="ENGINEERED INTEGRITY • INSPECTED WITH THE STICK" />

        {/* 2. Project Overview & Quick Specifications Bar */}
        <section className="w-full py-12 bg-brand-black border-b border-brand-border/60 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl bg-brand-dark border border-brand-border text-left">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-serif font-bold tracking-widest text-brand-gold">
                  Plot Dimensions:
                </span>
                <span className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory mt-1">
                  {project.plotSize}
                </span>
                <span className="text-xs text-brand-muted mt-0.5">{project.coveredArea}</span>
              </div>

              <div className="flex flex-col border-l border-brand-border/60 pl-6">
                <span className="text-[10px] uppercase font-serif font-bold tracking-widest text-brand-gold">
                  Location &amp; Corridor:
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-brand-ivory mt-1">
                  {project.cityCorridor}
                </span>
                <span className="text-xs text-brand-muted truncate mt-0.5">{project.location.split(",")[0]}</span>
              </div>

              <div className="flex flex-col border-l border-brand-border/60 pl-6">
                <span className="text-[10px] uppercase font-serif font-bold tracking-widest text-brand-gold">
                  Primary Steel Spec:
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-brand-ivory mt-1">
                  Prime Grade 60
                </span>
                <span className="text-xs text-brand-muted mt-0.5">Mill Tested Rebar</span>
              </div>

              <div className="flex flex-col border-l border-brand-border/60 pl-6">
                <span className="text-[10px] uppercase font-serif font-bold tracking-widest text-brand-gold">
                  Inspection Seal:
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-brand-gold mt-1 flex items-center gap-1.5">
                  <MoustacheIcon size={18} />
                  <span>Mooch Ko Tao</span>
                </span>
                <span className="text-xs text-brand-muted mt-0.5">The Stick Audit</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Client Requirements & Special Engineering Challenges */}
        <section className="w-full py-16 bg-brand-dark/40 border-b border-brand-border/60 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Client Brief */}
              <Card variant="default" hasFacetedCorner padding="lg">
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                  <span className="text-xs font-serif font-bold uppercase tracking-widest text-brand-gold">
                    01 / Client Profile &amp; Objectives
                  </span>
                  <Badge variant="gold" size="sm">
                    {project.clientRequirements.clientType}
                  </Badge>
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-ivory mb-4">
                  Client Brief &amp; Key Priorities
                </h3>

                <ul className="flex flex-col gap-3 text-xs text-brand-muted mb-6">
                  {project.clientRequirements.primaryNeeds.map((need, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-brand-gold font-bold text-xs mt-0.5">◆</span>
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-brand-border/60 flex items-center gap-2 text-xs text-brand-gold">
                  <CaneIcon size={18} />
                  <span>Transparent BOQ with zero hidden escalations</span>
                </div>
              </Card>

              {/* Special Engineering Challenges */}
              <Card variant="gold-rim" hasFacetedCorner padding="lg">
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-6">
                  <span className="text-xs font-serif font-bold uppercase tracking-widest text-brand-gold">
                    02 / Engineering Hurdle Solved
                  </span>
                  <Badge variant="shapper" size="sm">
                    Anti-Compromise
                  </Badge>
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-ivory mb-4">
                  Structural &amp; Soil Challenges
                </h3>

                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                  {project.clientRequirements.specialChallenges}
                </p>

                {/* Scope Checklist */}
                <div className="p-4 rounded-xl bg-brand-surface/80 border border-brand-border mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-ivory block mb-2">
                    Verified Engineering Scope:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-brand-muted">
                    {project.projectScope.slice(0, 4).map((scopeItem, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span className="truncate">{scopeItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

            </div>
          </div>
        </section>

        {/* 4. Materials & Workmanship Evidence Details */}
        <section className="w-full py-20 bg-brand-black border-b border-brand-border/60 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge variant="gold" size="sm" pulse>
                Technical Evidence
              </Badge>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-ivory mt-2 mb-3">
                Material &amp; Workmanship Audit
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                We don&apos;t ask you to trust our word. Every square foot is documented with certified steel batch slips, concrete cylinder compressive reports, and acoustic stick checks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Steel Spec */}
              <div className="p-6 rounded-xl bg-brand-dark border border-brand-gold/40 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded bg-brand-surface border border-brand-gold/30 flex items-center justify-center text-brand-gold text-xs font-mono font-bold mb-3">
                    01
                  </div>
                  <span className="text-[10px] uppercase font-serif tracking-widest text-brand-gold font-bold">
                    Structural Steel
                  </span>
                  <h4 className="font-serif text-base font-bold text-brand-ivory mt-1 mb-2">
                    {project.materialsAndWorkmanship.steelGrade}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {project.materialsAndWorkmanship.steelProof}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-brand-border/60 text-[10px] text-brand-gold flex items-center gap-1">
                  <span>✓ Mill Certified Batch</span>
                </div>
              </div>

              {/* Concrete Mix */}
              <div className="p-6 rounded-xl bg-brand-dark border border-brand-border/80 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold text-xs font-mono font-bold mb-3">
                    02
                  </div>
                  <span className="text-[10px] uppercase font-serif tracking-widest text-brand-gold font-bold">
                    Concrete &amp; Compaction
                  </span>
                  <h4 className="font-serif text-base font-bold text-brand-ivory mt-1 mb-2">
                    {project.materialsAndWorkmanship.concreteMix}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {project.materialsAndWorkmanship.concreteProof}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-brand-border/60 text-[10px] text-brand-gold flex items-center gap-1">
                  <span>✓ 14-Day Water Ponding</span>
                </div>
              </div>

              {/* Masonry Plumb */}
              <div className="p-6 rounded-xl bg-brand-dark border border-brand-border/80 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold text-xs font-mono font-bold mb-3">
                    03
                  </div>
                  <span className="text-[10px] uppercase font-serif tracking-widest text-brand-gold font-bold">
                    Laser Masonry
                  </span>
                  <h4 className="font-serif text-base font-bold text-brand-ivory mt-1 mb-2">
                    {project.materialsAndWorkmanship.masonryAlignment}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {project.materialsAndWorkmanship.masonryProof}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-brand-border/60 text-[10px] text-brand-gold flex items-center gap-1">
                  <span>✓ 0mm Joint Deviation</span>
                </div>
              </div>

              {/* Waterproofing & Stick Audit */}
              <div className="p-6 rounded-xl bg-brand-dark border border-brand-gold/40 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded bg-brand-surface border border-brand-gold/30 flex items-center justify-center text-brand-gold text-xs font-mono font-bold mb-3">
                    04
                  </div>
                  <span className="text-[10px] uppercase font-serif tracking-widest text-brand-gold font-bold">
                    Moisture Defense
                  </span>
                  <h4 className="font-serif text-base font-bold text-brand-ivory mt-1 mb-2">
                    {project.materialsAndWorkmanship.waterproofing}
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {project.materialsAndWorkmanship.waterproofingProof}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-brand-border/60 text-[10px] text-brand-gold flex items-center gap-1">
                  <CaneIcon size={14} />
                  <span>Tested with the stick</span>
                </div>
              </div>

            </div>

            {/* Stick Audit Report Callout Banner */}
            <div className="mt-10 p-6 rounded-xl bg-brand-charcoal border border-brand-gold/50 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                <CaneIcon size={32} className="shrink-0" />
                <div>
                  <span className="text-xs font-serif font-bold uppercase tracking-wider text-brand-gold">
                    Furqan Butt&apos;s On-Site Stick Audit Verdict:
                  </span>
                  <p className="text-xs sm:text-sm text-brand-ivory font-serif italic mt-0.5">
                    “{project.materialsAndWorkmanship.stickAuditSummary}”
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <MoustacheIcon size={24} />
                <span className="text-[11px] font-mono uppercase text-brand-gold font-bold">
                  Guaranteed
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Construction Stages & Progress Timeline */}
        <section className="w-full py-20 bg-brand-dark/50 border-b border-brand-border/60 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <Badge variant="gold" size="sm">
                  Chronological Milestone Verification
                </Badge>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-ivory mt-2">
                  Construction Stages &amp; Evidence
                </h2>
              </div>
              <span className="text-xs font-mono text-brand-muted">
                Stage Checkpoints Audited Before Invoice Billing
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.stages.map((stage) => (
                <Card
                  key={stage.stageNumber}
                  variant="default"
                  hasFacetedCorner
                  padding="none"
                  className="flex flex-col justify-between bg-brand-dark/95 border-brand-border/80"
                >
                  {/* Stage Media Placeholder Container */}
                  <div className="relative w-full h-48 bg-brand-charcoal border-b border-brand-border flex flex-col justify-between p-4">
                    <div className="absolute inset-0 bg-architectural-grid opacity-20" />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-brand-gold bg-brand-black/80 px-2 py-0.5 rounded border border-brand-gold/30">
                        STAGE {stage.stageNumber}
                      </span>
                      <Badge
                        variant={stage.status === "Completed" ? "success" : "gold"}
                        size="sm"
                      >
                        {stage.status}
                      </Badge>
                    </div>

                    <div className="relative z-10 my-auto text-center py-2">
                      <CaneIcon size={24} className="mx-auto mb-1 text-brand-gold" />
                      <span className="text-[10px] text-brand-muted font-mono bg-brand-black/80 px-2.5 py-1 rounded border border-white/10 block truncate max-w-[220px] mx-auto">
                        {stage.mediaPlaceholder}
                      </span>
                    </div>

                    <div className="relative z-10 text-[10px] text-brand-muted font-mono">
                      {stage.durationEstimate}
                    </div>
                  </div>

                  {/* Stage Body */}
                  <div className="p-6 flex flex-col gap-3">
                    <h4 className="font-serif text-lg font-bold text-brand-ivory">
                      {stage.stageName}
                    </h4>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="p-3 rounded-lg bg-brand-surface border border-brand-border text-[11px] text-brand-ivory mt-2">
                      <strong className="text-brand-gold block text-[10px] uppercase font-mono mb-0.5">
                        Inspection Checkpoint:
                      </strong>
                      {stage.inspectionCheckpoint}
                    </div>

                    {/* Evidence Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {stage.evidenceTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-brand-black text-brand-gold border border-brand-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Before-and-After Progression Gallery */}
        {project.beforeAfterGallery.length > 0 && (
          <section className="w-full py-20 bg-brand-black border-b border-brand-border/60 text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <Badge variant="gold" size="sm">
                  Progression Evidence
                </Badge>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-ivory mt-2 mb-2">
                  Transformation Gallery
                </h2>
                <p className="text-xs sm:text-sm text-brand-muted">
                  From raw sub-grade excavation to monolithic architectural luxury.
                </p>
              </div>

              <div className="flex flex-col gap-10">
                {project.beforeAfterGallery.map((pair) => (
                  <div
                    key={pair.id}
                    className="p-6 sm:p-8 rounded-2xl bg-brand-dark border border-brand-border/80 flex flex-col gap-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-brand-border/60">
                      <div>
                        <h4 className="font-serif text-xl font-bold text-brand-ivory">
                          {pair.title}
                        </h4>
                        <p className="text-xs text-brand-muted mt-0.5">{pair.description}</p>
                      </div>
                      <CaneIcon size={22} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Before Box */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-serif font-bold uppercase text-brand-gold tracking-wider">
                            Phase Before:
                          </span>
                          <span className="text-brand-muted text-[11px]">{pair.beforeStage}</span>
                        </div>
                        <div className="relative aspect-video w-full rounded-xl bg-brand-charcoal border border-brand-border overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none">
                          <div className="absolute inset-0 bg-architectural-grid opacity-20" />
                          <span className="text-xs font-mono text-brand-muted bg-brand-black px-3 py-1 rounded border border-white/10 max-w-[280px]">
                            {pair.beforePlaceholder}
                          </span>
                        </div>
                      </div>

                      {/* After Box */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-serif font-bold uppercase text-brand-gold tracking-wider">
                            Phase After:
                          </span>
                          <span className="text-brand-muted text-[11px]">{pair.afterStage}</span>
                        </div>
                        <div className="relative aspect-video w-full rounded-xl bg-brand-charcoal border border-brand-gold/40 overflow-hidden flex flex-col items-center justify-center p-6 text-center select-none">
                          <div className="absolute inset-0 bg-architectural-grid opacity-20" />
                          <span className="text-xs font-mono text-brand-gold bg-brand-black px-3 py-1 rounded border border-brand-gold/30 max-w-[280px]">
                            {pair.afterPlaceholder}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 7. Walkthrough Video Container */}
        <section className="w-full py-20 bg-brand-dark/40 border-b border-brand-border/60 text-left">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-brand-charcoal to-brand-black border-2 border-brand-gold/60 shadow-2xl flex flex-col gap-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-border/60">
                <div>
                  <Badge variant="gold" size="sm" className="mb-1">
                    Authentic Walkthrough Video
                  </Badge>
                  <h3 className="font-serif text-2xl font-bold text-brand-ivory">
                    {project.walkthroughVideo.title}
                  </h3>
                </div>
                <a
                  href={project.walkthroughVideo.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <span>Watch on TikTok</span>
                  <span>↗</span>
                </a>
              </div>

              {/* Video Player Placeholder Frame */}
              <div className="relative aspect-video w-full rounded-xl bg-brand-black border border-brand-border flex flex-col items-center justify-center p-8 text-center overflow-hidden group">
                <div className="absolute inset-0 bg-architectural-grid opacity-25" />
                <div className="w-16 h-16 rounded-full bg-gold-gradient text-brand-black flex items-center justify-center shadow-2xl mb-3 group-hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-serif text-base font-bold text-brand-ivory">
                  {project.walkthroughVideo.title}
                </span>
                <span className="text-xs text-brand-muted font-mono mt-2 bg-brand-dark px-3 py-1 rounded border border-brand-border max-w-sm">
                  {project.walkthroughVideo.mediaPlaceholderNote}
                </span>
              </div>

              <p className="text-xs text-brand-muted leading-relaxed">
                {project.walkthroughVideo.description}
              </p>
            </div>
          </div>
        </section>

        {/* 8. Verified Completion & Warranty Status */}
        <section className="w-full py-16 bg-brand-black border-b border-brand-border/60 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface/40 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-dark border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0">
                  <ChallengeSeal size="sm" />
                </div>
                <div>
                  <span className="text-xs uppercase font-serif font-bold tracking-wider text-brand-gold block">
                    Handover &amp; Warranty Certificate:
                  </span>
                  <h4 className="font-serif text-lg font-bold text-brand-ivory mt-0.5">
                    {project.completionData.warrantyStatus}
                  </h4>
                  <p className="text-xs text-brand-muted mt-1 font-mono">
                    {project.completionData.demonstrationDataDisclaimer}
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono text-brand-gold bg-brand-black px-4 py-2 rounded border border-brand-gold/30 shrink-0">
                {project.completionData.deliveredDatePlaceholder}
              </div>
            </div>
          </div>
        </section>

        {/* 9. Conversion Section: “WANT A PROJECT LIKE THIS?” */}
        <section id="enquiry" className="w-full py-24 bg-brand-dark relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <Badge variant="gold" size="md" pulse icon={<MoustacheIcon size={18} />}>
              Bespoke Construction Consultation
            </Badge>

            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-brand-ivory tracking-tight mt-4 mb-4">
              WANT A PROJECT LIKE THIS?
            </h2>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-8 max-w-2xl mx-auto">
              Whether you own a plot in <strong className="text-brand-ivory">{project.location}</strong> or are acquiring land elsewhere across the twin cities, our senior engineering team will prepare an itemized bill of quantities (BOQ) with guaranteed Grade 60 steel specs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/#enquiry?project=${project.slug}&title=${encodeURIComponent(
                  project.title
                )}&plotSize=${encodeURIComponent(project.plotSize)}`}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <span>REQUEST BOQ FOR {project.plotSize.toUpperCase()}</span>
                <MoustacheIcon size={18} />
              </Link>

              <a
                href={whatsappProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>WhatsApp Directly</span>
                <span>💬</span>
              </a>
            </div>
          </div>
        </section>

        {/* 10. Related Projects Grid */}
        {relatedProjects.length > 0 && (
          <section className="w-full py-20 bg-brand-black border-t border-brand-border/60 text-left">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-10 pb-4 border-b border-brand-border/60">
                <div>
                  <span className="text-xs font-serif font-bold uppercase tracking-widest text-brand-gold">
                    Continue Exploring
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-ivory mt-0.5">
                    Related Construction Case Studies
                  </h3>
                </div>

                <Link
                  href="/projects"
                  className="text-xs uppercase font-serif font-bold text-brand-gold hover:underline flex items-center gap-1"
                >
                  <span>View All Projects</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map((rel) => (
                  <Card
                    key={rel.id}
                    variant="default"
                    hasFacetedCorner
                    padding="none"
                    className="flex flex-col justify-between group hover:border-brand-gold/60 transition-all bg-brand-dark/95"
                  >
                    <div className="p-6 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="gold" size="sm">
                          {rel.plotSize}
                        </Badge>
                        <span className="text-[10px] font-mono text-brand-muted">
                          {rel.cityCorridor}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-brand-ivory group-hover:text-brand-gold transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-brand-muted line-clamp-2">
                        {rel.shortDescription}
                      </p>
                    </div>

                    <div className="p-4 bg-brand-charcoal/50 border-t border-brand-border/60 flex items-center justify-between text-xs">
                      <span className="text-brand-gold text-[11px] font-mono">
                        {rel.status.toUpperCase()}
                      </span>
                      <Link
                        href={`/projects/${rel.slug}`}
                        className="text-brand-ivory group-hover:text-brand-gold transition-colors font-semibold flex items-center gap-1"
                      >
                        <span>Case Study</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
