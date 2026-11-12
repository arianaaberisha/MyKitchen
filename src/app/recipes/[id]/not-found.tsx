import Link from "next/link";

export default function RecipeNotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-display text-4xl font-semibold">Recipe not found</h1>
      <p className="mt-4 text-stone-600">We couldn&apos;t find that recipe. It may have been removed.</p>
      <Link
        href="/recipes"
        className="mt-8 inline-block rounded-full bg-accent px-7 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark"
      >
        Browse recipes
      </Link>
    </div>
  );
}
