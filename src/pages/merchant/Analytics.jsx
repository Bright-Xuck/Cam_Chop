import { TrendingUp, DollarSign, ShoppingBag, CheckCircle, Star } from "lucide-react";

const stats = [
  { title: "Total Revenue", value: "XAF 123,450", icon: DollarSign, color: "bg-success", change: "+12.5%" },
  { title: "Total Orders", value: "24", icon: ShoppingBag, color: "bg-primary", change: "+8.2%" },
  { title: "Avg. Order Value", value: "XAF 5,143", icon: TrendingUp, color: "bg-warning", change: "+3.1%" },
  { title: "Completion Rate", value: "97%", icon: CheckCircle, color: "bg-blue-500", change: "-1.2%" }
];

const revenueByDay = [
  { day: "Mon", revenue: 15000 },
  { day: "Tue", revenue: 12000 },
  { day: "Wed", revenue: 18000 },
  { day: "Thu", revenue: 14000 },
  { day: "Fri", revenue: 20000 },
  { day: "Sat", revenue: 22000 },
  { day: "Sun", revenue: 15000 }
];

const topItems = [
  { name: "Sample Dish", quantity: 40, revenue: 180000 },
  { name: "Sample Bowl", quantity: 28, revenue: 89600 }
];

const reviews = [
  { customer: "John Doe", rating: 5, comment: "Great!" },
  { customer: "Jane Smith", rating: 4, comment: "Tasty." }
];

export default function Analytics() {
  const maxRevenue = Math.max(...revenueByDay.map(d => d.revenue));

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-sm text-muted-foreground">Track your store performance</p>
        </div>
      </header>

      <main className="p-6 space-y-6 max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-success mt-1">{stat.change}</p>
                  </div>
                  <div className={`p-3 ${stat.color} rounded-xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Revenue Chart */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Revenue Overview</h3>
          <div className="flex items-end gap-2 h-48">
            {revenueByDay.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div
                  className="w-full bg-primary rounded-t-md hover:bg-primary/80 transition-colors"
                  style={{ height: `${(item.revenue / maxRevenue) * 100}%`, minHeight: "8px" }}
                />
                <span className="text-xs text-muted-foreground">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Selling Items */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Top Selling Items</h3>
            <div className="space-y-3">
              {topItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-primary bg-primary/10 rounded-full">{idx + 1}</span>
                    <span className="font-medium text-foreground">{item.name}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">{item.quantity} sold</span>
                    <span className="font-semibold text-foreground ml-4">XAF {item.revenue.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Recent Reviews</h3>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-warning text-warning" />
                <span className="font-bold text-foreground">4.7</span>
              </div>
            </div>
            <div className="space-y-3">
              {reviews.map((review, idx) => (
                <div key={idx} className="p-3 bg-secondary/50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground">{review.customer}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < review.rating ? "fill-warning text-warning" : "text-muted"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
