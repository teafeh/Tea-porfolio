import { Code2, Database, Layers, Brain, Wrench } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SKILL_GROUPS = [
  { title: "Languages", icon: Code2, items: ["JavaScript (ES6+)", "Python", "C#", "PHP", "HTML5", "CSS3", "SQL"] },
  { title: "Backend & Databases", icon: Database, items: ["Node.js", "Express.js", "FastAPI", "REST API Design", "Webhook Architecture", "MongoDB", "PostgreSQL", "MySQL", "Firebase"] },
  { title: "Frontend & UI", icon: Layers, items: ["React.js", "React Native", "Electron", "Tailwind CSS", "Responsive Design", "Figma", "Webflow"] },
  { title: "AI & Automation", icon: Brain, items: ["LLM Workflow Engineering", "Gemini API", "ChatGPT API", "Zapier", "Prompt Engineering"] },
  { title: "Integrations & Tools", icon: Wrench, items: ["HubSpot", "Apollo.io", "Twilio", "Telegram Bot API", "Git", "GitHub", "Postman", "Agile/Scrum"] },
];

export const EXPERIENCE = [
    {
        role: "Backend Developer — CoBuild Innovation Program",
        company: "ILLUMITRUST · Wema Bank Fintech Project",
        period: "Feb 2026 – Present",
        location: "Nigeria",
        link: "https://punchng.com/wema-bank-empowers-innovators-at-hackaholics-finale/",
        points: [
            "Selected into Wema Bank's CoBuild Innovation Program as part of ILLUMITRUST after a 2nd-place finish at Hackaholics 6.0 Grand Finale (Lagos, Dec 2025).",
            "Serving as Backend Developer on a mapping solution for Wema Bank, currently at final presentation stage with active stakeholder collaboration.",
            "Upskilled in C# and SQL for backend development, API integration, and database operations in a structured fintech environment.",
            "Contributing to identity verification workflows (liveness detection), collaborating cross-functionally with developers, designers, and bank stakeholders.",
        ],
    },
  {
    role: "AI Automation Engineer & Data Specialist (Contract)",
    company: "Clinton AI, formerly TCC (The Clinton Consultancy)",
    period: "Jul 2025 – Present",
    location: "Remote — UK",
    points: [
      "Engineered a high-volume AI image-generation pipeline using Zapier and the Gemini API, reducing content production time by 99% and enabling same-day asset delivery at scale.",
      "Curated, structured, and validated a 2,500+ record industry dataset using advanced Google Sheets automation to accelerate downstream LLM training pipelines.",
      "Architected end-to-end lead management and CRM workflows integrating HubSpot, Apollo.io, and Twilio to automate email sequencing, voice triggers, and data hygiene for global client accounts.",
      "Built AI-powered contract onboarding flows using LLMs to auto-generate legal documents (SOW/MSA), eliminating ~8 hours/week of manual administration.",
      "Managed targeted B2B community growth and content strategy across Twitter/X, Reddit, and YouTube to drive direct platform adoption.",
    ],
  },
  {
    role: "Web Development Tutor",
    company: "SQI College of ICT",
    period: "Aug 2025",
    location: "Ibadan, Nigeria",
    points: [
      "Delivered project-first instruction in HTML, CSS, JavaScript, and introductory AI to cohorts of 20+ students.",
      "Guided students from zero experience to deployed real-world applications, improving course completion rates and technical confidence.",
    ],
  },
  {
    role: "Frontend Developer (Intern to Graduate)",
    company: "Verstronet IT Solutions",
    period: "Apr 2024 – Jan 2025",
    location: "Abuja, Nigeria",
    points: [
      "Built responsive, component-based UI applications in React.js, JavaScript, HTML, and CSS — recognised for code quality and rapid skill advancement.",
      "Delivered multiple client-facing web applications on schedule using component architecture best practices.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "OasisFunds API",
    tag: "Core Financial Engine",
    description: "A high-performance investment backend using a dual-database strategy — PostgreSQL for strict ACID-compliant transaction ledgers, MongoDB for flexible user profiles and KYC data.",
    highlights: [
      "Automated Daily ROI Engine via scheduled cron tasks for multi-tier wallet distribution and 3% referral commissions.",
      "High-security Daily Wallet Rotation using date-based server logic with decoupled JWT layers (User vs. Admin) to eliminate privilege escalation.",
    ],
    stack: ["Node.js", "PostgreSQL", "MongoDB", "JWT", "Cron"],
    link: "https://github.com/teafeh/oasis-backend",
  },
  {
    name: "MovieRate",
    tag: "Full-Stack Movie Platform",
    description: "A decoupled system pairing a FastAPI REST backend with a React SPA, built for speed and reliability.",
    highlights: [
      "Optimized read performance with atomic database-level write hooks that denormalize review aggregates for O(1) read delivery.",
      "Secure JWT token-based authentication with full test coverage via Pytest and React Testing Library.",
    ],
    stack: ["FastAPI", "React", "JWT", "Pytest"],
    link: "https://github.com/teafeh/MovieRate",
  },
  {
    name: "ProjectManager",
    tag: "Git-Backed Mobile CMS",
    description: "A decoupled, mobile-first productivity platform utilizing GitHub as an infrastructure-free, version-controlled repository storage engine.",
    highlights: [
      "Integrated the Octokit REST API wrapper to dynamically generate, serialize, and commit structured Markdown documentation directly to remote code bases.",
      "Engineered an asynchronous native upload channel linking Expo ImagePicker with the Cloudinary REST SDK to host binary graphics seamlessly within raw markdown contexts.",
    ],
    stack: ["React Native", "Node.js", "Express.js", "Octokit API", "Cloudinary"],
    link: "https://github.com/teafeh/project-manager",
  },
  {
    name: "CleanPilot",
    tag: "Smart Desktop File Cleaner",
    description: "An offline-first, system-level desktop application designed to scan storage directories, analyze file age thresholds, and intelligently categorize redundant assets by deletion risk profiles.",
    highlights: [
      "Architected a cross-process communication layer utilizing Electron IPC handlers to bridge a React frontend securely with native Node.js file-system (fs) modules.",
      "Engineered a high-performance recursive directory scanner featuring parameterized age-filters, deep nesting constraints, and custom directory-skipping guardrails (e.g., node_modules, .git).",
      "Implemented an algorithmic rule engine that automatically matches file signatures, regex strings, and size limits to classify data into risk-assessed groups (Installers, Large Files, Documents).",
      "Integrated native OS Shell mechanisms to safely down-route user-approved maintenance selections directly to the system platform's recycling trash bin instead of hard-deleting records."
    ],
    stack: ["Electron", "React", "Vite", "Node.js", "IPC Architecture"],
    link: "https://github.com/teafeh/cleanpilot",
  },
];

export const EDUCATION = [
  { title: "Postgraduate Diploma (PGD) — Computer Science", org: "Lead City University, Ibadan", period: "2026 – Present" },
  { title: "Full-Stack Web Development Certification — MERN Stack", org: "SQI College of ICT, Ibadan", period: "2025" },
  { title: "BSc — Animal & Environmental Biology", org: "Federal University Oye Ekiti (FUOYE)", period: "2019 – 2024" },
];