import NavBar from "../components/nav-bar";
import OnMountFlag from "../components/OnMountFlag";
import BackgroundDecor from "../components/background-decor";
import PillGrid from "../components/pill-grid";
import CareerInteractive from "./client";
import { EXPERIENCES, LANGUAGES, FRAMEWORKS, TOOLS } from "../data/career";

export default function Page() {
  return (
    <main className="p-6 md:p-12">
      <OnMountFlag />
      <BackgroundDecor />
      <NavBar />

      <header className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#6f4e37]">
          Career
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#6f4e37]">
          A calm, visual story of the places I’ve worked and what I built there.
        </p>
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
