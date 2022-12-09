import React from 'react'



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper";

function SquareCarousel({sponsors}) {
    
  return (
    <Swiper
      loop={true}
      navigation={true}
      observer={true}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 3, 
        },
        800:{
            slidesPerView:4
        }

      }}
      slideToClickedSlide={true}
      speed={500}
      centeredSlides={true}
      freeMode={true}
      modules={[FreeMode,Navigation]}
      
    >
      {sponsors?.map((sponsor, idx) => (
        <SwiperSlide key={sponsor.id} className="flex items-center justify-center ">
          {({ isActive, isNext, isPrev }) => (
                <div className={`w-52 h-52 shadow-[0_10px_100px_7px_rgb(0,0,0)] backdrop-blur-sm bg-[#0E1023CC] flex justify-center items-center ${isActive && 'w-72 h-72 '}`}>
                    <a target="_blank" href={sponsor.url} className='w-[70%] select-none'>
                        <img  src={sponsor.image} alt={sponsor.lastname} />
                    </a>
                </div>
               
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SquareCarousel