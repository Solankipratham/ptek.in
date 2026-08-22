import React, { useState, useEffect } from 'react';
import { 
  FiMapPin, FiSmartphone, FiMap, FiWifi, FiBarChart2, 
  FiBell, FiNavigation, FiShoppingBag, FiTruck, 
  FiTarget, FiLayers, FiUsers, FiChevronRight 
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {  FiCheck, FiGlobe,
  FiUser, FiMessageSquare, FiClock, FiHelpCircle
} from 'react-icons/fi';

const LocationBasedServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % servicesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans overflow-x-hidden">
      {/* Hero Section with Optimized Background Image */}
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
            Location Intelligence
          </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90 ">
             Location for  <br className="hidden md:block" />Smarter Business
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
         Transform your operations with precision geolocation services, real-time tracking, and location-based customer engagement.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Start your Project  →
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
              src="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Wearable Tech"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Location-Based Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive suite of location services helps businesses engage customers, optimize operations, and drive growth.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {servicesData.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-md">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {React.createElement(servicesData[activeTab].icon, {
                    className: "text-blue-600 text-2xl"
                  })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{servicesData[activeTab].title}</h3>
                <p className="text-gray-600 text-lg mb-6">{servicesData[activeTab].description}</p>
                <ul className="space-y-3">
                  {servicesData[activeTab].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                        <FiChevronRight className="text-green-600 text-sm" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-xl border-8 border-white">
                <img 
                  src={servicesData[activeTab].image} 
                  alt={servicesData[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Tailored location services for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                    <solution.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{solution.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <ul className="space-y-2 mb-5">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded-full mt-1 mr-3">
                          <FiChevronRight className="text-blue-600 text-xs" />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
 {/* How It Works Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to implement location-based services in your business
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-12 lg:space-y-0">
              {stepsData.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col lg:flex-row items-center"
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:order-2'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                          {index + 1}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 ml-4">{step.title}</h3>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block relative lg:w-0">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white"></div>
                  </div>
                  
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:order-2 lg:pl-16' : 'lg:pr-16 lg:text-right'}`}>
                 <img
  src={step.image}
  alt={step.title}
  className="w-full h-48 object-cover rounded-xl border-2 border-gray-200"
/>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    {/* Features Section */}
<div className="py-20 px-6 bg-gray-100">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
      <p className="text-lg text-gray-600">Powerful tools that enable smarter, faster, and more informed location-based decisions.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        { icon: FiNavigation, title: 'Real-Time Navigation', desc: 'Deliver instant directions and dynamic routing.' },
        { icon: FiBell, title: 'Geofencing Alerts', desc: 'Trigger actions based on user location boundaries.' },
        { icon: FiBarChart2, title: 'Analytics Dashboard', desc: 'Monitor user behavior and movement trends.' }
      ].map((feature, i) => (
        <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 text-2xl">
            {React.createElement(feature.icon)}
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
          <p className="text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>

    {/* Testimonials Section */}
      <div className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-6">
               <img
  src={testimonial.image}
  alt={testimonial.name}
  className="w-16 h-16 rounded-full object-cover border-2 border-blue-200"
/>

                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </div>
  );
};

// Data Arrays with image URLs
const servicesData = [
  {
    icon: FiTarget,
    title: "Geofencing Solutions",
    description: "Create virtual boundaries to trigger real-time alerts and personalized customer engagement.",
    features: [
      "Location-based notifications",
      "Proximity marketing campaigns",
      "Automated entry/exit triggers",
      "Competitive location monitoring"
    ],
    image: "/auto.jpg"
  },
  {
    icon: FiNavigation,
    title: "Navigation Systems",
    description: "Advanced GPS navigation solutions for seamless user experiences.",
    features: [
      "Real-time route optimization",
      "Indoor navigation capabilities",
      "Turn-by-turn directions",
      "Traffic pattern analysis"
    ],
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    icon: FiMapPin,
    title: "Location Intelligence",
    description: "Transform geospatial data into actionable business insights.",
    features: [
      "Heatmap visualization",
      "Demographic analysis",
      "Territory planning",
      "Site selection optimization"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    icon: FiTruck,
    title: "Asset Tracking",
    description: "Monitor and manage assets in real-time across global operations.",
    features: [
      "Real-time location updates",
      "Geo-fenced alerts",
      "Movement history",
      "Maintenance scheduling"
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];


const featuresData = [
  {
    icon: FiGlobe,
    title: "Global Coverage",
    description: "Access location services anywhere in the world",
    benefits: [
      "Worldwide mapping data",
      "Multi-language support",
      "Regional customization",
      "24/7 availability"
    ]
  },
  {
    icon: FiBarChart2,
    title: "Advanced Analytics",
    description: "Gain insights from your location data",
    benefits: [
      "Real-time dashboards",
      "Customizable reports",
      "Predictive analytics",
      "Data visualization tools"
    ]
  },
  {
    icon: FiWifi,
    title: "Seamless Integration",
    description: "Connect with your existing systems",
    benefits: [
      "API-first architecture",
      "Pre-built connectors",
      "Custom integration options",
      "Webhook support"
    ]
  }
];
const stepsData = [
  {
    title: "Define Goals",
    description: "Identify what your business aims to achieve using location-based services.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Integrate APIs",
    description: "Connect our powerful geolocation APIs with your existing platforms.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Monitor & Optimize",
    description: "Continuously analyze and refine your location strategy using real-time insights.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];
const testimonialsData = [
  {
    name: "Sophia Patel",
    position: "CTO, TechBridge Inc.",
    quote: "The integration process was seamless and the support team was outstanding!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Liam Nguyen",
    position: "Product Manager, InnovateX",
    quote: "The platform helped us optimize logistics like never before.",
    image: "https://randomuser.me/api/portraits/men/35.jpg"
  },
  {
    name: "Emily Rivera",
    position: "CEO, UrbanGrid",
    quote: "Exceptional accuracy and impressive customization options!",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const solutionsData = [
  {
    icon: FiShoppingBag,
    title: "Retail & Commerce",
    description: "Enhance customer experiences with location-based services.",
    features: [
      "In-store navigation",
      "Personalized offers",
      "Proximity marketing",
      "Heatmap analytics"
    ],
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    icon: FiTruck,
    title: "Logistics & Supply Chain",
    description: "Optimize delivery routes and fleet management.",
    features: [
      "Real-time tracking",
      "Route optimization",
      "Geofenced alerts",
      "Delivery ETAs"
    ],
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    icon: FiUsers,
    title: "Field Services",
    description: "Improve field workforce efficiency and productivity.",
    features: [
      "Technician tracking",
      "Job dispatching",
      "Route planning",
      "Time-on-site monitoring"
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];



export default LocationBasedServices;