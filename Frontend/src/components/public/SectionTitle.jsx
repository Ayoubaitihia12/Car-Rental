import React from 'react'

const SectionTitle = ({desc,title}) => {
    return (
        <div className='max-w-3xl mx-auto flex flex-col items-center gap-x-3'>
            <span className='uppercase font-medium text-gray-400 text-center'>{desc}</span>
            <h1 className='text-3xl font-bold text-center'>{title}</h1>
        </div>
    )
}

export default SectionTitle