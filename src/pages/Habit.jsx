import React from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

function Habit() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="text-orange-500 text-3xl font-bold text-center mt-20">
          Habit <span className="text-black">Tracker</span>
        </h1>
        <p className="text-center from-neutral-500 text-xl font-serif">
          Your Habits Determine Your Future..
        </p>
        <br />
        <p className="text-center from-neutral-500 text-xl font-serif rounded-md">
          Set Your Habits Here Is We Can Track Your Daily Life Activities And
          Show Your Improvements..
        </p>

        <div className="w-1/2 h-1/2 flex justify-center items-center mt-10 rounded-lg flex-wrap shadow-xl ">
          <div className="flex gap-44 my-10 flex-wrap">
            <div className="w-80 h-96 flex flex-col flex-wrap justify-around items-center rounded-lg flex-wrap shadow-lg">
              <button className="w-60 h-10 text-black hover:text-2xl rounded-lg ">
                Dancing
              </button>
              <button className="w-60 h-10 text-black hover:text-2xl rounded-lg">
                Reading
              </button>
              <button className="w-60 h-10 text-black hover:text-2xl rounded-lg">
                Workout
              </button>
              <button className="w-60 h-10 text-black hover:text-2xl rounded-lg">
                Singing
              </button>
              <button className="w-72 h-10 bg-orange-500 hover:bg-blue-500 text-white rounded-lg">
                Other Hobbies
              </button>
            </div>
            <div>
              <div className="w-80 h-96 flex flex-col flex-wrap justify-around items-center rounded-lg shadow-lg">
                <input
                  type="text"
                  placeholder="ENTER YOUR HOBBIES"
                  className="w-60 h-10 rounded-lg p-2"
                />
                <input
                  type="time"
                  placeholder="ENTER YOUR TIME"
                  className="w-60 h-10 rounded-lg p-2"
                />
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

        {/* Buttons with Gap */}
        <div className="mt-16 flex justify-between flex-wrap w-1/3">
          <Link to={"/ShowHabits"}>
          <button className="bg-orange-500 hover:bg-blue-500 w-48 h-10 rounded-lg text-white">
            Show my Habits
          </button>
          </Link>
          <Link to={"/HabitGraph"}>
          <button className="bg-orange-500 hover:bg-blue-500 w-48 h-10 rounded-lg text-white">
            Show my Graph
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Habit;
