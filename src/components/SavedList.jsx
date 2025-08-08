import React from 'react'
import SavedBook from './SavedBook'

const SavedList = () => {
  return (
    <div className=' ml-5 mt-10 sm:ml-15 lg:ml-25'>
        <h2 className='font-bold text-2xl lg:text-3xl mb-7'>Saved List</h2>
        <p className='font-bold text-xl'>Books</p>
        <div className='flex flex-wrap  justify-start items-center '>
            <SavedBook />
            <SavedBook />
            <SavedBook />
            <SavedBook />
            <SavedBook />
            <SavedBook />
            <SavedBook />

        </div>
    </div>
  )
}

export default SavedList