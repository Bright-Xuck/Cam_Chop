import toast, { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router";

export default function CustomerAuthSignup({ userDatabase, setUserDatabase }) {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const email = formData.get("email");
   
    const existingUser = userDatabase.find((user) => user.email === email);

    if (existingUser) {
      toast.error("User already exists");
      event.target.reset();
    } else {
      
      setUserDatabase([...userDatabase, data]);
      toast.success("Account created successfully!");
      
      setTimeout(() => navigate("/login"), 1500);
    }
  }

  // console.log(userDatabase);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" />

      <div className="w-full max-w-lg space-y-6">
        {/* Form Title */}
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-red-500 hover:text-red-600"
            >
              Sign in
            </Link>
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 rounded-lg bg-white p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  required
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>
            {/* Last Name */}
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  required
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="mail"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="mail"
                name="email"
                required
                autoComplete="email"
                className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <div className="mt-1">
              <input
                type="tel"
                id="phone"
                name="phone" 
                required
                autoComplete="tel"
                className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="passwords"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                id="passwords"
                name="password"
                required
                autoComplete="new-password"
                className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Fine Print */}
          <div>
            <p className="text-center text-xs text-gray-500">
              By tapping "Sign-Up", you agree to CamChop's Terms
              and Privacy Policy.
            </p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm transition-colors duration-150 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign-Up
            </button>
          </div>
        </form>

      
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-100 px-2 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

       
        <div className="mt-6 grid grid-cols-1 gap-3">
          <div>
            <Link
              to="#"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Continue with Google
            </Link>
          </div>
          <div>
            <Link
              to="#"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Continue with Apple
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}