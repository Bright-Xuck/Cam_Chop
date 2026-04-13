import { useState, useMemo, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router";
import { Search as SearchIcon, Filter, X, Star, Clock, MapPin, SlidersHorizontal } from "lucide-react";
import { products } from "../data/productdata";
import { merchants } from "../data/merchants";
import Button from "../Components/ui/Button";
import Badge from "../Components/ui/Badge";
import { ProductCardSkeleton } from "../Components/ui/Skeleton";

const categories = ["All", "Burgers", "Pizza", "Rice Dishes", "African Dishes", "Seafood", "Wraps", "Pasta", "Breakfast", "Sides", "Soups"];

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  // Simulate search loading
  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [query, activeCategory, sortBy]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Update URL params when query changes
  useEffect(() => {
    if (query) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  }, [query, setSearchParams]);

  // Filter and sort results
  const results = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (query.trim()) {
      const searchTerms = query.toLowerCase().split(" ");
      filtered = filtered.filter(product => {
        const searchable = `${product.name} ${product.description} ${product.category} ${product.tags.join(" ")}`.toLowerCase();
        return searchTerms.every(term => searchable.includes(term));
      });
    }

    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Sort results
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // relevance - keep original order
        break;
    }

    return filtered;
  }, [query, activeCategory, sortBy]);

  // Get merchant info for a product
  const getMerchant = (merchantId) => {
    return merchants.find(m => m.merchantId === merchantId);
  };

  const formatPrice = (price) => `XAF ${price.toLocaleString()}`;

  const handleClearSearch = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Search Header */}
      <header className="sticky top-20 z-30 bg-background border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          {/* Search Input */}
          <div className="relative mb-4">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for food, restaurants, cuisines..."
              className="w-full h-12 pl-12 pr-12 rounded-xl border border-border bg-background
                text-foreground placeholder:text-muted text-lg
                focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label="Search"
            />
            {query && (
              <button
                onClick={handleClearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary rounded-full"
                aria-label="Clear search"
              >
                <X className="w-5 h-5 text-muted" />
              </button>
            )}
          </div>

          {/* Categories & Filters */}
          <div className="flex items-center gap-3">
            {/* Category Pills */}
            <div className="flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                      ${activeCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors flex-shrink-0
                ${showFilters ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-secondary"}`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>

          {/* Extended Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm text-muted-foreground">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="h-9 px-3 rounded-lg border border-border bg-background text-foreground text-sm
                    focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            {isLoading ? (
              "Searching..."
            ) : query || activeCategory !== "All" ? (
              <>
                <span className="font-semibold text-foreground">{results.length}</span>
                {" "}result{results.length !== 1 ? "s" : ""} found
                {query && <span> for &quot;{query}&quot;</span>}
              </>
            ) : (
              "Browse all items"
            )}
          </p>
        </div>

        {/* Results Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => <ProductCardSkeleton key={i} />)}
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-12">
            <SearchIcon className="w-12 h-12 mx-auto text-muted mb-4" />
            <h2 className="text-lg font-semibold text-foreground mb-2">No results found</h2>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or browse categories
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Burgers", "Pizza", "Rice Dishes"].map(cat => (
                <Button 
                  key={cat} 
                  variant="outline" 
                  size="sm"
                  onClick={() => { setQuery(""); setActiveCategory(cat); }}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="list">
            {results.map((product) => {
              const merchant = getMerchant(product.merchantId);
              return (
                <Link 
                  key={product.id}
                  to={`/merchantstore/item/${product.id}`}
                  className="group"
                  role="listitem"
                >
                  <article className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.status !== "In Stock" && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="error">{product.status}</Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <Badge variant="outline" className="flex-shrink-0">
                          {product.category}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {product.description}
                      </p>

                      {/* Merchant Info */}
                      {merchant && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="truncate">{merchant.name}</span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-warning text-warning" />
                            {merchant.rating}
                          </span>
                        </div>
                      )}

                      {/* Price & Time */}
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-foreground">
                          {formatPrice(product.price)}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          25-35 min
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
