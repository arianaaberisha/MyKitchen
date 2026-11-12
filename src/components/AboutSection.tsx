import Image from "next/image";
import Link from "next/link";
import { FaClock, FaLeaf, FaSyncAlt } from "react-icons/fa";

const highlights = [
  { icon: FaSyncAlt, title: "Fresh every visit", text: "New recipe picks each time you come back." },
  { icon: FaClock, title: "Details at a glance", text: "Cooking time, servings and dietary tags on every card." },
  { icon: FaLeaf, title: "Easy to follow", text: "Jump straight to the full recipe whenever you're ready." },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
        <Image
          src="/images/image7.jpg"
          alt="Crepes topped with ricotta and orange slices"
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <h2 className="font-display text-4xl font-semibold">About MyKitchen</h2>
        <p className="mt-4 text-lg leading-relaxed text-stone-600">
          Our recipes are the heart and soul of our culinary community, and they reflect our commitment to providing you
          with memorable and delightful dining experiences.
        </p>

        <ul className="mt-8 space-y-5">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                <Icon aria-hidden />
              </span>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm text-stone-600">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <Link
          href="/recipes"
          className="mt-8 inline-block rounded-full bg-accent px-7 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-accent-dark"
        >
          Browse recipes
        </Link>
      </div>
    </section>
  );
}
