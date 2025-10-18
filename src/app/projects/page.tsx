import NavBar from "../components/nav-bar";
import BackgroundDecor from "../components/background-decor";
import OnMountFlag from "../components/OnMountFlag";
import Typewriter from "../components/type-writer";
import ProjectsIsland from "../components/proj-island";
import { PROJECTS } from "../data/projects";

export const metadata = { title: "Projects" };
export default function ProjectsPage() {
  return (
    <main className="p-12">
      <OnMountFlag />
      <BackgroundDecor />
      <NavBar />

      <section className="max-w-4xl mx-auto -mt-1 mb-8 pt-15 px-4 fade-onload">
        <Typewriter
          text={`All my projects! Not much right now but I plan on filling these up soon...`}
          design="text-[#5B3A29]/80 text-base md:text-lg leading-relaxed
            bg-[#6f4e37]/[0.06] border border-[#6f4e37]/20
            rounded-xl px-4 py-3 shadow-sm"
        />
        {/* Intro paragraph */}

        {/* subtle divider to separate intro from cards */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#6f4e37]/20 to-transparent mt-4" />
      </section>

      {/* Featured + Deck */}
      <section className="max-w-6xl mx-auto px-4">
        <ProjectsIsland projects={PROJECTS} />
      </section>
    </main>
  );
}
