import { useParams } from "react-router";
import { products } from "../data/productdata";
import { merchants } from "../data/merchants";
import { Menus } from "../data/menu";
import StoreNav from "./StoreNav";
import { useState } from "react";

export default function ProductInfo() {
  const params = useParams();
  const { id, name } = params;
  const [count, setCount] = useState(0)

  function Subtract(event){
    if(count > 0){
    setCount(prev => prev-1)
    }
  }
  function Add(){
    setCount(prev => prev+1)
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
        <h1 className="p-6 text-xl">
          {merchant.name} / <span>{menu.name}</span> /{" "}
          <span>{product.name}</span>
        </h1>
        <section className="grid grid-cols-2 w-5/6 mx-auto">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-[500px] min-h-[400px]"
            />
            <div>Product Gallery</div>
          </div>


          <div className="flex flex-col gap-6">
            <h1 className="text-left text-3xl font-bold text-red-500">{product.name}</h1>
            <article>
              <h3 className="text-center  text-xl underline mb-2">Description</h3>
              <p className="text-2xl text-neutral-700 ">{product.description}</p>
            </article>
            <h3 className="text-2xl font-semibold text-black">
              XAF {product.price}
            </h3>
            <h3>
              Categories:{" "}
              <span className="text-blue-800">{product.category}</span>
            </h3>
            <div className="flex">
              <h3>Tags:{" "} </h3>
              <div className="flex text-red-600">
                {product.tags.map((tag) => {
                  return ( tag+", ");
                })}
              </div>
            </div>
            <h4 className={`max-w-30 w-fit text-center p-2 rounded-xl text-white ${product.status == "Draft" ? "bg-red-600" : "bg-green-600"}`}>
              {product.status == "Draft" ? "Out of Stuck" : product.status}
            </h4>
            <div className="flex">
                <div className="grid grid-cols-4 w-40 h-10 border justify-center divide-x-1">
            <button onClick={Subtract} className={`${count == 0 ? "hover:cursor-not-allowed": "hover:cursor-pointer"}`}><span className={`${count == 0 ? "opacity-30" : "opacity-100" }`}>-</span></button>
            <span className="col-span-2 justify-center flex items-center">{count}</span>
            <button onClick={Add} className="hover:bg-neutral-300 hover:cursor-pointer">+</button>
            </div>
            <div>
                <button className="h-10 bg-red-500 px-3 ml-10 hover:bg-red-800">Add to Cart</button>
            </div>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}
