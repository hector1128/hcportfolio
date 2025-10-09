import type { Project } from "../components/proj-island";

export const PROJECTS: Project[] = [
  
  {
    id: "move",
    title: "MOVE",
    blurb:
      "On-device computer-vision dodge game built for people who work at home. Uses pose tracking to get remote workers moving; tuned with EMA/hysteresis to reduce false hits and ramps difficulty progressively.",
    hero: "/projects/move1.png", 
    tags: ["ShellHacks 2025", "On-device CV", "Pose tracking", "EMA/Hysteresis", "Nextjs"],
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
    hero: "/projects/insure.png", // TODO: ensure image exists
    tags: ["ShellHacks 2024", "Plan optimizer", "Team project", "SPA"],
    stack: ["React", "JavaScript", "CSS", "HTML"],
    links: {
       repo: "https://github.com/hector1128/hcportfolio" 
    },
    year: "2024",
  }
  
];
