import React from 'react'
import Hero from '../components/Hero'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Achievement from '../components/Achievement'
import Card from '../components/Card'
import Video from '../components/Video'
import Workers from '../components/Workers'
import ExperienceStat from '../components/ExperienceStat'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        
        <Hero />
        <ExperienceStat />
        <Achievement />
        <Video />
        <Footer />
    </div>
  )
}

export default Home
