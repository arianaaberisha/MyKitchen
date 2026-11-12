"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/recipes", label: "Recipes" },
  { href: "/#community", label: "Community" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-soft hover:text-brand ${
      pathname === href ? "text-brand" : "text-stone-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-2xl font-semibold text-brand" onClick={() => setOpen(false)}>
          MyKitchen
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/recipes"
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark md:inline-block"
          >
            Explore recipes
          </Link>
          <button
            type="button"
            className="rounded-full p-2 text-stone-700 hover:bg-brand-soft md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-stone-200/70 bg-cream px-4 pb-4 pt-2 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-stone-800 hover:bg-brand-soft"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
