import StorePageNavigation from "../../shared/navigation/StorePageNavigation";

const product = {
  name: "Sample Dish",
  description: "A delicious sample dish used as a placeholder.",
  price: 4500,
  category: "Main",
  tags: ["popular", "chef's choice"],
  status: "In Stock"
};

export default function ProductDetailPage() {

  return (
    <>
      <StorePageNavigation />
      <main className="mt-16">
        <div className="p-6 text-lg text-muted-foreground">Sample Merchant / Main Menu / {product.name}</div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-8">
          {/* Image */}
          <div>
            <div className="w-full aspect-square bg-secondary rounded-lg flex items-center justify-center">
              <div className="text-muted-foreground">Product Image</div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground">Description</h3>
              <p className="text-lg text-foreground">{product.description}</p>
            </div>

            <div className="text-3xl font-bold text-primary">XAF {product.price.toLocaleString()}</div>

            <div>
              <p className="text-sm text-muted-foreground">Category: <span className="text-foreground font-medium">{product.category}</span></p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            <div>
              <span className="px-3 py-1 bg-success/20 text-success rounded-full text-sm font-medium">{product.status}</span>
            </div>

            <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg">
              Add to Cart
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
