import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({orderPopup, setOrderPopup}) => {

  return ( <>
      {orderPopup && (<div className='popup'>
          <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 bacdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md p-4 shadow-md bg-white dark:bg-gray-900 durayion-200 w-[300px]'>
              <div className='flex items-center justify-between '>
                <div>
                  <h1 className='dark:text-white'>Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline className='text-2xl cursor-pointer dark:text-white' onClick={() => setOrderPopup(false)} />
                </div>
              </div>  
              <div className='mt-4'>
                <input type="text" placeholder='Name' className='border w-full rounded-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' />
                <input type="text" placeholder='Email' className='border w-full rounded-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' />
                <input type="text" placeholder='Address' className='border w-full rounded-full border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4' />
                <div className='flex justify-center'>
                  <button className='bg-gradient-to-r from-primary to-secondary px-4 py-1  rounded-full transition-all text-white hover:scale-105 duration-200'>Order Now</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}

      </>
     
    
  
  )
}

export default Popup
