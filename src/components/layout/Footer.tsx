"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/branding/BrandLogo";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { ChallengeSeal } from "@/components/branding/ChallengeSeal";
import { BRAND_INFO, CATCHPHRASES, NAV_LINKS } from "@/data/brandData";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-brand-black border-t border-brand-border/80 pt-16 pb-12 text-brand-ivory relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-brand-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Feature Manifesto Banner inside Footer */}
        <div className="rounded-xl bg-gradient-to-r from-brand-charcoal via-brand-dark to-brand-charcoal border border-brand-gold/30 p-8 sm:p-10 mb-16 shadow-[0_10px_40px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <ChallengeSeal size="sm" />
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                The Personal Guarantee of Furqan Butt
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-ivory font-bold">
                “{CATCHPHRASES.challenge}”
              </h3>
              <p className="text-sm text-brand-muted max-w-xl leading-relaxed">
                {CATCHPHRASES.challengeSub}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href="#enquiry"
              className="px-6 py-3 rounded bg-gold-gradient text-brand-black font-semibold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(200,169,81,0.3)] flex items-center gap-2"
            >
              <span>Build With Us</span>
              <MoustacheIcon size={20} />
            </a>
            <a
              href={BRAND_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded bg-brand-surface border border-brand-border text-brand-ivory font-semibold text-xs uppercase tracking-wider hover:border-brand-gold hover:text-brand-gold transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48c1.64-1.63 2.18-3.92 2.18-6.16V8.14a8.16 8.16 0 0 0 4.85 1.57v-3.4a4.85 4.85 0 0 1-1.26.38z" />
              </svg>
              <span>Watch on TikTok</span>
            </a>
          </div>
        </div>

        {/* 4-Column Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-brand-border/60">
          {/* Col 1: Brand & Identity */}
          <div className="flex flex-col gap-4">
            <BrandLogo size="md" />
            <p className="text-xs text-brand-muted leading-relaxed mt-2">
              Bespoke luxury residential estates & commercial monuments in Pakistan.
              Built on verified structural engineering, laser levels, and uncompromising personal oversight.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                Symbols of Integrity:
              </span>
              <div className="flex items-center gap-2 p-1.5 rounded bg-brand-dark border border-brand-border">
                <MoustacheIcon size={22} />
                <span className="text-[10px] text-brand-muted font-mono">Tao</span>
              </div>
              <div className="flex items-center gap-2 p-1.5 rounded bg-brand-dark border border-brand-border">
                <CaneIcon size={20} />
                <span className="text-[10px] text-brand-muted font-mono">Stick</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation & Pages */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-gold font-bold">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-brand-muted">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-ivory transition-colors flex items-center gap-2"
                  >
                    <span className="text-brand-gold/60 text-[10px]">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="hover:text-brand-ivory transition-colors flex items-center gap-2"
                >
                  <span className="text-brand-gold/60 text-[10px]">›</span>
                  <span>FAQs & Pricing</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Construction Standards */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-gold font-bold">
              Engineering Disciplines
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-brand-muted">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Grade 60 Structural Steel Reinforcement</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Multi-Axis Digital Laser Masonry</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Dual SBS Torch-Applied Tanking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>Full Turnkey Architectural Interiors</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                <span>14-Day Mandatory Slab Curing</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Overseas Desk & Direct Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-sm uppercase tracking-widest text-brand-gold font-bold">
              Overseas Client Desk
            </h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              Exclusively for Pakistanis in the UK, USA, Gulf & Europe. Direct video site audits and transparent milestone billing.
            </p>
            <div className="flex flex-col gap-2 pt-1 text-xs">
              <div className="flex items-center gap-2 text-brand-ivory">
                <span className="text-brand-gold font-semibold">Corridor:</span>
                <span className="text-brand-muted">Islamabad & Rawalpindi</span>
              </div>
              <div className="flex items-center gap-2 text-brand-ivory">
                <span className="text-brand-gold font-semibold">Official TikTok:</span>
                <a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:underline"
                >
                  {BRAND_INFO.tiktokHandle}
                </a>
              </div>
              <div className="flex items-center gap-2 text-brand-ivory">
                <span className="text-brand-gold font-semibold">WhatsApp:</span>
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Assalam-o-Alaikum%20Furqan%20Bhai%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Direct Engineering Desk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Compliance Links */}
        <div className="py-6 border-b border-brand-border/40 flex flex-wrap items-center justify-between gap-4 text-xs text-brand-muted">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-brand-ivory font-semibold uppercase tracking-wider text-[11px]">
              Legal & Transparency:
            </span>
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <span className="text-brand-border">•</span>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-brand-border">•</span>
            <Link href="/faq" className="hover:text-brand-gold transition-colors">
              FAQ & Price Standards
            </Link>
            <span className="text-brand-border">•</span>
            <Link href="/social" className="hover:text-brand-gold transition-colors">
              TikTok & Social Hub
            </Link>
          </div>
          <div className="text-[11px] text-brand-muted">
            Registered Head Office: Islamabad / Rawalpindi, Pakistan
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div className="flex flex-wrap items-center gap-3">
            <p>© 2026 Black Diamond Builders. All rights reserved.</p>
            <span className="hidden sm:inline text-brand-border">•</span>
            <button
              onClick={() => {
                sessionStorage.removeItem("bdb_intro_seen");
                window.location.reload();
              }}
              className="text-brand-gold hover:text-brand-gold-light hover:underline font-mono text-[11px] flex items-center gap-1 cursor-pointer"
            >
              <span>Replay Brand Intro</span>
              <span>❖</span>
            </button>
          </div>
          <p className="text-center sm:text-right text-[11px]">
            <span className="text-brand-gold">The Anti-Shapper Standard:</span> Zero shortcuts. 100% structural verification.
          </p>
        </div>
      </div>
    </footer>
  );
};
