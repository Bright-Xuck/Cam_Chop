import { Link } from "react-router";
import {
  ShoppingBag,
  UtensilsCrossed,
  BarChart3,
  Settings,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Button from "../../Components/ui/Button";

const quickActions = [
  { title: "Live Orders", description: "View and manage incoming orders", icon: ShoppingBag, path: "/merchant/orders" },
  { title: "Menu Manager", description: "Update your menu items", icon: UtensilsCrossed, path: "/merchant/menu" },
  { title: "Analytics", description: "Track your performance", icon: BarChart3, path: "/merchant/analytics" },
  { title: "Store Settings", description: "Configure your store", icon: Settings, path: "/merchant/settings" }
];

export default function MerchantDashboard() {
  return (
    <div className="min-h-screen bg-secondary/30 p-6">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Good morning, Partner
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your store today.
        </p>
      </div>

      {/* Today's Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Today's Revenue", value: "XAF 0", icon: TrendingUp, color: "bg-success/20", iconColor: "text-success" },
          { label: "Orders Today", value: "0", icon: ShoppingBag, color: "bg-primary/20", iconColor: "text-primary" },
          { label: "Active Orders", value: "0", icon: Clock, color: "bg-warning/20", iconColor: "text-warning" },
          { label: "Completion Rate", value: "0%", icon: CheckCircle, color: "bg-blue-500/20", iconColor: "text-blue-500" }
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className={`p-3 ${stat.color} rounded-xl`}>
                  <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.path} to={action.path}>
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Active Orders Preview */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Active Orders</h3>
            <p className="text-sm text-muted-foreground">Orders that need your attention</p>
          </div>
          <Link to="/merchant/orders">
            <Button variant="ghost" size="sm">
              View All
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
        <p className="text-center text-muted-foreground py-8">No active orders right now</p>
      </div>
    </div>
  );
}
