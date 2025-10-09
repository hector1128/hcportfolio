// components/NavBar.tsx  (Server)
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="shadow-2xl rounded-xl flex flex-wrap justify-center gap-5 font-sans font-bold p-4 md:text-lg mx-auto max-w-4xl fade-onload bg-[#6f4e37] text-[#F6EEE6]">
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
  );
}
