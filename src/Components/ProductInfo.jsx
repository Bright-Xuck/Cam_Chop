import { useParams } from "react-router";
import { products } from "../data/productdata";
import { merchants } from "../data/merchants";
import { Menus } from "../data/menu";
import StoreNav from "./StoreNav";
import { useState } from "react";
import { useCart } from "../context/CartStore";

export default function ProductInfo() {
  const params = useParams();
  const { id, name } = params;
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  function Subtract() {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  }

  function Add() {
    setCount((prev) => prev + 1);
  }

  function handleAddToCart() {
    addToCart(product, count);
    setCount(1); // Reset count after adding to cart
  }

  const product = products.find((product) => product.id == id);
  const merchant = merchants.find(
    (merchant) => merchant.merchantId == product.merchantId
  );
  const menu = Menus.find((menu) => menu.menuid == product.menuid);

  if (!product) {
    return <h1 className="p-6 text-xl">Product not found</h1>;
  }

  return (
    <>
      <StoreNav />
      <main className="mt-16">
        <h1 className="p-6 text-lg sm:text-xl">
          {merchant.name} / <span>{menu.name}</span> /{" "}
          <span>{product.name}</span>
        </h1>

        {/* Responsive Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-11/12 sm:w-5/6 mx-auto">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[500px] min-h-[300px] sm:max-h-[420px] max-sm:max-h-[350px] object-cover mx-auto"
            />
            <div className="text-center mt-2 text-sm sm:text-base">
              Product Gallery
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="text-left text-2xl sm:text-3xl font-bold text-red-500">
              {product.name}
            </h1>

            <article>
              <h3 className="text-center text-lg sm:text-xl underline mb-2">
                Description
              </h3>
              <p className="text-base sm:text-2xl text-neutral-700 ">
                {product.description}
              </p>
            </article>

            <h3 className="text-xl sm:text-2xl font-semibold text-black">
              XAF {product.price}
            </h3>

            <h3 className="text-base sm:text-lg">
              Categories:{" "}
              <span className="text-blue-800">{product.category}</span>
            </h3>

            <div className="flex flex-wrap gap-1 text-sm sm:text-base">
              <h3>Tags:</h3>
              <div className="flex flex-wrap text-red-600">
                {product.tags.map((tag, i) => (
                  <span key={i}>{tag}, </span>
                ))}
              </div>
            </div>

            <h4
              className={`max-w-30 w-fit text-center p-2 rounded-xl text-white text-sm sm:text-base ${
                product.status == "Draft" ? "bg-red-600" : "bg-green-600"
              }`}
            >
              {product.status == "Draft" ? "Out of Stock" : product.status}
            </h4>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              {/* Quantity Selector */}
              <div className="grid grid-cols-4 w-32 sm:w-40 h-10 border justify-center divide-x">
                <button
                  onClick={Subtract}
                  className={`${
                    count == 1
                      ? "hover:cursor-not-allowed"
                      : "hover:cursor-pointer"
                  }`}
                >
                  <span
                    className={`${count == 1 ? "opacity-30" : "opacity-100"}`}
                  >
                    -
                  </span>
                </button>
                <span className="col-span-2 justify-center flex items-center">
                  {count}
                </span>
                <button
                  onClick={Add}
                  className="hover:bg-neutral-300 hover:cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <div>
                <button
                  className="h-10 bg-red-500 text-white px-4 sm:px-6 rounded hover:bg-red-600 transition-colors font-medium w-full sm:w-auto"
                  onClick={handleAddToCart}
                  disabled={product.status === "Draft"}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
