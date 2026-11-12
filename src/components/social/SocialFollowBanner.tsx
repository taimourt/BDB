"use client";

import React from "react";
import { OFFICIAL_SOCIAL_CHANNELS } from "@/data/socialContentData";
import { CaneIcon } from "@/components/branding/CaneIcon";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";

export const SocialFollowBanner: React.FC = () => {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-brand-charcoal via-brand-dark to-brand-black border border-brand-gold/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute top-2 right-4 opacity-10">
        <MoustacheIcon size={120} />
      </div>
      <div className="absolute bottom-2 left-4 opacity-10">
        <CaneIcon size={90} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest text-brand-gold bg-brand-gold/15 border border-brand-gold/30 mb-3">
          Official Digital Hub
        </span>

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-brand-ivory mb-3">
          Follow Furqan Butt & Black Diamond Builders
        </h2>

        <p className="text-xs sm:text-sm text-brand-muted max-w-xl mx-auto mb-8 leading-relaxed">
          Watch real daily site walkthroughs, acoustic walking stick plaster tests, and unedited Grade 60 steel audits. We don't hide behind stock photography — our social channels broadcast actual jobsites in real time.
        </p>

        {/* Official Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {OFFICIAL_SOCIAL_CHANNELS.map((channel) => (
            <div
              key={channel.platform}
              className="p-5 rounded-xl bg-brand-charcoal/90 border border-brand-border/70 hover:border-brand-gold/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold text-brand-gold uppercase">
                    {channel.platform === "tiktok" ? "🎵 TikTok" : channel.platform === "whatsapp" ? "💬 WhatsApp" : "📞 Telephone"}
                  </span>
                  {channel.badge && (
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                      {channel.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-serif font-bold text-brand-ivory mb-1">
                  {channel.name}
                </h3>
                <p className="text-[11px] font-mono text-brand-gold-light mb-2">
                  {channel.handle}
                </p>
                <p className="text-[11px] text-brand-muted leading-relaxed mb-4">
                  {channel.description}
                </p>
              </div>

              <a
                href={channel.url}
                target={channel.url.startsWith("http") ? "_blank" : undefined}
                rel={channel.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-center transition-all shadow ${
                  channel.isPrimary
                    ? "bg-brand-gold hover:bg-brand-gold-light text-brand-black"
                    : "bg-brand-surface hover:bg-brand-surface/80 text-brand-ivory border border-brand-border"
                }`}
              >
                Connect on {channel.platform.toUpperCase()} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
