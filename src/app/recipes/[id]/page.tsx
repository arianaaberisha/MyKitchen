import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaClock, FaExternalLinkAlt, FaUtensils } from "react-icons/fa";
import { getRecipe } from "@/lib/getRecipe";
import { dietTags, plainText } from "@/lib/format";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  if (!/^\d+$/.test(id)) return { title: "Recipe not found" };
  const result = await getRecipe(id);
  if (result.status !== "ok") return { title: "Recipe" };
  return {
    title: result.recipe.title,
    description: plainText(result.recipe.summary ?? "").slice(0, 160),
  };
}

export default async function RecipePage({ params }: Props) {
  const { id } = await params;
  if (!/^\d+$/.test(id)) notFound();

  const result = await getRecipe(id);
  if (result.status === "not-found") notFound();

  const back = (
    <Link href="/recipes" className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline">
      <FaArrowLeft aria-hidden /> Back to recipes
    </Link>
  );

  if (result.status === "error") {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {back}
        <div role="alert" className="mt-8 rounded-2xl border border-red-200 bg-red-50 px-6 py-10 text-center">
          <p className="font-medium text-red-800">{result.message}</p>
        </div>
      </div>
    );
  }

  const { recipe } = result;
  const tags = dietTags(recipe, 5);
  const steps =
    recipe.analyzedInstructions?.[0]?.steps.map((s) => s.step) ??
    (recipe.instructions ? [plainText(recipe.instructions)] : []);
  const ingredients = recipe.extendedIngredients ?? [];
  const sourceHref = recipe.sourceUrl ?? recipe.spoonacularSourceUrl;

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {back}

      <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl">{recipe.title}</h1>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-stone-600">
        <span className="flex items-center gap-2">
          <FaClock className="text-brand" aria-hidden /> {recipe.readyInMinutes} min
        </span>
        <span className="flex items-center gap-2">
          <FaUtensils className="text-brand" aria-hidden /> {recipe.servings} servings
        </span>
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag} className="rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      {recipe.image && (
        <div className="relative mt-8 aspect-[3/2] overflow-hidden rounded-3xl bg-stone-100 shadow-md">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      {recipe.summary && (
        <p className="mt-8 text-lg leading-relaxed text-stone-700">{plainText(recipe.summary)}</p>
      )}

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.6fr]">
        {ingredients.length > 0 && (
          <section aria-labelledby="ingredients-heading" className="h-fit rounded-2xl bg-white p-6 ring-1 ring-stone-200/70">
            <h2 id="ingredients-heading" className="font-display text-2xl font-semibold">
              Ingredients
            </h2>
            <ul className="mt-4 space-y-3">
              {ingredients.map((item, i) => (
                <li key={i} className="flex gap-3 text-stone-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item.original}
                </li>
              ))}
            </ul>
          </section>
        )}

        {steps.length > 0 && (
          <section aria-labelledby="steps-heading">
            <h2 id="steps-heading" className="font-display text-2xl font-semibold">
              Instructions
            </h2>
            <ol className="mt-4 space-y-5">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 leading-relaxed text-stone-700">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>

      {sourceHref && (
        <p className="mt-12 border-t border-stone-200 pt-6 text-sm text-stone-600">
          Original recipe from{" "}
          <a
            href={sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-brand underline"
          >
            {recipe.sourceName ?? "the source"} <FaExternalLinkAlt size={11} aria-hidden />
          </a>
        </p>
      )}
    </article>
  );
}
