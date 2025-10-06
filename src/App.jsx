import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/global.css'
import Navbar from './components/layouts/navbar'
import Footer from './components/layouts/footer'
import HeroSection from './components/home/heroSection'
import HomeAbout from './components/home/homeAbout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    < HeroSection />
    <HomeAbout />
    <Footer />
    </>
  )
}

export default App
