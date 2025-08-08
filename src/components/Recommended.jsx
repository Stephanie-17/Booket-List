import React from 'react'
import RecommendedBook from './RecommendedBook'

const Recommended = () => {
  return (
    <div className='flex flex-col ml-5 sm:ml-15 lg:ml-25 mt-10'>
        <p  className='font-bold text-2xl lg:text-3xl mb-5'>Recommended reads</p>
        <input className='bg-[#E5EDF5] text-[#4573A1] w-70 sm:w-sm md:w-lg p-2 rounded-lg mb-5' type="search" placeholder='Search' />
        <div className='flex gap-4'>
            <button className='bg-[#E5EDF5] font-semibold py-2 px-3 rounded-lg'>Filter</button>
            <button className='bg-[#E5EDF5] font-semibold py-2 px-3 rounded-lg'>Sort</button>
        </div>
        <RecommendedBook />
    </div>
  )
}

export default Recommended 