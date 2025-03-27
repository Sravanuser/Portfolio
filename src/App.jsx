import React from 'react'
import "./Mobile.css"
import Navbar from './Navbar/Navbar'
import Home from './pages/Home'
import Skill from './pages/Skill'
import About from "./pages/AboutMe"
import Projects from './pages/Projects'
import Footer from './Navbar/Footer'

export default function App() {
  return (
    <div className='portfolio-container'>
      <Navbar/>
      <Home />
      <Skill />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}
