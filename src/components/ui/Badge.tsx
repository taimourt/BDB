import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "shapper" | "outline" | "success";
  size?: "sm" | "md";
  pulse?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  size = "md",
  pulse = false,
  icon,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full tracking-wider uppercase select-none";

  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
  };

  const variantStyles = {
    gold: "bg-brand-gold/15 text-brand-gold-light border border-brand-gold/40 shadow-[0_0_12px_rgba(200,169,81,0.15)]",
    dark: "bg-brand-charcoal text-brand-ivory border border-white/10",
    shapper:
      "bg-red-950/60 text-red-300 border border-red-500/50 shadow-[0_0_12px_rgba(239,68,68,0.2)]",
    outline: "bg-transparent text-brand-muted border border-brand-border",
    success:
      "bg-emerald-950/50 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
  };

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2 mr-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold" />
        </span>
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
