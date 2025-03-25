"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaClock, FaUser, FaChartLine } from "react-icons/fa";
import Link from "next/link";

interface RecipeProps {
  id: number;
  image: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  difficulty: string; 
}

const RecipeSection: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);

  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes"); 
        const data = await response.json();

       
        const formattedRecipes = data.map((recipe: any) => ({
          id: recipe.id,
          image: recipe.image,
          title: recipe.title,
          readyInMinutes: recipe.readyInMinutes,
          servings: recipe.servings,
          difficulty: recipe.veryHealthy ? "Easy" : "Medium", 
        }));

        setRecipes(formattedRecipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div id="recipe-section" className="w-[1500px] h-[800px] mx-auto mt-6 top-[799px] p-[100px] gap-[70px]">
      <div className="w-[1500px] h-[70px] gap-[568px] flex items-center justify-between mx-auto">
       
        <div className="w-[600px] h-[70px] flex flex-col gap-[20px] ml-[-100px]">
          <h2 className="text-[46px] font-inter font-semibold tracking-[-1.7%] leading-[100%]">
            Discover, Create, Share
          </h2>
          <p className="text-[24px] font-inter font-light text-[#b4afaf]">
            Check our most popular recipes of this week
          </p>
        </div>
        <Link href="/allrecipes">
  <div className="w-[150px] h-[55px] mr-[200px]">
    <button className="w-full h-full bg-[#F79F1A] rounded-[20px] text-[#ffff] font-inter font-semibold text-[20px] hover:cursor-pointer">
      See All
    </button>
  </div>
</Link>
      </div>

      <div className=" w-[1500px] h-[800px] flex flex-col gap-[60px] mx-auto mt-[60px] ml-[-100px]">
        <div className="grid grid-cols-3 gap-[57px] ">
          {recipes.slice(0, 3).map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>

        <div className=" grid grid-cols-3 gap-[57px]">
          {recipes.slice(3).map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RecipeCard: React.FC<RecipeProps> = ({ id, image, title, readyInMinutes, servings, difficulty }) => {
  return (
    <div className="w-[375px] min-h-[368px] bg-[#ffff] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.05)] flex flex-col ">

      <div className="w-full h-[254px] rounded-tl-[20px] rounded-tr-[20px] overflow-hidden">
        <Image src={image} alt={title} layout="responsive" width={375} height={254} objectFit="cover" />
      </div>

      <div className="w-full h-[15px] flex items-center gap-[10px]  justify-between px-[10px] mt-[10px] "
      >
        <div className="flex items-center gap-[5px]">
          <FaClock className="text-[#046E1B]" />
          <span className="text-[#046E1B]">{readyInMinutes} Mins</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <FaUser className="text-[#046E1B]" />
          <span className="text-[#046E1B]">{servings} Servings</span>
        </div>
        <div className="flex items-center gap-[5px]">
          <FaChartLine className="text-[#046E1B]" />
          <span className="text-[#046E1B]">{difficulty}</span>
        </div>
      </div>

      <div className="w-full h-[114px] flex flex-col gap-[10px] px-[10px] mt-[8px]">
        <h3 className="text-[20px] font-inter font-semibold  break-words line-clamp-2">{title}</h3>
        <Link href={`/recipes/${id}`} passHref>
          <button className="text-[16px]   font-inter text-[#F79F1A] underline hover:cursor-pointer">View Recipe</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeSection;
