import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function Logincomponent() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  async function handleLogin(event) {
    event.preventDefault();
    setErrors({});
    
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // Client-side validation
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";
    if (!password) newErrors.password = "Password is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const result = login(email, password);
    
    if (result.success) {
      toast.success("Login successful!");
      setTimeout(() => navigate("/shop"), 1000);
    } else {
      toast.error("Incorrect email or password");
      setErrors({ email: "Invalid credentials" });
    }
    
    setIsLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" />

      <div className="w-full max-w-md space-y-8">
        {/* Form Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-medium text-primary hover:text-primary/80">
              Sign up
            </Link>
          </p>
        </div>

        {/* The Form */}
        <form
          className="mt-8 space-y-6 rounded-xl bg-card border border-border p-8 shadow-sm"
          onSubmit={handleLogin}
          noValidate
        >
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            error={errors.email}
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            required
            error={errors.password}
            placeholder="Enter your password"
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm text-muted-foreground">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full" loading={isLoading}>
            Sign in
          </Button>
        </form>

        {/* Social Login */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" type="button">
            Google
          </Button>
          <Button variant="outline" type="button">
            Apple
          </Button>
        </div>
      </div>
    </div>
  );
}
