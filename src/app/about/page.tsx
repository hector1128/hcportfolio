import Link from "next/link";
import OnMountFlag from "../components/OnMountFlag";

export default function ProjectsPage() {
  return (
    <main className="p-12">
      <OnMountFlag />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-fade-onload"
      >
        {/* Top left blurred circle */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-black opacity-10 rounded-full blur-3xl"></div>
        {/* Bottom right blurred ellipse */}
        <div className="absolute bottom-0 right-0 w-96 h-48 bg-black opacity-10 rounded-full blur-3xl rotate-12"></div>
        {/* Center floating line */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-2/3 h-1 bg-black opacity-10 blur-md rounded-full"></div>
        {/* Subtle dot grid */}
        <div className="absolute inset-0 z-0">
          <svg
            width="100%"
            height="100%"
            className="opacity-10"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <defs>
              <pattern
                id="dots"
                x="0"
                y="0"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="1.5" fill="black" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div
        className={`shadow-2xl rounded-xl flex flex-wrap justify-center gap-4 font-sans font-bold p-4 md:text-lg fade-onload mx-auto max-w-4xl bg-[#6f4e37] text-[#F6EEE6]`}
      >
        {/* Navigation container links */}
        <Link
          href="/"
          className="text-[#F6EEE6] transition-all duration-200 px-4 py-2 hover:scale-105 hover:drop-shadow-[0_0_8px_white]"
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="text-[#F6EEE6] transition-all duration-200 px-4 py-2 hover:scale-105 hover:drop-shadow-[0_0_8px_white]"
        >
          ABOUT
        </Link>
        <Link
          href="/career"
          className="text-[#F6EEE6] transition-all duration-200 px-4 py-2 hover:scale-105 hover:drop-shadow-[0_0_8px_white]"
        >
          CAREER
        </Link>
        <Link
          href="/projects"
          className="text-[#F6EEE6] transition-all duration-200 px-4 py-2 hover:scale-105 hover:drop-shadow-[0_0_8px_white]"
        >
          PROJECTS
        </Link>
      </div>

      <h1 className="text-3xl md:text-5xl font-semibold">
        A little bit about <b>Hector</b>
      </h1>
      <p className="mt-6 text-lg leading-relaxed">
        I was born in Venezuela. I love sports. Some of my favorites are track &
        field, basketball, and soccer. I'm a person who think about others
        first. I put my family, my girlfriend, and my friends first. I love love
        love trying new dishes. Last but not least I absolute LOVE THE HUSTLE.
        No, literally, that's what I was known for in basketball.{" "}
      </p>
    </main>
  );
}
