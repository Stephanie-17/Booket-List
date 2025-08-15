import { Link } from 'react-router-dom'
import heroImg from '../assets/try.png'

const HomePage = () => {
  return (
    <div className='flex justify-center items-center mb-30'>
      <div className='flex justify-center items-center flex-col mt-8' >
        <div className='flex justify-center items-center'>
         <img  className='w-[70%] ' src={heroImg} alt="" />
        </div>
         <div className='text-center text-white z-10'>
            <h2 className='text-5xl font-semibold -mt-92'>Find Your Next Favorite Book</h2>
            <p>Discover personalized book recommendations based on your reading history. Start exploring today!</p>
            <Link to="/sign-up">
             <button className='bg-[#0B192F] text-white mt-6 px-4 py-2 rounded-lg cursor-pointer' >Get Started</button>
            </Link>
           
         </div>
        
      </div>
    </div>
  )
}

export default HomePage