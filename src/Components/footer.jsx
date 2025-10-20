import { Link } from "react-router"
export default function Footer(){
    return(
         <section className=" bg-neutral-600">
            <div className="grid grid-cols-5 w-5/6 m-auto text-center pt-8 max-lg:w-9/10 max-[780px]:grid-cols-4 max-[550px]:grid-cols-1 max-[550px]:gap-6">
        <div className="flex flex-col">
            <h1>Get to Know Us</h1>
            <Link>About Us</Link>
            <Link>Careers</Link>
            <Link>Investors</Link>
            <Link>Company Blog</Link>
            <Link>Engineering Blog</Link>
            <Link>Merchant Blog</Link>
            <Link>LinkedIn</Link>
            <Link>Promotions</Link>
        </div>
        <div className="flex flex-col">
            <h1>Let Us Help You</h1>
            <Link >Account Details</Link>
            <Link>Order history</Link>
            <Link>Help</Link>
        </div>
        <div className="flex flex-col">
            <h1>Doing Business</h1>
            <Link >Become a Dasher</Link>
            <Link>CamChop Merchant</Link>
            <Link>Get Dashers for Deliveries</Link>
            <Link>Get CamChop for Business</Link>
        </div>
        <div className="col-span-2 grid grid-cols-[auto_auto] justify-center gap-1 max-[780px]:grid-cols-1 max-[780px]:col-span-1 ">
            <img src="/photos/appstore.png" alt="" className="max-w-[144px] justify-self-center"/>
            <img src="/photos/playstore.png" alt="" className="max-w-[144px] justify-self-center" />
        </div>
        </div>
      </section>
    )
}