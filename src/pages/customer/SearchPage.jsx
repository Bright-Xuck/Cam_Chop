import { Link } from "react-router";
import { Search as SearchIcon, Filter, Clock, Star, MapPin } from "lucide-react";
import Button from "../../Components/ui/Button";

const categories = ["All", "Burgers", "Pizza", "Rice Dishes", "Seafood"];

const sampleProducts = [
  {
    id: "1",
    name: "Sample Burger",
    category: "Burgers",
    description: "Delicious grilled burger",
    price: 4500,
    merchant: "Restaurant A",
    rating: 4.5,
    image: "https://via.placeholder.com/300x225?text=Burger"
  },
  {
    id: "2",
    name: "Sample Pizza",
    category: "Pizza",
    description: "Cheesy pizza with toppings",
    price: 6000,
    merchant: "Restaurant B",
    rating: 4.8,
    image: "https://via.placeholder.com/300x225?text=Pizza"
  },
  {
    id: "3",
    name: "Sample Rice Dish",
    category: "Rice Dishes",
    description: "Tasty rice with sauce",
    price: 3500,
    merchant: "Restaurant C",
    rating: 4.3,
    image: "https://via.placeholder.com/300x225?text=Rice"
  },
  {
    id: "4",
    name: "Sample Seafood",
    category: "Seafood",
    description: "Fresh grilled fish",
    price: 7500,
    merchant: "Restaurant A",
    rating: 4.7,
    image: "https://via.placeholder.com/300x225?text=Seafood"
  }
];

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Search Header */}
      <header className="sticky top-20 z-30 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          {/* Search Input */}
          <div className="relative mb-4">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search for food, restaurants, cuisines..."
              className="w-full h-12 pl-12 pr-12 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === "All"
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">{sampleProducts.length}</span> results found
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <Link
              key={product.id}
              to={`/item/${product.id}`}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {product.description}
                  </p>

                  {/* Merchant Info */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{product.merchant}</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      {product.rating}
                    </span>
                  </div>

                  {/* Price & Time */}
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-foreground">XAF {product.price.toLocaleString()}</span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      25 min
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
