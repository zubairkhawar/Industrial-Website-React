import React from 'react';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Divider from '@mui/material/Divider';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Products from './pages/Products'
import CoatedAbrasives from './pages/CoatedAbrasives';
import DiamondBlades from './pages/DiamondBlades';

function App() {
  
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Products />} />
        <Route path="/coatedabrasives" element={<CoatedAbrasives />} />
        <Route path="/diamondcuttingblades" element={<DiamondBlades />} />
      </Routes>
    </Router>
  );
}

export default App;
