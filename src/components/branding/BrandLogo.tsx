import React from "react";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = "",
  size = "md",
  showTagline = true,
}) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-base tracking-widest",
    md: "text-lg tracking-[0.2em]",
    lg: "text-2xl tracking-[0.25em]",
  };

  return (
    <div className={`flex items-center gap-3.5 group select-none ${className}`}>
      {/* Faceted Diamond Architectural Emblem */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]}`}>
        {/* Glow backdrop on hover */}
        <div className="absolute inset-0 bg-brand-gold/20 blur-md rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />

        {/* Diamond SVG */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_2px_10px_rgba(200,169,81,0.35)]"
        >
          {/* Outer faceted diamond perimeter */}
          <polygon
            points="32,2 60,18 48,60 16,60 4,18"
            fill="#0F0F13"
            stroke="url(#goldGradientLogo)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Internal architectural facets */}
          <polygon
            points="32,2 20,18 44,18"
            fill="url(#goldFacetLight)"
            opacity="0.85"
          />
          <polygon
            points="4,18 20,18 16,60"
            fill="#181820"
            stroke="url(#goldGradientLogo)"
            strokeWidth="1.2"
          />
          <polygon
            points="60,18 44,18 48,60"
            fill="#14141A"
            stroke="url(#goldGradientLogo)"
            strokeWidth="1.2"
          />
          <polygon
            points="20,18 44,18 32,60"
            fill="#0B0B0E"
            stroke="url(#goldGradientLogo)"
            strokeWidth="1.5"
          />

          {/* Center core highlight */}
          <circle cx="32" cy="30" r="3" fill="#E6CB7A" />

          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradientLogo" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FBF9F5" />
              <stop offset="0.3" stopColor="#E6CB7A" />
              <stop offset="0.7" stopColor="#C8A951" />
              <stop offset="1" stopColor="#8A6E24" />
            </linearGradient>
            <linearGradient id="goldFacetLight" x1="20" y1="2" x2="44" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E6CB7A" stopOpacity="0.6" />
              <stop offset="1" stopColor="#C8A951" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold uppercase text-brand-ivory group-hover:text-brand-gold-light transition-colors leading-none ${textSizes[size]}`}
        >
          BLACK DIAMOND
        </span>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] uppercase font-semibold tracking-[0.3em] text-brand-gold">
            BUILDERS
          </span>
          {showTagline && (
            <>
              <span className="w-1 h-1 rounded-full bg-brand-gold/60" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-brand-muted hidden sm:inline">
                Islamabad • Rawalpindi
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
