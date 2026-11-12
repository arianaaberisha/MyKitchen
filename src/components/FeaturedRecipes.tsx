"use client";

import Link from "next/link";
import { useRecipes } from "@/lib/useRecipes";
import RecipeGrid from "./RecipeGrid";

export default function FeaturedRecipes() {
  const { recipes, loading, error, reload } = useRecipes(6);

  return (
    <section id="recipes" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-4xl font-semibold">Discover, create, share</h2>
            <p className="mt-2 text-lg text-stone-600">A fresh selection of recipes to try this week.</p>
          </div>
          <Link
            href="/recipes"
            className="self-start rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark sm:self-auto"
          >
            See all recipes
          </Link>
        </div>

        <RecipeGrid recipes={recipes} loading={loading} error={error} onRetry={reload} />
      </div>
    </section>
  );
}
