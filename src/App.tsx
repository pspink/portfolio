import React, { useState } from 'react';
import {
  PortfolioProfile,
  defaultProfile,
  defaultProjects,
  defaultSkills,
  defaultExperiences,
  defaultCertifications,
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { BiographySection } from './components/BiographySection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { CustomizeModal } from './components/CustomizeModal';
import { Footer } from './components/Footer';

const STORAGE_KEY = 'portfolio_profile_priyanka_github_v7';

export default function App() {
  const [profile, setProfile] = useState<PortfolioProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultProfile,
          ...parsed,
          avatarUrl: '',
          linkedin: 'https://www.linkedin.com/in/sharma-pri',
          github: 'https://github.com/pspink',
        };
      }
    } catch {
      // Fallback
    }
    return defaultProfile;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [selectedTechFilter, setSelectedTechFilter] = useState<string | null>(null);

  const handleSaveProfile = (updated: PortfolioProfile) => {
    setProfile(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  };

  const handleResetProfile = () => {
    setProfile(defaultProfile);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to remove from localStorage', e);
    }
  };

  const handleSelectSkill = (skillName: string) => {
    setSelectedTechFilter(skillName);
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Top Bar */}
      <Navbar
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCustomize={() => setIsCustomizeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Selected Works: Exact Resume Projects */}
        <ProjectsSection
          projects={defaultProjects}
          selectedTechFilter={selectedTechFilter}
          onClearTechFilter={() => setSelectedTechFilter(null)}
        />

        {/* Biography & Professional Summary */}
        <BiographySection
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Core Competencies Matrix */}
        <SkillsSection
          skills={defaultSkills}
          onSelectSkill={handleSelectSkill}
        />

        {/* Career Trajectory & Certifications */}
        <ExperienceSection
          experiences={defaultExperiences}
          certifications={defaultCertifications}
        />

        {/* Contact & Availability */}
        <ContactSection
          profile={profile}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Full Formatted Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
      />

      {/* Profile Customizer Modal */}
      <CustomizeModal
        isOpen={isCustomizeOpen}
        onClose={() => setIsCustomizeOpen(false)}
        profile={profile}
        onSave={handleSaveProfile}
        onReset={handleResetProfile}
      />
    </div>
  );
}
