"use client";

import { useCallback, useEffect, useState } from "react";
import type { Recipe } from "./types";

function friendlyError(status: number): string {
  if (status === 401) return "The recipe service rejected the API key. Check SPOONACULAR_API_KEY.";
  if (status === 402 || status === 429) return "The daily recipe limit has been reached. Please try again tomorrow.";
  return "We couldn't load recipes right now. Please try again.";
}

/** Fetches `count` random recipes from our API route, with loading and error state. */
export function useRecipes(count: number) {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(`/api/recipes?number=${count}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error(friendlyError(response.status));
        const data: unknown = await response.json();
        setRecipes(Array.isArray(data) ? (data as Recipe[]) : []);
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        setError(err instanceof Error ? err.message : friendlyError(500));
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [count, nonce]);

  const reload = useCallback(() => setNonce((n) => n + 1), []);

  return { recipes, loading, error, reload };
}
