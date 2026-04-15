import { forwardRef } from "react";

const MenuItemForm = forwardRef(function MenuItemForm({ menuid }, ref) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Menu item submit (placeholder)", menuid);
  };

  return (
    <div className="py-12 px-4">
      <form ref={ref} onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-card border border-border rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Name</label>
          <input type="text" placeholder="Item name" className="w-full px-3 py-2 border border-border rounded-lg bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Description</label>
          <textarea placeholder="Item description" rows="3" className="w-full px-3 py-2 border border-border rounded-lg bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Price (XAF)</label>
            <input type="number" placeholder="Price" className="w-full px-3 py-2 border border-border rounded-lg bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Status</label>
            <select className="w-full px-3 py-2 border border-border rounded-lg bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option>In Stock</option>
              <option>Out of Stock</option>
              <option>Draft</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Category</label>
          <input type="text" placeholder="Category" className="w-full px-3 py-2 border border-border rounded-lg bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
        </div>

        <div className="flex gap-3 pt-4">
          <button type="button" className="flex-1 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-secondary transition-colors">Cancel</button>
          <button type="submit" className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">Save</button>
        </div>
      </form>
    </div>
  );
});

export default MenuItemForm;


