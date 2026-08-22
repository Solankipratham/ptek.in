import React from 'react';
import {
  FiSettings,
  FiMonitor,
  FiShoppingCart,
  FiTv,
  FiCamera,
  FiBarChart2,
  FiCpu,
  FiUser,
  FiWifi,
  FiMessageSquare,
  FiArrowRight,
  FiChevronRight
} from 'react-icons/fi';
import { TfiTicket } from "react-icons/tfi";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const KioskSolutions = () => {
  return (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans overflow-x-hidden">
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
           Transforming Digital Experiences
          </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90 ">
            Smart Kiosk <br className="hidden md:block" />Solutions
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Transform customer interactions with our cutting-edge kiosk technology
             designed for seamless experiences and operational efficiency.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
                Explore Solutions →
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
      
      {/* Solutions Overview */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interactive Kiosk Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our kiosks are engineered to deliver exceptional user experiences across diverse industries and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiShoppingCart className="w-8 h-8" />,
                title: "Retail & Commerce",
                description: "Self-checkout, product information, and personalized recommendations."
              },
              {
                icon: <FiUser className="w-8 h-8" />,
                title: "Hospitality",
                description: "Check-in/out, concierge services, and wayfinding solutions."
              },
              {
                icon: <TfiTicket className="w-8 h-8" />,
                title: "Entertainment",
                description: "Ticket purchasing, event information, and interactive experiences."
              },
              {
                icon: <FiBarChart2 className="w-8 h-8" />,
                title: "Healthcare",
                description: "Patient check-in, information kiosks, and wayfinding systems."
              },
              {
                icon: <FiMonitor className="w-8 h-8" />,
                title: "Public Services",
                description: "Information points, service access, and community resources."
              },
              {
                icon: <FiSettings className="w-8 h-8" />,
                title: "Custom Solutions",
                description: "Tailored kiosk systems for specialized industry needs."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Kiosk Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our kiosk solutions integrate cutting-edge technology for superior performance and user experience.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  {/* Replaced placeholder with actual image */}
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Advanced Kiosk Features"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="space-y-8">
                {[
                  {
                    icon: <FiSettings className="w-6 h-6" />,
                    title: "Hardware Integration",
                    description: "Seamless integration with biometric scanners, card readers, printers, and other peripherals."
                  },
                  {
                    icon: <FiMonitor className="w-6 h-6" />,
                    title: "Interactive Experiences",
                    description: "Touch screen interfaces, virtual keyboards, and multimedia capabilities."
                  },
                  {
                    icon: <FiTv className="w-6 h-6" />,
                    title: "Digital Signage",
                    description: "Content management with remote kiosk management controls."
                  },
                  {
                    icon: <FiCamera className="w-6 h-6" />,
                    title: "Photo Solutions",
                    description: "Integrated camera features with social media and payment processing."
                  },
                  {
                    icon: <FiBarChart2 className="w-6 h-6" />,
                    title: "Analytics & Insights",
                    description: "Data collection and reporting to optimize customer experiences."
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-600 text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Powered Solutions */}
      <div className="py-16 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Enhanced Kiosk Intelligence
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Transform your kiosk experience with our cutting-edge artificial intelligence capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCpu className="w-8 h-8" />,
                title: "Personalized Interactions",
                description: "AI-driven solutions that adapt to user preferences and behavior."
              },
              {
                icon: <FiUser className="w-8 h-8" />,
                title: "Smart Experiences",
                description: "Context-aware interfaces with natural language processing capabilities."
              },
              {
                icon: <FiWifi className="w-8 h-8" />,
                title: "Remote Management",
                description: "AI-powered monitoring and management for kiosk networks."
              },
              {
                icon: <FiMessageSquare className="w-8 h-8" />,
                title: "Virtual Assistants",
                description: "Branded virtual assistants to enhance customer interactions."
              },
              {
                icon: <TfiTicket className="w-8 h-8" />,
                title: "Intelligent Ticketing",
                description: "AI-enhanced ticketing systems with predictive capabilities."
              },
              {
                icon: <FiBarChart2 className="w-8 h-8" />,
                title: "Predictive Analytics",
                description: "Data-driven insights to optimize operations and user experiences."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-700/30 hover:border-blue-500 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-blue-200 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="/ai-solutions"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-blue-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105"
            >
              Explore AI Capabilities
              <FiChevronRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Kiosk Showcase */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kiosk Solutions in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our versatile kiosk solutions designed for various industries and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Self-Service Kiosks",
                description: "Streamline transactions with intuitive self-service solutions",
                imgUrl: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Interactive Displays",
                description: "Engage customers with dynamic touch experiences",
                imgUrl: "/GraphicDesign.jpg"
              },

              {
                title: "Payment Solutions",
                description: "Secure, multi-method payment processing kiosks",
                imgUrl: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Custom Applications",
                description: "Tailored solutions for specialized industry needs",
                imgUrl: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  {/* Replaced gradient with actual image */}
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our approach combines technical expertise with user-centered design for exceptional results. We focus on delivering innovative, scalable, and reliable solutions that align with your business goals.
              </p>

            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-6">
              {[
                {
                  title: "End-to-End Solutions",
                  description: "From concept to deployment and maintenance"
                },
                {
                  title: "User-Centric Design",
                  description: "Intuitive interfaces optimized for engagement"
                },
                {
                  title: "Future-Proof Technology",
                  description: "Scalable solutions that evolve with your needs"
                },
                {
                  title: "Industry Expertise",
                  description: "Proven experience across multiple sectors"
                },
                {
                  title: "Reliable Support",
                  description: "Comprehensive maintenance and technical assistance"
                }
              ].map((item, index) => (
                <div key={index} className="flex pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-10 text-white h-full">
            <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Customer Experience?</h3>
            <p className="text-lg mb-8 text-blue-100">
              Our team of experts is ready to help you implement kiosk solutions that drive engagement and efficiency.
            </p>
            <div className="space-y-4">
              <a
                href="/contact"
                className="flex items-center justify-between w-full bg-white text-blue-700 px-6 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <span>Schedule a Consultation</span>
                <FiArrowRight className="ml-2" />
              </a>
              <a
                href="/demo"
                className="flex items-center justify-between w-full bg-blue-800/50 text-white px-6 py-4 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                <span>Request a Demo</span>
                <FiChevronRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KioskSolutions;