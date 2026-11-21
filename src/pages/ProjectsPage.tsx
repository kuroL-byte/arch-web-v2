import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CLIENTS, PROJECTS, type ProjectItem } from "../data/siteContent";
import type { PageId } from "../types/navigation";

interface ProjectsPageProps {
  selectedSector: string;
  onSectorChange: (sector: string) => void;
  onNavigate: (page: PageId, sector?: string) => void;
  onSelectProject: (p: ProjectItem) => void;
}

export function ProjectsPage({
  selectedSector,
  onSectorChange,
  onNavigate,
  onSelectProject,
}: ProjectsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSectorSelect = (sectorId: string) => {
    onSectorChange(sectorId);
  };

  const sectorsList = [
    { id: "ALL", label: "All Projects", count: PROJECTS.length },
    {
      id: "INDUSTRIAL",
      label: "Industrial",
      count: PROJECTS.filter((p) => p.sector === "INDUSTRIAL").length,
    },
    {
      id: "COMMERCIAL",
      label: "Commercial",
      count: PROJECTS.filter((p) => p.sector === "COMMERCIAL").length,
    },
    {
      id: "INSTITUTIONAL",
      label: "Architecture",
      count: PROJECTS.filter((p) => p.sector === "INSTITUTIONAL").length,
    },
    {
      id: "WORKPLACE & RETAIL",
      label: "Interiors & Workplace",
      count: PROJECTS.filter((p) => p.sector === "WORKPLACE & RETAIL").length,
    },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesSector = selectedSector === "ALL" || p.sector === selectedSector;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      q === "" ||
      p.name.toLowerCase().includes(q) ||
      p.scope.toLowerCase().includes(q) ||
      p.type.toLowerCase().includes(q) ||
      (p.location && p.location.toLowerCase().includes(q));
    return matchesSector && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans pt-28">
      {/* Page Hero Header & Filters */}
      <section className="relative pb-10 bg-white">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16 pt-6">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-brand-600 mb-3">
            Project Portfolio & Gallery
          </div>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4 uppercase">
              DELIVERED PROJECTS & REFERENCES
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Browse our complete project portfolio across industrial manufacturing complexes, PEB structures, corporate offices, and bespoke interiors. Click any project to explore its full high-resolution photographic gallery.
            </p>
          </div>

          {/* Filter and Search Bar */}
          <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {sectorsList.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleSectorSelect(sec.id)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold whitespace-nowrap transition-all border ${
                    selectedSector === sec.id
                      ? "bg-brand-500 text-white border-brand-500 shadow-md shadow-brand-500/20"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {sec.label} <span className="opacity-75 ml-1">({sec.count})</span>
                </button>
              ))}
            </div>

            <div className="relative min-w-[260px]">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Large Project Gallery Grid with Left/Right Margin */}
      <section className="bg-white text-slate-900 pb-20">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center bg-slate-50 rounded-2xl border border-slate-200">
              <svg
                className="w-12 h-12 mx-auto text-slate-400 mb-4 stroke-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
                No matching projects found
              </h3>
              <p className="text-xs text-slate-500">
                Try adjusting your filter or search query.
              </p>
              <button
                onClick={() => {
                  handleSectorSelect("ALL");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-brand-500 text-white rounded-lg text-xs font-semibold hover:bg-brand-600 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {filteredProjects.map((project) => {
                const coverImage =
                  project.images && project.images.length > 0
                    ? project.images[0]
                    : "/images/projects/croda-chemicals-01.webp";
                return (
                  <article
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="group cursor-pointer flex flex-col bg-white"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={coverImage}
                        alt={project.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/commercial-interior.jpeg";
                        }}
                      />
                    </div>

                    <div className="px-4 py-3.5 flex items-center justify-between gap-4 bg-white">
                      <div className="min-w-0">
                        <h2 className="font-display font-semibold text-slate-800 text-xs sm:text-sm truncate group-hover:text-brand-600 transition-colors">
                          {project.name}
                        </h2>
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">
                          {project.location ? `${project.location}, ` : ""}
                          {project.scope}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-slate-50 text-slate-900 border-t border-b border-slate-200">
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-mono text-xs font-semibold text-brand-600 uppercase tracking-widest">
                Experience Across Leading Organisations
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-2 uppercase">
                Trusted by
              </h2>
            </div>
            <button
              onClick={() => onNavigate("contact")}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-brand-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all self-start md:self-auto"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {CLIENTS.map((c, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500 italic mt-5">
            *Client names and references published following standard engagement confirmation protocols.
          </p>
        </div>
      </section>
    </div>
  );
}
