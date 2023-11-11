import React from 'react'
import {BsArrowRight} from "react-icons/bs"

const Home = () => {
  return (
    <div className='max-w-6xl w-full mx-auto px-6 py-20 lg:px-8 grid grid-cols-2'>
      
      <div className='flex flex-col gap-y-3'>
        <div className='flex text-lg items-center gap-x-2'>
          Car Rental Service
          <BsArrowRight />
        </div>
        <h1 className='text-5xl font-bold'>The Best Quality Car's With Us.</h1>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quod, cupiditate! Doloribus error maxime ipsum vel? Eos
          ipsam laborum blanditiis vitae.
        </p>
      </div>

    </div>
  )
}

export default Home