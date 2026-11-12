import React from "react";

const Footer: React.FC = () => {
  return <div className="w-[1440px] h-[450px] mt-[-800px] ">
    <div className="w-[1500px] h-[279px] ml-[700px]">
        <h1 className="w-[115px] h-[29px] font inter text-[36px] font-[600px] text-[#046E1B]">Recipedia</h1>
  <div className="flex w-full  gap-[60px]">
    <div className="w-[88px] h-[140px] ">
    <ul className="flex flex-col ">
        <h1 className="text-[36px] font inter mt-[30px] font-[600]">Menu</h1>
        <li className=" w-[100px] h-[20px] font inter text-[24px] font-[500] text-[#046E1B]">Home</li>
        <li className="w-[100px] h-[20px] font inter font-[500] text-[24px] pt-[10px]">Recipe</li>
        <li className="w-[100px] h-[20px] font inter font-[500] text-[24px] pt-[17px]">Community</li>
        <li className="w-[100px] h-[20px] font inter font-[500] text-[24px] pt-[20px]">About Us</li>
    </ul>
    </div>
    <div className="w-[77px] h-[140px] ml-[150px]">
        <ul className="flex flex-col">
        <h1 className="text-[36px] font inter mt-[30px] font-[600]">Categories</h1>
        <li className=" w-[100px] h-[20px] font inter text-[24px] font-[500]">Instagram</li>
        <li className="w-[100px] h-[20px] font inter font-[500] text-[24px] pt-[10px]">Twitter</li>
        <li className="w-[100px] h-[20px] font inter font-[500] text-[24px] pt-[17px]">Youtube</li>
        <li className="w-[100px] h-[20px] font inter font-[500] text-[24px] pt-[20px]">Facebook</li>
        </ul>
    </div>
    <div className="w-[128px] h-[167px] ml-[150px]">
        <ul className="flex flex-col">
        <h1 className="text-[36px] font inter mt-[30px] font-[600]">Social</h1>
        <li className=" w-[100px] h-[20px] font inter text-[24px] font-[500]">Breakfast</li>
        <li className="w-[100px] h-[20px] font inter font-[500] text-[24px] pt-[10px]">Lunch</li>
        <li className="w-[100px] h-[20px] font inter font-[500] text-[24px] pt-[17px]">Dinner</li>
        <li className="w-[100px] h-[24px] font inter font-[500] text-[24px] pt-[20px]">Dessert</li>
        <li className="w-[100px] h-[24px] font inter font-[500] text-[24px] pt-[20px]">Drink</li>
        </ul>
    </div>
    
    <div className="w-[500px] h-auto ml-[150px] flex flex-col space-y-4">

  <div>
    <h1 className="text-[36px] font-inter font-[600] text-center">
      Sign up for our newsletter
    </h1>
  </div>

  
  <div className="flex items-center space-x-4 mt-[100px] pl-[100px]">
    <input
      type="email"
      placeholder="Your Email Address"
      className="border-b-2 border-gray-300 focus:outline-none focus:border-green-500 w-full"
    />
    <button className="w-[150px] h-[55px] bg-[#F79F1A] text-white px-4 py-2 text-[#ffff] rounded-lg rounded-[20px] mt-6 px-[20px] py-[10px] ml-[20px] hover: cursor-pointer">
      Submit
    </button>
  </div>
</div>
</div>
            <img 
              src="/images/salad2.png"
              alt="Salad Icon"
              className="w-[80px] h-[80px] mt-[-220px] ml-[800px] "
            />
          <img 
              src="/images/egg-plant.png"
              alt="Egg-pant Icon"
              className="w-[60px] h-[60px] mt-[100px] ml-[800px] "
            />
             <img 
              src="/images/fried-eggs.png"
              alt="Egg-pant Icon"
              className="w-[70px] h-[70px] mt-[-220px] ml-[1400px] "
            />
          
   
    </div>
  </div>;
};

export default Footer;