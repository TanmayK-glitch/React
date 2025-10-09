import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div>
        <nav className='flex justify-between pt-5 pl-10 pr-10 items-center'>
          <div className='cursor-pointer'>
            <img src='/public/brand_logo.png' alt='Brand-Logo'></img>
          </div>
          <ul className='flex gap-10 text-base font-medium'>
            <li href="#" className='cursor-pointer uppercase'>Menu</li>
            <li href="#" className='cursor-pointer uppercase'>Location</li>
            <li href="#" className='cursor-pointer uppercase'>About</li>
            <li href="#" className='cursor-pointer uppercase'>Contact</li>
          </ul>
          <button className='pl-4 pr-4 pt-2 pb-2 bg-red-600 text-lg font-medium text-white uppercase'>Log In </button>
        </nav>
      </div>
      {/* <------Main section--------> */}
      <div className='flex gap-72 mt-32 p-10'>
        {/* <---------Main Text---------> */}
        <div className='max-w-lg'>
          <h1 className='text-8xl font-bold uppercase'>Your Feet Deserves The Best</h1>
          <p className='text-base font-normal pt-3 uppercase'>Your Feet Deservs the best and we are here to help you with our shoes. Your feet deserves the best and we are here to take care of it. </p>
          <div className='flex mt-6 gap-7'>
            <button className='p-3 bg-red-600 text-white font-medium uppercase'>Shop Now</button>
            <button className='p-3 font-medium border border-black hover:bg-gray-100 uppercase'>Category</button>
          </div>
          <p className='mt-8'>Shop Us At</p>
          <img src='/public/Flipkart_Symbol_0.svg' className='h-9 mt-1'></img>
        </div>
        <div className='MainImg'>
          <img src='/public/shoe_image.png' alt='Shoe Image'></img>
        </div>
      </div>
    </>
  );
}

export default App
