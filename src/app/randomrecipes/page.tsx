"use client";

import { useEffect, useState } from "react";

const RandomRecipes = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`/api/randomRecipe?number=8`);
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const cleanDescription = (description: string) => {
    return description.replace(/<\/?[^>]+(>|$)/g, ""); 
  };

  return (
    <div className="min-h-screen bg-[#ffff] p-10">
      <h1 className="text-[50px] font-bold text-center text-[#046E1B] mb-[40px] font-inter ">
        🍽️ Random Recipes
      </h1>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-600 text-lg font-inter">Loading recipes...</p>
      ) : (
        <div className="grid grid-flow-col grid-rows-4 gap-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className=" p-6  transition duration-300 max-w-xs mx-auto"
            >
           
              <div className="flex flex-col items-center w-[700px] h-auto bg-[#ffffff] mt-[20px] gap-[57px] rounded-[20px]">
                
                <h2 className="text-lg font-inter text-[24px] font-[1000] text-center mb-3 p-[20px]">
                  {recipe.title}
                </h2>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-20 h-20 overflow-hidden rounded-[12px] mb-4"
                />

                <p className="text-[#000000] font-inter text-[18px] mt-3 text-sm leading-relaxed mb-4 p-[20px]">
                  {cleanDescription(recipe.summary)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RandomRecipes;
