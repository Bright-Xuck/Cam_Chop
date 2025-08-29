import { Link, useNavigate } from "react-router";
import { useMerchant } from "../context/MerchantProvider";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
export default function LoginMerchant({merchantDatabase}) {
 
  const navigate = useNavigate();
  const {setcurrentUser, currentUser}  = useMerchant()

  function checkemail(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const currentemail = formData.get("email");
  document.querySelector("#email").value =""

  const user = merchantDatabase.find(item => item.email === currentemail);

  if (user) {
    console.log("found email: ",user.email);
    setcurrentUser(user)
     navigate("/merchant")
  } else {
    console.log("email not found");
    toast.error("Email not found")
  }
}

  return (
    <main className="grid grid-cols-2 ">
        <div>
            <img src="photos/auth.png" alt="phone" />
        </div>
        <section className=" bg-red-200">
            <div className="w-4/5 m-auto grid justify-center">
      <h1 className="text-2xl font-bold leading-7 mb-12">CamChop Merchant</h1>
      <form action="" onSubmit={checkemail} className="grid">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <Toaster position="top-center"/>
        <button className="hover:cursor-pointer bg-red-500">Continue to Log In</button>
      </form>
      <div>
        <p>Log in with:</p>
        <div className="grid grid-cols-3 gap-2">
          <h1>Google</h1>
          <h1>Facebook</h1>
          <h1>Apple</h1>
        </div>
      </div>
      <div>
        <div>
          <h1>By logging in, you agree to CamChop's Merchant</h1>{" "}
          <Link>Security Terms</Link>.
        </div>
        <div>
          No account? <Link>Partner with CamChop</Link>
        </div>
      </div>
      </div>
      </section>
    </main>
  );
}
