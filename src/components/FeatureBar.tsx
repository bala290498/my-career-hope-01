"use client";

import React from "react";
import { Users, Award, MonitorPlay, Ribbon, GitPullRequest, UserCheck } from "lucide-react";

export default function FeatureBar() {
  const features = [
    {
      icon: Users,
      title: "Dynamic Group Pricing",
      desc: "More learners, lower prices.",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: UserCheck,
      title: "Top Trainers",
      desc: "Learn from industry professionals.",
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      icon: MonitorPlay,
      title: "Live Training",
      desc: "Ask questions. Solve problems in real time.",
      color: "text-[#00A86B] bg-emerald-50",
    },
    {
      icon: Ribbon,
      title: "Certificates Included",
      desc: "Get certified with session resources.",
      color: "text-amber-600 bg-amber-50",
    },
    {
      icon: GitPullRequest,
      title: "Hiring Pipeline",
      desc: "Tasks → Evaluation → Interviews.",
      color: "text-purple-600 bg-purple-50",
    },
    {
      icon: Award,
      title: "Career Mentorship",
      desc: "Guidance focused on getting hired.",
      color: "text-teal-600 bg-teal-50",
    },
  ];

  return (
    <section id="features" className="scroll-mt-24 py-8 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className={`flex items-start gap-3.5 pt-4 sm:pt-0 ${index !== 0 ? 'sm:pl-4 lg:pl-5' : ''} group hover:translate-y-[-2px] transition-transform duration-200`}
              >
                <div className={`p-2.5 rounded-xl shrink-0 ${item.color} group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-normal">
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
