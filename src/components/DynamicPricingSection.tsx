"use client";

import React, { useState } from "react";
import { ArrowRight, Users, Tag, Sparkles, TrendingDown } from "lucide-react";

interface DynamicPricingSectionProps {
  onOpenAuth: (mode: "signup") => void;
}

export default function DynamicPricingSection({ onOpenAuth }: DynamicPricingSectionProps) {
  const [studentCount, setStudentCount] = useState(12);

  // Dynamic price calculation formula based on batch cost (1 Lakh / max 20 learners)
  // 1 Lakh (100,000) is used internally for calculation as requested (not displayed directly)
  const batchTotalCost = 100000;
  const maxLearners = 20;

  // Calculated price per learner for the batch
  const currentPrice = Math.round(batchTotalCost / studentCount);
  const baseIndividualPrice = 25000; // Base reference price for individual enrollment
  
  const discountPercent = Math.min(
    95,
    Math.round(((baseIndividualPrice - currentPrice) / baseIndividualPrice) * 100)
  );

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Dark Navy Banner Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INNOVATIVE PRICING MODEL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Dynamic Group Pricing
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-normal">
                India&apos;s first platform with Dynamic Group Pricing. More learners join, everyone pays less. (Max 20 learners per batch).
              </p>

              {/* Interactive Pricing Simulator Widget */}
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide">
                    Live Group Simulator
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    {discountPercent > 0 ? `${discountPercent}% OFF` : "Group Price"}
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-extrabold text-white">
                      ₹{currentPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 ml-1">/ learner</span>
                    {currentPrice < baseIndividualPrice && (
                      <span className="text-sm text-slate-400 line-through ml-2">
                        ₹{baseIndividualPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold text-emerald-400">
                    {studentCount} / {maxLearners} Learners Joined
                  </span>
                </div>

                {/* Slider - 1 to 20 learners max */}
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#00A86B]"
                />

                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>1 Learner in batch</span>
                  <span>20 Learners (Max Discount: ₹5,000)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 relative z-10">
              <button
                onClick={() => onOpenAuth("signup")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-sm transition-all shadow-md active:scale-98"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Background Accent Gradient */}
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          </div>

          {/* Right Column: "How It Works" 3 Steps Card (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-8">
                How It Works
              </h3>

              {/* 3 Step Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Step 1 */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4 relative group hover:border-blue-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-extrabold text-base flex items-center justify-center shadow-sm">
                      1
                    </div>
                    <div className="p-2 rounded-xl bg-blue-100/70 text-blue-600">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 leading-snug">
                    One group price.<br />Join or create a group.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4 relative group hover:border-purple-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-purple-600 text-white font-extrabold text-base flex items-center justify-center shadow-sm">
                      2
                    </div>
                    <div className="p-2 rounded-xl bg-purple-100/70 text-purple-600">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 leading-snug">
                    More students join.<br />The group grows (up to 20).
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 space-y-4 relative group hover:border-emerald-200 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#00A86B] text-white font-extrabold text-base flex items-center justify-center shadow-sm">
                      3
                    </div>
                    <div className="p-2 rounded-xl bg-emerald-100/70 text-[#00A86B]">
                      <Tag className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-slate-800 leading-snug">
                    Everyone pays less<br />automatically.
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Note */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Automated calculation (Max 20 learners per batch)</span>
              <span className="text-[#00A86B] font-bold">100% Risk-Free Refund Guarantee</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
