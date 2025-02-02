import React from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
const Hero1 = () => {
  return (
    <div className='text-black '>
      <div className='max-w-[800px]  w-full my-9 mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-1'>
          WITH DATA ANALYTICS
        </p>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-4'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-lg font-bold py-2'>
            Fast, flexible financing for
          </p>
          <ReactTyped
            className='md:text-4xl sm:text-3xl text-lg font-bold md:pl-4 pl-2'
            strings={['BTB', 'SASS', 'BTC']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-xl text-lg font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[180px] rounded-md font-medium my-4 mx-auto py-2 text-black'>
          <Link to={`/coin`}>
          Get Started
          </Link>
          </button>
      </div>
    </div>
  );
};

export default Hero1;
