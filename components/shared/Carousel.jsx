import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import elon_musk from '../../public/Elon_musk.png'
import mark_zucker from '../../public/Mark_zuckerburg.png'
import bill_gates from '../../public/Bill_gates.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper";
import Image from 'next/image';

function Carousel() {
    const sponsors= [
        {
            firstname:"Mark",
            lastname:"Zuckerburg",
            image:mark_zucker
        },
        {
            firstname:"Elon",
            lastname:"Musk",
            image:elon_musk
        },
        {
            firstname:"Bill",
            lastname:"Gates",
            image:bill_gates
        }

    ]
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
                        <Image  src={sponsor.image} alt={sponsor.lastname} />
                    </div>
                </div>
                <div className={`${isActive && 'bg-[#212A5C] rounded-3xl px-8 py-2'} select-none cursor-pointer`}>
                    
                    <p className={`${isActive ? 'text-xl':'text-base'} text-[#A5A3A3]`}>{sponsor.firstname}</p>
                    <h2 className={`${isActive ? 'text-3xl':'text-xl'} text-white font-bold`}>{sponsor.lastname}</h2>
                </div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel