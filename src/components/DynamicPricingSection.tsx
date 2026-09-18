"use client";

import React, { useState } from "react";
import { ArrowRight, Users, Tag, Sparkles, TrendingDown, CheckCircle2 } from "lucide-react";

interface DynamicPricingSectionProps {
  onOpenAuth: () => void;
}

export default function DynamicPricingSection({ onOpenAuth }: DynamicPricingSectionProps) {
  const [studentCount, setStudentCount] = useState(14);

  // Dynamic price calculation formula based on batch cost (1 Lakh / min 3 to max 30 learners)
  const batchTotalCost = 100000;
  const minLearners = 3;
  const maxLearners = 30;

  // Calculated price per learner for the batch
  const currentPrice = Math.round(batchTotalCost / studentCount);
  const baseIndividualPrice = 50000; // Base strikethrough reference price for enrollment (₹50,000)
  
  const discountPercent = Math.min(
    95,
    Math.round(((baseIndividualPrice - currentPrice) / baseIndividualPrice) * 100)
  );

  const learnerNumbers = Array.from({ length: maxLearners - minLearners + 1 }, (_, i) => i + minLearners);

  const fillPercentage = ((studentCount - minLearners) / (maxLearners - minLearners)) * 100;

  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Full-Width Desktop Banner: Dynamic Group Pricing */}
        <div className="w-full bg-[#0B192C] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INNOVATIVE PRICING MODEL</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Dynamic Group Pricing
              </h2>

              <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-normal max-w-xl">
                India&apos;s first platform with Dynamic Group Pricing. More learners join, everyone pays less automatically. Group cap: 3 to 30 learners per batch.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenAuth}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-sm transition-all shadow-md active:scale-98"
                >
                  <span>See How It Works</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Transparent &amp; Automated Savings</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Simulator Widget (6 cols) */}
            <div className="lg:col-span-6">
              <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Live Group Simulator
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-extrabold flex items-center gap-1.5 border border-emerald-500/30">
                    <TrendingDown className="w-3.5 h-3.5" />
                    {discountPercent > 0 ? `${discountPercent}% OFF` : "Group Price"}
                  </span>
                </div>

                <div className="flex items-baseline justify-between border-y border-slate-700/60 py-4">
                  <div>
                    <span className="text-4xl font-extrabold text-white">
                      ₹{currentPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 ml-1.5">/ learner</span>
                    {currentPrice < baseIndividualPrice && (
                      <span className="text-sm text-slate-400 line-through ml-3">
                        ₹{baseIndividualPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-extrabold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
                    {studentCount} / {maxLearners} Learners Joined
                  </span>
                </div>

                {/* Interactive 3 to 30 Point Indicators Slider Container with Track Fill */}
                <div className="space-y-1.5 pt-2">
                  
                  {/* Top Indicators Row: Odd Numbers (3, 5, 7, ..., 29) */}
                  <div className="flex items-center justify-between px-1">
                    {learnerNumbers.map((num) => {
                      const isOdd = num % 2 !== 0;
                      const isActive = studentCount === num;
                      const isReached = num <= studentCount;
                      return (
                        <div key={`odd-${num}`} className="flex-1 flex justify-center min-w-0">
                          {isOdd ? (
                            <button
                              type="button"
                              onClick={() => setStudentCount(num)}
                              className={`text-[9px] sm:text-[10px] font-extrabold transition-all px-0.5 sm:px-1 py-0.5 rounded-md ${
                                isActive
                                  ? "bg-[#00A86B] text-white scale-125 shadow-md z-10 ring-2 ring-emerald-300"
                                  : isReached
                                  ? "text-emerald-400 font-bold hover:scale-110"
                                  : "text-slate-400 hover:text-emerald-400 hover:scale-110"
                              }`}
                              title={`Select ${num} Learners`}
                            >
                              {num}
                            </button>
                          ) : (
                            <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isReached ? "bg-[#00A86B]" : "bg-slate-700/80"}`} />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Range Slider Input with Dynamic Green Track Fill */}
                  <div className="relative w-full h-3 my-1 flex items-center">
                    <input
                      type="range"
                      min={minLearners}
                      max={maxLearners}
                      value={studentCount}
                      onChange={(e) => setStudentCount(Number(e.target.value))}
                      style={{
                        background: `linear-gradient(to right, #00A86B 0%, #00A86B ${fillPercentage}%, #334155 ${fillPercentage}%, #334155 100%)`,
                      }}
                      className="w-full h-3 rounded-lg appearance-none cursor-pointer accent-[#00A86B] focus:outline-none"
                    />
                  </div>

                  {/* Bottom Indicators Row: Even Numbers (4, 6, 8, ..., 30) */}
                  <div className="flex items-center justify-between px-1">
                    {learnerNumbers.map((num) => {
                      const isEven = num % 2 === 0;
                      const isActive = studentCount === num;
                      const isReached = num <= studentCount;
                      return (
                        <div key={`even-${num}`} className="flex-1 flex justify-center min-w-0">
                          {isEven ? (
                            <button
                              type="button"
                              onClick={() => setStudentCount(num)}
                              className={`text-[9px] sm:text-[10px] font-extrabold transition-all px-0.5 sm:px-1 py-0.5 rounded-md ${
                                isActive
                                  ? "bg-[#00A86B] text-white scale-125 shadow-md z-10 ring-2 ring-emerald-300"
                                  : isReached
                                  ? "text-emerald-400 font-bold hover:scale-110"
                                  : "text-slate-400 hover:text-emerald-400 hover:scale-110"
                              }`}
                              title={`Select ${num} Learners`}
                            >
                              {num}
                            </button>
                          ) : (
                            <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isReached ? "bg-[#00A86B]" : "bg-slate-700/80"}`} />
                          )}
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Background Accent Blur */}
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        </div>

        {/* Standalone How It Works Section */}
        <div className="w-full space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C]">
                How It Works
              </h3>
              <p className="text-sm text-slate-600 mt-1 font-medium">
                Simple, transparent 3-step process to get maximum course fee discounts.
              </p>
            </div>
            <span className="text-xs font-bold text-[#00A86B] bg-emerald-50 px-3.5 py-1.5 rounded-xl border border-emerald-200 w-fit">
              100% Risk-Free Guarantee
            </span>
          </div>

          {/* 3 Step Cards Grid Spanning Full Width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 space-y-4 shadow-2xs hover:shadow-md transition-all group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center shadow-xs">
                  1
                </div>
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Join or Create a Group
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Choose your batch and enroll individually or invite your friends to start forming a group.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 space-y-4 shadow-2xs hover:shadow-md transition-all group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-extrabold text-lg flex items-center justify-center shadow-xs">
                  2
                </div>
                <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Group Grows (Max 30)
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                As more learners join your batch, the total fee is distributed across the group up to 30 learners.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 space-y-4 shadow-2xs hover:shadow-md transition-all group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#00A86B] text-white font-extrabold text-lg flex items-center justify-center shadow-xs">
                  3
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-50 text-[#00A86B]">
                  <Tag className="w-6 h-6" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Everyone Pays Less
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Automated dynamic price reduction is applied instantly to everyone in the batch!
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
