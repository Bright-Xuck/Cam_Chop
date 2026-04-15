import { Link, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

export default function MerchantAuthLogin() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    toast.success("Logged in — opening dashboard");
    // immediate navigation; authentication will be handled by backend later
    navigate("/merchant");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-12 px-4">
      <Toaster position="top-center" />
      <div className="w-full max-w-4xl grid grid-cols-2 gap-8 bg-white rounded-lg shadow overflow-hidden">
        <div className="hidden md:block">
          <img src="/photos/auth.png" alt="phone" className="w-full h-full object-cover" />
        </div>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">CamChop Merchant</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-md border px-3 py-2" />
            <button type="submit" className="w-full bg-primary text-white py-2 rounded-md">Continue to dashboard</button>
          </form>
          <div className="mt-4 text-sm text-muted-foreground">No account? <Link to="/merchant/signup" className="text-primary">Partner with CamChop</Link></div>
        </div>
      </div>
    </div>
  );
}
