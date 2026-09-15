"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CoursesSectionProps {
  onOpenEligibility: () => void;
  onSelectCourse: (courseName: string) => void;
}

export default function CoursesSection({ onOpenEligibility, onSelectCourse }: CoursesSectionProps) {
  const courseData = [
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
      <div className="max-[#7xl] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header matching reference design */}
        <div className="flex flex-col sm:flex-row sm:items-baseline mb-8 gap-2 sm:gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B192C] tracking-tight">
            Our Courses
          </h2>
          <p className="text-sm sm:text-base font-medium text-slate-500">
            From fundamentals to advanced concepts &mdash; learn what the industry demands.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courseData.map((course) => (
            <div
              key={course.id}
              onClick={() => onSelectCourse(course.title)}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-sky-300 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full"
            >
              <div>
                {/* Course Image Container */}
                <div className="h-16 w-full flex items-center justify-start mb-4">
                  <div className="relative h-14 w-32 flex items-center justify-start">
                    <Image
                      src={course.imageSrc}
                      alt={`${course.title} logo`}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
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

      </div>
    </section>
  );
}
