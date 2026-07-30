"use client";

import { useEffect, useId, useMemo, useState } from "react";
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

/* Shared link buttons. The "Code" button previously rendered
   text-brand on bg-brand — brown on brown, so the label was invisible.
   It is now a proper outline button. */
function ProjectLinks({
  links,
  className = "",
}: {
  links?: Project["links"];
  className?: string;
}) {
  if (!links?.live && !links?.repo) return null;
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg border border-brand
                     bg-brand px-4 py-2.5 font-medium text-on-brand transition hover:opacity-95
                     focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2
                     focus-visible:ring-offset-canvas focus-visible:outline-none sm:flex-none"
        >
          Try ↗
        </a>
      )}
      {links.repo && (
        <a
          href={links.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg border border-brand
                     bg-transparent px-4 py-2.5 font-medium text-brand transition hover:bg-brand/10
                     focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2
                     focus-visible:ring-offset-canvas focus-visible:outline-none sm:flex-none"
        >
          Code ↗
        </a>
      )}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.slice(0, 6).map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-surface px-2.5 py-1 text-xs text-brand ring-1 ring-black/10"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/* ============================================================
   Mobile: accordion. Tapping a card expands it in place.
   The previous model promoted a card to a "featured" slot at the
   top of the page — off-screen and invisible on a phone.
   ============================================================ */
function MobileList({
  projects,
  transition,
}: {
  projects: Project[];
  transition: Transition;
}) {
  const [openId, setOpenId] = useState<string | undefined>(projects[0]?.id);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-4 md:hidden">
      {projects.map((p) => {
        const open = p.id === openId;
        const panelId = `${baseId}-${p.id}`;
        return (
          <article
            key={p.id}
            className="overflow-hidden rounded-2xl bg-surface ring-1 ring-brand/10"
          >
            <button
              onClick={() => setOpenId(open ? undefined : p.id)}
              aria-expanded={open}
              aria-controls={panelId}
              className="flex w-full cursor-pointer items-center gap-3 p-3 text-left
                         focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:outline-none
                         active:bg-brand/5"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-canvas">
                <Image
                  src={p.hero}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-brand-strong">
                  {p.title}
                </h3>
                {p.year && (
                  <p className="text-xs text-brand/80">{p.year}</p>
                )}
              </div>
              {/* affordance — the deck cards previously gave no hint
                  that they were interactive at all */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
                className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={transition}
                  className="overflow-hidden"
                >
                  <div className="space-y-4 px-3 pb-4">
                    <div className="relative h-44 w-full overflow-hidden rounded-xl bg-canvas ring-1 ring-black/5">
                      <Image
                        src={p.hero}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="90vw"
                      />
                    </div>
                    <p className="text-brand">{p.blurb}</p>
                    <Tags tags={p.tags} />
                    <ProjectLinks links={p.links} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}

/* ============================================================
   Desktop: the original featured + deck layout, unchanged.
   ============================================================ */
function DesktopDeck({
  projects,
  transition: t,
}: {
  projects: Project[];
  transition: Transition;
}) {
  const [featuredId, setFeaturedId] = useState<string | undefined>(
    projects[0]?.id
  );

  useEffect(() => {
    if (!projects?.length) return;
    const exists = projects.some((p) => p.id === featuredId);
    if (!exists) setFeaturedId(projects[0]?.id);
  }, [projects, featuredId]);

  const featured = useMemo(
    () => projects.find((p) => p.id === featuredId) ?? projects[0] ?? null,
    [projects, featuredId]
  );
  const deck = useMemo(
    () => (featured ? projects.filter((p) => p.id !== featured.id) : projects),
    [projects, featured]
  );

  const isMostRecent = featured?.id === projects[0]?.id;

  return (
    <div className="hidden md:block">
      <LayoutGroup id="projects">
        <AnimatePresence mode="popLayout" initial={false}>
          {featured && (
            <motion.article
              key={featured.id}
              layout
              transition={t}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mb-10 rounded-2xl bg-transparent p-6 shadow-[0_18px_40px_-16px_rgba(91,58,41,0.35)] ring-1 ring-brand/15"
              aria-label={`Featured project: ${featured.title}`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-brand uppercase">
                  <span className="inline-block h-2 w-2 rounded-full bg-brand" />
                  {isMostRecent ? "Most Recent" : "Featured"}
                </span>
                {featured.year && (
                  <span className="text-xs text-brand/80">{featured.year}</span>
                )}
              </div>

              <motion.div
                layoutId={`card-${featured.id}`}
                transition={t}
                className="grid items-start gap-5 md:grid-cols-2"
              >
                <motion.div
                  layoutId={`imgwrap-${featured.id}`}
                  transition={t}
                  className="relative h-72 w-full overflow-hidden rounded-xl bg-surface ring-1 ring-black/5"
                >
                  <Image
                    src={featured.hero}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    sizes="600px"
                  />
                </motion.div>

                <div>
                  <motion.h3
                    layoutId={`title-${featured.id}`}
                    transition={t}
                    className="text-h2 font-semibold text-brand-strong"
                  >
                    {featured.title}
                  </motion.h3>
                  <p className="mt-2 text-brand">{featured.blurb}</p>
                  <div className="mt-4">
                    <Tags tags={featured.tags} />
                  </div>
                  <ProjectLinks links={featured.links} className="mt-5" />
                </div>
              </motion.div>
            </motion.article>
          )}
        </AnimatePresence>

        <section
          aria-label="Other projects"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {deck.map((p) => (
            <motion.button
              key={p.id}
              layout
              transition={t}
              onClick={() => setFeaturedId(p.id)}
              className="group cursor-pointer overflow-hidden rounded-2xl bg-surface text-left ring-1 ring-brand/10 transition-transform hover:-translate-y-1"
              aria-label={`Feature ${p.title}`}
            >
              <motion.div layoutId={`card-${p.id}`} transition={t}>
                <motion.div
                  layoutId={`imgwrap-${p.id}`}
                  transition={t}
                  className="relative h-44 w-full bg-canvas"
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
                    className="text-h3 font-semibold text-brand-strong"
                  >
                    {p.title}
                  </motion.h4>
                  <p className="mt-1 text-sm text-brand/90">{p.blurb}</p>
                </div>
              </motion.div>
            </motion.button>
          ))}
        </section>
      </LayoutGroup>
    </div>
  );
}

export default function ProjectsIsland({ projects }: { projects: Project[] }) {
  const reduce = useReducedMotion();
  const transition = useMemo<Transition>(
    () =>
      reduce
        ? { type: "tween", duration: 0.2, ease: "linear" }
        : { type: "spring", stiffness: 260, damping: 28 },
    [reduce]
  );

  /* Both trees are rendered and toggled with CSS rather than a media-query
     hook, so there is no hydration flash. Neither uses priority images, so
     the display:none tree never triggers a download. */
  return (
    <>
      <MobileList projects={projects} transition={transition} />
      <DesktopDeck projects={projects} transition={transition} />
    </>
  );
}
