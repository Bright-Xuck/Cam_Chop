import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import sliderOne from "../assets/hero/sliderone.jpg";
import sliderTwo from "../assets/hero/slidertwo.jpg";

export default function Landing() {
  const imgArray = [sliderOne, sliderTwo];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev == imgArray.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <main className="pb-30">
        {/* Hero Slider Section */}
        <section
          className="relative bg-cover bg-center h-[calc(100vh-5rem)] w-full bg-no-repeat"
          style={{ backgroundImage: `url(${imgArray[current]})` }}
        >
          {/* Slider Dots */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {imgArray.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-4 h-4 md:w-5 md:h-5 rounded-full hover:scale-110 transition-transform ${
                  i === current ? "bg-blue-700" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </section>

        {/* Become Dasher/Merchant Section */}
        <section className="flex flex-col lg:flex-row items-center justify-center w-[90%] mx-auto gap-8 lg:gap-32 py-16 lg:py-24 min-h-[70vh]">
          {/* Become a Dasher */}
          <div className="flex flex-col md:flex-row lg:flex-col items-center text-center md:text-left lg:text-center gap-6 md:gap-8 lg:gap-6 w-full lg:w-auto">
            <img
              src="../photos/ScootScoot.svg"
              alt="Delivery scooter"
              className="h-32 w-32 md:h-48 md:w-48 lg:h-60 lg:w-auto object-contain"
            />
            <div className="flex-1 lg:flex-none">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-5">
                Become a Dasher
              </h1>
              <p className="text-sm md:text-base lg:text-lg mb-3 lg:mb-5 max-w-sm">
                As a delivery driver, make money and work on your schedule. Sign up in minutes
              </p>
              <p className="text-red-600 text-lg md:text-xl lg:text-2xl font-semibold after:content-['→'] after:ml-2">
                Start earning
              </p>
            </div>
          </div>

          {/* Become a Merchant */}
          <div className="flex flex-col md:flex-row lg:flex-col items-center text-center md:text-left lg:text-center gap-6 md:gap-8 lg:gap-6 w-full lg:w-auto">
            <img
              src="../photos/Storefront.svg"
              alt="Storefront"
              className="h-32 w-32 md:h-48 md:w-48 lg:h-60 lg:w-auto object-contain"
            />
            <div className="flex-1 lg:flex-none">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-5">
                Become a Merchant
              </h1>
              <p className="text-sm md:text-base lg:text-lg mb-3 lg:mb-5 max-w-sm">
                Attract new customers and grow sales, starting with 0% commissions for up to 30 days.
              </p>
              <NavLink
                to="/merchant/signup"
                className="text-red-600 text-lg md:text-xl lg:text-2xl font-semibold after:content-['→'] after:ml-2 hover:text-red-700 transition-colors"
              >
                Sign up for Cam Chop
              </NavLink>
            </div>
          </div>
        </section>

        {/* Restaurant Delivery Section */}
        <section className="py-16 lg:py-20">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full lg:w-3/5 order-2 lg:order-2">
                <img
                  src="../photos/download_the_app_mobile.avif"
                  alt="Food delivery app"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="w-full lg:w-2/5 order-1 lg:order-1 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                  Everything you crave, delivered.
                </h1>
                <h4 className="text-xl md:text-2xl font-semibold mb-3">
                  Your favorite local restaurants
                </h4>
                <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
                  Get a slice of pizza or the whole pie delivered, or pick up that burger for the road you've been meaning to try
                </p>
                <NavLink 
                  to="/shop" 
                  className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-3xl font-medium transition-colors"
                >
                  Find restaurants
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* CamChop Free Section */}
        <section className="bg-pink-100 py-16 lg:py-20">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full lg:w-3/5">
                <img
                  src="../photos/dashpass_mobile.avif"
                  alt="CamChop Free benefits"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="w-full lg:w-2/5 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                  Cam Chop is delivery for less.
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
                  Members get XAF0 delivery fee on CamChop-Free orders, 5% back on pickup orders, and so much more
                </p>
                <NavLink 
                  to="/signup" 
                  className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-3xl font-medium transition-colors"
                >
                  Get CamChop-Free
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* Grocery Section */}
        <article className="relative bg-[url(../photos/convenience_mobile.avif)] bg-no-repeat bg-cover bg-center h-[70vh] md:h-[80vh] lg:h-[90vh] flex justify-center items-center">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 flex justify-center items-center flex-col w-[90%] md:w-3/5 lg:w-2/5 text-center gap-4 md:gap-6 text-white px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-extrabold leading-tight">
              Get grocery and convenience store essentials
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Grocery delivery, exactly how you want it.
            </p>
            <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-3xl font-medium transition-colors">
              Shop Groceries
            </button>
          </div>
        </article>

        {/* Convenience Store Section */}
        <section className="py-16 lg:py-20">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full lg:w-3/5 order-2 lg:order-2">
                <img
                  src="../photos/convenience_mobile.avif"
                  alt="Convenience store delivery"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="w-full lg:w-2/5 order-1 lg:order-1 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                  Convenience stores at your doorstep
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
                  Stock up on snacks, household essentials, candy, or vitamins — all delivered in under an hour.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-3xl font-medium transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunity Section */}
        <section className="py-16 lg:py-20">
          <div className="w-[90%] mx-auto">
            {/* Section Title */}
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold w-full md:w-3/4 lg:w-2/5 mx-auto mb-12 lg:mb-20 leading-tight">
              Unlocking opportunity for Dashers and businesses
            </h1>

            {/* Become a Dasher */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 lg:mb-20">
              <div className="w-full lg:w-3/5 order-2 lg:order-2">
                <img
                  src="../photos/become_a_dasher_mobile.avif"
                  alt="Become a Dasher"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="w-full lg:w-2/5 order-1 lg:order-1 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                  Sign up to dash and get paid
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
                  Deliver with the #1 Food and Drink App in the U.S. As a delivery driver, you'll make money and work on your schedule. Sign up in minutes.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-3xl font-medium transition-colors">
                  Become a Dasher
                </button>
              </div>
            </div>

            {/* Business Partnership */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full lg:w-3/5">
                <img
                  src="../photos/work_with_doordash_mobile.avif"
                  alt="Business partnership"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="w-full lg:w-2/5 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                  Grow your business with CamChop
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed">
                  Businesses large and small partner with CamChop to reach new customers, increase order volume, and drive more sales.
                </p>
                <NavLink
                  to="/merchant/signup"
                  className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-3xl font-medium transition-colors"
                >
                  Become a Partner
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}