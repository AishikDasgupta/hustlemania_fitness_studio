import { useEffect, useRef, useState } from 'react';
import { Dumbbell, Users, Heart, Timer } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="w-12 h-12" />,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our comprehensive weight training programs.'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Group Classes',
      description: 'Join our energetic group classes including yoga, HIIT, and spinning.'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Personal Training',
      description: 'Get personalized attention and guidance from our expert trainers.'
    },
    {
      icon: <Timer className="w-12 h-12" />,
      title: '24/7 Access',
      description: 'Work out on your schedule with round-the-clock gym access.'
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      className="py-20 bg-gray-100 dark:bg-stone-900 transition-colors"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 0.5s, transform 0.5s',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-stone-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-red-500 mb-4">{service.icon}</div>
              <h3 className="text-xl text-white font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;