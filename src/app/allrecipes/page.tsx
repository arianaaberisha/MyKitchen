"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaClock, FaUser, FaChartLine } from "react-icons/fa";

interface RecipeProps {
  id: number;
  image: string;
  title: string;
  readyInMinutes: number;
  servings: number;
  difficulty: string;
}

const AllRecipes: React.FC = () => {
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
    <div className="w-full mx-auto p-[100px]">
      <h1 className="text-[46px] font-inter font-semibold mb-[50px] text-center">
        All Recipes
      </h1>
      <div className="grid grid-cols-3 gap-[50px]">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="w-[375px] bg-white shadow-lg rounded-lg">
            <div className="w-full h-[254px] rounded-t-lg overflow-hidden">
              <Image
                src={recipe.image}
                alt={recipe.title}
                layout="responsive"
                width={375}
                height={254}
                objectFit="cover"
              />
            </div>
            <div className="p-[20px]">
              <h3 className="text-[20px] font-semibold mb-[10px]">{recipe.title}</h3>
              <div className="flex justify-between text-[14px] mb-[10px]">
                <span className="flex items-center gap-1">
                  <FaClock /> {recipe.readyInMinutes} mins
                </span>
                <span className="flex items-center gap-1">
                  <FaUser /> {recipe.servings} servings
                </span>
                <span className="flex items-center gap-1">
                  <FaChartLine /> {recipe.difficulty}
                </span>
              </div>
              <button className="text-[#F79F1A] underline">View Recipe</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
