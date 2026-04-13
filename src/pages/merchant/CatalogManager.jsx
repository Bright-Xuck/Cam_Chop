import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Grid3X3,
  List,
  MoreVertical,
  Edit2,
  Trash2,
  Copy,
  Eye,
  EyeOff,
  ImageIcon,
  FolderOpen,
  ChevronRight,
  GripVertical
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";
import Badge from "../../Components/ui/Badge";
import Input from "../../Components/ui/Input";
import Toggle from "../../Components/ui/Toggle";
import Modal from "../../Components/ui/Modal";
import Select from "../../Components/ui/Select";
import { products } from "../../data/productdata";
import { menuCategories } from "../../data/merchantOrders";
import { useMerchant } from "../../context/MerchantProvider";

// Skeleton for menu items
function MenuItemSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg animate-pulse">
      <div className="w-16 h-16 bg-secondary rounded-lg" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-32 bg-secondary rounded" />
        <div className="h-3 w-48 bg-secondary rounded" />
      </div>
      <div className="h-6 w-20 bg-secondary rounded" />
    </div>
  );
}

// Category Card
function CategoryCard({ category, onSelect, isSelected }) {
  return (
    <button
      onClick={() => onSelect(category.id)}
      className={`
        w-full flex items-center justify-between p-4 rounded-lg text-left transition-all
        ${isSelected
          ? "bg-primary/10 border-2 border-primary"
          : "bg-card border border-border hover:border-primary/50"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <FolderOpen className={`w-5 h-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
        <div>
          <p className="font-medium text-foreground">{category.name}</p>
          <p className="text-sm text-muted-foreground">{category.itemCount} items</p>
        </div>
      </div>
      <ChevronRight className={`w-5 h-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
    </button>
  );
}

// Menu Item Row
function MenuItemRow({ item, onEdit, onToggleStock, viewMode }) {
  const [showActions, setShowActions] = useState(false);

  if (viewMode === "grid") {
    return (
      <Card className="overflow-hidden group">
        <div className="relative aspect-video bg-secondary">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="hidden absolute inset-0 items-center justify-center bg-secondary">
            <ImageIcon className="w-8 h-8 text-muted-foreground" />
          </div>
          {!item.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="error">Out of Stock</Badge>
            </div>
          )}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(item)}
              className="p-2 bg-card rounded-lg shadow-md hover:bg-secondary transition-colors"
            >
              <Edit2 className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-foreground line-clamp-1">{item.name}</h3>
            <Toggle
              enabled={item.inStock}
              onToggle={() => onToggleStock(item.id)}
              size="sm"
            />
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.short}</p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-foreground">XAF {item.price.toLocaleString()}</p>
            <Badge variant="secondary">{item.category || "Uncategorized"}</Badge>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div
      className={`
        flex items-center gap-4 p-4 bg-card border border-border rounded-lg
        hover:border-primary/50 transition-all group
        ${!item.inStock ? "opacity-60" : ""}
      `}
    >
      <button className="cursor-grab active:cursor-grabbing p-1 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
        <GripVertical className="w-4 h-4" />
      </button>

      <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-foreground truncate">{item.name}</h3>
          {!item.inStock && <Badge variant="error">Out of Stock</Badge>}
        </div>
        <p className="text-sm text-muted-foreground truncate">{item.short}</p>
      </div>

      <div className="flex items-center gap-6">
        <p className="font-semibold text-foreground whitespace-nowrap">
          XAF {item.price.toLocaleString()}
        </p>

        <Toggle
          enabled={item.inStock}
          onToggle={() => onToggleStock(item.id)}
          size="sm"
        />

        <div className="relative">
          <button
            onClick={() => setShowActions(!showActions)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <MoreVertical className="w-4 h-4 text-muted-foreground" />
          </button>
          {showActions && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setShowActions(false)} />
              <div className="absolute right-0 top-full mt-1 w-40 bg-card border border-border rounded-lg shadow-lg z-20 py-1">
                <button
                  onClick={() => { onEdit(item); setShowActions(false); }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-secondary"
                >
                  <Edit2 className="w-4 h-4" /> Edit Item
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-secondary">
                  <Copy className="w-4 h-4" /> Duplicate
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-error hover:bg-secondary">
                  <Trash2 className="w-4 h-4" /> Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Add/Edit Item Modal
function ItemModal({ isOpen, onClose, item, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
    inStock: true
  });

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || "",
        price: item.price?.toString() || "",
        category: item.category || "",
        description: item.short || "",
        image: item.image || "",
        inStock: item.inStock !== false
      });
    } else {
      setFormData({
        name: "",
        price: "",
        category: "",
        description: "",
        image: "",
        inStock: true
      });
    }
  }, [item, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      price: parseInt(formData.price),
      id: item?.id || `item-${Date.now()}`
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={item ? "Edit Menu Item" : "Add Menu Item"} size="lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Item Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Grilled Chicken"
            required
          />
          <Input
            label="Price (XAF)"
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="e.g., 5990"
            required
          />
        </div>

        <Select
          label="Category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          options={menuCategories.map((c) => ({ value: c.name, label: c.name }))}
          placeholder="Select a category"
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe your menu item..."
            rows={3}
            className="w-full px-4 py-2.5 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </div>

        <Input
          label="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="https://example.com/image.jpg"
        />

        <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
          <div>
            <p className="font-medium text-foreground">Availability</p>
            <p className="text-sm text-muted-foreground">Toggle to mark item as out of stock</p>
          </div>
          <Toggle
            enabled={formData.inStock}
            onToggle={() => setFormData({ ...formData, inStock: !formData.inStock })}
          />
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            {item ? "Save Changes" : "Add Item"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

// Main Catalog Manager
export default function CatalogManager() {
  const { currentUser } = useMerchant();
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState(menuCategories);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("list");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Load items
  useEffect(() => {
    const timer = setTimeout(() => {
      // Add inStock property to products
      setItems(products.map((p) => ({ ...p, inStock: Math.random() > 0.2 })));
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter items
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Optimistic toggle stock
  const handleToggleStock = (itemId) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, inStock: !item.inStock } : item
      )
    );
  };

  // Handle edit
  const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  // Handle save
  const handleSave = (itemData) => {
    if (editingItem) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editingItem.id ? { ...item, ...itemData, short: itemData.description } : item
        )
      );
    } else {
      setItems((prev) => [{ ...itemData, short: itemData.description }, ...prev]);
    }
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Menu Manager</h1>
              <p className="text-sm text-muted-foreground">
                Manage your menu items and categories
              </p>
            </div>
            <Button onClick={() => { setEditingItem(null); setIsModalOpen(true); }}>
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </div>

          {/* Search and Filters */}
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-secondary border-0 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors ${viewMode === "list" ? "bg-card shadow-sm" : "hover:bg-card/50"}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors ${viewMode === "grid" ? "bg-card shadow-sm" : "hover:bg-card/50"}`}
                aria-label="Grid view"
              >
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
          <aside className="space-y-3">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              Categories
            </h2>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`
                w-full flex items-center justify-between p-4 rounded-lg text-left transition-all
                ${selectedCategory === "all"
                  ? "bg-primary/10 border-2 border-primary"
                  : "bg-card border border-border hover:border-primary/50"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <Grid3X3 className={`w-5 h-5 ${selectedCategory === "all" ? "text-primary" : "text-muted-foreground"}`} />
                <div>
                  <p className="font-medium text-foreground">All Items</p>
                  <p className="text-sm text-muted-foreground">{items.length} items</p>
                </div>
              </div>
            </button>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onSelect={setSelectedCategory}
                isSelected={selectedCategory === category.id}
              />
            ))}
            <Button variant="outline" className="w-full mt-4">
              <Plus className="w-4 h-4 mr-2" />
              Add Category
            </Button>
          </aside>

          {/* Items List/Grid */}
          <section className="lg:col-span-3">
            {isLoading ? (
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <MenuItemSkeleton key={i} />
                ))}
              </div>
            ) : filteredItems.length === 0 ? (
              <Card className="p-12 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FolderOpen className="w-8 h-8 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">No items found</h2>
                <p className="text-muted-foreground mb-4">
                  {searchQuery
                    ? "Try adjusting your search terms"
                    : "Add your first menu item to get started"}
                </p>
                <Button onClick={() => { setEditingItem(null); setIsModalOpen(true); }}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Item
                </Button>
              </Card>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredItems.map((item) => (
                  <MenuItemRow
                    key={item.id}
                    item={item}
                    viewMode="grid"
                    onEdit={handleEdit}
                    onToggleStock={handleToggleStock}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {filteredItems.map((item) => (
                  <MenuItemRow
                    key={item.id}
                    item={item}
                    viewMode="list"
                    onEdit={handleEdit}
                    onToggleStock={handleToggleStock}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Add/Edit Modal */}
      <ItemModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setEditingItem(null); }}
        item={editingItem}
        onSave={handleSave}
      />
    </div>
  );
}
