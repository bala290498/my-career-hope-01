"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Sparkles, GraduationCap } from "lucide-react";

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (course: string) => void;
}

export default function EligibilityModal({ isOpen, onClose, onSelectCourse }: EligibilityModalProps) {
  const [background, setBackground] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  if (!isOpen) return null;

  const handleCheck = () => {
    if (background && goal) {
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setBackground(null);
    setGoal(null);
    setShowResult(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 px-6 border-b border-slate-200 bg-[#F0FDF4]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-100 text-[#00A86B]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                Career Eligibility Checker
              </h3>
              <p className="text-xs text-emerald-800 font-medium">
                Find out if MyCareerHope programs fit your background
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {!showResult ? (
            <div className="space-y-5">
              {/* Question 1 */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  1. What best describes your current status?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "College Students",
                    "Freshers looking for job",
                    "Candidate with career gap",
                    "Non-IT to IT Switcher",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setBackground(item)}
                      className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                        background === item
                          ? "border-[#00A86B] bg-emerald-50 text-[#00A86B] shadow-xs"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                  2. What is your primary career goal?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "DevOps & Cloud Engineer",
                    "Linux Systems Engineer",
                    "Python Developer / Automator",
                    "Full Stack Software Developer",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setGoal(item)}
                      className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                        goal === item
                          ? "border-[#00A86B] bg-emerald-50 text-[#00A86B] shadow-xs"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleCheck}
                disabled={!background || !goal}
                className={`w-full py-3.5 text-sm font-bold text-white rounded-xl shadow-md transition-all flex items-center justify-center gap-2 ${
                  background && goal
                    ? "bg-[#00A86B] hover:bg-[#008f5a]"
                    : "bg-slate-300 cursor-not-allowed"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate Eligibility Match</span>
              </button>
            </div>
          ) : (
            <div className="py-4 space-y-5 text-center animate-in zoom-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A86B] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase">
                  100% Eligible match!
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 mt-2">
                  You are a Perfect Fit for MyCareerHope!
                </h4>
                <p className="text-xs text-slate-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  As a <span className="font-bold text-slate-800">{background}</span> targeting <span className="font-bold text-[#00A86B]">{goal}</span>, our step-by-step live project sessions and placement mentorship will get you job-ready.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onSelectCourse(goal || "DevOps");
                    onClose();
                  }}
                  className="flex-1 py-3 text-sm font-bold text-white bg-[#00A86B] hover:bg-[#008f5a] rounded-xl shadow-md"
                >
                  Explore {goal} Roadmap
                </button>
                <button
                  onClick={handleReset}
                  className="py-3 px-4 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
                >
                  Check Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
