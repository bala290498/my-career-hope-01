"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, GraduationCap, Sparkles } from "lucide-react";

interface CoursesSectionProps {
  onOpenEligibility: () => void;
  onSelectCourse: (courseName: string) => void;
}

export default function CoursesSection({ onOpenEligibility, onSelectCourse }: CoursesSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Cloud & DevOps", "Programming", "System Admin", "Data & AI"];

  const courseData = [
    {
      id: "devops",
      title: "DevOps",
      category: "Cloud & DevOps",
      desc: "Build, deploy and automate like a pro.",
      level: "Basic to Advanced",
      iconSvg: (
        <svg className="w-16 h-12" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50C38.2 50 45.2 45 48.2 38L51.8 22C54.8 15 61.8 10 70 10C81.0457 10 90 18.9543 90 30C90 41.0457 81.0457 50 70 50C61.8 50 54.8 45 51.8 38L48.2 22C45.2 15 38.2 10 30 10Z"
            stroke="#0284C7"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: "linux",
      title: "Linux",
      category: "System Admin",
      desc: "Master the foundation of modern IT.",
      level: "Basic to Advanced",
      iconSvg: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Tux Penguin Icon */}
          <ellipse cx="32" cy="38" rx="18" ry="20" fill="#1E293B" />
          <ellipse cx="32" cy="40" rx="12" ry="15" fill="#FFFFFF" />
          <circle cx="32" cy="18" r="12" fill="#1E293B" />
          <circle cx="27" cy="16" r="3" fill="#FFFFFF" />
          <circle cx="37" cy="16" r="3" fill="#FFFFFF" />
          <circle cx="27" cy="16" r="1.5" fill="#000000" />
          <circle cx="37" cy="16" r="1.5" fill="#000000" />
          <polygon points="28,20 36,20 32,25" fill="#F59E0B" />
          <ellipse cx="22" cy="56" rx="7" ry="3" fill="#F59E0B" />
          <ellipse cx="42" cy="56" rx="7" ry="3" fill="#F59E0B" />
        </svg>
      ),
    },
    {
      id: "aws",
      title: "AWS",
      category: "Cloud & DevOps",
      desc: "Build real cloud skills for real opportunities.",
      level: "Basic to Advanced",
      iconSvg: (
        <div className="flex flex-col items-start justify-center">
          <span className="font-extrabold text-3xl text-slate-900 tracking-wider">aws</span>
          <svg className="w-12 h-3.5 -mt-1" viewBox="0 0 60 15" fill="none">
            <path d="M5 5 Q30 15 55 5" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
            <path d="M50 2 L57 6 L52 10" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ),
    },
    {
      id: "python",
      title: "Python",
      category: "Programming",
      desc: "Learn programming and automation.",
      level: "Basic to Advanced",
      iconSvg: (
        <svg className="w-14 h-14" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M31.5 8C20 8 20.5 13 20.5 13V18H32.5V20H15.5C15.5 20 8 19.5 8 31C8 42.5 13 42.5 13 42.5H18.5V36.5C18.5 36.5 18 30.5 24 30.5H35.5C35.5 30.5 41 30.5 41 24.5V13C41 13 42 8 31.5 8Z"
            fill="#3B82F6"
          />
          <path
            d="M32.5 56C44 56 43.5 51 43.5 51V46H31.5V44H48.5C48.5 44 56 44.5 56 33C56 21.5 51 21.5 51 21.5H45.5V27.5C45.5 27.5 46 33.5 40 33.5H28.5C28.5 33.5 23 33.5 23 39.5V51C23 51 22 56 32.5 56Z"
            fill="#EAB308"
          />
          <circle cx="25" cy="14" r="2" fill="white" />
          <circle cx="39" cy="50" r="2" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header matching the reference screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-baseline mb-8 gap-2 sm:gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Our Courses
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-500">
            From fundamentals to advanced concepts &mdash; learn what the industry demands.
          </p>
        </div>

        {/* 4 Cards Grid - Matches screenshot layout exactly */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courseData.map((course) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course.title)}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-sky-300 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
            >
              <div>
                {/* Course Icon */}
                <div className="h-16 flex items-center justify-start mb-4">
                  {course.iconSvg}
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {course.title}
                </h3>

                {/* Course Description */}
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                  {course.desc}
                </p>
              </div>

              {/* Bottom Pill Badge & Blue Arrow */}
              <div className="pt-6 mt-6 flex items-center justify-between">
                <span className="px-3 py-1.5 rounded-lg bg-sky-50 text-sky-600 font-semibold text-xs border border-sky-100/60">
                  {course.level}
                </span>
                <ArrowRight className="w-5 h-5 text-sky-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Who Can Attend Card Banner */}
        <div className="bg-[#F0FDF4] border border-emerald-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-extrabold text-slate-900">
                Who Can Attend?
              </h3>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-slate-800">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" /> Final year IT students
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" /> Freshers
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" /> Candidates with a career gap
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A86B]" /> Non-IT to IT career switchers
              </span>
            </div>
          </div>

          <button
            onClick={onOpenEligibility}
            className="shrink-0 px-6 py-3 bg-[#00A86B] hover:bg-[#008f5a] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Check Your Eligibility</span>
          </button>
        </div>

      </div>
    </section>
  );
}
