"use client";

import React from "react";
import { 
  FileText, 
  Handshake, 
  Users, 
  Settings, 
  CalendarCheck, 
  Award, 
  TrendingUp 
} from "lucide-react";

export default function FirstCareerWhatYouGet() {
  const features = [
    {
      title: "Real Project Experience",
      icon: FileText,
      cardBg: "bg-blue-50/70 border-blue-100/90 hover:border-blue-200",
      iconBg: "bg-blue-100 text-blue-600",
    },
    {
      title: "Client & Business Project Exposure",
      icon: Handshake,
      cardBg: "bg-emerald-50/70 border-emerald-100/90 hover:border-emerald-200",
      iconBg: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Professional Workflows & Team Collaboration",
      icon: Users,
      cardBg: "bg-purple-50/70 border-purple-100/90 hover:border-purple-200",
      iconBg: "bg-purple-100 text-purple-600",
    },
    {
      title: "Practical Workplace Responsibilities",
      icon: Settings,
      cardBg: "bg-amber-50/70 border-amber-100/90 hover:border-amber-200",
      iconBg: "bg-amber-100 text-amber-600",
    },
    {
      title: "Real-Time Attendance Records",
      icon: CalendarCheck,
      cardBg: "bg-rose-50/70 border-rose-100/90 hover:border-rose-200",
      iconBg: "bg-rose-100 text-rose-600",
    },
    {
      title: "Relieving-cum-Experience Letter",
      icon: Award,
      cardBg: "bg-teal-50/70 border-teal-100/90 hover:border-teal-200",
      iconBg: "bg-teal-100 text-teal-600",
    },
    {
      title: "Structured 6\u201312 Month Work Experience",
      icon: TrendingUp,
      cardBg: "bg-sky-50/70 border-sky-100/90 hover:border-sky-200",
      iconBg: "bg-sky-100 text-sky-600",
    },
  ];

  return (
    <section id="first-career-what-you-get" className="scroll-mt-24 py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Block */}
        <div className="text-left space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
            FIRST CAREER PROGRAM
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] tracking-tight">
            What You <span className="text-[#0052FF]">Get</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-3xl">
            Gain real work experience, build industry-ready skills, and take the next step in your career.
          </p>
        </div>

        {/* 7 Colorful Feature Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`${item.cardBg} rounded-2xl p-4 sm:p-5 border shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-start group hover:-translate-y-1 min-h-[190px] sm:min-h-[210px]`}
              >
                {/* Circle Icon Badge */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${item.iconBg} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform shadow-xs`}>
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Card Title */}
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug tracking-tight">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
