import { Pen, Trash2Icon } from "lucide-react";
import "/src/table.module.css";
import { useMerchant } from "../context/MerchantProvider";
import { Menus } from "../data/menu";

export default function ItemTable({ item, Setitem }) {
  const { currentUser } = useMerchant();

  const activemenus = Menus.filter(
    (eachmenu) => eachmenu.merchantId == currentUser.merchantId
  );

  function Delete(id) {
    Setitem(item.filter((product) => product.id !== id));
  }

  return (
    <div className="flex flex-col items-center justify-center h-auto w-full">
      {activemenus.map((menu) => {
        const menuItems = item.filter(
          (product) => product.menuid == menu.menuid
        );

        return (
          <div key={menu.id} className="w-4/5 my-6">
            <h2 className="text-lg font-semibold mb-2">{menu.name}</h2>
            <table className="block overflow-hidden table-auto border-collapse shadow-2xl rounded-2xl whitespace-nowrap w-full overflow-x-auto">
              <thead className="bg-gray-200 text-black">
                <tr>
                  <th className="p-3 text-left">Image</th>
                  <th className="p-3 text-left">Name</th>
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
          </div>
        );
      })}
    </div>
  );
}
