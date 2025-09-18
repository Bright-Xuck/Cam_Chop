import { useCart } from "../context/CartStore";

export default function CartItems({ openCart, setOpenCart }) {
  const { cart, updateQuantity } = useCart();

  return (
    <main
      className={`fixed right-0 top-16 h-[calc(100vh-4rem)] bg-neutral-600 w-full sm:w-[400px] transform transition-transform duration-300 ease-in-out z-50
        ${openCart ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <h1 className="text-xl font-semibold text-white py-4 px-6 border-b border-neutral-500">
          Shopping Cart
        </h1>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          {cart.length > 0 ? (
            cart.map((item) => (
              <section key={item.id} className="mb-3">
                <div className="grid grid-cols-4 items-center bg-neutral-500 rounded-lg p-3 gap-2">
                  {/* Product Image */}
                  <div className="flex justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </div>

                  {/* Name */}
                  <h1 className="text-sm font-medium truncate">{item.name}</h1>

                  {/* Price */}
                  <p className="text-sm">XAF {item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-amber-100 text-black rounded-full w-6 h-6 flex items-center justify-center hover:bg-amber-200"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-amber-100 text-black rounded-full w-6 h-6 flex items-center justify-center hover:bg-amber-200"
                    >
                      +
                    </button>
                  </div>
                </div>
              </section>
            ))
          ) : (
            <p className="text-center text-gray-300 mt-6">Your cart is empty</p>
          )}
        </div>

        {/* Footer */}
        <div className="grid grid-cols-2 border-t border-neutral-500">
          <button
            onClick={() => setOpenCart(false)}
            className="py-3 text-white hover:bg-neutral-700 transition"
          >
            Close
          </button>
          <button className="py-3 bg-red-500 text-white hover:bg-red-600 transition">
            Check Out
          </button>
        </div>
      </div>
    </main>
  );
}
