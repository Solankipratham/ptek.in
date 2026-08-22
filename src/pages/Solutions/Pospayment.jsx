import React from 'react';
import {
  FiLink, FiBriefcase, FiCode, FiSettings, FiTool,
  FiSmartphone, FiCreditCard, FiPackage, FiBarChart2,
  FiShoppingCart, FiCheck, FiUser, FiDollarSign,
  FiShield, FiTrendingUp, FiDatabase
} from 'react-icons/fi';
import { FiPlay } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const POSPayment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
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
            POS Payment Solutions
          </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90 ">
            Transform your Business with <br className="hidden md:block" />  POS Payment Solutions
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Empower your business with cutting-edge POS payment solutions.
            we provide scalable and customizable systems to meet your unique needs.
          </p>
          <Link
            to="/contactsection"
            className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Start Your Project →
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
              src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Wearable Tech"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive POS Payment Solutions
            </h2>
            <p className="text-xl text-gray-600">
              We provide end-to-end solutions to streamline your payment processing and business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiLink className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">System Integration</h3>
                  <p className="text-gray-600">
                    Seamlessly connect your POS with existing business systems including accounting, inventory,
                    and CRM platforms for unified operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiBriefcase className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">POS Consulting</h3>
                  <p className="text-gray-600">
                    Our experts help you select and implement the perfect POS solution tailored to your business
                    size, industry, and specific requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiCode className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Custom Development</h3>
                  <p className="text-gray-600">
                    Build bespoke POS solutions with features designed specifically for your business workflow
                    and customer experience needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="POS system dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Mobile POS system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiSettings className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Implementation</h3>
                  <p className="text-gray-600">
                    Smooth deployment of your POS system with minimal disruption to your business operations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiTool className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Customization</h3>
                  <p className="text-gray-600">
                    Tailor your POS system's UI, workflows, and reporting to match your specific business processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiSmartphone className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Mobile POS Solutions</h3>
                  <p className="text-gray-600">
                    Extend your checkout capabilities with mobile POS solutions for on-the-go transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              GET POS SOLUTION NOW
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced POS Features
            </h2>
            <p className="text-xl text-gray-600">
              Our solutions come packed with powerful features to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supported Payment Methods
            </h2>
            <p className="text-xl text-gray-600">
              We support all major payment types for complete flexibility
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{method.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our POS Solutions?
            </h2>
            <p className="text-xl text-blue-100">
              We deliver measurable results through expertise and tailored approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-3xl text-blue-200 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-8">
                Our POS experts will help you implement the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
  <Link to="/contactsection">
    <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
      Get Started
    </button>
  </Link>

  <Link to="/schedule-demo">
    <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
      Schedule a Demo
    </button>
  </Link>
</div>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-400/30 to-indigo-500/30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data arrays
const featuresData = [
  {
    icon: <FiCreditCard className="text-blue-600 text-xl" />,
    title: "Secure Transactions",
    description: "PCI-compliant systems with end-to-end encryption for all payment processing.",
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    icon: <FiPackage className="text-blue-600 text-xl" />,
    title: "Inventory Management",
    description: "Real-time tracking and automated reordering to optimize stock levels.",
    image: "https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    icon: <FiBarChart2 className="text-blue-600 text-xl" />,
    title: "Advanced Analytics",
    description: "Comprehensive sales reports and business insights to drive growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80"
  },
  {
    icon: <FiShoppingCart className="text-blue-600 text-xl" />,
    title: "Omnichannel Support",
    description: "Seamless integration across physical stores, e-commerce, and mobile.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

const paymentMethods = [
  {
    icon: <FiCreditCard className="text-blue-600 text-2xl" />,
    name: "Credit Cards"
  },
  {
    icon: <FiSmartphone className="text-blue-600 text-2xl" />,
    name: "Mobile Wallets"
  },
  {
    icon: <FiDollarSign className="text-blue-600 text-2xl" />,
    name: "Cash"
  },
  {
    icon: <FiLink className="text-blue-600 text-2xl" />,
    name: "Bank Transfers"
  },
  {
    icon: <FiCheck className="text-blue-600 text-2xl" />,
    name: "Checks"
  },
  {
    icon: <FiDatabase className="text-blue-600 text-2xl" />,
    name: "Cryptocurrency"
  }
];

const benefitsData = [
  {
    icon: <FiShield className="text-3xl" />,
    title: "Enhanced Security",
    description: "PCI-DSS compliant solutions with end-to-end encryption and fraud prevention."
  },
  {
    icon: <FiTrendingUp className="text-3xl" />,
    title: "Increased Efficiency",
    description: "Streamlined operations that save time and reduce manual errors."
  },
  {
    icon: <FiUser className="text-3xl" />,
    title: "Improved CX",
    description: "Faster checkouts and personalized experiences for your customers."
  },
  {
    icon: <FiBarChart2 className="text-3xl" />,
    title: "Actionable Insights",
    description: "Real-time analytics to make data-driven business decisions."
  }
];



export default POSPayment;