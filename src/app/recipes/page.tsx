import type { Metadata } from "next";
import RecipeExplorer from "@/components/RecipeExplorer";

export const metadata: Metadata = {
  title: "Recipes",
  description: "Browse a fresh selection of recipes and shuffle for new ideas.",
};

export default function RecipesPage() {
  return <RecipeExplorer />;
}
