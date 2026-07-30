/**
 * Route transition wrapper.
 *
 * template.tsx (unlike layout.tsx) remounts on every navigation, so a plain CSS
 * animation on this element re-runs per route — no client component, no JS.
 * The existing `fade-onload` utility can't do this: it keys off
 * html[data-loaded], which OnMountFlag sets once and never clears, so on
 * client-side navigations the incoming markup mounts already settled and never
 * transitions.
 *
 * Enter-only by design. App Router unmounts the outgoing tree before the
 * incoming one renders, so an exit animation would mean freezing the router
 * context — not worth the fragility for a ~100ms overlap.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="route-enter">{children}</div>;
}
