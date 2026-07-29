export type Experience = {
  id: string;
  company: string;
  role: string;
  years: string;
  logo: string;   // Next/Image tip: allow remote domains in next.config.js if needed
  summary: string;
  bullets?: string[];
  tech?: string[];
};

export const EXPERIENCES: Experience[] = [
  
  {
    id: "carmax",
    company: "CarMax",
    role: "Software Engineering Intern",
    years: "Jun–Aug 2025",
    logo: "/career/carmax.jpeg",
    summary: "Enhanced the user experience of one of CarMax's core platforms, bringing the company an estimated $1M+ in annual revenue.",
    bullets: [
      "Designed entire user experience for an extension of Carmax's instant offer platform",
      "Collaborated with product and design teams to implement new features to reduce drop off rate by ~25%",
      "Optimized local testing by migrating from Webpack to Vite",
      "Created separate QA environment to test new mobile features before QA and prod deployment",
    ],
    tech: ["React.js", ".NET", "Azure DevOps", "Fullstack", "APIs", "Product development"],
  },
  {
    id: "knighthacks-dev",
    company: "KnightHacks (Development Team)",
    role: "Software Engineer",
    years: "Sep 2025–Present",
    logo: "/career/kh2.png",
    summary: "Built web experiences and tools for the hackathon community.",
    bullets: [
      "Developed skills in Next.js + Tailwind for responsive pages and components",
      "Worked on handling API calls and backend to ship features",
      "Learned how to protect routes and implement authentication with NextAuth",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "NextAuth", "Docker", "APIs"],
  },
  
  {
    id: "krystal-jewels",
    company: "Krystal Jewels",
    role: "Co-Founder | Software Engineer",
    years: "Sep 2025–Present",
    logo: "/career/kj-mono.png",
    summary: "$15K+ in revenue from a local jewelry business. Sell through e-commerce platform and in-person.",
    bullets: [
      "Using agents and AI to automate order processing, inventory management, and customer support",
      "AI data pipeline to filter data and parse into a database for inventory and insights",
      "Learned about product development, e-commerce, and marketing through hands-on experience",
    ],
    tech: ["Enterpeneurship", "Claude Code", "Agentic AI", "Full-stack", "AI engineering"],
  },
  {
  id: "aab-styles",
  company: "AAB Styles",
  role: "Software Engineer Intern",
  years: "Jun–Aug 2025",
  logo: "/career/aab.jpg",
  summary: "Rebuilt product and home pages; improved performance and UX for 8,000+ users.",
  bullets: [
    "Learnt basics of React by rebuilding product/home pages using React + Tailwind",
    "Implemented MUI library to speed page opens and smooth first-screen render for 8,000+ users",
    "Implemented client-side filtering/sorting and image lazy loading to deliver ~200 ms updates across 150 products",
    "Simplified navigation, cutting checkout from 7 to 4 clicks in a sample purchase flow",
  ],
  tech: ["React", "Tailwind CSS", "Context API"],
},
  {
    id: "jersey-mikes",
    company: "Jersey Mike's",
    role: "Crew Member",
    years: " Apr-Jun 2025",
    logo: "/career/jm2.webp",
    summary: "Fast-paced operations. Consistency, accuracy, and team coordination.",
    bullets: [
      "Opened/closed store; prep and line during rush",
      "Handled cash and transactions with accuracy",
      "Coordinated workflows to reduce wait times",
    ],
    tech: ["POS", "Food Safety", "Inventory"],
  },
  
{
    id: "varsity-tutors",
    company: "Varsity Tutors",
    role: "STEM Tutor (Online)",
    years: "2024-2025",
    logo: "/career/vt2.png",
    summary: "1:1 online tutoring. Building clear explanations and study plans.",
    bullets: [
      "Delivered sessions in math/CS topics with adaptive pacing",
      "Created practice problems and review guides",
      "Tracked progress and communicated outcomes to students/parents",
    ],
    tech: ["Zoom", "Digital Whiteboard", "Google Docs"],
  },
  {
    id: "chickfila",
    company: "Chick-fil-A",
    role: "Team Member / Trainer",
    years: "2023-2024",
    logo: "/career/chickfila3.png",
    summary: "High-volume customer service in a fast, team-oriented environment.",
    bullets: [
      "Handled front-of-house & drive-thru during peak hours",
      "Trained new team members on POS and service standards",
      "Maintained prep quality and food-safety routines",
    ],
    tech: ["POS", "Scheduling", "Operations"],
  }
];

export const LANGUAGES = ["Python", "Java", "C", "HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "Git"];
export const TECHNOLOGIES = ["React", "Next.js", "Azure", "Azure DevOps", "Node.js", "Prisma", "NextAuth.js", "SQL", "PostgreSQL", "Docker", "FastAPI", "GitHub Actions", "Vercel", "Firebase", "tRPC", "pnpm", "Matplotlib", "Claude Code", "Codex", "VS Code", "Excel"];
export const CONCEPTS = ["Agentic AI", "Full-stack web development", "Databases", "DevOps", "Networking"];
