import PillGrid from "../components/pill-grid";
import CareerInteractive from "./client";
import { EXPERIENCES, LANGUAGES, TECHNOLOGIES, CONCEPTS } from "../data/career";
import Typewriter from "../components/type-writer";

export const metadata = {
  title: "Career",
  description: "My work experience and skills.",
};

export default function Page() {
  return (
    <main className="page-shell">
      {/* Everything shares one max-width wrapper so the heading lines up
          with the intro above it (it previously sat outside). */}
      <div className="mx-auto max-w-4xl">
        <section className="fade-onload mb-8 pt-8">
          <Typewriter
            text={`Here's my experience and what I built there. You can also find my tech stack below :)...`}
            design="text-ink/80 text-body leading-relaxed min-h-[5rem] sm:min-h-[3.5rem]
                    bg-brand/[0.06] border border-brand/20 rounded-xl px-4 py-3 shadow-sm"
          />
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        </section>

        <header className="mb-6 md:mb-10">
          <h1 className="text-h1 font-semibold tracking-tight text-brand">
            Experiences
          </h1>
        </header>

        <section aria-label="Work experience" className="relative">
          <CareerInteractive experiences={EXPERIENCES} />
        </section>

        <section className="mt-12 md:mt-20">
          <h2 className="mb-6 text-h2 font-semibold text-brand">Skills</h2>
          <div className="grid gap-6 text-brand md:grid-cols-2 md:gap-8">
            <PillGrid title="Technologies" items={TECHNOLOGIES} />
            <PillGrid title="Languages" items={LANGUAGES} />
            
          </div>
          <div className="mt-6 text-brand md:mt-10">
            <PillGrid title="Concepts" items={CONCEPTS} />
          </div>
        </section>
      </div>
    </main>
  );
}
