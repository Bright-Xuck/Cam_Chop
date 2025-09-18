import { Search, MoveRight, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[5rem] border-b-2 shadow-md shadow-black z-50 bg-white">
      <div className="flex justify-between items-center h-full px-4 lg:px-8">
        
        {/* Search Form - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block">
          <form action="" className="flex items-center border rounded-2xl p-2 w-full max-w-[350px]">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Enter your address" 
              className="flex-1 focus:outline-none text-sm"
            />
            <button type="submit" className="ml-2 p-1 hover:bg-gray-100 rounded">
              <MoveRight className="w-5 h-5 text-gray-500" />
            </button>
          </form>
        </div>

        {/* Mobile Search - Only visible on mobile */}
        <div className="md:hidden flex-1">
          <form action="" className="flex items-center border rounded-2xl p-2 max-w-[250px]">
            <Search className="w-4 h-4 text-gray-500 mr-1" />
            <input 
              type="text" 
              placeholder="Address" 
              className="flex-1 focus:outline-none text-sm"
            />
            <button type="submit" className="ml-1">
              <MoveRight className="w-4 h-4 text-gray-500" />
            </button>
          </form>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-4 items-center">
          <Link 
            to="/login" 
            className="text-black hover:cursor-pointer hover:text-red-500 transition-colors px-4 py-2"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="bg-red-500 hover:cursor-pointer text-white px-6 py-3 rounded-2xl text-sm hover:bg-red-600 transition-colors"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[5rem] left-0 right-0 bg-white border-b shadow-lg">
          <div className="flex flex-col p-4 gap-3">
            <Link 
              to="/login" 
              className="text-black hover:text-red-500 transition-colors py-2 text-center border-b border-gray-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-red-500 text-white py-3 px-6 rounded-2xl text-sm hover:bg-red-600 transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}