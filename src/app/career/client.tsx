"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LogoTile from "../components/logo-tile";
import SlideOver from "../components/slide-animation";
import { type Experience } from "../data/career";

export default function CareerInteractive({
  experiences,
}: {
  experiences: Experience[];
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = useMemo(
    () => experiences.find((e) => e.id === activeId) || null,
    [activeId, experiences]
  );

  // lock body scroll when panel open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (activeId) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeId]);

  return (
    <>
      <div
        className={[
          "grid gap-4 sm:gap-6 md:gap-8",
          "grid-cols-2 md:grid-cols-3",
          activeId ? "opacity-60 pointer-events-none" : "",
        ].join(" ")}
      >
        {experiences.map((exp) => (
          <LogoTile key={exp.id} exp={exp} onOpen={() => setActiveId(exp.id)} />
        ))}
      </div>

      <AnimatePresence>
        {active && <SlideOver exp={active} onClose={() => setActiveId(null)} />}
      </AnimatePresence>
    </>
  );
}
