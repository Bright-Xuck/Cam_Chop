import { Pen, Trash2 } from "lucide-react";
import "/src/table.module.css";
import { useState, useRef } from "react";
import MenuItemForm from "./MenuItemForm";

export default function ItemTable() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const form = useRef(null);

  // Lightweight static placeholders for presentation
  const sampleMenus = [
    {
      menuid: "menu-1",
      name: "Main Menu",
      items: [
        {
          id: 1,
          name: "Jollof Rice",
          price: 2500,
          category: "Main",
          status: "In Stock",
          image: "/photos/productimg/placeholder.jpg"
        },
        {
          id: 2,
          name: "Fried Plantain",
          price: 500,
          category: "Sides",
          status: "In Stock",
          image: "/photos/productimg/placeholder.jpg"
        }
      ]
    },
    {
      menuid: "menu-2",
      name: "Drinks",
      items: [
        {
          id: 3,
          name: "Ginger Drink",
          price: 700,
          category: "Beverage",
          status: "In Stock",
          image: "/photos/productimg/placeholder.jpg"
        }
      ]
    }
  ];

  function Edititem(item) {
    console.log("Edit item (placeholder)", item);
    setSelectedMenu(item.menuid);
    form.current?.scrollIntoView({ behavior: "smooth" });
  }

  function Delete(id) {
    console.log("Delete item (placeholder)", id);
  }

  return (
    <div className="grid h-auto w-full">
      {sampleMenus.map((menu, index) => {
        return (
          <div key={menu.menuid} className="w-5/6 m-auto my-6">
            <h2 className="text-lg font-semibold mb-2">{menu.name}</h2>
            <table className="block overflow-hidden table-auto border-collapse shadow-2xl rounded-2xl whitespace-nowrap w-full overflow-x-auto">
              <thead className="bg-gray-200 text-black">
                <tr>
                  <th className="p-3 text-left">Image</th>
                  <th className="p-3 text-left w-full">Name</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {menu.items.map((it) => (
                  <tr key={it.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-3">
                      <img src={it.image} alt={it.name} className="w-12 h-12 object-cover rounded-lg" />
                    </td>
                    <td className="p-3 font-medium">{it.name}</td>
                    <td className="p-3">XAF {it.price}</td>
                    <td className="p-3">{it.category}</td>
                    <td className="p-3">
                      <span className="rounded-2xl px-3 py-1 text-white text-sm bg-green-600">{it.status}</span>
                    </td>
                    <td className="p-3">
                      <span className="flex justify-around cursor-pointer">
                        <Pen className="text-blue-500 hover:text-blue-700" size={18} onClick={() => Edititem({ ...it, menuid: menu.menuid })} />
                        <Trash2 className="text-red-500 hover:text-red-700" size={18} onClick={() => Delete(it.id)} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={() => {
                setSelectedMenu(menu.menuid);
                form.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-4 bg-primary text-white px-4 py-2 rounded-md"
            >
              Add
            </button>
          </div>
        );
      })}

      {selectedMenu && <MenuItemForm menuid={selectedMenu} ref={form} />}
    </div>
  );
}
