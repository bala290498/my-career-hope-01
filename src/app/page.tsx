"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import WhoCanAttendSection from "@/components/WhoCanAttendSection";
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
  const [isEligibilityModalOpen, setIsEligibilityModalOpen] = useState(false);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState<string | null>(null);

  const handleOpenAuth = () => {
    setIsAuthModalOpen(true);
  };

  const handleSelectCourse = (title: string) => {
    setSelectedCourseTitle(title);
    setIsAuthModalOpen(true);
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

        {/* Our Courses */}
        <CoursesSection
          onOpenEligibility={() => setIsEligibilityModalOpen(true)}
          onSelectCourse={handleSelectCourse}
        />

        {/* Dedicated Who Can Attend Section */}
        <WhoCanAttendSection
          onOpenEligibility={() => setIsEligibilityModalOpen(true)}
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
