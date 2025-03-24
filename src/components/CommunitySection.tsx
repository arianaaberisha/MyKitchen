import React from "react";
import Image from "next/image";
import { FaStar, FaRegHeart, FaShareAlt } from "react-icons/fa";

const Community: React.FC = () => {
  return (
    <div id="community-section" className="w-[1440px] h-auto p-[100px] gap-[70px] mx-auto">
      <div className="w-[1240px] h-auto gap-[49px] mx-auto">
        <p className="w-[800px] h-[33px] text-[46px] font-inter font-semibold ml-[440px]">
          From Our Community
        </p>

        <div className="w-[1240px] h-auto gap-[90px] mx-auto mt-[100px]">
          <div className="w-[1240px] h-[578px] flex gap-[90px] mx-auto">
            <ReviewCard
              profile="/images/user1.png"
              foodName="Spaghetti Bolognese"
              reviewer="Lady Rudy"
              review="I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home."
              foodImage="/images/spaghetti.png"
            />
            <ReviewCard
              profile="/images/user2.png"
              foodName="Roasted Chicken"
              reviewer="Emily Rose"
              review="I've always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow."
              foodImage="/images/chicken1.png"
            />
          </div>
        </div>

        <div className="w-[1240px] h-auto gap-[90px] mx-auto mt-[100px]">
          <div className="w-[1240px] h-[578px] flex gap-[90px] mx-auto">
            <ReviewCard
              profile="/images/user3.png"
              foodName="Vegetable Pot Pie"
              reviewer="Susan H"
              review="I've always been a fan of hearty comfort food, and the 'Ultimate Vegetable Pot Pie' recipe on this platform completely exceeded my expectations."
              foodImage="/images/pie.png"
            />
            <ReviewCard
              profile="/images/user4.png"
              foodName="Fresh Garden Salad"
              reviewer="Lilac Laura"
              review="I've always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece."
              foodImage="/images/salad.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ReviewCardProps {
  profile: string;
  foodName: string;
  reviewer: string;
  review: string;
  foodImage: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ profile, foodName, reviewer, review, foodImage }) => {
  return (
    <div className="w-[575px] h-[578px] flex flex-col gap-[10px] p-5 bg-white shadow-lg rounded-lg flex-grow">
     <div className="flex items-center gap-4 ml-[70px]">
        <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden">
          <Image src={profile} alt={reviewer} fill style={{ objectFit: "cover" }} />
        </div>
        <div>
          <h3 className="text-[23px] p-[3px]">{foodName}</h3>
          <p className="text-[#808080]">{reviewer}</p>
        </div>
      </div>

      <div className="flex gap-1 text-[#F5E83F] ml-[70px]">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <FaStar key={index} />
          ))}
      </div>
      <p className="text-[16px] ml-[70px] mr-[100px]">{review}</p>

      <div className="w-[450px] h-[250px] overflow-hidden rounded-[20px] mx-auto">
        <Image src={foodImage} alt={foodName} width={500} height={200} className="object-cover" />
      </div>

      <div className="w-[160px] h-[22.35px] flex gap-[25px] mt-3 ml-[70px]">
        <button className="flex items-center gap-2 text-red-500 hover:text-red-700">
          <FaRegHeart /> Like
        </button>
        <button className="flex items-center gap-2 text-blue-500 hover:text-blue-700">
          <FaShareAlt /> Share
        </button>
      </div>
    </div>
  );
};

export default Community;
