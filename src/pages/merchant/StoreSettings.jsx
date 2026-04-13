import { useState, useEffect } from "react";
import {
  Store,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  Camera,
  Save,
  AlertCircle
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";
import Input from "../../Components/ui/Input";
import Toggle from "../../Components/ui/Toggle";
import { useMerchant } from "../../context/MerchantProvider";
import { merchants } from "../../data/merchants";

// Business Hours Component
function BusinessHours({ hours, onChange }) {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const dayLabels = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday"
  };

  const handleTimeChange = (day, field, value) => {
    onChange({
      ...hours,
      [day]: { ...hours[day], [field]: value }
    });
  };

  return (
    <div className="space-y-3">
      {days.map((day) => (
        <div
          key={day}
          className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg"
        >
          <span className="w-24 text-sm font-medium text-foreground capitalize">
            {dayLabels[day]}
          </span>
          <div className="flex items-center gap-2 flex-1">
            <input
              type="time"
              value={hours[day]?.open || "09:00"}
              onChange={(e) => handleTimeChange(day, "open", e.target.value)}
              className="px-3 py-1.5 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span className="text-muted-foreground">to</span>
            <input
              type="time"
              value={hours[day]?.close || "22:00"}
              onChange={(e) => handleTimeChange(day, "close", e.target.value)}
              className="px-3 py-1.5 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Skeleton for loading
function SettingsSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <Card>
        <CardHeader>
          <div className="h-6 w-40 bg-secondary rounded" />
          <div className="h-4 w-64 bg-secondary rounded mt-2" />
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-10 bg-secondary rounded" />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default function StoreSettings() {
  const { currentUser } = useMerchant();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [storeData, setStoreData] = useState({
    name: "",
    description: "",
    location: "",
    phone: "",
    email: "",
    website: "",
    logo: "",
    banner: "",
    isOpen: true,
    services: {
      delivery: true,
      pickup: true,
      dineIn: false
    },
    hours: {}
  });

  // Load store data
  useEffect(() => {
    const timer = setTimeout(() => {
      const merchant = merchants.find((m) => m.email === currentUser?.email) || merchants[0];
      setStoreData({
        name: merchant.name,
        description: merchant.description,
        location: merchant.location,
        phone: merchant.tel,
        email: merchant.email,
        website: "",
        logo: merchant.logo,
        banner: merchant.banner,
        isOpen: true,
        services: merchant.services,
        hours: merchant.hours
      });
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentUser]);

  const handleChange = (field, value) => {
    setStoreData((prev) => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleServiceToggle = (service) => {
    setStoreData((prev) => ({
      ...prev,
      services: { ...prev.services, [service]: !prev.services[service] }
    }));
    setHasChanges(true);
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setHasChanges(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary/30 p-6">
        <SettingsSkeleton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Store Settings</h1>
            <p className="text-sm text-muted-foreground">
              Manage your store profile and preferences
            </p>
          </div>
          <div className="flex items-center gap-3">
            {hasChanges && (
              <span className="flex items-center gap-2 text-sm text-warning">
                <AlertCircle className="w-4 h-4" />
                Unsaved changes
              </span>
            )}
            <Button onClick={handleSave} loading={isSaving} disabled={!hasChanges}>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <main className="p-6 max-w-4xl mx-auto space-y-6">
        {/* Store Status */}
        <Card>
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    storeData.isOpen ? "bg-success/20" : "bg-error/20"
                  }`}
                >
                  <Store
                    className={`w-6 h-6 ${storeData.isOpen ? "text-success" : "text-error"}`}
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    Store is {storeData.isOpen ? "Open" : "Closed"}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {storeData.isOpen
                      ? "Customers can place orders"
                      : "Orders are paused"}
                  </p>
                </div>
              </div>
              <Toggle
                enabled={storeData.isOpen}
                onToggle={() => handleChange("isOpen", !storeData.isOpen)}
                size="lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Basic Info */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              Update your store name, description, and contact details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Store Name"
              value={storeData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your store name"
            />
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Description
              </label>
              <textarea
                value={storeData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Tell customers about your store..."
                rows={3}
                className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-9 w-4 h-4 text-muted-foreground" />
                <Input
                  label="Location"
                  value={storeData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="pl-10"
                  placeholder="Store address"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-9 w-4 h-4 text-muted-foreground" />
                <Input
                  label="Phone Number"
                  value={storeData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="pl-10"
                  placeholder="+237 XXX XXX XXX"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Mail className="absolute left-3 top-9 w-4 h-4 text-muted-foreground" />
                <Input
                  label="Email"
                  type="email"
                  value={storeData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="pl-10"
                  placeholder="store@example.com"
                />
              </div>
              <div className="relative">
                <Globe className="absolute left-3 top-9 w-4 h-4 text-muted-foreground" />
                <Input
                  label="Website (Optional)"
                  value={storeData.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  className="pl-10"
                  placeholder="https://yourstore.com"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Images */}
        <Card>
          <CardHeader>
            <CardTitle>Store Images</CardTitle>
            <CardDescription>
              Upload your logo and banner image
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Logo
                </label>
                <div className="relative aspect-square max-w-[200px] bg-secondary rounded-xl border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer overflow-hidden">
                  {storeData.logo ? (
                    <img
                      src={storeData.logo}
                      alt="Store logo"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                      <Camera className="w-8 h-8 mb-2" />
                      <span className="text-sm">Upload Logo</span>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Banner Image
                </label>
                <div className="relative aspect-video bg-secondary rounded-xl border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer overflow-hidden">
                  {storeData.banner ? (
                    <img
                      src={storeData.banner}
                      alt="Store banner"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                      <Camera className="w-8 h-8 mb-2" />
                      <span className="text-sm">Upload Banner</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <Card>
          <CardHeader>
            <CardTitle>Services</CardTitle>
            <CardDescription>
              Configure which services your store offers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Delivery</p>
                <p className="text-sm text-muted-foreground">Accept delivery orders</p>
              </div>
              <Toggle
                enabled={storeData.services.delivery}
                onToggle={() => handleServiceToggle("delivery")}
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Pickup</p>
                <p className="text-sm text-muted-foreground">Allow customers to pick up orders</p>
              </div>
              <Toggle
                enabled={storeData.services.pickup}
                onToggle={() => handleServiceToggle("pickup")}
              />
            </div>
            <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
              <div>
                <p className="font-medium text-foreground">Dine-In</p>
                <p className="text-sm text-muted-foreground">Accept dine-in customers</p>
              </div>
              <Toggle
                enabled={storeData.services.dineIn}
                onToggle={() => handleServiceToggle("dineIn")}
              />
            </div>
          </CardContent>
        </Card>

        {/* Business Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Business Hours
            </CardTitle>
            <CardDescription>
              Set your store opening and closing times
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BusinessHours
              hours={storeData.hours}
              onChange={(hours) => handleChange("hours", hours)}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
