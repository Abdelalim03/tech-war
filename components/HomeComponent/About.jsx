import React from 'react'
// import Lottie from 'lottie-react';
// import animationData from './lotties/lhabla';

function About() {
  return (
    <div id='about' className='py-5 h-screen flex flex-col items-center justify-center md:justify-around gap-10 md:flex-row'>
        <div className='md:w-[60%]'>
            <h2 className='sec-title mb-5'>WHAT IS TECHWAR</h2>
            <p className='text-[#8C89FF] text-2xl font-light leading-10'>
                    it's an event of 3 days, exclusively dedicated to all computer
                    scientist, including talks, workshops, competition which is
                    a series of challenges in different field such us( web
                    development, app development, real life problem, artificial
                    intelligence, data science , cybersecurity, Algorithms and
                    data structure), to add the excitement to the participants
                    we have a different types of challenges( golden,
                    bronze,unknown,normal,danger, sponsored), the event is
                    the first physical event that combine all IT fields at once,
                    organised by students of CSE club, provided with a
                    qualified speakers, trainors, talented participant.
            </p>
          </div>
        <div className='hidden md:block md:w-[35%]'>
            {/* <img src="/robocop.svg" /> */}
            <video  controls={false} autoPlay loop muted >
                <source src="/techwar.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
                {/* <Lottie 
            animationData={animationData}
            loop={true}
            autoplay={true}
            height={400}
            width={400}
          /> */}
        </div>
    </div>
  )
}

export default About