import type { Recipe } from "./types";

/** Spoonacular summaries are HTML; strip tags for display. */
export function plainText(html: string): string {
  return html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

export function dietTags(recipe: Recipe, limit = 3): string[] {
  const tags: string[] = [];
  if (recipe.vegan) tags.push("Vegan");
  else if (recipe.vegetarian) tags.push("Vegetarian");
  if (recipe.glutenFree) tags.push("Gluten free");
  if (recipe.dairyFree) tags.push("Dairy free");
  if (recipe.veryHealthy) tags.push("Healthy");
  return tags.slice(0, limit);
}
