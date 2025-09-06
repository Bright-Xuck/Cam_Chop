import { Bell, Menu, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartStore";
import { useState } from "react";
import CartItems from "./CartItems";

export default function StoreNav() {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [openCart, setOpenCart] = useState(false);

  return (
    <nav className="grid grid-cols-3 h-16 border-b border-b-neutral-200 px-2 sm:px-4 fixed top-0 w-full bg-white z-50">
      {/* Left Section */}
      <div className="flex items-center gap-3 sm:gap-6">
        <Menu className="w-6 h-6 cursor-pointer" />
        <div className="flex items-center gap-2">
          <img src="photos/logo.png" alt="logo" className="h-10 sm:h-12" />
          <h1 className="font-bold text-lg hidden sm:block">CamChop</h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="col-start-3 flex items-center justify-end gap-2 sm:gap-4">
        <Bell className="p-1 bg-neutral-200 rounded-full w-8 h-8 hover:bg-neutral-300 cursor-pointer shrink-0" />

        <div className="relative" onClick={() => setOpenCart(!openCart)}>
          <ShoppingCart className="p-1 bg-red-500 text-white rounded-full w-8 h-8 hover:bg-red-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 text-xs border border-neutral-400 rounded-full px-1 text-white bg-neutral-500">
            {totalItems}
          </span>
        </div>

        {/* Auth Buttons */}
        <p className="hidden sm:block font-medium px-3 py-1 rounded-lg hover:bg-neutral-200 cursor-pointer">
          Sign In
        </p>
        <p className="hidden sm:block bg-neutral-600 text-white px-3 py-1 rounded-lg font-medium cursor-pointer hover:bg-neutral-700">
          Sign Up
        </p>
      </div>
      <CartItems openCart={openCart} setOpenCart={setOpenCart} /> 
    </nav>
  );
}
