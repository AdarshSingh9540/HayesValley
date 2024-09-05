import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const SiliconValleyFellowship = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "center center"]
  });

  // Adjust the scale range to make the scaling effect more subtle
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);

  return (
    <div
      className="flex flex-col items-center text-center px-8 lg:px-4 py-12"
    >
      <motion.h1
      ref={ref}
      style={{
        scale: scale, // Apply subtle scaling
      }}
      className="text-3xl sm:text-4xl lg:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 mb-8">
        What is the{' '}
        <br /> <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Hayes Valley Fellowship</span> <span className="text-white">?</span>
      </motion.h1>
      <p 
      className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6">
        A program to get fast-tracked into Silicon Valley through workshops, private community, and networking events held in and around the <br /> cities of the{' '}
        <span className="font-semibold text-white">San Francisco Bay Area.</span>
      </p>
      <p 
      className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6">
        It’s a deep dive into the expertise of heads of global tech corporations, professors of top world-ranked universities, and founders of <br /> successful companies.
      </p>
      <p className="text-gray-300 text-sm sm:text-base lg:text-lg">
        This experience has already inspired{' '}
        <span className="font-semibold text-white">hundreds of fellows</span>{' '}
        and has changed the lives of many who are ready to tell their stories. With it, <br /> we strive to{' '}
        <span className="font-semibold text-white">
          shape the next professional, academic, and entrepreneurial class.
        </span>
      </p>
    </div>
  );
};

export default SiliconValleyFellowship;
