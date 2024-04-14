import React from 'react';
import { useState } from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Divider from '@mui/material/Divider';

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
      <Divider sx={style} variant="middle" orientation="horizontal" flexItem />
      <NavBar />
      <Hero />
    </>
  );
}

export default App;
