# MyKitchen

A recipe discovery website built with Next.js. It shows fresh recipes pulled from the
[Spoonacular API](https://spoonacular.com/food-api), with a landing page, a recipes page you can
shuffle for new ideas, and a detail page for each recipe with ingredients and step-by-step instructions.

## About this project

I first built this in March 2025 as a learning project, adapting an existing website design to practise
building a full Next.js app. In November 2026 I refactored and redesigned it: removed dead code and unused
dependencies, rebuilt the layout to be responsive, consolidated the duplicated pages and API routes, and
added the recipe detail pages. The community reviews on the home page are placeholder content.

## Features

- Landing page with featured recipes, an About section, community reviews and a call to action
- A "Recipes" page with a Shuffle button for a new set of recipes each time
- A recipe detail page (`/recipes/[id]`) with ingredients, instructions and a link to the original source
- A server-side API route that calls Spoonacular, so the API key never reaches the browser
- Responsive layout with loading skeletons and clear error messages

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router + API routes) and React 19
- TypeScript
- Tailwind CSS 4
- Spoonacular API

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Get a free API key from [spoonacular.com/food-api](https://spoonacular.com/food-api), then copy
   `.env.example` to `.env.local` and add your key:

   ```
   SPOONACULAR_API_KEY=your_key_here
   ```

3. Start the dev server and open [http://localhost:3000](http://localhost:3000):

   ```bash
   npm run dev
   ```

## Project structure

```
src/
  app/            Pages (home, recipes, recipes/[id]), layout, global styles
  app/api/recipes Route handler that proxies requests to Spoonacular
  components/     UI sections (Header, Hero, RecipeCard, ...)
  lib/            Shared types, the useRecipes hook and the server-side getRecipe helper
public/images/    Static images
```

## Notes

- The free Spoonacular plan has a daily request limit. If recipes stop loading, the limit has
  probably been reached and it resets the next day.
- `.env.local` is git-ignored. Never commit your API key.

## Credits

Recipe data and images are provided by the [Spoonacular API](https://spoonacular.com/food-api). This project is not affiliated with Spoonacular.
