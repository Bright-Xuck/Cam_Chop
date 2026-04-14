import { Search, Menu, X, ShoppingCart, User } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useCart } from "../../../context/CartStore";
import { useAuth } from "../../../context/AuthContext";

export default function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { isAuthenticated, currentUser } = useAuth();
  const navigate = useNavigate();
  const totalItems = getTotalItems();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsSidebarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-20 bg-card border-b border-border shadow-sm" role="navigation" aria-label="Main navigation">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Left Section: Sidebar Toggle and Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar} 
            className="hidden p-2 rounded-lg md:block hover:bg-secondary transition-colors"
            aria-label="Open navigation menu"
            aria-expanded={isSidebarOpen}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
          <Link to="/" onClick={closeAllMenus} className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
            CamChop
          </Link>
        </div>

        {/* Center: Search Button */}
        <button
          onClick={() => navigate("/search")}
          className="hidden sm:flex items-center gap-2 px-4 py-2 text-muted-foreground bg-secondary rounded-full hover:bg-secondary/80 transition-colors max-w-md flex-1 mx-8"
          aria-label="Search for food"
        >
          <Search className="w-4 h-4" />
          <span className="text-sm">Search for food...</span>
        </button>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Search */}
          <button
            onClick={() => navigate("/search")}
            className="p-2 rounded-lg hover:bg-secondary transition-colors sm:hidden"
            aria-label="Search"
          >
            <Search className="w-5 h-5 text-foreground" />
          </button>

          {/* Cart Button */}
          <Link
            to="/checkout"
            className="relative p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label={`Shopping cart with ${totalItems} items`}
          >
            <ShoppingCart className="w-5 h-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-medium bg-primary text-primary-foreground rounded-full">
                {totalItems > 9 ? "9+" : totalItems}
              </span>
            )}
          </Link>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated ? (
              <Link
                to="/profile"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-secondary transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="max-w-24 truncate">{currentUser?.firstname}</span>
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-secondary transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-secondary transition-colors md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Sidebar Panel */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 hidden md:block"
          onClick={() => setIsSidebarOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation sidebar"
        >
          <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
          <aside className="relative flex flex-col w-64 h-full p-4 bg-card shadow-xl top-20">
            <h2 className="mb-4 text-lg font-semibold text-foreground">Navigation</h2>
            <nav className="flex flex-col gap-1">
              <Link to="/" onClick={closeAllMenus} className="block px-4 py-2 text-foreground rounded-lg hover:bg-secondary hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/shop" onClick={closeAllMenus} className="block px-4 py-2 text-foreground rounded-lg hover:bg-secondary hover:text-primary transition-colors">
                Shop
              </Link>
              <Link to="/search" onClick={closeAllMenus} className="block px-4 py-2 text-foreground rounded-lg hover:bg-secondary hover:text-primary transition-colors">
                Search
              </Link>
              {isAuthenticated && (
                <>
                  <hr className="my-2 border-border" />
                  <Link to="/profile" onClick={closeAllMenus} className="block px-4 py-2 text-foreground rounded-lg hover:bg-secondary hover:text-primary transition-colors">
                    Profile
                  </Link>
                  <Link to="/orders" onClick={closeAllMenus} className="block px-4 py-2 text-foreground rounded-lg hover:bg-secondary hover:text-primary transition-colors">
                    Order History
                  </Link>
                </>
              )}
            </nav>
          </aside>
        </div>
      )}

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div 
          className="absolute left-0 w-full bg-card border-b border-border shadow-lg md:hidden top-20"
          role="menu"
        >
          <nav className="flex flex-col p-4 gap-2">
            <Link to="/" onClick={closeAllMenus} className="block py-3 text-center text-foreground rounded-lg hover:bg-secondary hover:text-primary transition-colors" role="menuitem">
              Home
            </Link>
            <Link to="/shop" onClick={closeAllMenus} className="block py-3 text-center text-foreground rounded-lg hover:bg-secondary hover:text-primary transition-colors" role="menuitem">
              Shop
            </Link>
            <Link to="/search" onClick={closeAllMenus} className="block py-3 text-center text-foreground rounded-lg hover:bg-secondary hover:text-primary transition-colors" role="menuitem">
              Search
            </Link>
            <hr className="border-border" />
            {isAuthenticated ? (
              <>
                <Link to="/profile" onClick={closeAllMenus} className="block py-3 text-center text-foreground rounded-lg hover:bg-secondary hover:text-primary transition-colors" role="menuitem">
                  Profile
                </Link>
                <Link to="/orders" onClick={closeAllMenus} className="block py-3 text-center text-foreground rounded-lg hover:bg-secondary hover:text-primary transition-colors" role="menuitem">
                  Order History
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" onClick={closeAllMenus} className="block py-3 text-center text-foreground rounded-lg hover:bg-secondary hover:text-primary transition-colors" role="menuitem">
                  Login
                </Link>
                <Link to="/signup" onClick={closeAllMenus} className="block py-3 text-center text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors" role="menuitem">
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </nav>
  );
}
