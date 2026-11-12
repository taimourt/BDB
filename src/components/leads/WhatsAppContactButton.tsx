"use client";

import React, { useState } from "react";
import { BRAND_INFO } from "@/data/brandData";

interface WhatsAppContactButtonProps {
  customMessage?: string;
  variant?: "floating" | "inline";
}

export const WhatsAppContactButton: React.FC<WhatsAppContactButtonProps> = ({
  customMessage,
  variant = "floating",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userCustomText, setUserCustomText] = useState(
    customMessage ||
      "Assalam-o-Alaikum Furqan Butt & Black Diamond Builders Team, I would like to schedule an engineering consultation regarding my construction project in Pakistan."
  );

  const isConfigured = Boolean(
    BRAND_INFO.whatsappNumber &&
      BRAND_INFO.whatsappNumber.replace(/\D/g, "").length >= 9
  );

  const encodedUrl = isConfigured
    ? `https://wa.me/${BRAND_INFO.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
        userCustomText
      )}`
    : "#";

  const handleOpenWhatsApp = (e: React.MouseEvent) => {
    if (!isConfigured) {
      e.preventDefault();
      alert(
        "WhatsApp Business Line: The client's official WhatsApp number is configurable via the NEXT_PUBLIC_WHATSAPP_NUMBER environment variable in .env.local. Please configure this key with the verified business line (e.g. 923001234567)."
      );
    } else {
      setIsOpen(false);
    }
  };

  if (variant === "inline") {
    return (
      <a
        href={encodedUrl}
        target={isConfigured ? "_blank" : undefined}
        rel={isConfigured ? "noopener noreferrer" : undefined}
        onClick={handleOpenWhatsApp}
        className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
      >
        <span>Connect on WhatsApp</span>
        <span className="text-base">💬</span>
      </a>
    );
  }

  return (
    <aside aria-label="WhatsApp Quick Connect" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expandable Editable Message Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 p-4 rounded-2xl bg-brand-dark/95 border-2 border-emerald-500/70 shadow-2xl backdrop-blur-md text-left animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-serif font-bold text-brand-ivory">
                Furqan Butt Direct Desk
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-brand-muted hover:text-brand-ivory text-sm p-1"
              aria-label="Close message window"
            >
              ✕
            </button>
          </div>

          <div className="py-3">
            <label className="text-[11px] text-brand-muted block mb-1.5">
              Edit message before launching WhatsApp:
            </label>
            <textarea
              rows={3}
              value={userCustomText}
              onChange={(e) => setUserCustomText(e.target.value)}
              className="w-full bg-brand-charcoal border border-brand-border rounded-xl p-2.5 text-xs text-brand-ivory focus:outline-none focus:border-emerald-500 font-sans resize-none"
            />
            <div className="mt-2 text-[11px] text-brand-muted flex flex-col gap-0.5">
              <span>
                Official Line:{" "}
                <strong className="text-brand-ivory font-mono">
                  {isConfigured ? BRAND_INFO.phoneDisplay : "Configurable via environment"}
                </strong>
              </span>
              {!isConfigured && (
                <span className="text-[10px] text-amber-400">
                  ⚠ Business number unconfigured (NEXT_PUBLIC_WHATSAPP_NUMBER)
                </span>
              )}
            </div>
          </div>

          <a
            href={encodedUrl}
            target={isConfigured ? "_blank" : undefined}
            rel={isConfigured ? "noopener noreferrer" : undefined}
            onClick={handleOpenWhatsApp}
            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <span>Open in WhatsApp</span>
            <span>💬</span>
          </a>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_4px_25px_rgba(16,185,129,0.45)] flex items-center justify-center text-2xl transition-all hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        aria-label="Contact Black Diamond Builders on WhatsApp"
      >
        💬
      </button>
    </aside>
  );
};
