import React from 'react'
import Hero from '../components/Hero'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Achievement from '../components/Achievement'
import Card from '../components/Card'
import Video from '../components/Video'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Achievement />
        <Card />
        <Video />
        <Footer />
    </div>
  )
}

export default Home
