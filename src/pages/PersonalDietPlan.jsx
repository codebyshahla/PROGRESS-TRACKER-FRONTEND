import React, { useState } from 'react';
import Header from '../Components/Header';
import axios from 'axios';

const PersonalDietPlan = () => {
  const [meal1, setMeal1] = useState('');
  const [meal2, setMeal2] = useState('');
  const [snack1, setSnack1] = useState('');
  const [snack2, setSnack2] = useState('');
  const [snack3, setSnack3] = useState('');

  const formData = {
    meal1,
    meal2,
    snack1,
    snack2,
    snack3
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:5000/PersonalDietPlan', formData);

    // Handle form submission logic here, such as sending data to a server or performing local actions.

    // For now, let's log the form data to the console.
    console.log({ meal1, meal2, snack1, snack2 });
  };

  return (
    <><Header />
    <div className="container mx-auto mt-8 p-8 bg-white rounded-md shadow-md max-w-2xl">
      <h2 className="text-3xl font-extrabold mb-4 text-center text-orange-500">Diet <span className='text-black'>Plan</span></h2>
      <p className='text-center text-xl text-gray-700 '>Stay healthy and fit with this personalized diet plan.</p> <br /> <br />
   
     <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="meal1" className="block text-xl font-semibold mb-2">BreakFast:</label>
          <input
            type="text"
            id="meal1"
            name="meal1"
            value={meal1}
            onChange={(e) => setMeal1(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required />
        </div>

        <div className="mb-4">
          <label htmlFor="meal2" className="block text-xl font-semibold mb-2">MorningSnack:</label>
          <input
            type="text"
            id="meal2"
            name="meal2"
            value={meal2}
            onChange={(e) => setMeal2(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required />
        </div>

        <div className="mb-4">
          <label htmlFor="snack1" className="block text-xl font-semibold mb-2">Lunch:</label>
          <input
            type="text"
            id="snack1"
            name="snack1"
            value={snack1}
            onChange={(e) => setSnack1(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required />
        </div>

        <div className="mb-4">
          <label htmlFor="snack2" className="block text-xl font-semibold mb-2">Evening Snack:</label>
          <input
            type="text"
            id="snack2"
            name="snack2"
            value={snack2}
            onChange={(e) => setSnack2(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required />
        </div>

        <div className="mb-4">
          <label htmlFor="snack3" className="block text-xl font-semibold mb-2">Dinner:</label>
          <input
            type="text"
            id="snack3"
            name="snack3"
            value={snack3}
            onChange={(e) => setSnack3(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required />
        </div>

        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-500 w-full">
          Submit
        </button>
      </form>
    </div></>
  );
};

export default PersonalDietPlan;
