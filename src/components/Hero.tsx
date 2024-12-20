import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80",
  ];

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  });

  return (
    <section id="home" className="relative h-screen">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/60" />
          <img
            src={img}
            alt={`Gym ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-red-600">
        <motion.h1
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6"
        >
          Transform Your Body,
          <br />
          Transform Your Life
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-center text-white max-w-2xl px-4"
        >
          Join HustleMania and start your fitness journey today
        </motion.p>
        <button
          onClick={scrollToPricing}
          className="group relative bg-red-600 text-white font-bold py-4 px-8 rounded-full"
        >
          <span className="absolute inset-0 bg-black rounded-full transition transform scale-0 group-hover:scale-100"></span>
          <span className="relative">Get Membership</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
