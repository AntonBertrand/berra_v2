import { ArrowUpRight, Images, MapPin } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200/80 transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-gray-50">
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <img
          src={project.images[0]}
          alt={`${project.title}, ${project.location}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"
          aria-hidden
        />
        <span className="absolute top-4 left-4 inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-tertiary shadow-sm">
          {project.category}
        </span>
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-md bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          <Images className="h-3.5 w-3.5" aria-hidden />
          {project.images.length}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6 sm:p-7 bg-tertiary border-l-4 border-secondary">
        <div className="flex items-center gap-3 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
            {project.location}
          </span>
          <span className="h-3 w-px bg-gray-600" aria-hidden />
          <span>{project.years}</span>
        </div>

        <h3 className="text-xl font-bold tracking-tight text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 text-[15px] leading-relaxed flex-1 mb-4">
          {project.summary}
        </p>

        <ul className="flex flex-wrap gap-1.5 mb-5" aria-label="Berra's scope">
          {project.scope.map((item) => (
            <li
              key={item}
              className="rounded-md border border-primary/30 bg-primary/15 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary"
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-2 self-start text-primary font-semibold text-sm hover:text-primary-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-tertiary rounded-md py-1 px-1 -ml-1 transition-colors duration-200"
        >
          <span>View project</span>
          <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
}
