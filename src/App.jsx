import {React, useEffect} from 'react'
import Navbar from './components/Navbar'
import Hero from './Components/Hero'
// import Pricing from './Components/Pricing'
import Static from './Components/Static'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  useEffect(() => {
    alert('hey well come to my website')
  }, [])

  return (
    <>
      <Navbar/>
      <Hero/>
      <Static/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App







































// import React from 'react'
// import Card from './Components/Card'

// const App = () => {

//   function getData(age) {
//     console.log(age);
//   }
//   return (
//     <>
//       <h1>Hello World</h1>
//       <Card tilte='my name is haseeb ur rehmanjs' describtion='i am 17 years old' funct={getData} />
//       <button onClick={() => getData}>get age</button>
//     </>
//   )
// }

// export default App
