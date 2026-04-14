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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";
import Badge from "../../Components/ui/Badge";
import { useMerchant } from "../../context/MerchantProvider";
import { merchantAnalytics, merchantOrders } from "../../data/merchantOrders";

// Quick action cards
const quickActions = [
  {
    title: "Live Orders",
    description: "View and manage incoming orders",
    icon: ShoppingBag,
    path: "/merchant/orders",
    color: "bg-primary"
  },
  {
    title: "Menu Manager",
    description: "Update your menu items",
    icon: UtensilsCrossed,
    path: "/merchant/menu",
    color: "bg-warning"
  },
  {
    title: "Analytics",
    description: "Track your performance",
    icon: BarChart3,
    path: "/merchant/analytics",
    color: "bg-success"
  },
  {
    title: "Store Settings",
    description: "Configure your store",
    icon: Settings,
    path: "/merchant/settings",
    color: "bg-blue-500"
  }
];

export default function MerchantDashboard() {
  const { currentUser } = useMerchant();
  const activeOrders = merchantOrders.filter((o) => o.status !== "completed");
  const todayStats = merchantAnalytics.today;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="min-h-screen bg-secondary/30 p-6">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {getGreeting()}, {currentUser?.name || "Partner"}
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s what&apos;s happening with your store today.
        </p>
      </div>

      {/* Today's Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today&apos;s Revenue</p>
                <p className="text-2xl font-bold text-foreground">
                  XAF {todayStats.revenue.toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-success/20 rounded-xl">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Orders Today</p>
                <p className="text-2xl font-bold text-foreground">{todayStats.orders}</p>
              </div>
              <div className="p-3 bg-primary/20 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Orders</p>
                <p className="text-2xl font-bold text-foreground">{activeOrders.length}</p>
              </div>
              <div className="p-3 bg-warning/20 rounded-xl">
                <Clock className="w-6 h-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
                <p className="text-2xl font-bold text-foreground">{todayStats.completionRate}%</p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.path} to={action.path}>
                <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
                  <CardContent className="py-6">
                    <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Active Orders Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Active Orders</CardTitle>
              <CardDescription>Orders that need your attention</CardDescription>
            </div>
            <Link to="/merchant/orders">
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {activeOrders.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No active orders right now
              </p>
            ) : (
              <div className="space-y-3">
                {activeOrders.slice(0, 4).map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground">{order.orderNumber}</span>
                        <Badge
                          variant={
                            order.status === "new"
                              ? "error"
                              : order.status === "preparing"
                              ? "warning"
                              : "success"
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {order.items.length} items - {order.customer.name}
                      </p>
                    </div>
                    <p className="font-semibold text-foreground">
                      XAF {order.total.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Selling Today</CardTitle>
            <CardDescription>Your best performing items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {merchantAnalytics.topSellingItems.slice(0, 4).map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-primary bg-primary/10 rounded-full">
                      {idx + 1}
                    </span>
                    <span className="font-medium text-foreground">{item.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.quantity} sold</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
