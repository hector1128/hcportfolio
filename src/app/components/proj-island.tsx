"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  LayoutGroup,
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "framer-motion";

export type Project = {
  id: string;
  title: string;
  blurb: string;
  hero: string;
  tags: string[];
  stack: string[];
  links?: { live?: string; repo?: string; case?: string };
  year?: string;
};

export default function ProjectsIsland({ projects }: { projects: Project[] }) {
  // 1) featured id (default to first)
  const [featuredId, setFeaturedId] = useState<string | undefined>(
    projects[0]?.id
  );

  // 2) Auto-correct if featuredId disappears or projects change
  useEffect(() => {
    if (!projects?.length) return;
    const exists = projects.some((p) => p.id === featuredId);
    if (!exists) setFeaturedId(projects[0]?.id);
  }, [projects, featuredId]);

  // 3) Always derive a valid featured (hard fallback)
  const featured = useMemo(
    () => projects.find((p) => p.id === featuredId) ?? projects[0] ?? null,
    [projects, featuredId]
  );
  const deck = useMemo(
    () => (featured ? projects.filter((p) => p.id !== featured.id) : projects),
    [projects, featured]
  );

  // 4) Single typed transition (TS-safe)
  const reduce = useReducedMotion();
  const t = useMemo<Transition>(
    () =>
      reduce
        ? { type: "tween", duration: 0.2, ease: "linear" }
        : { type: "spring", stiffness: 260, damping: 28 },
    [reduce]
  );

  const handleFeature = (id: string) => {
    if (id === featured?.id) return; // no-op if already featured
    setFeaturedId(id);
  };

  const isMostRecent = featured?.id === projects[0]?.id;

  return (
    <LayoutGroup id="projects">
      {/* Featured slot */}
      <AnimatePresence mode="popLayout" initial={false}>
        {featured && (
          <motion.article
            key={featured.id} // <-- force clean remount on swap
            layout
            transition={t}
            className="mb-10 rounded-2xl bg-[#f3ede7] ring-1 ring-[#6f4e37]/15 p-4 md:p-6 shadow-[0_18px_40px_-16px_rgba(91,58,41,0.35)]"
            aria-label={`Featured project: ${featured.title}`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6f4e37]">
                <span className="inline-block h-2 w-2 rounded-full bg-[#6f4e37]" />
                {isMostRecent ? "Most Recent" : "Featured"}
              </span>
              {featured.year && (
                <span className="text-xs text-[#6f4e37]/80">
                  {featured.year}
                </span>
              )}
            </div>

            <motion.div
              layoutId={`card-${featured.id}`}
              transition={t}
              className="grid md:grid-cols-2 gap-5 items-start"
            >
              <motion.div
                layoutId={`imgwrap-${featured.id}`}
                transition={t}
                className="relative w-full h-56 md:h-72 rounded-xl overflow-hidden ring-1 ring-black/5 bg-[#e7dfd8]"
              >
                <Image
                  src={featured.hero}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 600px"
                  priority
                />
              </motion.div>

              <div>
                <motion.h3
                  layoutId={`title-${featured.id}`}
                  transition={t}
                  className="text-2xl md:text-3xl font-semibold text-[#4b3526]"
                >
                  {featured.title}
                </motion.h3>
                <p className="mt-2 text-[#6f4e37]">{featured.blurb}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.tags.slice(0, 6).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-[#e7dfd8] text-[#6f4e37] ring-1 ring-black/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {featured.links?.live && (
                    <a
                      href={featured.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg px-4 py-2 bg-[#6f4e37] text-[#e7dfd8] border border-[#6f4e37] hover:opacity-95"
                    >
                      Try ↗
                    </a>
                  )}
                  {featured.links?.repo && (
                    <a
                      href={featured.links.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-lg px-4 py-2 border border-[#6f4e37]/40 text-[#6f4e37] bg-[#6f4e37] hover:bg-[#6f4e37]/85"
                    >
                      Code ↗
                    </a>
                  )}
                  {featured.links?.case && (
                    <a
                      href={featured.links.case}
                      className="inline-flex items-center rounded-lg px-4 py-2 border border-[#6f4e37]/40 text-[#6f4e37] bg-[#6f4e37] hover:bg-[#6f4e37]/85"
                    >
                      Case Study
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.article>
        )}
      </AnimatePresence>

      {/* Deck */}
      <section
        aria-label="Other projects"
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {deck.map((p) => (
          <motion.button
            key={p.id}
            layout
            transition={t}
            onClick={() => handleFeature(p.id)}
            className="group text-left rounded-2xl overflow-hidden bg-[#e7dfd8] ring-1 ring-[#6f4e37]/10 hover:-translate-y-1 transition-transform"
            aria-label={`Feature ${p.title}`}
          >
            <motion.div layoutId={`card-${p.id}`} transition={t}>
              <motion.div
                layoutId={`imgwrap-${p.id}`}
                transition={t}
                className="relative h-44 w-full bg-[#f6efe9]"
              >
                <Image
                  src={p.hero}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
              <div className="p-4">
                <motion.h4
                  layoutId={`title-${p.id}`}
                  transition={t}
                  className="text-lg font-semibold text-[#4b3526]"
                >
                  {p.title}
                </motion.h4>
                <p className="mt-1 text-sm text-[#6f4e37]/90">{p.blurb}</p>
              </div>
            </motion.div>
          </motion.button>
        ))}
      </section>
    </LayoutGroup>
  );
}
