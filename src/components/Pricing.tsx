import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Pricing = () => {
  const plans = [
    {
      name: "1 Month",
      price: "1500",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "24/7 gym access",
      ],
    },
    {
      name: "3 Months",
      price: "1166",
      features: [
        "All Basic features",
        "Group classes included",
        "Nutrition consultation",
        "Fitness tracking app",
      ],
      popular: true,
    },
    {
      name: "6 Months",
      price: "1000",
      features: [
        "All Pro features",
        "Personal training sessions",
        "Massage therapy",
        "Premium amenities",
      ],
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
      id="pricing"
      className="py-20 bg-gray-100 dark:bg-black transition-colors"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 0.5s, transform 0.5s",
      }}
    >
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl text-white md:text-4xl font-bold text-center mb-16">
          Membership Plans
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg ${
                plan.popular
                  ? "bg-stone-900 border-2 border-red-500"
                  : "bg-stone-800"
              } p-8`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                  Popular
                </span>
              )}
              <h3 className="text-2xl text-white font-bold mb-4">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl text-white font-bold">
                  ₹{plan.price}
                </span>
                <span className="text-white">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-md transition-colors ${
                  plan.popular
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-stone-900 text-white hover:bg-black"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;
