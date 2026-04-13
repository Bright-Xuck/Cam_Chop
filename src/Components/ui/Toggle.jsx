export default function Toggle({ enabled, onToggle, label, description, size = "md" }) {
  const sizes = {
    sm: { track: "w-8 h-4", thumb: "w-3 h-3", translate: "translate-x-4" },
    md: { track: "w-11 h-6", thumb: "w-5 h-5", translate: "translate-x-5" },
    lg: { track: "w-14 h-7", thumb: "w-6 h-6", translate: "translate-x-7" }
  };

  const { track, thumb, translate } = sizes[size];

  return (
    <label className="flex items-center justify-between cursor-pointer">
      {(label || description) && (
        <div className="mr-4">
          {label && <span className="text-sm font-medium text-foreground">{label}</span>}
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
      )}
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={onToggle}
        className={`
          relative inline-flex shrink-0 ${track} rounded-full
          transition-colors duration-200 ease-in-out
          focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          ${enabled ? "bg-primary" : "bg-muted"}
        `}
      >
        <span
          className={`
            pointer-events-none inline-block ${thumb} rounded-full bg-white shadow-lg
            transform transition-transform duration-200 ease-in-out
            ${enabled ? translate : "translate-x-0.5"}
            mt-0.5
          `}
        />
      </button>
    </label>
  );
}
