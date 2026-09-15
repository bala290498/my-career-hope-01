"use client";

import React from "react";
import { MessageCircle, Users, ArrowRight } from "lucide-react";

export default function CollegeGroupBanner() {
  const handleWhatsAppRequest = () => {
    const msg = "Hi MyCareerHope! I am a college student and would like to request a group discount batch for me and my friends.";
    const url = `https://api.whatsapp.com/send?phone=919677691237&text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#0B192C] via-slate-900 to-[#00A86B]/95 text-white py-12 sm:py-16 relative overflow-hidden border-y border-slate-800/80 shadow-lg">
      
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left Text Block */}
        <div className="space-y-4 max-w-3xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
            <Users className="w-3.5 h-3.5" />
            <span>COLLEGE SPECIAL &bull; GROUP DISCOUNT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Are you a College Student? Having Friends?
          </h2>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-2xl">
            Form a custom batch with your friends, learn live together, and unlock maximum dynamic group pricing discounts automatically!
          </p>
        </div>

        {/* Right Action Button */}
        <div className="shrink-0">
          <button
            onClick={handleWhatsAppRequest}
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-extrabold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-2xl shadow-xl hover:shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5 active:scale-98 group cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>Request a Group</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
