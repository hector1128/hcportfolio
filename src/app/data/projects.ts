import type { Project } from "../components/proj-island";

export const PROJECTS: Project[] = [
  {
    id: "firststep",
    title: "FirstStep",
    blurb:
      "Automated internship and job scraping platform that routes targeted listings to students. An async Apify pipeline pulls 150+ live roles daily into Postgres, with real-time client filtering and email digests sent on a cron schedule.",
    hero: "/projects/first-step.png",
    tags: ["250+ users", "Job scraping", "Async pipeline", "Email digests", "5 industries"],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Apify", "Resend", "Vercel Crons", "Tailwind"],
    links: {
      repo: "https://github.com/hector1128/firststep",
    },
    year: "2026",
  },
  {
    id: "invested",
    title: "InvestEd",
    blurb:
      "AI-powered FinTech web app that simplifies investing for beginners. Features personalized investment recommendations, portfolio tracking, and educational resources to empower users in their financial journey.",
    hero: "/projects/invested.png", 
    tags: ["KnightHacks 2025", "AI", "FinTech", "S&P/ETF/crypto", "Portfolio tracking", "3rd place"],
    stack: ["Next.js", "TypeScript", "Gemini API", "Zustand", "shadcn", "Tailwind"],
    links: {
      
      repo: "https://github.com/hector1128/invested",
      
    },
    year: "2025",
  },
  {
    id: "move",
    title: "MOVE",
    blurb:
      "On-device computer-vision dodge game built for people who work at home. Uses pose tracking to get remote workers moving; tuned with EMA/hysteresis to reduce false hits and ramps difficulty progressively.",
    hero: "/projects/move1.png", 
    tags: ["ShellHacks 2025", "On-device CV", "Pose tracking", "EMA/Hysteresis", "WebGPU"],
    stack: ["Next.js", "TypeScript", "MediaPipe Pose", "TensorFlow", "WebGPU/WebGL", "HTML Canvas 2D", "Tailwind"],
    links: {
      
      repo: "https://github.com/hector1128/move",
      
    },
    year: "2025",
  },
  {
    id: "insurefair",
    title: "InsureFair",
    blurb:
      "Web app that helps users pick optimal insurance plans. React SPA with a simple optimizer comparing monthly premiums against life-expectancy input.",
    hero: "/projects/insure.png", 
    tags: ["ShellHacks 2024", "Plan optimizer", "Team project", "SPA"],
    stack: ["React", "JavaScript", "CSS", "HTML"],
    links: {
       repo: "https://github.com/hector1128/insurefair" 
    },
    year: "2024",
  }
  
];
