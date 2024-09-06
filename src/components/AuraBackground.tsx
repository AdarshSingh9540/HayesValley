"use client";
import { Button } from './Btn'
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
           <div className='flex flex-col justify-center items-center h-screen'>
       <div>
       <h1  className='bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-white via-gray-300 to-gray-500 text-center text-3xl lg:text-7xl font-bold'>Ark Labs & Founders <br /><span className='bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500'>Fellowship</span><span className='text-white'>.</span></h1>
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
      </motion.div>
    </AuroraBackground>
  );
}
