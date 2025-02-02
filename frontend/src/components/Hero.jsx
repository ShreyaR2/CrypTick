import React from 'react';
// import Laptop from '../assets/laptop.jpg';
import animationData from '../assets/animation.json';
import Lottie from 'react-lottie';
import Button from './Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };  

    return (
        <div className='w-full bg-radial from-[#451795] to-[#12032b] text-white py-6 px-5'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className='w-[300px] mx-auto my-4 mr-auto' >
                <Lottie options={defaultOptions} height={400} width={400} />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Detect Pump & Dump</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id quidem ducimus eum hic? Dolore vitae repellendus veritatis harum illum praesentium, adipisci doloribus obcaecati. Facere ab odit porro fugiat nam.
                    </p>
                    <div>
                        <Link to='/home'>
                        <Button text='Dashboard' bgColor='#00df9a' textColor='black' />
                        </Link>
                    </div>
            </div>

            
        </div>
        </div>
    );
}
 
export default HeroSection;