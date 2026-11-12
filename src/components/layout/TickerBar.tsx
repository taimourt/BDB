import React from "react";
import { MoustacheIcon } from "@/components/branding/MoustacheIcon";
import { CaneIcon } from "@/components/branding/CaneIcon";

export const TickerBar: React.FC = () => {
  const items = [
    { text: "POORE PAKISTAN KO MERA CHALLENGE HAI", icon: "challenge" },
    { text: "SAY NO TO 'SHAPPER' CONTRACTORS & SHORTCUTS", icon: "danger" },
    { text: "INSPECTED BY THE STICK — ZERO HOLLOW PLASTER", icon: "cane" },
    { text: "MOOCH KO TAO — 100% CERTIFIED STRUCTURAL STEEL", icon: "moustache" },
    { text: "OVERSEAS PAKISTANIS PRIORITY DESK: DIRECT LIVE AUDITS", icon: "star" },
  ];

  return (
    <div className="w-full bg-brand-charcoal border-b border-brand-border/80 overflow-hidden py-2 select-none relative z-40">
      <div className="flex items-center text-xs tracking-[0.2em] font-semibold text-brand-gold-light animate-marquee">
        {/* Render twice for continuous infinite scroll */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 mx-6 shrink-0">
            {item.icon === "challenge" && (
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            )}
            {item.icon === "cane" && <CaneIcon size={18} />}
            {item.icon === "moustache" && <MoustacheIcon size={20} />}
            {item.icon === "danger" && (
              <span className="text-[10px] bg-red-900/60 text-red-300 px-1.5 py-0.5 rounded border border-red-500/40 font-mono">
                ANTI-SHAPPER
              </span>
            )}
            {item.icon === "star" && (
              <span className="text-brand-ivory">★</span>
            )}

            <span className="text-brand-ivory/90 hover:text-brand-gold transition-colors">
              {item.text}
            </span>
            <span className="text-brand-gold/40 ml-3">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};
