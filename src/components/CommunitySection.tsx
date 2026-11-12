import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Review {
  profile: string;
  foodName: string;
  reviewer: string;
  review: string;
  foodImage: string;
}

const reviews: Review[] = [
  {
    profile: "/images/user1.jpg",
    foodName: "Spaghetti Bolognese",
    reviewer: "Lady Rudy",
    review:
      "I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.",
    foodImage: "/images/spaghetti.jpg",
  },
  {
    profile: "/images/user2.jpg",
    foodName: "Roasted Chicken",
    reviewer: "Emily Rose",
    review:
      "I've always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow.",
    foodImage: "/images/chicken1.jpg",
  },
  {
    profile: "/images/user3.jpg",
    foodName: "Vegetable Pot Pie",
    reviewer: "Susan H",
    review:
      "I've always been a fan of hearty comfort food, and the 'Ultimate Vegetable Pot Pie' recipe on this platform completely exceeded my expectations.",
    foodImage: "/images/pie.jpg",
  },
  {
    profile: "/images/user4.jpg",
    foodName: "Fresh Garden Salad",
    reviewer: "Lilac Laura",
    review:
      "I've always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece.",
    foodImage: "/images/salad.jpg",
  },
];

function ReviewCard({ profile, foodName, reviewer, review, foodImage }: Review) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200/70">
      <div className="relative aspect-[16/9] bg-stone-100">
        <Image
          src={foodImage}
          alt={foodName}
          fill
          sizes="(min-width: 768px) 560px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} size={16} />
          ))}
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold">{foodName}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-stone-600">{review}</p>
        <div className="mt-5 flex items-center gap-3">
          <Image src={profile} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
          <span className="font-medium">{reviewer}</span>
        </div>
      </div>
    </article>
  );
}

export default function CommunitySection() {
  return (
    <section id="community" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold">From our community</h2>
          <p className="mt-3 text-lg text-stone-600">See what home cooks are saying about their favourite dishes.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((r) => (
            <ReviewCard key={r.reviewer} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
