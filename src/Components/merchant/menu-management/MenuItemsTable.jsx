import { Pen, Trash2 } from "lucide-react";

const sampleMenus = [
  {
    name: "Main Menu",
    items: [
      { id: 1, name: "Jollof Rice", price: 2500, category: "Main", status: "In Stock" },
      { id: 2, name: "Fried Plantain", price: 500, category: "Sides", status: "In Stock" }
    ]
  },
  {
    name: "Drinks",
    items: [
      { id: 3, name: "Ginger Drink", price: 700, category: "Beverage", status: "In Stock" }
    ]
  }
];

export default function MenuItemsTable() {
  return (
    <div className="space-y-8">
      {sampleMenus.map((menu) => (
        <div key={menu.name} className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">{menu.name}</h2>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
              Add Item
            </button>
          </div>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Price</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Category</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {menu.items.map((item) => (
                  <tr key={item.id} className="border-b border-border hover:bg-secondary/30 transition-colors">
                    <td className="px-4 py-3 text-sm text-foreground font-medium">{item.name}</td>
                    <td className="px-4 py-3 text-sm text-foreground">XAF {item.price.toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">{item.category}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="px-2 py-1 bg-success/20 text-success rounded-full text-sm font-medium">{item.status}</span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex gap-2">
                        <button className="p-1 hover:bg-secondary rounded transition-colors">
                          <Pen className="w-4 h-4 text-primary" />
                        </button>
                        <button className="p-1 hover:bg-secondary rounded transition-colors">
                          <Trash2 className="w-4 h-4 text-error" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
