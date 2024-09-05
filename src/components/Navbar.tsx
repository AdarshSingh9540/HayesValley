
const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-md z-50  px-[1rem]">
        <div className="container mx-auto px-2 lg:px-4 py-3 flex justify-between items-center">
          <div className="text-gray-400 font-bold text-xl">
            Hayes Valley
          </div>
          <div className="flex items-center  lg:space-x-4">
            <ul className="flex lg:space-x-4">
              <li><a href="#home" className="text-gray-300 hover:text-gray-600 text-md hidden lg:block">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-gray-600 text-md hidden lg:block">Resource</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gray-600 text-md hidden lg:block">Community</a></li>
            </ul>
  
            <button className="bg-black text-white p-2 lg:mx-8 rounded-lg text-md">
              Apply Now
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  