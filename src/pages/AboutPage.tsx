import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  CLIENTS,
  DELIVERY_CONTROLS,
  METHODOLOGY_STEPS,
  STATS,
} from "../data/siteContent";
import type { PageId } from "../types/navigation";

interface AboutPageProps {
  onNavigate: (page: PageId, sector?: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pt-28">
      {/* Dark Architectural Intro */}
      <section className="relative py-12 sm:py-16 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
            <div className="lg:col-span-7">
              <span className="font-mono text-xs font-semibold text-brand-400 uppercase tracking-widest">
                ABOUT ARCHEMIST · SINCE 2014
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3 leading-tight uppercase">
                A SINGLE POINT OF ACCOUNTABILITY FOR YOUR CAPITAL PROJECTS
              </h1>
            </div>
            <div className="lg:col-span-5 text-slate-300 text-base leading-relaxed">
              Founded in 2014, ARCHEMIST brings architectural vision and engineering rigor together under one roof. We eliminate gaps between design and execution, delivering industrial facilities and commercial campuses on time and within budget across India.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-10 border-t border-slate-800">
            {STATS.map((s, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-display text-4xl sm:text-5xl font-bold text-brand-500 mb-2">
                  {s.value}
                </div>
                <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach / 4-Step Methodology */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-semibold text-brand-500 uppercase tracking-widest">
              Foresight in Planning
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-2 uppercase">
              HOW WE APPROACH EVERY ENGAGEMENT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((step) => (
              <div
                key={step.no}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 hover:bg-white hover:border-brand-500/60 hover:shadow-lg transition-all duration-300"
              >
                <div className="font-mono text-xs font-bold text-brand-500 uppercase mb-3">
                  {step.no} · {step.verb}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 uppercase mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Discipline & Leadership */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-semibold text-brand-500 uppercase tracking-widest">
                Six Controls. One Delivery Discipline.
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6 uppercase">
                DELIVERY DISCIPLINE
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {DELIVERY_CONTROLS.map((ctrl, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold tracking-wider text-center shadow"
                  >
                    {ctrl}
                  </div>
                ))}
              </div>
              <div className="space-y-2.5 text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span>
                    Compliance with National Building Code of India (NBC), Bureau of Indian Standards (BIS), and MIDC / CIDCO / PMC regulations.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span>
                    ISO-aligned onsite construction safety benchmarks and milestone-driven quality assurance.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <div className="font-mono text-xs font-semibold text-brand-500 uppercase tracking-widest mb-4">
                Leadership Vision
              </div>
              <blockquote className="text-slate-700 text-lg sm:text-xl leading-relaxed mb-8 italic">
                "ARCHEMIST was founded with the objective of bringing design, technical expertise and project execution closer together. Better foresight creates better projects."
              </blockquote>
              <div className="pt-6 border-t border-slate-100">
                <div className="font-display font-bold text-slate-900 text-lg">
                  AR. JAYESH KULKARNI
                </div>
                <div className="font-mono text-xs text-brand-500 font-semibold uppercase mt-0.5">
                  Founder & Managing Director
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Organisations & Next Steps */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-mono text-xs font-semibold text-brand-400 uppercase tracking-widest">
                Trusted By Industry Leaders
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2 uppercase">
                Organisations We Have Partnered With
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate("projects", "ALL")}
                className="px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {CLIENTS.map((c, i) => (
              <span
                key={i}
                className="px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
