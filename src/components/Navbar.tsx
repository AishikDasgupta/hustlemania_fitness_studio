import { useState, useEffect, useRef } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState('0px');
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the mobile menu after clicking
    }
  };

  useEffect(() => {
    if (isOpen) {
      setMenuHeight(`${menuRef.current?.scrollHeight}px`);
    } else {
      setMenuHeight('0px');
    }
  }, [isOpen]);

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
              <a
                onClick={() => scrollToSection("home")}
                className="hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => scrollToSection("about")}
                className="hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
              >
                About
              </a>
              <a
                onClick={() => scrollToSection("bmi")}
                className="hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
              >
                BMI Calculator
              </a>
              <a
                onClick={() => scrollToSection("services")}
                className="hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
              >
                Services
              </a>
              <a
                onClick={() => scrollToSection("testimonials")}
                className="hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
              >
                Testimonials
              </a>
              <a
                onClick={() => scrollToSection("pricing")}
                className="hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
              >
                Pricing
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-transform duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6 transition-opacity duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-opacity duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          style={{ maxHeight: menuHeight }}
          className={`overflow-hidden transition-max-height duration-300 ease-in-out md:hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              onClick={() => scrollToSection("home")}
              className="block hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="block hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("bmi")}
              className="block hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
            >
              BMI Calculator
            </a>
            <a
              onClick={() => scrollToSection("services")}
              className="block hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
            >
              Services
            </a>
            <a
              onClick={() => scrollToSection("testimonials")}
              className="block hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
            >
              Testimonials
            </a>
            <a
              onClick={() => scrollToSection("pricing")}
              className="block hover:text-red-500 px-3 py-2 transition-colors cursor-pointer"
            >
              Pricing
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
