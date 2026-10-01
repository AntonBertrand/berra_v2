import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight, Linkedin, Instagram } from "lucide-react";
import LOGO from "../assets/logo-1.png";

const SCROLL_THRESHOLD = 20;
const LINKEDIN_URL = "https://www.linkedin.com/company/berra-ltd/";
const INSTAGRAM_URL = "https://www.instagram.com/berra_ltd";

const MOBILE_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services", end: false },
  { to: "/projects", label: "Projects", end: false },
  { to: "/contact", label: "Contact", end: false },
];

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

  const headerBg = isMenuOpen
    ? "bg-white shadow-sm"
    : isScrolled
      ? "bg-white/80 backdrop-blur-md shadow-sm lg:bg-white lg:backdrop-blur-none"
      : "bg-transparent";

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 text-gray-900 transition-[background-color,box-shadow] duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link
              to="/"
              className="text-2xl font-bold !text-gray-900 transition-colors uppercase"
            >
              <img src={LOGO} alt="Berra" className="w-32 sm:w-40 lg:w-80 lg:p-8" />
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
              to="/projects"
              className="group relative inline-block !text-gray-900 hover:!text-primary-50 transition-colors duration-200 pb-0.5"
            >
              {({ isActive }) => (
                <>
                  Projects
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
            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-full bg-primary hover:bg-primary-50 text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-[400px] opacity-100 pb-3"
              : "max-h-0 opacity-0 pb-0"
          }`}
        >
          <nav className="flex flex-col gap-1 p-2 bg-white rounded-2xl border border-gray-100 shadow-lg">
            {MOBILE_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-2.5 rounded-xl text-[15px] font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 !text-primary"
                      : "!text-gray-900 hover:bg-gray-50 hover:!text-primary"
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <div className="md:hidden flex items-center justify-between gap-2 mt-1 pt-3 px-2 pb-1 border-t border-gray-100">
              <div className="flex items-center gap-1">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                  aria-label="LinkedIn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Linkedin className="h-5 w-5 !text-primary" />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                  aria-label="Instagram"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Instagram className="h-5 w-5 !text-primary" />
                </a>
              </div>
              <Link
                to="/contact"
                className="flex items-center gap-1.5 bg-primary hover:bg-primary-50 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
