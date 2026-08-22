import React, { useEffect } from 'react';
import {
  FiWifi, FiCpu, FiCloud, FiDatabase, FiShield, FiBarChart2,
  FiSettings, FiMonitor, FiSmartphone, FiActivity, FiServer,
  FiZap, FiLock, FiGlobe, FiPieChart, FiTrendingUp
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const IoTSolutions = () => {
  useEffect(() => {
    // Simple animation triggers
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
          el.classList.add('animate-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load

    return () => window.removeEventListener('scroll', handleScroll);
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
            Intelligent IOT Solutions
          </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90 ">
            Transform Your Business with <br className="hidden md:block" />Smart IoT Technology
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Connect, analyze, and optimize your operations with cutting-edge IoT solutions.
            From smart sensors to cloud analytics, we provide scalable systems for the connected world.
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
              src="https://images.pexels.com/photos/19089175/pexels-photo-19089175.jpeg"
              alt="Wearable Tech"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive IoT Solutions
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end services to connect, manage, and optimize your IoT ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IoT Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Our integrated platform combines hardware, connectivity, and intelligence
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/30 rounded-full z-0"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              <div className="space-y-10 animate-on-scroll">
                <div className="flex items-start space-x-6">
                  <div className="bg-white shadow-lg p-4 rounded-xl flex-shrink-0">
                    <FiWifi className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Connectivity</h3>
                    <p className="text-gray-600">
                      Seamless device connectivity with support for LoRaWAN, NB-IoT,
                      Bluetooth Mesh, and cellular networks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 animate-on-scroll animate-delay-100">
                  <div className="bg-white shadow-lg p-4 rounded-xl flex-shrink-0">
                    <FiCpu className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Edge Computing</h3>
                    <p className="text-gray-600">
                      Process data at the source with powerful edge devices for real-time
                      decision making and reduced latency.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center animate-on-scroll animate-delay-50">
                <div className="relative w-full max-w-xs">
                  <div className="bg-white rounded-2xl shadow-xl p-6 border-8 border-white">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-8 flex flex-col items-center justify-center h-64">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-6 floating">
                        <FiGlobe className="text-white text-4xl" />
                      </div>
                      <h3 className="text-xl font-bold text-white text-center">IoT Core Platform</h3>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full p-4">
                    <FiLock className="text-blue-600 text-2xl" />
                  </div>
                </div>
              </div>

              <div className="space-y-10 animate-on-scroll animate-delay-100">
                <div className="flex items-start space-x-6">
                  <div className="bg-white shadow-lg p-4 rounded-xl flex-shrink-0">
                    <FiCloud className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Cloud Platform</h3>
                    <p className="text-gray-600">
                      Scalable cloud infrastructure for data storage, processing,
                      and management with enterprise-grade security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 animate-on-scroll animate-delay-200">
                  <div className="bg-white shadow-lg p-4 rounded-xl flex-shrink-0">
                    <FiBarChart2 className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Analytics & AI</h3>
                    <p className="text-gray-600">
                      Advanced analytics and machine learning to transform raw data
                      into actionable business insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600">
              Transforming industries with smart IoT implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationsData.map((app, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                  {app.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IoT Solutions?
            </h2>
            <p className="text-xl text-blue-100">
              Drive innovation and efficiency with our comprehensive IoT ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/15 transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
              <p className="text-blue-100 mb-8">
                Our IoT experts will help you implement the perfect solution for your operational needs.
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
              <div className="absolute inset-0 bg-gradient-to-l from-blue-400/30 to-indigo-500/30"></div>
              <div className="flex items-center justify-center h-full p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 w-20 h-20 flex items-center justify-center">
                      <div className="w-6 h-6 bg-teal-400 rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data arrays
const servicesData = [
  {
    icon: <FiWifi className="text-blue-600 text-2xl" />,
    title: "IoT Connectivity",
    description: "Secure and reliable device connectivity solutions for any environment.",
    tags: ["LPWAN", "5G", "Bluetooth", "Satellite"]
  },
  {
    icon: <FiServer className="text-blue-600 text-2xl" />,
    title: "Edge Computing",
    description: "Process data at the source with our edge computing solutions.",
    tags: ["Real-time", "Low Latency", "On-device AI"]
  },
  {
    icon: <FiCloud className="text-blue-600 text-2xl" />,
    title: "Cloud Platform",
    description: "Scalable cloud infrastructure for IoT data management and storage.",
    tags: ["AWS", "Azure", "Google Cloud", "Hybrid"]
  },
  {
    icon: <FiDatabase className="text-blue-600 text-2xl" />,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our analytics platform.",
    tags: ["Predictive", "Real-time", "Machine Learning"]
  },
  {
    icon: <FiShield className="text-blue-600 text-2xl" />,
    title: "Security Solutions",
    description: "End-to-end security for your IoT ecosystem from device to cloud.",
    tags: ["Encryption", "Authentication", "Compliance"]
  },
  {
    icon: <FiSettings className="text-blue-600 text-2xl" />,
    title: "Integration Services",
    description: "Seamless integration with your existing systems and workflows.",
    tags: ["API", "ERP", "Legacy Systems"]
  }
];

const applicationsData = [
  {
    icon: <FiMonitor className="text-white text-4xl" />,
    title: "Smart Manufacturing",
    description: "Optimize production lines with real-time monitoring and predictive maintenance."
  },
  {
    icon: <FiZap className="text-white text-4xl" />,
    title: "Energy Management",
    description: "Reduce energy consumption with smart grids and automated systems."
  },
  {
    icon: <FiActivity className="text-white text-4xl" />,
    title: "Healthcare Monitoring",
    description: "Remote patient monitoring and connected medical devices."
  },
  {
    icon: <FiSmartphone className="text-white text-4xl" />,
    title: "Smart Cities",
    description: "Intelligent infrastructure for traffic, utilities, and public services."
  }
];

const benefitsData = [
  {
    icon: <FiTrendingUp className="text-3xl" />,
    title: "Operational Efficiency",
    description: "Automate processes and reduce manual intervention with smart IoT solutions."
  },
  {
    icon: <FiPieChart className="text-3xl" />,
    title: "Data-Driven Decisions",
    description: "Access real-time insights to make informed business decisions."
  },
  {
    icon: <FiLock className="text-3xl" />,
    title: "Enhanced Security",
    description: "Protect your systems with end-to-end encryption and security protocols."
  },
  {
    icon: <FiBarChart2 className="text-3xl" />,
    title: "Scalable Infrastructure",
    description: "Easily scale your IoT ecosystem as your business grows."
  },
  {
    icon: <FiDatabase className="text-3xl" />,
    title: "Predictive Maintenance",
    description: "Reduce downtime with AI-powered predictive maintenance systems."
  },
  {
    icon: <FiGlobe className="text-3xl" />,
    title: "Remote Management",
    description: "Monitor and control your assets from anywhere in the world."
  }
];

export default IoTSolutions;