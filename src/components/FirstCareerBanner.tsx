"use client";

import React from "react";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";

interface FirstCareerBannerProps {
  onApply: () => void;
}

export default function FirstCareerBanner({ onApply }: FirstCareerBannerProps) {
  return (
    <section id="first-career-banner" className="scroll-mt-24 w-full bg-gradient-to-r from-[#0B192C] via-slate-900 to-[#00A86B]/95 text-white py-12 sm:py-16 relative overflow-hidden border-y border-slate-800/80 shadow-lg">
      
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Content Block */}
        <div className="space-y-4 max-w-3xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAREER PROGRAM &bull; REAL WORK EXPERIENCE</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              First Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Program</span>
            </h2>

            <p className="text-lg sm:text-xl font-bold text-emerald-400/90 tracking-wide">
              6&ndash;12 Months | Real Work Environment
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
            Gain hands-on experience, work on real projects, and take the first step in your professional journey.
          </p>
        </div>

        {/* Right Action Button Column */}
        <div className="shrink-0 flex flex-col items-center lg:items-end gap-2">
          <button
            onClick={onApply}
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-extrabold text-white bg-gradient-to-r from-[#00A86B] to-emerald-600 hover:from-emerald-500 hover:to-teal-500 rounded-2xl shadow-xl hover:shadow-emerald-900/50 transition-all transform hover:-translate-y-0.5 active:scale-98 group cursor-pointer border border-emerald-400/30"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-xs text-slate-300/90 font-medium tracking-wide text-center lg:text-right">
            Turn your learning into real experience
          </span>
        </div>

      </div>
    </section>
  );
}
