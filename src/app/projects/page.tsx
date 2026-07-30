import Typewriter from "../components/type-writer";
import ProjectsIsland from "../components/proj-island";
import { PROJECTS } from "../data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Personal projects showing my progression as a developer — FirstStep, InvestEd, MOVE and InsureFair.",
};

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <section className="fade-onload mx-auto mb-8 max-w-4xl pt-8">
        <Typewriter
          text={`Here's my progression as a developer through some cool personal projects. Feel free to check them out :)`}
          design="text-ink/80 text-body leading-relaxed min-h-[5rem] sm:min-h-[3.5rem]
                  bg-brand/[0.06] border border-brand/20 rounded-xl px-4 py-3 shadow-sm"
        />
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      </section>

      <section className="mx-auto max-w-6xl">
        <ProjectsIsland projects={PROJECTS} />
      </section>
    </main>
  );
}
