import { FaRocket, FaRegSadTear } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // or use next/link if using Next.js

const NotFound = () => {
  return (
    <div className="min-h-[800px] bg-radial from-[#451795] to-[#12032b] flex items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <div className="animate-float relative">
          <FaRegSadTear className="text-white text-9xl mx-auto mb-8" />
          
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Oops!
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 flex">
          <span className="text-[#00ff88] mr-2">404 Error :</span> Not enough ethers in your account
          to access this page. 
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="bg-[#00ff88] text-[#12032b] px-8 py-3 rounded-lg font-semibold
            hover:bg-white hover:text-[#451795] transition-all duration-300
            flex items-center gap-2"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-gray-400 mt-8 text-sm">
          (Don't worry, your digital assets are safe... probably)
        </p>
      </div>
    </div>
  );
};

export default NotFound;