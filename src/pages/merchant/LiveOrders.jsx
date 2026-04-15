import { Clock, Phone, MapPin, CreditCard, CheckCircle } from "lucide-react";
import Button from "../../Components/ui/Button";

const sampleOrders = [
  {
    id: "1",
    orderNumber: "ORD-1001",
    status: "new",
    customer: { name: "John Doe", phone: "+237 6 123 456", address: "123 Main St" },
    items: [{ name: "Sample Dish", quantity: 2, price: 4500 }],
    total: 9000,
    createdAt: new Date(Date.now() - 5 * 60000).toLocaleTimeString()
  },
  {
    id: "2",
    orderNumber: "ORD-1002",
    status: "preparing",
    customer: { name: "Jane Smith", phone: "+237 6 654 321", address: "45 Market Rd" },
    items: [{ name: "Sample Bowl", quantity: 1, price: 3200 }],
    total: 3200,
    createdAt: new Date(Date.now() - 10 * 60000).toLocaleTimeString()
  }
];

const statusConfig = {
  new: { label: "New Order", bgColor: "bg-error/10", textColor: "text-error" },
  preparing: { label: "Preparing", bgColor: "bg-warning/10", textColor: "text-warning" },
  ready: { label: "Ready", bgColor: "bg-success/10", textColor: "text-success" }
};

export default function LiveOrders() {
  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-foreground">Live Orders</h1>
          <p className="text-sm text-muted-foreground">Real-time order management</p>
        </div>
      </header>

      {/* Orders Grid */}
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleOrders.map((order) => {
            const config = statusConfig[order.status] || statusConfig.new;
            return (
              <div key={order.id} className="bg-card border border-border rounded-lg p-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-lg font-bold text-foreground">{order.orderNumber}</p>
                    <p className="text-xs text-muted-foreground">{order.createdAt}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${config.bgColor} ${config.textColor}`}>
                    {config.label}
                  </div>
                </div>

                {/* Customer Info */}
                <div className="space-y-2 mb-4 pb-4 border-b border-border">
                  <p className="font-semibold text-foreground">{order.customer.name}</p>
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
                <div className="space-y-2 mb-4 pb-4 border-b border-border">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-foreground">{item.quantity}x {item.name}</span>
                      <span className="text-muted-foreground">XAF {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-2 text-sm">
                    <CreditCard className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Card</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">XAF {order.total.toLocaleString()}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" size="sm">Print</Button>
                  <Button className="flex-1" size="sm">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Next
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
