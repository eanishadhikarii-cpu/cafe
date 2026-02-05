import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HomeMenu from './components/HomeMenu';
import Gallery from './components/Gallery';
import SocialProof from './components/SocialProof';
import BookTable from './components/BookTable';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <HomeMenu />
      <Gallery />

      <SocialProof />
      <BookTable />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;