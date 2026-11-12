import React from 'react';

const LearnMore = () => {
  return (
   
    <div className=" absolute top-[40%] right-[35%] transform translate-y-[-50%] w-[578px] h-[431px] gap-[10px] flex flex-col items-start  rounded-[20px]">
            
    <h2 className="text-[46px] sm:bg-blue-500 lg:bg-yellow font-inter font-semibold tracking-[-1.7%] leading-[100%] pl-[30px] mt-[100px]">
        About Us
      </h2>
      <p className="text-[24px] font-inter font-normal leading-[30px] pl-[30px] pr-[30px]">
        We have thousands of recipes available on our page. We collected them from different cuisines, places, and cultures from across the world.
        This past decade since we were created, our recipes have inspired millions of people. For those who have cooking as a passion, our website is the best place to get new ideas.
        With detailed instructions and ingredients, you can become an excellent chef.
        Sign up with us and stay updated for every new recipe.
      </p>
  
    </div>
    
  );
};

export default LearnMore;
