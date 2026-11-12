export interface Recipe {
  id: number;
  title: string;
  image?: string;
  readyInMinutes: number;
  servings: number;
  summary?: string;
  sourceUrl?: string;
  spoonacularSourceUrl?: string;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  veryHealthy?: boolean;
}

export interface RecipeDetail extends Recipe {
  sourceName?: string;
  extendedIngredients?: { original: string }[];
  analyzedInstructions?: { steps: { number: number; step: string }[] }[];
  instructions?: string;
}
