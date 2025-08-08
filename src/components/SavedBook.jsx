import React from 'react'
import coverImg from '../assets/homepage.jpg'
const SavedBook = () => {
  return (
    <div className='mx-2 my-3'>
        <img className='w-[100px] h-[100px] rounded-lg' src={coverImg} alt="coverImg" />
        <div>
            <p className='font-semibold'>Atomic Habits</p>
            <p className='text-[#4573A1]'>James Clear</p>
        </div>
    </div>
  )
}

export default SavedBook