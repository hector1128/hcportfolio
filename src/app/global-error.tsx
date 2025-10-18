// app/global-error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Log to console (and/or your error service)
  useEffect(() => {
    console.error(error);
    // Example: Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="min-h-screen grid place-items-center p-6">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold">Something went wrong</h1>
            <p className="mt-2 text-neutral-600">
              We hit an unexpected error. You can try again or go back home.
            </p>

            {/* Show a tiny hint for debugging in dev */}
            {process.env.NODE_ENV === "development" && error?.digest && (
              <p className="mt-3 text-xs text-neutral-500">
                Error digest: {error.digest}
              </p>
            )}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => reset()} // retries the render of the root layout subtree
                className="rounded-xl border px-4 py-2"
              >
                Retry
              </button>
              <Link href="/" className="rounded-xl border px-4 py-2">
                Go home
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
