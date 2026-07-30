"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  LayoutGroup,
} from "framer-motion";
import { createPortal } from "react-dom";

type CardProps = {
  imglink: string;
  cardtitle: string;
  cardtext: string;
  cardparagraph: string;
  highlight: string[];
};

type ReadMoreProps = {
  onClose: () => void;
  cardtitle: string;
  cardparagraph: string;
  imglink: string;
  layoutId: string;
  highlight: string[];
};

export default function Card({
  imglink,
  cardtitle,
  cardtext,
  cardparagraph,
  highlight = [],
}: CardProps) {
  const [generated, setGenerated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const layoutId = `card-${cardtitle.replace(/\s+/g, "-")}-image`;

  useEffect(() => setMounted(true), []);

  // prevent body scroll when modal open
  useEffect(() => {
    if (!generated) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [generated]);

  return (
    <LayoutGroup>
      <div className="w-full">
        <div
          className={[
            "fade-onload group w-full overflow-hidden rounded-xl bg-brand text-on-brand shadow-lg transition-all duration-500",
            // hover never fires on touch, and iOS makes it stick after a tap,
            // so the colour swap is gated to devices that actually hover
            "[@media(hover:hover)]:hover:bg-transparent [@media(hover:hover)]:hover:text-brand",
            "active:scale-[0.99]",
            generated ? "scale-[0.99] opacity-95" : "",
          ].join(" ")}
        >
          <motion.div layoutId={layoutId} className="relative">
            <Image
              src={imglink}
              alt={cardtitle}
              width={400}
              height={250}
              sizes="(min-width: 768px) 400px, 100vw"
              /* w-full h-auto: without these the img rendered at its
                 intrinsic 400px inside a much narrower mobile column */
              className="h-auto w-full rounded-t-xl object-cover transition-all duration-500 [@media(hover:hover)]:group-hover:opacity-80"
              priority={false}
            />
          </motion.div>

          <div className="p-5">
            <h5 className="mb-2 text-h3 font-bold tracking-tight [@media(hover:hover)]:group-hover:text-brand">
              {cardtitle}
            </h5>
            <p className="mb-4 font-normal [@media(hover:hover)]:group-hover:text-brand">
              {cardtext}
            </p>
            <button
              onClick={() => setGenerated(true)}
              className="
                relative inline-flex min-h-11 cursor-pointer items-center gap-2 overflow-hidden rounded-lg
                border border-brand bg-brand px-4 py-2.5 text-sm font-semibold text-on-brand
                transition-[transform,box-shadow,color,background-color] duration-300 ease-out
                hover:scale-[1.03] hover:shadow-[0_10px_24px_-8px_rgba(91,58,41,0.45)]
                before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]
                before:translate-x-[-120%] before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)]
                before:transition-transform before:duration-700 hover:before:translate-x-[120%]
                [@media(hover:hover)]:group-hover:!border-brand [@media(hover:hover)]:group-hover:!bg-brand
                [@media(hover:hover)]:group-hover:!text-on-brand
                focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2
                focus-visible:ring-offset-surface focus-visible:outline-none
              "
              aria-label={`Read more about ${cardtitle}`}
            >
              Read more
              <svg
                className="h-4 w-4 transition-transform duration-300 [@media(hover:hover)]:group-hover:translate-x-1"
                viewBox="0 0 14 10"
                fill="none"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {mounted &&
          createPortal(
            <AnimatePresence>
              {generated && (
                <ReadMore
                  onClose={() => setGenerated(false)}
                  cardtitle={cardtitle}
                  imglink={imglink}
                  cardparagraph={cardparagraph}
                  layoutId={layoutId}
                  highlight={highlight}
                />
              )}
            </AnimatePresence>,
            document.body
          )}
      </div>
    </LayoutGroup>
  );
}

export function ReadMore({
  onClose,
  imglink,
  cardtitle,
  cardparagraph,
  highlight = [],
  layoutId,
}: ReadMoreProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0, duration: 0.45 },
    },
  };

  const chips = highlight.length
    ? highlight
    : autoTags(cardtitle, cardparagraph);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${cardtitle} details`}
      /* items-end -> bottom sheet on mobile; centred dialog at sm+ */
      className="fixed inset-0 z-[9999] flex items-end justify-center overscroll-contain sm:items-center"
    >
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-md"
        style={{
          width: "100dvw",
          height: "100dvh",
          WebkitBackdropFilter: "blur(8px)",
        }}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        onClick={(e) => e.stopPropagation()}
        /* flex column with a min-h-0 scroll child, so the body sizes itself.
           Previously the height was computed as `calc(... - 200px)`, a
           hardcoded guess at the hero height that broke on short screens. */
        className="relative z-10 flex max-h-[88dvh] w-full flex-col overflow-hidden rounded-t-2xl
                   bg-surface-raised text-brand shadow-[0_25px_60px_-20px_rgba(20,12,7,0.55)]
                   sm:max-h-[min(88dvh,720px)] sm:w-[min(94vw,42rem)] sm:rounded-2xl"
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.985 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
      >
        {/* Grabber */}
        <div aria-hidden className="flex shrink-0 justify-center pt-2.5 sm:hidden">
          <span className="h-1 w-10 rounded-full bg-brand/25" />
        </div>

        {/* Hero */}
        <motion.div
          layoutId={layoutId}
          className="relative h-[160px] w-full shrink-0 sm:h-[220px] md:h-[240px]"
        >
          <Image
            src={imglink}
            alt={cardtitle}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 640px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-raised via-transparent to-transparent" />
        </motion.div>

        {/* Body — min-h-0 lets this flex child actually scroll */}
        <motion.div
          className="grid min-h-0 flex-1 gap-6 overflow-x-hidden overflow-y-auto p-5
                     pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:grid-cols-5 sm:p-7"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.06, delayChildren: 0.02 }}
        >
          <motion.div variants={itemVariants} className="sm:col-span-3">
            <h3 className="text-h2 font-semibold tracking-tight text-brand-strong">
              {cardtitle}
            </h3>
            <p className="mt-3 leading-relaxed">{cardparagraph}</p>
          </motion.div>

          <motion.aside variants={itemVariants} className="sm:col-span-2">
            <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-brand/10">
              <p className="text-sm font-semibold tracking-wide uppercase">
                Highlights
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {chips.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand/20 bg-surface/70 px-2.5 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-brand/15 to-transparent" />

              <button
                onClick={onClose}
                className="mt-4 min-h-11 w-full cursor-pointer rounded-lg border border-brand bg-brand
                           px-4 py-2.5 text-sm font-semibold text-on-brand transition
                           hover:shadow-[0_12px_24px_-12px_rgba(91,58,41,0.55)]"
              >
                Close
              </button>
            </div>
          </motion.aside>
        </motion.div>

        {/* Close affordance. The safe-area inset was previously applied here,
            but this button sits inside the sheet, not the viewport. */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 grid h-11 w-11 cursor-pointer place-items-center rounded-full
                     bg-black/40 text-white backdrop-blur transition hover:bg-black/50
                     focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
        >
          ✕
        </button>
      </motion.div>
    </div>
  );
}

function autoTags(title: string, paragraph: string): string[] {
  const base = ["Curiosity", "Craft", "Consistency"]; // fallback
  const p = (title + " " + paragraph).toLowerCase();
  const tags: string[] = [];

  if (/(venezuela|south america|immigra|moved to the united states)/.test(p)) {
    tags.push("South America", "New beginnings", "Family-first");
  }
  if (/(basketball|team|perseverance|discipline|compete)/.test(p)) {
    tags.push("Teamwork", "Discipline", "Perseverance");
  }
  if (/(track|sprint|speed|agility)/.test(p)) {
    tags.push("Sprinting", "Speed & agility", "Fitness");
  }
  if (/(ucf|university|computer science|algorithms|software)/.test(p)) {
    tags.push("Computer Science", "Algorithms", "Projects & internships");
  }
  if (/(developer|learning|technolog|hobbies|friends|active)/.test(p)) {
    tags.push("Software developer", "Continuous learning", "Active lifestyle");
  }

  const deduped = Array.from(new Set(tags)).slice(0, 5);
  return deduped.length ? deduped : base;
}
