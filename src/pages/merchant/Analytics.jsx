import { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Users,
  Star,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../Components/ui/Card";
import Badge from "../../Components/ui/Badge";
import { merchantAnalytics } from "../../data/merchantOrders";
import { useMerchant } from "../../context/MerchantProvider";

// Stat Card Skeleton
function StatCardSkeleton() {
  return (
    <Card className="animate-pulse">
      <CardContent className="py-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="h-4 w-24 bg-secondary rounded" />
            <div className="h-8 w-32 bg-secondary rounded" />
            <div className="h-3 w-20 bg-secondary rounded" />
          </div>
          <div className="w-12 h-12 bg-secondary rounded-xl" />
        </div>
      </CardContent>
    </Card>
  );
}

// Stat Card Component
function StatCard({ title, value, change, changeType, icon: Icon, iconBg, format = "number" }) {
  const isPositive = changeType === "positive";
  const formattedValue = format === "currency"
    ? `XAF ${value.toLocaleString()}`
    : format === "percent"
    ? `${value}%`
    : value.toLocaleString();

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="py-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <p className="text-2xl font-bold text-foreground">{formattedValue}</p>
            {change !== undefined && (
              <div className="flex items-center gap-1 mt-2">
                {isPositive ? (
                  <ArrowUpRight className="w-4 h-4 text-success" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-error" />
                )}
                <span className={`text-sm font-medium ${isPositive ? "text-success" : "text-error"}`}>
                  {change}%
                </span>
                <span className="text-sm text-muted-foreground">vs last period</span>
              </div>
            )}
          </div>
          <div className={`p-3 rounded-xl ${iconBg}`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Simple Bar Chart
function SimpleBarChart({ data, dataKey, labelKey, height = 200 }) {
  const maxValue = Math.max(...data.map((d) => d[dataKey]));

  return (
    <div className="flex items-end justify-between gap-2" style={{ height }}>
      {data.map((item, idx) => {
        const barHeight = (item[dataKey] / maxValue) * 100;
        return (
          <div key={idx} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full bg-primary/80 rounded-t-md hover:bg-primary transition-colors cursor-pointer relative group"
              style={{ height: `${barHeight}%`, minHeight: "8px" }}
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-card text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {dataKey === "revenue" ? `XAF ${item[dataKey].toLocaleString()}` : item[dataKey]}
              </div>
            </div>
            <span className="text-xs text-muted-foreground">{item[labelKey]}</span>
          </div>
        );
      })}
    </div>
  );
}

// Top Selling Items Table
function TopSellingTable({ items }) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-primary bg-primary/10 rounded-full">
              {idx + 1}
            </span>
            <span className="font-medium text-foreground">{item.name}</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-muted-foreground">{item.quantity} sold</span>
            <span className="font-semibold text-foreground">
              XAF {item.revenue.toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// Recent Reviews
function RecentReviews({ reviews }) {
  return (
    <div className="space-y-4">
      {reviews.map((review, idx) => (
        <div key={idx} className="p-4 bg-secondary/50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-foreground">{review.customer}</span>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating ? "fill-warning text-warning" : "text-muted"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{review.comment}</p>
          <span className="text-xs text-muted-foreground">{review.date}</span>
        </div>
      ))}
    </div>
  );
}

export default function Analytics() {
  const { currentUser } = useMerchant();
  const [isLoading, setIsLoading] = useState(true);
  const [period, setPeriod] = useState("today");
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setData(merchantAnalytics);
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [period]);

  const periodData = data?.[period] || data?.today;

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
              <p className="text-sm text-muted-foreground">
                Track your store performance and trends
              </p>
            </div>
            <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
              {["today", "week", "month"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-md transition-colors capitalize
                    ${period === p
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {p === "today" ? "Today" : p === "week" ? "This Week" : "This Month"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="p-6 space-y-6">
        {/* Stats Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <StatCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              title="Total Revenue"
              value={periodData?.revenue || 0}
              change={12.5}
              changeType="positive"
              icon={DollarSign}
              iconBg="bg-success"
              format="currency"
            />
            <StatCard
              title="Total Orders"
              value={periodData?.orders || 0}
              change={8.2}
              changeType="positive"
              icon={ShoppingBag}
              iconBg="bg-primary"
            />
            <StatCard
              title="Avg. Order Value"
              value={periodData?.avgOrderValue || 0}
              change={3.1}
              changeType="positive"
              icon={TrendingUp}
              iconBg="bg-warning"
              format="currency"
            />
            <StatCard
              title="Completion Rate"
              value={periodData?.completionRate || 0}
              change={-1.2}
              changeType="negative"
              icon={Users}
              iconBg="bg-blue-500"
              format="percent"
            />
          </div>
        )}

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Daily revenue for the past week</CardDescription>
                </div>
                <Badge variant="success">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +12.5%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-[200px] bg-secondary rounded animate-pulse" />
              ) : (
                <SimpleBarChart
                  data={data?.revenueByDay || []}
                  dataKey="revenue"
                  labelKey="day"
                  height={200}
                />
              )}
            </CardContent>
          </Card>

          {/* Orders Chart */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Orders Overview</CardTitle>
                  <CardDescription>Daily orders for the past week</CardDescription>
                </div>
                <Badge variant="primary">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +8.2%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-[200px] bg-secondary rounded animate-pulse" />
              ) : (
                <SimpleBarChart
                  data={data?.ordersByDay || []}
                  dataKey="orders"
                  labelKey="day"
                  height={200}
                />
              )}
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Selling Items */}
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Items</CardTitle>
              <CardDescription>Your best performing menu items</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-12 bg-secondary rounded animate-pulse" />
                  ))}
                </div>
              ) : (
                <TopSellingTable items={data?.topSellingItems || []} />
              )}
            </CardContent>
          </Card>

          {/* Recent Reviews */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Reviews</CardTitle>
                  <CardDescription>Latest customer feedback</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <span className="font-bold text-foreground">4.7</span>
                  <span className="text-sm text-muted-foreground">(128 reviews)</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-secondary rounded animate-pulse" />
                  ))}
                </div>
              ) : (
                <RecentReviews reviews={data?.recentReviews || []} />
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
