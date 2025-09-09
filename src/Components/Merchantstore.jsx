import {MapPin, Star } from "lucide-react";
import { products } from "../data/productdata";
import { useParams } from "react-router";
import { merchants } from "../data/merchants";
import { Menus } from "../data/menu";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import Footer from "./footer";
import StoreNav from "./StoreNav";
import { useCart } from "../context/CartStore";

export default function MerchantStore() {
  const params = useParams();
  const { id } = params;
  const product = products.find((product) => product.id == id);
  const [activesection, setactivesection] = useState("features");
  const {addToCart} = useCart()

  const merchantProducts = products.filter(
    (products) => products.merchantId == product.merchantId
  );
  const store = merchants.find(
    (merchant) => merchant.merchantId == product.merchantId
  );
  const menu = Menus.filter(
    (allmenu) => allmenu.merchantId == product.merchantId
  );

  const handleAddToCart = (item) => {
    addToCart(item, 1); // Add 1 quantity of the item
  };

  const date = new Date();
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const today = days[date.getDay()];
  const hours = store.hours[today];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], article[id]"); 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setactivesection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-180px 0px 0px 0px", 
        threshold: 0.60, 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <StoreNav/>

      <main className="flex mt-16">
        {/* LEFT SIDEBAR placeholder (just for layout balance) */}
        <section className="fixed left-0 h-[90vh] w-[88px] bg-red-300 hidden md:block">
          sidebar
        </section>

        {/* MAIN CONTENT */}
        <section className="flex-1 md:ml-[88px]">
          {/* Delivery banner */}
          <div className="w-7/8 fixed left-[3.12%] bg-white md:ml-[88px] z-40">
            <div className="bg-gray-600 w-full rounded-2xl mt-4 flex flex-col p-5 h-[140px]">
              <h1 className="text-white font-semibold mb-4">
                Get it Delivered to your door
              </h1>
              <form className="flex items-center gap-2 bg-white rounded-2xl px-3">
                <MapPin className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="h-10 flex-1 outline-none"
                />
              </form>
            </div>
          </div>

          {/* Banner */}
          <section className="w-11/12 mx-auto mt-[180px]">
            <img
              src={store.banner}
              alt="banner"
              className="w-full h-[300px] object-cover rounded-xl"
            />
          </section>

          <div className="flex flex-col md:flex-row pb-20">
            {/* Sidebar Store Info */}
            <section
              className="w-full md:w-72 md:sticky md:top-[220px] md:h-fit px-4 pb-10
                         max-h-[calc(100vh-220px)] overflow-y-auto"
            >
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">{store.name}</h1>
                <h2 className="font-semibold">Store Info</h2>
                <p className="text-green-600 font-medium">Open Now</p>
                <p className="text-sm text-neutral-700">4.5 (2k+ ratings)</p>
                <button className="text-blue-500 hover:underline text-sm">
                  See More
                </button>
                <p className="pt-5 text-neutral-800">{store.description}</p>
              </div>
              <div className="mb-6">
                <h1 className="font-semibold">Full Menu</h1>
                <h2 className="text-sm text-neutral-700">
                  {hours.open} - {hours.close}
                </h2>
              </div>
              <ul className="space-y-2 text-blue-600">
                <li>
                  <HashLink
                    smooth
                    to="#features"
                    className={`transition-colors duration-200 ${
                      activesection === "features"
                        ? "text-red-500 font-bold"
                        : "text-blue-600"
                    }`}
                  >
                    Featured items
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    smooth
                    to="#Reviews"
                    className={`transition-colors duration-200 ${
                      activesection === "Reviews"
                        ? "text-red-500 font-bold"
                        : "text-blue-600"
                    }`}
                  >
                    Reviews
                  </HashLink>
                </li>
                {menu.map((each) => (
                  <li key={each.menuid}>
                    <HashLink smooth to={`#${each.name}`} className={`transition-colors duration-200 ${
                      activesection === `${each.name}`
                        ? "text-red-500 font-bold"
                        : "text-blue-600"
                    }`}>
                      {each.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </section>

            {/* Content Section */}
            <section className="flex-1 px-6">
              {/* Services */}
              <div className="flex gap-3 mt-6 border border-neutral-300 p-5 rounded-xl">
                {store.services.delivery && (
                  <h1 className="px-4 py-1 rounded-2xl text-sm font-medium bg-neutral-300 text-black">
                    Delivery
                  </h1>
                )}
                {store.services.pickup && (
                  <h1 className="px-4 py-1 rounded-2xl text-sm font-medium bg-neutral-300 text-black">
                    Pick Up
                  </h1>
                )}
                {store.services.dineIn && (
                  <h1 className="px-4 py-1 rounded-2xl text-sm font-medium bg-neutral-300 text-black">
                    Dine In
                  </h1>
                )}
              </div>

              {/* Featured items */}
              <section id="features">
                <h1 className="mt-10 mb-4 text-xl font-bold">Featured Items</h1>
                <div className="flex flex-wrap gap-6">
                  {merchantProducts.map((each) => (
                    <HashLink key={each.id} to={`/merchantstore/item/${each.id}/${each.name}`}>
                    <div key={each.id} className="flex flex-col w-[160px] h-1/1 relative hover:bg-neutral-200">
                      <img
                        src={each.image}
                        alt={each.name}
                        className="w-full min-h-[130px] object-cover rounded-2xl mb-2 transition duration-300 hover:brightness-20  shrink-0a"
                      />
                      <div className="flex flex-col h-full justify-between">
                      <h1 className="text-lg font-semibold">{each.name}</h1>
                      <div className="flex justify-between items-end">
                      <p className="text-sm text-neutral-700">
                        XAF {each.price}
                      </p>
                      <button className="bg-red-500 px-1 rounded-2xl shadow-md shadow-black hover:bg-red-700" onClick={(e) =>{
                        e.preventDefault();
                        handleAddToCart(each)}}>Add to Cart</button>
                      </div>
                      {/* <p className="text-xs text-neutral-500">{each.description}</p> */}
                      </div>
                      <div className="opacity-0 flex flex-col items-center justify-center gap-4 h-4/5 w-1/1 absolute top-0 transition duration-500 hover:opacity-100 ">
                        <button className="bg-gray-200 min-w-22 opacity-80 hover:bg-gray-300 hover:cursor-pointer">View</button>
                      </div>
                    </div>
                    </HashLink>
                  ))}
                </div>
              </section>

              {/* Reviews */}
              <article
                id="Reviews"
                className="w-full p-6 rounded-2xl mt-10 bg-neutral-50"
              >
                <h1 className="text-xl font-bold mb-3">Reviews</h1>
                <h3 className="mb-6 text-lg">{store.rating} Rating</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {store.reviews.map((review) => (
                    <div
                      key={review.user}
                      className="bg-neutral-200 rounded-xl p-4 shadow-sm"
                    >
                      <h1 className="font-semibold">{review.user}</h1>
                      <p className="flex text-yellow-500">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} size={16} />
                        ))}
                      </p>
                      <p className="text-xs text-neutral-600">{review.date}</p>
                      <p className="mt-2 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/*Merchant Menus*/}
              {menu.map((eachmenu) => {
                const menuProducts = merchantProducts.filter(
                  (eachprod) => eachprod.menuid == eachmenu.menuid
                );

                return (
                  <section key={eachmenu.menuid} id={eachmenu.name}  className="w-9/10 mx-auto mt-10" >
                    <h1 className="text-xl font-bold mb-2">{eachmenu.name}</h1>
                    <h2 className="text-sm text-neutral-700 mb-4">
                      {eachmenu.shortDescription}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {menuProducts.map((eachprods) => (
                        <div
                          key={eachprods.id}
                          className=" border border-neutral-300 rounded-xl grid grid-cols-5 gap-2"
                        >
                          <img
                            src={eachprods.image}
                            alt={eachprods.name}
                            className="w-full h-[130px] object-cover rounded-r-xl col-span-2 order-2"
                          />
                          <div className="col-span-3 flex flex-col justify-center gap-1 pl-2">
                          <h3 className="font-semibold">{eachprods.name}</h3>
                          <p className="text-sm text-neutral-600">
                            {eachprods.description}
                          </p>
                          <p className="text-sm font-medium">
                            XAF {eachprods.price}
                          </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
            </section>
          </div>
           <Footer/>
        </section>
      </main>
    </>
  );
}
