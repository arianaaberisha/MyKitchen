import Link from "next/link";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="rounded-3xl bg-brand px-6 py-16 text-center text-white shadow-lg sm:px-12">
        <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Embrace the joy of cooking. Your kitchen adventure begins now.
        </h2>
        <Link
          href="/recipes"
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-accent-dark"
        >
          Find a recipe
        </Link>
      </div>
    </section>
  );
}
