import React from 'react'
import Carousel from '../shared/Carousel'

function Speakers() {
  const sponsors= [
    {
        firstname:"Islam",
        lastname:"Helmy",
        image:"/helmy.png"
    },
    {
        firstname:"Abdelhadi",
        lastname:"bour",
        image:"/bour.png"
    }
    ,
    {
        firstname:"Mansour",
        lastname:"Koura",
        image:"/koura.png"
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