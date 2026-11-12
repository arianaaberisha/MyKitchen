import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const MAX_RECIPES = 12;

export async function GET(request: Request) {
  const apiKey = process.env.SPOONACULAR_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "SPOONACULAR_API_KEY is not set. Add it to .env.local and restart the server." },
      { status: 500 }
    );
  }

  const requested = parseInt(new URL(request.url).searchParams.get("number") ?? "6", 10);
  const number = Number.isNaN(requested) ? 6 : Math.min(Math.max(requested, 1), MAX_RECIPES);

  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${apiKey}`,
      { cache: "no-store" }
    );
    const data = await response.json();

    if (!response.ok) {
      // e.g. 401 invalid key, 402 daily quota reached
      return NextResponse.json(
        { error: data.message || "Spoonacular request failed." },
        { status: response.status }
      );
    }

    return NextResponse.json(data.recipes ?? []);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return NextResponse.json({ error: "Failed to fetch recipes." }, { status: 500 });
  }
}
