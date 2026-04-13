import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { 
    label, 
    error, 
    className = "", 
    type = "text",
    id,
    required = false,
    ...props 
  }, 
  ref
) {
  const inputId = id || props.name;
  
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label 
          htmlFor={inputId} 
          className="text-sm font-medium text-foreground"
        >
          {label}
          {required && <span className="text-error ml-1" aria-hidden="true">*</span>}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        type={type}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`
          w-full h-10 px-3 rounded-lg border border-border bg-background
          text-foreground placeholder:text-muted
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? "border-error focus:ring-error" : ""}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});

export default Input;
