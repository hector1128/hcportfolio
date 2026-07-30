"use client";

import Image from "next/image";
import { type Experience } from "../data/career";

export default function LogoTile({
  exp,
  onOpen,
}: {
  exp: Experience;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="group relative flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-surface
                 text-left shadow-[0_10px_24px_-12px_rgba(91,58,41,0.35)] ring-1 ring-brand/10
                 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40
                 active:scale-[0.98] md:aspect-square md:block"
      aria-label={`${exp.company} — ${exp.role} (${exp.years})`}
    >
      {/* Logo */}
      <div className="grid h-24 w-full place-items-center p-4 sm:h-28 sm:p-6 md:absolute md:inset-0 md:h-auto md:p-8">
        <div className="relative h-full w-full">
          <Image
            src={exp.logo}
            alt={exp.company}
            fill
            className="object-contain transition-transform duration-300 ease-out md:group-hover:scale-105"
            sizes="(max-width: 768px) 45vw, 33vw"
            priority={false}
          />
        </div>
      </div>

      {/* Label. Always visible on mobile — this content was previously
          opacity-0 until hover, so on touch every tile was an unlabelled
          logo. Reveal-on-hover is kept only where hover actually exists. */}
      <div
        className="w-full bg-brand/90 px-3 py-2.5 text-on-brand
                   md:absolute md:inset-x-0 md:bottom-0 md:px-4 md:py-3
                   md:translate-y-3 md:opacity-0 md:transition-all md:duration-300
                   md:group-hover:translate-y-0 md:group-hover:opacity-100
                   md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100"
      >
        <p className="text-sm font-semibold tracking-wide">{exp.company}</p>
        <p className="text-xs opacity-90">{exp.role}</p>
        <p className="text-xs opacity-75">{exp.years}</p>
      </div>
    </button>
  );
}
