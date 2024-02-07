import React from 'react'

function Header() {
  return (
    <div className='flex sm:justify-between flex-wrap justify-center  sm:p-12 border-[1px] mt-2'>
      <h1 className='font-extrabold sm:text-3xl  text-orange-500'>Progress <span className='font-extrabold sm:text-3xl  text-black'>Tracker</span></h1>
      <ul className='font-semibold  flex gap-5 sm:gap-10 '>
        <li>HABIT</li>
        <li>DIET PLAN</li>
        <li>TIME MANAGEMENT</li>
      </ul>
    </div>
  )
}

export default Header
