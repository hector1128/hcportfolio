import type { Project } from "../components/proj-island";

export const PROJECTS: Project[] = [
  
  {
    id: "move",
    title: "MOVE",
    blurb:
      "On-device computer-vision dodge game built for ShellHacks 2025. Uses pose tracking to get remote workers moving; tuned with EMA/hysteresis to reduce false hits and ramps difficulty progressively.",
    hero: "/projects/move1.png", 
    tags: ["ShellHacks 2025", "On-device CV", "Pose tracking", "EMA/Hysteresis", "Nextjs"],
    stack: ["Next.js", "TypeScript", "MediaPipe Pose", "TensorFlow", "WebGPU/WebGL", "HTML Canvas 2D", "Tailwind"],
    links: {
      
      repo: "https://github.com/hector1128/move",
      
    },
    year: "2025",
  },
  {
    id: "portfolio-v2",
    title: "Portfolio v1",
    blurb:
      "This site! Warm palette, subtle motion, and clean sections. Built as a playground for UX ideas.",
    hero: "/projects/port.png",
    tags: ["Design system", "Next.js", "Tailwind", "Framer Motion", "SEO"],
    stack: ["Next.js", "Tailwind", "Framer Motion", "SEO"],
    links: { repo: "https://github.com/hector1128/hcportfolio" },
    year: "2025",
  },
  {
    id: "insurefair",
    title: "InsureFair",
    blurb:
      "Web app that helps users pick optimal insurance plans. React SPA with a simple optimizer comparing monthly premiums against life-expectancy input.",
    hero: "/projects/insure.png", // TODO: ensure image exists
    tags: ["ShellHacks 2024", "Plan optimizer", "Team project", "SPA"],
    stack: ["React", "JavaScript", "CSS", "HTML"],
    links: {
       repo: "https://github.com/hector1128/hcportfolio" 
    },
    year: "2024",
  },
  {
    id: "racescout",
    title: "RaceScout",
    blurb:
      "Aggregates 1,200+ 5K-marathon events into a searchable index with filters. Personalizes recommendations by age group, gender, and experience; includes last year’s winners and event-day weather with tracked engagement uplift.",
    hero: "/projects/rs2.png", // TODO: replace with your actual screenshot path
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Maps API", "CRON", "Vercel"],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Maps API", "CRON", "Vercel"],
    links: {
      // live: "",
      // repo: "",
      // case: "/projects/racescout"
    },
    year: "In Progress...",
  },
  
];
