import React, { Component } from "react";
import Header from "../Components/Header";

function Habit() {
  return (
    <div>
      <Header />
      <div className="flex  flex-col items-center">
        <h1 className=" text-orange-500 text-3xl font-bold text-center mt-20">
          Habit <span className="text-black">Tracker</span>
        </h1>
        <p className="text-center from-neutral-500 text-xl font-serif">
          Your Habits Determine Your Future..
        </p>
        <br />
        <p className="text-center  from-neutral-500 text-xl font-serif border-black rounded-md">
          Set Your Habits Here Is We Can Track Your Daily Life Activities And
          Show Your Improvements..
        </p>

        <div className="w-1/2 h-1/2 border-black border-2 flex justify-center items-center mt-10 rounded-lg flex-wrap">
          <div className="flex gap-44 my-10 flex-wrap">
            <div className="w-80 h-96 border-black flex flex-col justify-around border-2 items-center rounded-lg flex-wrap">
              <button className="w-60 h-10 border-black border-2  text-black hover:text-2xl rounded-lg ">
                Dancing
              </button>
              <button className="w-60 h-10 border-black border-2  text-black hover:text-2xl rounded-lg">
                Reading
              </button>
              <button className="w-60 h-10 border-black border-2  text-black hover:text-2xl rounded-lg">
                Workout
              </button>
              <button className="w-60 h-10 border-black border-2  text-black hover:text-2xl rounded-lg">
                Singing
              </button>
              <button className="w-72 h-10 bg-orange-500 hover:bg-blue-500 text-white rounded-lg">
                Other Hobbies
              </button>
            </div>
            <div>
              <div className="w-80 h-96 border-black flex flex-col  border-2 justify-around items-center rounded-lg flex-wrap ">
              <input type="text" placeholder="ENTER YOUR HOBBIES" className="w-60 h-10 border-black border-2 rounded-lg p-2" />
              <input type="time" placeholder="ENTER YOUR TIME" className="w-60 h-10 border-black border-2 rounded-lg p-2" />
                <button className="w-52 h-10 bg-orange-500 hover:bg-blue-500 text-white rounded-lg">
                  ADD
                </button>
                <button className="w-52 h-10 bg-orange-500 hover:bg-blue-500 text-white rounded-lg">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habit;
