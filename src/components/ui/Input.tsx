import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs uppercase tracking-wider font-semibold text-brand-ivory/90 flex items-center justify-between"
          >
            <span>{label}</span>
            {props.required && (
              <span className="text-brand-gold text-[10px] tracking-normal font-normal">
                *Required
              </span>
            )}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <span className="absolute left-3.5 text-brand-muted pointer-events-none">
              {leftIcon}
            </span>
          )}

          <input
            id={inputId}
            ref={ref}
            className={`w-full rounded bg-brand-surface/70 border border-brand-border text-brand-ivory text-sm placeholder:text-brand-muted/50 px-4 py-2.5 transition-all duration-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-brand-surface ${
              leftIcon ? "pl-10" : ""
            } ${rightIcon ? "pr-10" : ""} ${
              error
                ? "border-red-500/80 focus:border-red-400 focus:ring-red-400"
                : ""
            } ${className}`}
            {...props}
          />

          {rightIcon && (
            <span className="absolute right-3.5 text-brand-muted pointer-events-none">
              {rightIcon}
            </span>
          )}
        </div>

        {error && (
          <p className="text-xs text-red-400 font-medium mt-0.5">{error}</p>
        )}
        {!error && helperText && (
          <p className="text-[11px] text-brand-muted mt-0.5">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
