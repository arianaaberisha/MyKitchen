import "./output.css";
import SearchIcon from "@/components/icons/SearchIcon";
import ProfileIcon from "./icons/ProfileIcon";
import ReviewCard from "./ReviewCard";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <div className="w-[1341.97px] h-[777.72px] mx-auto mt-6">
        <header className="flex items-start justify-between w-full h-[29px] mt-6">
          <div className="text-[24px] font-inter font-semibold leading-[100%] tracking-[0%] w-[115px] h-[29px] text-[#046E1B]">
            Recipedia
          </div>

          <nav className="flex gap-[50px] w-[471px] h-[15px] items-center">
            <div className="w-[57px] h-[15px] text-[20px] font-inter font-medium">Home</div>
            <div className="w-[65px] h-[15px] text-[20px] font-inter font-medium">
              <a href="#recipe-section" className="hover:text-gray-400">Recipe</a>
            </div>
            <div className="w-[110px] h-[15px] text-[20px] font-inter font-medium">
              <a href="#community-section" className="hover:text-gray-400">Community</a>
            </div>
            <div className="w-[89px] h-[15px] text-[20px] font-inter font-medium">
              <a href="#aboutUs-section" className="hover:text-gray-400">About Us</a>
            </div>
          </nav>

          <div className="flex w-[70px] h-[21.14px] items-center justify-between gap-5">
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            <SearchIcon />
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            <ProfileIcon />
          </div>
        </header>

        <div className="w-[610px] h-[416px] mt-[193px] gap-[61px]">
          <div className="w-[610px] h-[280px] gap-[37px] flex flex-col justify-start">
            <div className="w-[610px] h-[207px] text-[64px] font-inter font-bold leading-[80px] tracking-[0%]">
              Cooking Made Fun <br />
              and Easy: Unleash <br />
              Your Inner Chef
            </div>

            <div className="w-[424px] h-[36px] text-[16px] font-inter font-light leading-[24px] mt-4">
              Discover more than 10,000 recipes in your hand with the best recipe.
              Help you to find the easiest way to cook.
            </div>

            <Link href="/randomrecipes">
              <button className="w-[249px] h-[75px] bg-[#F79F1A] rounded-[20px] mt-6 px-[40px] py-[30px] flex items-center justify-center hover:cursor-pointer">
                <span className="text-white text-[20px] font-inter font-semibold leading-[100%] tracking-[0.5px]">
                  Explore Recipes
                </span>
              </button>
            </Link>

            <div className="w-[818.73px] h-[777.73px] ml-[523.24px] mt-6 gap-[10px] relative">
              <img 
                src="/images/image.png" 
                alt="Image" 
                className="w-[658px] h-[590px] absolute top-[-500px] transform rotate-[19.76deg] z-10"
              />
              <img 
                src="/images/tomato.png" 
                alt="Tomato Icon" 
                className="w-[50px] h-[50px] absolute top-[-500px] left-[80px]"
              />
            </div>
          </div>

          <div className="w-[120px] h-[120px] ml-[501px] top-[536px] p-[10px] gap-[10px]">
            <img 
              src="/images/garlic.png" 
              alt="Garlic Icon" 
              className="w-[100px] h-[100px]"
            />
          </div>

          <div className="w-[120px] h-[120px] ml-[501px] top-[536px] p-[10px] gap-[10px]">
            <img 
              src="/images/broccoli.png" 
              alt="Broccoli Icon" 
              className="w-[70px] h-[70px] mt-[-10px] ml-[600px] transform rotate-[30.84deg]"
            />
          </div>
        </div>
      </div>

      <div className="w-[250px] h-auto mt-10">
        <ReviewCard />
      </div>
    </>
  );
};

export default Header;




































