"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { OVERSEAS_PERKS, BRAND_INFO } from "@/data/brandData";

export const OverseasPortalSection: React.FC = () => {
  return (
    <section id="overseas" className="w-full py-24 bg-brand-dark/40 border-t border-brand-border/60 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="gold" size="sm" pulse>
              Dedicated Overseas Desk
            </Badge>
            <Badge variant="dark" size="sm">
              UK • USA • UAE • KSA • Canada
            </Badge>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-ivory mb-4">
            Building in Pakistan While Living Abroad?
          </h2>
          <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
            The biggest tragedy for overseas Pakistanis is sending hard-earned remittances to relatives or unscrupulous contractors, only to return home and find cracked walls, hollow plaster, and stolen steel. Black Diamond Builders fixes this with complete radical transparency.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {OVERSEAS_PERKS.map((perk, idx) => (
            <Card
              key={idx}
              variant="default"
              hasFacetedCorner
              className="flex flex-col justify-between text-left group hover:border-brand-gold/60 transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded bg-brand-charcoal border border-brand-gold/30 flex items-center justify-center text-brand-gold font-mono font-bold text-sm mb-4">
                  0{idx + 1}
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-ivory mb-2">
                  {perk.title}
                </h4>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {perk.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-brand-border/60 flex items-center gap-1.5 text-[11px] text-brand-gold">
                <CaneIcon size={16} />
                <span>Verified Inspection</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Overseas Guarantee Banner */}
        <div className="rounded-xl bg-gradient-to-r from-brand-charcoal via-brand-dark to-brand-charcoal border border-brand-gold/50 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="hidden sm:block shrink-0">
              <MoustacheIcon size={52} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                Direct Leadership Assurance
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-ivory mt-1">
                Zero Excuses. Zero Middlemen.
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-2 max-w-xl">
                You get Furqan Butt&apos;s direct oversight and milestone-linked billing. No payment is drawn until the on-site checkpoint is digitally verified and approved by you.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href={`https://wa.me/${BRAND_INFO.whatsappNumber}?text=Assalam-o-Alaikum%2C%20I%20am%20an%20Overseas%20Pakistani%20interested%20in%20building%20a%20luxury%20home.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-colors"
            >
              <span>Overseas WhatsApp Desk</span>
              <span>💬</span>
            </a>

            <Button
              variant="outline"
              size="md"
              onClick={() => {
                const el = document.getElementById("consultation");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto"
            >
              Book Video Call
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
