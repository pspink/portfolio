import React from 'react';
import { PortfolioProfile, defaultEducation } from '../data/portfolioData';
import { ShieldCheck, Award, GraduationCap, Globe, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BiographySectionProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
}

export const BiographySection: React.FC<BiographySectionProps> = ({ profile, onOpenResume }) => {
  const highlights = [
    {
      title: "Strong Core Java & Database Foundation",
      description: "Hands-on experience in enterprise Java application development, Swing desktop user interfaces, JDBC persistence, and normalized SQL database design (Oracle, MySQL, SQL Server).",
    },
    {
      title: "Continuous Upskilling & Cloud Readiness",
      description: "Proactively updated technical skill set through VMware Data Centre Virtualization (VCTA-DCV 2023), Lightbend Scala Professional Certification, and AWS & AI training via Infosys Springboard.",
    },
    {
      title: "Leadership & Structured Problem Solving",
      description: "Graduate of the McKinsey Forward Program, mastering critical thinking, digital adaptability, structured communication, and leadership required for fast-paced modern engineering teams.",
    },
    {
      title: "Immediate Bangalore Availability",
      description: "Currently based in Bangalore, India with complete readiness to join immediately for full-time software developer and returning professional programs.",
    },
  ];

  return (
    <section id="biography" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#0c0e15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Editorial Section Header */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
            02. Professional Summary & Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Background, Returning Narrative & Value Proposition
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A results-driven developer bringing proven enterprise foundations, verified cloud certifications, and a dedicated re-entry focus.
          </p>
        </div>

        {/* Narrative & Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="text-lg text-white font-medium leading-relaxed">
              {profile.bioIntro}
            </p>
            <p>
              {profile.bioExtended}
            </p>

            {/* Structured Return-to-Work Context Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-500/30 space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Return-to-Work Context & Intent</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {profile.reentryContext}
              </p>
            </div>

            {/* Spoken Languages & Personal Info */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#090a0f] border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>Languages Spoken</span>
                </div>
                <div className="text-xs text-slate-300">
                  {profile.languagesSpoken.join(' · ')}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#090a0f] border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Education</span>
                </div>
                <div className="text-xs text-slate-300">
                  B. Tech in Computer Science Engineering (2010–2014)
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                <span>Read Formatted Resume</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg border border-slate-700 transition-colors"
              >
                <span>Direct Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Key Value Pillars for Employers
            </h3>

            <div className="space-y-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#090a0f] border border-slate-800/90 space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Academic Institution Card */}
            {defaultEducation.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="text-xs font-bold text-white">
                  {edu.degree}
                </div>
                <div className="text-xs text-blue-400">
                  {edu.institution}, {edu.location} ({edu.period})
                </div>
                <p className="text-[11px] text-slate-400 pt-1 leading-normal">
                  {edu.details}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};
