import { useNavigate } from "react-router"

export default function SignupMerchant({userDatabase, setUserDatabase }){
 
const navigate = useNavigate()
    function handleSubmit(event){
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData.entries())
        setUserDatabase([...userDatabase, data])
        navigate("/login")
    }
    
    
    console.log(userDatabase)

    return(
        <section className=" flex flex-col justify-center h-[100vh] mt-0">
            <div className="mb-10">
    <h1 className="text-center">Sign Up</h1>
    <p className="text-center">Already Have an account? <a href="Signin.html">Sign in</a></p>
    </div>
    <section>
    <form onSubmit={handleSubmit} className="grid gap-2 grid-cols-2 grid-rows-[auto,1fr,1fr]  w-[60%] m-auto">
        <div className="flex flex-col">
        <label htmlFor="firstname" className="col-span-1">First Name</label>
        <input type="text" id="firstname" name="firstname"required autoComplete="name" className="col-span-2 rounded-4xl border"/>
        </div>
        <div className="flex flex-col">
        <label htmlFor="lastname" className="col-span-1">Last Name</label>
        <input type="text" name="lastname" id="lastname" required autoComplete="name" className="col-span-2 rounded-4xl border"/>
        </div>
        <div className="col-span-2 flex flex-col gap-1.5">
        <label className="" htmlFor="mail">Email</label>
        <input type="email" id="mail" name="email" required autoComplete="email" className=" bg-red-300 rounded-4xl border-black border"/>
        </div>
        <div className="col-span-2 flex flex-col gap-1.5">
        <label htmlFor="phone" className="">Phone Number</label>
        <input type="tel" id="phone" required autoComplete="tel" className="rounded-4xl border-black border"/>
        </div>
        <div className="col-span-2 flex flex-col gap-1.5">
        <label htmlFor="passwords" className="">Phone Number</label>
        <input type="password" id="passwords" name="password" required className="rounded-4xl border-black border"/>
        </div>
        <p className="col-span-2">By tapping "sign-up" or "continue with" you agree to CamChop's Terms and Privacy Policy. We may text you a verification code. Msg Data rates may apply.</p>
        <button className="col-span-2 bg-amber-300">Sign-Up</button>
    </form>
    </section>
    <p > or </p>
    <div >
        <div >
            <a href="#">Continue with Google</a>
        </div>
        <div >
            <a href="#">Continue with Apple</a>
        </div>
    </div>
</section>
    )
}

