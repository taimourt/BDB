import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "gold-rim" | "glass" | "challenge" | "gold" | "dark";
  hasFacetedCorner?: boolean;
  hoverEffect?: boolean;
  glow?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = "default",
      hasFacetedCorner = false,
      hoverEffect = true,
      glow = false,
      padding = "md",
      className = "",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative rounded-lg overflow-hidden transition-all duration-300";

    const paddingStyles = {
      none: "p-0",
      sm: "p-4",
      md: "p-6 sm:p-7",
      lg: "p-8 sm:p-10",
    };

    const variantStyles = {
      default:
        "bg-brand-dark/80 border border-brand-border/80 shadow-xl backdrop-blur-sm",
      dark:
        "bg-brand-dark/90 border border-brand-border/80 shadow-xl backdrop-blur-sm",
      gold:
        "bg-gradient-to-b from-brand-charcoal/90 via-brand-dark to-brand-charcoal border border-brand-gold/50 shadow-[0_4px_30px_rgba(200,169,81,0.2)]",
      "gold-rim":
        "bg-gradient-to-b from-brand-charcoal/90 to-brand-dark/95 border border-brand-gold/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
      glass:
        "bg-brand-dark/50 backdrop-blur-md border border-white/[0.08] shadow-2xl",
      challenge:
        "bg-gradient-to-br from-brand-charcoal via-brand-dark to-brand-black border-2 border-brand-gold/60 shadow-[0_0_25px_rgba(200,169,81,0.15)]",
    };

    const glowStyle = glow ? "shadow-[0_0_30px_rgba(200,169,81,0.25)] border-brand-gold/40" : "";

    const hoverStyles = hoverEffect
      ? "hover:border-brand-gold/60 hover:shadow-[0_8px_35px_rgba(200,169,81,0.2)] hover:-translate-y-1"
      : "";

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${glowStyle} ${hoverStyles} ${paddingStyles[padding]} ${className}`}
        {...props}
      >
        {/* Optional Faceted Corner Accent */}
        {hasFacetedCorner && (
          <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
            <div className="absolute top-0 right-0 border-t-[32px] border-l-[32px] border-t-brand-gold/40 border-l-transparent" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-brand-ivory rounded-full shadow-sm" />
          </div>
        )}

        {/* Ambient subtle glow at top border */}
        <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent pointer-events-none" />

        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
