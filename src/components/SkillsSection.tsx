import React, { useState } from 'react';
import { SkillItem } from '../data/portfolioData';
import { Code2, Database, Cloud, Wrench, Search, ArrowUpRight } from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillItem[];
  onSelectSkill: (skillName: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, onSelectSkill }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'databases' | 'cloud' | 'tools'>('all');
  const [skillSearch, setSkillSearch] = useState('');

  const tabs = [
    { id: 'all', label: 'All Competencies', icon: Code2 },
    { id: 'languages', label: 'Programming & Scripting', icon: Code2 },
    { id: 'databases', label: 'RDBMS & Databases', icon: Database },
    { id: 'cloud', label: 'Cloud, VMware & DevOps', icon: Cloud },
    { id: 'tools', label: 'Platforms & Tools', icon: Wrench },
  ] as const;

  const filteredSkills = skills.filter((item) => {
    if (activeTab !== 'all' && item.category !== activeTab) {
      return false;
    }
    if (skillSearch.trim()) {
      return item.name.toLowerCase().includes(skillSearch.toLowerCase());
    }
    return true;
  });

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
              03. Core Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Stack & Skill Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Grounded in enterprise Java and relational database engineering, augmented by modern Scala, AWS, Generative AI, and VMware cloud certifications.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Java, SQL, AWS, Scala..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="w-full bg-[#0d0f17] border border-slate-800 focus:border-blue-500 text-xs text-slate-200 pl-9 pr-3 py-2 rounded-lg outline-none transition-colors placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none border-b border-slate-800">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-white font-semibold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => onSelectSkill(skill.name)}
              className="group p-4 bg-[#0d0f17] hover:bg-[#121522] border border-slate-800/90 hover:border-slate-700 rounded-xl transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3"
              title={`Click to filter projects with ${skill.name}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    <span>{skill.name}</span>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" title="Core Specialty" />
                    )}
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5">
                    <span className="font-mono text-slate-300 font-medium">
                      {skill.experience}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-slate-300 tabular-nums">
                    {skill.level}%
                  </span>
                  <div className="text-[10px] text-blue-400 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Filter</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              </div>

              <div className="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Skill Highlights Callout */}
        <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>
              Certifications earned in Scala (Lightbend), VMware Virtualization (VCTA-DCV 2023), AWS, Generative AI & McKinsey Leadership.
            </span>
          </div>

          <a
            href="#trajectory"
            className="text-blue-400 hover:text-blue-300 font-semibold whitespace-nowrap"
          >
            View certifications & trajectory →
          </a>
        </div>

      </div>
    </section>
  );
};
