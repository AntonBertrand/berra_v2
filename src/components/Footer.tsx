import { Link } from "react-router-dom";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import LOGO from "../assets/logo-white-2.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full bg-tertiary text-white"
      role="contentinfo"
    >
      {/* Top brand strip */}
      <div className="h-1 w-full bg-primary" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 sm:gap-6">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="inline-block mb-2">
              <img
                src={LOGO}
                alt="Berra"
                className="h-11 w-auto object-contain opacity-100 hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Drylining specialists. On time, on spec, on budget.
            </p>
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-tertiary rounded-md py-1 -ml-1"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.5} />
            </Link>
          </div>

          {/* Quick links + Follow us side by side */}
          <div className="flex flex-wrap items-start gap-8 sm:gap-10">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                Quick links
              </h3>
              <span
                className="block w-8 h-0.5 bg-secondary rounded-full mb-3"
                aria-hidden
              />
              <nav
                className="flex flex-col gap-2"
                aria-label="Footer navigation"
              >
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                Follow us
              </h3>
              <span
                className="block w-8 h-0.5 bg-secondary rounded-full mb-3"
                aria-hidden
              />
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-secondary hover:text-tertiary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-tertiary"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-secondary hover:text-tertiary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-tertiary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Berra Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
