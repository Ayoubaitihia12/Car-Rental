import React from 'react'
import CarCard from './CarCard'

const TopCars = () => {
    return (

        <div className='mx-auto max-w-6xl items-center justify-between py-20 px-6 lg:px-8'>
            
            <div className='max-w-3xl mx-auto flex flex-col items-center gap-x-3'>
                <span className='uppercase font-medium text-gray-400 text-center'>best services</span>
                <h1 className='text-3xl font-bold text-center'>Explore Our Top Deal From <br /> Top-Rated Dealer</h1>
            </div>

            <div className='grid grid-cols-4 mt-16'>
                <CarCard/>
            </div>


        </div>
  )
}

export default TopCars