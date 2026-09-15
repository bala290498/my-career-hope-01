"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface CoursesSectionProps {
  onOpenEligibility: () => void;
  onSelectCourse: (courseName: string) => void;
}

export default function CoursesSection({ onOpenEligibility, onSelectCourse }: CoursesSectionProps) {
  const courseData = [
    {
      id: "bootcamp",
      title: "BootCamp",
      category: "Career Program",
      desc: "Best for college students and freshers looking for job",
      level: "Basic to Advanced",
      badge: "Most Picked",
      imageSrc: "/courses/devops-logo-png_seeklogo-423085.png",
    },
    {
      id: "first-career",
      title: "First Career",
      category: "Career Program",
      desc: "Best for Non-IT to IT & Career Gap",
      level: "Basic to Advanced",
      badge: "Popular Choice",
      imageSrc: "/courses/linux-removebg-preview.png",
    },
    {
      id: "devops",
      title: "DevOps",
      category: "Cloud & DevOps",
      desc: "Build, deploy and automate like a pro.",
      level: "Basic to Advanced",
      imageSrc: "/courses/devops-logo-png_seeklogo-423085.png",
    },
    {
      id: "linux",
      title: "Linux",
      category: "System Admin",
      desc: "Master the foundation of modern IT.",
      level: "Basic to Advanced",
      imageSrc: "/courses/linux-removebg-preview.png",
    },
    {
      id: "aws",
      title: "AWS",
      category: "Cloud & DevOps",
      desc: "Build real cloud skills for real opportunities.",
      level: "Basic to Advanced",
      imageSrc: "/courses/aws-logo-png-svg-removebg-preview.png",
    },
    {
      id: "python",
      title: "Python",
      category: "Programming",
      desc: "Learn programming and automation.",
      level: "Basic to Advanced",
      imageSrc: "/courses/images__4_-removebg-preview.png",
    },
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header matching reference design */}
        <div className="flex flex-col sm:flex-row sm:items-baseline mb-8 gap-2 sm:gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Our Courses
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-500">
            From fundamentals to advanced concepts &mdash; learn what the industry demands.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {courseData.map((course) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course.title)}
              className={`bg-white rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full relative ${
                course.badge
                  ? "border-[#00A86B] shadow-md ring-2 ring-emerald-500/10 hover:border-emerald-600"
                  : "border-slate-200/90 hover:border-sky-300 shadow-2xs hover:shadow-lg"
              }`}
            >
              {/* Badge rendered in Top-Right Corner of the card */}
              {course.badge && (
                <div className="absolute -top-2.5 right-2 z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#00A86B] text-white font-extrabold text-[9px] uppercase tracking-wider shadow-sm border border-emerald-300">
                    <Sparkles className="w-2.5 h-2.5" />
                    {course.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Course Image Container */}
                <div className="h-14 w-full flex items-center justify-start mb-3 pt-1">
                  <div className="relative h-12 w-24 flex items-center justify-start">
                    <Image
                      src={course.imageSrc}
                      alt={`${course.title} logo`}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {course.title}
                </h3>

                {/* Course Description */}
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                  {course.desc}
                </p>
              </div>

              {/* Bottom Pill Badge & Blue Arrow */}
              <div className="pt-4 mt-4 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-lg bg-sky-50 text-sky-600 font-semibold text-[11px] border border-sky-100/60">
                  {course.level}
                </span>
                <ArrowRight className="w-4 h-4 text-sky-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
