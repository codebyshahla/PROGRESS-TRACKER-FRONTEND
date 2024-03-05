import React, { useState } from "react";
import Header from "../Components/Header";
import axios from "axios";

const PersonalDietPlan = () => {
  const [meal1, setMeal1] = useState("");
  const [time1, setTime1] = useState("");

  const [meal2, setMeal2] = useState("");
  const [time2, setTime2] = useState("");

  const [snack1, setSnack1] = useState("");
  const [time3, setTime3] = useState("");

  const [snack2, setSnack2] = useState("");
  const [time4, setTime4] = useState("");

  const [snack3, setSnack3] = useState("");
  const [time5, setTime5] = useState("");1

  const formData = {
    meal1: { food: meal1 , time : time1 },
    meal2:{ food: meal2 , time : time2 },
    snack1:{ food: snack1 , time : time3 },
    snack2:{ food: snack2 , time : time4 },
    snack3:{ food: snack3 , time : time5 }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:5000/PersonalDietPlan",
      formData
    );

    // Handle form submission logic here, such as sending data to a server or performing local actions.

    // For now, let's log the form data to the console.
    console.log({ meal1, meal2, snack1, snack2 });
  };

  return (
    <>
      <Header />
      <div className="container mx-auto mt-8 p-8 bg-white rounded-md shadow-md max-w-2xl">
        <h2 className="text-3xl font-extrabold mb-4 text-center text-orange-500">
          Diet <span className="text-black">Plan</span>
        </h2>
        <p className="text-center text-xl text-gray-700 ">
          Stay healthy and fit with this personalized diet plan.
        </p>{" "}
        <br /> <br />
        <form onSubmit={handleSubmit}>
            <label htmlFor="meal1" className="block text-xl font-semibold mb-2">
              BreakFast:
            </label>
          <div className="mb-4 flex">
            <input
              type="text"
              id="meal1"
              name="meal1"
              value={meal1}
              onChange={(e) => setMeal1(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />

            <input
              type="time"
              id="time1"
              name="time1"
              value={time1}
              onChange={(e) => setTime1(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <label htmlFor="meal2" className="block text-xl font-semibold mb-2">
              MorningSnack:
            </label>
          <div className="mb-4 flex">
            <input
              type="text"
              id="meal2"
              name="meal2"
              value={meal2}
              onChange={(e) => setMeal2(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />

            <input
              type="time"
              id="time2"
              name="time2"
              value={time2}
              onChange={(e) => setTime2(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <label htmlFor="snack1" className="block text-xl font-semibold mb-2">
              Lunch:
            </label>
          <div className="mb-4 flex">
            <input
              type="text"
              id="snack1"
              name="snack1"
              value={snack1}
              onChange={(e) => setSnack1(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />

            <input
              type="time"
              id="time3"
              name="time3"
              value={time3}
              onChange={(e) => setTime3(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <label htmlFor="snack2" className="block text-xl font-semibold mb-2">
              EveningSnack:
            </label>
          <div className="mb-4 flex">
            <input
              type="text"
              id="snack2"
              name="snack2"
              value={snack2}
              onChange={(e) => setSnack2(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />

            <input
              type="time"
              id="time4"
              name="time4"
              value={time4}
              onChange={(e) => setTime4(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <label htmlFor="snack3" className="block text-xl font-semibold mb-2">
              Dinner:
            </label>
          <div className="mb-4 flex">
            <input
              type="text"
              id="snack3"
              name="snack3"
              value={snack3}
              onChange={(e) => setSnack3(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />

            <input
              type="time"
              id="time5"
              name="time5"
              value={time5}
              onChange={(e) => setTime5(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-500 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PersonalDietPlan;
