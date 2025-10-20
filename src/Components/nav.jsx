import { Search, MoveRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Corrected: Import from react-router-dom
import { useState } from "react";

export default function Nav() {
  // State for the main mobile menu (on the right)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for the desktop sidebar menu (on the left)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Helper function to close both menus, useful for navigation
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsSidebarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-20 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Left Section: Sidebar Toggle and Logo */}
        <div className="flex items-center gap-4">
          {/* Desktop Sidebar Toggle */}
          <button onClick={toggleSidebar} className="hidden p-2 rounded-md md:block hover:bg-gray-100">
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
          <Link to="/" onClick={closeAllMenus} className="text-2xl font-bold text-gray-900">
            CamChop
          </Link>
        </div>

        

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 transition-colors rounded-md hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 transition-colors rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar Panel */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 hidden md:block"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="relative flex flex-col w-64 h-full p-4 bg-white shadow-xl top-20">
            <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
            <Link
              to="/"
              onClick={closeAllMenus}
              className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 hover:text-red-500"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={closeAllMenus}
              className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100 hover:text-red-500"
            >
              Shop
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 w-full bg-white border-b shadow-lg md:hidden top-20">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              to="/"
              onClick={closeAllMenus}
              className="block py-2 text-center text-gray-700 rounded-md hover:bg-gray-100 hover:text-red-500"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={closeAllMenus}
              className="block py-2 text-center text-gray-700 rounded-md hover:bg-gray-100 hover:text-red-500"
            >
              Shop
            </Link>
             <hr />
            <Link
              to="/login"
              onClick={closeAllMenus}
              className="block py-2 text-center text-gray-700 rounded-md hover:bg-gray-100 hover:text-red-500"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={closeAllMenus}
              className="block py-2 text-center text-white bg-red-500 rounded-md hover:bg-red-600"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
