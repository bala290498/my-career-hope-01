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
      desc: "Work on production-level codebases, build end-to-end features, and experience real software development lifecycles.",
      icon: FileText,
      iconColor: "text-blue-600 bg-blue-100/80 border-blue-200",
      accentBorder: "hover:border-blue-300",
    },
    {
      title: "Client & Business Project Exposure",
      desc: "Gain exposure to actual client requirements, business domain logic, and tight deliverables.",
      icon: Handshake,
      iconColor: "text-emerald-600 bg-emerald-100/80 border-emerald-200",
      accentBorder: "hover:border-emerald-300",
    },
    {
      title: "Professional Workflows & Team Collaboration",
      icon: Users,
      desc: "Collaborate using Git, branch strategies, pull requests, code reviews, and Agile daily standups.",
      iconColor: "text-purple-600 bg-purple-100/80 border-purple-200",
      accentBorder: "hover:border-purple-300",
    },
    {
      title: "Practical Workplace Responsibilities",
      desc: "Take direct ownership of module tasks, debugging, system maintenance, and feature rollouts.",
      icon: Settings,
      iconColor: "text-amber-600 bg-amber-100/80 border-amber-200",
      accentBorder: "hover:border-amber-300",
    },
    {
      title: "Real-Time Attendance Records",
      icon: CalendarCheck,
      desc: "Transparent log of your daily attendance, sprint participation, and active work hours.",
      iconColor: "text-rose-600 bg-rose-100/80 border-rose-200",
      accentBorder: "hover:border-rose-300",
    },
    {
      title: "Relieving-cum-Experience Letter",
      desc: "Receive official, verifiable experience letters detailing your role, tenure, and tech stack skills.",
      icon: Award,
      iconColor: "text-teal-600 bg-teal-100/80 border-teal-200",
      accentBorder: "hover:border-teal-300",
    },
    {
      title: "Structured 6\u201312 Month Work Experience",
      desc: "Build a solid, uninterrupted history of practical work experience to boost your career prospects.",
      icon: TrendingUp,
      iconColor: "text-sky-600 bg-sky-100/80 border-sky-200",
      accentBorder: "hover:border-sky-300",
    },
  ];

  return (
    <section id="first-career-what-you-get" className="scroll-mt-24 py-16 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
            FIRST CAREER PROGRAM
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B192C] tracking-tight">
            What You Get
          </h2>

          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Gain real work experience, build industry-ready skills, and take the next step in your career.
          </p>
        </div>

        {/* Rich Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 border border-slate-200/90 ${item.accentBorder} shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden`}
              >
                <div>
                  {/* Icon Box */}
                  <div className={`w-14 h-14 rounded-2xl ${item.iconColor} border flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
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
