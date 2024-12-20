import { useEffect, useRef, useState } from "react";
import { Dumbbell, Users, Heart, Timer } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="w-12 h-12" />,
      title: "Strength Training",
      description:
        "Build muscle and increase strength with our comprehensive weight training programs.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Group Classes",
      description:
        "Join our energetic group classes including yoga, HIIT, and spinning.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Personal Training",
      description:
        "Get personalized attention and guidance from our expert trainers.",
    },
    {
      icon: <Timer className="w-12 h-12" />,
      title: "24/7 Access",
      description: "Work out on your schedule with round-the-clock gym access.",
    },
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      className="py-20 bg-gray-100 dark:bg-black transition-colors"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.5s, transform 0.5s",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="text-3xl text-white md:text-4xl font-bold text-center mb-16"
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-stone-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-red-500 mb-4">{service.icon}</div>
              <motion.h3
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="text-xl text-white font-semibold mb-4"
              >
                {service.title}
              </motion.h3>
              <motion.p
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.2 }}
                className="text-gray-400"
              >
                {service.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
