import { NavLink } from "react-router";
import { LogOut, Package, Heart, Settings, ChevronRight } from "lucide-react";
import Button from "../Components/ui/Button";

export default function Profile() {
  const currentUser = { firstname: "John", lastname: "Doe", email: "john@example.com", phone: "+237 6 123 456" };

  const menuItems = [
    { icon: Package, label: "Order History", path: "/orders", description: "View past orders" },
    { icon: Heart, label: "Favorites", path: "/favorites", description: "Your saved restaurants" },
    { icon: Settings, label: "Settings", path: "/settings", description: "App preferences" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <section className="bg-card border border-border rounded-2xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-primary">{currentUser.firstname?.charAt(0)?.toUpperCase()}</span>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground">{currentUser.firstname} {currentUser.lastname}</h1>
              <p className="text-muted-foreground">{currentUser.email}</p>
            </div>
            <Button variant="outline" size="sm">Edit Profile</Button>
          </div>
        </section>

        {/* Profile Form */}
        <section className="bg-card border border-border rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-4">Account Information</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">First Name</label>
                <input type="text" defaultValue={currentUser.firstname} className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Last Name</label>
                <input type="text" defaultValue={currentUser.lastname} className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input type="email" defaultValue={currentUser.email} className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
              <input type="tel" defaultValue={currentUser.phone} className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="flex gap-3 pt-4">
              <Button>Save Changes</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.path} to={item.path} className="block">
                <div className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <h3 className="font-medium text-foreground">{item.label}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </section>

        {/* Logout */}
        <div className="mt-8 pt-6 border-t border-border">
          <Button variant="outline" className="w-full text-error hover:bg-error/10">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </main>
  );
}
