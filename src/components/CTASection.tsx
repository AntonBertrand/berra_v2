import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HERO_IMAGE from "../assets/hero-img.png";

export function CTASection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-tertiary py-20 lg:py-28"
      aria-labelledby="cta-heading"
    >
      {/* Background image – same as Hero, subtle */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center opacity-30"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-tertiary/85"
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Section overline – aligned with Hero, Services, About */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <span
              id="cta-heading-label"
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary"
            >
              Get in touch
            </span>
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="block w-12 h-0.5 bg-primary rounded-full" />
              <span className="block w-6 h-0.5 bg-secondary rounded-full" />
            </div>
          </div>

          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-5"
          >
            Ready for your next project?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
            From office fit-outs and retail refurbishments to new-build
            partitioning and suspended ceilings—get a no-obligation quote. We
            deliver on time, on spec, and on budget.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-100 text-white px-8 py-3.5 sm:py-4 rounded-lg font-semibold text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-tertiary shadow-lg hover:shadow-primary/25"
          >
            Get a quote
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
