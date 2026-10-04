# Portfolio guide

This is Hector Cordero's personal portfolio at https://hectorcordero.com/. It is a Next.js 15 App Router site using React 19, TypeScript, Tailwind CSS 4, and Framer Motion. Use `pnpm` (the lockfile is `pnpm-lock.yaml`).

## Where things live

- `src/app/page.tsx`: Home hero, resume link, and social links.
- `src/app/about/page.tsx`: life timeline; edit its entries in `src/app/data/about.ts` and its expandable cards in `src/app/components/card.tsx`.
- `src/app/career/page.tsx`: experience and skill sections; edit content in `src/app/data/career.ts`, with tile/drawer behavior in `career/client.tsx` and `components/slide-animation.tsx`.
- `src/app/projects/page.tsx`: project showcase; edit ordered entries in `src/app/data/projects.ts` and mobile list/desktop featured deck behavior in `components/proj-island.tsx`.
- `src/app/layout.tsx`: shared navigation, background, font, metadata, and structured data. `src/app/template.tsx` remounts for route enter animation.
- `src/app/globals.css`: Tailwind import, palette/type tokens, page spacing, and motion rules. `public/` holds local images, icons, and the resume PDF; content references these with root-relative paths.

## Editing conventions

- Keep page content in the existing typed data modules, and keep interactive state in client components. App Router pages/layout are server components unless they need browser APIs.
- Reuse the existing `@theme` color/type tokens and `page-shell` spacing. The site uses a warm cream/brown palette and responsive layouts, including a fixed bottom nav on mobile and a pill nav on desktop.
- Preserve keyboard, focus, reduced-motion, and small-screen behavior when changing cards, drawers, or animations. The About and Career details become mobile sheets; Projects uses separate mobile and desktop presentations.
- Use `next/image` for local imagery and update the matching file in `public/` when changing an image path. Keep page metadata and the resume/social links accurate when changing public-facing content.
- Keep `template.tsx`'s route animation fill mode compatible with fixed overlays; `globals.css` explains why `backwards` is used.

## Checks

Run `pnpm lint` and `pnpm build` for code changes, then inspect affected routes at mobile and desktop widths. `pnpm build` runs `next-sitemap` afterward; review generated sitemap/robots changes before committing them. There is no test script in the repository.
