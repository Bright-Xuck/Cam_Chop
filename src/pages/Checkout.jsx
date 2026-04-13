import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { 
  MapPin, CreditCard, Smartphone, Banknote, Clock, 
  ChevronLeft, Check, Minus, Plus, Trash2, ShoppingBag,
  AlertCircle
} from "lucide-react";
import { useCart } from "../context/CartStore";
import { useAuth } from "../context/AuthContext";
import Button from "../Components/ui/Button";
import Input from "../Components/ui/Input";
import toast, { Toaster } from "react-hot-toast";

const DELIVERY_FEE = 1500;
const SERVICE_FEE = 200;

const paymentMethods = [
  { id: "momo", name: "Mobile Money", icon: Smartphone, description: "MTN, Orange Money" },
  { id: "card", name: "Card Payment", icon: CreditCard, description: "Visa, Mastercard" },
  { id: "cash", name: "Cash on Delivery", icon: Banknote, description: "Pay when delivered" }
];

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();
  const { currentUser, isAuthenticated } = useAuth();
  
  const [step, setStep] = useState(1); // 1: Review, 2: Delivery, 3: Payment, 4: Confirmation
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: "",
    apartment: "",
    instructions: "",
    phone: currentUser?.phone || ""
  });
  
  const [selectedPayment, setSelectedPayment] = useState("momo");
  const [errors, setErrors] = useState({});

  const subtotal = getTotalPrice();
  const total = subtotal + DELIVERY_FEE + SERVICE_FEE;

  const formatPrice = (price) => `XAF ${price.toLocaleString()}`;

  const validateDelivery = () => {
    const newErrors = {};
    if (!deliveryInfo.address.trim()) newErrors.address = "Delivery address is required";
    if (!deliveryInfo.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\+?[\d\s-]{9,}$/.test(deliveryInfo.phone)) newErrors.phone = "Invalid phone number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 2 && !validateDelivery()) return;
    setStep(step + 1);
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate mock order ID
    const newOrderId = `ORD-${Date.now().toString().slice(-6)}`;
    setOrderId(newOrderId);
    setOrderPlaced(true);
    setStep(4);
    clearCart();
    
    setIsProcessing(false);
  };

  // Empty cart state
  if (cart.length === 0 && !orderPlaced) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <ShoppingBag className="w-16 h-16 mx-auto text-muted mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">
            Add some delicious items to get started
          </p>
          <Button onClick={() => navigate("/shop")}>Browse Restaurants</Button>
        </div>
      </main>
    );
  }

  // Order confirmation
  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
            <Check className="w-8 h-8 text-success" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Order Placed!</h1>
          <p className="text-muted-foreground mb-2">
            Your order has been confirmed
          </p>
          <p className="font-mono text-lg text-foreground mb-6">{orderId}</p>
          <div className="bg-secondary/50 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm text-muted-foreground mb-1">Estimated delivery</p>
            <p className="font-semibold text-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" />
              30-45 minutes
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button onClick={() => navigate("/orders")}>Track Order</Button>
            <Button variant="outline" onClick={() => navigate("/shop")}>Continue Shopping</Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pb-24 lg:pb-8">
      <Toaster position="top-center" />
      
      {/* Header */}
      <header className="sticky top-20 z-30 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Go back"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold text-foreground">Checkout</h1>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center gap-2 mt-4" role="progressbar" aria-valuenow={step} aria-valuemax={3}>
            {["Review", "Delivery", "Payment"].map((label, idx) => (
              <div key={label} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium
                  ${step > idx + 1 ? "bg-success text-white" : 
                    step === idx + 1 ? "bg-primary text-white" : "bg-secondary text-muted-foreground"}`}
                >
                  {step > idx + 1 ? <Check className="w-4 h-4" /> : idx + 1}
                </div>
                <span className={`ml-2 text-sm hidden sm:block ${step === idx + 1 ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                  {label}
                </span>
                {idx < 2 && <div className={`flex-1 h-0.5 mx-2 ${step > idx + 1 ? "bg-success" : "bg-border"}`} />}
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-[1fr_360px] gap-6">
          {/* Main Content */}
          <div>
            {/* Step 1: Review Cart */}
            {step === 1 && (
              <section aria-labelledby="review-heading">
                <h2 id="review-heading" className="text-xl font-semibold text-foreground mb-4">
                  Review Your Order
                </h2>
                <div className="space-y-3">
                  {cart.map((item) => (
                    <article 
                      key={item.id}
                      className="flex gap-4 p-4 bg-card border border-border rounded-xl"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground truncate">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-border rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-secondary rounded-l-lg transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-secondary rounded-r-lg transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-error hover:bg-error/10 rounded-lg transition-colors"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="font-semibold text-foreground">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Step 2: Delivery Information */}
            {step === 2 && (
              <section aria-labelledby="delivery-heading">
                <h2 id="delivery-heading" className="text-xl font-semibold text-foreground mb-4">
                  Delivery Information
                </h2>
                <form className="space-y-4">
                  <Input
                    label="Delivery Address"
                    name="address"
                    value={deliveryInfo.address}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                    error={errors.address}
                    placeholder="123 Main Street, Buea"
                    required
                  />
                  <Input
                    label="Apartment, Suite, etc. (optional)"
                    name="apartment"
                    value={deliveryInfo.apartment}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, apartment: e.target.value })}
                    placeholder="Apt 4B, Floor 2"
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={deliveryInfo.phone}
                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                    error={errors.phone}
                    placeholder="+237 6XX XXX XXX"
                    required
                  />
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="instructions" className="text-sm font-medium text-foreground">
                      Delivery Instructions (optional)
                    </label>
                    <textarea
                      id="instructions"
                      name="instructions"
                      value={deliveryInfo.instructions}
                      onChange={(e) => setDeliveryInfo({ ...deliveryInfo, instructions: e.target.value })}
                      placeholder="Leave at door, ring bell, etc."
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background
                        text-foreground placeholder:text-muted resize-none
                        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </form>
              </section>
            )}

            {/* Step 3: Payment Method */}
            {step === 3 && (
              <section aria-labelledby="payment-heading">
                <h2 id="payment-heading" className="text-xl font-semibold text-foreground mb-4">
                  Payment Method
                </h2>
                <div className="space-y-3" role="radiogroup" aria-labelledby="payment-heading">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-4 bg-card border rounded-xl cursor-pointer transition-colors
                        ${selectedPayment === method.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                        className="sr-only"
                      />
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center
                        ${selectedPayment === method.id ? "bg-primary text-white" : "bg-secondary text-foreground"}`}
                      >
                        <method.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{method.name}</p>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                        ${selectedPayment === method.id ? "border-primary bg-primary" : "border-border"}`}
                      >
                        {selectedPayment === method.id && <Check className="w-3 h-3 text-white" />}
                      </div>
                    </label>
                  ))}
                </div>

                {!isAuthenticated && (
                  <div className="mt-4 p-4 bg-warning/10 border border-warning/20 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Sign in for faster checkout</p>
                      <p className="text-sm text-muted-foreground">
                        <Link to="/login" className="text-primary hover:underline">Sign in</Link> to save your delivery info and track orders
                      </p>
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <aside className="lg:sticky lg:top-48 h-fit">
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-semibold text-foreground mb-4">Order Summary</h3>
              
              <div className="space-y-2 pb-4 border-b border-border">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal ({cart.length} items)</span>
                  <span className="text-foreground">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="text-foreground">{formatPrice(DELIVERY_FEE)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Service Fee</span>
                  <span className="text-foreground">{formatPrice(SERVICE_FEE)}</span>
                </div>
              </div>

              <div className="flex justify-between py-4 font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-foreground">{formatPrice(total)}</span>
              </div>

              {step < 3 ? (
                <Button className="w-full" onClick={handleNextStep}>
                  Continue
                </Button>
              ) : (
                <Button 
                  className="w-full" 
                  onClick={handlePlaceOrder}
                  loading={isProcessing}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : `Place Order - ${formatPrice(total)}`}
                </Button>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 lg:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Total</span>
          <span className="font-semibold text-foreground">{formatPrice(total)}</span>
        </div>
        {step < 3 ? (
          <Button className="w-full" onClick={handleNextStep}>
            Continue
          </Button>
        ) : (
          <Button 
            className="w-full" 
            onClick={handlePlaceOrder}
            loading={isProcessing}
          >
            Place Order
          </Button>
        )}
      </div>
    </main>
  );
}
