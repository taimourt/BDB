"use client";

import React, { useState, useMemo } from "react";
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
import { FAQS, FAQ_CATEGORIES } from "@/data/faqData";
import { BRAND_INFO } from "@/data/brandData";

export default function FaqPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    "faq-q1": true,
    "faq-c1": true,
  });

  const toggleFaq = (id: string) => {
    setOpenFaqIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory =
        selectedCategory === "all" || faq.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.highlightKey &&
          faq.highlightKey.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-brand-ivory selection:bg-brand-gold selection:text-brand-black font-sans overflow-x-hidden">
      <Header />

      <main className="flex-1 flex flex-col w-full">
        {/* Editorial FAQ Hero */}
        <section className="relative w-full py-20 lg:py-24 bg-brand-charcoal/40 border-b border-brand-border/60 overflow-hidden bg-architectural-grid">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-brand-gold/10 blur-[150px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-muted mb-6">
              <Link href="/" className="hover:text-brand-gold transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-brand-gold">FAQs</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <Badge variant="gold" size="md" pulse icon={<MoustacheIcon size={16} />}>
                Verified Answers
              </Badge>
              <Badge variant="dark" size="md" icon={<CaneIcon size={16} />}>
                Transparent Engineering
              </Badge>
              <Badge variant="outline" size="md">
                Indicative Benchmarks
              </Badge>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-ivory tracking-tight mb-4">
              FREQUENTLY ASKED QUESTIONS &{" "}
              <span className="text-gold-gradient block sm:inline">
                PRICE BENCHMARKS
              </span>
            </h1>

            <p className="text-base sm:text-lg text-brand-muted max-w-2xl leading-relaxed mb-8">
              Straightforward answers about our Grade 60 steel guarantees, 14-day curing cycles, itemized BOQs, construction timelines, and remote overseas project governance.
            </p>

            {/* Live Search Bar */}
            <div className="w-full max-w-xl relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, e.g. Grade 60, Overseas, 14-day ponding, BOQ..."
                className="w-full py-4 pl-12 pr-4 rounded-xl bg-brand-dark/90 border border-brand-border focus:border-brand-gold text-brand-ivory text-sm placeholder:text-brand-muted/70 focus:outline-none shadow-2xl transition-all font-sans"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold text-base">
                🔍
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-brand-muted hover:text-brand-ivory font-mono"
                >
                  Clear ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Laser Plumb Stick Divider */}
        <StickDivider label="HONEST ANSWERS • NO EVASIVE CONTRACTOR EXCUSES" />

        {/* Main Content Area */}
        <section className="w-full py-16 bg-brand-black relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedCategory === "all"
                    ? "bg-gold-gradient text-brand-black shadow-lg"
                    : "bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-ivory hover:border-brand-gold/60"
                }`}
              >
                All Topics ({FAQS.length})
              </button>
              {FAQ_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-gold-gradient text-brand-black shadow-lg"
                      : "bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-ivory hover:border-brand-gold/60"
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Indicative Disclaimer Notice Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-brand-dark/80 border border-brand-gold/40 mb-10 flex items-start gap-4">
              <div className="p-2 rounded-lg bg-brand-surface border border-brand-gold/40 text-brand-gold shrink-0 mt-0.5">
                <CaneIcon size={20} />
              </div>
              <div className="text-xs text-brand-muted leading-relaxed">
                <span className="font-bold text-brand-gold uppercase tracking-wider block mb-1">
                  Indicative Benchmark Notice:
                </span>
                All construction rates (e.g. PKR per sq.ft) and project timelines mentioned on this website are preliminary indicative guidelines based on standard double-story residential builds. Binding quotations are formulated exclusively through laboratory soil tests, approved architectural drawings, and a signed line-item Bill of Quantities (BOQ).
              </div>
            </div>

            {/* Accordion Questions List */}
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 p-8 rounded-2xl bg-brand-dark border border-brand-border">
                <p className="text-sm text-brand-muted">
                  No questions match your search query &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 text-xs font-mono text-brand-gold hover:underline"
                >
                  Reset Filters & View All FAQs
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => {
                  const isOpen = !!openFaqIds[faq.id];
                  return (
                    <div
                      key={faq.id}
                      className="rounded-2xl bg-brand-dark border border-brand-border/80 hover:border-brand-gold/50 transition-all overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold font-bold">
                              {FAQ_CATEGORIES.find((c) => c.id === faq.category)?.name || "General"}
                            </span>
                            {faq.highlightKey && (
                              <Badge variant="outline" size="sm">
                                {faq.highlightKey}
                              </Badge>
                            )}
                          </div>
                          <h3 className="font-serif text-base sm:text-lg font-bold text-brand-ivory leading-snug">
                            {faq.question}
                          </h3>
                        </div>

                        <div className="w-8 h-8 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold shrink-0 transition-transform duration-300">
                          {isOpen ? "−" : "+"}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 border-t border-brand-border/40 animate-fadeIn">
                          <p className="text-sm text-brand-muted leading-relaxed">
                            {faq.answer}
                          </p>

                          {faq.indicativeNote && (
                            <div className="mt-4 p-3 rounded-xl bg-brand-black/70 border-l-2 border-brand-gold text-xs text-brand-gold font-mono">
                              ℹ {faq.indicativeNote}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Technical Inquiries Callout */}
        <section className="w-full py-16 bg-brand-charcoal/30 border-t border-brand-border/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <ChallengeSeal size="sm" />
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory mt-4 mb-2">
              Have A Specific Plot Question Not Covered Here?
            </h3>
            <p className="text-sm text-brand-muted max-w-xl mb-6">
              You can submit your question directly to Furqan Butt through our Social Content Hub for site reel answers, or book an engineering consultation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/social#ask-builder"
                className="px-6 py-3 rounded-xl bg-gold-gradient text-brand-black font-semibold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Ask The Builder On Social Hub</span>
                <MoustacheIcon size={18} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-brand-surface border border-brand-border text-brand-ivory hover:text-brand-gold text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Book Direct Engineering Desk</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
