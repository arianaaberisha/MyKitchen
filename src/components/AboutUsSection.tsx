import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div id="aboutUs-section" className="w-full h-[767px] mt-[450px] pt-[100px] pb-[100px]">
      <div className="w-full h-[567px] flex gap-[10px]">
        <div className="w-full h-[567px] relative">
          <Image
            src="/images/image7.png"
            alt="About Us Image"
            fill
            style={{ objectFit: "cover", transform: "rotate(180deg)", transformOrigin: "center" }}
          />

          <div className="absolute top-[50%] right-[10%] transform translate-y-[-50%] w-[578px] h-[431px] gap-[10px] flex flex-col items-start bg-[#ffff] rounded-[20px]">
            <h2 className="text-[46px] font-inter font-semibold tracking-[-1.7%] leading-[100%] pl-[30px] mt-[100px]">
              About Us
            </h2>
            <p className="text-[20px] font-inter font-normal leading-[30px] pl-[30px] pr-[30px]">
              Our recipes are the heart and soul of our culinary community, and they reflect our commitment to providing you with memorable and delightful dining experiences.
            </p>
            <button className="mt-[70px] ml-[30px] w-[197px] bg-[#F79F1A] rounded-[20px] text-[#ffff] font-inter font-semibold">
              Learn More
            </button>

            <div className="w-[250px] h-[80px] pt-[25px] pb-[60px] left-[10px] gap-5 bg-[#ffff] rounded-[20px] mx-auto ml-[-900px]">
              <p className="font-[500] text-[16px] text-[#046E1B] font-inter pl-[30px] pr-[30px]">
                50+ Quick Food Recipes That Easy To Do!
              </p>
            
            <img 
              src="/images/bread.png"
              alt="Bread Icon"
              className="w-[150px] h-[120px] mt-[-430px] ml-[1200px]"
            />
            <img 
              src="/images/avocado.png"
              alt="Avocado Icon"
              className="w-[60px] h-[70px] mt-[290px] ml-[1400px]"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
