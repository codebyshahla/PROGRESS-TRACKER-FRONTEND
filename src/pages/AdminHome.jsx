import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import doctor from "../assets/Images/doctor.jpg";

function NutritionistHome() {
 
  return (
    <>
      <Header />
      <div className=" bg-white  flex justify-center items-center py-20">
        <div className="w-1/3 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
          <h3 className="mb-3 text-xl font-bold text-black">
            Consult Our Patients
          </h3>
          <div className="relative">
            <img
              className="w-full h-[400px] rounded-xl flex items-center"
              src={doctor}
              alt="Colors"
            />
          </div>
          <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
            SHAHLA FEBIN
          </h1>
          <p>Consult The World Best Nutritionist.Join Us..</p>
          <div className="my-4">
            <div className="flex space-x-1 items-center"></div> <br />
            {/* Additional details... */}
            <Link to={"/admin/AdminChat"}>
              <button className="mt-4 text-xl w-full text-white bg-orange-500 py-2 rounded-xl shadow-lg">
                Consult Patients
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NutritionistHome;
