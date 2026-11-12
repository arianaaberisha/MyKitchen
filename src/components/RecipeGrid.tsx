import type { Recipe } from "@/lib/types";
import RecipeCard from "./RecipeCard";

interface RecipeGridProps {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  onRetry: () => void;
  skeletonCount?: number;
  showSummary?: boolean;
}

export default function RecipeGrid({
  recipes,
  loading,
  error,
  onRetry,
  skeletonCount = 6,
  showSummary,
}: RecipeGridProps) {
  const grid = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

  if (loading) {
    return (
      <div className={grid} aria-busy="true" aria-label="Loading recipes">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <div key={i} className="animate-pulse overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200/70">
            <div className="aspect-[4/3] bg-stone-200" />
            <div className="space-y-3 p-5">
              <div className="h-4 w-1/3 rounded bg-stone-200" />
              <div className="h-5 w-4/5 rounded bg-stone-200" />
              <div className="h-4 w-1/2 rounded bg-stone-200" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center">
        <p className="font-medium text-red-800">{error}</p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-4 rounded-full bg-red-700 px-5 py-2 text-sm font-semibold text-white hover:bg-red-800"
        >
          Try again
        </button>
      </div>
    );
  }

  if (recipes.length === 0) {
    return <p className="py-10 text-center text-stone-600">No recipes to show right now.</p>;
  }

  return (
    <div className={grid}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} showSummary={showSummary} />
      ))}
    </div>
  );
}
