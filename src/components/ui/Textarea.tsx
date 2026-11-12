import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      className = "",
      id,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={textareaId}
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

        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={`w-full rounded bg-brand-surface/70 border border-brand-border text-brand-ivory text-sm placeholder:text-brand-muted/50 p-3.5 transition-all duration-200 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold focus:bg-brand-surface resize-y ${
            error
              ? "border-red-500/80 focus:border-red-400 focus:ring-red-400"
              : ""
          } ${className}`}
          {...props}
        />

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

Textarea.displayName = "Textarea";
