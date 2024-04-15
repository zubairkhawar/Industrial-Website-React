import React from 'react'
import Hero from '../components/Hero'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <TopBar />
        <NavBar />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home
