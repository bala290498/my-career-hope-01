"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureBar from "@/components/FeatureBar";
import CoursesSection from "@/components/CoursesSection";
import DynamicPricingSection from "@/components/DynamicPricingSection";
import StatsFooter from "@/components/StatsFooter";
import VideoModal from "@/components/VideoModal";
import SearchModal from "@/components/SearchModal";
import AuthModal from "@/components/AuthModal";
import EligibilityModal from "@/components/EligibilityModal";

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");
  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState<string | null>(null);

  const handleOpenAuth = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleSelectCourse = (title: string) => {
    setSelectedCourseTitle(title);
    setIsAuthModalOpen(true);
    setAuthMode("signup");
  };

  const handleExplorePrograms = () => {
    const coursesElem = document.getElementById("courses");
    if (coursesElem) {
      coursesElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Header
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenAuth={handleOpenAuth}
      />

      <main className="flex-grow">
        {/* Top Hero Section */}
        <Hero
          onOpenVideo={() => setIsVideoModalOpen(true)}
          onExplorePrograms={handleExplorePrograms}
        />

        {/* 6-Grid Key Highlights Feature Bar */}
        <FeatureBar />

        {/* Our Courses & Who Can Attend */}
        <CoursesSection
          onOpenEligibility={() => setIsEligibilityModalOpen(true)}
          onSelectCourse={handleSelectCourse}
        />

        {/* Dynamic Group Pricing Banner & How It Works */}
        <DynamicPricingSection
          onOpenAuth={handleOpenAuth}
        />
      </main>

      {/* Navy Statistics Bar & Footer */}
      <StatsFooter />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectCourse={handleSelectCourse}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        initialMode={authMode}
        onClose={() => setIsAuthModalOpen(false)}
      />

      <EligibilityModal
        isOpen={isEligibilityModalOpen}
        onClose={() => setIsEligibilityModalOpen(false)}
        onSelectCourse={handleSelectCourse}
      />
    </div>
  );
}
