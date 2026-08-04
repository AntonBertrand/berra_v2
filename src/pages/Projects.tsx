import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { CTASection } from "../components/CTASection";
import { PROJECTS, type Project } from "../data/projects";
import HERO_IMAGE from "../assets/hero-img.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="relative bg-gray-50">
      <PageHero
        variant="dark"
        title="Our projects"
        description="Drylining, SFS and partitioning packages delivered for the UK's leading main contractors."
        imageUrl={HERO_IMAGE}
        imageAlt="Drylining and interior construction"
      />

      {/* Intro */}
      <section className="relative w-full py-12 lg:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Track record
              </span>
              <div className="flex items-center gap-1.5" aria-hidden>
                <span className="block w-12 h-0.5 bg-primary rounded-full" />
                <span className="block w-6 h-0.5 bg-secondary rounded-full" />
              </div>
            </div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              From landmark residential towers to healthcare, education and
              specialist conservation facilities, every project below was
              delivered safely, accurately and to programme. Select a project to
              see the detail and photography from site.
            </p>
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="relative w-full py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                onOpen={setActiveProject}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};

export default Projects;
