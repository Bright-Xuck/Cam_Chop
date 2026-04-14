import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import {
  Home,
  ShoppingBag,
  UtensilsCrossed,
  Settings,
  BarChart3,
  Store,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bell
} from "lucide-react";
import { useMerchant } from "../../../context/MerchantProvider";

const navItems = [
  {
    label: "Dashboard",
    icon: Home,
    path: "/merchant",
    exact: true
  },
  {
    label: "Live Orders",
    icon: ShoppingBag,
    path: "/merchant/orders",
    badge: 3
  },
  {
    label: "Menu Manager",
    icon: UtensilsCrossed,
    path: "/merchant/menu"
  },
  {
    label: "Analytics",
    icon: BarChart3,
    path: "/merchant/analytics"
  },
  {
    label: "Store Settings",
    icon: Store,
    path: "/merchant/settings"
  }
];

const bottomItems = [
  {
    label: "Help Center",
    icon: HelpCircle,
    path: "/merchant/help"
  }
];

export default function MerchantSidebar() {
  const { currentUser, setcurrentUser } = useMerchant();
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = () => {
    setcurrentUser(null);
    navigate("/merchant/login");
  };

  const NavItem = ({ item, isBottom = false }) => {
    const Icon = item.icon;

    return (
      <NavLink
        to={item.path}
        end={item.exact}
        className={({ isActive }) => `
          flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all relative group
          ${isActive
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          }
          ${isCollapsed ? "justify-center" : ""}
        `}
      >
        {({ isActive }) => (
          <>
            <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "" : ""}`} />
            {!isCollapsed && (
              <span className="text-sm font-medium truncate">{item.label}</span>
            )}
            {item.badge && !isCollapsed && (
              <span className="ml-auto px-2 py-0.5 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                {item.badge}
              </span>
            )}
            {item.badge && isCollapsed && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold bg-primary text-primary-foreground rounded-full">
                {item.badge}
              </span>
            )}
            {isCollapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-foreground text-card text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                {item.label}
              </div>
            )}
          </>
        )}
      </NavLink>
    );
  };

  return (
    <aside
      className={`
        h-screen bg-card border-r border-border flex flex-col sticky top-0
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-[72px]" : "w-[240px]"}
      `}
    >
      {/* Header */}
      <div className={`p-4 border-b border-border ${isCollapsed ? "px-3" : ""}`}>
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CC</span>
              </div>
              <span className="font-bold text-foreground">CamChop</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground ${isCollapsed ? "mx-auto" : ""}`}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Store Info */}
      {!isCollapsed && currentUser && (
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Store className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {currentUser.name || "Your Store"}
              </p>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-success rounded-full" />
                <span className="text-xs text-muted-foreground">Open</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="p-3 border-t border-border space-y-1">
        {bottomItems.map((item) => (
          <NavItem key={item.path} item={item} isBottom />
        ))}
        <button
          onClick={handleLogout}
          className={`
            w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all
            text-muted-foreground hover:text-error hover:bg-error/10
            ${isCollapsed ? "justify-center" : ""}
          `}
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span className="text-sm font-medium">Log Out</span>}
        </button>
      </div>
    </aside>
  );
}
