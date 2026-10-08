import React, { useEffect, useState } from 'react';
import {
  PortfolioProfile,
  defaultExperiences,
  defaultSkills,
  defaultCertifications,
  defaultEducation,
} from '../data/portfolioData';
import { X, Printer, Check, Copy, MapPin, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: PortfolioProfile;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, profile }) => {
  const [copiedResume, setCopiedResume] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textSummary = `
PRIYANKA SHARMA
Software Developer | Java | Cloud & AI | Returning Professional
${profile.phone} | ${profile.email} | ${profile.linkedin} | ${profile.location}

PROFESSIONAL SUMMARY
${profile.bioIntro} ${profile.bioExtended}

CORE COMPETENCIES
Languages: Java (Core, Swing, JDBC, Applets, JUnit) | Scala | SQL | C | HTML | CSS | Unix Shell Scripting
Databases: MySQL | Oracle SQL | SQL Server | RDBMS | SQL Profiler
Cloud & DevOps: Amazon AWS | Cloud Computing | VMware vSphere / vCenter / ESXi | GIT | Apache Ant
Platforms & Tools: Ubuntu | Unix OS | Unix Debugging | Generative AI

WORK EXPERIENCE
Project Engineer – Java Developer (2014 – 2016)
Wipro Technologies India Pvt. Ltd. | Bangalore, India
• Participated in the design phase of the Reference Set Repository system for VeriFone, US, working within cross-functional Agile teams.
• Developed Java modules for the Crime and Criminal Tracking Network System (CCTNS), a mission-critical government project for Maharashtra, India.
• Built 'Order Tracking System', a standalone Java application enabling retailers to manage customer orders end-to-end — from placement through delivery, cancellation, and status updates.
• Designed 'Ship Reservation System', a desktop application with role-based access for both clients and administrators.
• Engineered an Online Banking Application and an Online Library Application during RDBMS training, demonstrating full-stack database development skills.

Software Consultant (Scala) (Oct 2021 – Mar 2022)
Knoldus Software LLP | Remote
• Upskilled in Scala functional programming and contributed to an internal product during a structured reintegration program.
• Achieved Lightbend Scala Professional Certification, demonstrating proficiency in the Scala ecosystem and reactive programming.

CAREER DEVELOPMENT & UPSKILLING
Professional Re-entry & Certification Program (Jan 2024 – Jan 2025)
Self-Directed / Structured Programs
• Completed McKinsey Forward Program — a leadership and problem-solving program for returning professionals.
• Attended Technical Skill Reboot with Infosys Springboard, focusing on Amazon AWS and Artificial Intelligence.
• Completed Professional Skill Reboot Program with HerKey, a platform dedicated to supporting women's return to the workforce.

Career Break – VMware Certification (Mar 2022 – Dec 2023)
• Achieved VMware Certified Technical Associate – Data Centre Virtualization (2023), adding cloud infrastructure skills to her development background.

Career Break – Certifications & Self-Development (2019 – 2021)
• Earned Java Certification (Udemy) — reinforcing core development fundamentals.
• Earned Selenium Certification (Udemy) — gaining expertise in automated testing frameworks.

CERTIFICATIONS
• Lightbend Scala Professional Certification
• VMware Certified Technical Associate – Data Centre Virtualization (2023)
• Java Developer Certification — Udemy
• Selenium Test Automation Certification — Udemy
• AWS & AI Technical Skill Reboot — Infosys Springboard
• McKinsey Forward Program — Leadership & Professional Skills

EDUCATION
B. Tech – Computer Science Engineering (2010 – 2014)
Institute of Technology and Marine Engineering, Kolkata | India

ADDITIONAL INFORMATION
Languages: English (Professional), Hindi (Native), Bengali (Native)
Date of Birth: 11th March 1992
Note: Career gaps reflect planned family relocation (India to USA and back), maternity leaves, and family caregiving — periods actively used to pursue professional certifications and structured return-to-work programs. Currently based in Bangalore and available to join immediately.
    `.trim();

    navigator.clipboard.writeText(textSummary);
    setCopiedResume(true);
    setTimeout(() => setCopiedResume(false), 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 print:p-0 print:bg-white"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0d0f17] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 print:border-none print:shadow-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090a0f] print:hidden">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <span>Curriculum Vitae</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-blue-400 font-semibold">{profile.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              {copiedResume ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Surface */}
        <div className="p-8 sm:p-12 space-y-7 max-h-[82vh] overflow-y-auto bg-[#0a0c13] print:max-h-none print:p-8 print:bg-white print:text-slate-900 font-sans">
          
          {/* Resume Header */}
          <div className="border-b border-slate-800 print:border-slate-300 pb-5 text-center sm:text-left space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                PRIYANKA SHARMA
              </h1>
              <span className="text-xs sm:text-sm font-semibold text-blue-400 print:text-blue-800">
                Software Developer | Java | Cloud & AI | Returning Professional
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs text-slate-400 print:text-slate-700">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-400" />
                {profile.phone}
              </span>
              <span aria-hidden="true">|</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-400" />
                {profile.email}
              </span>
              <span aria-hidden="true">|</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 print:text-blue-700 hover:underline flex items-center gap-1">
                <Linkedin className="w-3 h-3" />
                LinkedIn Profile
              </a>
              <span aria-hidden="true">|</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-400" />
                {profile.location}
              </span>
            </div>
          </div>

          {/* PROFESSIONAL SUMMARY */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed text-justify">
              Results-driven Software Developer with about 3 years of hands-on experience in Java application development, database design, and enterprise systems. Returning professional actively seeking opportunities through structured return-to-work programs. Has proactively stayed current through certifications in Scala, AWS, Cloud Computing, Generative AI, and VMware virtualization. Completed the McKinsey Forward Program and participated in upskilling initiatives through HerKey and Infosys Springboard. Brings a renewed perspective, strong technical foundation, and a commitment to making a meaningful re-entry into the tech workforce.
            </p>
          </div>

          {/* CORE COMPETENCIES */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
              CORE COMPETENCIES
            </h2>
            <div className="space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <p><strong className="text-white print:text-black">Languages:</strong> Java (Core, Swing, JDBC, Applets, JUnit) | Scala | SQL | C | HTML | CSS | Unix Shell Scripting</p>
              <p><strong className="text-white print:text-black">Databases:</strong> MySQL | Oracle SQL | SQL Server | RDBMS | SQL Profiler</p>
              <p><strong className="text-white print:text-black">Cloud & DevOps:</strong> Amazon AWS | Cloud Computing | VMware vSphere / vCenter / ESXi | GIT | Apache Ant</p>
              <p><strong className="text-white print:text-black">Platforms & Tools:</strong> Ubuntu | Unix OS | Unix Debugging | Generative AI</p>
            </div>
          </div>

          {/* WORK EXPERIENCE */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
              WORK EXPERIENCE
            </h2>

            {/* Wipro Technologies */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="text-white print:text-black">Project Engineer – Java Developer</strong>
                  <div className="text-blue-400 print:text-blue-800 font-medium">Wipro Technologies India Pvt. Ltd. | Bangalore, India</div>
                </div>
                <span className="font-mono text-slate-400 print:text-slate-600">2014 – 2016</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Participated in the design phase of the Reference Set Repository system for VeriFone, US, working within cross-functional Agile teams.</li>
                <li>Developed Java modules for the Crime and Criminal Tracking Network System (CCTNS), a mission-critical government project for Maharashtra, India.</li>
                <li>Built 'Order Tracking System', a standalone Java application enabling retailers to manage customer orders end-to-end — from placement through delivery, cancellation, and status updates.</li>
                <li>Designed 'Ship Reservation System', a desktop application with role-based access for both clients and administrators.</li>
                <li>Engineered an Online Banking Application and an Online Library Application during RDBMS training, demonstrating full-stack database development skills.</li>
              </ul>
            </div>

            {/* Knoldus Software */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="text-white print:text-black">Software Consultant (Scala)</strong>
                  <div className="text-blue-400 print:text-blue-800 font-medium">Knoldus Software LLP | Remote</div>
                </div>
                <span className="font-mono text-slate-400 print:text-slate-600">Oct 2021 – Mar 2022</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Upskilled in Scala functional programming and contributed to an internal product during a structured reintegration program.</li>
                <li>Achieved Lightbend Scala Professional Certification, demonstrating proficiency in the Scala ecosystem and reactive programming.</li>
              </ul>
            </div>
          </div>

          {/* CAREER DEVELOPMENT & UPSKILLING */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
              CAREER DEVELOPMENT & UPSKILLING
            </h2>

            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs">
                <div>
                  <strong className="text-white print:text-black">Professional Re-entry & Certification Program</strong>
                  <div className="text-slate-400 print:text-slate-600">Self-Directed / Structured Programs</div>
                </div>
                <span className="font-mono text-slate-400 print:text-slate-600">Jan 2024 – Jan 2025</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Completed McKinsey Forward Program — a leadership and problem-solving program for returning professionals.</li>
                <li>Attended Technical Skill Reboot with Infosys Springboard, focusing on Amazon AWS and Artificial Intelligence.</li>
                <li>Completed Professional Skill Reboot Program with HerKey, a platform dedicated to supporting women's return to the workforce.</li>
              </ul>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between items-baseline text-xs">
                <strong className="text-white print:text-black">Career Break – VMware Certification</strong>
                <span className="font-mono text-slate-400 print:text-slate-600">Mar 2022 – Dec 2023</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Achieved VMware Certified Technical Associate – Data Centre Virtualization (2023), adding cloud infrastructure skills to her development background.</li>
              </ul>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between items-baseline text-xs">
                <strong className="text-white print:text-black">Career Break – Certifications & Self-Development</strong>
                <span className="font-mono text-slate-400 print:text-slate-600">2019 – 2021</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800">
                <li>Earned Java Certification (Udemy) — reinforcing core development fundamentals.</li>
                <li>Earned Selenium Certification (Udemy) — gaining expertise in automated testing frameworks.</li>
              </ul>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 print:text-slate-800">
              <li>Lightbend Scala Professional Certification</li>
              <li>VMware Certified Technical Associate – Data Centre Virtualization (2023)</li>
              <li>Java Developer Certification — Udemy</li>
              <li>Selenium Test Automation Certification — Udemy</li>
              <li>AWS & AI Technical Skill Reboot — Infosys Springboard</li>
              <li>McKinsey Forward Program — Leadership & Professional Skills</li>
            </ul>
          </div>

          {/* EDUCATION */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
              EDUCATION
            </h2>
            <div className="flex justify-between items-baseline text-xs">
              <div>
                <strong className="text-white print:text-black">B. Tech – Computer Science Engineering</strong>
                <div className="text-slate-400 print:text-slate-600">Institute of Technology and Marine Engineering, Kolkata | India</div>
              </div>
              <span className="font-mono text-slate-400 print:text-slate-600">2010 – 2014</span>
            </div>
          </div>

          {/* ADDITIONAL INFORMATION */}
          <div className="space-y-2 border-t border-slate-800 print:border-slate-300 pt-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 print:text-blue-900 border-b border-slate-800 print:border-slate-300 pb-1">
              ADDITIONAL INFORMATION
            </h2>
            <div className="space-y-1 text-xs text-slate-300 print:text-slate-800 leading-relaxed">
              <p><strong className="text-white print:text-black">Languages:</strong> English (Professional), Hindi (Native), Bengali (Native)</p>
              <p><strong className="text-white print:text-black">Date of Birth:</strong> 11th March 1992</p>
              <p className="italic text-slate-400 print:text-slate-700 pt-1">
                <strong>Note:</strong> Career gaps reflect planned family relocation (India to USA and back), maternity leaves, and family caregiving — periods actively used to pursue professional certifications and structured return-to-work programs. Currently based in Bangalore and available to join immediately.
              </p>
            </div>
          </div>

        </div>

        {/* Footer toolbar */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#090a0f] flex items-center justify-end print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
