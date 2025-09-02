/* eslint-disable react/jsx-key */
import React from 'react'
import Image1 from '../assets/shirt-cwf9SKdB.png'
import Image2 from '../assets/shirt2-XQzG6elp.png'
import Image3 from '../assets/shirt3-HwQ10bVo.png'

import { FaStar } from 'react-icons/fa6';


const ProductsData = [
  

    { id: 1,
      img: Image1,
      title: "Casual Wear",
      Description: "Advanced search features for specific brands, colors, sizes, and style Filtering tools that help users narrow their options by price, popularity, or availability.",},
    
    

  { id: 2,
    img: Image2,
    title: "Printed Wear",
    Description: "Advanced search features for specific brands, colors, sizes, and style Filtering tools that help users narrow their options by price, popularity, or availability.",},
  
  
    { id: 3,
      img: Image3,
      title: "Women Wear",
      Description: "Advanced search features for specific brands, colors, sizes, and style Filtering tools that help users narrow their options by price, popularity, or availability.",}

];
const TopProducts = ({handleOrderPopup}) => {
  return (
    
    <div className='py-10  dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='container'>
        {/* header-section */}
        <div className='text-left mb-24 '>
          <p data-aos="fade-up" className='text-primary text-sm '>Top Rated Products for You</p>
          <h1 data-aos="fade-up"
           className='text-3xl font-bold '>Best Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400 '>Stylish, comfortable, breathable, durable, trendy, versatile, timeless, elegant.</p>
        </div>

        <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {
            ProductsData.map((data) => (
              <div data-aos="zoom-in"
              className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                <div className='h-[100px]'>
                  <img src={data.img} alt="IMAGE" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                </div>
                <div className='p-4 text-center'>
                  {/*  */}
                  <div className='w-full flex items-center justify-center gap-1'>
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                    <FaStar className='text-yellow-500' />
                  </div>
                  <h1 className='text-xl font-bold mt-1'>{data.title}</h1>
                  <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 mb-2'>{data.Description} </p>
                  <button   onClick={() => handleOrderPopup()}
                  className='bg-primary hover:scake-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>Order now</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default TopProducts
