"use client";

import React from "react";
import { 
  Users, 
  Award, 
  Video, 
  CheckCircle2, 
  FileText, 
  Briefcase, 
  Target, 
  UserCheck 
} from "lucide-react";

export default function WhyLearnWithUsSection() {
  const features = [
    {
      title: "Dynamic Group Pricing",
      desc: "More learners join. Everyone pays less.",
      icon: Users,
      color: "text-[#00A86B] bg-emerald-100/70 border-emerald-200",
    },
    {
      title: "Top Trainers",
      desc: "Sessions led by active industry professionals.",
      icon: Award,
      color: "text-teal-600 bg-teal-100/70 border-teal-200",
    },
    {
      title: "Live Training",
      desc: "Ask questions. Solve problems in real time.",
      icon: Video,
      color: "text-blue-600 bg-blue-100/70 border-blue-200",
    },
    {
      title: "Certificates Included",
      desc: "Completion proof + session resources.",
      icon: CheckCircle2,
      color: "text-indigo-600 bg-indigo-100/70 border-indigo-200",
    },
    {
      title: "Study Resources",
      desc: "Downloadable materials and recordings.",
      icon: FileText,
      color: "text-purple-600 bg-purple-100/70 border-purple-200",
    },
    {
      title: "Hiring Pipeline",
      desc: "Tasks → evaluation → interviews.",
      icon: Briefcase,
      color: "text-amber-600 bg-amber-100/70 border-amber-200",
    },
    {
      title: "Clear Roadmap",
      desc: "Weekly goals with real-world projects.",
      icon: Target,
      color: "text-sky-600 bg-sky-100/70 border-sky-200",
    },
    {
      title: "Career Mentorship",
      desc: "Guidance focused on getting hired.",
      icon: UserCheck,
      color: "text-rose-600 bg-rose-100/70 border-rose-200",
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Why Learn With Us
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Dynamic group pricing, industry experts, and career-focused support &mdash; all in one place.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.color} border flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform`}>
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 leading-snug">
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
