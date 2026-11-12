import React from "react";
import Image from "next/image";

const CTAsection: React.FC = () => {
  return (
    <div className="w-[1500px] h-[572px] p-12 pb-[1000px]  gap-2.5 ml-[200px]">
      <div className="flex justify-center w-full h-[422px] gap-2.5 bg-[#046E1B] p-[20px] rounded-[20px] ">
      
        <div className="w-[787px] h-[260px] pl-[50px] flex flex-col">
          <h2 className="w-[787px] h-[145px] text-white font-inter font-semibold text-[46px] leading-[1] tracking-[-0.017em]">
            Embrace the joy of cooking—get it on your iPhone or Android. Your kitchen adventure begins now!
          </h2>
          <div className="flex gap-4 mt-[35px]">
            <button className="w-[150px] h-[55px] bg-[#F79F1A] rounded-[20px] text-[#ffff] font-inter font-semibold text-[20px]">
              App Store
            </button>
            <button className="w-[150px] h-[55px] bg-[#F79F1A] rounded-[20px] text-[#ffff] font-inter font-semibold text-[20px] ml-[50px]">
              Google Play
            </button>
          </div>
        </div>

       
        <div className="w-[400px] h-[400px] ml-auto flex items-center">
          <Image src="/images/phone.png" alt="Phone Image" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default CTAsection;
