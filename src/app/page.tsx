import Image from "next/image";
import Link from "next/link";
import Typewriter from "./components/type-writer";
import BackgroundDecor from "./components/background-decor";
import NavBar from "./components/nav-bar";
import OnMountFlag from "./components/OnMountFlag";

export default function Home() {
  // Animation state for page load
  return (
    <main className="p-12 relative overflow-hidden">
      <OnMountFlag />
      {/* --- Minimal black background effects --- */}
      <BackgroundDecor />

      {/* Navigation container */}
      <NavBar />

      {/* Main content container */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 m-4 md:m-10 border border-[#6f4e37] outline-offset-20 p-4 md:p-10 gap-8 fade-onload shadow-2xl rounded-xl`}
      >
        <div className="flex flex-col h-full justify-between">
          <div>
            <p className="text-3xl pb-4 md:text-6xl md:pb-8 text-[#6f4e37]">
              HECTOR CORDERO
            </p>
            <Typewriter
              text={"On a journey to make the world a better place..."}
              design={
                "pb-10 md:pb-60 text-base md:text-lg min-h-[2.5rem] text-[#6f4e37]"
              }
            />
          </div>
          <div className="flex gap-5 flex-wrap items-end mt-8">
            {/* Social icons aligned bottom left */}
            <Link
              href="https://www.github.com/hector1128"
              className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_white]"
            >
              <Image
                src="/home/github-logo.png"
                alt="GitHub Logo"
                width={30}
                height={30}
                style={{
                  filter:
                    "invert(19%) sepia(24%) saturate(749%) hue-rotate(353deg) brightness(95%) contrast(90%)",
                }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hectorhcordero/"
              className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_white]"
            >
              <Image
                src="/home/linkedin-logo.png"
                alt="LinkedIn Logo"
                width={30}
                height={30}
                style={{
                  filter:
                    "invert(19%) sepia(24%) saturate(749%) hue-rotate(353deg) brightness(95%) contrast(90%)",
                }}
              />
            </Link>
            <Link
              href="/home/Resume2025.pdf"
              className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-[0_0_8px_white]"
            >
              <Image
                src="/home/resume-logo.png"
                alt="Resume Logo"
                width={30}
                height={30}
                style={{
                  filter:
                    "invert(19%) sepia(24%) saturate(749%) hue-rotate(353deg) brightness(95%) contrast(90%)",
                }}
              />
            </Link>
          </div>
        </div>
        <div className="pr-15 flex justify-center md:justify-end items-center">
          {/* Profile image */}
          <Image
            src="/home/proshot-hc.png"
            alt="Hector Cordero"
            width={250}
            height={250}
            className="border-2 border-[#6f4e37] shadow-2xl w-full max-w-[12rem] md:max-w-[20rem] h-auto rounded-lg transition-all duration-200 hover:scale-105 hover:drop-shadow-[0_0_16px_white]"
            priority
          />
        </div>
      </div>
    </main>
  );
}
