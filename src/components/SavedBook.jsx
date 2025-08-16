import React from 'react'
import coverImg from '../assets/homepage.jpg'
const SavedBook = () => {
  return (
    <>
      <div className='mx-7 my-3'>
          <img className='w-[200px] h-[250px] rounded-lg' src={coverImg} alt="coverImg" />
          <div>
              <p className='font-semibold'>Atomic Habits</p>
              <p className='text-[#1747B5]'>James Clear</p>
          </div>
      </div>
    </>
  )
}

export default SavedBook