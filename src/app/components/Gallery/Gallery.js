import React from 'react'
import OurWork from './OurWork'
import { FaAnglesRight } from 'react-icons/fa6'

const Gallery = () => {
  return (
    <div className='bg-bgPrimary dark:bg-black py-10 dark:border-t border-white'>
      <div className='container'>
        <div className="text-center flex flex-col justify-center items-center gap-1">
                <h2 className="text-[30px] text-secondary dark:text-white font-semibold pb-8">
                 #Our Gallery
                </h2>
              </div>
        <OurWork/>
      </div>
      
    </div>
  )
}

export default Gallery
