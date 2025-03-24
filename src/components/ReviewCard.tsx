import HeartIcon from "@/components/icons/HeartIcon";
import StarIcon from "@/components/icons/StarIcon";

const ReviewCard: React.FC = () => {
  return (
    <div
      className="absolute inset-0 mt-[-200px] w-[207px] h-[143px] flex flex-col gap-[10px] ml-[850px] p-[10px] bg-white shadow-lg rounded-lg p-4 z-20 rounded-[20px]"
      style={{ backgroundColor: "white" }}
    >
      <div className="flex gap-1">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </div>

      <div className="w-[164px] h-[84.18px] text-[16px] font-inter font-light leading-[24px]">
        "The recipes here are not only delicious but also easy to follow."
      </div>

      <div className="flex justify-between items-center w-[192px] h-[30px]">
        <div className="flex items-center gap-[10px] w-[108px] h-[30px]">
          <img
            src="/images/imageSarah.png"
            alt="Profile"
            className="w-[31.3px] h-[46.94px] -mt-[7.5px] -ml-[0.6px]"
          />
          <span className="text-[16px] font-inter font-medium leading-[100%]">
            Sarah M.
          </span>
        </div>

        <HeartIcon />
      </div>
    </div>
  );
};

export default ReviewCard;
