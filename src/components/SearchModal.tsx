"use client";

import React, { useState } from "react";
import { Search, X, ArrowRight, BookOpen } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (courseName: string) => void;
}

export default function SearchModal({ isOpen, onClose, onSelectCourse }: SearchModalProps) {
  const [query, setQuery] = useState("");

  const allCourses = [
    { title: "DevOps Masterclass", category: "Cloud & DevOps", level: "Basic to Advanced", desc: "CI/CD, Docker, Kubernetes, Jenkins, Terraform" },
    { title: "Linux System Administration", category: "System Admin", level: "Basic to Advanced", desc: "Command line, Shell Scripting, Security, Permissions" },
    { title: "AWS Cloud Architect", category: "Cloud & DevOps", level: "Basic to Advanced", desc: "EC2, S3, IAM, VPC, CloudFormation, Serverless" },
    { title: "Python Programming & Automation", category: "Programming", level: "Basic to Advanced", desc: "Syntax, Data Structures, Web Scraping, Automation Scripts" },
    { title: "Kubernetes & Docker Deep Dive", category: "Cloud & DevOps", level: "Intermediate to Advanced", desc: "Microservices deployment, Pod scaling, Helm charts" },
    { title: "Full Stack Web Development", category: "Programming", level: "Basic to Advanced", desc: "React, Next.js, Node.js, Express, PostgreSQL" },
  ];

  const results = query.trim()
    ? allCourses.filter(
        (c) =>
          c.title.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase()) ||
          c.desc.toLowerCase().includes(query.toLowerCase())
      )
    : allCourses;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="flex items-center gap-3 p-4 px-5 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Search courses, skills (DevOps, AWS, Python, Linux)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-slate-100">
          {results.length > 0 ? (
            results.map((course, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectCourse(course.title);
                  onClose();
                }}
                className="py-3 px-3 rounded-xl hover:bg-emerald-50/70 transition-colors flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100/60 text-[#00A86B] mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#00A86B] transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {course.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-md">
                    {course.level}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#00A86B] transition-colors" />
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-slate-500 text-sm">
              No courses found matching &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 px-5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Click any course to view full roadmap &amp; dynamic pricing</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
