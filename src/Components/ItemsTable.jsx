import { Pen, Trash2Icon } from "lucide-react";
import "/src/table.module.css"
import { products } from "../data/productdata";
import { useMerchant } from "../context/MerchantProvider";
import { Menus } from "../data/menu";


export default function ItemTable() {
    const {currentUser} = useMerchant()
    
   const activemenu = Menus.find((eachmenu) => eachmenu.merchantId == currentUser.merchantId)
   const allmenu = activemenu.menuid
   console.log(allmenu)
   const items = products.filter((product) => (product.menuid == allmenu)
)
   console.log(items)
   return (
        <div className="flex flex-col items-center justify-center h-auto w-full">
            <table className="block overflow-hidden table-auto border-collapse shadow-2xl rounded-2xl whitespace-nowrap max-w-4/5 w-4/5 m-auto overflow-x-auto">
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
                    {items.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="p-3">
                                <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-12 h-12 object-cover rounded-lg"
                                />
                            </td>
                            <td className="p-3 font-medium">{item.name}</td>
                            <td className="p-3">${item.price}</td>
                            <td className="p-3">{item.category}</td>
                            <td className="p-3">
                                <span className={`rounded-2xl px-3 py-1 text-white text-sm ${
                                    item.status === 'available' || item.status === 'live' 
                                        ? 'bg-green-600' 
                                        : item.status === 'out_of_stock' 
                                        ? 'bg-red-600'
                                        : 'bg-gray-500'
                                }`}>
                                    {item.status === 'available' ? 'Live' : 
                                     item.status === 'out_of_stock' ? 'Out of Stock' : 
                                     item.status || 'Draft'}
                                </span>
                            </td>
                            <td className="p-3">
                                <span className="flex justify-around cursor-pointer">
                                    <Pen className="text-blue-500 hover:text-blue-700" size={18} />
                                    <Trash2Icon className="text-red-500 hover:text-red-700" size={18} />
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


