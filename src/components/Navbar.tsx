import { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-red-500" />
            <span className="ml-2 text-xl font-bold">HustleMania</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-red-500 px-3 py-2 transition-colors">Home</a>
              <a href="#about" className="hover:text-red-500 px-3 py-2 transition-colors">About</a>
              <a href="#bmi" className="hover:text-red-500 px-3 py-2 transition-colors">BMI Calculator</a>
              <a href="#services" className="hover:text-red-500 px-3 py-2 transition-colors">Services</a>
              <a href="#testimonials" className="hover:text-red-500 px-3 py-2 transition-colors">Testimonials</a>
              <a href="#pricing" className="hover:text-red-500 px-3 py-2 transition-colors">Pricing</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:text-red-500 px-3 py-2 transition-colors">Home</a>
            <a href="#about" className="block hover:text-red-500 px-3 py-2 transition-colors">About</a>
            <a href="#bmi" className="block hover:text-red-500 px-3 py-2 transition-colors">BMI Calculator</a>
            <a href="#services" className="block hover:text-red-500 px-3 py-2 transition-colors">Services</a>
            <a href="#testimonials" className="block hover:text-red-500 px-3 py-2 transition-colors">Testimonials</a>
            <a href="#pricing" className="block hover:text-red-500 px-3 py-2 transition-colors">Pricing</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;