import React from 'react'
import SquareCarousel from '../shared/SquareCarousel'


function Sponsors() {
  const sponsors= [
    {
        id:1,
        image:"/DJEZZY.png",
        url:"https://www.djezzy.dz/"
    },
    {
        id:2,
        image:"/NAFTAL.png",
        url:"https://www.naftal.dz/"
    },
    {
        id:3,
        image:"/cevital.png",
        url:"https://www.cevital.com/"
    },
    {
        id:4,
        image:'/Ooredoo.png',
        url:"http://www.ooredoo.dz/"
    }

]
  return (
    <div className='text-center max-h-screen py-32'>
      <h2 className='sec-title mb-20'>Our Sponsors</h2>
      <SquareCarousel sponsors={sponsors} />
    </div>
  )
}

export default Sponsors