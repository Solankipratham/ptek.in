// src/components/SalesManagement.js
import React, { useState } from 'react';
import { FaBriefcase, FaComments, FaLink, FaChartLine, FaHandshake, FaClipboardList, FaArrowRight, FaChevronRight, FaLightbulb, FaUsers, FaShieldAlt, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const SalesManagement = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const solutions = [
    {
      icon: <FaBriefcase className="text-blue-500" />,
      title: "Inside Sales Software",
      description: "We develop inside sales systems with auto-dialers, live chat tools, call management, and CTI integrations.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaComments className="text-purple-500" />,
      title: "Sales Live Chat Platforms",
      description: "Seamlessly integrate live chat platforms to increase conversion rates and boost engagement.",
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaLink className="text-green-500" />,
      title: "Sales Integrations",
      description: "Integrate your CRM, ERP, HRIS and other workflows into a unified sales operations solution.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaChartLine className="text-yellow-500" />,
      title: "Sales Lead Management",
      description: "Develop & integrate sales lead management for inbound marketing workflows and behavior analysis.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaHandshake className="text-red-500" />,
      title: "Sales CRM",
      description: "Program sales CRM software systems that facilitate marketing information systems and pipeline management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
    },
    {
      icon: <FaClipboardList className="text-indigo-500" />,
      title: "Sales Tracking Software",
      description: "Develop intelligent sales tracking solutions including orders management and commissions tracking.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  const features = [
    {
      title: "CRM Integration",
      description: "Integrate robust CRM systems to manage customer relationships efficiently.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Lead Management",
      description: "Effectively capture, nurture, and convert leads with our sales management tools.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Sales Pipeline Tracking",
      description: "Monitor your sales pipeline in real-time to forecast revenue and identify bottlenecks.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Performance Analytics",
      description: "Gain actionable insights into your sales team's performance to optimize strategies.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
    }
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-gray-50 to-white">
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
            Sales Management Solutions
          </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90 ">
            Sales Management <br className="hidden md:block" />   for Enhanced Productivity
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Drive your business growth with our comprehensive sales management solutions. From lead tracking to performance analytics, we provide advanced tools to streamline your sales processes.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Start Your Project  →
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
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Wearable Tech"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>
      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sales & Operations Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to optimize your sales processes and boost team productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md">
                    {solution.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <button className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn more <FaChevronRight className="ml-1 text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-gray-900 to-black text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl">
              GET CUSTOM S&OP SOLUTIONS
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Sales Management Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to streamline sales operations and drive growth
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-8">
            <button
              className={`px-6 py-3 rounded-full mx-2 mb-4 font-medium transition-all duration-300 ${activeTab === 'features'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              onClick={() => setActiveTab('features')}
            >
              Core Features
            </button>
            <button
              className={`px-6 py-3 rounded-full mx-2 mb-4 font-medium transition-all duration-300 ${activeTab === 'analytics'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              onClick={() => setActiveTab('analytics')}
            >
              Analytics
            </button>
            <button
              className={`px-6 py-3 rounded-full mx-2 mb-4 font-medium transition-all duration-300 ${activeTab === 'integrations'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              onClick={() => setActiveTab('integrations')}
            >
              Integrations
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-xl border-l-4 ${index % 2 === 0 ? 'border-blue-500' : 'border-cyan-500'
                    } shadow-md transition-all duration-300 hover:shadow-lg ${hoveredFeature === index ? 'scale-[1.02]' : ''
                    }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex items-start">
                    <div className={`mr-4 mt-1 ${index % 2 === 0 ? 'text-blue-500' : 'text-cyan-500'
                      }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              {/* Image container with the same dimensions as the placeholder */}
              <div className="relative rounded-xl w-full h-full min-h-[400px] overflow-hidden shadow-lg">
                {/* Actual dashboard image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 opacity-10 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>

                {/* Image content overlay */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-4 max-w-[80%]">
                    <h3 className="font-bold text-gray-800">Sales Dashboard</h3>
                    <p className="text-sm text-gray-600">Real-time performance metrics</p>
                  </div>
                </div>
              </div>

              {/* Top-right icon */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-full shadow-lg z-30">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full">
                  <FaChartLine className="text-white text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/5">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our <span className="text-blue-600">Sales Management</span> Solutions?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We provide comprehensive sales tools that empower your team to achieve more, with less effort and greater results.
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule a Demo
              </button>
            </div>

            <div className="lg:w-3/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <FaLightbulb className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Tools</h3>
                  <p className="text-gray-600">All-in-one platform to manage leads, opportunities, and sales performance.</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                  <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <FaUsers className="text-purple-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Collaboration</h3>
                  <p className="text-gray-600">Seamless integration with existing tools for team collaboration.</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-100">
                  <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <FaShieldAlt className="text-green-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Secure & Reliable</h3>
                  <p className="text-gray-600">Enterprise-grade security to protect your valuable sales data.</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
                  <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <FaRocket className="text-yellow-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-gray-600">Empower sales teams to improve efficiency and close deals faster.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of companies that have increased their sales productivity with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Sales
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Free Trial
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SalesManagement;