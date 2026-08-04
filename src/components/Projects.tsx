import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FEATURED_PROJECTS, type Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
            A selection of the residential, healthcare, education and specialist
            schemes we have delivered for the UK's leading contractors.
          </p>
        </header>

        {/* Project cards – consistent with Services card treatment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onOpen={setActiveProject}
            />
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

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
