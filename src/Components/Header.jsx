import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='flex sm:justify-between flex-wrap justify-center  sm:p-12 border-[1px] mt-2'>
      <h1 className='font-extrabold sm:text-3xl  text-orange-500'>Progress <span className='font-extrabold sm:text-3xl  text-black'>Tracker</span></h1>
      <ul className='font-semibold  flex gap-5 sm:gap-10 '>
       <Link to= {"/Habit"}><li className='hover:text-orange-500'>HABIT</li></Link> 
        <Link  to={"/DietPlan"}><li className='hover:text-orange-500'>DIET PLAN</li></Link>
       <Link to={"/TimeManagement"}><li className='hover:text-orange-500'>TIME MANAGEMENT</li></Link> 
      </ul>
    </div>
  )
}

export default Header
