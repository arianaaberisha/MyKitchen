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
    <div id="recipe-section" className="w-full mx-auto mt-6 p-10 gap-10">
      <div className="w-full flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-bold">Discover, Create, Share</h2>
          <p className="text-lg text-gray-500">Check our most popular recipes of this week</p>
        </div>
        <Link href="/similarrecipes">
          <button className="bg-[#F79F1A] rounded-xl text-white px-4 py-2">See All</button>
        </Link>
      </div>

 
      <div className="grid grid-cols-3 gap-10 mt-10">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

const RecipeCard: React.FC<RecipeProps> = ({ id, image, title, readyInMinutes, servings, difficulty }) => {
  return (
    <div className="bg-white shadow-md rounded-lg">
      <div className="w-full h-[200px] overflow-hidden rounded-t-lg">
        <Image src={image} alt={title} width={375} height={200} objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex justify-between text-sm mt-2">
          <span><FaClock /> {readyInMinutes} mins</span>
          <span><FaUser /> {servings} servings</span>
          <span><FaChartLine /> {difficulty}</span>
        </div>
        <Link href={`/recipe/${id}`}>
          <button className="mt-4 text-[#F79F1A] underline">View Recipe</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeSection;
