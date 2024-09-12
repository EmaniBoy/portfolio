import { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills';

AOS.init()

function App() {


  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Skills/>
      <Contact />
      
      
    </div>
  )
}

export default App
