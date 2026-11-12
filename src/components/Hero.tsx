import Image from "next/image";
import Link from "next/link";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
      <div>
        <span className="inline-block rounded-full bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand">
          Fresh recipe ideas, every visit
        </span>
        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Cooking made fun and easy,{" "}
          <span className="text-brand">unleash your inner chef</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600">
          Discover new recipes in seconds, with cooking time, servings and dietary info at a glance. Find your next
          favourite meal and get cooking.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/recipes"
            className="rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-accent-dark"
          >
            Explore recipes
          </Link>
          <Link
            href="/#about"
            className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-base font-semibold text-stone-800 transition-colors hover:border-brand hover:text-brand"
          >
            Learn more
          </Link>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md md:max-w-none">
        <div className="absolute inset-4 rounded-full bg-brand-soft" aria-hidden />
        <Image
          src="/images/image.png"
          alt="A plate with a poached egg, avocado, broccoli and toasted bread"
          width={640}
          height={570}
          priority
          sizes="(min-width: 768px) 560px, 90vw"
          className="relative h-auto w-full -rotate-6 drop-shadow-2xl"
        />

        <figure className="absolute -bottom-6 left-0 w-64 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-stone-200/70 sm:-left-4">
          <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>
          <blockquote className="mt-2 text-sm leading-snug text-stone-700">
            &ldquo;The recipes here are not only delicious but also easy to follow.&rdquo;
          </blockquote>
          <figcaption className="mt-3 flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm font-medium">
              <Image
                src="/images/imageSarah.jpg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              Sarah M.
            </span>
            <FaRegHeart className="text-stone-400" aria-hidden />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
