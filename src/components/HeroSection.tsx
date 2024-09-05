import React from 'react'
import { Button } from './Btn'

function HeroSection() {
  return (
   <div className='flex flex-col justify-center items-center h-screen'>
       <div>
       <h1  className='text-gray-100 text-center text-3xl lg:text-7xl font-bold'>AI Lab & Founders <br /><span className='bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'>Fellowship</span><span className='text-white'>.</span></h1>
       </div>
       <div className='text-center my-4 text-md lg:text-xl text-gray-400 py-2'>
       <p>A dedicated space for  building and <br /> collaboration, in the heart of San Francisco   </p>
       </div>
        <div className='mt-[1rem]'>
            <Button/>
        </div>
        <div>
            <p className='text-2xl text-gray-200 my-4'>Apply by September 21!</p>
        </div>
   </div>
  )
}

export default HeroSection