import NavBar from "../components/nav-bar";
import OnMountFlag from "../components/OnMountFlag";
import BackgroundDecor from "../components/background-decor";
import PillGrid from "../components/pill-grid";
import CareerInteractive from "./client";
import { EXPERIENCES, LANGUAGES, FRAMEWORKS, TOOLS } from "../data/career";
import Typewriter from "../components/type-writer";

export const metadata = {
  title: "Career",
  content: "My work experience and skills.",
};
export default function Page() {
  return (
    <main className="p-6 md:p-12">
      <OnMountFlag />
      <BackgroundDecor />
      <NavBar />

      <section className="max-w-4xl mx-auto -mt-1 mb-8 pt-15 px-4 fade-onload">
        <Typewriter
          text={`Here's my experience and what I built there. You can also find my tech stack below :)...`}
          design="text-[#5B3A29]/80 text-base md:text-lg leading-relaxed
            bg-[#6f4e37]/[0.06] border border-[#6f4e37]/20
            rounded-xl px-4 py-3 shadow-sm"
        />
        {/* Intro paragraph */}

        {/* subtle divider to separate intro from cards */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#6f4e37]/20 to-transparent mt-4" />
      </section>

      <header className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#6f4e37]">
          Experiences
        </h1>
      </header>

      {/* Experience Grid (interactive client island) */}
      <section aria-label="Work experience" className="relative">
        <CareerInteractive experiences={EXPERIENCES} />
      </section>

      {/* Tech grids (static/server-rendered) */}
      <section className="mt-14 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#6f4e37]">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-[#6f4e37]">
          <PillGrid title="Languages" items={LANGUAGES} />
          <PillGrid title="Frameworks & Libraries" items={FRAMEWORKS} />
        </div>
        <div className="mt-8 md:mt-10 text-[#6f4e37]">
          <PillGrid title="Tools & Platforms" items={TOOLS} />
        </div>
      </section>
    </main>
  );
}
