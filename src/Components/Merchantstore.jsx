import { Bell, MapPin, Menu, ShoppingCart, Star } from "lucide-react";
import { products } from "../data/productdata";
import { useParams } from "react-router";
import { merchants } from "../data/merchants";

export default function MerchantStore() {
  const params = useParams();
  const { id } = params;
  const product = products.find((product) => product.id == id);

  const merchantProducts = products.filter(
    (products) => products.merchantId == product.merchantId
  );
  const store = merchants.find(
    (merchant) => merchant.merchantId == product.merchantId
  );

  return (
    <>
      <nav className="grid grid-cols-3 h-16 border-b border-b-neutral-200 px-4">
        <div className="flex items-center gap-6">
          <Menu className="w-6 h-6 cursor-pointer" />
          <div className="flex items-center gap-2">
            <img src="photos/logo.png" alt="logo" className="h-12" />
            <h1 className="font-bold text-lg">CamChop</h1>
          </div>
        </div>
        <div className="col-start-3 flex items-center justify-end gap-4">
          <Bell className="p-1 bg-neutral-200 rounded-full w-8 h-8 hover:bg-neutral-300 cursor-pointer" />
          <ShoppingCart className="p-1 bg-red-500 text-white rounded-full w-8 h-8 hover:bg-red-600 cursor-pointer" />
          <p className="font-medium px-3 py-1 rounded-lg hover:bg-neutral-200 cursor-pointer">
            Sign In
          </p>
          <p className="bg-neutral-600 text-white px-3 py-1 rounded-lg font-medium cursor-pointer hover:bg-neutral-700">
            Sign Up
          </p>
        </div>
      </nav>

      <main className="flex">
        <section className="sticky left-0 top-0 h-[90vh] w-22 bg-red-300">
          sidebar
        </section>

        <section className="w-full">
          <div className="w-5/6 mx-auto">
            <div className="bg-gray-600 w-full rounded-2xl mt-10 flex flex-col p-5">
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

          <div className="flex pt-8 w-full">
            <div className="w-72 px-4">
              <h1 className="text-2xl font-bold mb-8">{store.name}</h1>
              <h2 className="font-semibold">Store Info</h2>
              <p className="text-green-600 font-medium">Open Now</p>
              <p className="text-sm text-neutral-700">4.5 (2k+ ratings)</p>
              <button className="text-blue-500 hover:underline text-sm">
                See More
              </button>
              <p className="pt-5 text-neutral-800">{store.description}</p>
            </div>

            <div className="flex-1 px-6">
              <div className="flex gap-3 mt-6">
                <h1
                  className={`px-4 py-1 rounded-2xl text-sm font-medium ${
                    store.services.delivery
                      ? "bg-neutral-300 text-black"
                      : "hidden"
                  }`}
                >
                  Delivery
                </h1>
                <h1
                  className={`px-4 py-1 rounded-2xl text-sm font-medium ${
                    store.services.pickup
                      ? "bg-neutral-300 text-black"
                      : "hidden"
                  }`}
                >
                  Pick Up
                </h1>
                <h1
                  className={`px-4 py-1 rounded-2xl text-sm font-medium ${
                    store.services.dineIn
                      ? "bg-neutral-300 text-black"
                      : "hidden"
                  }`}
                >
                  Dine In
                </h1>
              </div>

              <div className="flex flex-wrap gap-6 mt-10">
                {merchantProducts.map((each) => (
                  <div key={each.id} className="w-[160px]">
                    <img
                      src={each.image}
                      alt={each.name}
                      className="w-full h-[130px] object-cover rounded-2xl mb-2"
                    />
                    <h1 className="text-lg font-semibold">{each.name}</h1>
                    <p className="text-sm text-neutral-700">XAF {each.price}</p>
                    <p className="text-xs text-neutral-500">{each.short}</p>
                  </div>
                ))}
              </div>

              <article className="w-full p-6 rounded-2xl mt-10">
                <h1 className="text-xl font-bold mb-3">Reviews</h1>
                <h3 className="mb-6 text-lg">{store.rating}</h3>
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
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
