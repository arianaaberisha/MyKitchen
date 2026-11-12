import Image from "next/image";
import Link from "next/link";
import { FaClock, FaUtensils } from "react-icons/fa";
import { dietTags, plainText } from "@/lib/format";
import type { Recipe } from "@/lib/types";

export default function RecipeCard({ recipe, showSummary = false }: { recipe: Recipe; showSummary?: boolean }) {
  const tags = dietTags(recipe);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        {recipe.image && (
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {tags.length > 0 && (
          <ul className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag} className="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-medium text-brand">
                {tag}
              </li>
            ))}
          </ul>
        )}

        <h3 className="line-clamp-2 font-display text-xl font-semibold leading-snug">{recipe.title}</h3>

        {showSummary && recipe.summary && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-600">{plainText(recipe.summary)}</p>
        )}

        <div className="mt-4 flex items-center gap-5 text-sm text-stone-600">
          <span className="flex items-center gap-1.5">
            <FaClock className="text-brand" aria-hidden /> {recipe.readyInMinutes} min
          </span>
          <span className="flex items-center gap-1.5">
            <FaUtensils className="text-brand" aria-hidden /> {recipe.servings} servings
          </span>
        </div>

        <div className="mt-auto pt-5">
          <Link
            href={`/recipes/${recipe.id}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-dark hover:underline"
          >
            View recipe <span aria-hidden>&rarr;</span>
            <span className="sr-only"> for {recipe.title}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
