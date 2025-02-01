import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex bg-radial text-white from-[#2b0f5c] to-80% to-[#1d0544] justify-between items-center gap-47 h-22 px-20'>
      <div className='max-w-30 pt-3 ml-3'><img src="/logo1.png" alt="logo" className='h-full w-full object-contain' />      
      </div>
      <ul className='hidden lg:flex gap-3'>
        <li className='font-semibold text-xl px-4 py-3'>Home</li>
        <li className='font-semibold text-xl px-4 py-3'>Solution</li>
        <li className='font-semibold text-xl px-4 py-3'>FAQ</li>
        <li className='font-semibold text-xl px-4 py-3 '>AboutUs</li>
        <li className='font-semibold text-xl px-4 py-3'>Contact</li>
      </ul>

      <div onClick={handleNav} className='block lg:hidden cursor-pointer z-20'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={`${
          nav ? ' bg-opacity-80 fixed left-0 top-0 w-[60%] h-full border-r z-20 border-r-gray-900 bg-[#000300] ease-in-out duration-500' 
          : 'ease-in-out duration-500 fixed left-[-100%]'
        } lg:hidden`}>  
      
        <h1 className='w-full text-3xl font-bold text-[#33f781] m-4'>CRYPTIK.</h1>
        <li className='p-4 border-b border-gray-600 h-3'>&nbsp;</li>
        <li className='p-4 border-b font-inter tracking-wide border-gray-600 text-[#fff]'>Home</li>
        <li className='p-4 border-b font-inter border-gray-600 text-[#fff]'>FAQ</li>
        <li className='p-4 border-b font-inter border-gray-600 text-[#fff]'>Resources</li>
        <li className='p-4 border-b font-inter border-gray-600 text-[#fff]'>About</li>
        <li className='p-4 border-b font-inter border-gray-600 text-[#fff]'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
