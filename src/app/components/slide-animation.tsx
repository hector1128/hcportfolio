"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { type Experience } from "../data/career";

/* A right-edge drawer is a desktop pattern — at 92vw on a phone it is
   effectively fullscreen anyway. Below md we slide up from the bottom
   instead, matching the sheet pattern used on About. */
const MOBILE_QUERY = "(max-width: 767px)";

function useIsMobile() {
  /* Resolved in the state initialiser rather than an effect: this panel only
     ever mounts client-side (after a tap), so the very first render must
     already know the direction. Reading it in an effect meant framer applied
     the desktop x:100% transform first and never cleared it, leaving the
     sheet parked off-screen. */
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
}

export default function SlideOver({
  exp,
  onClose,
}: {
  exp: Experience;
  onClose: () => void;
}) {
  const isMobile = useIsMobile();

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const motionProps = isMobile
    ? { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" } }
    : { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" } };

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

      {/* Panel: bottom sheet on mobile, right drawer at md+ */}
      <motion.aside
        className="fixed z-50 flex flex-col bg-brand text-on-brand shadow-2xl
                   inset-x-0 bottom-0 max-h-[88dvh] rounded-t-2xl border-t border-white/10
                   md:inset-x-auto md:top-0 md:right-0 md:h-dvh md:max-h-none md:w-[92vw] md:max-w-xl
                   md:rounded-t-none md:border-t-0 md:border-l"
        {...motionProps}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${exp.company} — details`}
      >
        {/* Grabber — signals the sheet is dismissable on touch */}
        <div aria-hidden className="flex justify-center pt-2.5 md:hidden">
          <span className="h-1 w-10 rounded-full bg-on-brand/40" />
        </div>

        <header className="flex items-center justify-between gap-3 border-b border-white/10 p-4">
          <div className="min-w-0">
            <h3 className="truncate text-h3 leading-tight font-bold">
              {exp.company}
            </h3>
            <p className="text-sm opacity-90">
              {exp.role} • {exp.years}
            </p>
          </div>
          <button
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-lg bg-black/20
                       transition hover:bg-black/30 focus-visible:ring-2 focus-visible:ring-white/40
                       focus-visible:outline-none"
            aria-label="Close panel"
          >
            ✕
          </button>
        </header>

        <div className="space-y-4 overflow-y-auto p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-surface ring-1 ring-white/10">
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
            <ul className="list-disc space-y-1 pl-5">
              {exp.bullets.map((b, i) => (
                <li key={i} className="opacity-95">
                  {b}
                </li>
              ))}
            </ul>
          )}

          {exp.tech && (
            <div>
              <h4 className="mb-2 text-sm font-semibold tracking-wider uppercase opacity-90">
                Tech/Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface px-2.5 py-1 text-xs text-brand ring-1 ring-black/10"
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
