"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { FEATURED_PROJECTS } from "@/data/brandData";
import { ProjectCaseStudy } from "@/types";

const PROJ_SLUG_MAP: Record<string, string> = {
  "proj-01": "1-kanal-contemporary-monolith",
  "proj-02": "10-marla-architectural-villa",
  "proj-03": "2-kanal-executive-sanctuary",
};

export const ProjectsPreview: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  return (
    <section id="projects" className="w-full py-24 bg-brand-black border-t border-brand-border/60 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-gold/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Badge variant="gold" size="sm">
                Featured Works
              </Badge>
              <Badge variant="outline" size="sm">
                [Sample Content — Awaiting Client Assets]
              </Badge>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-ivory">
              Signature Construction Projects
            </h2>
            <p className="text-sm sm:text-base text-brand-muted max-w-2xl leading-relaxed">
              Every project is an editorial testament to structural rigor. Explore verified grey structure monuments and turnkey estates across the Islamabad &amp; Rawalpindi corridor.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-brand-black font-serif font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 group"
            >
              <span>Explore Full Portfolio</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                const el = document.getElementById("enquiry");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              rightIcon={<CaneIcon size={18} />}
            >
              Submit Plot
            </Button>
          </div>
        </div>

        {/* 3-Column Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((proj) => (
            <Card
              key={proj.id}
              variant="default"
              hasFacetedCorner
              padding="none"
              className="flex flex-col justify-between group hover:border-brand-gold/70 transition-all duration-300 bg-brand-dark/90"
            >
              <div>
                {/* Verified Media / Photograph Placeholder Container */}
                <div className="relative w-full h-60 bg-gradient-to-b from-brand-charcoal to-brand-dark overflow-hidden border-b border-brand-border flex flex-col items-center justify-center p-6 text-center select-none">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-architectural-grid opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-85" />

                  {/* Visual Content Placeholder Badge */}
                  <div className="relative z-10 flex flex-col items-center gap-2.5">
                    <div className="w-12 h-12 rounded-full bg-brand-surface/90 border border-brand-gold/50 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform shadow-lg">
                      <CaneIcon size={26} />
                    </div>
                    <span className="text-xs uppercase font-serif tracking-widest text-brand-gold font-bold">
                      {proj.plotSize}
                    </span>
                    <span className="text-[10px] text-brand-muted font-mono bg-brand-black/70 px-2 py-0.5 rounded border border-white/10 max-w-[220px] truncate">
                      {proj.mediaPlaceholderNote}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <Badge
                      variant={proj.status === "Completed" ? "success" : "gold"}
                      size="sm"
                    >
                      {proj.status}
                    </Badge>
                  </div>

                  {/* Location Pin Tag */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="text-[10px] font-mono text-brand-ivory bg-brand-black/80 px-2 py-0.5 rounded border border-brand-border">
                      {proj.location.split(",")[0]}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col gap-4 text-left">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold block">
                      {proj.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory group-hover:text-brand-gold-light transition-colors mt-1">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1.5 flex items-center gap-1.5">
                      <span>📍</span>
                      <span>{proj.location}</span>
                    </p>
                  </div>

                  <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                    {proj.shortDescription}
                  </p>

                  {/* Verified Specs Checklist */}
                  <div className="pt-3 border-t border-brand-border/60 flex flex-col gap-1.5">
                    <span className="text-[10px] uppercase font-semibold text-brand-ivory/80 tracking-wider">
                      Verified Structural Specs:
                    </span>
                    {proj.verifiedSpecs.slice(0, 3).map((spec, sIdx) => (
                      <div key={sIdx} className="text-xs text-brand-muted flex items-center gap-2">
                        <span className="text-brand-gold text-[10px]">✓</span>
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Case Study Trigger */}
              <div className="px-6 py-4 bg-brand-charcoal/50 border-t border-brand-border/60 flex items-center justify-between text-xs">
                <span className="text-brand-muted flex items-center gap-1.5">
                  <MoustacheIcon size={16} />
                  <span>Furqan Butt Verified</span>
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="text-brand-muted hover:text-brand-ivory transition-colors text-xs uppercase tracking-wider font-semibold"
                  >
                    Quick Specs
                  </button>
                  <Link
                    href={`/projects/${PROJ_SLUG_MAP[proj.id] || "1-kanal-contemporary-monolith"}`}
                    className="text-brand-gold font-semibold uppercase tracking-wider text-xs hover:text-brand-gold-light transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>Full Dossier</span>
                    <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Case Study Interactive Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-brand-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-brand-dark border-2 border-brand-gold/60 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 text-brand-muted hover:text-brand-ivory text-2xl p-1"
                aria-label="Close Case Study"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="gold" size="sm">
                  {selectedProject.status}
                </Badge>
                <Badge variant="dark" size="sm">
                  {selectedProject.plotSize}
                </Badge>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-xs text-brand-gold font-mono mb-6">
                📍 {selectedProject.location}
              </p>

              {/* Description */}
              <p className="text-sm text-brand-muted leading-relaxed mb-6">
                {selectedProject.shortDescription}
              </p>

              {/* Media Note */}
              <div className="p-4 rounded-xl bg-brand-charcoal border border-brand-border mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <CaneIcon size={28} />
                  <div>
                    <span className="text-xs font-serif font-bold text-brand-ivory block">
                      Authentic Project Media Container
                    </span>
                    <span className="text-[11px] text-brand-muted font-mono">
                      {selectedProject.mediaPlaceholderNote}
                    </span>
                  </div>
                </div>
                <Badge variant="outline" size="sm">
                  Verified Data
                </Badge>
              </div>

              {/* Structural Highlights & Scope Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xl bg-brand-surface border border-brand-border flex flex-col gap-3">
                  <h4 className="font-serif text-xs uppercase tracking-widest text-brand-gold font-bold">
                    Project Scope:
                  </h4>
                  <ul className="flex flex-col gap-2 text-xs text-brand-muted">
                    {selectedProject.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brand-gold text-xs">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-brand-surface border border-brand-border flex flex-col gap-3">
                  <h4 className="font-serif text-xs uppercase tracking-widest text-brand-gold font-bold">
                    Structural Integrity Report:
                  </h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {selectedProject.structuralHighlights}
                  </p>
                  <div className="mt-auto pt-3 border-t border-brand-border/60 flex items-center gap-2 text-xs text-brand-gold">
                    <MoustacheIcon size={18} />
                    <span>Mooch Ko Tao Inspected</span>
                  </div>
                </div>
              </div>

              {/* Modal CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-brand-border">
                <Link
                  href={`/projects/${PROJ_SLUG_MAP[selectedProject.id] || "1-kanal-contemporary-monolith"}`}
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-brand-gold hover:text-brand-gold-light underline flex items-center gap-1 group/link"
                >
                  <span>Open Full Project Dossier &amp; Stages</span>
                  <span className="transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => {
                      const slug = PROJ_SLUG_MAP[selectedProject.id] || "1-kanal-contemporary-monolith";
                      setSelectedProject(null);
                      window.location.href = `/#enquiry?project=${slug}&title=${encodeURIComponent(selectedProject.title)}`;
                    }}
                    rightIcon={<MoustacheIcon size={18} />}
                  >
                    Inquire For This Plot
                  </Button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
