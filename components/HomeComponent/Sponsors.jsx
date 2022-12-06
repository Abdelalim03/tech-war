import React from 'react'
import SquareCarousel from '../shared/SquareCarousel'


function Sponsors() {
  const sponsors= [
    {
        id:1,
        image:"/microsoft.png"
    },
    {
        id:2,
        image:"/google.png"
    },
    {
        id:3,
        image:"/hp.png"
    },
    {
        id:4,
        image:'/yassir.png'
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