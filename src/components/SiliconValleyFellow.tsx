'use client'
import { FaBriefcase, FaGraduationCap, FaChartLine } from 'react-icons/fa';
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";


const SiliconValleyFellows = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.7], [0.6, 1.1]);
  const scale2 = useTransform(scrollYProgress,[0,0.8],[0.7,0.9])
  const sections = [
    {
      icon: <FaBriefcase className="text-3xl mx-auto mb-4 text-gray-300" />,
      title: "Professional",
      description: "Considering launching a startup in Silicon Valley or anywhere else, and interested in raising money from SV-based investors.",
    },
    {
      icon: <FaGraduationCap className="text-3xl mx-auto mb-4 text-gray-300" />,
      title: "Student or Graduate",
      description: "Considering moving here at some point in your life to boost or start your career and project with the magic help of the Valley.",
    },
    {
      icon: <FaChartLine className="text-3xl mx-auto mb-4 text-gray-300" />,
      title: "Entrepreneur or Manager",
      description: "Wishing to expand your network and learn the most innovative practices in tech, management, and building.",
    }
  ];
  

  return (
    <div className=" py-12 px-8 lg:px-4 overflow-x-hidden">
      <div className="text-center">
        <motion.h1
        ref={ref}
        style={{
          scale: scale, // Apply subtle scaling
        }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">
          Who are the{' '}
          <br />
          <motion.span
          ref={ref}
          style={{
            scale: scale, // Apply subtle scaling
          }}
          className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Ark Impact </motion.span><span className='bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500'>Fellows?</span>
        </motion.h1>
        <motion.p
         ref={ref}
         style={{
           scale: scale2, 
         }}
        className="text-gray-300 text-base sm:text-md lg:text-lg mb-6">
          It no revelation that primarily unique personalities are drawn to Silicon Valley due to its self-selective nature. <br /> These individuals are usually
          intensely driven, devoted, and passionate  about technology, <br /> entrepreneurship,  and defying the norm.
        </motion.p>
      </div>

      <div className="text-center my-[5rem]">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">
          We believe the program will be advantageous for you if you are:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-[3rem]">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-500 p-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              {section.icon}
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">{section.title}</h3>
              <p className="text-gray-300">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiliconValleyFellows;
