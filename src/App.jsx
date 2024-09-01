import React from 'react'
import Navbar from './components/Navbar'
import Hero from './Components/Hero'
// import Pricing from './Components/Pricing'
import Static from './Components/Static'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Static/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
