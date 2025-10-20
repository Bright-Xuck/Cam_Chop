import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function Logincomponent(prop) {
  const Navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("login");
    const password = formData.get("password");

    if (email === "" || password === "") {
      toast.error("Please fill in all fields");
    } else {
      
      const check = prop.data.find(
        (each) => each.email == email && each.password == password
      );

      if (check) {
        toast.success("Login Successful");
        setTimeout(() => Navigate("/shop"), 2000); 
      } else {
        toast.error("Incorrect Email or Password");
        event.target.reset(); 
      }
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" />

      <div className="w-full max-w-md space-y-8">
        {/* Form Title */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        {/* The Form */}
        <form
          className="mt-8 space-y-6 rounded-lg bg-white p-8 shadow-xl"
          onSubmit={handleLogin}
        >
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                id="email"
                name="login" 
                autoComplete="email"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white shadow-sm transition-colors duration-150 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}