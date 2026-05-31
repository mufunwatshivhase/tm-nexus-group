import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import assets from './assets/assets.js'
import Hero from './Components/Hero'
import TrustedBy from './Components/TrustedBy'
import Services from './Components/Services'
import Teams from './Components/Teams.jsx'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)

    
    setFade(true)
    const timer = setTimeout(() => setFade(false), 400) // overlay lasts 400ms
    return () => clearTimeout(timer)
  }, [theme])

  return (
<div className="relative min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white transition-colors duration-500 ease-in-out">
 
  {fade && (
    <div className="absolute inset-0 bg-black/40 dark:bg-white/20 animate-fade pointer-events-none"></div>
  )}

  <Navbar theme={theme} setTheme={setTheme} assets={assets} />
  <Hero />
  <TrustedBy />
  <Services />
  <Teams />
  <ContactUs />
  <Footer theme={theme} />
</div>
  )
}

export default App
