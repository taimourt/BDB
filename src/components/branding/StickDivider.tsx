import React from "react";
import { CaneIcon } from "./CaneIcon";

interface StickDividerProps {
  className?: string;
  label?: string;
  showTicks?: boolean;
}

export const StickDivider: React.FC<StickDividerProps> = ({
  className = "",
  label = "INSPECTED WITH THE STICK • ZERO COMPROMISE",
  showTicks = true,
}) => {
  return (
    <div
      className={`relative w-full py-8 flex flex-col items-center justify-center select-none overflow-hidden ${className}`}
      role="separator"
      aria-label={label}
    >
      {/* Central Stick Line Structure */}
      <div className="relative w-full max-w-5xl px-6 flex items-center justify-center">
        
        {/* Left Measurement Beam with Tick Marks */}
        <div className="flex-1 relative flex items-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-brand-gold" />
          {showTicks && (
            <div className="absolute inset-x-0 -top-2 flex justify-between px-4 pointer-events-none opacity-40">
              <span className="w-[1px] h-2 bg-brand-gold" />
              <span className="w-[1px] h-3 bg-brand-gold" />
              <span className="w-[1px] h-2 bg-brand-gold" />
              <span className="w-[1px] h-4 bg-brand-gold" />
              <span className="w-[1px] h-2 bg-brand-gold" />
            </div>
          )}
        </div>

        {/* Center Emblem: The Inspector Stick Medallion */}
        <div className="mx-4 relative z-10 flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-charcoal border border-brand-gold/60 shadow-[0_0_20px_rgba(200,169,81,0.25)] group hover:border-brand-gold transition-colors">
          <CaneIcon size={20} className="text-brand-gold" />
          <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] text-brand-gold-light">
            {label}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
        </div>

        {/* Right Measurement Beam with Tick Marks */}
        <div className="flex-1 relative flex items-center">
          <div className="w-full h-[1px] bg-gradient-to-l from-transparent via-brand-gold/40 to-brand-gold" />
          {showTicks && (
            <div className="absolute inset-x-0 -top-2 flex justify-between px-4 pointer-events-none opacity-40">
              <span className="w-[1px] h-2 bg-brand-gold" />
              <span className="w-[1px] h-4 bg-brand-gold" />
              <span className="w-[1px] h-2 bg-brand-gold" />
              <span className="w-[1px] h-3 bg-brand-gold" />
              <span className="w-[1px] h-2 bg-brand-gold" />
            </div>
          )}
        </div>

      </div>

      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-8 bg-brand-gold/10 blur-xl pointer-events-none" />
    </div>
  );
};
