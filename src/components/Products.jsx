/* eslint-disable react/jsx-key */
import React from 'react'
import Img1 from '../assets/women-NhG2D3pl copy.png'
import Img2 from  '../assets/women2-wroTMLvf.jpg'
import Img3 from  '../assets/women-NhG2D3pl.png'
import Img4 from '../assets/women3-HFaPDX0l.jpg'
import Img5 from '../assets/women4-zXERyOhD.jpg'
import { FaStar } from 'react-icons/fa6'
const ProductsData = [
  {
    id:1,
    img:  Img1,
    title: "Women Ethnic",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },

  {
    id:2,
    img:  Img2,
    title: "Women Westerns",
    rating: 4.5,
    author: "Red",
    aosDelay: "200",
  },

  {
    id:3,
    img:  Img3,
    title: "Goggles",
    rating: 4.0,
    author: "Brown",
    aosDelay: "400",
  },

  {
    id:4,
    img:  Img4,
    title: "Printed T-shirt",
    rating: 4.4,
    author: "Yellow",
    aosDelay: "300",
  },

  {
    id:5,
    img:  Img5,
    title: "Fashion T-shirt",
    rating: 4.9,
    author: "Pink",
    aosDelay: "100",
  },

];

const Products = () => {
  return (
    <div className='pt-14 pb-12  dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='container'>
        {/* --heqader section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-primary text-sm '>Top Selling Products for You</p>
          <h1 data-aos="fade-up"
           className='text-3xl font-bold '>Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400 '>Stylish, comfortable, breathable, durable, trendy, versatile, timeless, elegant.</p>
        </div>
        {/* body */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {
              ProductsData.map((data) => (
                <div
                data-aos="fade-up"
                data-aos-delay= {data.aosDelay} 
                key={data.id}
                className='space-y-3'
                >
                  <img src={data.img} alt="" 
                  className='h-[220px] w-[150px] object-cover rounded-md'
                  />
                  <div>
                    <h3 className='font-semibold mt-2 mb-1'>{data.title}</h3>
                    <p className='text-sm text-gray-700'>{data.author}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaStar className='text-yellow-500' />
                    <span>{data.rating}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Products
