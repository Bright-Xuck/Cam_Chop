import { MapPin } from "lucide-react";
import Footer from "../../shared/common/Footer";

const store = {
  name: "Sample Restaurant",
  description: "Delicious food delivered to your door",
  banner: "",
  rating: 4.5,
  services: { delivery: true, pickup: true }
};

const sampleProducts = [
  { id: 1, name: "Item 1", price: 3500 },
  { id: 2, name: "Item 2", price: 4500 }
];

export default function MerchantStoreView() {
  return (
    <>
      <main className="flex flex-col">
        {/* Banner */}
        <section className="w-full h-64 bg-secondary flex items-center justify-center mt-16">
          <div className="text-muted-foreground">Store Banner</div>
        </section>

        <div className="flex flex-col md:flex-row max-w-6xl mx-auto w-full gap-8 py-12 px-4">
          {/* Sidebar */}
          <section className="w-full md:w-64">
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-bold text-foreground">{store.name}</h1>
                <p className="text-success font-medium">Open Now</p>
                <p className="text-sm text-muted-foreground">{store.rating} (2k+ ratings)</p>
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Full Menu</h2>
                <p className="text-sm text-muted-foreground">9:00 AM - 10:00 PM</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-primary">Featured Items</p>
                <p className="text-sm text-primary">Reviews</p>
              </div>
            </div>
          </section>

          {/* Content */}
          <section className="flex-1">
            {/* Services */}
            <div className="flex gap-2 mb-8 p-4 border border-border rounded-lg bg-secondary/50">
              {store.services.delivery && (
                <span className="px-3 py-1 bg-primary text-white text-sm rounded-full font-medium">Delivery</span>
              )}
              {store.services.pickup && (
                <span className="px-3 py-1 bg-primary text-white text-sm rounded-full font-medium">Pick Up</span>
              )}
            </div>

            {/* Featured Items */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Featured Items</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sampleProducts.map((item) => (
                  <div key={item.id} className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-32 bg-secondary flex items-center justify-center">
                      <span className="text-muted-foreground">Image</span>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-foreground">{item.name}</h3>
                      <p className="text-sm text-primary font-semibold">XAF {item.price.toLocaleString()}</p>
                      <button className="mt-2 w-full py-1 bg-primary text-white text-sm rounded hover:bg-primary/90 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
