import React from 'react'

function Collaps({title,content}) {
  return (
    <div className='bg-transparent text-left'>
        <div tabIndex={0} className="collapse bg-[#171D42] collapse-arrow border border-base-300  rounded-box">
          <div className="collapse-title text-xl lg:text-2xl text-white font-medium">
            {title}
          </div>
          <div className="collapse-content text-base lg:text-lg text-[#B9B9B9]"> 
            <p>{content}</p>
          </div>
        </div>
    </div>
  )
}

export default Collaps