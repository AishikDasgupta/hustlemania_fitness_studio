import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import BMICalculator from './components/BMICalculator';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <BMICalculator />
      <Services />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;