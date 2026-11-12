import "./output.css";
import ReviewCard from "./ReviewCard";
import Link from "next/link";
import { FaSearch, FaUser } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <>
    
      <div className="w-full h-screen mx-auto mt-6 pt-[40px]">
        <header className="flex items-center justify-between w-full h-[29px] mt-6 ">
          <div className="text-[30px] font-inter font-semibold leading-[100%] tracking-[0%] w-[115px] h-[29px] text-[#046E1B] pl-[60px] ">
            Recipedia
          </div>

          <nav className="flex gap-[80px]  h-[15px] items-center">
            <div className="w-[100px] h-[15px] text-[30px] hover:bg-[#808000] font-inter font-medium">Home</div>
            <div className="w-[100px] h-[15px] text-[30px] font-inter font-medium">
              <a href="#recipe-section" className="hover:text-gray-400">Recipe</a>
            </div>
            <div className=" h-[15px] text-[30px] font-inter font-medium">
              <a href="#community-section" className="hover:text-gray-400 ">Community</a>
            </div>
            <div className="w-[200px] h-[15px] text-[30px] font-inter font-medium ">
              <a href="#aboutUs-section" className="hover:text-gray-400">About Us</a>
            </div>
          </nav>

          <div className="flex text-[30px] h-[20px] items-center justify-between gap-[10px] pr-[40px]">
            <div className="w-10 h-6 bg-gray-400 rounded-full"></div>
            <FaSearch/>
            <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            <FaUser />
          </div>
        </header>

        <div className=" w-full h-screen mx-auto py-[150px] pl-[500px]">
          <div className=" flex flex-col gap-[40px] ">
            <div className=" flex justify-start text-[100px] font-inter font-bold leading-[80px] tracking-[0%] ">
              Cooking Made Fun <br />
              and Easy: Unleash <br />
              Your Inner Chef
            </div>

            <div className="w-[424px] h-[36px] text-[24px] font-inter font-light leading-[24px] mt-[200px]">
              Discover more than 10,000 recipes in your hand with the best recipe.
              Help you to find the easiest way to cook.
            </div>

            <Link href="/randomrecipes">
              <button className="w-[249px] h-[75px] bg-[#F79F1A] rounded-[20px] mt-6 px-[40px] py-[30px] flex items-center justify-center hover:cursor-pointer mb-[50px]">
                <span className="text-white text-[20px] font-inter font-semibold leading-[100%] tracking-[0.5px]">
                  Explore Recipes
                </span>
              </button>
            </Link>

            <div className=" flex justify-center mt-6 gap-[10px] relative">
              <img 
                src="/images/image.png" 
                alt="Image" 
                className="w-[700px] h-[600px] absolute top-[-500px] transform rotate-[19.76deg] z-10"
              />
              <img 
                src="/images/tomato.png" 
                alt="Tomato Icon" 
                className="w-[50px] h-[50px] absolute left-[1000px] top-[-500px]  "
              />
              <img 
                src="/images/broccoli.png" 
                alt="Broccoli Icon" 
                className="w-[70px] h-[70px] absolute right-[900px] transform rotate-[19.76deg]"
              />
            </div>
            
          </div>
          <img 
              src="/images/garlic.png" 
              alt="Garlic Icon" 
              className="w-[100px] h-[100px] ml-[700px] mt-[-100px]"
            />
           

          </div>
          <div className="w-[300px] h-auto ml-[500px] mt-[-700px]">
          <ReviewCard />
          </div>

          </div>
        
     

      
    </>
  );
};

export default Header;






































