"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, User, Phone, Mail, GraduationCap, BookOpen, ArrowRight } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string | null;
}

export default function AuthModal({ isOpen, onClose, selectedCourse }: AuthModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "Final Year IT Student",
    course: "",
  });

  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const categories = [
    "Final Year IT Student",
    "Fresher",
    "Candidate with Career Gap",
    "Non-IT to IT Switcher",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-[#F0FDF4]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00A86B] text-white flex items-center justify-center font-bold text-lg shadow-xs">
              H
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">Join MyCareerHope</h3>
              <p className="text-xs text-emerald-800 font-medium">Reserve your spot &amp; get dynamic group discounts</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3 animate-in zoom-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A86B] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Application Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed font-normal">
                Thank you, <span className="font-bold text-slate-900">{formData.name}</span>! Our career mentor will contact you on <span className="font-bold text-[#00A86B]">{formData.phone}</span> shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* WhatsApp / Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  WhatsApp / Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Email ID */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Your Category / Background <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full pl-10 pr-8 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-500/20 font-medium text-slate-800"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Course Trying to Learn (Free text type) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Course Trying to Learn <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. DevOps, Linux, AWS, Python, Full Stack"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#00A86B] focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 text-sm font-bold text-white bg-[#00A86B] hover:bg-[#008f5a] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 mt-3 active:scale-98"
              >
                <span>Submit &amp; Get Group Discount</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
