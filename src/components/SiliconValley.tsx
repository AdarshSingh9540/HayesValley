import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const SiliconValleyFellowship = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "center center"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.6], [0.5, 1.1]);
  const scale2 = useTransform(scrollYProgress,[0,0.8],[0.6,0.9])
  return (
    <div
      className="flex flex-col items-center text-center px-8 lg:px-4 py-12"
    >
      <motion.h1
      ref={ref}
      style={{
        scale: scale, 
      }}
      className="text-3xl sm:text-4xl lg:text-5xl font-semibold lg:font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 mb-8">
        What is the{' '}
        <br /> <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Ark Impact Fellowship</span> <span className="text-white">?</span>
      </motion.h1>
      <motion.p
       ref={ref}
       style={{
         scale: scale2,
       }}
      className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4">
        A program to get fast-tracked into Silicon Valley through workshops, private community, and networking events held in and around the <br /> cities of the{' '}
        <span className="font-semibold text-white">San Francisco Bay Area.</span>
      </motion.p>
      <motion.p 
      ref={ref}
      style={{
        scale: scale2,
      }}
      className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6">
        It’s a deep dive into the expertise of heads of global tech corporations, professors of top world-ranked universities, and founders of <br /> successful companies. This experience has already inspired{' '} and has changed the lives of many who are ready to tell their stories. With it, <br /> we strive to{' '} and has changed the lives of many who are ready to tell their stories. 
      </motion.p>
      {/* <motion.p
      ref={ref}
      style={{
        scale: scale2, // Apply subtle scaling
      }}
      className="text-gray-300 text-sm sm:text-base lg:text-lg">
        This experience has already inspired{' '}
        <span className="font-semibold text-white">hundreds of fellows</span>{' '}
        and has changed the lives of many who are ready to tell their stories. With it, <br /> we strive to{' '}
        <span className="font-semibold text-white">
          shape the next professional, academic, and entrepreneurial class.
        </span>
      </motion.p> */}
    </div>
  );
};

export default SiliconValleyFellowship;
