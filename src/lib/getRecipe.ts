import type { RecipeDetail } from "./types";

export type RecipeResult =
  | { status: "ok"; recipe: RecipeDetail }
  | { status: "not-found" }
  | { status: "error"; message: string };

/** Fetches one recipe's full details. Cached for an hour to save API quota. */
export async function getRecipe(id: string): Promise<RecipeResult> {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  if (!apiKey) {
    return { status: "error", message: "SPOONACULAR_API_KEY is not set. Add it to .env.local and restart the server." };
  }

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`,
      { next: { revalidate: 3600 } }
    );

    if (response.status === 404) return { status: "not-found" };
    if (response.status === 402 || response.status === 429) {
      return { status: "error", message: "The daily recipe limit has been reached. Please try again tomorrow." };
    }
    if (!response.ok) return { status: "error", message: "We couldn't load this recipe right now." };

    return { status: "ok", recipe: (await response.json()) as RecipeDetail };
  } catch {
    return { status: "error", message: "We couldn't load this recipe right now." };
  }
}
