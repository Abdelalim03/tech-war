import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper";

function Carousel({sponsors}) {
    
  return (
    <Swiper
    initialSlide={1}
      navigation={true}
      observer={true}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        800:{
            slidesPerView:3
        }

      }}
      slideToClickedSlide={true}
      speed={500}
      centeredSlides={true}
      freeMode={true}
      modules={[FreeMode,Navigation]}
      
    >
      {sponsors?.map((sponsor, idx) => (
        <SwiperSlide key={sponsor.firstname} className="flex items-center justify-center ">
          {({ isActive, isNext, isPrev }) => (
            
            <div className='flex flex-col justify-between'>
                <div className={`w-64 rounded-full h-64 mb-10 flex justify-center items-center ${isActive && 'w-80 h-80 shadow-[0_8px_10px_rgb(36,72,227)]'}`}>
                    <div className='w-[80%] select-none'>
                        <img  src={sponsor.image} alt={sponsor.lastname} />
                    </div>
                </div>
                <div className={`${isActive && 'bg-[#212A5C] rounded-3xl px-8 py-2'} select-none cursor-pointer`}>
                    
                    <p className={`${isActive ? 'text-xl':'text-base'} text-[#A5A3A3]`}>{sponsor.firstname}</p>
                    <h2 className={`${isActive ? 'text-3xl':'text-xl'} uppercase text-white font-bold`}>{sponsor.lastname}</h2>
                </div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel