import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sectors from './components/Sectors';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Sectors />
        <Products />
        {/* Sections to come */}
      </main>
      <Footer />
    </div>
  )
}

export default App
