"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, GraduationCap, Sparkles } from "lucide-react";

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
      desc: "CI/CD, Docker, Kubernetes and more.",
      level: "Basic to Advanced",
      color: "from-blue-500 to-cyan-500",
      bgLight: "bg-blue-50/50 border-blue-100",
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 10C18.9543 10 10 18.9543 10 30C10 41.0457 18.9543 50 30 50C38.2 50 45.2 45 48.2 38L51.8 22C54.8 15 61.8 10 70 10C81.0457 10 90 18.9543 90 30C90 41.0457 81.0457 50 70 50C61.8 50 54.8 45 51.8 38L48.2 22C45.2 15 38.2 10 30 10Z" stroke="#0284C7" strokeWidth="8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "linux",
      title: "Linux",
      category: "System Admin",
      desc: "Master the foundation of modern IT.",
      level: "Basic to Advanced",
      color: "from-amber-500 to-yellow-500",
      bgLight: "bg-amber-50/50 border-amber-100",
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      desc: "Build real cloud skills for real careers.",
      level: "Basic to Advanced",
      color: "from-orange-500 to-amber-600",
      bgLight: "bg-orange-50/50 border-orange-100",
      iconSvg: (
        <div className="flex flex-col items-center justify-center">
          <span className="font-extrabold text-2xl text-slate-800 tracking-wider">aws</span>
          <svg className="w-10 h-3 -mt-1" viewBox="0 0 60 15" fill="none">
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
      color: "from-blue-600 to-yellow-500",
      bgLight: "bg-blue-50/50 border-blue-100",
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.5 8C20 8 20.5 13 20.5 13V18H32.5V20H15.5C15.5 20 8 19.5 8 31C8 42.5 13 42.5 13 42.5H18.5V36.5C18.5 36.5 18 30.5 24 30.5H35.5C35.5 30.5 41 30.5 41 24.5V13C41 13 42 8 31.5 8Z" fill="#3B82F6" />
          <path d="M32.5 56C44 56 43.5 51 43.5 51V46H31.5V44H48.5C48.5 44 56 44.5 56 33C56 21.5 51 21.5 51 21.5H45.5V27.5C45.5 27.5 46 33.5 40 33.5H28.5C28.5 33.5 23 33.5 23 39.5V51C23 51 22 56 32.5 56Z" fill="#EAB308" />
          <circle cx="25" cy="14" r="2" fill="white" />
          <circle cx="39" cy="50" r="2" fill="white" />
        </svg>
      ),
    },
    {
      id: "kubernetes",
      title: "Kubernetes & Docker",
      category: "Cloud & DevOps",
      desc: "Container orchestration for modern cloud apps.",
      level: "Basic to Advanced",
      color: "from-sky-500 to-indigo-600",
      bgLight: "bg-sky-50/50 border-sky-100",
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
          <polygon points="32,8 52,20 52,44 32,56 12,44 12,20" stroke="#0284C7" strokeWidth="4" fill="none" />
          <circle cx="32" cy="32" r="8" fill="#0284C7" />
        </svg>
      ),
    },
    {
      id: "fullstack",
      title: "Full Stack Web Dev",
      category: "Programming",
      desc: "React, Next.js, Node.js & Database architecture.",
      level: "Basic to Advanced",
      color: "from-emerald-500 to-teal-600",
      bgLight: "bg-emerald-50/50 border-emerald-100",
      iconSvg: (
        <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="14" width="48" height="36" rx="6" stroke="#00A86B" strokeWidth="4" fill="none" />
          <path d="M16 28L24 32L16 36" stroke="#00A86B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="28" y1="36" x2="38" y2="36" stroke="#00A86B" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const filteredCourses = activeCategory === "All"
    ? courseData.slice(0, 4) // Default 4 courses matching the design screenshot
    : courseData.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="py-16 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Courses
            </h2>
            <p className="text-base text-slate-600 mt-2 font-medium">
              Build in-demand skills with hands-on training and real-world projects.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-[#00A86B] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Layout (Courses Grid + Who Can Attend Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Courses Cards Grid (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => onSelectCourse(course.title)}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Course Icon Container */}
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    {course.iconSvg}
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00A86B] transition-colors">
                    {course.title}
                  </h3>

                  {/* Course Description */}
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {course.desc}
                  </p>
                </div>

                {/* Course Footer Action */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-sky-600 group-hover:text-[#00A86B] transition-colors">
                    {course.level}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#00A86B] text-slate-600 group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: "Who Can Attend?" Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="relative bg-[#F0FDF4] border-2 border-emerald-200 rounded-3xl p-7 shadow-lg overflow-hidden">
              
              {/* Handwritten Badge Graphic */}
              <div className="absolute top-4 right-4 pointer-events-none">
                <div className="flex flex-col items-center">
                  <GraduationCap className="w-10 h-10 text-emerald-600 stroke-[1.5]" />
                  <span className="font-handwriting text-2xl font-bold text-emerald-700 transform rotate-6 -mt-1">
                    New<br />Skills<br />Brighter<br />You
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 mb-6">
                Who Can Attend?
              </h3>

              {/* Target Audience Checklist */}
              <ul className="space-y-4 mb-8">
                {[
                  "Final year IT students",
                  "Freshers",
                  "Candidates with a career gap",
                  "Non-IT to IT career switchers",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base font-bold text-slate-800">
                    <div className="w-6 h-6 rounded-full bg-[#00A86B] text-white flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Eligibility Quiz Button */}
              <button
                onClick={onOpenEligibility}
                className="w-full py-3.5 px-4 bg-white hover:bg-emerald-50 text-[#00A86B] border-2 border-[#00A86B] rounded-xl font-bold text-sm shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Check Your Eligibility</span>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
