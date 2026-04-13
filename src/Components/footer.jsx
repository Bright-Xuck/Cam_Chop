import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-card" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Get to Know Us */}
          <nav aria-labelledby="footer-about">
            <h2 id="footer-about" className="text-lg font-semibold text-card mb-4">
              Get to Know Us
            </h2>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted hover:text-card transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-muted hover:text-card transition-colors">Careers</Link></li>
              <li><Link to="/investors" className="text-muted hover:text-card transition-colors">Investors</Link></li>
              <li><Link to="/blog" className="text-muted hover:text-card transition-colors">Company Blog</Link></li>
              <li><Link to="/promotions" className="text-muted hover:text-card transition-colors">Promotions</Link></li>
            </ul>
          </nav>

          {/* Let Us Help You */}
          <nav aria-labelledby="footer-help">
            <h2 id="footer-help" className="text-lg font-semibold text-card mb-4">
              Let Us Help You
            </h2>
            <ul className="space-y-2">
              <li><Link to="/profile" className="text-muted hover:text-card transition-colors">Account Details</Link></li>
              <li><Link to="/orders" className="text-muted hover:text-card transition-colors">Order History</Link></li>
              <li><Link to="/help" className="text-muted hover:text-card transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-muted hover:text-card transition-colors">Contact Us</Link></li>
            </ul>
          </nav>

          {/* Doing Business */}
          <nav aria-labelledby="footer-business">
            <h2 id="footer-business" className="text-lg font-semibold text-card mb-4">
              Doing Business
            </h2>
            <ul className="space-y-2">
              <li><Link to="/become-dasher" className="text-muted hover:text-card transition-colors">Become a Dasher</Link></li>
              <li><Link to="/merchant/signup" className="text-muted hover:text-card transition-colors">CamChop Merchant</Link></li>
              <li><Link to="/deliveries" className="text-muted hover:text-card transition-colors">Get Dashers for Deliveries</Link></li>
              <li><Link to="/business" className="text-muted hover:text-card transition-colors">Get CamChop for Business</Link></li>
            </ul>
          </nav>

          {/* Download Apps */}
          <div>
            <h2 className="text-lg font-semibold text-card mb-4">
              Download Our App
            </h2>
            <div className="flex flex-col gap-3">
              <a 
                href="#" 
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Download CamChop on the App Store"
              >
                <img 
                  src="/photos/appstore.png" 
                  alt="Download on the App Store" 
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </a>
              <a 
                href="#" 
                className="inline-block hover:opacity-80 transition-opacity"
                aria-label="Get CamChop on Google Play"
              >
                <img 
                  src="/photos/playstore.png" 
                  alt="Get it on Google Play" 
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-muted/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              &copy; {currentYear} CamChop. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link to="/terms" className="text-muted hover:text-card transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-muted hover:text-card transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
