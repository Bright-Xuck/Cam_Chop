import { Link } from "react-router";
import { ChevronDown } from "lucide-react";
import styles from "/src/div.module.css";
import { useState } from "react";
import Footer from "../Components/footer";
import FoodMenu from "../Components/foodmenu";

export default function Shop() {
  const [openFaqs, setOpenFaqs] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
  });

  function toggleFaq(name) {
    setOpenFaqs((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  return (
    <main>
      <section className="pb-10">
        <div>
          <Link to="/" className="relative left-30 max-md:left-10">
            Home
          </Link>
        </div>
        <div className="grid grid-cols-[3fr_5fr] w-6/7 m-auto items-stretch h-[65vh] max-lg:w-full max-md:grid-cols-1 max-md:h-auto">
          <div className="border border-black h-[82%] my-auto z-10 rounded-4xl bg-white flex flex-col justify-center items-center max-md:order-2 max-md:border-none">
            <div className="w-5/6 m-auto flex flex-col gap-5 max-md:w-9/10">
              <h1 className="font-bold leading-10 text-4xl max-lg:text-3xl">
                Discover the Best Restaurants Near Me - CamChop
              </h1>
              <p className="text-[18px] font-semibold">
                Order online for super-fast delivery or pick-up, powered by
                DoorDash.
              </p>
              <button className="w-full bg-red-500 rounded-4xl h-8 max-md:h-11 ">
                Sign in to Order
              </button>
            </div>
          </div>
          <div className="z-9 max-md:order-1">
            <img
              src="photos/multicuisinea.jpg"
              alt=""
              className="relative -left-13 rounded-4xl w-[100%] min-h-[318px] h-full max-md:left-0"
            />
          </div>
        </div>
      </section>
      <FoodMenu />
      <section className="w-5/6 m-auto pb-[150px]">
        <h1 className="text-[32px] font-bold leading-6 mb-10">Frequently asked questions</h1>
        <ul className={`${styles.main} grid gap-4`}>
          <li onClick={() => toggleFaq("faq1")}>
            <div className="drop cursor-pointer" >
              <span>How Does CamChop Work</span>
              <ChevronDown className={`transition-transform duration-300 ${openFaqs.faq1 ? "rotate-180" : ""}`} />
            </div>
            <p className={`overflow-hidden transition-all duration-300 ${openFaqs.faq1 ? "max-h-40 py-4" : "max-h-0 py-0"}`}>
              CamChop connects you with the best nearby restaurants. Use the
              DoorDash website or app to browse eligible restaurants. Order and
              securely pay online and your food is on the way! You can even
              track your delivery right to your door. Getting your favorite
              foods delivered is that easy.
            </p>
          </li>
          <li onClick={() => toggleFaq("faq2")}>
            <div className="drop cursor-pointer" >
              <span>Can I schedule a delivery in advance?</span>
              <ChevronDown className={`transition-transform duration-300 ${openFaqs.faq2 ? "rotate-180" : ""}`} />
            </div>
            <p className={`overflow-hidden transition-all duration-300 ${openFaqs.faq2 ? "max-h-40 py-4" : "max-h-0 py-0"}`}>
              Yes. Before clicking Place Order, simply select Scheduled and you
              can select the date and time you wish to have your meal delivered.
              After selecting the date and time you want, click Place Order and
              we'll handle the rest.
            </p>
          </li>
          <li onClick={() => toggleFaq("faq3")}>
            <div className="drop cursor-pointer" >
              <span>How fast will I get my food?</span>
              <ChevronDown className={`transition-transform duration-300 ${openFaqs.faq3 ? "rotate-180" : ""}`} />
            </div>
            <p className={`overflow-hidden transition-all duration-300 ${openFaqs.faq3 ? "max-h-40 py-4" : "max-h-0 py-0"}`}>
              How fast you'll get your food depends on a number of things. How
              far is the restaurant? How bad is traffic? Is it snowing out? The
              average time is approximately 40 minutes but it could be more or
              less. Either way, you can track where your driver is on the
              DoorDash website or app.
            </p>
          </li>
          <li onClick={() => toggleFaq("faq4")}>
            <div className="drop cursor-pointer" >
              <span>What is a group order and how can I create one?</span>
              <ChevronDown className={`transition-transform duration-300 ${openFaqs.faq4 ? "rotate-180" : ""}`} />
            </div>
            <h1 className={`overflow-hidden transition-all duration-300 ${openFaqs.faq4 ? "max-h-60 py-4" : "max-h-0 py-0"}`}>
              A group order allows multiple people to add items into an order at
              the same time. Once a group order is created through a DoorDash
              Account, the rest of the group doesn't need to have a DoorDash
              Account to use the group order link. Even better, you can
              pre-order up to four days in advance, which makes it great for
              events and meetings. Follow these steps to create a group order:
              <ul className="list-disc pl-5">
                <li>Log into your DoorDash account.</li>
                <li>Choose your Restaurant</li>
                <li>
                  In the upper right-hand corner, click Create a group order.
                </li>
                <li>Send the group order link to others.</li>
                <li>
                  When everyone is done adding their items into the cart, you
                  can close the group order and complete checkout.
                </li>
              </ul>
            </h1>
          </li>
        </ul>
      </section>
      <Footer/>
    </main>
  );
}
