"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

/* Inline SVGs rather than image files: no extra requests, and they
   inherit currentColor so active/inactive states come for free. */
const ITEMS: Item[] = [
  {
    href: "/",
    label: "HOME",
    icon: (
      <path
        d="M3 10.5 12 3l9 7.5M5.5 9.5V20h13V9.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    href: "/about",
    label: "ABOUT",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20a7.5 7.5 0 0 1 15 0" strokeLinecap="round" />
      </>
    ),
  },
  {
    href: "/career",
    label: "CAREER",
    icon: (
      <>
        <rect x="3" y="7.5" width="18" height="12" rx="2" />
        <path
          d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12h18"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    href: "/projects",
    label: "PROJECTS",
    icon: (
      <path
        d="m8 8-4 4 4 4M16 8l4 4-4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
      className="h-5 w-5"
    >
      {children}
    </svg>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ---------- Mobile: fixed bottom tab bar ---------- */}
      <nav
        aria-label="Primary"
        className="pb-safe fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-brand/95 backdrop-blur-md md:hidden"
      >
        <ul className="grid grid-cols-4">
          {ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    // min-h-14 = 56px, comfortably above the 44px touch floor
                    "relative flex min-h-14 flex-col items-center justify-center gap-1 px-1 text-on-brand transition-opacity",
                    active ? "opacity-100" : "opacity-60",
                  ].join(" ")}
                >
                  <span
                    aria-hidden
                    className={[
                      "absolute inset-x-0 top-0 mx-auto h-0.5 w-8 rounded-full bg-on-brand transition-opacity",
                      active ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                  />
                  <Icon>{item.icon}</Icon>
                  <span
                    className={[
                      "text-[11px] leading-none tracking-wide",
                      active ? "font-bold" : "font-medium",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ---------- Desktop: centered pill bar ---------- */}
      <nav
        aria-label="Primary"
        className="fade-onload mx-4 mt-6 hidden max-w-4xl rounded-xl bg-brand p-2 font-sans font-bold shadow-2xl md:mx-auto md:flex md:flex-wrap md:justify-center md:gap-2 md:text-lg"
      >
        {ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={[
                "rounded-lg px-4 py-2 transition-all duration-200",
                "hover:scale-105 hover:drop-shadow-[0_0_8px_white]",
                active
                  ? "bg-on-brand/15 text-on-brand"
                  : "text-on-brand/75 hover:text-on-brand",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
