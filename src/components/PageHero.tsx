interface PageHeroProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  /** Light variant: white overlay and black text (e.g. like Home hero) */
  variant?: "dark" | "light";
}

export function PageHero({
  title,
  description,
  imageUrl = "https://images.unsplash.com/photo-1598880513655-d1c6d4b2dfbf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageAlt = "Hero background",
  variant = "dark",
}: PageHeroProps) {
  const isLight = variant === "light";

  return (
    <section
      className={`relative ${isLight ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        {isLight ? (
          /* White overlay – similar to Home hero */
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/30 pointer-events-none"
            aria-hidden
          />
        ) : (
          /* Dark gradient - darker at top for header visibility, lighter at bottom */
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/85 to-black/70" />
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-20 sm:pb-20 lg:py-24 xl:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight sm:leading-normal ${isLight ? "text-gray-900 font-bold" : ""}`}
          >
            {title}
          </h1>
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 px-2 sm:px-0 ${isLight ? "text-gray-900 font-semibold [text-shadow:0_1px_3px_rgba(255,255,255,0.8)]" : "text-blue-100"}`}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
