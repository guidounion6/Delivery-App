import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import Food from './components/Food/Food'
import Easy from './components/Easy/Easy'
import Download from './components/Download/Download'
import Footer from './components/Footer/Footer'

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false)

  const toggleCartVisibility = ()  => {
    setIsCartVisible(prev => !prev)
        }  
    return (
    <div>
      <NavBar toggleCartVisibility={toggleCartVisibility}/>
      <Hero/>
      <Food isCartVisible={isCartVisible} toggleCartVisibility={toggleCartVisibility}/>
      <Easy/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default App