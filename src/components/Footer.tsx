import React from 'react';
import { PortfolioProfile } from '../data/portfolioData';
import { Github, Linkedin, Twitter, ArrowUp, FileText } from 'lucide-react';

interface FooterProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080c] border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="text-base font-bold text-white tracking-tight">
              {profile.name}
            </div>
            <p className="text-slate-400 text-xs mt-1">
              {profile.role} · Based in {profile.location}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#biography" className="hover:text-white transition-colors">
              Biography
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#trajectory" className="hover:text-white transition-colors">
              Trajectory
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-slate-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved. Built with precision and care.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors p-1"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-4 p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors flex items-center gap-1.5"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
