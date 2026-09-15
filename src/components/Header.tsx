"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Menu, X, GraduationCap, ChevronRight } from "lucide-react";

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenAuth: (mode: "login" | "signup") => void;
}

export default function Header({ onOpenSearch, onOpenAuth }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "Programs", href: "#programs" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Us", href: "#why-us" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            href="#home" 
            className="flex items-center gap-3 group"
            onClick={() => setActiveTab("Home")}
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100 text-emerald-600 shadow-xs group-hover:scale-105 transition-transform duration-200">
              <svg className="w-7 h-7" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Custom Logo Icon matching MyCareerHope */}
                <path d="M18 4L22.5 13H32L24.5 19H27.5L18 32L8.5 19H11.5L4 13H13.5L18 4Z" fill="#00A86B" />
                <circle cx="18" cy="8" r="3.5" fill="#0B192C" />
                <path d="M12 16C12 16 15 22 18 22C21 22 24 16 24 16" stroke="#0B192C" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight">mycareer</span>
                <span className="text-xl font-extrabold text-[#00A86B] tracking-tight">hope</span>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase -mt-0.5">
                LEARN &bull; BUILD &bull; LAUNCH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveTab(item.name)}
                  className={`relative py-2 text-sm font-semibold transition-colors duration-150 ${
                    isActive ? "text-[#00A86B]" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00A86B] rounded-full animate-in fade-in zoom-in-95 duration-200" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Icon */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              title="Search Courses"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Login Button */}
            <button
              onClick={() => onOpenAuth("login")}
              className="px-5 py-2.5 text-sm font-semibold text-slate-800 border border-slate-300 rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all shadow-2xs"
            >
              Login
            </button>

            {/* Join Now Button */}
            <button
              onClick={() => onOpenAuth("signup")}
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#00A86B] hover:bg-[#008f5a] rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.name);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  activeTab === item.name
                    ? "bg-emerald-50 text-[#00A86B]"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{item.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth("login");
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50"
            >
              Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth("signup");
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-[#00A86B] hover:bg-[#008f5a] rounded-lg shadow-sm"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
