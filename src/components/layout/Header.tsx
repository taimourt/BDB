"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/branding/BrandLogo";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { NAV_LINKS, BRAND_INFO } from "@/data/brandData";
import { TickerBar } from "./TickerBar";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* Live Announcement Marquee Ticker */}
      <TickerBar />

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-gold/30 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
            : "bg-brand-black/80 backdrop-blur-sm border-b border-brand-border/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="focus:outline-none">
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.16em] font-medium text-brand-ivory/80 hover:text-brand-gold transition-colors flex items-center gap-1.5 group"
              >
                <span>{link.label}</span>
                {link.isBadge && (
                  <Badge variant="gold" size="sm" pulse>
                    {link.badgeText || "Live"}
                  </Badge>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* TikTok Social Link */}
            <a
              href={BRAND_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-surface/80 border border-brand-border text-brand-ivory text-xs font-semibold hover:border-brand-gold hover:text-brand-gold transition-colors"
              title="Black Diamond Builders TikTok"
            >
              <svg
                className="w-3.5 h-3.5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3 15.68a6.34 6.34 0 0 0 10.82 4.48c1.64-1.63 2.18-3.92 2.18-6.16V8.14a8.16 8.16 0 0 0 4.85 1.57v-3.4a4.85 4.85 0 0 1-1.26.38z" />
              </svg>
              <span>TikTok</span>
            </a>

            {/* Direct Consultation CTA */}
            <Link href="/contact">
              <Button
                variant="gold"
                size="sm"
                rightIcon={<MoustacheIcon size={18} />}
              >
                Enquire Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Hamburger & Quick WhatsApp */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Mobile WhatsApp Icon */}
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Assalam-o-Alaikum%20Furqan%20Bhai%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project%20in%20Pakistan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors"
              aria-label="Direct WhatsApp Chat"
              title="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2"
            >
              <svg
                className="w-6 h-6 text-brand-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[108px] bottom-0 bg-brand-black/95 backdrop-blur-xl border-t border-brand-gold/30 z-50 overflow-y-auto px-6 py-8 flex flex-col justify-between animate-fadeIn">
          <div className="flex flex-col gap-6">
            {/* Signature Badge */}
            <div className="flex items-center justify-between p-4 rounded bg-brand-dark border border-brand-border">
              <div className="flex items-center gap-3">
                <CaneIcon size={28} />
                <div>
                  <div className="text-xs uppercase font-bold text-brand-gold tracking-widest">
                    Furqan Butt
                  </div>
                  <div className="text-[11px] text-brand-muted">
                    Poore Pakistan Ko Challenge
                  </div>
                </div>
              </div>
              <MoustacheIcon size={28} />
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-serif font-semibold uppercase tracking-wider text-brand-ivory hover:text-brand-gold py-2 border-b border-brand-border/40 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  {link.isBadge ? (
                    <Badge variant="gold" size="sm">
                      {link.badgeText || "Live"}
                    </Badge>
                  ) : (
                    <span className="text-brand-gold/50 text-xs">→</span>
                  )}
                </Link>
              ))}
              <Link
                href="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-serif font-semibold uppercase tracking-wider text-brand-ivory hover:text-brand-gold py-2 border-b border-brand-border/40 flex items-center justify-between"
              >
                <span>FAQs</span>
                <span className="text-brand-gold/50 text-xs">→</span>
              </Link>
            </nav>
          </div>

          {/* Mobile Bottom CTAs */}
          <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-brand-border">
            {/* Prominent WhatsApp action */}
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Assalam-o-Alaikum%20Furqan%20Bhai%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Instant WhatsApp Consultation</span>
            </a>

            {/* Follow TikTok */}
            <a
              href={BRAND_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded bg-brand-surface border border-brand-border text-brand-ivory font-semibold text-xs hover:border-brand-gold transition-colors"
            >
              <span>Follow Furqan Butt on TikTok</span>
              <span className="text-brand-gold">@blackdiamondbuilders</span>
            </a>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full"
            >
              <Button
                variant="gold"
                size="lg"
                fullWidth
                rightIcon={<MoustacheIcon size={20} />}
              >
                Submit Project Enquiry
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
