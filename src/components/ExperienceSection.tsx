import React, { useState } from 'react';
import { ExperienceItem, CertificationItem } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
  certifications: CertificationItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  certifications,
}) => {
  const [filterType, setFilterType] = useState<'all' | 'work' | 'upskilling'>('all');

  const filteredExperiences = experiences.filter((exp) => {
    if (filterType === 'all') return true;
    return exp.type === filterType;
  });

  return (
    <section id="trajectory" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#0c0e15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
              04. Work Experience & Career Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Professional Journey & Upskilling Roadmap
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Chronological track record of enterprise software engineering, hands-on development, and proactive professional certifications.
            </p>
          </div>

          {/* Filter toggle */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterType === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Timeline
            </button>
            <button
              onClick={() => setFilterType('work')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterType === 'work'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setFilterType('upskilling')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filterType === 'upskilling'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Upskilling & Programs
            </button>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-slate-800">
          {filteredExperiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
              
              {/* Timeline Indicator Node */}
              <div
                className={`relative z-10 w-8 h-8 sm:w-12 sm:h-12 rounded-xl bg-[#090a0f] border-2 flex items-center justify-center shrink-0 transition-colors shadow-md ${
                  exp.type === 'work'
                    ? 'border-blue-500/80 text-blue-400'
                    : 'border-emerald-500/80 text-emerald-400'
                }`}
              >
                {exp.type === 'work' ? (
                  <Briefcase className="w-4 h-4" />
                ) : (
                  <BookOpen className="w-4 h-4" />
                )}
              </div>

              {/* Experience Card */}
              <div className="flex-1 p-6 sm:p-7 bg-[#090a0f] border border-slate-800/90 hover:border-slate-700/80 rounded-2xl transition-all space-y-4 shadow-sm">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-blue-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span className="tabular-nums">{exp.period}</span>
                    <span aria-hidden="true">·</span>
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Highlights & Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-3 border-t border-slate-800/70 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Certifications Showcase */}
        <div className="pt-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold font-mono">
              Verified Credentials
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Certifications & Professional Credentials
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Credentials earned through structured curricula reinforcing enterprise development, cloud infrastructure, and leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090a0f] border border-slate-800/90 hover:border-slate-700 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Award className="w-6 h-6 text-emerald-400" />
                    <span className="text-xs font-mono text-slate-400">{cert.year}</span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white leading-snug">
                      {cert.title}
                    </h4>
                    <span className="text-xs text-blue-400 font-semibold block mt-0.5">
                      {cert.issuer}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {cert.credentialBadge && (
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400">
                    ✓ {cert.credentialBadge}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
