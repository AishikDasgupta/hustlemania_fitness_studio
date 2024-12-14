import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  },);

  return (
    <section id="home" className="relative h-screen">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50" />
          <img
            src={img}
            alt={`Gym ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-red-600">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Transform Your Body,<br />Transform Your Life
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center text-white max-w-2xl px-4">
          Join HustleMania and start your fitness journey today
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8 py-4 text-lg font-semibold transition-colors">
          Get Membership
        </button>
      </div>
    </section>
  );
};

export default Hero;