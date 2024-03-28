/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import habit from "../assets/Images/habit.jpg";
import Diet from "../assets/Images/diet.jpg";
import Time from "../assets/Images/bgW.webp";
import axios from "axios";



const token =localStorage.getItem("jwtToken")
function Home() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();
  
  // useEffect(()=>{
  //   const getRole =async ()=>{
  //     try{
  //       const response = await axios.post('http://localhost:5000/getRole',{token} );
  //       setRole(response.data.role);
  //       console.log(role);
  //       }
  //       catch(error){
  //         console.error("Error getting role:",error);
  //       }


  //   }
  //   getRole();

  // },[])
 
 
  return (
    <>
      <Header />
      
      <div className="bg-red-900 ">
        <div className=" bg-white  flex justify-center items-center py-20">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-4 md:space-y-0">
            <div className="max-w-md bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <h3 className="mb-3 text-xl font-bold text-black">
                HabitTracker
              </h3>
              <div className="relative">
                <img
                  className="w-full h-[400px] rounded-xl"
                  src={habit}
                  alt="Colors"
                />
                <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  FREE
                </p>
              </div>
              <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                Set Your Habits Here Is We Can Track Your Daily Life Activities
                And Show Your Improvements..
              </h1>
              <div className="my-4">
                <div className="flex space-x-1 items-center"></div>
              `
               <Link to={"/Habit"}>
                <button className="mt-4 text-xl w-full text-white bg-orange-500 py-2 rounded-xl shadow-lg">
                  Track Your Habit
                </button>
                </Link>
              </div>
            </div>

            <div className="max-w-md bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <h3 className="mb-3 text-xl font-bold text-black">DietPlan</h3>
              <div className="relative">
                <img
                  className="w-full  h-[400px] rounded-xl"
                  src={Diet}
                  alt="Colors"
                />
                <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  FREE
                </p>
              </div>
              <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                Stay healthy and fit with this personalized diet plan.
              </h1>
              <div className="my-4">
                <div className="flex space-x-1 items-center"></div> <br />{" "}
                <br />
                <Link to={"/DietPlan"}>
                <button className="mt-4 text-xl w-full text-white bg-orange-500 py-2 rounded-xl shadow-lg">
                  Set Your Diet Plan
                </button>
                </Link>
              </div>
            </div>

            <div className="max-w-md bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <h3 className="mb-3 text-xl font-bold text-black">
                TimeManagement
              </h3>
              <div className="relative">
                <img
                  className="w-full  h-[400px] rounded-xl"
                  src={Time}
                  alt="Colors"
                />
                <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                  FREE
                </p>
              </div>
              <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                Organize your day efficiently with this time management tool.
              </h1>
              <div className="my-4">
                <div className="flex space-x-1 items-center"></div> <br />
                <Link to={"/TimeManagement"}>
                <button className="mt-4 text-xl w-full text-white bg-orange-500 py-2 rounded-xl shadow-lg">
                  Set Your Time Management
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link to={"/signup"}>
          <button className="text-white text-xl w-96 rounded-xl   bg-orange-500 ">
            GET STARTED{" "}
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
