import { useParams } from "react-router";
import StorePageNavigation from "../../shared/navigation/StorePageNavigation";
import { useState } from "react";
import { useCart } from "../../../context/CartStore";

export default function ProductDetailPage() {
  const params = useParams();
  const { id } = params || {};
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  function Subtract() {
    if (count > 1) setCount((p) => p - 1);
  }
  function Add() {
    setCount((p) => p + 1);
  }

  function handleAddToCart() {
    if (typeof addToCart === "function") {
      addToCart(product, count);
    } else {
      console.log("addToCart placeholder", product, count);
    }
    setCount(1);
  }

  const merchant = { name: "Sample Merchant" };
  const menu = { name: "Main Menu" };
  const product = {
    id: id || "1",
    name: "Sample Dish",
    description: "A delicious sample dish used as a placeholder.",
    price: "4500",
    category: "Main",
    tags: ["popular", "chef's choice"],
    status: "In Stock",
    image: "",
  };

  return (
    <>
      <StorePageNavigation />
      <main className="mt-16">
        <h1 className="p-6 text-lg sm:text-xl">{merchant.name} / <span>{menu.name}</span> / <span>{product.name}</span></h1>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-11/12 sm:w-5/6 mx-auto">
          <div>
            <div className="w-full max-w-[500px] min-h-[300px] sm:max-h-[420px] max-sm:max-h-[350px] bg-gray-100 flex items-center justify-center mx-auto">
              {product.image ? (
                <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
              ) : (
                <div className="text-neutral-500">No image</div>
              )}
            </div>
            <div className="text-center mt-2 text-sm sm:text-base">Product Gallery</div>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-left text-2xl sm:text-3xl font-bold text-red-500">{product.name}</h1>

            <article>
              <h3 className="text-center text-lg sm:text-xl underline mb-2">Description</h3>
              <p className="text-base sm:text-2xl text-neutral-700">{product.description}</p>
            </article>

            <h3 className="text-xl sm:text-2xl font-semibold text-black">XAF {product.price}</h3>

            <h3 className="text-base sm:text-lg">Categories: <span className="text-blue-800">{product.category}</span></h3>

            <div className="flex flex-wrap gap-1 text-sm sm:text-base">
              <h3>Tags:</h3>
              <div className="flex flex-wrap text-red-600">{product.tags.map((tag, i) => <span key={i}>{tag}{i < product.tags.length - 1 ? ', ' : ''}</span>)}</div>
            </div>

            <h4 className={`max-w-30 w-fit text-center p-2 rounded-xl text-white text-sm sm:text-base ${product.status === "Draft" ? "bg-red-600" : "bg-green-600"}`}>{product.status === "Draft" ? "Out of Stock" : product.status}</h4>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="grid grid-cols-4 w-32 sm:w-40 h-10 border justify-center divide-x">
                <button onClick={Subtract} className={`${count === 1 ? "hover:cursor-not-allowed" : "hover:cursor-pointer"}`}><span className={`${count === 1 ? "opacity-30" : "opacity-100"}`}>-</span></button>
                <span className="col-span-2 justify-center flex items-center">{count}</span>
                <button onClick={Add} className="hover:bg-neutral-300 hover:cursor-pointer">+</button>
              </div>

              <div>
                <button className="h-10 bg-red-500 text-white px-4 sm:px-6 rounded hover:bg-red-600 transition-colors font-medium w-full sm:w-auto" onClick={handleAddToCart} disabled={product.status === "Draft"}>Add to Cart</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
