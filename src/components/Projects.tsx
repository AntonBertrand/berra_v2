import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import IMAGE_1 from "../assets/img-1.jpg";
import IMAGE_2 from "../assets/img-2.jpg";
import IMAGE_3 from "../assets/img-3.jpg";

const PROJECTS = [
  {
    title: "Office Development",
    category: "Commercial",
    description:
      "Full drylining and partitioning package for a multi-storey office scheme.",
    image: IMAGE_1,
  },
  {
    title: "Mixed-Use Scheme",
    category: "Retail & Residential",
    description:
      "Interior systems and suspended ceilings across retail and residential units.",
    image: IMAGE_2,
  },
  {
    title: "Infrastructure Project",
    category: "Large-scale",
    description:
      "Steel framed systems and facades for a major infrastructure development.",
    image: IMAGE_3,
  },
];

export function Projects() {
  return (
    <section
      className="relative w-full py-20 lg:py-28 bg-gray-50"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header – aligned with Services & About */}
        <header className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="flex flex-col items-center gap-3 mb-4">
            <span
              id="projects-heading-label"
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary"
            >
              Past work
            </span>
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="block w-12 h-0.5 bg-primary rounded-full" />
              <span className="block w-6 h-0.5 bg-secondary rounded-full" />
            </div>
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-4"
          >
            Our projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            A selection of commercial drylining and fit-out projects we have
            delivered.
          </p>
        </header>

        {/* Project cards – consistent with Services card treatment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <article
              key={index}
              className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-gray-50"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-hidden
                />
                <span
                  className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-sm font-semibold text-tertiary shadow-sm"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="relative flex flex-1 flex-col p-6 sm:p-7 bg-tertiary border-l-4 border-secondary">
                <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-[15px] leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-tertiary rounded-md py-1 -ml-1 transition-colors duration-200"
                >
                  <span>View project</span>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA – aligned with About & Hero */}
        <div className="mt-12 lg:mt-14 text-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-100 text-white px-8 py-3.5 sm:py-4 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-50 shadow-lg hover:shadow-primary/25"
          >
            View all projects
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
