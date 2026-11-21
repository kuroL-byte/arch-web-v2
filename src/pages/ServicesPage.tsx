import { ArrowRight, ShieldCheck } from "lucide-react";
import { CAPABILITIES, SECTORS } from "../data/siteContent";
import type { PageId } from "../types/navigation";
import { SectorIcon } from "../components/SectorIcon";

interface ServicesPageProps {
  onNavigate: (page: PageId, sector?: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const statutoryServices = [
    "National Building Code (NBC) & Bureau of Indian Standards (BIS) Compliance",
    "MIDC, CIDCO & Municipal (PMC) Liaisoning & Approvals",
    "Factory Inspector & Industrial Safety Clearances",
    "Fire Department NOCs & Environmental Consents",
    "Ongoing Technical Maintenance & Asset Support",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pt-28">
      {/* Page Header */}
      <section className="relative py-12 sm:py-16 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-4">
            Services & Delivery Capabilities
          </div>
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 uppercase">
              END-TO-END ARCHITECTURE, ENGINEERING & TURNKEY EPC
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              One integrated team spanning concept architecture, structural & MEP engineering, EPC execution, and single-window turnkey handover across industrial, commercial, and institutional infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Four Capabilities */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="font-mono text-xs font-semibold text-brand-500 uppercase tracking-widest">
              One Integrated Team, Four Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-2 uppercase">
              CORE PRACTICE AREAS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.no}
                className="group relative rounded-2xl border border-slate-200 bg-slate-50 p-7 hover:bg-white hover:border-brand-500/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-10">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-500">
                    <span className="font-mono font-bold text-sm">{cap.no}</span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">{cap.no}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 uppercase tracking-wide mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-mono text-xs font-semibold text-brand-500 uppercase tracking-widest">
                Built Around Your Operations
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-2 uppercase">
                SECTORS WE SERVE
              </h2>
            </div>
            <button
              onClick={() => onNavigate("projects", "ALL")}
              className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-semibold"
            >
              <span>View all project sectors in gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((sec) => (
              <div
                key={sec.sectorKey}
                onClick={() => onNavigate("projects", sec.sectorKey)}
                className="group relative h-[440px] rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-end p-6 hover:border-brand-500/70 transition-all shadow-xl cursor-pointer"
              >
                <img
                  src={sec.image}
                  alt={sec.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-3">
                    <SectorIcon sectorKey={sec.sectorKey} />
                    <span className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded bg-white/10 text-white border border-white/15 backdrop-blur-md">
                      {sec.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {sec.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">{sec.desc}</p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-400 group-hover:text-brand-300 group-hover:translate-x-1 transition-all">
                    <span>Explore {sec.title} Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statutory Liaisoning & Turnkey CTA */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-brand-400 uppercase tracking-widest mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory & Lifecycle Coverage</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase mb-4">
                FROM STATUTORY APPROVALS TO HANDOVER & MAINTENANCE
              </h2>
              <ul className="space-y-2.5 text-sm text-slate-300">
                {statutoryServices.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center gap-4">
              <p className="text-sm text-slate-400 lg:text-right max-w-sm">
                Planning an industrial plant, PEB warehouse, or corporate fit-out? Share your requirements with our engineering team.
              </p>
              <button
                onClick={() => onNavigate("contact")}
                className="px-6 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-all shadow-lg shadow-brand-500/25 inline-flex items-center gap-2"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
