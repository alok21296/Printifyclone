import React from 'react'
import mainbannerimage from '/Users/aloksingh/Desktop/Projects Deployed/printify/src/assets/mainbannerimage.png'

const Mainbanner = () => {
  return (
    <div className='main-banner '>
      {/* This is Main Banner Section */}
      <div className='main-banner-wrapper flex justify-between px-9 py-10 w-full'>
      <div className='main-banner-description mx-auto my-auto'>
        <h1 className=''>Create and sell custom products</h1>
        <ul className='flex flex-col p-2'>
            <li className='bx bx-check p-1'>100% Free to use</li>
            <li className='bx bx-check p-1'>900+ High-Quality Products</li>
            <li className='bx bx-check p-1'>Largest global print network</li></ul>
        <div className='main-banner-buttons flex gap-4 '>
            <button className='border bg-green-600 text-white px-2 rounded hover:bg-green-700'>Start for free</button>
            <button className='bx bx-play-circle border text-black px-2 rounded hover:text-green-600'>How it works?</button>
        </div>
        <p className='flex px-4 py-2 text-green-600'>
        Trusted by over 8M sellers around the world
        </p>
      </div>
      <div className='main-banner-images flex w-full w-1/2 h-1/2'>
        <img src={mainbannerimage}/>
         </div>
      </div>
    </div>
  )
}

export default Mainbanner
