import React, { useState, useEffect } from 'react';
import {
  FiCreditCard, FiSmartphone, FiPackage, FiBarChart2,
  FiShoppingCart, FiUser, FiShield, FiTrendingUp,
  FiDatabase, FiCheck, FiDollarSign, FiStar, FiPlay, FiArrowRight, FiGlobe
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const POSPayment = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans overflow-hidden">
      {/* Hero Section */}
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
            Enterprise IT Solutions
          </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90 ">
            Transform Your Business with <br className="hidden md:block" />Digital Innovation
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Future-proof your organization with cutting-edge IT services. Secure, scalable
            solutions designed for enterprise growth.
          </p>
          <Link
            to="/contactsection"
            className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Get Started →
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
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Wearable Tech"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Industry Solutions Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full mb-4">
              Tailored Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global IT Infrastructure
            </h2>
            <p className="text-xl text-gray-600">
              Custom solutions designed for your specific business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6 relative z-10">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-blue-100">{solution.description}</p>
                  <button className="mt-4 text-white font-medium flex items-center group">
                    Explore solution
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Retail Showcase Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                  alt="Retail store using POS system"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl w-56">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <FiTrendingUp className="text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Sales Increase</div>
                      <div className="font-bold text-lg">+42%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-500/10 rounded-full z-0"></div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full mb-4">
                Retail Success
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transforming Retail Experiences
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                See how our POS solutions are revolutionizing retail operations across industries
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiCheck className="text-green-500 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Streamlined Checkout</h3>
                    <p className="text-gray-600">Reduce checkout times by 50% with intuitive interfaces</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiCheck className="text-green-500 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Inventory Accuracy</h3>
                    <p className="text-gray-600">Real-time stock tracking with 99.8% accuracy</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FiCheck className="text-green-500 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Customer Insights</h3>
                    <p className="text-gray-600">Personalize experiences with purchase history analytics</p>
                  </div>
                </div>
              </div>

              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                View Case Study
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hardware Gallery Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full mb-4">
              Our Hardware
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Payment Terminals
            </h2>
            <p className="text-xl text-gray-600">
              Sleek, secure, and designed for performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareDevices.map((device, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="mb-6 w-full h-56 flex items-center justify-center">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="h-48 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{device.name}</h3>
                <p className="text-gray-600 text-center mb-4">{device.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {device.features.map((feature, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* Global Presence Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full mb-4">
              Global Reach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Worldwide Payment Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Serving businesses across the globe with localized solutions
            </p>
          </motion.div>

          <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform translate-x-1/2 -translate-y-1/3"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-800">Localized Payment Solutions</h3>
                <p className="text-gray-600 text-lg">
                  Our POS systems are customized to meet regional requirements and payment preferences around the world.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  {globalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 text-blue-600">
                        {feature.icon}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    alt="World map with locations"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg w-56">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <FiDatabase className="text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Global Coverage</div>
                      <div className="text-blue-600 font-bold">120+ Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-14">
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
                <p className="text-blue-100 mb-8">
                  Our IT experts are ready to architect your technology future.
                </p>
             <div className="flex flex-col sm:flex-row gap-4">
  <Link to="/contactsection">
    <motion.button
      className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition duration-300 w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Get Started
    </motion.button>
  </Link>

  <Link to="/schedule-demo">
    <motion.button
      className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition duration-300 w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Schedule a Demo
    </motion.button>
  </Link>
</div>
              </div>
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/30 to-indigo-600/30 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FiPlay className="text-white text-4xl" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Data arrays
const industrySolutions = [
  {
    icon: <FiShoppingCart className="text-white text-xl" />,
    title: "Cloud Services",
    description: "Hybrid and multi-cloud infrastructure solutions",
    image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
  },
  {
    icon: <FiDollarSign className="text-white text-xl" />,
    title: "Cyber Security",
    description: "End-to-end protection for your digital assets",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    icon: <FiSmartphone className="text-white text-xl" />,
    title: "Data Analytics",
    description: "Transform data into actionable insights",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

const hardwareDevices = [
  {
    name: "Pro Terminal",
    description: "Advanced countertop payment system",
    features: ["Contactless", "EMV Chip", "NFC", "Receipt"],
    image: "https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    name: "Mobile Reader",
    description: "Portable card reader for on-the-go payments",
    features: ["Bluetooth", "Battery", "Compact", "iOS/Android"],
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    name: "Self-Checkout",
    description: "Automated checkout solution for high-volume retailers",
    features: ["Touchscreen", "Barcode", "Cash", "Security"],
    image: "/ai2.webp"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Retail Manager, Fashion Store",
    quote: "Switching to this POS system reduced our checkout times by 40% and increased sales by 15% in the first quarter.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
  },
  {
    name: "Michael Chen",
    position: "Restaurant Owner",
    quote: "The inventory management features alone have saved us thousands in reduced waste and optimized ordering.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
  },
  {
    name: "Elena Rodriguez",
    position: "Boutique Owner",
    quote: "Customer insights from the POS have transformed how we market to our clients and manage loyalty programs.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
  }
];

const globalFeatures = [

  {
    icon: <FiGlobe className="text-xl" />,
    title: "Global Support",
    description: "24/7 assistance across time zones"
  },
  {
    icon: <FiShield className="text-xl" />,
    title: "Local Expertise",
    description: "Regional specialists in 90+ countries"
  },
  {
    icon: <FiCreditCard className="text-xl" />,
    title: "Compliance",
    description: "GDPR, HIPAA, PCI-DSS ready"
  },
  {
    icon: <FiBarChart2 className="text-xl" />,
    title: "Hybrid Solutions",
    description: "On-premise and cloud integration"
  }
];


export default POSPayment;