import React from 'react';
import Header from '../Components/Header';

const DietPlan = () => {
  return (
    <><Header /><div className="container mx-auto p-8">

      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-orange-500">MyDiet<span className='text-black'>Plan</span></h1>
        <p className="text-lg text-gray-600">Stay healthy and fit with this personalized diet plan.</p>
      </header>

      {/* Diet Plan Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Day 1 */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Day 1</h2>
          <ul className="list-disc ml-6">
            <li>Breakfast: Oatmeal with fruits</li>
            <li>Lunch: Grilled chicken with vegetables</li>
            <li>Dinner: Quinoa salad</li>
          </ul>
        </div>

        {/* Day 2 */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Day 2</h2>
          <ul className="list-disc ml-6">
            <li>Breakfast: Greek yogurt with nuts</li>
            <li>Lunch: Lentil soup with whole grain bread</li>
            <li>Dinner: Baked salmon with sweet potato</li>
          </ul>
        </div>

        {/* Day 3 */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Day 3</h2>
          <ul className="list-disc ml-6">
            <li>Breakfast: Smoothie with spinach and banana</li>
            <li>Lunch: Quinoa with black beans</li>
            <li>Dinner: Stir-fried tofu with broccoli</li>
          </ul>
        </div>
      </div>
    </div></>
  );
};

export default DietPlan;
