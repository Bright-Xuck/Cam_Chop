import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { User, Mail, Phone, MapPin, Edit2, LogOut, Package, Heart, Settings, ChevronRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import Button from "../Components/ui/Button";
import Input from "../Components/ui/Input";
import { ProfileSkeleton } from "../Components/ui/Skeleton";
import toast, { Toaster } from "react-hot-toast";

export default function Profile() {
  const { currentUser, isAuthenticated, isLoading, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    firstname: currentUser?.firstname || "",
    lastname: currentUser?.lastname || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || ""
  });
  const [errors, setErrors] = useState({});

  // Show loading state
  if (isLoading) {
    return (
      <main className="min-h-screen bg-background py-8">
        <ProfileSkeleton />
      </main>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <User className="w-16 h-16 mx-auto text-muted mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Sign in to view your profile</h1>
          <p className="text-muted-foreground mb-6">
            Access your orders, saved addresses, and account settings
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => navigate("/login")}>Sign In</Button>
            <Button variant="outline" onClick={() => navigate("/signup")}>Create Account</Button>
          </div>
        </div>
      </main>
    );
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = "First name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;
    
    setIsSaving(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const result = updateProfile(formData);
    if (result.success) {
      toast.success("Profile updated successfully");
      setIsEditing(false);
    }
    setIsSaving(false);
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  const menuItems = [
    { icon: Package, label: "Order History", path: "/orders", description: "View past orders" },
    { icon: Heart, label: "Favorites", path: "/favorites", description: "Your saved restaurants" },
    { icon: MapPin, label: "Addresses", path: "/addresses", description: "Manage delivery addresses" },
    { icon: Settings, label: "Settings", path: "/settings", description: "App preferences" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Toaster position="top-center" />
      
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <section className="bg-card border border-border rounded-2xl p-6 mb-6" aria-labelledby="profile-heading">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-bold text-primary">
                {currentUser.firstname?.charAt(0)?.toUpperCase()}
                {currentUser.lastname?.charAt(0)?.toUpperCase()}
              </span>
            </div>
            
            <div className="flex-1 min-w-0">
              <h1 id="profile-heading" className="text-xl sm:text-2xl font-bold text-foreground truncate">
                {currentUser.firstname} {currentUser.lastname}
              </h1>
              <p className="text-muted-foreground truncate">{currentUser.email}</p>
            </div>

            <Button 
              variant={isEditing ? "outline" : "secondary"}
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="flex-shrink-0"
            >
              <Edit2 className="w-4 h-4" />
              <span className="hidden sm:inline">{isEditing ? "Cancel" : "Edit"}</span>
            </Button>
          </div>

          {/* Edit Form */}
          {isEditing && (
            <form 
              className="mt-6 pt-6 border-t border-border space-y-4"
              onSubmit={(e) => { e.preventDefault(); handleSave(); }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                  error={errors.firstname}
                  required
                />
                <Input
                  label="Last Name"
                  name="lastname"
                  value={formData.lastname}
                  onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                  error={errors.lastname}
                  required
                />
              </div>
              <Input
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
                required
              />
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                error={errors.phone}
                placeholder="+237 6XX XXX XXX"
              />
              <div className="flex gap-3 pt-2">
                <Button type="submit" loading={isSaving}>
                  Save Changes
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </section>

        {/* Quick Links Menu */}
        <section aria-labelledby="menu-heading">
          <h2 id="menu-heading" className="sr-only">Account Menu</h2>
          <nav className="bg-card border border-border rounded-2xl overflow-hidden">
            <ul className="divide-y divide-border">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted flex-shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {/* Logout Button */}
        <div className="mt-6">
          <Button 
            variant="outline" 
            className="w-full text-error hover:bg-error/10 hover:border-error"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </main>
  );
}
