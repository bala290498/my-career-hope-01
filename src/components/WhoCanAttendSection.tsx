"use client";

import React from "react";
import { GraduationCap, Sparkles, RefreshCw, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface WhoCanAttendSectionProps {
  onOpenEligibility: () => void;
}

export default function WhoCanAttendSection({ onOpenEligibility }: WhoCanAttendSectionProps) {
  const audienceList = [
    {
      title: "College\nStudents",
      desc: "Prepare for campus placements and gain hands-on live project experience before graduating.",
      icon: GraduationCap,
      color: "text-emerald-600 bg-emerald-100/70 border-emerald-200",
    },
    {
      title: "Freshers\nlooking for job",
      desc: "Bridge the gap between academic theory and industry-grade IT skills demanded by tech recruiters.",
      icon: Sparkles,
      color: "text-teal-600 bg-teal-100/70 border-teal-200",
    },
    {
      title: "Candidates with\na Career Gap",
      desc: "Restart your career confidently with guided live sessions, projects, and interview mentorship.",
      icon: RefreshCw,
      color: "text-indigo-600 bg-indigo-100/70 border-indigo-200",
    },
    {
      title: "Non-IT to IT\nCareer Switchers",
      desc: "Transition into high-demand IT roles step-by-step with zero prior coding prerequisites required.",
      icon: UserCheck,
      color: "text-sky-600 bg-sky-100/70 border-sky-200",
    },
  ];

  return (
    <section id="who-can-attend" className="py-16 bg-[#F0FDF4]/70 border-y border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left Aligned */}
        <div className="text-left max-w-3xl mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Who Can Attend?
          </h2>

          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Our live training and dynamic group pricing programs are built specifically for learners from diverse backgrounds.
          </p>
        </div>

        {/* 4 Audience Cards Grid - 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {audienceList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-6 border border-emerald-200/60 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-2xl ${item.color} border flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-105 transition-transform`}>
                    <IconComponent className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 leading-snug whitespace-pre-line">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
