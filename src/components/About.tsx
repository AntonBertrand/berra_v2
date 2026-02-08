import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ABOUT_IMAGE from "../assets/about-img.png";

export function About() {
  return (
    <section
      className="relative w-full py-20 lg:py-28 bg-tertiary"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header – aligned with Hero & Services */}
        <header className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="flex flex-col items-center gap-3 mb-4">
            <span
              id="about-heading-label"
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary"
            >
              About us
            </span>
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="block w-12 h-0.5 bg-primary rounded-full" />
              <span className="block w-6 h-0.5 bg-secondary rounded-full" />
            </div>
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-4"
          >
            Commercial drylining specialists
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            A specialist commercial drylining contractor delivering high-performance interior and external systems for large-scale developments.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="relative">
            <div className="space-y-5 mb-8">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Berra is a specialist commercial drylining contractor delivering
                high-performance interior and external systems for large-scale
                developments across the commercial sector.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed pl-5 border-l-4 border-secondary">
                We work exclusively on commercial projects, partnering with main
                contractors and developers to provide structured, compliant, and
                programme-driven solutions. From office blocks and retail units
                to mixed-use and large infrastructure schemes, we understand the
                demands of commercial construction — tight deadlines, strict
                specifications, and zero margin for error.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                At Berra, we focus on quality workmanship, safety, and
                delivering on programme. Our experienced teams operate with
                professionalism on every site, ensuring projects are completed
                efficiently, safely, and to the highest industry standards.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-100 text-white px-8 py-3.5 sm:py-4 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-tertiary shadow-lg hover:shadow-primary/25"
            >
              Learn more
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-2 ring-primary/30 ring-offset-4 ring-offset-tertiary">
              <img
                src={ABOUT_IMAGE}
                alt="Commercial drylining and interior systems"
                className="w-full aspect-[10/9] sm:aspect-[1] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent" aria-hidden />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-white/90 text-sm font-medium">
                <span className="block w-8 h-0.5 bg-secondary rounded-full" aria-hidden />
                Quality &amp; compliance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
