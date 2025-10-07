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
      className="group relative aspect-square rounded-2xl bg-[#e7dfd8] shadow-[0_10px_24px_-12px_rgba(91,58,41,0.35)] ring-1 ring-[#6f4e37]/10 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37]/40"
      aria-label={`${exp.company} — ${exp.role} (${exp.years})`}
    >
      <div className="absolute inset-0 p-8 grid place-items-center">
        <div className="relative w-full h-full">
          <Image
            src={exp.logo}
            alt={exp.company}
            fill
            className="object-contain transition-transform duration-300 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
            priority={false}
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-[#6f4e37]/90 text-[#e7dfd8] translate-y-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <p className="text-sm font-semibold tracking-wide">{exp.company}</p>
        <p className="text-xs opacity-90">
          {exp.role} • {exp.years}
        </p>
      </div>
    </button>
  );
}
