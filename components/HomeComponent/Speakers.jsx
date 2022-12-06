import React from 'react'
import Carousel from '../shared/Carousel'
import elon_musk from '../../public/Elon_musk.png'
import mark_zucker from '../../public/Mark_zuckerburg.png'
import bill_gates from '../../public/Bill_gates.png'
function Speakers() {
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
    <div className='text-center max-h-screen py-32'>
      <h2 className='sec-title mb-20'>Speakers</h2>
      <Carousel sponsors={sponsors} />
    </div>
  )
}

export default Speakers