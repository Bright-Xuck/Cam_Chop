import { useState } from "react";

export function Tabs({ children, defaultValue, className = "" }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={className} data-active-tab={activeTab}>
      {typeof children === "function"
        ? children({ activeTab, setActiveTab })
        : children}
    </div>
  );
}

export function TabsList({ children, className = "" }) {
  return (
    <div
      className={`flex items-center gap-1 p-1 bg-secondary rounded-lg ${className}`}
      role="tablist"
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, activeTab, setActiveTab, children, className = "" }) {
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => setActiveTab(value)}
      className={`
        px-4 py-2 text-sm font-medium rounded-md transition-all
        ${isActive
          ? "bg-card text-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, activeTab, children, className = "" }) {
  if (activeTab !== value) return null;

  return (
    <div role="tabpanel" className={`mt-4 ${className}`}>
      {children}
    </div>
  );
}
