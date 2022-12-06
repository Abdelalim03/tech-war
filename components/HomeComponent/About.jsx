import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div id='about' className='py-5 h-screen flex flex-col items-center justify-center md:justify-around gap-10 md:flex-row'>
        <div className='md:w-[60%]'>
            <h2 className='sec-title mb-5'>WHAT IS TECHWAR</h2>
            <p className='text-[#8C89FF] text-2xl font-light leading-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>
        </div>
        <div className='hidden md:block md:w-[15%]'>
            <img src="/robocop.svg" />
        </div>
    </div>
  )
}

export default About