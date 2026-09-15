"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function StatsFooter() {
  return (
    <footer className="bg-[#0B192C] text-white pt-16 pb-12 overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Built For Students Banner + Stats Grid (Matching screenshot bottom bar) */}
        <div className="pb-16 border-b border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Built for Students<br />
              Who Want Real Experiences
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              We connect students and job seekers with working professionals who host live sessions. You learn together, pay less together, and move toward real job opportunities.
            </p>
          </div>

          {/* Right Stats Metrics Bar (2 cols on mobile, 4 cols on desktop, no divide lines) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
            
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                500+
              </span>
              <span className="text-xs font-semibold text-slate-400 mt-1 block">
                Learners
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight block">
                200+
              </span>
              <span className="text-xs font-semibold text-slate-400 mt-1 block">
                Live Sessions
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight block">
                50+
              </span>
              <span className="text-xs font-semibold text-slate-400 mt-1 block">
                Projects
              </span>
            </div>

            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 tracking-tight block">
                90%
              </span>
              <span className="text-xs font-semibold text-slate-400 mt-1 block">
                Interview Opportunities
              </span>
            </div>

          </div>

        </div>

        {/* Middle Footer Navigation Links */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#00A86B] text-white flex items-center justify-center font-bold text-lg">
                H
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white tracking-tight">
                  mycareer<span className="text-[#00A86B]">hope</span>
                </span>
                <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                  LEARN &bull; BUILD &bull; LAUNCH
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering learners with industry-backed IT training, hands-on projects, career guidance, and revolutionary dynamic group pricing.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00A86B]" />
                <span>support@mycareerhope.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00A86B]" />
                <span>+91 7010 584543</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#00A86B]" />
                <span>Chennai &bull; Remote</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Popular Programs
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#courses" className="hover:text-white transition-colors">DevOps Masterclass</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Linux System Admin</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">AWS Cloud Architect</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Python Automation</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Kubernetes &amp; Docker</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">Dynamic Group Pricing</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Mentor Network</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} MyCareerHope. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
