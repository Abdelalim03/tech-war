import Image from 'next/image'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import Lottie from 'lottie-react';
import animationData from './lotties/globe';

// import Globe from '../../public/global.gif'
function Hero() {
  const say=`WHERE EACH SKILL\nBELONGS`;
  return (
    <div id='home' className='h-screen flex flex-col gap-8 md:gap-0 md:flex-row justify-center md:justify-around items-center' >
      
    <div className='w-2/3 md:w-1/3 animate-spin-slow '>
      <Lottie 
        animationData={animationData}
        loop={true}
        autoplay={true}
        height={400}
        width={400}
      />
    </div>
    <div className='flex flex-col text-center justify-center items-center gap-6'>
      <pre className='text-[#8C89FF] font-semibold text-4xl tracking-widest leading-10'>
      <Typewriter
            words={[say]}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={80}
            delaySpeed={1500}
          />
        </pre>

          <a target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLScctrYI1vJOipgRgOJ7WBn31iA61Mmo0q5-Y4tS30l-FpR7RQ/viewform'>
            <button
              type="button"
              className="w-fit bg-tech_button text-lg lg:text-2xl text-[#040726] px-12 py-3 rounded-[80px] cursor-pointer "
            >
              Register Now
            </button>
          </a>
    </div>
    </div>
  )
}

export default Hero