"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // Typewriter effect state and logic
  const fullText = "On a journey to make the world a better place...";
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let current = 0;
    const typing = setInterval(() => {
      setDisplayed(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) clearInterval(typing);
    }, 40);

    return () => clearInterval(typing);
  }, []);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  // Animation state for page load
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="p-12 relative overflow-hidden">
      {/* --- Minimal black background effects --- */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-0 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
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
      {/* --- End background effects --- */}

      {/* Navigation container */}
      <div
        className={`shadow-2xl rounded-xl flex flex-wrap justify-center gap-4 font-sans font-bold p-4 md:text-lg transition-all duration-700 mx-auto max-w-4xl ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } bg-[#6f4e37] text-[#F6EEE6]`}
      >
        <Link
          href="/"
          className="text-[#F6EEE6] transition-all duration-200 px-4 py-2 hover:scale-105"
        >
          HOME
        </Link>
        <Link
          href="/about"
          className="text-[#F6EEE6] transition-all duration-200 px-4 py-2 hover:scale-105"
        >
          ABOUT
        </Link>
        <Link
          href="/career"
          className="text-[#F6EEE6] transition-all duration-200 px-4 py-2 hover:scale-105"
        >
          CAREER
        </Link>
        <Link
          href="/projects"
          className="text-[#F6EEE6] transition-all duration-200 px-4 py-2 hover:scale-105"
        >
          PROJECTS
        </Link>
      </div>

      {/* Main content container */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 m-4 md:m-10 border border-[#6f4e37] outline-offset-20 p-4 md:p-10 gap-8 transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <p className="text-3xl pb-4 md:text-6xl md:pb-8 text-[#6f4e37]">
            HECTOR CORDERO
          </p>
          <p className="pb-10 md:pb-60 text-base md:text-lg min-h-[2.5rem] text-[#6f4e37]">
            {displayed}
            <span className="inline-block w-2 text-[#6f4e37]">
              {showCursor ? (
                <span className="animate-blink">|</span>
              ) : (
                <span>&nbsp;</span>
              )}
            </span>
          </p>
          <div className="flex gap-5 flex-wrap">
            <Link
              href="https://www.github.com/hector1128"
              className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg"
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
              className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg"
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
              className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg"
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
        <div className="flex justify-center md:justify-end items-center">
          <Image
            src="/home/hectorimg.jpg"
            alt="Hector Cordero"
            width={250}
            height={250}
            className="border-2 border-[#6f4e37] shadow-2xl w-full max-w-xs md:max-w-md h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </main>
  );
}
