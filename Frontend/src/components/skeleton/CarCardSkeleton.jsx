import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


const CarCardSkeleton = () => {
  return (
    <div className='p-4 flex flex-col gap-y-3 shadow-lg border rounded-2xl'>
        
        <Skeleton className="h-[200px] rounded-2xl" />

        <Skeleton className="h-[40px] rounded-xl" />

        <Skeleton className="h-[60px] rounded-xl" />

        <Skeleton className="h-[50px] rounded-xl" />

        
    </div>
  )
}

export default CarCardSkeleton