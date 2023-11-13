import React from 'react'
import {BiGroup} from 'react-icons/bi'
import car1 from "../../images/cars/car.jpg"
import { Button } from "@/components/ui/button"
import {AiOutlineHeart} from "react-icons/ai"


const CarCard = () => {
  return (
    <div className='p-4 flex flex-col gap-y-4 shadow-xl border rounded-2xl'>
        
        <div className='rounded-2xl overflow-hidden h-[200px] border'>
            <img className='w-full h-full object-cover' src={car1} alt="" />
        </div>

        <div className='px-2'>   
          
          <div className='border-b pb-3'>

            <div className='flex mb-2 items-center justify-between'>
              <h1 className='font-bold text-xl'>2020 Honda Pilot</h1>
              <span className='py-1 border-dashed px-3 border border-blue-500 text-xs rounded-3xl'>
                2020
              </span>
            </div>

            <div className='grid grid-cols-2 gap-y-2 py-2'>
              
              <span className='flex items-center gap-x-2'>
                <BiGroup/>
                4 People
              </span>
              <span className='flex items-center gap-x-2'>
                <BiGroup/>
                4 People
              </span>
              <span className='flex items-center gap-x-2'>
                <BiGroup/>
                4 People
              </span>
              <span className='flex items-center gap-x-2'>
                <BiGroup/>
                4 People
              </span>

            </div>

          </div> 

          <div className='flex py-2 items-center justify-between'>

            <h2 className='font-medium text-2xl'>$40<span className='text-sm font-light'> /day</span></h2> 

            <div className='flex items-center gap-x-2'>
              <button className='bg-blue-100 rounded-lg text-blue-500 w-[35px] h-[35px] flex items-center justify-center'>
                <AiOutlineHeart/>
              </button>
              <button className='bg-blue-500 text-white h-[35px] px-4 font-semibold flex items-center justify-center rounded-lg text-sm'>Book Now</button>
            </div>

          </div>
          
        </div>
    </div>
  )
}

export default CarCard