import { useNavigate } from "react-router"
export default function SignupMerchant({merchantDatabase, setMerchantDatabase}){

    const naviagte = useNavigate()
    function GetMerchant(event){
        event.preventDefault()
        const data = new FormData(event.target)
        const merchantdata = Object.fromEntries(data.entries())
        setMerchantDatabase([...merchantDatabase, merchantdata])
        console.log(merchantDatabase)
        naviagte("/merchant/login")
    }
    return(
        <>
        <main className="">
        <h1>Sign Up for CamChop and unlock Sales</h1>
        <form action="" onSubmit={GetMerchant} className="border border-black w-3/5 m-auto">
            <h3>0% commissions for up to 30 days</h3>
            <p >Partner with CamChop to help drive growth and take your business to the next level</p>
            <div className="grid grid-cols-2 gap-4 p-3">
            <input type="text" name="name" id="name" placeholder="Business Name" className="col-span-2"/>
            <input type="text" name="location" id="location" placeholder="Business Address" className="col-span-2"/>
            <input type="email" name="email" id="email" placeholder="Email Address"/>
            <input type="tel" name="tel" id="tel" placeholder="Business Phone"/>
            </div>
            <p>By clicking "Start", I agree to receive marketing electronic communications from CamChop</p>
            <button className="bg-red-500">Start</button>
        </form>
    </main>
    <section className="">
        <h1>Your door to more profitable growth</h1>
        <h3>We're here to help you navigate the endless complexities of running a business.
        </h3>
        <div className="promo">
            <i>logo, Marketplace</i>
            <div className="list sheesh"><span>Delivery & Pickup</span>-Convenient ordering for customers</div>
            <div className="list"><span>Promotions</span>-Customizable promotions for your store or items</div>
            <div className="list"><span>Sponsored Listings</span>-In-site advertisement to get your store seen</div>
            <img src="./frontend/photos/IMG_2564.jpg" alt=""/>
        </div>
    </section>
    </>
    )
}
