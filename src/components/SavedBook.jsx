import React from 'react'
import coverImg from '../assets/homepage.jpg'
const SavedBook = () => {
  return (
    <>
      <div className='mx-3 my-3'>
          <img className='w-[100px] h-[130px] rounded-lg' src={coverImg} alt="coverImg" />
          <div>
              <p className='font-semibold'>Atomic Habits</p>
              <p className='text-[#1747B5]'>James Clear</p>
          </div>
      </div>
    </>
  )
}

export default SavedBook