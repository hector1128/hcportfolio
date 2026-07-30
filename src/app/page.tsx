import Image from "next/image";
import Link from "next/link";
import Typewriter from "./components/type-writer";

export const metadata = {
  title: "Home",
  description:
    "Welcome to my personal portfolio website! I am a Software Engineer and second year Computer Science Student at UCF. Click to learn more...",
};

const RESUME_HREF = "/home/hector_cordero_resume.pdf";

export default function Home() {
  return (
    <main className="page-shell relative">
      <div
        /* Brown-tinted, tightly-hugging shadow matching the tiles and the
           projects featured card. The previous shadow-2xl offset a heavy
           25%-black slab 25px downward, which read as a hard grey bar under
           the card rather than an elevation cue. */
        className="fade-onload mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6
                   rounded-xl border border-brand/25 bg-canvas/70 p-5
                   shadow-[0_18px_40px_-16px_rgba(91,58,41,0.35)]
                   md:mt-10 md:grid-cols-2 md:gap-8 md:p-10"
      >
        {/* Left column: name + typewriter. order-2 puts it under the
            photo on mobile, back to the left at md+. */}
        <div className="order-2 flex flex-col justify-between md:order-1">
          <div>
            <h1 className="pb-3 text-h1 leading-tight font-semibold text-brand md:pb-6 md:text-display">
              HECTOR CORDERO
            </h1>
            <Typewriter
              text={"On a journey to make the world a better place..."}
              design="text-body text-brand min-h-[3.5rem] sm:min-h-[2.5rem]"
            />
          </div>

          {/* Single CTA block. Previously duplicated for mobile/desktop,
              and the two copies disagreed on the résumé path. */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-10">
            <Link
              href={RESUME_HREF}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg
                         bg-brand px-5 py-2.5 font-semibold text-on-brand shadow-sm
                         transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-brand/40
                         focus-visible:ring-offset-2 focus-visible:ring-offset-canvas focus-visible:outline-none"
            >
              <ResumeIcon />
              View Résumé
            </Link>

            <div className="flex gap-3">
              <SocialLink href="https://www.github.com/hector1128" label="GitHub">
                <GithubIcon />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/hectorhcordero/"
                label="LinkedIn"
              >
                <LinkedinIcon />
              </SocialLink>
            </div>
          </div>
        </div>

        {/* Right column: profile image (first on mobile) */}
        <div className="order-1 flex items-center justify-center md:order-2 md:justify-end md:pr-6">
          <Image
            src="/home/main.jpg"
            alt="Hector Cordero"
            width={1024}
            height={1024}
            sizes="(min-width: 768px) 32rem, 60vw"
            quality={90}
            priority
            className="h-auto w-full max-w-[13rem] rounded-lg border-2 border-brand/70 object-cover
                       shadow-lg transition-all duration-200 sm:max-w-[16rem]
                       md:max-w-[32rem] md:shadow-2xl md:hover:scale-105
                       md:hover:drop-shadow-[0_0_16px_white]"
          />
        </div>
      </div>
    </main>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg
                 border border-brand/40 px-4 py-2.5 font-medium text-brand
                 transition hover:bg-brand/10 focus-visible:ring-2 focus-visible:ring-brand/40
                 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas focus-visible:outline-none
                 sm:flex-none"
    >
      {children}
      <span className="text-sm">{label}</span>
    </Link>
  );
}

/* currentColor icons — replaces the previous
   filter: invert(19%) sepia(24%)... recolouring hack on PNGs. */
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05a4.17 4.17 0 0 1 3.75-2.06c4.01 0 4.75 2.64 4.75 6.07V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
      className="h-5 w-5"
    >
      <path
        d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z"
        strokeLinejoin="round"
      />
      <path d="M14 3v5h5M9 13h6M9 17h4" strokeLinecap="round" />
    </svg>
  );
}
