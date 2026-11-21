import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import {
  CAPABILITIES,
  MEDIA,
  METHODOLOGY_STEPS,
  STATS,
} from "../data/siteContent";
import type { PageId } from "../types/navigation";
import { ContactSection } from "../components/ContactSection";

interface HomePageProps {
  onNavigate: (page: PageId, sector?: string) => void;
}

const SERVICE_BAR_ITEMS = [
  { label: "Industrial", sector: "INDUSTRIAL" },
  { label: "Commercial", sector: "COMMERCIAL" },
  { label: "Residential", sector: "INSTITUTIONAL" },
  { label: "Workplace/Interior", sector: "WORKPLACE & RETAIL" },
];

export function HomePage({ onNavigate }: HomePageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="bg-slate-950 text-slate-900">
      {/* PART 1: Fullscreen Background Video Hero */}
      <section
        id="home-part-1"
        className="relative min-h-[94vh] flex items-center pt-36 pb-24 text-white overflow-hidden border-b border-slate-800"
      >
        <div className="absolute inset-0 z-0 overflow-hidden bg-brand-950">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={MEDIA.heroFallback}
            className="w-full h-full object-cover scale-105 filter brightness-[0.85] contrast-[1.05]"
          >
            <source src={MEDIA.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/65 to-brand-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/60" />
          <div className="absolute inset-0 blueprint-grid opacity-25 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-6">
              Architecture · Engineering · Project Delivery
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08] text-white mb-6 uppercase">
              Foresight in Planning.<br />
              <span className="text-brand-500 drop-shadow-md">Certainty in Delivery.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 font-normal leading-relaxed mb-10 max-w-2xl">
              Founded in 2014, ARCHEMIST is a turnkey architecture and engineering solutions provider, focused primarily on industrial and infrastructure projects across India.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15 backdrop-blur-sm bg-brand-950/30 p-4 rounded-xl">
              {METHODOLOGY_STEPS.map((step) => (
                <div key={step.no} className="flex flex-col">
                  <span className="font-mono text-xs text-brand-400 uppercase font-semibold">
                    {step.no} {step.verb}
                  </span>
                  <span className="font-display text-sm font-semibold text-white mt-1">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: About, Metrics, One Integrated Team / Four Capabilities, Services Bar & Projects Button */}
      <section id="home-part-2" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold text-brand-500 uppercase tracking-widest">
                ABOUT ARCHEMIST
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 mt-2 leading-tight">
                A SINGLE POINT OF ACCOUNTABILITY FOR YOUR CAPITAL PROJECTS
              </h2>
            </div>
            <div className="lg:col-span-5 text-slate-600 text-base leading-relaxed">
              ARCHEMIST brings architectural vision and engineering rigor together under one roof. We eliminate gaps between design and execution, delivering industrial facilities and commercial campuses on time and within budget.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-y border-slate-200 mb-16">
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-display text-4xl sm:text-5xl font-bold text-brand-500 mb-2">
                  {s.value}
                </div>
                <div className="font-mono text-xs text-slate-600 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-widest">
              One integrated team, four capabilities
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
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

          {/* 1) Services Interactive Bar */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 px-6 py-5 mb-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 shadow-sm">
            <button
              onClick={() => onNavigate("services")}
              className="font-display text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors flex items-center gap-2 shrink-0 text-left"
            >
              <span>Services :</span>
            </button>

            <span className="hidden sm:block h-5 w-px bg-slate-300 shrink-0" aria-hidden="true" />

            <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
              {SERVICE_BAR_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => onNavigate("services")}
                  className="text-sm italic text-slate-500 hover:text-brand-600 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => onNavigate("services")}
              className="sm:ml-auto inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 hover:text-brand-700 transition-colors shrink-0"
            >
              <span>All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2) Rearranged Projects Button */}
          <div>
            <div className="w-14 h-1 bg-slate-900 mb-6" />
            <button
              onClick={() => onNavigate("projects", "ALL")}
              className="px-7 py-4 rounded-lg bg-slate-900 hover:bg-brand-600 text-white font-display font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-brand-500/25 inline-flex items-center gap-3"
            >
              <span>Explore Project Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* PART 3: Contact Form & Office Location */}
      <ContactSection />
    </div>
  );
}
