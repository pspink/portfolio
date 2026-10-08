import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowUpRight, Search, Building2, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  selectedTechFilter?: string | null;
  onClearTechFilter?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  selectedTechFilter,
  onClearTechFilter,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'enterprise' | 'java' | 'cloud-scala'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Enterprise Systems' },
    { id: 'java', label: 'Java Applications' },
    { id: 'cloud-scala', label: 'Scala & Cloud' },
  ] as const;

  const filteredProjects = projects.filter((project) => {
    if (activeCategory !== 'all' && project.category !== activeCategory) {
      return false;
    }

    if (selectedTechFilter) {
      const hasTech = project.technologies.some((tech) =>
        tech.toLowerCase().includes(selectedTechFilter.toLowerCase())
      );
      if (!hasTech) return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const inTitle = project.title.toLowerCase().includes(q);
      const inOrg = project.organization.toLowerCase().includes(q);
      const inDesc = project.description.toLowerCase().includes(q);
      const inTech = project.technologies.some((tech) => tech.toLowerCase().includes(q));
      if (!inTitle && !inOrg && !inDesc && !inTech) return false;
    }

    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-slate-800/80 bg-[#090a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold font-mono">
              01. Hands-On Work & Systems
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Projects & Technical Deliverables
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Commercial projects built across Wipro Technologies, VeriFone US, Government of Maharashtra, and Knoldus Software.
            </p>
          </div>

          {selectedTechFilter && (
            <div className="flex items-center gap-2 p-2 bg-blue-950/40 border border-blue-500/30 rounded-lg text-xs text-blue-300">
              <span>Filtered by skill: <strong>{selectedTechFilter}</strong></span>
              {onClearTechFilter && (
                <button
                  onClick={onClearTechFilter}
                  className="ml-2 underline text-blue-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          )}
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 bg-slate-900/60 border border-slate-800 rounded-xl">
          
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[220px] sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Java, CCTNS, VeriFone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0d0f17] border border-slate-800 focus:border-blue-500 text-xs text-slate-200 pl-9 pr-3 py-2 rounded-lg outline-none transition-colors placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Projects Bento Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 border border-slate-800 rounded-2xl bg-slate-900/40">
            <p className="text-sm text-slate-400">
              No projects matched your criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                if (onClearTechFilter) onClearTechFilter();
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-blue-400 hover:text-blue-300 underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-[#0e1018] border border-slate-800/90 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
              >
                {/* Project Image Preview Slot */}
                {project.imageUrl ? (
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1018] via-transparent to-transparent opacity-80" />
                  </div>
                ) : (
                  <div className="aspect-video w-full bg-gradient-to-br from-slate-900 to-[#141829] border-b border-slate-800 flex items-center justify-center p-6 text-center">
                    <div className="space-y-2">
                      <Layers className="w-8 h-8 text-blue-500/70 mx-auto" />
                      <span className="text-xs text-slate-400 font-mono">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Clean unboxed metadata with dot separator */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <span className="text-blue-400 font-semibold">{project.organization}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Stats Strip */}
                  {project.stats && (
                    <div className="pt-2 grid grid-cols-3 gap-2 border-t border-slate-800/60">
                      {project.stats.map((st, sIdx) => (
                        <div key={sIdx} className="space-y-0.5">
                          <div className="text-xs font-bold text-white font-mono">
                            {st.value}
                          </div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                            {st.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies list */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span>Project Details & Deliverables</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
