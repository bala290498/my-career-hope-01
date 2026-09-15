"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, User, Phone, Mail, GraduationCap, BookOpen, ExternalLink } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string | null;
}

export default function AuthModal({ isOpen, onClose, selectedCourse }: AuthModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "College Students",
    course: "",
  });

  useEffect(() => {
    if (selectedCourse) {
      setFormData((prev) => ({ ...prev, course: selectedCourse }));
    }
  }, [selectedCourse]);

  if (!isOpen) return null;

  const targetWhatsAppNumber = "919677691237"; // +91 9677691237

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const textMessage = 
      `Hi MyCareerHope! I am interested in joining a batch.\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Mobile/WhatsApp:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `🎓 *Category:* ${formData.category}\n` +
      `📚 *Course:* ${formData.course || "General Inquiry"}\n\n` +
      `Please share batch timings, roadmap and dynamic group discount details!`;

    const url = `https://api.whatsapp.com/send?phone=${targetWhatsAppNumber}&text=${encodeURIComponent(textMessage)}`;
    setWhatsappUrl(url);
    setSubmitted(true);

    // Open WhatsApp directly
    window.open(url, "_blank");
  };

  const categories = [
    "College Students",
    "Freshers looking for job",
    "Candidate with Career Gap",
    "Non-IT to IT Switcher",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl border border-emerald-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* WhatsApp Theme Top Header */}
        <div className="flex items-center justify-between px-6 py-4.5 bg-[#075E54] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] text-slate-900 flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-snug">MyCareerHope WhatsApp Support</h3>
              <p className="text-xs text-emerald-200 font-medium">Direct Chat: +91 96776 91237</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-emerald-100 hover:text-white hover:bg-emerald-800/60 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {submitted ? (
            <div className="py-6 text-center space-y-4 animate-in zoom-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#25D366] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Opening WhatsApp...
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed mt-1">
                  We are opening WhatsApp with your details pre-filled to <span className="font-bold text-[#075E54]">+91 96776 91237</span>.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-slate-900 font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current text-slate-900" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Click to Continue on WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="py-2.5 px-4 text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Close Window
                </button>
              </div>
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
                    className="w-full pl-10 pr-3 py-2.5 text-base sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-emerald-500/20"
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
                    className="w-full pl-10 pr-3 py-2.5 text-base sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-emerald-500/20"
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
                    className="w-full pl-10 pr-3 py-2.5 text-base sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-emerald-500/20"
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
                    className="w-full pl-10 pr-8 py-2.5 text-base sm:text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-emerald-500/20 font-medium text-slate-800"
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
                    placeholder="e.g. DevOps, Linux, AWS, Python, BootCamp"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 text-base sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              {/* WhatsApp Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 text-sm font-extrabold text-white bg-[#075E54] hover:bg-[#054c44] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 mt-3 active:scale-98"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat &amp; Join on WhatsApp</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
