import React from 'react'
import SquareCarousel from '../shared/SquareCarousel'
//import images
import yassir from '/public/yassir.png'
import google from '/public/google.png'
import hp from '/public/hp.png'
import microsoft from '/public/microsoft.png'

function Sponsors() {
  const sponsors= [
    {
        id:1,
        image:microsoft
    },
    {
        id:2,
        image:google
    },
    {
        id:3,
        image:hp
    },
    {
        id:4,
        image:yassir
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