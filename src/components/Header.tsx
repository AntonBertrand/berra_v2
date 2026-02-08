import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight, Linkedin, Instagram } from "lucide-react";
import LOGO from "../assets/logo-1.png";

const SCROLL_THRESHOLD = 20;
const LINKEDIN_URL = "https://linkedin.com/company/your-company";
const INSTAGRAM_URL = "https://instagram.com/your-company";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    handleScroll(); // run once for initial position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = isScrolled ? "bg-white shadow-sm" : "bg-transparent";

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 text-gray-900 transition-[background-color,box-shadow] duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              to="/"
              className="text-2xl font-bold !text-gray-900 transition-colors uppercase"
            >
              <img src={LOGO} className="w-80 p-8" />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <NavLink
              to="/"
              end
              className="group relative inline-block !text-gray-900 hover:!text-primary-50 transition-colors duration-200 pb-0.5"
            >
              {({ isActive }) => (
                <>
                  Home
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left transition-transform duration-300 ease-out ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
            <NavLink
              to="/services"
              className="group relative inline-block !text-gray-900 hover:!text-primary-50 transition-colors duration-200 pb-0.5"
            >
              {({ isActive }) => (
                <>
                  Services
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left transition-transform duration-300 ease-out ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
            <NavLink
              to="/contact"
              className="group relative inline-block !text-gray-900 hover:!text-primary-50 transition-colors duration-200 pb-0.5"
            >
              {({ isActive }) => (
                <>
                  Contact
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-secondary origin-left transition-transform duration-300 ease-out ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </nav>

          {/* Social links + Get Started Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 !text-primary hover:!text-primary-50 transition-colors rounded-lg hover:bg-primary/10 shrink-0"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} className="shrink-0 !text-primary" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 !text-primary hover:!text-primary-50 transition-colors rounded-lg hover:bg-primary/10 shrink-0"
              aria-label="Instagram"
            >
              <Instagram size={22} className="shrink-0 !text-primary" />
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-primary hover:bg-primary-50 text-white px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shrink-0"
            >
              Contact
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-lg bg-primary hover:bg-primary-50 text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2 ${
            isMenuOpen
              ? "max-h-[500px] opacity-100 pb-4"
              : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <div className="flex flex-col items-center text-center space-y-2 pt-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-4 py-2 text-white hover:bg-gray-800 rounded ${isActive ? "underline decoration-2 decoration-secondary" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-4 py-2 text-white hover:bg-gray-800 rounded ${isActive ? "underline decoration-2 decoration-secondary" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </NavLink>
            <a
              href="#blog"
              className="px-4 py-2 text-white hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-2 text-white hover:bg-gray-800 rounded ${isActive ? "underline decoration-2 decoration-secondary" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <a
              href="#testimonial"
              className="px-4 py-2 text-white hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonial
            </a>
            <div className="pt-4 px-4 w-full flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 !text-primary hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Linkedin className="h-5 w-5 !text-primary" />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 !text-primary hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="Instagram"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Instagram className="h-5 w-5 !text-primary" />
                </a>
              </div>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-50 text-white px-6 py-3 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
