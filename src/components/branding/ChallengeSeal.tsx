import React from "react";
import { MoustacheIcon } from "./MoustacheIcon";

interface ChallengeSealProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const ChallengeSeal: React.FC<ChallengeSealProps> = ({
  className = "",
  size = "md",
}) => {
  const dimensions = {
    sm: "w-28 h-28",
    md: "w-36 h-36",
    lg: "w-48 h-48",
  };

  return (
    <div
      className={`relative rounded-full flex items-center justify-center select-none group cursor-default ${dimensions[size]} ${className}`}
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-brand-gold/15 blur-xl group-hover:bg-brand-gold/30 transition-all duration-500" />

      {/* Rotating outer text ring */}
      <div className="absolute inset-0 animate-[spin_24s_linear_infinite] group-hover:[animation-duration:12s]">
        <svg viewBox="0 0 160 160" className="w-full h-full">
          <path
            id="textPathCircle"
            d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
            fill="none"
          />
          <text className="text-[9.5px] uppercase tracking-[0.24em] fill-brand-gold font-bold">
            <textPath href="#textPathCircle" startOffset="0%">
              • POORE PAKISTAN KO CHALLENGE • BLACK DIAMOND
            </textPath>
          </text>
        </svg>
      </div>

      {/* Inner Metallic Medallion */}
      <div className="relative z-10 w-[74%] h-[74%] rounded-full bg-gradient-to-b from-brand-charcoal to-brand-black border border-brand-gold/50 flex flex-col items-center justify-center p-2 shadow-2xl text-center">
        {/* Subtle inner gold ring */}
        <div className="absolute inset-1 rounded-full border border-brand-gold/20" />

        <span className="text-[8px] uppercase tracking-[0.25em] text-brand-gold font-semibold">
          Guaranteed
        </span>

        {/* Central Moustache Motif */}
        <div className="my-1">
          <MoustacheIcon size={26} />
        </div>

        <span className="text-[7.5px] uppercase font-bold tracking-wider text-brand-ivory leading-tight">
          MOOCH KO TAO
        </span>
        <span className="text-[6.5px] text-brand-gold-light/80 tracking-widest uppercase">
          100% Certified
        </span>
      </div>
    </div>
  );
};
