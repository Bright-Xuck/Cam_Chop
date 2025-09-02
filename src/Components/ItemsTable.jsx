import { Pen, Trash2Icon } from "lucide-react";
import "/src/table.module.css";
import { useMerchant } from "../context/MerchantProvider";
import { Menus } from "../data/menu";
import { useState, useRef } from "react";
import Additem from "./Additem";

export default function ItemTable({ item, Setitem, setEdititem, edititem }) {
  const { currentUser } = useMerchant();
  const [selectedMenu, setSelectedMenu] = useState(null);
  const form = useRef(null);

  const activemenus = Menus.filter(
    (eachmenu) => eachmenu.merchantId == currentUser.merchantId
  );

  function Delete(id) {
    Setitem(item.filter((product) => product.id !== id));
  }

  function Edititem(edititem) {
    setEdititem(edititem);
    if (!selectedMenu) {
      setSelectedMenu(edititem.menuid);
    }
    setTimeout(() => {
      form.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  function clearform(){
     const formEl = form.current; 
    if (!formEl) return; 
  formEl.querySelectorAll("input, textarea, select").forEach((el) => {
    if (el.type === "checkbox" || el.type === "radio") {
      el.checked = false;
    } else {
      el.value = "";
    }
  });
  }

  return (
    <div className="grid h-auto w-full">
      {activemenus.map((menu, index) => {
        const menuItems = item.filter(
          (product) => product.menuid == menu.menuid
        );

        return (
          <div key={index} className="w-5/6 m-auto my-6">
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
                {menuItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    </td>
                    <td className="p-3 font-medium">{item.name}</td>
                    <td className="p-3">XAF {item.price}</td>
                    <td className="p-3">{item.category}</td>
                    <td className="p-3">
                      <select
                        value={item.status}
                        onChange={(e) => {
                          const newStatus = e.target.value;
                          Setitem((prev) =>
                            prev.map((it) =>
                              it.id === item.id
                                ? { ...it, status: newStatus }
                                : it
                            )
                          );
                        }}
                        className={`rounded-2xl px-3 py-1 text-white text-sm
                          ${
                            item.status === "In Stock"
                              ? "bg-green-600"
                              : item.status === "Out of Stock"
                              ? "bg-red-600"
                              : "bg-gray-500"
                          }`}
                      >
                        <option value="In Stock">In Stock</option>
                        <option value="Out of Stock">Out of Stock</option>
                        <option value="Draft">Draft</option>
                      </select>
                    </td>
                    <td className="p-3">
                      <span className="flex justify-around cursor-pointer">
                        <Pen
                          className="text-blue-500 hover:text-blue-700"
                          size={18}
                          onClick={() => Edititem(item)}
                        />
                        <Trash2Icon
                          className="text-red-500 hover:text-red-700"
                          size={18}
                          onClick={() => Delete(item.id)}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={() => {
                setEdititem(null);
                clearform()
                setSelectedMenu(menu.menuid);
                setTimeout(() => {
                  form.current?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              Add
            </button>
          </div>
        );
      })}
      {selectedMenu && (
        <Additem
          menuid={selectedMenu}
          item={item}
          edititem={edititem}
          Setitem={Setitem}
          ref={form}
        />
      )}
    </div>
  );
}
