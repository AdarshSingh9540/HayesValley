import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-gray-400 py-8 px-8 border-t-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
           <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-gray-300 mb-2">ARK IMPACT FELLOWSHIP</h2>
            <p className="text-sm mb-2">Become a Silicon Valley Insider in one week.</p>
            <p className="text-sm mb-2">436 Haight St, San Francisco, CA 94117</p>
            <p className="text-sm">admin@arkimpactlabs.com</p>
          </div>
          {/*
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-800">Cookie policy</a></li>
                <li><a href="#" className="hover:text-gray-800">Privacy policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-800">Contact us</a></li>
              </ul>
            </div>
          </div> */}
        </div>
        
        <div className="flex justify-start md:justify-between items-center flex-col md:flex-row">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {/* <Linkedin className="w-5 h-5 text-blue-600 hover:scale-110 transition-transform duration-200" />
            <Instagram className="w-5 h-5 text-pink-600 hover:scale-110 transition-transform duration-200" />
            <Twitter className="w-5 h-5 text-blue-400 hover:scale-110 transition-transform duration-200" />
            <Facebook className="w-5 h-5 text-blue-700 hover:scale-110 transition-transform duration-200" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
