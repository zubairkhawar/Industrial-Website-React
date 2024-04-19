import React from 'react';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import TopBar from './components/TopBar';
import Contact from './pages/Contact';
import Aboutus from './pages/Aboutus';
import Home from './pages/Home';
import Products from './pages/Products'
import CoatedAbrasives from './pages/CoatedAbrasives';
import DiamondBlades from './pages/DiamondBlades';
import SteelGrindingDisc from './pages/SteelGrindingDisc';
import FlapDisc from './pages/FlapDisc';
import Faqs from './pages/Faqs';
import Blog from './pages/Blog';

function App() {
  
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/coatedabrasives" element={<CoatedAbrasives />} />
        <Route path="/diamondcuttingblades" element={<DiamondBlades />} />
        <Route path="/steelgrindingdisc" element={<SteelGrindingDisc />} />
        <Route path="/flapdisc" element={<FlapDisc />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </Router>
  );
}

export default App;
