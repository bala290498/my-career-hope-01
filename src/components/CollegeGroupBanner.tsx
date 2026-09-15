"use client";

import React from "react";
import { MessageCircle, Users, ArrowRight } from "lucide-react";

export default function CollegeGroupBanner() {
  const handleWhatsAppRequest = () => {
    const msg = "Hi MyCareerHope Team! I am a college student and would like to request a group discount batch for me and my friends.";
    const url = `https://api.whatsapp.com/send?phone=919677691237&text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="college-group" className="scroll-mt-24 w-full bg-gradient-to-r from-[#0B192C] via-slate-900 to-[#00A86B]/95 text-white py-12 sm:py-16 relative overflow-hidden border-y border-slate-800/80 shadow-lg">
      
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
            Are you a College Student?
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
            <svg className="w-6 h-6 fill-current text-white shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Request a Group</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
