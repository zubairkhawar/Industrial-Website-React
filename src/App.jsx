import React from 'react';
import { useState } from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Divider from '@mui/material/Divider';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import MeetTeam from './components/MeetTeam'
import Workers from './components/Workers';

function App() {
  const [count, setCount] = useState(0);

  const style = {
    py: 0,
    width: '80%',
    maxWidth: 360,
    borderRadius: 2,
    border: '0.5px solid',
    borderColor: 'divider',
    backgroundColor: 'background.paper',
  };

  return (
    <>
      <TopBar />
      <Aboutus />
      <Footer />
    </>
  );
}

export default App;
