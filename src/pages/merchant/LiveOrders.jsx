import { useState, useEffect } from "react";
import {
  Bell,
  Clock,
  ChefHat,
  Package,
  CheckCircle,
  Phone,
  MapPin,
  CreditCard,
  Timer,
  RefreshCw,
  Volume2,
  VolumeX
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";
import Badge from "../../Components/ui/Badge";
import { merchantOrders, orderStatusConfig } from "../../data/merchantOrders";
import { useMerchant } from "../../context/MerchantProvider";

// Order Card Skeleton for loading state
function OrderCardSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="h-6 w-24 bg-secondary rounded" />
          <div className="h-6 w-20 bg-secondary rounded-full" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="h-4 w-32 bg-secondary rounded" />
          <div className="h-4 w-48 bg-secondary rounded" />
        </div>
        <div className="space-y-2">
          {[1, 2].map((i) => (
            <div key={i} className="h-4 w-full bg-secondary rounded" />
          ))}
        </div>
        <div className="flex gap-2 pt-2">
          <div className="h-10 flex-1 bg-secondary rounded-lg" />
          <div className="h-10 flex-1 bg-secondary rounded-lg" />
        </div>
      </CardContent>
    </Card>
  );
}

// Individual Order Card
function OrderCard({ order, onUpdateStatus }) {
  const config = orderStatusConfig[order.status];
  const orderTime = new Date(order.createdAt);
  const minutesAgo = Math.floor((Date.now() - orderTime.getTime()) / 60000);

  const getNextAction = () => {
    switch (order.status) {
      case "new":
        return { label: "Accept Order", nextStatus: "preparing", variant: "primary" };
      case "preparing":
        return { label: "Mark Ready", nextStatus: "ready", variant: "primary" };
      case "ready":
        return { label: "Complete", nextStatus: "completed", variant: "primary" };
      default:
        return null;
    }
  };

  const nextAction = getNextAction();

  return (
    <Card className={`border-l-4 ${config.borderColor} hover:shadow-md transition-shadow`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-foreground">{order.orderNumber}</span>
            {order.status === "new" && (
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
            )}
          </div>
          <Badge variant={order.status === "new" ? "error" : order.status === "preparing" ? "warning" : "success"}>
            {config.label}
          </Badge>
        </div>
        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {minutesAgo < 1 ? "Just now" : `${minutesAgo} min ago`}
          </span>
          <span className="flex items-center gap-1">
            <Timer className="w-4 h-4" />
            ~{order.estimatedPrepTime} min prep
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Customer Info */}
        <div className="space-y-2">
          <p className="font-medium text-foreground">{order.customer.name}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>{order.customer.phone}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>{order.customer.address}</span>
          </div>
        </div>

        {/* Order Items */}
        <div className="border-t border-border pt-3">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Order Items</h4>
          <ul className="space-y-2">
            {order.items.map((item, idx) => (
              <li key={idx} className="flex justify-between text-sm">
                <span className="text-foreground">
                  {item.quantity}x {item.name}
                  {item.notes && (
                    <span className="block text-xs text-muted-foreground ml-4">Note: {item.notes}</span>
                  )}
                </span>
                <span className="text-muted-foreground">XAF {(item.price * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          {order.specialInstructions && (
            <div className="mt-3 p-2 bg-warning/10 rounded-lg text-sm">
              <span className="font-medium text-warning">Special Instructions:</span>
              <p className="text-foreground">{order.specialInstructions}</p>
            </div>
          )}
        </div>

        {/* Payment & Total */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-2 text-sm">
            <CreditCard className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{order.paymentMethod}</span>
            <Badge variant={order.paymentStatus === "paid" ? "success" : "warning"} className="text-xs">
              {order.paymentStatus}
            </Badge>
          </div>
          <p className="text-lg font-bold text-foreground">XAF {order.total.toLocaleString()}</p>
        </div>

        {/* Actions */}
        {nextAction && (
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {/* Print receipt logic */}}
            >
              Print
            </Button>
            <Button
              className="flex-1"
              onClick={() => onUpdateStatus(order.id, nextAction.nextStatus)}
            >
              {nextAction.label}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Main Live Orders Dashboard
export default function LiveOrders() {
  const { currentUser } = useMerchant();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [filter, setFilter] = useState("all");

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setOrders(merchantOrders);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Optimistic UI update for order status
  const handleUpdateStatus = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, status: newStatus, ...(newStatus === "completed" ? { completedAt: new Date().toISOString() } : {}) }
          : order
      )
    );
  };

  // Refresh orders
  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setOrders(merchantOrders);
      setIsLoading(false);
    }, 500);
  };

  // Filter orders
  const filteredOrders = orders.filter((order) => {
    if (filter === "all") return order.status !== "completed";
    return order.status === filter;
  });

  // Order counts
  const counts = {
    new: orders.filter((o) => o.status === "new").length,
    preparing: orders.filter((o) => o.status === "preparing").length,
    ready: orders.filter((o) => o.status === "ready").length,
    completed: orders.filter((o) => o.status === "completed").length
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Live Orders</h1>
              <p className="text-sm text-muted-foreground">
                Real-time order management for {currentUser?.name || "Your Store"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label={soundEnabled ? "Mute notifications" : "Enable notifications"}
              >
                {soundEnabled ? (
                  <Volume2 className="w-5 h-5 text-foreground" />
                ) : (
                  <VolumeX className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              <Button variant="outline" onClick={handleRefresh} disabled={isLoading}>
                <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                Refresh
              </Button>
            </div>
          </div>
        </div>

        {/* Status Filter Tabs */}
        <div className="px-6 pb-4 flex gap-2 overflow-x-auto">
          {[
            { key: "all", label: "Active", icon: Bell, count: counts.new + counts.preparing + counts.ready },
            { key: "new", label: "New", icon: Bell, count: counts.new },
            { key: "preparing", label: "Preparing", icon: ChefHat, count: counts.preparing },
            { key: "ready", label: "Ready", icon: Package, count: counts.ready },
            { key: "completed", label: "Completed", icon: CheckCircle, count: counts.completed }
          ].map(({ key, label, icon: Icon, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors
                ${filter === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary"
                }
              `}
            >
              <Icon className="w-4 h-4" />
              {label}
              {count > 0 && (
                <span
                  className={`
                    px-2 py-0.5 rounded-full text-xs font-bold
                    ${filter === key ? "bg-primary-foreground/20 text-primary-foreground" : "bg-secondary text-foreground"}
                  `}
                >
                  {count}
                </span>
              )}
            </button>
          ))}
        </div>
      </header>

      {/* Orders Grid */}
      <main className="p-6">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <OrderCardSkeleton key={i} />
            ))}
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
              <Package className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">No orders found</h2>
            <p className="text-muted-foreground max-w-md">
              {filter === "all"
                ? "No active orders at the moment. New orders will appear here automatically."
                : `No ${filter} orders right now.`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} onUpdateStatus={handleUpdateStatus} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
