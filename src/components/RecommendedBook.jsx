import React from 'react'
import coverImg from '../assets/homepage.jpg'
import { Link } from 'react-router-dom'
const RecommendedBook = () => {
  return (
    <div className='flex flex-col gap-7 mt-10 mb-10 items-start border-[#e4ecf5] border-3 rounded-lg p-8 w-[400px]'>
        <div className='flex gap-6'>
            <div>
                <img className='w-[100px] h-[100px] rounded-lg' src={coverImg} alt="coverImg" />
            </div>
            <div>
                <p className='text-[#4573A1] text-sm'>Based on your preferences</p>
                <p className='font-semibold'>Atomic Habits</p>
                <p className='text-[#4573A1]'>James Clear</p>
                
            </div>
        </div>
       
        <p className='w-[90%]'> <span className='font-semibold'>Synopsis:</span> <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam praesentium, consectetur minus, dicta officiis, sunt asperiores impedit suscipit labore a illum eos quas deleniti reprehenderit ab non soluta quia totam.</p>
        <Link to="/saved list">
          <button className='bg-[#1747B5] -mt-4 cursor-pointer text-white px-4 py-1 rounded-lg'>Save</button>
        </Link>
        
    </div>
  )
}

export default RecommendedBook