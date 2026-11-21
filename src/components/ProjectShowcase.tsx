import { useEffect, useState, type MouseEvent } from "react";
import type { ProjectItem } from "../data/siteContent";

export function ProjectCard({
  project,
  onSelect,
}: {
  project: ProjectItem;
  onSelect: (p: ProjectItem) => void;
}) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const images =
    project.images && project.images.length > 0
      ? project.images
      : ["/images/projects/croda-chemicals-01.webp"];
  const total = images.length;

  const nextPhoto = (e: MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % total);
  };

  const prevPhoto = (e: MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div
      onClick={() => onSelect(project)}
      className="group h-full rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:border-brand-500/50 transition-all duration-300 flex flex-col cursor-pointer"
    >
      <div className="h-60 overflow-hidden relative bg-[#0F172A] flex items-center justify-center select-none">
        <img
          key={images[photoIndex]}
          src={images[photoIndex]}
          alt={`${project.name} - Photo ${photoIndex + 1}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/commercial-interior.jpeg";
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 opacity-70 group-hover:opacity-90 transition-opacity" />

        <span className="absolute top-3 right-3 px-2.5 py-1 bg-slate-900/85 backdrop-blur-md text-white font-mono text-[10px] font-semibold rounded border border-white/10 shadow-sm z-10">
          {project.type}
        </span>

        {total > 1 && (
          <>
            <button
              onClick={prevPhoto}
              title="Previous photo"
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/70 hover:bg-brand-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10 shadow-lg"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextPhoto}
              title="Next photo"
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/70 hover:bg-brand-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-10 shadow-lg"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-slate-900/60 px-2 py-1 rounded-full backdrop-blur-sm">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === photoIndex ? "w-4 bg-brand-400" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-brand-500 text-white font-mono text-[10px] font-bold rounded shadow-lg uppercase tracking-wider">
            View All ({total})
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="font-display font-bold text-slate-900 text-lg group-hover:text-brand-600 transition-colors leading-snug mb-1">
            {project.name}
          </div>
          <div className="text-xs font-mono text-slate-500 mb-3">
            {project.location || "ARCHEMIST Portfolio Project"}
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700 mb-4">
            <span className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200/60">
              {project.scope}
            </span>
            {project.size && (
              <span className="px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200/60">
                {project.size}
              </span>
            )}
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-brand-600 font-semibold group-hover:translate-x-0.5 transition-transform">
          <span>Click to view photo gallery</span>
          <span className="font-mono text-[11px] text-slate-400">+{total} photos</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectItem | null;
  onClose: () => void;
}) {
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        setActivePhoto((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
      if (e.key === "ArrowRight") {
        setActivePhoto((prev) => (prev + 1) % project.images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const images = project.images;
  const currentImage = images[activePhoto] || images[0];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl animate-fade-in p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#090E1A] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-brand-500/20 border border-brand-500/40 text-brand-400 font-mono text-[11px] font-semibold uppercase">
              {project.type}
            </span>
            <div>
              <h2 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
                {project.name}
              </h2>
              <p className="text-xs font-mono text-slate-400">
                {project.scope} {project.location ? `· ${project.location}` : ""}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-slate-400 hidden sm:block">
              Photo {activePhoto + 1} of {images.length}
            </span>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-rose-500/20 hover:text-rose-400 text-slate-300 flex items-center justify-center transition-colors border border-slate-700"
              aria-label="Close dialog"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative flex-1 bg-black/60 min-h-[360px] sm:min-h-[480px] flex items-center justify-center overflow-hidden">
          <img
            key={currentImage}
            src={currentImage}
            alt={`${project.name} photo ${activePhoto + 1}`}
            decoding="async"
            className="max-h-[60vh] w-auto max-w-full object-contain select-none transition-all duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/commercial-interior.jpeg";
            }}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={() => setActivePhoto((prev) => (prev - 1 + images.length) % images.length)}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-brand-600 text-white flex items-center justify-center transition-all border border-slate-700 shadow-xl backdrop-blur-sm"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={() => setActivePhoto((prev) => (prev + 1) % images.length)}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-brand-600 text-white flex items-center justify-center transition-all border border-slate-700 shadow-xl backdrop-blur-sm"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          <div className="absolute bottom-3 left-4 px-3 py-1 bg-slate-950/70 backdrop-blur-md rounded-md border border-slate-800 text-white font-mono text-xs">
            {project.name} · {project.scope}
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  i === activePhoto
                    ? "border-brand-500 scale-105 shadow-md shadow-brand-500/20"
                    : "border-slate-800 opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img} alt={`Thumb ${i + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <div className="text-right sm:max-w-md">
            <p className="text-xs text-slate-400 line-clamp-2">
              {project.description || `${project.name} - Turnkey execution and delivery by ARCHEMIST.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectSlideshow({
  projects,
  onSelectProject,
  intervalMs = 4500,
}: {
  projects: ProjectItem[];
  onSelectProject: (p: ProjectItem) => void;
  intervalMs?: number;
}) {
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(projects.length - visible, 0);
  const activeIndex = index > maxIndex ? 0 : index;

  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const t = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, intervalMs);
    return () => clearInterval(t);
  }, [paused, maxIndex, intervalMs]);

  const prev = () => setIndex(activeIndex <= 0 ? maxIndex : activeIndex - 1);
  const next = () => setIndex(activeIndex >= maxIndex ? 0 : activeIndex + 1);
  const slideWidth = 100 / visible;
  const progress = maxIndex === 0 ? 100 : ((activeIndex + 1) / (maxIndex + 1)) * 100;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="overflow-hidden -mx-3">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * slideWidth}%)` }}
        >
          {projects.map((p) => (
            <div key={p.id} className="shrink-0 px-3" style={{ width: `${slideWidth}%` }}>
              <ProjectCard project={p} onSelect={onSelectProject} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 mt-10">
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous projects"
            className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:border-brand-500 hover:text-brand-500 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next projects"
            className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:border-brand-500 hover:text-brand-500 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="flex-1 max-w-md">
          <div className="h-[3px] w-full bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-500 transition-all duration-700 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="font-mono text-xs text-slate-500 whitespace-nowrap">
          <span className="text-slate-900 font-semibold">{String(activeIndex + 1).padStart(2, "0")}</span>
          {" / "}
          {String(projects.length).padStart(2, "0")}
        </div>
      </div>
    </div>
  );
}
