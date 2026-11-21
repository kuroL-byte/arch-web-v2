import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Cpu,
  Layers,
  ShieldCheck,
  Sun,
  Wrench,
} from "lucide-react";
import type { HighlightIconType, ProjectItem } from "../data/siteContent";
import type { PageId } from "../types/navigation";
import { ArchemistLogo } from "../components/ArchemistLogo";
import { SketchUpBackground } from "../components/SketchUpBackground";
import { LandscapePhotoViewer } from "../components/LandscapePhotoViewer";

interface ProjectDetailPageProps {
  project: ProjectItem;
  onNavigate: (page: PageId, sector?: string) => void;
}

type DetailViewMode = "overview" | "gallery";

function HighlightIcon({ type }: { type: HighlightIconType }) {
  switch (type) {
    case "spatial":
      return <Compass className="w-4 h-4" />;
    case "material":
      return <Layers className="w-4 h-4" />;
    case "climate":
      return <Sun className="w-4 h-4" />;
    case "engineering":
      return <ShieldCheck className="w-4 h-4" />;
    case "mep":
      return <Cpu className="w-4 h-4" />;
    case "turnkey":
      return <Wrench className="w-4 h-4" />;
  }
}

export function ProjectDetailPage({ project, onNavigate }: ProjectDetailPageProps) {
  const [activeView, setActiveView] = useState<DetailViewMode>("overview");
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const photos =
    project.photos && project.photos.length > 0
      ? project.photos
      : ["/commercial-interior.jpeg"];

  const heroStripPhotos = photos.slice(0, 6);

  const openPhotoGalleryView = () => {
    setActiveView("gallery");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openOverviewView = () => {
    setActiveView("overview");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111827] font-inter">
      {/* Full-Screen Minimal Landscape Photo Viewer */}
      <LandscapePhotoViewer
        key={viewerIndex ?? "closed"}
        photos={photos}
        initialIndex={viewerIndex}
        altPrefix={project.name}
        onClose={() => setViewerIndex(null)}
      />

      {/* Sticky Translucent White Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 h-16 sm:h-[72px] flex items-center justify-between gap-4">
          {/* Left: ARCHEMIST Brand Mark + Subtitle */}
          <a
            href="/"
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
              e.preventDefault();
              onNavigate("home");
            }}
            className="flex items-center gap-3 group shrink-0"
            aria-label="ARCHEMIST - Home"
          >
            <ArchemistLogo variant="light" className="h-8 sm:h-9" />
            <span className="hidden xl:inline-block h-5 w-px bg-neutral-200" aria-hidden="true" />
            <span className="hidden xl:inline-block text-[11px] font-medium tracking-wide text-[#6B7280]">
              Architecture &amp; Interiors
            </span>
          </a>

          {/* Center (Desktop): Dynamic Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="hidden lg:flex items-center gap-2 text-xs text-[#6B7280] min-w-0"
          >
            <button
              type="button"
              onClick={() => onNavigate("projects", "ALL")}
              className="hover:text-[#111827] transition-colors font-medium shrink-0"
            >
              Projects
            </button>
            <span className="text-neutral-300">/</span>
            <button
              type="button"
              onClick={() => onNavigate("projects", project.sector)}
              className="hover:text-[#111827] transition-colors truncate max-w-[180px]"
            >
              {project.category}
            </button>
            <span className="text-neutral-300">/</span>
            <span className="text-[#111827] font-semibold truncate max-w-[240px]">
              {project.name}
            </span>
          </nav>

          {/* Right: Segmented View Switcher Pill */}
          <div
            role="tablist"
            aria-label="Project view switcher"
            className="inline-flex items-center p-1 rounded-full bg-neutral-100 border border-neutral-200/80 shrink-0"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeView === "overview"}
              onClick={openOverviewView}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all font-jakarta ${
                activeView === "overview"
                  ? "bg-white text-[#111827] shadow-sm"
                  : "text-[#6B7280] hover:text-[#111827]"
              }`}
            >
              Project Overview
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeView === "gallery"}
              onClick={openPhotoGalleryView}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all inline-flex items-center gap-2 font-jakarta ${
                activeView === "gallery"
                  ? "bg-white text-[#111827] shadow-sm"
                  : "text-[#6B7280] hover:text-[#111827]"
              }`}
            >
              <span>Photo Gallery</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F7EFEA] text-[#B4654A] leading-none">
                {photos.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      {activeView === "overview" ? (
        /* VIEW 1: PROJECT OVERVIEW */
        <>
          {/* A. Top Horizontal Hero Photo Strip */}
          <section className="bg-white border-b border-neutral-200/80">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6 sm:py-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {heroStripPhotos.map((src, idx) => (
                  <button
                    key={`${project.slug}-hero-${idx}`}
                    type="button"
                    onClick={() => setViewerIndex(idx)}
                    aria-label={`View photograph ${idx + 1} of ${project.name}`}
                    className="group relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-[#B4654A]/60"
                  >
                    <img
                      src={src}
                      alt={`${project.name} view ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/commercial-interior.jpeg";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* B. Two-Column Project Details Section with Faded SketchUp Background */}
          <section className="relative overflow-hidden bg-[#FAFAFA] py-16 sm:py-24">
            <SketchUpBackground />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column: Sticky Dossier Sidebar */}
                <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#B4654A] font-jakarta">
                      01 / PROJECT DOSSIER
                    </div>
                    <h2 className="font-jakarta text-2xl sm:text-3xl font-bold text-[#111827] mt-2 tracking-tight">
                      Project details
                    </h2>
                    <p className="text-sm text-[#6B7280] mt-2 leading-relaxed">
                      Architectural brief, delivery parameters, and curated design highlights for this commission.
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-4 pt-2">
                    <button
                      type="button"
                      onClick={openPhotoGalleryView}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#111827] hover:bg-[#B4654A] text-white text-xs sm:text-sm font-semibold font-jakarta tracking-wide inline-flex items-center justify-center gap-2.5 transition-colors shadow-sm"
                    >
                      <span>View All {photos.length} Photos</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onNavigate("projects", "ALL")}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#6B7280] hover:text-[#111827] transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back to Portfolio</span>
                    </button>
                  </div>

                  <div className="pt-6 border-t border-neutral-200/90 space-y-1.5 text-xs text-[#6B7280]">
                    {project.refCode && (
                      <div className="flex items-center justify-between gap-4">
                        <span className="uppercase tracking-wider text-[11px]">Ref. Code</span>
                        <span className="font-mono font-medium text-[#111827]">
                          {project.refCode}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center justify-between gap-4">
                      <span className="uppercase tracking-wider text-[11px]">Practice</span>
                      <span className="font-medium text-[#111827]">Archemist Studio</span>
                    </div>
                  </div>
                </aside>

                {/* Right Column: Project Narrative & Specs */}
                <div className="lg:col-span-8 space-y-10">
                  <div>
                    <h1 className="font-jakarta text-3xl sm:text-5xl font-bold text-[#111827] tracking-tight leading-[1.12]">
                      {project.name}
                    </h1>

                    {/* Light Gray Tags Bar */}
                    <div className="mt-6 bg-[#F4F4F5] rounded-xl px-5 py-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="font-jakarta text-xs font-bold text-[#111827] tracking-wide shrink-0">
                        Tags :
                      </span>
                      <span className="hidden sm:inline-block h-4 w-px bg-neutral-300 shrink-0" aria-hidden="true" />
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs sm:text-sm italic text-[#6B7280]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Short Thick Dark Horizontal Accent Divider */}
                    <div className="w-12 h-1 bg-neutral-900 rounded-full mt-8" />
                  </div>

                  {/* Clean Uppercase Metadata Grid (ONLY Client, Status, Location) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-y border-neutral-200/80">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280] mb-1">
                        CLIENT
                      </div>
                      <div className="font-jakarta text-sm sm:text-base font-bold uppercase text-[#111827]">
                        {project.client}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280] mb-1">
                        STATUS
                      </div>
                      <div className="inline-flex items-center gap-2 font-jakarta text-sm sm:text-base font-bold uppercase text-[#111827]">
                        <span className="relative flex h-2.5 w-2.5">
                          <span
                            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                              project.status === "COMPLETED" ? "bg-emerald-400" : "bg-amber-400"
                            }`}
                          />
                          <span
                            className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                              project.status === "COMPLETED" ? "bg-emerald-500" : "bg-amber-500"
                            }`}
                          />
                        </span>
                        <span>{project.status}</span>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B7280] mb-1">
                        LOCATION
                      </div>
                      <div className="font-jakarta text-sm sm:text-base font-bold uppercase text-[#111827]">
                        {project.location}
                      </div>
                    </div>
                  </div>

                  {/* Client Requirement & Design Brief */}
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="font-jakarta text-xl sm:text-2xl font-bold text-[#111827]">
                        Client Requirement &amp; Design Brief
                      </h2>
                      <span className="px-2.5 py-1 rounded-full bg-[#F7EFEA] text-[#B4654A] text-[10px] font-bold uppercase tracking-wider font-jakarta">
                        BRIEF SUMMARY
                      </span>
                    </div>

                    <blockquote className="border-l-4 border-[#B4654A] bg-[#F7EFEA]/60 px-5 py-4 rounded-r-xl text-[#111827] text-sm sm:text-base font-medium leading-relaxed">
                      {project.briefQuote}
                    </blockquote>

                    <div className="space-y-4 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                      {project.briefDescription.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>

                  {/* Key Design Highlights */}
                  <div className="space-y-5 pt-2">
                    <h2 className="font-jakarta text-xl sm:text-2xl font-bold text-[#111827]">
                      Key Design Highlights
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {project.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="rounded-2xl bg-white border border-neutral-200/90 p-5 shadow-sm flex flex-col gap-3"
                        >
                          <div className="w-9 h-9 rounded-xl bg-[#F7EFEA] text-[#B4654A] flex items-center justify-center shrink-0">
                            <HighlightIcon type={item.iconType} />
                          </div>
                          <div>
                            <h3 className="font-jakarta text-sm font-bold text-[#111827] mb-1.5">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-[13px] text-[#6B7280] leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* VIEW 2: DEDICATED FULL-PAGE PHOTO GALLERY */
        <section className="bg-[#FAFAFA] py-10 sm:py-14 min-h-[calc(100vh-72px)]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 space-y-8">
            {/* Gallery Sub-Header */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={openOverviewView}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7EFEA] text-[#B4654A] hover:bg-[#B4654A] hover:text-white text-xs font-semibold font-jakarta transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Project Details</span>
                </button>

                <div>
                  <h1 className="font-jakarta text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                    {project.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-[#6B7280] mt-0.5">
                    {project.category} · {project.location}
                  </p>
                </div>
              </div>

              <span className="self-start sm:self-center px-3.5 py-1.5 rounded-full bg-[#F7EFEA] text-[#B4654A] text-xs font-bold font-jakarta whitespace-nowrap">
                {photos.length} {photos.length === 1 ? "Photograph" : "Photographs"}
              </span>
            </div>

            {/* Pure Photo Grid (Landscape Cards, Zero Text/Captions/Badges) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((src, idx) => (
                <button
                  key={`${project.slug}-gallery-${idx}`}
                  type="button"
                  onClick={() => setViewerIndex(idx)}
                  aria-label={`Open photograph ${idx + 1} of ${project.name}`}
                  className="group relative w-full aspect-[16/11] rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B4654A]/60"
                >
                  <img
                    src={src}
                    alt={`${project.name} photograph ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/commercial-interior.jpeg";
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Bottom Footer Bar */}
            <div className="bg-white rounded-2xl border border-neutral-200/80 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-[#6B7280]">
                Showing all {photos.length} curated {photos.length === 1 ? "photograph" : "photographs"} for{" "}
                <span className="font-semibold text-[#111827]">{project.name}</span>.
              </p>

              <button
                type="button"
                onClick={openOverviewView}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] hover:bg-[#B4654A] text-white text-xs font-semibold font-jakarta transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Project Overview</span>
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
