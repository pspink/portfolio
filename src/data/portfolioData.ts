export interface Project {
  id: string;
  title: string;
  organization: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'all' | 'enterprise' | 'java' | 'cloud-scala';
  categoryLabel: string;
  year: string;
  imageUrl?: string;
  stats?: { label: string; value: string }[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  architectureHighlights: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  experience: string;
  category: 'languages' | 'databases' | 'cloud' | 'tools';
  highlight?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'work' | 'upskilling';
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
  credentialBadge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
}

export interface PortfolioProfile {
  name: string;
  role: string;
  subtitle: string;
  tagline: string;
  bioIntro: string;
  bioExtended: string;
  reentryContext: string;
  avatarUrl: string;
  location: string;
  email: string;
  phone: string;
  status: string;
  github: string;
  linkedin: string;
  twitter: string;
  languagesSpoken: string[];
  dob: string;
  metrics: {
    number: string;
    label: string;
    detail: string;
  }[];
}

export const defaultProfile: PortfolioProfile = {
  name: "Priyanka Sharma",
  role: "Software Developer",
  subtitle: "Java · Cloud & AI · Returning Professional",
  tagline: "Results-driven Software Developer with about 3 years of hands-on experience in Java application development, database design, and enterprise systems.",
  bioIntro: "I am a results-driven Software Developer with about 3 years of hands-on experience in Java application development, database design, and enterprise systems. As a returning professional, I am actively seeking opportunities through structured return-to-work programs and full-time software engineering roles.",
  bioExtended: "I have proactively stayed current throughout my career journey through specialized certifications in Scala, Amazon AWS, Cloud Computing, Generative AI, and VMware virtualization. Having completed the McKinsey Forward Program and participated in upskilling initiatives through HerKey and Infosys Springboard, I bring a renewed perspective, strong technical foundation, and an energetic commitment to making an immediate, meaningful contribution to your engineering organization.",
  reentryContext: "Career gaps reflect planned family relocation (India to USA and back), maternity leaves, and family caregiving — periods actively dedicated to pursuing rigorous professional certifications and structured return-to-work upskilling programs. Currently based in Bangalore and available to join immediately.",
  avatarUrl: "",
  location: "Bangalore, India",
  email: "psrocks1992@gmail.com",
  phone: "+91 96111 18622",
  status: "Available in Bangalore to Join Immediately",
  github: "https://github.com/psrocks1992",
  linkedin: "https://www.linkedin.com/in/sharma-pri",
  twitter: "https://x.com/psrocks1992",
  languagesSpoken: ["English (Professional)", "Hindi (Native)", "Bengali (Native)"],
  dob: "11th March 1992",
  metrics: [
    { number: "~3 Yrs", label: "Hands-on Experience", detail: "Enterprise Java & database systems" },
    { number: "6+", label: "Verified Credentials", detail: "Scala, VMware, AWS/AI, McKinsey" },
    { number: "100%", label: "Immediate Availability", detail: "Based in Bangalore, ready to join" },
    { number: "B.Tech", label: "Computer Science", detail: "Core engineering foundation" },
  ],
};

export const defaultProjects: Project[] = [
  {
    id: "cctns-system",
    title: "Crime and Criminal Tracking Network System (CCTNS)",
    organization: "Wipro Technologies / Government of Maharashtra",
    tagline: "Mission-critical state government policing records and criminal tracking portal.",
    description: "Developed secure core Java modules and database interfaces for the Crime and Criminal Tracking Network System (CCTNS), enabling automated policing records across Maharashtra police stations.",
    longDescription: "CCTNS is a landmark e-governance initiative connecting police stations across the state to a centralized database. Contributed to the development of Java data persistence layers, secure incident report tracking modules, and Oracle SQL queries ensuring strict data confidentiality, transaction integrity, and high availability.",
    category: "enterprise",
    categoryLabel: "Enterprise Government Systems",
    year: "2015 – 2016",
    imageUrl: "/src/assets/images/cctns_records_system_1791447031751.jpg",
    stats: [
      { label: "Role", value: "Java Module Dev" },
      { label: "Deployment", value: "Maharashtra Police" },
      { label: "Integrity", value: "ACID Compliant" },
    ],
    technologies: ["Java (Core)", "JDBC", "Oracle SQL", "Unix OS", "Security", "Apache Ant"],
    featured: true,
    architectureHighlights: [
      "Designed and implemented robust Java core business modules for FIR and case tracking",
      "Optimized relational Oracle SQL schema queries for criminal record indexing",
      "Enforced strict role-based access control and audit trails across sensitive record queries",
      "Tested database transaction rollbacks to prevent data corruption during network drops",
    ],
  },
  {
    id: "order-tracking-system",
    title: "Retail Order Tracking System",
    organization: "Wipro Technologies",
    tagline: "End-to-end desktop Java application for retail order fulfillment and status lifecycle.",
    description: "Built a standalone Java desktop application enabling retailers to track customer orders from placement through delivery, cancellation, and automated status dispatches.",
    longDescription: "Engineered a comprehensive standalone inventory and order processing application utilizing Java Swing for intuitive operator interfaces and JDBC for relational database connectivity. The system automated order state machines, reduced order processing bottlenecks, and provided instant invoice and delivery status reporting.",
    category: "java",
    categoryLabel: "Java Desktop & Retail",
    year: "2015",
    imageUrl: "/src/assets/images/retail_order_tracking_1791447052772.jpg",
    stats: [
      { label: "Architecture", value: "Standalone Desktop" },
      { label: "Database", value: "MySQL / RDBMS" },
      { label: "Lifecycle", value: "End-to-End" },
    ],
    technologies: ["Java (Core, Swing)", "JDBC", "MySQL", "RDBMS", "SQL Profiler"],
    featured: true,
    architectureHighlights: [
      "Created ergonomic Java Swing desktop views for counter agents and warehouse staff",
      "Implemented transactional order status pipeline: Order Placed → In Packing → Dispatched → Delivered",
      "Integrated SQL transaction management handling concurrent order reservations and cancellations",
      "Engineered automated stock level checks with warning flags for low-inventory items",
    ],
  },
  {
    id: "verifone-rsr",
    title: "Reference Set Repository (RSR)",
    organization: "Wipro Technologies / VeriFone US",
    tagline: "Payment terminal configuration and reference dataset repository for VeriFone US.",
    description: "Participated in the architectural design phase of the Reference Set Repository system for VeriFone US within cross-functional Agile Scrum teams.",
    longDescription: "Collaborated with international stakeholders and senior architects to design the Reference Set Repository (RSR). The system acts as the single source of truth for payment terminal firmware configurations, EMV reference rules, and card brand parameters across point-of-sale device fleets.",
    category: "enterprise",
    categoryLabel: "FinTech & Payment POS",
    year: "2014 – 2015",
    stats: [
      { label: "Client", value: "VeriFone, US" },
      { label: "Methodology", value: "Agile / Scrum" },
      { label: "Phase", value: "Design & Analysis" },
    ],
    technologies: ["Java", "Oracle SQL", "Agile / Scrum", "Enterprise Architecture", "UML Design"],
    featured: true,
    architectureHighlights: [
      "Collaborated in Agile sprints to draft functional specifications and system interface diagrams",
      "Modelled data relationships for global payment terminal configurations and firmware parameters",
      "Conducted feasibility reviews for high-throughput batch synchronization across distributed terminals",
      "Authored architectural technical documentation and traceability matrices",
    ],
  },
  {
    id: "ship-reservation-system",
    title: "Ship Reservation System",
    organization: "Wipro Technologies",
    tagline: "Desktop cruise and cargo voyage reservation portal with role-based access control.",
    description: "Designed desktop application with role-based access for both clients and administrators, facilitating voyage scheduling, cabin selection, and passenger billing.",
    longDescription: "A client-server application engineered with Java Swing and relational databases, establishing separate administrative and passenger portals. Clients could browse maritime itineraries, reserve berths, and verify tickets, while port administrators managed ship capacities and schedules.",
    category: "java",
    categoryLabel: "Java Application",
    year: "2015",
    stats: [
      { label: "Access Model", value: "Role-Based (RBAC)" },
      { label: "UI Framework", value: "Java Swing" },
      { label: "Database", value: "SQL Server" },
    ],
    technologies: ["Java", "Java Swing", "JDBC", "SQL Server", "Role-Based Access"],
    featured: false,
    architectureHighlights: [
      "Engineered custom role-based access control layer separating passenger views from admin controls",
      "Interactive deck and berth selection grid with real-time seat reservation locking",
      "Integrated automated invoice calculation with ticket receipt generation",
    ],
  },
  {
    id: "reactive-scala-knoldus",
    title: "Reactive Product Engineering & Lightbend Scala",
    organization: "Knoldus Software LLP",
    tagline: "Functional programming and reactive architectures under Lightbend certification standards.",
    description: "Upskilled in Scala functional programming and contributed to an internal product during a structured reintegration program, achieving Lightbend Scala Professional Certification.",
    longDescription: "During a structured return-to-work engagement at Knoldus Software, deepened expertise in functional programming paradigms, immutable data structures, pattern matching, and asynchronous reactive architectures in Scala. Completed rigorous hands-on assignments culminating in official Lightbend certification.",
    category: "cloud-scala",
    categoryLabel: "Scala & Reactive Cloud",
    year: "2021 – 2022",
    stats: [
      { label: "Certification", value: "Lightbend Scala" },
      { label: "Paradigm", value: "Functional & Reactive" },
      { label: "Engagement", value: "Return-to-Work" },
    ],
    technologies: ["Scala", "Functional Programming", "Reactive Streams", "sbt", "Git", "Lightbend"],
    featured: false,
    architectureHighlights: [
      "Implemented pure functional transformations utilizing Scala higher-order functions and collections",
      "Applied immutability and tail-recursion to guarantee thread safety without manual locking",
      "Achieved Lightbend Scala Professional Certification demonstrating mastery of core Scala semantics",
    ],
  },
  {
    id: "online-banking-library",
    title: "Online Banking & Digital Library RDBMS Applications",
    organization: "Wipro Technologies / RDBMS Program",
    tagline: "Full-stack transactional database applications demonstrating ACID consistency.",
    description: "Engineered an Online Banking Application and an Online Library Application during RDBMS training, demonstrating full-stack database development skills.",
    longDescription: "Developed twin transactional applications demonstrating mastery of relational databases, stored procedures, multi-table joins, and concurrency control. The banking portal modeled fund transfers, balance ledger reconciliation, and overdraft protection, while the library portal tracked catalog checkouts and overdue fee calculations.",
    category: "enterprise",
    categoryLabel: "Database Systems",
    year: "2014",
    stats: [
      { label: "Focus", value: "Full-Stack RDBMS" },
      { label: "Consistency", value: "ACID Compliant" },
      { label: "Profiling", value: "SQL Profiler" },
    ],
    technologies: ["Java", "JDBC", "MySQL", "Oracle SQL", "SQL Profiler", "Unix Shell"],
    featured: false,
    architectureHighlights: [
      "Implemented atomic fund transfer transactions with isolation guarantees and rollback handlers",
      "Normalized database tables to 3NF to eliminate duplicate data and ensure relational consistency",
      "Utilized SQL Profiler to analyze query execution plans and index hotspots",
    ],
  },
];

export const defaultSkills: SkillItem[] = [
  // Languages
  { name: "Java (Core, Swing, JDBC, Applets, JUnit)", level: 94, experience: "3 yrs hands-on", category: "languages", highlight: true },
  { name: "Scala (Functional Programming)", level: 86, experience: "Lightbend Certified", category: "languages", highlight: true },
  { name: "SQL (Complex Queries, Joins, Triggers)", level: 90, experience: "3 yrs hands-on", category: "languages", highlight: true },
  { name: "Unix Shell Scripting", level: 82, experience: "2 yrs hands-on", category: "languages" },
  { name: "C Programming", level: 80, experience: "Academic foundation", category: "languages" },
  { name: "HTML & CSS", level: 85, experience: "Web fundamentals", category: "languages" },

  // Databases
  { name: "MySQL", level: 92, experience: "Production & Projects", category: "databases", highlight: true },
  { name: "Oracle SQL", level: 88, experience: "Enterprise Wipro", category: "databases", highlight: true },
  { name: "SQL Server", level: 84, experience: "Enterprise Projects", category: "databases" },
  { name: "RDBMS Design & Normalization", level: 90, experience: "Core Competency", category: "databases", highlight: true },
  { name: "SQL Profiler & Query Tuning", level: 82, experience: "Trained", category: "databases" },

  // Cloud & DevOps
  { name: "Amazon AWS (EC2, S3, IAM, Cloud)", level: 84, experience: "Infosys Springboard", category: "cloud", highlight: true },
  { name: "Cloud Computing Fundamentals", level: 85, experience: "Certified / Reboot", category: "cloud", highlight: true },
  { name: "VMware vSphere / vCenter / ESXi", level: 86, experience: "VMware VCTA-DCV '23", category: "cloud", highlight: true },
  { name: "GIT Version Control", level: 88, experience: "Standard Workflow", category: "cloud" },
  { name: "Apache Ant Build Tool", level: 82, experience: "Enterprise Wipro", category: "cloud" },

  // Platforms & Modern Tools
  { name: "Generative AI Fundamentals & Prompting", level: 85, experience: "Skill Reboot 2024", category: "tools", highlight: true },
  { name: "Ubuntu / Unix OS Administration", level: 88, experience: "Hands-on", category: "tools", highlight: true },
  { name: "Unix Debugging & Log Inspection", level: 86, experience: "Enterprise Projects", category: "tools" },
  { name: "Selenium Automated Test Testing", level: 82, experience: "Udemy Certified", category: "tools" },
  { name: "Agile & Scrum Methodologies", level: 90, experience: "Wipro & VeriFone", category: "tools" },
];

export const defaultExperiences: ExperienceItem[] = [
  {
    period: "Jan 2024 – Jan 2025",
    role: "Professional Re-entry & Certification Program",
    company: "Self-Directed / Structured Upskilling Programs",
    location: "Bangalore, India",
    type: "upskilling",
    summary: "Dedicated intensive career reboot and leadership development program focused on cloud technologies, artificial intelligence, and corporate problem solving.",
    achievements: [
      "Completed McKinsey Forward Program — an intensive leadership, digital adaptability, and structured problem-solving curriculum designed for returning professionals.",
      "Attended Technical Skill Reboot with Infosys Springboard, building practical competencies in Amazon AWS cloud infrastructure and Artificial Intelligence foundations.",
      "Completed Professional Skill Reboot Program with HerKey, a premier platform dedicated to supporting women's return to the technology workforce.",
    ],
    technologies: ["Amazon AWS", "Generative AI", "Leadership & Problem Solving", "Cloud Computing", "Modern Tech Workflows"],
  },
  {
    period: "Mar 2022 – Dec 2023",
    role: "Career Break – VMware Cloud Certification",
    company: "VMware Professional Development",
    location: "Bangalore, India",
    type: "upskilling",
    summary: "Utilized planned career break to expand infrastructure competencies into enterprise cloud virtualization.",
    achievements: [
      "Achieved VMware Certified Technical Associate – Data Centre Virtualization (VCTA-DCV 2023), mastering VMware vSphere, vCenter, and ESXi hypervisor architecture.",
      "Bridged application software development background with modern data center and cloud infrastructure concepts.",
    ],
    technologies: ["VMware vSphere", "vCenter", "ESXi", "Data Centre Virtualization", "Cloud Infrastructure"],
  },
  {
    period: "Oct 2021 – Mar 2022",
    role: "Software Consultant (Scala)",
    company: "Knoldus Software LLP",
    location: "Remote",
    type: "work",
    summary: "Contributed to internal products and functional programming initiatives during a structured reintegration program.",
    achievements: [
      "Upskilled in Scala functional programming and contributed to an internal software product during a structured reintegration program.",
      "Achieved Lightbend Scala Professional Certification, demonstrating verified proficiency in the Scala ecosystem and reactive programming paradigms.",
      "Practiced test-driven development and Git workflows within remote Agile delivery teams.",
    ],
    technologies: ["Scala", "Functional Programming", "Lightbend", "sbt", "Git", "Reactive Architecture"],
  },
  {
    period: "2019 – 2021",
    role: "Career Break – Certifications & Self-Development",
    company: "Independent Learning",
    location: "Bangalore, India",
    type: "upskilling",
    summary: "Reinforced software development fundamentals and automated quality assurance frameworks through structured coursework.",
    achievements: [
      "Earned Java Certification (Udemy) — reinforcing core Java OOP fundamentals, collection frameworks, exception handling, and multithreading.",
      "Earned Selenium Certification (Udemy) — gaining practical expertise in automated browser testing, test script design, and QA frameworks.",
    ],
    technologies: ["Java Core", "Selenium WebDriver", "Automated Testing", "JUnit", "QA Frameworks"],
  },
  {
    period: "2014 – 2016",
    role: "Project Engineer – Java Developer",
    company: "Wipro Technologies India Pvt. Ltd.",
    location: "Bangalore, India",
    type: "work",
    summary: "Hands-on software development for mission-critical enterprise systems, government public safety solutions, and retail applications.",
    achievements: [
      "Participated in the design phase of the Reference Set Repository system for VeriFone, US, collaborating actively within cross-functional Agile teams.",
      "Developed secure Java modules for the Crime and Criminal Tracking Network System (CCTNS), a mission-critical government project for Maharashtra, India.",
      "Built 'Order Tracking System', a standalone Java application enabling retailers to manage customer orders end-to-end — from placement through delivery, cancellation, and status updates.",
      "Designed 'Ship Reservation System', a desktop application featuring role-based access for both clients and administrators.",
      "Engineered an Online Banking Application and an Online Library Application during RDBMS training, demonstrating full-stack database development skills.",
    ],
    technologies: ["Java (Core, Swing, JDBC)", "Oracle SQL", "MySQL", "Unix OS", "Apache Ant", "Agile/Scrum"],
  },
];

export const defaultCertifications: CertificationItem[] = [
  {
    title: "Lightbend Scala Professional Certification",
    issuer: "Lightbend Inc.",
    year: "2021",
    description: "Verified proficiency in Scala functional programming, immutable idioms, type systems, and reactive paradigms.",
    credentialBadge: "Lightbend Certified",
  },
  {
    title: "VMware Certified Technical Associate – Data Centre Virtualization (VCTA-DCV)",
    issuer: "VMware",
    year: "2023",
    description: "Data center virtualization fundamentals, VMware vSphere concepts, vCenter management, and ESXi architecture.",
    credentialBadge: "VMware VCTA-DCV",
  },
  {
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    year: "2024",
    description: "Selective leadership, adaptability, structured problem solving, and digital communication curriculum for returning professionals.",
    credentialBadge: "McKinsey Forward",
  },
  {
    title: "AWS & AI Technical Skill Reboot",
    issuer: "Infosys Springboard",
    year: "2024",
    description: "Hands-on training in Amazon Web Services cloud infrastructure, compute/storage architectures, and Generative AI foundations.",
    credentialBadge: "Infosys Springboard",
  },
  {
    title: "Java Developer Certification",
    issuer: "Udemy",
    year: "2020",
    description: "Comprehensive core Java development, OOP design patterns, collections framework, and robust exception handling.",
    credentialBadge: "Java Certified",
  },
  {
    title: "Selenium Test Automation Certification",
    issuer: "Udemy",
    year: "2021",
    description: "Automated browser test framework implementation, Selenium WebDriver scripts, and test suite automation.",
    credentialBadge: "Selenium Certified",
  },
];

export const defaultEducation: EducationItem[] = [
  {
    degree: "B. Tech – Computer Science Engineering",
    institution: "Institute of Technology and Marine Engineering",
    location: "Kolkata, India",
    period: "2010 – 2014",
    details: "Four-year Bachelor of Technology degree in Computer Science Engineering. Core focus on data structures, algorithms, relational database systems, operating systems, and object-oriented software development.",
  },
];
