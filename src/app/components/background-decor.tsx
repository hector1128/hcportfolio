// components/BackgroundDecor.tsx
export default function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 bg-fade-onload"
    >
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-black opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-48 bg-black opacity-10 rounded-full blur-3xl rotate-12"></div>
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-2/3 h-1 bg-black opacity-10 blur-md rounded-full"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg
          width="100%"
          height="100%"
          className="opacity-10 animate-dotmove"
          style={{ position: "absolute", top: 0, left: 0 }}
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
