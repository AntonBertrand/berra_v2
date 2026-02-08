import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import HERO_IMAGE from "../assets/hero-img.png";
import IMAGE_1 from "../assets/services-1.jpg";
import IMAGE_2 from "../assets/services-2.jpg";
import IMAGE_3 from "../assets/services-3.jpg";
import IMAGE_4 from "../assets/services-4.jpg";
import IMAGE_5 from "../assets/services-5.jpg";
import IMAGE_6 from "../assets/services-6.jpg";

const SERVICE_IMAGES = [IMAGE_1, IMAGE_2, IMAGE_3, IMAGE_4, IMAGE_5, IMAGE_6];

const EXPANDED_SERVICES = [
  {
    id: "drywall-systems",
    title: "Drywall systems",
    summary:
      "Professional drywall installation and finishing for interior spaces. We deliver high-quality partition and lining solutions tailored to your project requirements.",
    image: SERVICE_IMAGES[0],
    content: [
      "We design and install drywall (plasterboard) systems for partitions, wall linings and soffits across commercial and residential projects. Our teams work to your programme and specification, from single-layer systems to high-performance fire and acoustic assemblies.",
      "We offer a full range of board types—standard, moisture-resistant, fire-rated and acoustic—and finishes including jointing and skim, or paint-ready. Whether you need simple linings or complex multi-layer partitions, we provide a single point of responsibility for supply, installation and finishing.",
    ],
    points: [
      "Partition and lining systems to meet fire and acoustic requirements",
      "Multiple board types and finishes, including paint-ready",
      "Supply, installation and finishing from one team",
    ],
  },
  {
    id: "partitioning",
    title: "Partitioning",
    summary:
      "Internal partitioning solutions for offices, commercial and residential buildings. From demountable to fixed systems, we create flexible and durable space divisions.",
    image: SERVICE_IMAGES[1],
    content: [
      "Our partitioning solutions cover both fixed and demountable systems so you can balance long-term layout with future flexibility. We work across offices, education, healthcare and residential schemes, delivering robust divisions that meet fire, acoustic and aesthetic requirements.",
      "Fixed partitions use metal stud and plasterboard or similar systems for permanent walls. Demountable options allow rooms to be reconfigured without major strip-out, ideal for churn and changing occupancy. We advise on the right system for your use case and manage installation through to handover.",
    ],
    points: [
      "Fixed and demountable systems to suit project needs",
      "Suitable for offices, education, healthcare and residential",
      "Fire and acoustic performance to specification",
    ],
  },
  {
    id: "suspended-ceilings",
    title: "Suspended ceilings",
    summary:
      "Suspended ceiling design, supply and installation. We provide acoustic, fire-rated and aesthetic solutions that integrate services and improve building performance.",
    image: SERVICE_IMAGES[2],
    content: [
      "We design, supply and install suspended ceiling systems that improve acoustics, fire performance and the appearance of interior spaces while providing a service zone for MEP. Our solutions range from standard tile and grid systems to bespoke layouts and feature ceilings.",
      "We specify and install systems that meet required acoustic classifications and fire ratings, and we coordinate with other trades so lighting, HVAC and sprinklers integrate cleanly. Whether you need a straightforward grid ceiling or a more complex design, we deliver a finished ceiling that meets your performance and aesthetic goals.",
    ],
    points: [
      "Acoustic and fire-rated solutions to project specification",
      "Coordination with MEP and integrated services",
      "Standard and bespoke layouts, including feature ceilings",
    ],
  },
  {
    id: "steel-framed-systems",
    title: "Steel framed systems (SFS)",
    summary:
      "Steel framed systems for structural and non-structural applications. Expert design and erection of SFS for new build and refurbishment projects.",
    image: SERVICE_IMAGES[3],
    content: [
      "We design and erect steel framed systems (SFS) for both structural and non-structural applications in new build and refurbishment projects. SFS provides a fast, accurate frame for internal and external walls, often used with cladding, curtain wall and drylining packages.",
      "Our involvement can include design coordination, supply and erection, working alongside main contractors and MEP teams. We focus on programme, tolerance and interface details so the frame integrates correctly with follow-on trades. SFS is well suited to multi-storey commercial and residential buildings where speed and consistency are important.",
    ],
    points: [
      "Structural and non-structural SFS design and erection",
      "New build and refurbishment experience",
      "Design coordination and interface with cladding and MEP",
    ],
  },
  {
    id: "facades",
    title: "Facades",
    summary:
      "Facade design, supply and installation. Curtain walling, cladding and external envelope solutions for commercial and residential developments.",
    image: SERVICE_IMAGES[4],
    content: [
      "We deliver facade solutions including curtain walling, cladding and external envelope systems for commercial and residential developments. Our scope covers design support, supply and installation so the building's weather performance, thermal behaviour and appearance meet the project brief.",
      "We work with unitised and stick curtain wall, rainscreen cladding and other envelope systems, and we coordinate with structural and MEP interfaces. Whether the facade is predominantly glazed or clad, we aim for a robust, buildable solution that meets design intent and regulatory requirements.",
    ],
    points: [
      "Curtain walling, cladding and external envelope systems",
      "Design support, supply and installation",
      "Thermal and weather performance to specification",
    ],
  },
  {
    id: "specialist-fit-out",
    title: "Specialist fit-out items",
    summary:
      "Bespoke fit-out and joinery for commercial and high-spec interiors. From reception areas to feature walls, we deliver tailored solutions to specification.",
    image: SERVICE_IMAGES[5],
    content: [
      "Our specialist fit-out and joinery service covers bespoke elements for commercial and high-spec interiors—reception desks, feature walls, panelling, bulkheads and other made-to-order items. We work from your design or specification to produce tailored solutions that align with the overall interior package.",
      "We manage design development, material selection, manufacture and installation, and we coordinate with base build and other fit-out trades. The result is a cohesive interior where specialist items are delivered to the right quality and programme.",
    ],
    points: [
      "Bespoke joinery and fit-out to design or specification",
      "Reception areas, feature walls, panelling and bulkheads",
      "Design, manufacture and installation coordinated with other trades",
    ],
  },
];

function DecoratedDivider() {
  return (
    <div className="relative w-full py-8 lg:py-10" aria-hidden>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center">
          {/* Two parallel rules – primary above, secondary below */}
          <div className="absolute inset-x-0 flex flex-col items-center gap-1.5">
            <span className="h-px w-full max-w-xl rounded-full bg-primary" />
            <span className="h-px w-full max-w-xl rounded-full bg-secondary" />
          </div>
          {/* Center: primary circle with secondary inner dot */}
          <span className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-white">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          </span>
        </div>
      </div>
    </div>
  );
}

function ExpandedServiceSection({
  service,
  imageOnLeft,
  index,
}: {
  service: (typeof EXPANDED_SERVICES)[0];
  imageOnLeft: boolean;
  index: number;
}) {
  return (
    <section
      id={service.id}
      className="scroll-mt-24 relative w-full py-10 lg:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-200/80">
          {/* Image block */}
          <div className={imageOnLeft ? "lg:order-1" : "lg:order-2"}>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[240px] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" aria-hidden />
              <span
                className="absolute top-4 left-4 flex h-9 w-9 items-center justify-center rounded-lg bg-white/95 text-sm font-bold text-gray-800 shadow-md backdrop-blur-sm"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Content block – card body */}
          <div className={`flex flex-col p-6 sm:p-8 lg:p-10 bg-tertiary ${imageOnLeft ? "lg:order-2" : "lg:order-1"} border-l-0 lg:border-l-4 lg:border-l-primary/30 ${!imageOnLeft ? "lg:border-l-0 lg:border-r-4 lg:border-r-primary/30" : ""}`}>
            <span className="inline-block px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider text-primary bg-primary/15 border border-primary/30 w-fit mb-3">
              Service detail
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2">
              {service.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
              {service.summary}
            </p>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              Key points
            </p>
            <ul className="space-y-2 mb-6">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2.5 text-gray-300 text-sm sm:text-base">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-gray-600/50">
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {service.content[0]}
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-100 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-tertiary"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function ServicesQuickNav() {
  return (
    <nav
      className="sticky top-24 z-20 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm py-3 shadow-sm"
      aria-label="Services on this page"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2 sm:gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mr-2 sm:mr-0">
            On this page
          </span>
          {EXPANDED_SERVICES.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
            >
              <ArrowUpRight className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
              {service.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

const Services = () => {
  return (
    <div className="relative bg-gray-50">
      <PageHero
        variant="dark"
        title="Our services"
        description="Drylining, partitioning, and fit-out solutions for commercial and residential projects."
        imageUrl={HERO_IMAGE}
        imageAlt="Drylining and interior construction"
      />

      <ServicesQuickNav />

      {/* Section intro */}
      <section className="relative w-full py-12 lg:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What we offer
            </span>
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="block w-12 h-0.5 bg-primary rounded-full" />
              <span className="block w-6 h-0.5 bg-secondary rounded-full" />
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            From drywall and partitioning to suspended ceilings, SFS, facades and specialist fit-out—we deliver end-to-end solutions for commercial and residential projects.
          </p>
        </div>
      </section>

      {/* Expanded service sections */}
      {EXPANDED_SERVICES.map((service, index) => (
        <div key={service.id}>
          <ExpandedServiceSection
            service={service}
            imageOnLeft={index % 2 === 0}
            index={index}
          />
          {index < EXPANDED_SERVICES.length - 1 && <DecoratedDivider />}
        </div>
      ))}
    </div>
  );
};

export default Services;
