import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import IMAGE_1 from "../assets/services-1.jpg";
import IMAGE_2 from "../assets/services-2.jpg";
import IMAGE_3 from "../assets/services-3.jpg";
import IMAGE_4 from "../assets/services-4.jpg";
import IMAGE_5 from "../assets/services-5.jpg";
import IMAGE_6 from "../assets/services-6.jpg";

const SERVICE_IMAGES = [IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4, IMAGE_5, IMAGE_6];

export function Services() {
  const services = [
    {
      id: "drywall-systems",
      title: "Drywall systems",
      description:
        "Professional drywall installation and finishing for interior spaces. We deliver high-quality partition and lining solutions tailored to your project requirements.",
      image: SERVICE_IMAGES[0],
    },
    {
      id: "partitioning",
      title: "Partitioning",
      description:
        "Internal partitioning solutions for offices, commercial and residential buildings. From demountable to fixed systems, we create flexible and durable space divisions.",
      image: SERVICE_IMAGES[1],
    },
    {
      id: "suspended-ceilings",
      title: "Suspended ceilings",
      description:
        "Suspended ceiling design, supply and installation. We provide acoustic, fire-rated and aesthetic solutions that integrate services and improve building performance.",
      image: SERVICE_IMAGES[2],
    },
    {
      id: "steel-framed-systems",
      title: "Steel framed systems (SFS)",
      description:
        "Steel framed systems for structural and non-structural applications. Expert design and erection of SFS for new build and refurbishment projects.",
      image: SERVICE_IMAGES[3],
    },
    {
      id: "facades",
      title: "Facades",
      description:
        "Facade design, supply and installation. Curtain walling, cladding and external envelope solutions for commercial and residential developments.",
      image: SERVICE_IMAGES[4],
    },
    {
      id: "specialist-fit-out",
      title: "Specialist fit-out items",
      description:
        "Bespoke fit-out and joinery for commercial and high-spec interiors. From reception areas to feature walls, we deliver tailored solutions to specification.",
      image: SERVICE_IMAGES[5],
    },
  ];

  return (
    <section
      className="relative w-full py-20 lg:py-28 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header – aligned with Hero overline style */}
        <header className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="flex flex-col items-center gap-3 mb-4">
            <span
              id="services-heading-label"
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary"
            >
              What we offer
            </span>
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="block w-12 h-0.5 bg-primary rounded-full" />
              <span className="block w-6 h-0.5 bg-secondary rounded-full" />
            </div>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-4"
          >
            Our services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Drylining, partitioning, and fit-out solutions for commercial and
            residential projects.
          </p>
        </header>

        {/* Service cards – clean elevation, clear hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-gray-50"
            >
              {/* Image container – fixed aspect ratio, subtle overlay on hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden
                />
                {/* Service number – secondary brand accent */}
                <span
                  className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-tertiary shadow-sm"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Card content */}
              <div className="relative flex flex-1 flex-col p-6 sm:p-7 bg-tertiary border-l-4 border-secondary">
                <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-[15px] leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-tertiary rounded-md py-1 -ml-1 transition-colors duration-200"
                >
                  <span>Learn more</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
