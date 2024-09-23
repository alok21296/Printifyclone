import React from 'react'
import financialsimage from '/Users/aloksingh/Desktop/Projects Deployed/printify/src/assets/Financials iamge.png'

const Financials = () => {
  return (
    <div className='Financials block ml-40 mr-40 '>
      <div className='Financials wrapper  mb-20 flex justify-around h-'>
          <div className='Financials Description flex flex-col py-10 bg-[#203741] rounded-md p-20 text-white justify-center'>
            <h1 className='text-4xl font-bold my-1'>Make Money Risk Free</h1>
            <p className='my-1'>You pay for fulfillment only when you make a sale</p>
            <div className='flex flex-col  bg-gray-100 p-10 rounded-md bg-[#17262b] my-1'>
            <div className='flex justify-between'>
            <p className='m-0'>You sell a tshirt</p>   
            <p className='m-0'>30$</p>   
            </div>   
            <div className='flex justify-between'>
            <p className='m-0'>You pay for its production</p>   
            <p className='m-0'>12$</p>   
            </div>
            <div class="border-t border-white my-4 w-full"></div>
            <div className='flex justify-between mt-4'>
            <p className='m-0'>Your Profit</p>   
            <p className='m-0'>18$</p>   
            </div> 
            </div>
            <button className='bg-green-600 text-white rounded-md mt-5 mb-5 mr-10'>Start Selling</button>
            <p>
            100% Free to use · 900+ Products · Largest print network</p>
          </div>
          <div className='image hidden lg:block rounded-md w-1/2 h-1/2'><img src={financialsimage} alt="Image Financials" className='' /></div>
      </div>
    </div>
  )
}

export default Financials
