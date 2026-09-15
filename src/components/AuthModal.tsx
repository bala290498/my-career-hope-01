"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Lock, Mail, User, Phone, ArrowRight } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  initialMode: "login" | "signup";
  onClose: () => void;
}

export default function AuthModal({ isOpen, initialMode, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50">
          <button
            onClick={() => { setMode("login"); setSubmitted(false); }}
            className={`flex-1 py-4 text-sm font-bold transition-all border-b-2 ${
              mode === "login"
                ? "border-[#00A86B] text-[#00A86B] bg-white"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Login to Account
          </button>
          <button
            onClick={() => { setMode("signup"); setSubmitted(false); }}
            className={`flex-1 py-4 text-sm font-bold transition-all border-b-2 ${
              mode === "signup"
                ? "border-[#00A86B] text-[#00A86B] bg-white"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            Join Now (Sign Up)
          </button>
          <button
            onClick={onClose}
            className="p-3 text-slate-400 hover:text-slate-700"
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
                {mode === "login" ? "Welcome Back!" : "Registration Successful!"}
              </h3>
              <p className="text-xs text-slate-500">
                {mode === "login"
                  ? "Redirecting to your learner dashboard..."
                  : "You've successfully reserved your dynamic group pricing spot!"}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#00A86B]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#00A86B]"
                  />
                </div>
              </div>

              {mode === "signup" && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#00A86B]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:border-[#00A86B]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-sm font-bold text-white bg-[#00A86B] hover:bg-[#008f5a] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>{mode === "login" ? "Sign In" : "Join Now & Get Discount"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center text-xs text-slate-500">
                {mode === "login" ? (
                  <span>Don&apos;t have an account? <button type="button" onClick={() => setMode("signup")} className="text-[#00A86B] font-bold underline">Join Now</button></span>
                ) : (
                  <span>Already registered? <button type="button" onClick={() => setMode("login")} className="text-[#00A86B] font-bold underline">Login</button></span>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
