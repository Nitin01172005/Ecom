import React from 'react'
import FooterLogo from '../assets/logo-Jm4BVSCI.png'
import Banner from '../assets/wavy-black-white-background_23-2150530927.avif';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%", 
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
]
const Footer = () => {
  return (
    <div style={BannerImg} data-aos="fade-up" className='text-white pb-10'>
      <div className='container'>
        <div className='grid py-8 gap-x-28 grid-cols-1 md:grid-cols-4 sm:my-8'>
          <div data-aos="fade-up">

              <a href="/#" className='flex flex-row font-bold text-2xl gap-2 '><img src={FooterLogo} alt="img" className='max-w-[50px] contain' /> <span className='pt-2'>Shopsy</span> </a>

              <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At odio, cum accusamus debitis temporibus nam. Vero facere ratione nobis modi.</p>
            
          </div>
          <div>
            <div data-aos="fade-up">
              <h1 className='font-bold text-2xl py-2 pb-4 sm:text-2xl'>Important Links</h1> 
             <ul className='flex flex-col gap-3'>
             {
                  FooterLinks.map((link) => (
                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                      <span>{link.title} </span>
                    </li>
                  ))
                }
             </ul>
            </div>
          </div>
          <div>
            <div data-aos="zoom-in">
            <h1 className='font-bold text-2xl py-2 pb-4 sm:text-2xl'> Links</h1>
            <ul className='flex flex-col gap-3'>
                {
                  FooterLinks.map((link) => (
                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                      <span>{link.title} </span>
                    </li>
                  ))
                }
              </ul>  
            </div>
          </div>
          <div data-aos="zoom-in">
            <div className='flex flex-col items-left gap-6 py-2 sm:py-4'>
              <div className='flex gap-3'>
                <FaInstagram size={30} />
                <FaFacebook  size={30}/>
                <FaLinkedin  size={30}/>
                </div>
              <div className='flex gap-3 items-center'>
                <FaLocationArrow />
                <span>Ghaziabad, UttarPradesh</span>
              </div>
              <div className='flex gap-3 items-center'>
                <FaMobileAlt />
                <span>+91 123456783</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
