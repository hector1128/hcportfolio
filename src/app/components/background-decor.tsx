// components/BackgroundDecor.tsx
export default function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    >
      {/* responsive soft blobs */}
      <div className="absolute -top-[30vw] -left-[30vw] w-[60vw] h-[60vw] bg-black/8 rounded-full blur-3xl
                      sm:-top-[15vw] sm:-left-[15vw] sm:w-[45vw] sm:h-[45vw]" />
      <div className="absolute right-[-10vw] bottom-[-10vw] w-[80vw] h-[40vw] bg-black/8 rounded-full blur-3xl rotate-12
                      sm:right-[2vw] sm:bottom-[5vw] sm:w-[60vw] sm:h-[30vw]" />
      <div className="absolute left-1/2 top-[30vh] -translate-x-1/2 w-[85%] h-px bg-black/8 blur-md rounded-full" />

      {/* dotted field (covers viewport, uses CSS animation to move) */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          className="opacity-8 animate-dotmove"
          style={{ position: "absolute", top: 0, left: 0 }}
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="black" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    </div>
  );
}
