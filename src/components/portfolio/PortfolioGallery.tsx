"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import { PortfolioProject, PortfolioSector, PortfolioScope, PortfolioStatus } from "@/types";

export const PortfolioGallery: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedScope, setSelectedScope] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter logic
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((p) => {
      // Sector filter
      if (selectedSector !== "all" && p.sector !== selectedSector) return false;
      // Scope filter
      if (selectedScope !== "all" && p.scope !== selectedScope) return false;
      // Status filter
      if (selectedStatus !== "all" && p.status !== selectedStatus) return false;
      // Search query (title or location)
      if (
        searchQuery &&
        !p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !p.location.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  }, [selectedSector, selectedScope, selectedStatus, searchQuery]);

  const resetFilters = () => {
    setSelectedSector("all");
    setSelectedScope("all");
    setSelectedStatus("all");
    setSearchQuery("");
  };

  return (
    <div className="w-full flex flex-col gap-10">
      
      {/* Filter Control Center */}
      <div className="p-6 sm:p-8 rounded-2xl bg-brand-dark/95 border border-brand-border/80 shadow-2xl flex flex-col gap-6 text-left">
        
        {/* Top Search & Filter Summary */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-brand-border/60">
          <div>
            <h3 className="font-serif text-lg font-bold text-brand-ivory flex items-center gap-2">
              <span>Filter Verified Demonstration Portfolio</span>
              <CaneIcon size={18} />
            </h3>
            <p className="text-xs text-brand-muted mt-0.5">
              Showing <strong className="text-brand-gold">{filteredProjects.length}</strong> of{" "}
              {PORTFOLIO_PROJECTS.length} projects matching your structural criteria
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search plot or sector..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs rounded-lg bg-brand-surface border border-brand-border text-brand-ivory placeholder:text-brand-muted/50 px-3.5 py-2 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-brand-muted hover:text-brand-ivory"
                >
                  ✕
                </button>
              )}
            </div>

            {(selectedSector !== "all" ||
              selectedScope !== "all" ||
              selectedStatus !== "all" ||
              searchQuery) && (
              <button
                onClick={resetFilters}
                className="text-xs text-brand-gold hover:underline whitespace-nowrap"
              >
                Reset All ✕
              </button>
            )}
          </div>
        </div>

        {/* 3 Discrete Filter Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Sector Filter */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] uppercase font-serif font-bold tracking-wider text-brand-gold">
              Sector:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { value: "all", label: "All Sectors" },
                { value: "residential", label: "Residential" },
                { value: "commercial", label: "Commercial" },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setSelectedSector(item.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedSector === item.value
                      ? "bg-gold-gradient text-brand-black font-semibold shadow-sm"
                      : "bg-brand-surface text-brand-muted hover:text-brand-ivory border border-brand-border/60"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Construction Scope Filter */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] uppercase font-serif font-bold tracking-wider text-brand-gold">
              Discipline / Scope:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { value: "all", label: "All Scopes" },
                { value: "grey-structure", label: "Grey Structure" },
                { value: "finishing-interiors", label: "Finishing & Interiors" },
                { value: "turnkey-luxury", label: "Turnkey Luxury" },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setSelectedScope(item.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedScope === item.value
                      ? "bg-gold-gradient text-brand-black font-semibold shadow-sm"
                      : "bg-brand-surface text-brand-muted hover:text-brand-ivory border border-brand-border/60"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Status Filter */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] uppercase font-serif font-bold tracking-wider text-brand-gold">
              Construction Status:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { value: "all", label: "All Statuses" },
                { value: "completed", label: "Completed" },
                { value: "in-progress", label: "In Progress" },
                { value: "excavation", label: "Excavation Stage" },
              ].map((item) => (
                <button
                  key={item.value}
                  onClick={() => setSelectedStatus(item.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedStatus === item.value
                      ? "bg-gold-gradient text-brand-black font-semibold shadow-sm"
                      : "bg-brand-surface text-brand-muted hover:text-brand-ivory border border-brand-border/60"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-20 px-6 rounded-2xl bg-brand-dark/50 border border-brand-border text-center flex flex-col items-center justify-center gap-4">
          <CaneIcon size={40} className="text-brand-muted" />
          <h4 className="font-serif text-xl font-bold text-brand-ivory">
            No Projects Match These Filter Criteria
          </h4>
          <p className="text-xs text-brand-muted max-w-md">
            Try adjusting your sector, scope, or status filters, or reset all filters to view our full portfolio.
          </p>
          <Button variant="outline" size="sm" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="default"
              hasFacetedCorner
              padding="none"
              className="flex flex-col justify-between group hover:border-brand-gold/70 transition-all duration-300 bg-brand-dark/95 shadow-xl"
            >
              <div>
                {/* Featured Architectural Media Frame */}
                <div className="relative w-full h-64 bg-gradient-to-b from-brand-charcoal to-brand-dark overflow-hidden border-b border-brand-border flex flex-col justify-between p-4 select-none">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-architectural-grid opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/30 opacity-90" />

                  {/* Top Badges Row */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <Badge
                      variant={project.status === "completed" ? "success" : "gold"}
                      size="sm"
                    >
                      {project.status === "completed"
                        ? "Completed Handover"
                        : project.status === "in-progress"
                        ? "Active Construction"
                        : "Sub-Structure Stage"}
                    </Badge>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-ivory bg-brand-black/80 px-2 py-0.5 rounded border border-brand-border">
                      {project.plotSize}
                    </span>
                  </div>

                  {/* Center Media Placeholder Container */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto py-2 text-center">
                    <div className="w-12 h-12 rounded-full bg-brand-surface/90 border border-brand-gold/50 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform shadow-lg mb-2">
                      <CaneIcon size={26} />
                    </div>
                    <span className="text-[10px] text-brand-gold font-mono font-semibold uppercase tracking-wider block">
                      {project.sector.toUpperCase()} • {project.scope.replace("-", " ").toUpperCase()}
                    </span>
                    <span className="text-[9px] text-brand-muted font-mono bg-brand-black/80 px-2 py-0.5 rounded border border-white/10 mt-1 max-w-[220px] truncate">
                      {project.featuredImagePlaceholder}
                    </span>
                  </div>

                  {/* Bottom Strip inside Media Frame */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] text-brand-muted">
                    <span className="flex items-center gap-1 text-brand-ivory">
                      <span>📍</span>
                      <span className="truncate max-w-[160px]">{project.location.split(",")[0]}</span>
                    </span>
                    <span className="font-mono text-brand-gold">{project.coveredArea}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col gap-4 text-left">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold block">
                      {project.subtitle}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-ivory group-hover:text-brand-gold-light transition-colors mt-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-brand-muted mt-1.5 flex items-center gap-1">
                      <span>Corridor:</span>
                      <span className="text-brand-ivory font-medium">{project.cityCorridor}</span>
                    </p>
                  </div>

                  <p className="text-xs text-brand-muted line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Material Specs Snippet */}
                  <div className="pt-3 border-t border-brand-border/60 flex flex-col gap-1.5 text-xs">
                    <span className="text-[10px] uppercase font-semibold text-brand-ivory tracking-wider">
                      Workmanship Disciplines:
                    </span>
                    <div className="flex items-center gap-2 text-brand-muted text-[11px]">
                      <span className="text-brand-gold">✓</span>
                      <span className="truncate">{project.materialsAndWorkmanship.steelGrade}</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-muted text-[11px]">
                      <span className="text-brand-gold">✓</span>
                      <span className="truncate">{project.materialsAndWorkmanship.waterproofing}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Dual Action Links */}
              <div className="p-5 bg-brand-charcoal/50 border-t border-brand-border/60 flex items-center justify-between gap-3 text-xs">
                {/* View Case Study Dynamic Link */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="font-serif text-xs font-bold uppercase tracking-wider text-brand-gold hover:text-brand-gold-light transition-colors flex items-center gap-1 group/link"
                >
                  <span>Full Case Study</span>
                  <span className="transition-transform group-link:translate-x-1">→</span>
                </Link>

                {/* Pre-filled Direct Enquiry Trigger */}
                <Link
                  href={`/#enquiry?project=${project.slug}&plotSize=${encodeURIComponent(
                    project.plotSize
                  )}&title=${encodeURIComponent(project.title)}`}
                  className="px-3 py-1.5 rounded bg-brand-surface hover:bg-brand-charcoal border border-brand-gold/40 text-brand-ivory hover:text-brand-gold text-[11px] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1"
                >
                  <span>Build This</span>
                  <MoustacheIcon size={14} />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Demonstration Data Disclaimer Note */}
      <div className="p-4 rounded-xl bg-brand-charcoal/60 border border-brand-border text-center text-[11px] text-brand-muted">
        <span className="text-brand-gold font-semibold">[Demonstration Portfolio Protocol]:</span> All project specifications, dimensions, and structural disciplines are realistic architectural benchmarks. Actual jobsite photography and client credentials will be populated upon final client verification.
      </div>

    </div>
  );
};
