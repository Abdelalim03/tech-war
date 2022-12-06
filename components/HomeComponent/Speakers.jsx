import React from 'react'
import Carousel from '../shared/Carousel'

function Speakers() {
  const sponsors= [
    {
        firstname:"Mark",
        lastname:"Zuckerburg",
        image:"/Mark_zuckerburg.png"
    },
    {
        firstname:"Elon",
        lastname:"Musk",
        image:"/Elon_musk.png"
    },
    {
        firstname:"Bill",
        lastname:"Gates",
        image:"/Bill_gates.png"
    }

]
  return (
    <div className='text-center max-h-screen py-32'>
      <h2 className='sec-title mb-20'>Speakers</h2>
      <Carousel sponsors={sponsors} />
    </div>
  )
}

export default Speakers