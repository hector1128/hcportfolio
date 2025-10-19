// components/BackgroundDecor.tsx
export default function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* dotted field (covers viewport, moves on CSS animation) */}
      <svg
        className="absolute inset-0 w-[100dvw] h-[100dvh] animate-dotmove"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            {/* barely-visible dots */}
            <circle cx="1.5" cy="1.5" r="1.5" fill="black" fillOpacity="0.12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* soft blobs */}

      <div
        className="absolute -top-[30vw] -left-[30vw] w-[60vw] h-[60vw] bg-black rounded-full blur-3xl
             opacity-0 sm:opacity-10
             sm:-top-[15vw] sm:-left-[15vw] sm:w-[45vw] sm:h-[45vw]"
      />

      <div
        className="absolute right-[-10vw] bottom-[-10vw] w-[80vw] h-[40vw] bg-black/2 rounded-full blur-3xl rotate-12
                      sm:right-[2vw] sm:bottom-[5vw] sm:w-[60vw] sm:h-[30vw]"
      />

      {/* subtle divider – hide on mobile */}
      <div className="hidden sm:block absolute left-1/2 top-[30vh] -translate-x-1/2 w-[85%] h-px bg-black/2 blur-md rounded-full" />
    </div>
  );
}
