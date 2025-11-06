import { Button } from "@/components/ui/button";
import hero from "../../../assets/book_img.jpg";
import { Link } from "react-router";


const Hero = () => {
  return (
    <div>
  
       <div className="hidden md:block bg-[#f8c36b]">
        <div className="pt-28 px-5 pb-10 max-w-7xl mx-auto ">
          <div className="grid grid-cols-2 justify-between items-center">
            <div className="text-6xl text-black/90 font-normal">
              Books Make <br />
              Minds Bloom
            </div>
            <div className="w-2/4 ml-20">
              <p className="text-sm text-black/70">
                A calm, simple way to explore and manage books. Enjoy a
                clutter-free experience where stories inspire and your mind
                feels at ease.
              </p>
              <Link to="/booksPage">
                <Button
                  variant="default"
                  className="mt-6 px-8 py-4 rounded-full 
                  bg-black/90 text-white hover:bg-black/80 
                  shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Explore Now
                </Button>
              </Link>
            </div>
          </div>
          <img src={hero} className="mx-auto w-[480px] mt-5" alt="" />
        </div>
      </div>


      {/* ===== Mobile / Small screens ===== */}
      <div className="block md:hidden  h-[558px]">
        <div className="bg-[#f8c36b]">
          <div className="">
            <div className="text-center px-5">
              <h1 className="text-4xl text-black/90 font-normal leading-snug">
                Books Make <br /> Minds Bloom
              </h1>
              <p className="mt-4 text-sm text-black/70">
                A calm, simple way to explore and manage books. Enjoy a
                clutter-free experience where stories inspire and your mind
                feels at ease.
              </p>
              <Link to="/booksPage">
                <Button
                  variant="default"
                  className="mt-6 px-8 py-4 rounded-full 
              bg-black/90 text-white hover:bg-black/80 
              shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Explore Now
                </Button>
              </Link>
              <img src={hero} className="mx-auto w-[280px] mt-8" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;