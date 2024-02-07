import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header></Header>
<div className='flex flex-col items-center h-screen'>
  <div className='flex justify-center items-center w-full '>
    <div className='w-1/3 '><h1 className='font-extrabold text-black text-lg border-black border-[1px] '>HABIT</h1></div>
    <div className='w-1/3 '><h1 className='font-extrabold text-black text-lg border-black border-[1px]'>DIET PLAN</h1></div>
    <div className='w-1/3 '><h1 className='font-extrabold text-black text-lg border-black border-[1px]'>TIME MANAGEMENT</h1></div>
  </div>

  <Link to={"/signup"}>  <button className='text-white bg-orange-500 w-44 rounded-2xl'>GET STARTED </button>
</Link>
</div>
      
    </>
  )
}

export default Home
