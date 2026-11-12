import React from "react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  error?: string;
  options: SelectOption[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      error,
      options,
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={selectId}
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

        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            className={`w-full appearance-none rounded bg-brand-surface/70 border border-brand-border text-brand-ivory text-sm px-4 py-2.5 pr-10 transition-all duration-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-brand-surface cursor-pointer ${
              error
                ? "border-red-500/80 focus:border-red-400 focus:ring-red-400"
                : ""
            } ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                disabled={opt.disabled}
                className="bg-brand-dark text-brand-ivory py-2"
              >
                {opt.label}
              </option>
            ))}
          </select>

          {/* Chevron icon */}
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
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

Select.displayName = "Select";
