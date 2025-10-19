// components/BackgroundDecor.tsx
export default function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {/* soft blobs */}
      <div className="absolute -top-[15vw] -left-[15vw] w-[45vw] h-[45vw] bg-black/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[5vw] right-[2vw] w-[60vw] h-[30vw] bg-black/10 rounded-full blur-3xl rotate-12"></div>
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-2/3 h-px bg-black/10 blur-md rounded-full"></div>

      {/* dotted field that grows with content height */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          className="opacity-10 animate-dotmove"
          style={{ position: "absolute", top: 0, left: 0 }}
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
              <circle cx="1.5" cy="1.5" r="1.5" fill="black" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
    </div>
  );
}
