import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell relative flex min-h-[70vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-h1 font-semibold text-brand">
        404 — Page Not Found
      </h1>
      <p className="pb-2 text-body text-brand">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="pb-8 text-body text-brand">
        Why don&apos;t you head back home?
      </p>
      <Link
        href="/"
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-brand px-6 py-2.5
                   font-semibold text-on-brand transition hover:opacity-95
                   focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2
                   focus-visible:ring-offset-canvas focus-visible:outline-none"
      >
        Home
      </Link>
    </main>
  );
}
