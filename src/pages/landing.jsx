import { Link } from "react-router";
import Nav from "../Components/nav";

export default function Landing() {
  return (
    <>
      <Nav />
      <main className="">
        <section>
        </section>
        <section className="flex items-center w-4/5 gap-[8rem] h-[100vh] max-sm:flex-col mr-auto ml-auto max-sm:mt-[5rem]  max-sm:w-4/5 max-sm:h-[100vh] max-sm:gap-[4rem]">
          <div className="grid grid-cols-1 max-sm:flex">
            <img src="../photos/ScootScoot.svg" alt="" className="h-[15rem] max-sm:w-[8rem]" />
            <div>
            <h1 className="text-4xl font-bold mb-5 max-sm:text-2xl max-sm:mb-1.5">Become a Dasher</h1>
            <p>
              AS a delivery driver, make money and work on your schedule. Sign
              up in minutes
            </p>
            <p className="after:content-['→'] mt-5 text-red-600 text-3xl font-semibold max-sm:text-xl max-sm:mt-1.5">start earning</p>
            </div>
          </div>
          <div className="grid grid-cols-1 max-sm:flex">
            <img src="../photos/Storefront.svg" alt="" className="h-[15rem] max-sm:w-[8rem]"/>
            <div>
            <h1 className="text-4xl font-bold mb-5 max-sm:text-2xl max-sm:mb-1.5">Become a Merchant</h1>
            <p>
              Attract new custmers and grow sales, starting with 0% commissions
              for up to 30 days.
            </p>
            <p className="after:content-['→'] mt-5 text-red-600 text-2xl font-semibold max-sm:text-xl max-sm:mt-1.5">Sign up for Cam Chop</p>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 ">
    <div className="grid grid-cols-5 items-center gap-[6rem] w-[90%] m-auto">
        <div className="order-2 col-span-3" > 
        <img src="../photos/download_the_app_mobile.avif" alt="" className="w-[100%]"/>
        </div>
          <div className="col-span-2" > 
            <h1 className="text-5xl font-semibold">Everthing you crave, delivered.</h1>
           <h4 className="text-2xl font-semibold mt-3">Your favorite local restaurants</h4>
           <p className="text-xl mt-1 mb-3">Get a slice of pizza or the whole pie delivered, or pick up that burger for the road you've been meaning to try </p>
           <button className="bg-red-500 p-3 rounded-4xl">Find restaurants</button>
           </div>
    </div>
    <div className=" bg-pink-200 pt-20 pb-10">
        <div className="grid grid-cols-5 items-center gap-[6rem] w-[90%] m-auto">
       <div className="col-span-3"> 
        <img src="../photos/dashpass_mobile.avif" alt="" className="w-[100%]"/>
        </div>
          <div className="col-span-2"> 
            <h1 className="text-5xl font-semibold">Cam Chop is delivery for less.</h1>
           <p className="text-xl mt-3 mb-3">Members get a XAF0 delivery fee on CamChop-Free orders, 5% back on pickup orders, and so much more </p>
           <button className="bg-red-500 p-3 rounded-4xl">Get CamChop-Free</button>
           </div>
    </div>
    </div>
     </section>
     <article className="bg-[url(../photos/convenience_mobile.avif)] bg-no-repeat bg-cover bg-center h-[90vh] flex justify-center items-center">
     <div className="flex justify-center items-center flex-col w-2/5 text-center gap-6 text-white">
      <h1 className="text-5xl font-serif font-extrabold">Get grocery and convenience store essentials</h1>
      <p className="text-3xl font-semibold">Grocery delivery, exactly how you want it.</p>
      <p className="text-xl font-semibold">Shop from home and fill your cart with fresh produce, frozen entrees, deli delights and more.</p>
      <button className="bg-red-500 p-3 rounded-4xl">Shop Groceries</button>
      </div>
     </article>
     <section className="w-[90%] m-auto pt-16">
       <div className="grid grid-cols-5 items-center gap-[6rem]" >
       <div className="order-2 col-span-3"> 
        <img src="../photos/convenience_mobile.avif" alt="" className="w-[100%]"/>
        </div>
       <div className="col-span-2">
         <h1 className="text-5xl font-semibold">Convenience stores at your doorstep</h1>
        <p className="text-xl mt-3 mb-3">Stock up on snacks, household essentials, candy, or vitamins — all delivered in under an hour.</p>
        <button className="bg-red-500 p-3 rounded-4xl">Shop Now</button>
        </div>
    </div>
    </section>
    <section className="grid grid-cols-1 grid-rows-[auto,1fr,1fr] w-[90%] m-auto pt-20">
      <h1 className="text-center text-4xl w-[40%] m-auto pb-20">Unlocking opportunity for Dashers and businesses</h1>
    <div className="grid grid-cols-5 items-center gap-[6rem]">
       <div className="col-span-3 order-2"> 
        <img src="../photos/become_a_dasher_mobile.avif" alt="" className="w-[100%]"/>
        </div>
       <div className="col-span-2"> 
        <h1 className="text-5xl font-semibold">Sign up to dash and get paid</h1>
        <p className="text-xl mt-3 mb-3">Deliver with the #1 Food and Drink App in the U.S. As a delivery driver, you'll make money and work on your schedule. Sign up in minutes.</p>
        <button className="bg-red-500 p-3 rounded-4xl">Become a Dasher</button>
        </div>
    </div>
    <div className="grid grid-cols-5 items-center gap-[6rem]">
       <div className="col-span-3"> 
        <img src="../photos/work_with_doordash_mobile.avif" alt="" className="w-[100%]"/>
        </div>
       <div className="col-span-2"> 
        <h1 className="text-5xl font-semibold">Grow your business with CamChop</h1>
        <p className="text-xl mt-3 mb-3">Businesses large and small partner with DoorDash to reach new customers, increase order volume, and drive more sales.</p>
        <button className="bg-red-500 p-3 rounded-4xl">Become a Partner</button>
        </div>
    </div>
   </section>
      </main>
    </>
  );
}
