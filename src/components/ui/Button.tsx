import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline" | "ghost" | "challenge" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "gold",
      size = "md",
      fullWidth = false,
      isLoading = false,
      loading,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const isSpinnerActive = isLoading || Boolean(loading);
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-black";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5 font-semibold",
    };

    const variantStyles = {
      gold: "bg-gold-gradient text-brand-black font-semibold shadow-[0_4px_20px_rgba(200,169,81,0.25)] hover:shadow-[0_6px_28px_rgba(200,169,81,0.45)] hover:brightness-110 active:scale-[0.98]",
      outline:
        "border border-brand-gold/60 text-brand-ivory bg-brand-dark/40 hover:bg-brand-gold/10 hover:border-brand-gold active:scale-[0.98]",
      ghost:
        "text-brand-muted hover:text-brand-ivory hover:bg-white/[0.05] active:scale-[0.98]",
      challenge:
        "bg-gradient-to-r from-brand-charcoal via-brand-dark to-brand-charcoal text-brand-ivory border-2 border-brand-gold shadow-[0_0_20px_rgba(200,169,81,0.3)] hover:shadow-[0_0_30px_rgba(200,169,81,0.6)] hover:border-brand-gold-light active:scale-[0.98]",
      danger:
        "bg-red-950/40 border border-red-500/50 text-red-200 hover:bg-red-900/60 hover:border-red-400 active:scale-[0.98]",
    };

    const widthStyle = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        disabled={disabled || isSpinnerActive}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`}
        {...props}
      >
        {isSpinnerActive && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
