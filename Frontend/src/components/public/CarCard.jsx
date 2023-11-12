import React from 'react'
import car1 from "../../images/cars/car1.jpg"

const CarCard = () => {
  return (
    <div className='px-3 shadow-lg border rounded-md'>
        <div>
            <img src={car1} alt="" />
        </div>
    </div>
  )
}

export default CarCard