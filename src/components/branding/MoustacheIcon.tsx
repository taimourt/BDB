import React from "react";

interface MoustacheIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const MoustacheIcon: React.FC<MoustacheIconProps> = ({
  className = "",
  size = 32,
}) => {
  return (
    <svg
      width={size}
      height={Math.round(size * 0.45)}
      viewBox="0 0 100 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block transition-transform duration-300 group-hover:scale-110 ${className}`}
      aria-label="Mooch Ko Tao - Signature Moustache Guarantee"
    >
      <path
        d="M50 28 C45 28 35 32 24 35 C12 38 3 34 1 25 C-1 16 6 10 16 11 C25 12 36 18 46 25 C48 26.5 50 27 50 27 C50 27 52 26.5 54 25 C64 18 75 12 84 11 C94 10 101 16 99 25 C97 34 88 38 76 35 C65 32 55 28 50 28 Z"
        fill="url(#goldMoustacheGrad)"
        stroke="#967828"
        strokeWidth="1.2"
      />
      <path
        d="M4 22 C9 14 19 13 28 17 C37 21 46 27 50 27 C54 27 63 21 72 17 C81 13 91 14 96 22"
        stroke="#FBF9F5"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <defs>
        <linearGradient id="goldMoustacheGrad" x1="0" y1="0" x2="100" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBF9F5" />
          <stop offset="0.3" stopColor="#E6CB7A" />
          <stop offset="0.7" stopColor="#C8A951" />
          <stop offset="1" stopColor="#8A6E24" />
        </linearGradient>
      </defs>
    </svg>
  );
};
