import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <div className="text-4xl font-semibold">404</div>
      <p className="max-w-md text-sm text-neutral-500">
        This page does not exist or was moved.
      </p>
      <Link
        href="/dashboard"
        className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium transition hover:border-neutral-300 hover:bg-neutral-50"
      >
        Back to dashboard
      </Link>
    </div>
  );
}
