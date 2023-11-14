import React from 'react'
import CarCard from './CarCard'
import SectionTitle from './SectionTitle';
import CarCardSkeleton from '../skeleton/CarCardSkeleton';

const TopCars = () => {

    const title = 'Explore Our Top Deal From <br /> Top-Rated Dealer';
    const desc = "best services";
    
    return (

        <div className='mx-auto max-w-6xl items-center justify-between py-20 px-6 lg:px-8'>
            
            {/* <div className='max-w-3xl mx-auto flex flex-col items-center gap-x-3'>
                <span className='uppercase font-medium text-gray-400 text-center'>best services</span>
                <h1 className='text-3xl font-bold text-center'>Explore Our Top Deal From <br /> Top-Rated Dealer</h1>
            </div> */}

            <SectionTitle title={title} desc={desc} />

            <div className='grid grid-cols-3 gap-6 mt-16'>
                <CarCard/>
                <CarCardSkeleton />
            </div>


        </div>
  )
}

export default TopCars