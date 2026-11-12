import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs: React.FC = () => {
  return (
    <div id="aboutUs-section" className="w-full flex justify-center mt-[450px] pt-[100px] pb-[100px]">
      <div className="flex max-w-[1200px] w-full items-center gap-10">
       
        <div className="relative w-[50%] h-[500px]">
          <Image
            src="/images/image7.png"
            alt="About Us Image"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <div className="w-[50%] bg-white p-8 rounded-[20px] shadow-lg">
          <h2 className="text-[46px] font-inter font-semibold tracking-[-1.7%]">
            About Us
          </h2>
          <p className="text-[20px] font-inter font-normal leading-[30px] mt-4">
            Our recipes are the heart and soul of our culinary community, and they reflect our commitment to providing you with memorable and delightful dining experiences.
          </p>
          <Link href="/learn-more">
            <button className="w-[200px] h-[55px] bg-[#F79F1A] mt-6 text-white font-inter font-semibold rounded-[20px] hover:bg-[#e58c17]">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
