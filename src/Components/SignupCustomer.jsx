import { useNavigate } from "react-router";

export default function SignupCustomer({ userDatabase, setUserDatabase }) {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    setUserDatabase([...userDatabase, data]);
    navigate("/login");
  }

  console.log(userDatabase);

  return (
    <section className=" flex flex-col justify-center  pb-30 mt-0">
      <div className="mb-10">
        <h1 className="text-center">Sign Up</h1>
        <p className="text-center">
          Already Have an account? <a href="Signin.html">Sign in</a>
        </p>
      </div>
      <section>
        <form
          onSubmit={handleSubmit}
          className="grid gap-2 grid-cols-2 grid-rows-[auto,1fr,1fr]  w-[60%] m-auto"
        >
          <div className="flex flex-col">
            <label htmlFor="firstname" className="col-span-1 text-xl font-semibold">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              autoComplete="name"
              className="col-span-2 rounded-3xl border border-blue-300 h-10 bg-blue-50"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname" className="col-span-1 text-xl font-semibold">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              autoComplete="name"
              className="col-span-2 rounded-3xl border border-blue-300 h-10 bg-blue-50"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1.5">
            <label className="text-xl font-semibold" htmlFor="mail">
              Email
            </label>
            <input
              type="email"
              id="mail"
              name="email"
              required
              autoComplete="email"
              className=" rounded-3xl border border-blue-300 h-10 bg-blue-50"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-xl font-semibold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              autoComplete="tel"
              className="rounded-3xl border border-blue-300 h-10 bg-blue-50"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-1.5">
            <label htmlFor="passwords" className="text-xl font-semibold">
              Password
            </label>
            <input
              type="password"
              id="passwords"
              name="password"
              required
              className="rounded-3xl border border-blue-300 h-10 bg-blue-50"
            />
          </div>
          <p className="col-span-2">
            By tapping "sign-up" or "continue with" you agree to CamChop's Terms
            and Privacy Policy. We may text you a verification code. Msg Data
            rates may apply.
          </p>
          <button className="col-span-2 bg-amber-300">Sign-Up</button>
        </form>
      </section>
      <p className="text-center"> or </p>
      <div className="flex flex-col items-center">
        <div>
          <a href="#">Continue with Google</a>
        </div>
        <div>
          <a href="#">Continue with Apple</a>
        </div>
      </div>
    </section>
  );
}
