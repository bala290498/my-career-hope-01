"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

interface HeroProps {
  onOpenVideo: () => void;
  onExplorePrograms: () => void;
}

export default function Hero({ onOpenVideo, onExplorePrograms }: HeroProps) {
  const learnerInitials = [
    { initials: "AK", name: "Ankit Kumar", bg: "bg-emerald-600" },
    { initials: "RS", name: "Riya Sharma", bg: "bg-teal-600" },
    { initials: "MP", name: "Manoj Patel", bg: "bg-sky-600" },
    { initials: "VK", name: "Vikram K", bg: "bg-indigo-600" },
    { initials: "SR", name: "Sneha Reddi", bg: "bg-purple-600" },
  ];

  return (
    <section id="home" className="scroll-mt-24 relative w-full min-h-[580px] lg:min-h-[640px] flex items-center pt-12 pb-20 bg-slate-950 text-white overflow-hidden">
      
      {/* Full Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/hero.webp"
          alt="MyCareerHope Hero Background"
          fill
          className="object-cover object-center opacity-95 sm:opacity-100 filter brightness-[1.05]"
          priority
        />
        {/* Reduced gradient overlay so hero image shines through brightly */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
      </div>

      {/* Top Right Corner Annotation: Real Projects, Real Experiences (Desktop / Tablet only) */}
      <div className="hidden sm:block absolute top-6 right-6 sm:top-8 sm:right-10 lg:top-8 lg:right-16 z-20 text-right pointer-events-none">
        <span className="font-handwriting text-3xl sm:text-4xl lg:text-5xl text-emerald-300 font-bold drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] block transform rotate-1">
          Real Projects,<br />Real Experiences
        </span>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline */}
            <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 uppercase tracking-widest backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00A86B] animate-pulse"></span>
              YOUR SKILLS. A BRIGHTER TOMORROW.
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] drop-shadow-md">
              Built for students<br />
              who want<br />
              <span className="text-[#00A86B]">real experiences.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed font-normal drop-shadow-sm">
              Live IT training from industry professionals, real-world projects, career mentorship, and dynamic group pricing that gets cheaper as more learners join.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-[#00A86B] hover:bg-[#008f5a] rounded-xl shadow-lg hover:shadow-emerald-900/30 transition-all transform active:scale-98"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenVideo}
                className="hidden sm:inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-bold text-white border-2 border-slate-600/80 hover:border-slate-400 bg-slate-900/60 hover:bg-slate-800/80 backdrop-blur-md rounded-xl transition-all shadow-md"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <div className="flex -space-x-2.5 overflow-hidden">
                {learnerInitials.map((item, i) => (
                  <div
                    key={i}
                    className={`inline-flex items-center justify-center h-10 w-10 rounded-full ring-2 ring-slate-950 ${item.bg} text-white font-extrabold text-xs shadow-md tracking-wider cursor-default`}
                    title={item.name}
                  >
                    {item.initials}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-slate-200 font-medium">
                  Join <span className="font-extrabold text-white">500+</span> learners
                </p>
                <p className="text-xs text-slate-400">building their careers with us.</p>
              </div>
            </div>

          </div>

      {/* Bottom Right Corner Annotation: It's Possible! (Desktop / Tablet only) */}
      <div className="hidden sm:block absolute bottom-6 right-6 sm:bottom-8 sm:right-10 lg:bottom-8 lg:right-16 z-20 text-right pointer-events-none">
        <span className="font-handwriting text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] transform -rotate-3 block">
          It&apos;s Possible!
        </span>
      </div>

        </div>
      </div>

    </section>
  );
}
