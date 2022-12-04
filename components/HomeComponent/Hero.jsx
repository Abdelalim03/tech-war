import Image from 'next/image'
import React from 'react';
import Globe from '../../public/globe_terrestre.svg'
// import Globe from '../../public/global.gif'
function Hero() {
  const say=`WHERE EACH SKILL\nBELONGS`
  return (
    <div className='h-screen flex flex-col gap-8 md:gap-0 md:flex-row justify-center md:justify-around items-center' >
      
    <div className='w-2/3 md:w-1/3 animate-spin-slow '>
      <Image src={Globe}   />
    </div>
    <div className='flex flex-col text-center justify-center items-center gap-6'>
      <pre className='text-[#8C89FF] font-medium text-4xl tracking-2 leading-10'>{say}</pre>
          <button
            type="button"
            className="w-fit bg-tech_button text-lg lg:text-2xl text-[#040726] px-12 py-3 rounded-[80px] cursor-pointer "
          >
            Register Now
          </button>
    </div>
    </div>
  )
}

export default Hero