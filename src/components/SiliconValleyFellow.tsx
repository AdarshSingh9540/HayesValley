import { FaBriefcase, FaGraduationCap, FaChartLine } from 'react-icons/fa';

const SiliconValleyFellows = () => {
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
    <div className=" py-12 px-8 lg:px-4">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 text-white">
          Who are the{' '}
          <br />
          <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Hayes Valley </span><span className='text-white'>Fellows?</span>
        </h1>
        <p className="text-gray-400 text-base sm:text-md lg:text-lg mb-6">
          It no revelation that primarily unique personalities are drawn to Silicon Valley due to its self-selective nature. These individuals are usually
          <br />
          intensely driven, devoted, and passionate about technology, entrepreneurship, and defying the norm.
        </p>
      </div>

      <div className="text-center my-[5rem]">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 text-white">
          We believe the program will be advantageous for you if you are:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mx-[3rem]">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              {section.icon}
              <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">{section.title}</h3>
              <p className="text-gray-400">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SiliconValleyFellows;
