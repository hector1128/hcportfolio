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
  },
  {
    id: "varsity-tutors",
    company: "Varsity Tutors",
    role: "STEM Tutor (Online)",
    years: "2024-2025",
    logo: "/career/vt2.png",
    summary: "1:1 online tutoring — building clear explanations and study plans.",
    bullets: [
      "Delivered sessions in math/CS topics with adaptive pacing",
      "Created practice problems and review guides",
      "Tracked progress and communicated outcomes to students/parents",
    ],
    tech: ["Zoom", "Digital Whiteboard", "Google Docs"],
  },
  {
    id: "aab-styles",
    company: "AAB Styles",
    role: "E-commerce & Content Assistant",
    years: "2025",
    logo: "/career/aab.jpg",
    summary: "Supported a small apparel brand with catalog content and order ops.",
    bullets: [
      "Shot/edited product photos; updated listings and tags",
      "Managed orders, returns, and customer inquiries",
      "Improved product pages for clarity and conversion",
    ],
    tech: ["Shopify", "Canva", "Excel"],
  },
  {
    id: "jersey-mikes",
    company: "Jersey Mike's",
    role: "Crew Member",
    years: "2025",
    logo: "/career/jm2.webp",
    summary: "Fast-paced operations — consistency, accuracy, and team coordination.",
    bullets: [
      "Opened/closed store; prep and line during rush",
      "Handled cash and transactions with accuracy",
      "Coordinated workflows to reduce wait times",
    ],
    tech: ["POS", "Food Safety", "Inventory"],
  },
  {
    id: "knighthacks-dev",
    company: "KnightHacks (Development Team)",
    role: "Software Engineer",
    years: "2025–Present",
    logo: "/career/kh2.png",
    summary: "Built web experiences and tools for the hackathon community.",
    bullets: [
      "Implemented responsive pages and components (Next.js + Tailwind)",
      "Added polished UX (modals, slide-overs) with Framer Motion",
      "Collaborated across design and backend to ship features",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
];

export const LANGUAGES = ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"];
export const FRAMEWORKS = ["Next.js", "React", "Node.js", "Express", "Prisma", "Tailwind"];
export const TOOLS = ["Git", "Docker", "Figma", "Vercel", "PostgreSQL", "Supabase"];
