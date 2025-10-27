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
    id: "knighthacks-dev",
    company: "KnightHacks (Development Team)",
    role: "Software Engineer",
    years: "Sep 2025–Present",
    logo: "/career/kh2.png",
    summary: "Built web experiences and tools for the hackathon community.",
    bullets: [
      "Implemented responsive pages and components (Next.js + Tailwind)",
      "Added polished UX (modals, slide-overs) with Framer Motion",
      "Handled API calls and backend to ship features",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "NextAuth", "Docker", "APIs"],
  },
  {
  id: "aab-styles",
  company: "AAB Styles",
  role: "Software Engineer Intern",
  years: "Jun–Aug 2025",
  logo: "/career/aab.jpg",
  summary: "Rebuilt product and home pages; improved performance and UX for 8,000+ users.",
  bullets: [
    "Rebuilt product/home pages using React + Tailwind",
    "Removed blocking scripts to speed page opens and smooth first-screen render for 8,000+ users",
    "Implemented client-side filtering/sorting and image lazy loading to deliver ~200 ms updates across 150 products",
    "Simplified navigation via React Hooks/Context, cutting checkout from 7 to 4 clicks in a sample flow",
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

export const LANGUAGES = ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"];
export const FRAMEWORKS = ["Next.js", "React", "Node.js", "Express", "Prisma", "Tailwind"];
export const TOOLS = ["AI integration", "AWS", "Git", "Docker", "Figma", "Vercel", "PostgreSQL", "Supabase", "NextAuth", "APIs"];
