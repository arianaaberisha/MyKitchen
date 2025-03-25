


import { FaStar, FaRegHeart } from "react-icons/fa";

const ReviewCard: React.FC = () => {
  return (
    <div className="absolute inset-0 mt-[-200px] w-[220px] h-auto flex flex-col gap-[20px] bg-[#ffff] shadow-lg rounded-[10px] border-10 border-[#ffff] box-border ml-[850px] z-20">
     
      <div
        className="w-[200px] text-[16px] font-inter font-light rounded-[10px] p-[20px]"
        style={{ backgroundColor: "#E8E8E8" }}
      >
        <div className="flex gap-1 text-[#F5E83F]">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <FaStar key={index} />
          ))}
      </div>
        "The recipes here are not only delicious but also easy to follow."
      </div>

      
      <div className="flex justify-between items-center bg-[#ffff]">
        <div className="flex items-center gap-[2px] ">
          <img
            src="/images/imageSarah.png"
            alt="Profile"
            className="relative w-[40px] h-[40px] rounded-full overflow-hidden"
          />
          <span className="text-[16px] font-inter font-[500px] ml-[10px]">Sarah M.</span>
        </div>
        
        <FaRegHeart />
      </div>
    </div>
  );
};

export default ReviewCard;
