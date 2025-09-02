/* eslint-disable react/jsx-key */
import React from 'react'
import Slider from 'react-slick';

const TestimonialData = [
{
  id: 1,
  name: "Satya ",
  text: "Absolutely love this product! Great quality, fits perfectly, and exceeded my expectations. Highly recommend to everyone!",
  img: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
},

{
  id: 2,
  name: "Nish",
  text: "Fantastic experience! The quality is excellent, shipping was fast, and customer service was outstanding. Highly recommend!",
  img: "https://th.bing.com/th/id/OIG1.clHUuw_Z5tEPXWatEQhu"
},

{
  id: 3,
  name: "Aish",
  text: "These clothes are amazing! The fit is perfect, the fabric is soft, and they look stylish. Love it!!",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPtfMni_9LcUOhDkoGqo97QWR7y7-uN36Jg&s"
},
{
  id: 4,
  name: "NATALAYA",
  text: "Stylish, comfortable, high-quality clothing that fits perfectly. Exceptional designs, durable fabrics, and always on-trend. Highly recommend!",
  img: "https://media.glamourmagazine.co.uk/photos/6411fca91827564a0f927e21/1:1/w_1280,h_1280,c_limit/SABRINA%20CARPENTER%2015032023.jpg"
}
];

const Testionials = () => {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed:500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint:10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }  
    ]
  };
  return (
    <div className='py-10 dark:bg-gray-900'>
      <div className='container'>
       
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-primary text-sm '>What Our Customers are saying</p>
          <h1 data-aos="zoom-in"
           className='text-3xl font-bold  dark:text-white'>Testmonials</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400 '>
          Genuine, heartfelt, authentic, insightful, positive, detailed, trustworthy, relatable, convincing,</p>
        </div>
        <div data-aos="zoom-in">
          <Slider {...settings}>{
            TestimonialData.map((data) => (
              <div className='mb-4'> 
              <div key={data.id}
              className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-900 bg-primary/10 relative'>
                <div className='mb-4'><img src={data.img} alt="" className='rounded-full w-20 h-20 '/></div>
                <div className='flex flex-col items-center gap-4'>
                  <div className='space-y-3'>
                   <p className='text-xs text-gray-500'>{data.text}</p>
                <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name} </h1>
              </div>
              </div> 
         
            </div>  
          </div>
          ))}
         </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testionials
