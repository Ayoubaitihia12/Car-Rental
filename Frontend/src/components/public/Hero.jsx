import React from 'react'
import {BsArrowRight} from "react-icons/bs"
import playstore from "../../images/playstore.png" 
import appstore from "../../images/appstore.png" 
import hero from '../../images/hero.png'

const Hero = () => {
    return (
        <div className='max-w-6xl overflow-hidden relative items-start w-full mx-auto px-6 gap-x-14 py-28 lg:px-8 grid grid-cols-2'>
        
            <div className='z-10 flex flex-col gap-y-4'>
                <div className='flex text-primary-color text-lg items-center gap-x-2'>
                Car Rental Service
                <BsArrowRight />
                </div>
                <h1 className='text-5xl font-bold'>The <span className='text-primary-color'>Best Quality</span> Car's With Us.</h1>
                <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quod, cupiditate! Doloribus error maxime ipsum vel? Eos
                ipsam laborum blanditiis vitae.
                </p>
                <div className='flex items-center gap-x-4'>
                <img className='w-20' src={playstore} alt="" />
                <img className='w-20' src={appstore} alt="" />
                </div>
            </div>

            <div > 
            
            </div>

            <img className='absolute w-[600px] top-[50%] -translate-y-[50%] right-0' src={hero} alt="hero" />

        </div>
  )
}

export default Hero