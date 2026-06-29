import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Contacts from './Components/Contacts/Contacts'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className=''>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
