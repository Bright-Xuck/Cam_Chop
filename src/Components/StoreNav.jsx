import { Bell, Menu, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartStore";

export default function StoreNav() {
  const { getTotalItems } = useCart();
  
  const totalItems = getTotalItems();
  return (
    <nav className="grid grid-cols-3 h-16 border-b border-b-neutral-200 px-4 fixed top-0 w-full bg-white z-50">
      <div className="flex items-center gap-6">
        <Menu className="w-6 h-6 cursor-pointer" />
        <div className="flex items-center gap-2">
          <img src="photos/logo.png" alt="logo" className="h-12" />
          <h1 className="font-bold text-lg">CamChop</h1>
        </div>
      </div>
      <div className="col-start-3 flex items-center justify-end gap-4">
        <Bell className="p-1 bg-neutral-200 rounded-full w-8 h-8 hover:bg-neutral-300 cursor-pointer" />
        <div className="relative">
          <ShoppingCart className="p-1 bg-red-500 text-white rounded-full w-8 h-8 hover:bg-red-600 cursor-pointer" />
          <span className="absolute top-[24px] border border-neutral-400 rounded-[50%] px-1 -left-1 text-white bg-neutral-500">
            {totalItems}
          </span>
        </div>
        <p className="font-medium px-3 py-1 rounded-lg hover:bg-neutral-200 cursor-pointer">
          Sign In
        </p>
        <p className="bg-neutral-600 text-white px-3 py-1 rounded-lg font-medium cursor-pointer hover:bg-neutral-700">
          Sign Up
        </p>
      </div>
    </nav>
  );
}
