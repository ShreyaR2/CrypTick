import React from 'react'
import HeroSection from '../components/Hero'
import FAQAccordion from '../components/Faq'

const LandingPage = () => {
  return (
    <>
      <HeroSection />

      {/* How we solve it section */}
      <div className='bg-radial text-white from-[#2b0f5c]  to-[#1d0544] mx-auto p-4 max-w-7xl'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-5 mt-4 md:mb-6 md:mt-5'>
          How We Solve It
        </h1>

        <div className='flex flex-col gap-16 md:gap-24'>
          {/* Step 1 */}
          <div className='flex flex-col lg:flex-row items-center gap-8'>
            {/* Number Circle */}
            <div className='w-full lg:w-auto flex justify-center relative'>
              <div className='w-16 h-16 lg:w-24 lg:h-24 bg-blue-500 text-white rounded-full flex items-center justify-center 
                absolute lg:static -top-8'>
                <span className='text-2xl lg:text-3xl'>1</span>
              </div>
            </div>

            {/* Content Container */}
            <div className='flex flex-col lg:flex-row w-full items-center gap-8'>
              {/* Text Content */}
              <div className='lg:w-1/2 text-center lg:text-left'>
                <h2 className='text-xl md:text-2xl font-semibold mb-4'>
                  Tell Us What You Need
                </h2>
                <p className='text-gray-600 md:text-lg'>
                  Simply tell us what type of car service or repair you're looking for. 
                  We make it easy to submit your request.
                </p>
              </div>

              {/* Image Container */}
              <div className='lg:w-1/2 hidden md:block'>
                <div className='bg-gray-100 rounded-xl h-64 lg:h-80 w-full shadow-sm'>
                  {/* Replace with actual image */}
                  <div className='w-full h-full bg-gray-200 rounded-xl animate-pulse' />
                  
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className='flex flex-col lg:flex-row items-center gap-8'>
            {/* Number Circle */}
            <div className='w-full lg:w-auto flex justify-center relative'>
              <div className='w-16 h-16 lg:w-24 lg:h-24 bg-blue-500 text-white rounded-full flex items-center justify-center 
                absolute lg:static -top-8'>
                <span className='text-2xl lg:text-3xl'>2</span>
              </div>
            </div>

            {/* Content Container */}
            <div className='flex flex-col lg:flex-row-reverse w-full items-center gap-8'>
              {/* Text Content */}
              <div className='lg:w-1/2 text-center lg:text-right'>
                <h2 className='text-xl md:text-2xl font-semibold mb-4'>
                  Get Matched With Experts
                </h2>
                <p className='text-gray-600 md:text-lg'>
                  Based on your needs, we'll match you with the most qualified 
                  and trustworthy mechanics in your area.
                </p>
              </div>

              {/* Image Container */}
              <div className='lg:w-1/2 hidden md:block'>
                <div className='bg-gray-100 rounded-xl h-64 lg:h-80 w-full shadow-sm'>
                  {/* Replace with actual image */}
                  <div className='w-full h-full bg-gray-200 rounded-xl animate-pulse' />
                </div>
              </div>
            </div>
            
          </div>

          {/* Step 3 */}
          <div className='flex flex-col lg:flex-row items-center gap-8'>
            {/* Number Circle */}
            <div className='w-full lg:w-auto flex justify-center relative'>
              <div className='w-16 h-16 lg:w-24 lg:h-24 bg-blue-500 text-white rounded-full flex items-center justify-center 
                absolute lg:static -top-8'>
                <span className='text-2xl lg:text-3xl'>3</span>
              </div>
            </div>

            {/* Content Container */}
            <div className='flex flex-col lg:flex-row w-full items-center gap-8'>
              {/* Text Content */}
              <div className='lg:w-1/2 text-center lg:text-left'>
                <h2 className='text-xl md:text-2xl font-semibold mb-4'>
                  Schedule a Convenient Time
                </h2>
                <p className='text-gray-600 md:text-lg'>
                  Choose a time that works best for you and schedule the repair 
                  without the hassle of waiting.
                </p>
              </div>

              {/* Image Container */}
              <div className='lg:w-1/2 hidden md:block'>
                <div className='bg-gray-100 rounded-xl h-64 lg:h-80 w-full shadow-sm'>
                  {/* Replace with actual image */}
                  <div className='w-full h-full bg-gray-200 rounded-xl animate-pulse' />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className='flex flex-col lg:flex-row items-center gap-8'>
            {/* Number Circle */}
            <div className='w-full lg:w-auto flex justify-center relative'>
              <div className='w-16 h-16 lg:w-24 lg:h-24 bg-blue-500 text-white rounded-full flex items-center justify-center 
                absolute lg:static -top-8'>
                <span className='text-2xl lg:text-3xl'>4</span>
              </div>
            </div>

            {/* Content Container */}
            <div className='flex flex-col lg:flex-row-reverse w-full items-center gap-8'>
              {/* Text Content */}
              <div className='lg:w-1/2 text-center lg:text-right'>
                <h2 className='text-xl md:text-2xl font-semibold mb-4'>
                  Get Your Car Fixed
                </h2>
                <p className='text-gray-600 md:text-lg'>
                  Your chosen mechanic will arrive at the scheduled time 
                  to fix your car, ensuring it's as good as new.
                </p>
              </div>

              {/* Image Container */}
              <div className='lg:w-1/2 hidden md:block'>
                <div className='bg-gray-100 rounded-xl h-64 lg:h-80 w-full shadow-sm'>
                  {/* Replace with actual image */}
                  <div className='w-full h-full bg-gray-200 rounded-xl animate-pulse' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQAccordion />
    </>
  )
}

export default LandingPage