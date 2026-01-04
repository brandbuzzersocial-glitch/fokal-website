import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sectors from './components/Sectors';
import About from './components/About';
import Products from './components/Products';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { initAOS } from './utils/aos';
import './App.css';

function App() {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Sectors />
      <About />
      <Stats />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
