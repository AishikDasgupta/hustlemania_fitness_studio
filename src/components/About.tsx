import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Target, Users, Award } from "lucide-react";
import { fadeIn } from "./variants";

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 bg-gray-100 dark:bg-black transition-colors"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 1.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="text-3xl text-white md:text-4xl font-bold text-center mb-16"
        >
          About HustleMania
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <motion.h3
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-xl text-white font-semibold mb-4"
            >
              Our Mission
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-gray-500"
            >
              To inspire and empower individuals to achieve their fitness goals
              and lead healthier lives.
            </motion.p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <motion.h3
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-xl text-white font-semibold mb-4"
            >
              Expert Trainers
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-gray-500"
            >
              Our certified trainers are dedicated to helping you reach your
              full potential.
            </motion.p>
          </div>
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <motion.h3
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-xl text-white font-semibold mb-4"
            >
              Premium Facilities
            </motion.h3>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
              className="text-gray-500"
            >
              State-of-the-art equipment and modern facilities to enhance your
              workout experience.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
