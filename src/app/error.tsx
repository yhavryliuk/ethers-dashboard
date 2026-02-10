"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="text-3xl font-semibold">Something went wrong</div>
      <p className="max-w-md text-sm text-neutral-500">
        We could not load the dashboard right now. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium transition hover:border-neutral-300 hover:bg-neutral-50"
      >
        Try again
      </button>
    </div>
  );
}
