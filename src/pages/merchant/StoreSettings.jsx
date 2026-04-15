import { Store, MapPin, Phone, Mail, Globe } from "lucide-react";
import Button from "../../Components/ui/Button";

export default function StoreSettings() {
  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Store Settings</h1>
            <p className="text-sm text-muted-foreground">Manage your store profile</p>
          </div>
          <Button>Save Changes</Button>
        </div>
      </header>

      <main className="p-6 max-w-4xl mx-auto space-y-6">
        {/* Store Status */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                <Store className="w-6 h-6 text-success" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Store is Open</h2>
                <p className="text-sm text-muted-foreground">Customers can place orders</p>
              </div>
            </div>
            <input type="checkbox" defaultChecked className="w-6 h-6" />
          </div>
        </div>

        {/* Basic Info */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Basic Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Store Name</label>
              <input type="text" placeholder="Your store name" className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Description</label>
              <textarea placeholder="Tell customers about your store..." rows="3" className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Location</label>
                <input type="text" placeholder="Store address" className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                <input type="tel" placeholder="+237 XXX XXX XXX" className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input type="email" placeholder="store@example.com" className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Website</label>
                <input type="url" placeholder="https://yourstore.com" className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
          <div className="space-y-3">
            {["Delivery", "Pickup", "Dine-In"].map((service) => (
              <div key={service} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <p className="font-medium text-foreground">{service}</p>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Business Hours</h3>
          <div className="space-y-3">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <div key={day} className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg">
                <span className="w-24 text-sm font-medium text-foreground">{day}</span>
                <input type="time" defaultValue="09:00" className="px-3 py-1.5 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                <span className="text-muted-foreground">to</span>
                <input type="time" defaultValue="22:00" className="px-3 py-1.5 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
