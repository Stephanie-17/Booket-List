import React from 'react'
import coverImg from '../assets/homepage.jpg'
const RecommendedBook = () => {
  return (
    <div className='flex flex-col gap-7 mt-10 mb-10'>
        <div className='flex gap-6'>
            <div>
                <img className='w-[100px] h-[100px]' src={coverImg} alt="coverImg" />
            </div>
            <div>
                <p className='text-[#4573A1] text-sm'>Based on your preferences</p>
                <p className='font-semibold'>Atomic Habits</p>
                <p className='text-[#4573A1]'>James Clear</p>
            </div>
        </div>
       
        <p className='w-[80%]'> <span className='font-semibold'>Synopsis:</span> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam praesentium, consectetur minus, dicta officiis, sunt asperiores impedit suscipit labore a illum eos quas deleniti reprehenderit ab non soluta quia totam.</p>
    </div>
  )
}

export default RecommendedBook