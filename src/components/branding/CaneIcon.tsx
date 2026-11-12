import React from "react";

interface CaneIconProps {
  className?: string;
  size?: number;
}

/**
 * Authentic CaneIcon matching Furqan Butt's signature ornate brass-knob walking stick:
 * - Rounded bulbous brass knob with engraved filigree crown.
 * - Flared trumpet neck with vertical detailing.
 * - Precision-machined concave brass collar / ferrule.
 * - Rich straight hardwood shaft.
 */
export const CaneIcon: React.FC<CaneIconProps> = ({
  className = "",
  size = 36,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-300 ${className}`}
      aria-label="Furqan Butt's Signature Ornate Brass Cane"
    >
      <defs>
        {/* Polished Brass Metallic Gradient */}
        <linearGradient id="brassCrownGrad" x1="16" y1="6" x2="48" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFDF0" />
          <stop offset="0.25" stopColor="#F5D77F" />
          <stop offset="0.6" stopColor="#C8A951" />
          <stop offset="0.85" stopColor="#967727" />
          <stop offset="1" stopColor="#5E470E" />
        </linearGradient>

        {/* Polished Ferrule Collar Gradient */}
        <linearGradient id="brassCollarGrad" x1="24" y1="30" x2="40" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFDF0" />
          <stop offset="0.3" stopColor="#E6CB7A" />
          <stop offset="0.7" stopColor="#C8A951" />
          <stop offset="1" stopColor="#7A5E18" />
        </linearGradient>

        {/* Rich Hardwood Shaft Gradient */}
        <linearGradient id="woodShaftGrad" x1="28" y1="44" x2="36" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8A4A28" />
          <stop offset="0.4" stopColor="#5E3018" />
          <stop offset="1" stopColor="#381B0C" />
        </linearGradient>
      </defs>

      {/* Ornate Bulbous Brass Knob Head */}
      <path
        d="M22 14C22 9 26 5 32 5C38 5 42 9 42 14C42 19 39 23 36 26C35 27 34 29 34 32H30C30 29 29 27 28 26C25 23 22 19 22 14Z"
        fill="url(#brassCrownGrad)"
        stroke="#4A380C"
        strokeWidth="1.2"
      />

      {/* Engraved Filigree Leaf Relief Markings on the Brass Crown */}
      <path
        d="M32 7V22M32 10C34 11 37 13 37 16M32 14C35 15 38 18 37 21M32 10C30 11 27 13 27 16M32 14C29 15 26 18 27 21"
        stroke="#7A5E18"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Flared Neck Ring */}
      <rect
        x="29"
        y="32"
        width="6"
        height="2.5"
        rx="1"
        fill="#FFFDF0"
        stroke="#967727"
        strokeWidth="0.8"
      />

      {/* Turned Concave Brass Waist / Collar */}
      <path
        d="M29 34.5C28 37 27 39 27 40C27 41.5 29 42.5 32 42.5C35 42.5 37 41.5 37 40C37 39 36 37 35 34.5H29Z"
        fill="url(#brassCollarGrad)"
        stroke="#5E470E"
        strokeWidth="1"
      />

      {/* Ferrule Base Ring */}
      <rect
        x="28"
        y="42"
        width="8"
        height="2"
        rx="0.8"
        fill="#E6CB7A"
        stroke="#5E470E"
        strokeWidth="0.8"
      />

      {/* Solid Hardwood Sheesham Shaft */}
      <rect
        x="28.5"
        y="44"
        width="7"
        height="18"
        rx="1"
        fill="url(#woodShaftGrad)"
        stroke="#2E1609"
        strokeWidth="1"
      />

      {/* Specular White Light Reflection Highlights */}
      <path
        d="M26 11C27 8 30 7 32 7"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.8"
      />
      <line
        x1="30"
        y1="45"
        x2="30"
        y2="60"
        stroke="#A86338"
        strokeWidth="0.8"
        opacity="0.6"
      />
    </svg>
  );
};
