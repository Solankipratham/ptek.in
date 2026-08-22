import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHeartbeat, FaMobileAlt, FaBatteryFull, FaShieldAlt,
  FaWalking, FaBluetooth, FaChevronDown, FaChevronUp,
  FaClock, FaRunning, FaBed, FaBrain
} from 'react-icons/fa';

const faqs = [
  { q: "What types of wearable devices do you support?", a: "We support smartwatches, fitness trackers, smart rings, and medical wearables." },
  { q: "Can I sync data with my smartphone?", a: "Yes, our wearables support both Android and iOS via Bluetooth and mobile apps." },
  { q: "Is the data encrypted and secure?", a: "Absolutely. All user data is encrypted in transit and at rest, complying with global privacy standards." },
  { q: "How long does the battery last?", a: "Depending on the model, battery life ranges from 5 to 14 days." },
  { q: "Do you offer real-time health monitoring?", a: "Yes, features include live heart rate, steps, oxygen levels, and sleep tracking." }
];

const WearableTechnology = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section (unchanged) */}
       <div className="w-full px-6 lg:px-24 py-28 flex flex-col lg:flex-row items-center justify-between ">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left space-y-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-500 text-base md:text-lg leading-relaxed ml-2"
            >
              Wearable Technology
            </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90 ">
            Smart Devices <br className="hidden md:block" /> That Empower Lives
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Experience health and connectivity like never before with our next-gen wearable technology.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Explore Devices →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 mt-12 lg:mt-0"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Wearable Tech"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="px-6 md:px-12 lg:px-24 bg-white py-20">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Advanced Wearable Technology</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Precision-engineered devices that seamlessly integrate with your lifestyle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Feature showcase with images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            {[
              { 
                title: "Health Monitoring", 
                desc: "Track heart rate, blood oxygen, stress levels and more in real-time", 
                icon: <FaHeartbeat className="text-red-500" /> 
              },
              { 
                title: "Seamless Connectivity", 
                desc: "Bluetooth 5.2 with ultra-low latency for instant notifications", 
                icon: <FaBluetooth className="text-blue-500" /> 
              },
              { 
                title: "Military-Grade Security", 
                desc: "End-to-end encryption for all your health data", 
                icon: <FaShieldAlt className="text-indigo-500" /> 
              }
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="mt-1 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Feature image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-2xl transform rotate-3 opacity-30"></div>
            <img 
              src="/smart.jpg" 
              alt="Smartwatch features" 
              className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-indigo-50">
  <div className="max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Smart Wearables</h2>
    <p className="text-gray-600">Next-gen design meets cutting-edge functionality</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        title: "SmartWatch Pro",
        desc: "Track health, stay connected, and manage productivity",
        features: ["Heart rate monitoring", "Sleep tracking", "GPS navigation", "Water resistant"],
        price: "$249.99",
        image: "/smart.jpg" // Replace with your actual image path
      },
      {
        title: "Fitness Band X",
        desc: "24/7 fitness tracking with extended battery life",
        features: ["Activity tracking", "Stress monitoring", "14-day battery", "Smart notifications"],
        price: "$129.99",
        image: "/smartw.jpg"
      },
      {
        title: "Neuro Ring",
        desc: "Sleep tracking and focus insights in a compact design",
        features: ["Sleep analysis", "Focus metrics", "Heart rate variability", "Sleek titanium design"],
        price: "$199.99",
        image: "/rings.jpg"
      }
    ].map((product, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
      >
        <div className="h-48 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-32 object-contain"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{product.title}</h3>
          <p className="text-gray-600 mb-4">{product.desc}</p>

          <ul className="space-y-2 mb-6">
            {product.features.map((feature, j) => (
              <li key={j} className="flex items-start">
                <div className="text-green-500 mr-2">✓</div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-indigo-700">{product.price}</span>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg hover:opacity-90 transition">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Use Cases */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How People Use Our Wearables</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Real-world impact for health, fitness, and productivity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { 
                  title: "Fitness Tracking", 
                  icon: <FaRunning className="text-blue-500" />, 
                  color: "bg-blue-100"
                },
                { 
                  title: "Sleep Analysis", 
                  icon: <FaBed className="text-purple-500" />, 
                  color: "bg-purple-100"
                },
                { 
                  title: "Stress Management", 
                  icon: <FaBrain className="text-red-500" />, 
                  color: "bg-red-100"
                },
                { 
                  title: "Productivity", 
                  icon: <FaClock className="text-amber-500" />, 
                  color: "bg-amber-100"
                }
              ].map((useCase, i) => (
                <div 
                  key={i} 
                  className={`${useCase.color} rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-md transition`}
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{useCase.title}</h3>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Real User Story</h3>
              <p className="mb-4 italic">"My SmartWatch Pro detected an irregular heart rhythm during my morning run. I went to the doctor and they found a minor issue before it became serious. This device might have saved my life."</p>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <div className="font-bold">Sarah Johnson</div>
                  <div className="text-blue-200">Marathon Runner</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Compare</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Superior technology for a healthier lifestyle</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-0 border-b border-gray-200">
              <div className="p-6 font-bold">Feature</div>
              <div className="p-6 text-center font-bold text-gray-500">Basic Wearables</div>
              <div className="p-6 text-center font-bold text-blue-600">Our Standard</div>
              <div className="p-6 text-center font-bold text-indigo-700">Premium Series</div>
            </div>
            
            {[
              ["Battery Life", "2–3 Days", "7 Days", "14 Days"],
              ["Sleep Tracking", "Basic", "Advanced", "Multi-phase + REM"],
              ["Stress Monitor", "None", "Basic", "Real-Time HRV"],
              ["Health Metrics", "Heart rate only", "Heart rate + O2", "Full biometrics"],
              ["Water Resistance", "Splash proof", "5 ATM", "10 ATM"],
              ["Syncing", "Manual", "Auto", "Auto + Cloud Backup"]
            ].map(([feature, basic, standard, premium], i) => (
              <div 
                key={i} 
                className={`grid grid-cols-4 gap-0 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <div className="p-6 font-medium">{feature}</div>
                <div className="p-6 text-center text-gray-500">{basic}</div>
                <div className="p-6 text-center text-blue-600 font-semibold">{standard}</div>
                <div className="p-6 text-center text-indigo-700 font-bold">{premium}</div>
              </div>
            ))}
            
            <div className="grid grid-cols-4 gap-0 border-t border-gray-200">
              <div className="p-6 font-bold">Price</div>
              <div className="p-6 text-center text-gray-500 font-bold">$79.99</div>
              <div className="p-6 text-center text-blue-600 font-bold">$199.99</div>
              <div className="p-6 text-center text-indigo-700 font-bold">$299.99</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-700 to-indigo-800 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Health?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Join thousands of users who have taken control of their wellness with our wearable technology
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-all">
                Shop Now
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-300 text-white font-bold rounded-xl hover:bg-blue-800/30 transition-all">
                Book a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WearableTechnology;