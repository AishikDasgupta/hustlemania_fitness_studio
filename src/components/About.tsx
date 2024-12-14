import { Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About PowerFit</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Target className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To inspire and empower individuals to achieve their fitness goals and lead healthier lives.
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Expert Trainers</h3>
            <p className="text-gray-600">
              Our certified trainers are dedicated to helping you reach your full potential.
            </p>
          </div>
          <div className="text-center p-6">
            <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Premium Facilities</h3>
            <p className="text-gray-600">
              State-of-the-art equipment and modern facilities to enhance your workout experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;