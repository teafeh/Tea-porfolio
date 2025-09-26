// src/data.js

// --- IMPORT ALL YOUR ASSETS ---
// Profile
import profilePic from './assets/images/profile2.png';

// Dev Projects
import oasisPreview from './assets/images/oasisPreview.png';
import dollarTrackerPreview from './assets/images/dollertrackerPreview.png';
import dfdPreview from './assets/images/dfdpreview.png';
import niphaleePreview from './assets/images/Rectangle111.png'

// UI/UX Designs
import mobileBankingImg from './assets/images/Group 38.png';
import travelAgencyImg from './assets/images/travelAgency.png';
import portfolioProtoImg from './assets/images/porfolio.png';
import raybanImg from './assets/images/rayban.jpg';
import lawyerImg from './assets/images/lawyer.jpg';

// Canva Designs
import canvaDog4 from './assets/images/canva_dog4.jpg';
import canvaFyb from './assets/images/canva_fyb.jpg';
import canvasDog3 from './assets/images/canvas_dog3.jpg';
import canvaVideo from './assets/videos/Video (169.mp4';

// --- HERO SECTION DATA ---
export const heroData = {
  name: "BOLUWATIFE OLADELE",
  tagline: "Full-Stack Developer & UI/UX Designer",
  bio: "Based in Nigeria, I build and design high-quality, scalable web products. With a passion for clean code and intuitive design, I turn complex ideas into seamless user experiences.",
  profileImage: profilePic,
  socials: [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/oladele-boluwatife-11ab32245/', icon: 'bi bi-linkedin' },
    { name: 'email', url: 'mailto:Techdevtea@gmail.com', icon: 'bi bi-envelope-at-fill' },
    { name: 'instagram', url: 'https://www.instagram.com/tech_tea/', icon: 'bi bi-instagram' },
    { name: 'twitter', url: 'https://x.com/haveateaaa', icon: 'bi bi-twitter-x' },
    { name: 'github', url: 'https://github.com/teafeh', icon: 'bi bi-github' },
  ],
};

// --- SKILLS DATA ---
export const skillsData = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Webflow"],
  backend: ["PHP", "Python", "MySQL", "Node.js (learning)"],
  design: ["Figma", "UI/UX Principles", "Git & GitHub"],
  soft: ["Interpersonal", "Creativity", "Data Operations Specialist"],
};

// --- PORTFOLIO DATA ---
export const devProjects = [
  {
    title: "Investment Website",
    image: oasisPreview,
    description: "A modern investment platform that helps users grow their wealth through simple, secure, and transparent financial tools.",
    tech: ["HTML", "CSS", "JAVASCRIPT", "API"],
    liveUrl: "https://oasisfunds2025.vercel.app/",
    githubUrl: "https://github.com/teafeh/oasisfunds2025.git",
  },
  {
    title: "Expense tracking tool",
    image: dollarTrackerPreview,
    description: "A minimalistic expense tracking tool that helps you manage and monitor your daily spending, one dollar at a time.",
    tech: ["HTML", "CSS", "JAVASCRIPT", "Figma"],
    liveUrl: "https://1-dollapo.vercel.app/",
    githubUrl: "https://github.com/teafeh/1Dollapo.git",
  },
  {
    title: "E-commerce Website",
    image: dfdPreview,
    description: "A responsive platform for booking private chefs, with user accounts, session management, and custom menu experiences.",
    tech: ["HTML", "CSS", "JAVASCRIPT", "PHP"],
    liveUrl: "https://dfd-eight.vercel.app/",
    githubUrl: "https://github.com/teafeh/dfd.git",
  },
  {
  title: "Niphalee Luxury Website",
  image: niphaleePreview,
  description: "A sleek and responsive website for Niphalee Luxury, showcasing premium jewelry and fashion pieces with modern design and smooth navigation.",
  tech: ["React", "Css", "JavaScript"],
  liveUrl: "niphalee-demo.vercel.app",
  githubUrl: "https://github.com/teafeh/niphalee-demo.git",
},
];

export const uiuxDesigns = [
    {
        title: "Mobile Banking App",
        image: mobileBankingImg,
        description: "A clean and intuitive interface for a modern banking app.",
        tech: ["Figma"],
        figmaUrl: "https://www.figma.com/file/your-link-here", // Replace with your link
    },
    {
        title: "Travel Agency Prototype",
        image: travelAgencyImg,
        description: "Mapped in Figma, crisp and wide — your travel journey, simplified.",
        tech: ["Figma"],
        figmaUrl: "https://www.figma.com/design/8XgCwSN9jU3c8jxuQoBK7k/Travel-Agency?node-id=1-2192&t=PbQO1SqkmpO3RQOw-1",
    },
    {
        title: "Portfolio Website Prototype",
        image: portfolioProtoImg,
        description: "From Figma frames to frontend flight — my projects shine in pixels right.",
        tech: ["Figma"],
        figmaUrl: "https://www.figma.com/design/waYTvbxtFR07y6573fcZFz/devteafolio.com?node-id=241-3&t=dVDe7FelUeJ5dx2c-1",
    },
    {
        title: "Ray-Ban ProductPage Prototype",
        image: raybanImg,
        description: "A bold and stylish product page concept, designed to showcase eyewear with clarity, confidence, and modern flair.",
        tech: ["Figma"],
        figmaUrl: "https://www.figma.com/design/JtBZdUs6Nq85CCEYD6kJhG/Ray-ban?node-id=0-1&t=Nw0HfNABJAuoQa1V-1",
    },
    {
        title: "Lawyer HeroSectionPage Prototype",
        image: lawyerImg,
        description: "A sleek, trust-focused hero section designed to elevate law firms with authority and clarity.",
        tech: ["Figma"],
        figmaUrl: "https://www.figma.com/design/rAtDW5AqKKZBdrQQpYq7dS/Practice--Hierarchy--Copy---Copy-?node-id=55-26&t=XiUqg2ra0aIyx8tO-1",
    },
];

export const canvaDesigns = [
    {
        title: "Instagram Carousel Design",
        image: canvaDog4,
        description: "Engaging and brand-aligned carousel post crafted for social campaigns.",
        tech: ["Canva"],
        canvaUrl: "https://www.canva.com/design/DAGomyTVSrw/ygUg7VTOTdUYpmfMMTDx2w/edit?utm_content=DAGomyTVSrw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
        title: "Brand Pitch Deck",
        image: canvaFyb,
        description: "Sleek Canva presentation template designed to impress and inform.",
        tech: ["Canva"],
        canvaUrl: "https://www.canva.com/design/DAGpz8urcgY/dT_8-owXXfiVdA3E-Mw4cg/edit?utm_content=DAGpz8urcgY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
        title: "Event Poster",
        image: canvasDog3,
        description: "A vibrant and informative poster tailored for digital and print.",
        tech: ["Canva"],
        canvaUrl: "https://www.canva.com/design/your-link-here", // Replace with your link
    },
];

export const canvaVideos = [
    {
        title: "Promo Video Reel",
        video: canvaVideo,
        description: "A fast-paced promotional video crafted in Canva for vibrant brand exposure.",
        tech: ["Canva"],
        canvaUrl: "https://www.canva.com/design/DAGtc999T6s/TEKxOW5dy_eqsYI319dPzw/edit?utm_content=DAGtc999T6s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    }
];

// --- EXPERIENCE DATA ---
export const experienceData = [
  {
    type: 'Experience',
    title: "Freelance Data Specialist (AI Project)",
    date: "June, 2025 - July, 2025",
    description: [
        "Sourced, processed, and structured over 2,500 records for an AI knowledge library, using generative AI tools (e.g., ChatGPT) to extract and summarize key information from technical documents.",
        "Developed a comprehensive dataset in Google Sheets, incorporating direct source links to optimize the data ingestion workflow for the engineering team, ensuring a seamless project handoff.",
    ],
    caseStudyLink: "/case-studies/hotel-superbrain"
  },
  {
    type: 'Experience',
    title: "Freelance Web Developer & Designer",
    date: "2023 - Present",
    description: "Designed and developed responsive websites using Figma, Webflow, and custom code (HTML, CSS, React). Built backend systems with PHP and MySQL."
  },
  {
    type: 'Education',
    title: "Full-Stack Development",
    date: "SQI College of ICT (2025 - Present)",
    description: "Comprehensive training in full-stack software engineering, focusing on advanced backend and frontend technologies."
  },
  {
    type: 'Education',
    title: "Frontend Development",
    date: "Verstronet IT Solution (2024 - 2025)",
    description: "Intensive program covering modern frontend frameworks and best practices in software engineering."
  },
  {
    type: 'Education',
    title: "BSc. Animal and Environmental Biology",
    date: "Federal University Oye Ekiti (2019 - 2023)",
    description: "Developed strong analytical and problem-solving skills which I now apply to technology and development."
  },
];