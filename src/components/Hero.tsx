import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HERO_IMAGE from "../assets/hero-img.png";

export function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-gray-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Refined overlay: dark gradient for readability and depth */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-gray-900/75 via-gray-900/60 to-gray-900/80"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-24 pt-6 pb-20 sm:pt-8 sm:pb-24 lg:pt-10 lg:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Overline */}
          <div className="flex flex-col items-center gap-3 mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Berra Ltd
            </span>
            <span
              className="block w-12 h-0.5 bg-primary rounded-full"
              aria-hidden
            />
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Professional drylining &amp; partitioning
          </h1>

          {/* Subhead */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Commercial, residential and private projects delivered to the
            highest standards—stud walls, suspended ceilings, and full fit-outs.
            On time, on budget.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary-50 text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-lg font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Get in touch
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 underline underline-offset-4"
            >
              View our services
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"
        aria-hidden
      />
    </section>
  );
}
