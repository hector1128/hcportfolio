"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

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
  const layoutId = `card-${cardtitle.replace(/\s+/g, "-")}-image`;

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
    <main>
      <div
        className={[
          "fade-onload rounded-xl shadow-lg bg-[#6f4e37] text-[#e7dfd8] transition-all duration-500 hover:bg-transparent hover:text-[#6f4e37] group",
          generated ? "scale-[0.99] opacity-95" : "",
        ].join(" ")}
      >
        {/* Shared element wrapper for smooth image morph */}
        <motion.div layoutId={layoutId} className="relative">
          <Image
            src={imglink}
            alt={cardtitle}
            width={400}
            height={250}
            className="rounded-t-xl transition-all duration-500 group-hover:opacity-80"
            priority={false}
          />
        </motion.div>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight group-hover:text-[#6f4e37]">
            {cardtitle}
          </h5>
          <p className="mb-3 font-normal group-hover:text-[#6f4e37]">
            {cardtext}
          </p>
          <button
            onClick={() => setGenerated(true)}
            className="
              cursor-pointer relative inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg
              border bg-[#6f4e37] text-[#e7dfd8] border-[#6f4e37]
              transition-[transform,box-shadow,color,background-color] duration-300 ease-out
              hover:scale-[1.03] hover:shadow-[0_10px_24px_-8px_rgba(91,58,41,0.45)]
              overflow-hidden
              before:absolute before:inset-0 before:rounded-[inherit] before:pointer-events-none
              before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.22),transparent)]
              before:translate-x-[-120%] before:transition-transform before:duration-700
              hover:before:translate-x-[120%]
              group-hover:!bg-[#6f4e37] group-hover:!text-[#e7dfd8] group-hover:!border-[#6f4e37]
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6f4e37]/40
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#e7dfd8]
            "
            aria-label="Read more"
          >
            Read more
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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

      {/* Animated modal */}
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
      </AnimatePresence>
    </main>
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
  // ESC to close
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
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="
          relative z-10 w-[94vw] sm:w-[90vw] max-w-2xl
          rounded-2xl overflow-hidden
          bg-[#fbf8f5] text-[#6f4e37]
          shadow-[0_25px_60px_-20px_rgba(20,12,7,0.55)]
        "
        initial={{ opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.985 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        // ✅ cap total height and make inner content scroll when needed
        style={{ maxHeight: "min(88vh, 720px)" }}
      >
        {/* ✅ shorter hero image so content fits */}
        {layoutId ? (
          <motion.div
            layoutId={layoutId}
            className="relative w-full h-[180px] sm:h-[220px] md:h-[240px]"
          >
            <Image
              src={imglink}
              alt={cardtitle}
              fill
              sizes="(max-width: 640px) 94vw, (max-width: 1024px) 90vw, 640px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fbf8f5] via-transparent to-transparent" />
          </motion.div>
        ) : (
          <div className="relative w-full h-[180px] sm:h-[220px] md:h-[240px]">
            <Image
              src={imglink}
              alt={cardtitle}
              fill
              sizes="(max-width: 640px) 94vw, (max-width: 1024px) 90vw, 640px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#fbf8f5] via-transparent to-transparent" />
          </div>
        )}

        {/* ✅ scrollable content area */}
        <motion.div
          className="grid gap-6 p-6 sm:p-7 sm:grid-cols-5 overflow-auto"
          style={{ maxHeight: "calc(min(88vh, 720px) - 200px)" }} // panel height minus image + padding
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.06, delayChildren: 0.02 }}
        >
          <motion.div variants={itemVariants} className="sm:col-span-3">
            <h3 className="text-2xl font-semibold tracking-tight text-[#4b3526]">
              {cardtitle}
            </h3>
            <p className="mt-3 leading-relaxed">{cardparagraph}</p>
          </motion.div>

          <motion.aside variants={itemVariants} className="sm:col-span-2">
            <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-[#6f4e37]/10">
              <p className="text-sm font-semibold uppercase tracking-wide">
                Highlights
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {chips.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#6f4e37]/20 bg-[#e7dfd8]/70 px-2.5 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#6f4e37]/15 to-transparent" />

              <div className="mt-4 space-y-2">
                <button
                  onClick={onClose}
                  className="w-full cursor-pointer rounded-lg border border-[#6f4e37] bg-[#6f4e37] px-4 py-2 text-sm font-semibold text-[#e7dfd8] transition hover:shadow-[0_12px_24px_-12px_rgba(91,58,41,0.55)]"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.aside>
        </motion.div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="cursor-pointer absolute right-3 top-3 rounded-full bg-black/40 p-2 text-white backdrop-blur hover:bg-black/50"
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

  // Venezuela / immigration
  if (/(venezuela|south america|immigra|moved to the united states)/.test(p)) {
    tags.push("South America", "New beginnings", "Family-first");
  }

  // Basketball
  if (/(basketball|team|perseverance|discipline|compete)/.test(p)) {
    tags.push("Teamwork", "Discipline", "Perseverance");
  }

  // Track & Field
  if (/(track|sprint|speed|agility)/.test(p)) {
    tags.push("Sprinting", "Speed & agility", "Fitness");
  }

  // UCF / CS
  if (/(ucf|university|computer science|algorithms|software)/.test(p)) {
    tags.push("Computer Science", "Algorithms", "Projects & internships");
  }

  // Now / developer / learning
  if (/(developer|learning|technolog|hobbies|friends|active)/.test(p)) {
    tags.push("Software developer", "Continuous learning", "Active lifestyle");
  }

  // dedupe, cap to 5, fallback if empty
  const deduped = Array.from(new Set(tags)).slice(0, 5);
  return deduped.length ? deduped : base;
}
