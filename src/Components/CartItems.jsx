import { useCart } from "../context/CartStore";
import { useNavigate } from "react-router";

export default function CartItems({ openCart, setOpenCart }) {
  const { cart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();
  
  const formatPrice = (price) => `XAF ${price.toLocaleString()}`;
  const total = getTotalPrice();

  const handleCheckout = () => {
    setOpenCart(false);
    navigate("/checkout");
  };

  return (
    <aside
      className={`fixed right-0 top-16 h-[calc(100vh-4rem)] bg-foreground w-full sm:w-[400px] transform transition-transform duration-300 ease-in-out z-50
        ${openCart ? "translate-x-0" : "translate-x-full"}`}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between py-4 px-6 border-b border-muted/20">
          <h2 className="text-xl font-semibold text-card">
            Shopping Cart
          </h2>
          <span className="text-sm text-muted">
            {cart.length} {cart.length === 1 ? "item" : "items"}
          </span>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-4 py-3">
          {cart.length > 0 ? (
            <ul className="space-y-3" role="list">
              {cart.map((item) => (
                <li key={item.id}>
                  <article className="flex items-center gap-3 bg-muted/20 rounded-lg p-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-card truncate">{item.name}</h3>
                      <p className="text-sm text-muted">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center bg-card text-foreground rounded-full hover:bg-secondary transition-colors"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-card text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center bg-card text-foreground rounded-full hover:bg-secondary transition-colors"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-muted mb-2">Your cart is empty</p>
              <p className="text-sm text-muted/70">Add some items to get started</p>
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-muted/20">
            <div className="flex justify-between mb-4">
              <span className="text-muted">Subtotal</span>
              <span className="font-semibold text-card">{formatPrice(total)}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setOpenCart(false)}
                className="py-3 text-card border border-muted/30 rounded-lg hover:bg-muted/10 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={handleCheckout}
                className="py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
        {cart.length === 0 && (
          <div className="p-4 border-t border-muted/20">
            <button
              onClick={() => setOpenCart(false)}
              className="w-full py-3 text-card border border-muted/30 rounded-lg hover:bg-muted/10 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
