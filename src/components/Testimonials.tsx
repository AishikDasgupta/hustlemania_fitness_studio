import { useState } from "react";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      beforeImage:
        "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400&h=400&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=400&h=400&fit=crop",
      quote:
        "HustleMania transformed not just my body, but my entire lifestyle. Lost 30 pounds and gained confidence!",
      duration: "6 months with HustleMania",
    },
    {
      name: "Michael Chen",
      role: "Business Analyst",
      beforeImage:
        "https://images.unsplash.com/photo-1583500557349-fb5238f8d946?w=400&h=400&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1583500557349-fb5238f8d946?w=400&h=400&fit=crop",
      quote:
        "The trainers here are exceptional. They helped me achieve results I never thought possible.",
      duration: "1 year with HustleMania",
    },
    {
      name: "Emma Rodriguez",
      role: "Teacher",
      beforeImage:
        "https://images.unsplash.com/photo-1609132718484-cc90df3417f8?w=400&h=400&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1609132718484-cc90df3417f8?w=400&h=400&fit=crop",
      quote:
        "The supportive community and expert guidance made my fitness journey enjoyable and successful.",
      duration: "8 months with HustleMania",
    },
  ];


  return (
    <motion.section
      id="testimonials"
      className="py-20 bg-gray-100 dark:bg-stone-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-3xl text-white md:text-4xl font-bold mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Real results from real people. See how HustleMania has helped
            transform lives and achieve fitness goals.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

// Internal TestimonialCard component
const TestimonialCard = ({
  name,
  role,
  beforeImage,
  afterImage,
  quote,
  duration,
}: {
  name: string;
  role: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
  duration: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden
        transform transition-all duration-300 ease-in-out
        ${isHovered ? "scale-105 shadow-2xl" : ""}
      `}
      >
        <div className="relative h-64 overflow-hidden">
          {/* Before Image */}
          <div
            className={`
              absolute inset-0 transition-transform duration-700 ease-in-out
              ${isHovered ? "translate-x-full" : "translate-x-0"}
            `}
          >
            <img
              src={beforeImage}
              alt="Before transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
              Before
            </div>
          </div>

          {/* After Image */}
          <div
            className={`
              absolute inset-0 transition-transform duration-700 ease-in-out
              ${isHovered ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <img
              src={afterImage}
              alt="After transformation"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
              After
            </div>
          </div>
        </div>

        <div className="p-6">
          <Quote className="w-8 h-8 text-red-500 mb-4" />
          <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
            "{quote}"
          </p>
          <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
            <h3 className="font-semibold text-lg text-white">{name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{role}</p>
            <p className="text-red-500 text-sm mt-1">{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
