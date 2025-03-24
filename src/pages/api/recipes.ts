import type { NextApiRequest, NextApiResponse } from "next";

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=6&apiKey=${SPOONACULAR_API_KEY}`
    );
    const data = await response.json();

   
    res.status(200).json(data.recipes || []);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Failed to fetch recipes." });
  }
}
