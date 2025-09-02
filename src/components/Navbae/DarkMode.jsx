import React, { useState } from 'react'
import LightPic from '../../assets/light-mode-button-X4OXHFfW.png'
import DarkPic from '../../assets/dark-mode-button-85jBkhOs.png'
const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme"): "light"
  );

  const element = document.documentElement;
  
  React.useEffect (()=> {
    if(theme == "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  },[theme]);
  
  return (
    <div className='relative'>
      <img src={LightPic}
       alt="Light pic" 
       className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme=="dark"? "opacity-0" : "opacity-100" }`}
       onClick={()=> setTheme(theme == "light"? "dark" : "light")}
       />
      <img src={DarkPic} alt='dark pic' className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] duration-300 transition-all ' />
    </div>
  );
};

export default DarkMode
