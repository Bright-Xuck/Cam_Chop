import { useState } from "react";
import { Plus, Search, Grid3X3, List, Edit2, Trash2 } from "lucide-react";
import Button from "../../Components/ui/Button";

const sampleItems = [
  { id: 1, name: "Jollof Rice", price: 2500, category: "Main", inStock: true },
  { id: 2, name: "Fried Plantain", price: 500, category: "Sides", inStock: true },
  { id: 3, name: "Grilled Chicken", price: 3500, category: "Main", inStock: true },
];

const categories = [
  { id: "all", name: "All Items" },
  { id: "main", name: "Main" },
  { id: "sides", name: "Sides" },
  { id: "drinks", name: "Drinks" },
];

export default function CatalogManager() {
  const [viewMode, setViewMode] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = sampleItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Menu Manager</h1>
              <p className="text-sm text-muted-foreground">Manage your menu items</p>
            </div>
            <Button onClick={() => setIsModalOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </div>

          {/* Search and View Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-secondary border-0 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
              <button onClick={() => setViewMode("list")} className={`p-2 rounded-md ${viewMode === "list" ? "bg-card" : ""}`}>
                <List className="w-4 h-4" />
              </button>
              <button onClick={() => setViewMode("grid")} className={`p-2 rounded-md ${viewMode === "grid" ? "bg-card" : ""}`}>
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
          <aside className="space-y-2">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase mb-4">Categories</h2>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-primary/10 border-2 border-primary text-primary font-medium"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </aside>

          {/* Items Grid/List */}
          <div className="lg:col-span-3">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item) => (
                  <div key={item.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="h-32 bg-secondary rounded-lg mb-3 flex items-center justify-center text-muted-foreground">Image</div>
                    <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-foreground">XAF {item.price.toLocaleString()}</p>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-secondary rounded-lg transition-colors" onClick={() => console.log("edit")}>
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-error" onClick={() => console.log("delete")}>
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {filteredItems.map((item) => (
                  <div key={item.id} className="bg-card border border-border rounded-lg p-4 flex items-center justify-between hover:border-primary/50 transition-colors">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex-shrink-0 flex items-center justify-center text-muted-foreground">Img</div>
                    <div className="flex-1 ml-4">
                      <h3 className="font-medium text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                    </div>
                    <p className="font-bold text-foreground whitespace-nowrap mr-6">XAF {item.price.toLocaleString()}</p>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-secondary rounded-lg transition-colors" onClick={() => console.log("edit")}>
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-error" onClick={() => console.log("delete")}>
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Simple Add Item Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card rounded-lg p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-foreground mb-4">Add Menu Item</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Item Name</label>
                <input type="text" placeholder="e.g., Grilled Chicken" className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Price (XAF)</label>
                <input type="number" placeholder="e.g., 5000" className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Category</label>
                <select className="w-full px-3 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Main</option>
                  <option>Sides</option>
                  <option>Drinks</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-4 py-2 bg-secondary border border-border rounded-lg text-foreground hover:bg-secondary/80 transition-colors">
                  Cancel
                </button>
                <button type="submit" className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
