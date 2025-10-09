"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { type Experience } from "../data/career";

export default function SlideOver({
  exp,
  onClose,
}: {
  exp: Experience;
  onClose: () => void;
}) {
  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.aside
        className="fixed right-0 top-0 z-50 h-dvh w-[92vw] max-w-xl bg-[#6f4e37] text-[#e7dfd8] shadow-2xl border-l border-white/10 flex flex-col"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${exp.company} — details`}
      >
        <header className="flex items-center justify-between p-4 border-b border-white/10">
          <div>
            <h3 className="text-xl font-bold leading-tight">{exp.company}</h3>
            <p className="text-sm opacity-90">
              {exp.role} • {exp.years}
            </p>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer rounded-lg px-3 py-1.5 bg-black/20 hover:bg.black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-label="Close panel"
          >
            ✕
          </button>
        </header>

        <div className="p-5 space-y-4 overflow-y-auto">
          <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden ring-1 ring-white/10 bg-[#e7dfd8]">
            <Image
              src={exp.logo}
              alt={exp.company}
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 92vw, 640px"
            />
          </div>

          <p className="leading-relaxed">{exp.summary}</p>

          {exp.bullets && (
            <ul className="list-disc pl-5 space-y-1">
              {exp.bullets.map((b, i) => (
                <li key={i} className="opacity-95">
                  {b}
                </li>
              ))}
            </ul>
          )}

          {exp.tech && (
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">
                Tech/Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs bg-[#e7dfd8] text-[#6f4e37] ring-1 ring-black/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.aside>
    </>
  );
}
