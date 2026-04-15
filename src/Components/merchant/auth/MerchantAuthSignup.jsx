import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router";

export default function MerchantAuthSignup() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        toast.success("Account created — continue to login");
        // proceed immediately to merchant login
        navigate("/merchant/login");
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-background py-12 px-4 sm:px-6 lg:px-8">
            <Toaster position="top-center" />
            <div className="w-full max-w-3xl grid grid-cols-2 gap-8 items-start">
                <section className="bg-white p-8 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-2">Sign up for CamChop</h2>
                    <p className="text-sm text-muted-foreground mb-6">Partner with CamChop to grow your business.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input name="name" required placeholder="Business name" className="w-full rounded-md border px-3 py-2" />
                        <input name="location" required placeholder="Business address" className="w-full rounded-md border px-3 py-2" />
                        <input name="email" type="email" required placeholder="Email address" className="w-full rounded-md border px-3 py-2" />
                        <input name="tel" type="tel" placeholder="Phone" className="w-full rounded-md border px-3 py-2" />
                        <div className="flex gap-3">
                            <button type="submit" className="flex-1 bg-primary text-white py-2 rounded-md">Create account</button>
                            <button type="button" onClick={() => navigate("/merchant/login")} className="flex-1 border py-2 rounded-md">Have an account</button>
                        </div>
                    </form>
                </section>

                <aside className="hidden md:block bg-gradient-to-br from-primary/10 to-secondary p-8 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Your door to profitable growth</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Delivery &amp; Pickup</li>
                        <li>Promotions &amp; Sponsored Listings</li>
                        <li>Easy menu management</li>
                    </ul>
                </aside>
            </div>
        </div>
    );
}
