import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
} from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [index, setIndex] = useState(0);
  const [shownSlug, setShownSlug] = useState(project?.slug);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const imageCount = project?.images.length ?? 0;

  // Restart the slideshow whenever a different project is opened.
  if (project?.slug !== shownSlug) {
    setShownSlug(project?.slug);
    setIndex(0);
  }

  const goTo = useCallback(
    (next: number) => {
      if (imageCount === 0) return;
      setIndex(((next % imageCount) + imageCount) % imageCount);
    },
    [imageCount],
  );

  // Lock background scrolling and return focus to the trigger on close.
  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [project]);

  // Keyboard: escape to close, arrows to move through the slideshow, tab trapped.
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(index - 1);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(index + 1);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, index, goTo, onClose]);

  if (!project) return null;

  const details = [
    project.developer && { label: "Developer", value: project.developer },
    project.mainContractor && {
      label: "Main contractor",
      value: project.mainContractor,
    },
    { label: "Package contractor", value: project.packageContractor },
    { label: "Berra's scope", value: project.scope.join(" & ") },
  ].filter(Boolean) as { label: string; value: string }[];

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 backdrop-blur-sm p-3 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative flex w-full max-w-6xl max-h-[92vh] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl lg:h-[80vh] lg:min-h-[540px] lg:flex-row"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-lg border-0 bg-tertiary/90 p-0 text-white shadow-lg backdrop-blur-sm transition-colors duration-200 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Slideshow */}
        <div className="flex shrink-0 flex-col bg-tertiary lg:w-[58%] lg:shrink">
          <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:flex-1">
            <img
              key={project.images[index]}
              src={project.images[index]}
              alt={`${project.title} – image ${index + 1} of ${imageCount}`}
              className="absolute inset-0 h-full w-full object-contain"
            />

            {imageCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goTo(index - 1)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-black/50 p-0 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-tertiary"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo(index + 1)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-black/50 p-0 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-tertiary"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <span
                  className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                  aria-live="polite"
                >
                  {index + 1} / {imageCount}
                </span>
              </>
            )}
          </div>

          {imageCount > 1 && (
            <div className="flex gap-2 overflow-x-auto border-t border-white/10 p-3">
              {project.images.map((image, i) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === index}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-md border-0 p-0 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-tertiary ${
                    i === index
                      ? "ring-2 ring-secondary"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:w-[42%]">
          <span className="inline-flex items-center rounded-md bg-primary/15 border border-primary/30 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            {project.category}
          </span>

          <h2
            id="project-modal-title"
            className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
          >
            {project.title}
          </h2>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm font-medium text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              {project.location}
            </span>
            <span className="h-3.5 w-px bg-gray-300" aria-hidden />
            <span>{project.years}</span>
          </div>

          <div className="mt-4 flex items-center gap-1.5" aria-hidden>
            <span className="block h-0.5 w-12 rounded-full bg-primary" />
            <span className="block h-0.5 w-6 rounded-full bg-secondary" />
          </div>

          <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-gray-200 bg-gray-200 sm:grid-cols-2">
            {details.map((detail) => (
              <div key={detail.label} className="bg-white p-4">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  {detail.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Project overview
          </h3>
          <div className="mt-3 space-y-3">
            {project.overview.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[15px] leading-relaxed text-gray-600"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {project.keyWorks && (
            <>
              <h3 className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Key works
              </h3>
              <ul className="mt-3 space-y-2">
                {project.keyWorks.map((work) => (
                  <li
                    key={work}
                    className="flex items-start gap-2.5 text-[15px] text-gray-600"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{work}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="mt-8 border-t border-gray-200 pt-6">
            <Link
              to="/contact"
              onClick={onClose}
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Discuss a similar project
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
