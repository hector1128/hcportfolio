import Image from "next/image";
import Link from "next/link";
import Typewriter from "./components/type-writer";
import BackgroundDecor from "./components/background-decor";
import NavBar from "./components/nav-bar";
import OnMountFlag from "./components/OnMountFlag";

export const metadata = {
  title: "Home",
  content:
    "Welcome to my personal portfolio website! I am a Software Engineer and second year Computer Science Student at UCF. Click to learn more...",
};

export default function Home() {
  return (
    <main className="p-12 relative overflow-hidden">
      <OnMountFlag />
      <BackgroundDecor />
      <NavBar />
      <div className="pb-6"></div>

      {/* Main content container */}
      <div
        className={`pt-4 grid grid-cols-1 md:grid-cols-2 m-4 md:m-10 md:border md:border-[#6f4e37] outline-offset-20 p-4 md:p-10 gap-8 fade-onload shadow-2xl rounded-xl`}
      >
        {/* Left column: name + typewriter (icons hidden on mobile here) */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <p className="text-3xl pb-4 md:text-6xl md:pb-8 text-[#6f4e37]">
              HECTOR CORDERO
            </p>
            <Typewriter
              text={"On a journey to make the world a better place..."}
              design={
                "pb-6 md:pb-60 text-base md:text-lg min-h-[2.5rem] text-[#6f4e37]"
              }
            />
          </div>

          {/* Original icons: show on md+ only so they appear after the image on mobile */}
          <div className="hidden md:flex gap-5 flex-wrap items-end mt-8">
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

        {/* Right column: profile image */}
        <div className="flex justify-center md:justify-end items-center md:pr-15">
          <Image
            src="/home/main.jpg"
            alt="Hector Cordero"
            width={1024} // >= 2× your max display width
            height={1024}
            sizes="(min-width: 768px) 32rem, 16rem" // md: 32rem, mobile: 16rem
            quality={90}
            priority
            className="object-cover transform-gpu align-middle md:border-2 border-[#6f4e37] shadow-2xl w-full max-w-[16rem] md:max-w-[32rem] h-auto rounded-lg transition-all duration-200 hover:scale-105 hover:drop-shadow-[0_0_16px_white]"
          />
        </div>

        {/* Mobile-only icons AFTER the image */}
        <div className="flex md:hidden gap-5 flex-wrap items-end mt-2 justify-start">
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
    </main>
  );
}
