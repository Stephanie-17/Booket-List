import { Link } from "react-router-dom";
import heroImg from "../assets/try.png";

const HomePage = () => {
	return (
    <>
      <title>Booket List | Home</title>
      <div className="flex justify-center items-center mb-30 h-[80vh]  sm:h-[100vh]">
        <div className="flex justify-center items-center flex-col -mt-29 sm:mt-8">
          <div className="flex justify-center items-center">
            <img className="w-[90%] lg:w-[70%] " src={heroImg} alt="" />
          </div>
          <div className="text-center text-white z-10 mt-5">
            <h2 className="text-xl lg:text-5xl font-semibold sm:-mt-92">
              Find Your Next Favorite Book
            </h2>
            <p className="text-sm">
              Discover personalized book recommendations based on your reading
              history. Start exploring today!
            </p>
            <Link to="/sign-up">
              <button className="bg-[#0B192F] text-white mt-6 px-4 py-2 rounded-lg cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
	);
};

export default HomePage;
