import React from 'react';
import {
  FiMap, FiGlobe, FiLayers, FiDatabase, FiBarChart2,
  FiTarget, FiSmartphone, FiSettings, FiTool,
  FiShield, FiTrendingUp, FiUser, FiPlay,
  FiServer, FiCamera, FiNavigation, FiCloud, FiGrid
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GISWebsite = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="w-full px-6 lg:px-24 py-28 flex flex-col lg:flex-row items-center justify-between">
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
            Geospatial Intelligence
          </motion.p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90">
            Transform World with <br className="hidden md:block" />GIS Solutions
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Unlock the power of location intelligence with our cutting-edge GIS platform.
            From spatial analysis to real-time mapping, we provide scalable solutions to meet
            your unique geospatial challenges.
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
            <div className="absolute -inset-4  rounded-2xl transform rotate-3 opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1617581629397-a72507c3de9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
              alt="Fraud Protection"
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
              Comprehensive GIS Services
            </h2>
            <p className="text-xl text-gray-600">
              We provide end-to-end solutions to transform spatial data into actionable intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiDatabase className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Spatial Data Management</h3>
                  <p className="text-gray-600">
                    Efficiently store, organize, and manage vast geospatial datasets with our robust database solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiLayers className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cartography & Visualization</h3>
                  <p className="text-gray-600">
                    Create stunning, informative maps that communicate complex spatial relationships clearly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiBarChart2 className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Geospatial Analysis</h3>
                  <p className="text-gray-600">
                    Uncover patterns and insights with advanced spatial statistics and modeling techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="GIS data visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1796&q=80"
                  alt="Mobile GIS application"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiTarget className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Location Intelligence</h3>
                  <p className="text-gray-600">
                    Transform raw location data into strategic business insights for better decision-making.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiSmartphone className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Mobile GIS</h3>
                  <p className="text-gray-600">
                    Field data collection and mapping solutions that work anywhere, anytime.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiTool className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Custom GIS Development</h3>
                  <p className="text-gray-600">
                    Tailored solutions designed to meet your specific workflow requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              EXPLORE GIS SOLUTIONS
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced GIS Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Our platform delivers powerful tools for spatial analysis and visualization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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

      {/* Data Sources Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrated Data Sources
            </h2>
            <p className="text-xl text-gray-600">
              We connect to multiple geospatial data providers for comprehensive coverage
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center hover:bg-blue-50 transition-colors">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {source.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{source.name}</h3>
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
              Why Choose Our GIS Solutions?
            </h2>
            <p className="text-xl text-blue-100">
              We deliver measurable results through expertise and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all">
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

      {/* Industries Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Our GIS solutions transform operations across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesData.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-all">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Spatial Strategy?</h3>
              <p className="text-blue-100 mb-8">
                Our GIS experts will help you implement the perfect solution for your needs.
              </p>
           <div className="flex flex-col sm:flex-row gap-4">
  <Link to="/contactsection">
    <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
      Get Started
    </button>
  </Link>

  <Link to="/contactsection">
    <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300">
      Schedule a Demo
    </button>
  </Link>
</div>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1796&q=80"
                alt="GIS mapping interface"
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
    icon: <FiMap className="text-blue-600 text-xl" />,
    title: "Interactive Mapping",
    description: "Create dynamic, interactive maps with multiple data layers and visualization options.",
    image: "https://images.unsplash.com/photo-1617581629397-a72507c3de9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
  },
  {
    icon: <FiDatabase className="text-blue-600 text-xl" />,
    title: "Data Integration",
    description: "Seamlessly combine spatial data from multiple sources into unified datasets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    icon: <FiBarChart2 className="text-blue-600 text-xl" />,
    title: "Spatial Analytics",
    description: "Perform complex geospatial analysis to uncover patterns and relationships.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1700&q=80"
  },
  {
    icon: <FiNavigation className="text-blue-600 text-xl" />,
    title: "Real-time Tracking",
    description: "Monitor assets and personnel in real-time with our location tracking solutions.",
    image: "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80"
  }
];

const dataSources = [
  {
    icon: <FiGlobe className="text-blue-600 text-2xl" />,
    name: "Satellite"
  },
  {
    icon: <FiCamera className="text-blue-600 text-2xl" />,
    name: "Aerial"
  },
  {
    icon: <FiLayers className="text-blue-600 text-2xl" />,
    name: "LIDAR"
  },
  {
    icon: <FiServer className="text-blue-600 text-2xl" />,
    name: "IoT Sensors"
  },
  {
    icon: <FiGrid className="text-blue-600 text-2xl" />,
    name: "Open Data"
  },
  {
    icon: <FiCloud className="text-blue-600 text-2xl" />,
    name: "Cloud Storage"
  }
];

const benefitsData = [
  {
    icon: <FiShield className="text-3xl" />,
    title: "Enterprise Security",
    description: "Military-grade encryption and access controls for sensitive spatial data."
  },
  {
    icon: <FiTrendingUp className="text-3xl" />,
    title: "Operational Efficiency",
    description: "Automate workflows and reduce manual data processing by up to 70%."
  },
  {
    icon: <FiUser className="text-3xl" />,
    title: "User-Friendly",
    description: "Intuitive interfaces that require minimal GIS expertise to operate."
  },
  {
    icon: <FiSettings className="text-3xl" />,
    title: "Customizable",
    description: "Tailor-made solutions designed for your specific industry needs."
  }
];

const industriesData = [
  {
    icon: <FiTool className="text-blue-600 text-xl" />,
    name: "Urban Planning",
    description: "Design smarter cities with spatial analysis and 3D modeling"
  },
  {
    icon: <FiGlobe className="text-blue-600 text-xl" />,
    name: "Environmental",
    description: "Monitor ecosystems and track environmental changes"
  },
  {
    icon: <FiBarChart2 className="text-blue-600 text-xl" />,
    name: "Agriculture",
    description: "Precision farming with crop health monitoring"
  },
  {
    icon: <FiTarget className="text-blue-600 text-xl" />,
    name: "Utilities",
    description: "Manage infrastructure and optimize resource allocation"
  }
];

export default GISWebsite;