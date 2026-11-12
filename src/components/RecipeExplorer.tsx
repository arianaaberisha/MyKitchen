"use client";

import { FaRandom } from "react-icons/fa";
import { useRecipes } from "@/lib/useRecipes";
import RecipeGrid from "./RecipeGrid";

export default function RecipeExplorer() {
  const { recipes, loading, error, reload } = useRecipes(9);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Recipes</h1>
          <p className="mt-3 max-w-xl text-lg text-stone-600">
            A hand-picked mix of recipes to inspire your next meal. Not feeling it? Shuffle for a new set.
          </p>
        </div>
        <button
          type="button"
          onClick={reload}
          disabled={loading}
          className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60 sm:self-auto"
        >
          <FaRandom aria-hidden /> Shuffle recipes
        </button>
      </div>

      <RecipeGrid recipes={recipes} loading={loading} error={error} onRetry={reload} skeletonCount={9} showSummary />
    </div>
  );
}
