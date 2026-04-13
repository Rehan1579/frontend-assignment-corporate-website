import Link from "next/link";

export default function GlobalNotFoundRoute() {
  return (
    <section className="min-h-screen bg-(--BG-LIGHT)">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center sm:px-8 lg:px-10">
        <p className="section-label text-(--TXT-BRAND) opacity-60">404 Error</p>
        <h1 className="text-display mt-5 text-5xl leading-none text-(--TXT-BRAND) sm:text-6xl">
          This page could not be found
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-(--TXT-LIGHT) opacity-70 sm:text-lg">
          The page you are looking for may have moved, been removed, or never
          existed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-(--BTN-PRIMARY-BG) px-5 py-3 text-sm font-semibold text-(--BTN-PRIMARY-TXT)"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
