const variants = {
  default: "bg-secondary text-secondary-foreground",
  primary: "bg-primary text-primary-foreground",
  success: "bg-success/10 text-success border border-success/20",
  warning: "bg-warning/10 text-warning border border-warning/20",
  error: "bg-error/10 text-error border border-error/20",
  outline: "border border-border text-foreground"
};

export default function Badge({ 
  children, 
  variant = "default", 
  className = "" 
}) {
  return (
    <span 
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${variants[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
}
