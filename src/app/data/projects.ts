import type { Project } from "../components/proj-island";

export const PROJECTS: Project[] = [
  // Most recent first
  {
    id: "knighthacks-site",
    title: "KnightHacks Website Refresh",
    blurb:
      "Public site refresh for the hackathon community with Next.js + Tailwind + Motion. Focused on performance and event clarity.",
    hero: "/projects/move1.png",
    tags: ["Content-driven", "Accessible", "Responsive"],
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: { live: "/knighthacks", repo: "https://github.com/your/kh", case: "/projects/knighthacks" },
    year: "2025",
  },
  {
    id: "portfolio-v2",
    title: "Portfolio v2",
    blurb:
      "This site! Warm palette, subtle motion, and clean sections. Built as a playground for UX ideas.",
    hero: "/projects/portfolio-v2.jpg",
    tags: ["Design system", "Animations", "Server/Client split"],
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    links: { repo: "https://github.com/your/portfolio" },
    year: "2025",
  },
  {
    id: "study-notes",
    title: "Study Notes App",
    blurb:
      "Tiny notes tool with tag filtering and fast search—my go-to for study sessions.",
    hero: "/projects/study-notes.jpg",
    tags: ["Search", "Tagging", "Offline-first"],
    stack: ["Next.js", "IndexedDB", "TypeScript"],
    links: { repo: "https://github.com/your/study-notes" },
    year: "2024",
  },
];
