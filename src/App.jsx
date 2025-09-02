import React from 'react'
import DarkMode from './components/Navbae/DarkMode'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbae/Navbar'
import Products from './components/Products'
import AOS from 'aos';
import "aos/dist/aos.css"
import TopProducts from './components/TopProducts'
import Banner from './components/Banner'
import Subscribe from './components/Subscribe'
import Testionials from './components/Testionials'
import Footer from './components/Footer'
import Popup from './components/Popup'

function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[])

  return (
    <div className='dark:bg-gray-900'>
      <Navbar handleOrderPopup = {handleOrderPopup} />
      <Hero handleOrderPopup = {handleOrderPopup}  />
      <Products />
      <TopProducts handleOrderPopup = {handleOrderPopup}/>
      <Banner />
      <Subscribe />
      <Testionials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>

  )
}

export default App
