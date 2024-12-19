import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award } from 'lucide-react';

const About = () => {
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
    <motion.section
      ref={ref}
      id="about"
      className="py-20 bg-gray-100 dark:bg-stone-900 transition-colors"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1.2}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-16">About HustleMania</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl text-white font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-500">
              To inspire and empower individuals to achieve their fitness goals and lead healthier lives.
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl text-white font-semibold mb-4">Expert Trainers</h3>
            <p className="text-gray-500">
              Our certified trainers are dedicated to helping you reach your full potential.
            </p>
          </div>
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl text-white font-semibold mb-4">Premium Facilities</h3>
            <p className="text-gray-500">
              State-of-the-art equipment and modern facilities to enhance your workout experience.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;