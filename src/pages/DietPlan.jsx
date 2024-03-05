import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import personalised from "../assets/Images/personal.jpg";
import Nutri from "../assets/Images/nutri.jpg";
function DietPlan() {
  return (
    <>
      <Header />
        <div className=" bg-white  flex justify-center items-center py-20">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-2 gap-10 space-y-4 md:space-y-0">
            <div className="max-w-md bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <h3 className="mb-3 text-xl font-bold text-black">
                PersonalisedDietPlan
              </h3>
              <div className="relative">
                <img
                  className="w-full h-[400px] rounded-xl"
                  src={personalised}
                  alt="Colors"
                />
                <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  FREE
                </p>
              </div>
              <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                Set Your Diet Plan..
              </h1>
              <div className="my-4">
                <div className="flex space-x-1 items-center"></div> <br />
                {/* Additional details... */}
                <Link to={"/PersonalDietPlan"}>
                  <button className="mt-4 text-xl w-full text-white bg-orange-500 py-2 rounded-xl shadow-lg">
                    Set Your Diet Plan
                  </button>
                </Link>
              </div>
            </div>

            <div className="max-w-md bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <h3 className="mb-3 text-xl font-bold text-black">
                Nutritionist
              </h3>
              <div className="relative">
                <img
                  className="w-full  h-[400px] rounded-xl"
                  src={Nutri}
                  alt="Colors"
                />
              </div>
              <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                Stay healthy and fit with this personalized diet plan.
              </h1>
              <div className="my-4">
                <div className="flex space-x-1 items-center"></div>
                <br />
                {/* Additional details... */}
                <Link to={"/NutritionistHome"}>
                  <button className="mt-4 text-xl w-full text-white bg-orange-500 py-2 rounded-xl shadow-lg">
                    Nutritionist
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default DietPlan;
