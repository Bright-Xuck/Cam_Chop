import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Package, Clock, MapPin, ChevronRight, Filter, Search, RefreshCw } from "lucide-react";
// presentation-only: do not depend on AuthContext
import Button from "../../Components/ui/Button";
import Badge from "../../Components/ui/Badge";
import { OrderCardSkeleton } from "../../Components/ui/Skeleton";

export default function Orders() {
  const currentUser = null;
  const isAuthenticated = true; // allow viewing placeholder orders
  const isLoading = false;
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const sampleOrders = [
    {
      id: "1001",
      merchantName: "Sample Merchant",
      createdAt: new Date().toISOString(),
      status: "delivered",
      items: [{ name: "Sample Dish", quantity: 2 }],
      deliveryAddress: "12 Example St",
      total: 9000
    },
    {
      id: "1002",
      merchantName: "Another Merchant",
      createdAt: new Date(Date.now() - 2 * 86400000).toISOString(),
      status: "pending",
      items: [{ name: "Sample Bowl", quantity: 1 }],
      deliveryAddress: "45 Market Rd",
      total: 3200
    }
  ];

  const filteredOrders = sampleOrders.filter((o) => {
    const matchesStatus = statusFilter === "all" ? true : o.status === statusFilter;
    const matchesQuery = !searchQuery || o.id.includes(searchQuery) || o.merchantName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesQuery;
  });

  const handleRefresh = () => {
    // Will fetch from backend
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  };

  // Format price
  const formatPrice = (price) => {
    return `XAF ${price.toLocaleString()}`;
  };

  // Get status badge variant
  const getStatusVariant = (status) => {
    switch (status) {
      case "delivered": return "success";
      case "in-progress": return "primary";
      case "pending": return "warning";
      case "cancelled": return "error";
      default: return "default";
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background py-8 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {[1, 2, 3].map(i => <OrderCardSkeleton key={i} />)}
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <Package className="w-16 h-16 mx-auto text-muted mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Sign in to view orders</h1>
          <p className="text-muted-foreground mb-6">
            Track your orders and view your order history
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => navigate("/login")}>Sign In</Button>
            <Button variant="outline" onClick={() => navigate("/signup")}>Create Account</Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Order History</h1>
            <Button variant="ghost" size="sm" onClick={() => { setIsRefreshing(true); setTimeout(() => setIsRefreshing(false), 500); }} disabled={isRefreshing}>
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="search"
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-border bg-background
                  text-foreground placeholder:text-muted focus:outline-none focus:ring-2 
                  focus:ring-primary focus:border-transparent"
                aria-label="Search orders"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted sm:hidden" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="h-10 px-3 rounded-lg border border-border bg-background text-foreground
                  focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Filter by status"
              >
                <option value="all">All Orders</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </header>

        {/* Orders List */}
        {ordersLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map(i => <OrderCardSkeleton key={i} />)}
          </div>
        ) : filteredOrders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-12 h-12 mx-auto text-muted mb-4" />
            <h2 className="text-lg font-semibold text-foreground mb-2">
              {searchQuery || statusFilter !== "all" ? "No orders found" : "No orders yet"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {searchQuery || statusFilter !== "all" 
                ? "Try adjusting your filters"
                : "Start ordering to see your history here"}
            </p>
            {!searchQuery && statusFilter === "all" && (
              <Button onClick={() => navigate("/shop")}>Browse Restaurants</Button>
            )}
          </div>
        ) : (
          <div className="space-y-4" role="list" aria-label="Order list">
            {filteredOrders.map((order) => (
              <article 
                key={order.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors"
                role="listitem"
              >
                {/* Order Header */}
                <div className="p-4 border-b border-border">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="font-semibold text-foreground">{order.merchantName}</p>
                      <p className="text-sm text-muted-foreground">{order.id}</p>
                    </div>
                    <Badge variant={getStatusVariant(order.status)}>
                      {order.status ? order.status.charAt(0).toUpperCase() + order.status.slice(1) : "Unknown"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {formatDate(order.createdAt)}
                    </span>
                  </div>
                </div>

                {/* Order Items Preview */}
                <div className="p-4">
                  <div className="flex gap-3 mb-3">
                    {order.items.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="text-sm">
                        <span className="text-muted-foreground">{item.quantity}x</span>{" "}
                        <span className="text-foreground">{item.name}</span>
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <span className="text-sm text-muted">
                        +{order.items.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Delivery Info */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{order.deliveryAddress}</span>
                  </div>

                  {/* Order Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="font-semibold text-foreground">{formatPrice(order.total)}</p>
                    </div>
                    <div className="flex gap-2">
                      {order.status === "delivered" && (
                        <Button variant="outline" size="sm">
                          Reorder
                        </Button>
                      )}
                      <Link to={`/orders/${order.id}`}>
                        <Button variant="secondary" size="sm">
                          View Details
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
