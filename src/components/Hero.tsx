import React, { useState } from 'react';
import { PortfolioProfile } from '../data/portfolioData';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowDown,
  Copy,
  Check,
  FileText,
  MapPin,
  Award,
  CheckCircle2,
  GraduationCap,
  Calendar,
  Sparkles,
  Layers,
} from 'lucide-react';

interface HeroProps {
  profile: PortfolioProfile;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const verifiedHighlights = [
    { title: "Lightbend Scala Professional", issuer: "Lightbend Inc.", badge: "Certified" },
    { title: "VMware Data Centre Virtualization", issuer: "VMware (VCTA-DCV 2023)", badge: "Certified" },
    { title: "McKinsey Forward Program", issuer: "McKinsey & Company", badge: "Leadership" },
    { title: "AWS & AI Skill Reboot", issuer: "Infosys Springboard", badge: "Cloud & AI" },
    { title: "B. Tech Computer Science", issuer: "ITME Kolkata (2010–2014)", badge: "Degree" },
  ];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden border-b border-slate-800/80">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/25 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status & Immediate Availability Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold">{profile.status}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {profile.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold font-mono">
                {profile.subtitle}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                Building reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">Java & Enterprise Systems</span> with Cloud & AI readiness.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                {profile.bioIntro}
              </p>
            </div>

            {/* Re-entry Highlight Note Banner */}
            <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-blue-300">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Returning Professional · Upskilled & Certified</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Lightbend Scala Certified · VMware VCTA-DCV Certified · McKinsey Forward Program · Infosys Springboard AWS & AI.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/25 transition-all whitespace-nowrap active:scale-[0.98]"
              >
                <span>View Work Experience</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 hover:text-white rounded-lg border border-slate-700/80 transition-all whitespace-nowrap active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Full Resume</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 bg-slate-900/70 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors whitespace-nowrap"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{profile.email}</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-2 px-3.5 py-3 text-sm font-mono text-slate-300 bg-slate-900/70 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors whitespace-nowrap"
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span>{profile.phone}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social & Professional Profile Handles */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-1">
                Profiles
              </span>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-slate-300 hover:text-blue-400 hover:bg-slate-800/80 rounded-lg border border-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg border border-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 text-slate-400 hover:text-amber-400 hover:bg-slate-800/80 rounded-lg border border-slate-800 transition-colors"
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Quantitative Metrics (Claim-to-Proof Adjacency) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {profile.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                    {metric.number}
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-slate-500 leading-tight">
                    {metric.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Professional Qualifications & Executive Summary Card (No Photo) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer subtle glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-lg opacity-60" />

              <div className="relative bg-[#0d0f17] rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl p-6 sm:p-7 space-y-6">
                
                {/* Header Lockup with Initials Monogram */}
                <div className="flex items-center gap-4 pb-5 border-b border-slate-800">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-extrabold text-xl font-display shadow-md shadow-blue-600/20 shrink-0">
                    PS
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-blue-400 font-medium">
                      {profile.role}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available Immediately · Bangalore</span>
                    </div>
                  </div>
                </div>

                {/* Verified Credentials List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    <span>Verified Credentials</span>
                    <span className="text-blue-400 font-mono">6 Total</span>
                  </div>

                  <div className="space-y-2.5">
                    {verifiedHighlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-[#090a0f] border border-slate-800/90 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-white truncate">
                              {item.title}
                            </div>
                            <div className="text-[11px] text-slate-400 truncate">
                              {item.issuer}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800 shrink-0">
                          {item.badge}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Technical Domains strip */}
                <div className="pt-2 border-t border-slate-800/80 space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Core Technical Pillars
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Core Java", "JDBC & Swing", "Scala (Lightbend)", "Oracle & MySQL", "AWS Cloud", "VMware vSphere", "Generative AI"].map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Action Footer */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                  <span>Wipro Technologies Alum</span>
                  <button
                    onClick={onOpenResume}
                    className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Full CV</span>
                    <FileText className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
