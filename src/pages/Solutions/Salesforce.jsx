import React from 'react';
import {
  FiCloud, FiUsers, FiBarChart2, FiShoppingBag,
  FiMessageSquare, FiGlobe, FiShield, FiTarget,
  FiDatabase, FiSmartphone, FiSettings, FiCode,
  FiTool, FiTrendingUp, FiThumbsUp
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const SalesforceCRM = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      {/* Hero Section with Salesforce branding */}
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
            Salesforce CRM Solution         
            </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90 ">
            Transform Your Business with <br className="hidden md:block" /> Salesforce CRM
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Unify your customer data, automate workflows, and drive growth with the world's #1 CRM platform.
            Salesforce helps you connect with your customers in a whole new way.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Start Free Trial →
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
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Wearable Tech"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>
      {/* Salesforce Cloud Solutions */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Salesforce Cloud Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive CRM solutions tailored to every aspect of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudSolutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 ${solution.colorClass}`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mt-1 mr-2">
                        <div className="w-4 h-4 rounded-full bg-[#00A1E0] flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful CRM Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage customer relationships effectively
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-10">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center relative">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Salesforce dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Real-time Customer Insights</h3>
                    <p className="mt-2">Unified view of all customer interactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Salesforce mobile app"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Mobile CRM Access</h3>
                    <p className="mt-2">Manage your business from anywhere</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              {features.slice(3, 6).map((feature, index) => (
                <div key={index} className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Salesforce CRM?
            </h2>
            <p className="text-xl text-blue-100">
              Transform your business with the world's most trusted CRM platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
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

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Hear from companies that transformed their business with Salesforce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-8">
                Our Salesforce experts will help you implement the perfect CRM solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#00A1E0] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg">
                  Start Free Trial
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
                  Schedule a Demo
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Salesforce dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-[#00A1E0]/30 to-[#032D60]/30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data arrays
const cloudSolutions = [
  {
    icon: <FiUsers className="text-white text-2xl" />,
    title: "Sales Cloud",
    description: "Close deals faster and boost productivity with AI-powered sales tools",
    colorClass: "bg-[#00A1E0]",
    features: [
      "Lead and opportunity management",
      "AI-powered sales forecasting",
      "Pipeline visibility",
      "Sales automation"
    ]
  },
  {
    icon: <FiMessageSquare className="text-white text-2xl" />,
    title: "Service Cloud",
    description: "Deliver exceptional customer service across every channel",
    colorClass: "bg-[#4A154B]",
    features: [
      "Omnichannel customer support",
      "AI-powered case routing",
      "Self-service portals",
      "Field service management"
    ]
  },
  {
    icon: <FiGlobe className="text-white text-2xl" />,
    title: "Marketing Cloud",
    description: "Create personalized customer journeys at scale",
    colorClass: "bg-[#ED1C24]",
    features: [
      "Customer journey builder",
      "Email and social marketing",
      "AI-powered personalization",
      "Campaign analytics"
    ]
  },
  {
    icon: <FiDatabase className="text-white text-2xl" />,
    title: "Commerce Cloud",
    description: "Unify commerce experiences across all channels",
    colorClass: "bg-[#FF9E1B]",
    features: [
      "B2B and B2C commerce",
      "AI-powered product recommendations",
      "Unified inventory management",
      "Order management system"
    ]
  }
];

const features = [
  {
    icon: <FiBarChart2 className="text-blue-600 text-xl" />,
    title: "360° Customer View",
    description: "Get a complete view of every customer across all touchpoints and interactions."
  },
  {
    icon: <FiTarget className="text-blue-600 text-xl" />,
    title: "AI-Powered Insights",
    description: "Leverage Einstein AI to predict outcomes and recommend next best actions."
  },
  {
    icon: <FiShield className="text-blue-600 text-xl" />,
    title: "Enterprise Security",
    description: "Trusted by enterprises with world-class security and compliance certifications."
  },
  {
    icon: <FiSmartphone className="text-blue-600 text-xl" />,
    title: "Mobile CRM",
    description: "Access your CRM from anywhere with our powerful mobile applications."
  },
  {
    icon: <FiSettings className="text-blue-600 text-xl" />,
    title: "Customizable Platform",
    description: "Tailor Salesforce to your unique business processes with clicks, not code."
  },
  {
    icon: <FiCode className="text-blue-600 text-xl" />,
    title: "Extensive Integrations",
    description: "Connect Salesforce with thousands of apps through our robust ecosystem."
  }
];

const benefitsData = [
  {
    icon: <FiTrendingUp className="text-3xl" />,
    title: "Increase Sales Productivity",
    description: "Automate tasks and focus on selling with AI-powered tools that boost productivity by up to 30%."
  },
  {
    icon: <FiThumbsUp className="text-3xl" />,
    title: "Enhance Customer Satisfaction",
    description: "Deliver personalized experiences that increase customer satisfaction and loyalty."
  },
  {
    icon: <FiTool className="text-3xl" />,
    title: "Streamline Operations",
    description: "Automate workflows and eliminate silos to create more efficient business processes."
  },
  {
    icon: <FiBarChart2 className="text-3xl" />,
    title: "Make Data-Driven Decisions",
    description: "Transform data into actionable insights with real-time analytics and dashboards."
  },
  {
    icon: <FiGlobe className="text-3xl" />,
    title: "Scale Globally",
    description: "Expand into new markets with a platform that supports multiple languages and currencies."
  },
  {
    icon: <FiCloud className="text-3xl" />,
    title: "Always Up-to-Date",
    description: "Benefit from continuous innovation with our regular, seamless updates."
  }
];

const testimonials = [
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Sarah Johnson",
    position: "VP of Sales, TechCorp",
    quote: "Salesforce transformed our sales process. We've seen a 35% increase in closed deals since implementation.",
    rating: 5
  },
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Michael Rodriguez",
    position: "Customer Service Director, Global Retail",
    quote: "The Service Cloud reduced our case resolution time by 40% and increased customer satisfaction scores.",
    rating: 5
  },
  {
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Jennifer Lee",
    position: "Marketing Director, HealthPlus",
    quote: "With Marketing Cloud, we've achieved 3x higher engagement rates through personalized campaigns.",
    rating: 4
  }
];

export default SalesforceCRM;