import { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));
    }
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-500' };
    if (bmi < 25) return { category: 'Normal', color: 'text-green-500' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-500' };
    return { category: 'Obese', color: 'text-red-500' };
  };

  return (
    <section id="bmi" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">BMI Calculator</h2>
        <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500"
                placeholder="Enter height"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500"
                placeholder="Enter weight"
              />
            </div>
          </div>
          <button
            onClick={calculateBMI}
            className="w-full mt-6 bg-red-500 text-white py-3 rounded hover:bg-red-600 transition-colors"
          >
            Calculate BMI
          </button>
          {bmi && (
            <div className="mt-6 text-center">
              <p className="text-xl">Your BMI is: <span className="font-bold">{bmi}</span></p>
              <p className="mt-2">
                Category:{' '}
                <span className={`font-bold ${getBMICategory(bmi).color}`}>
                  {getBMICategory(bmi).category}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;