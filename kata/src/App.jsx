import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import About from './components/About/About';
 const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40'>
      <Navbar/>
      <Hero />
      <Products />
      <About />
    </div>
  )
}
export default App;