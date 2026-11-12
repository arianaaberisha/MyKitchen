import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="font-display text-2xl font-semibold text-brand">MyKitchen</p>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Fresh, easy-to-follow recipes to inspire what you cook next.
          </p>
        </div>

        <nav aria-label="Footer" className="flex gap-12 text-sm">
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-stone-700 hover:text-brand">Home</Link>
            </li>
            <li>
              <Link href="/recipes" className="text-stone-700 hover:text-brand">Recipes</Link>
            </li>
          </ul>
          <ul className="space-y-3">
            <li>
              <Link href="/#community" className="text-stone-700 hover:text-brand">Community</Link>
            </li>
            <li>
              <Link href="/#about" className="text-stone-700 hover:text-brand">About</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-stone-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-stone-500 sm:flex-row sm:justify-between sm:px-6">
          <p>&copy; {new Date().getFullYear()} MyKitchen. A personal project.</p>
          <p>
            Recipe data by{" "}
            <a
              href="https://spoonacular.com/food-api"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand"
            >
              Spoonacular
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
