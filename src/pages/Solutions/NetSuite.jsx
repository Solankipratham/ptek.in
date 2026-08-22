import React from 'react';
import { 
  FiUsers, FiCheckCircle, FiSettings, FiTool, 
  FiBarChart2, FiTrendingUp, FiDatabase, FiShield,
  FiDollarSign, FiShoppingBag, FiTruck, FiPackage
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const NetSuite = () => {
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
            Netsuite Payment Solutions
          </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90 ">
              NetSuite Solution for  <br className="hidden md:block" />  Business Growth
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Unlock the power of NetSuite ERP with tailored solutions designed to streamline business processes, 
              enhance productivity, and drive sustainable growth.
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
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Wearable Tech"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              NetSuite Certified Alliance Partners
            </h2>
            <p className="text-xl text-gray-600">
              As a NetSuite Certified Alliance Partner, we offer complete implementation, consultation, 
              integration, customization, and support services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-xl rounded-xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" 
                  alt="NetSuite Dashboard"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <FiUsers className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">NetSuite Consulting</h3>
                <p className="text-gray-600">
                  Certified NetSuite Consultants with demonstrated industry & software expertise.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <FiCheckCircle className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Customization</h3>
                <p className="text-gray-600">
                  Custom NetSuite solutions to streamline workflows and optimize processes.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <FiSettings className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Implementation</h3>
                <p className="text-gray-600">
                  Define and configure the best solution for maximum business efficiency.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-md">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-5">
                  <FiTool className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Support</h3>
                <p className="text-gray-600">
                  Ongoing support, management, and maintenance of your NetSuite system.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
              GET NETSUITE SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive NetSuite Services
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end solutions to optimize your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="text-blue-600 font-medium mt-4 flex items-center group">
                    Learn more 
                    <FiTrendingUp className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our NetSuite Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              We deliver measurable results through expertise and tailored approaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-md">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-blue-100">
              Tailored NetSuite implementations for your business sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industriesData.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold">{industry.name}</h3>
                </div>
                <ul className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FiCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Integration Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              We connect NetSuite with your existing business ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrationsData.map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md flex items-center justify-center">
                <img 
                  src={integration.logo} 
                  alt={integration.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
              <p className="text-gray-600 mb-8">
                Our NetSuite experts will help you implement the perfect solution for your business needs.
              </p>
            <div className="flex flex-col sm:flex-row gap-4">
  <Link to="/contactsection">
    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
      Get Started
    </button>
  </Link>

  <Link to="/schedule-demo">
    <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
      Schedule a Demo
    </button>
  </Link>
</div>
            </div>
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data arrays with image URLs
const servicesData = [
  {
    title: "Implementation",
    description: "Get started with NetSuite seamlessly with our expert implementation services.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Customization",
    description: "Tailor NetSuite to your unique business requirements and workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80"
  },
  {
    title: "Integration",
    description: "Connect NetSuite with your existing systems for seamless data flow.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Support",
    description: "24/7 expert support to keep your NetSuite system running smoothly.",
    image: "https://images.unsplash.com/photo-1585241936939-be4099591252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

const benefitsData = [
  {
    icon: <FiUsers className="text-blue-600 text-xl" />,
    title: "Certified Experts",
    description: "NetSuite-certified professionals with extensive industry experience."
  },
  {
    icon: <FiShield className="text-blue-600 text-xl" />,
    title: "Proven Methodology",
    description: "Industry best practices for successful implementations."
  },
  {
    icon: <FiBarChart2 className="text-blue-600 text-xl" />,
    title: "End-to-End Solutions",
    description: "From planning to post-implementation support."
  },
  {
    icon: <FiTrendingUp className="text-blue-600 text-xl" />,
    title: "Business Growth",
    description: "Solutions that help you scale operations and drive growth."
  }
];

const industriesData = [
  {
    name: "Retail",
    icon: <FiShoppingBag className="text-blue-600 text-xl" />,
    features: [
      "Inventory optimization",
      "Omnichannel sales",
      "Customer analytics",
      "E-commerce integration"
    ]
  },
  {
    name: "Manufacturing",
    icon: <FiPackage className="text-blue-600 text-xl" />,
    features: [
      "Supply chain management",
      "Production planning",
      "Quality control",
      "Shop floor control"
    ]
  },
  {
    name: "Services",
    icon: <FiTool className="text-blue-600 text-xl" />,
    features: [
      "Resource management",
      "Project accounting",
      "Time tracking",
      "Billing automation"
    ]
  },
  {
    name: "Distribution",
    icon: <FiTruck className="text-blue-600 text-xl" />,
    features: [
      "Warehouse management",
      "Order fulfillment",
      "Logistics optimization",
      "Demand planning"
    ]
  }
];

const integrationsData = [
  { 
    name: "Salesforce", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" 
  },
  { 
    name: "Shopify", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg" 
  },
  { 
    name: "Stripe", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" 
  },
  { 
    name: "Workday", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" 
  },
  { 
    name: "Zendesk", 
    logo: "https://web-assets.zendesk.com/images/navigation/header/zendesk-logo.svg" 
  },
  { 
    name: "Adobe Commerce", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"

  }
];

export default NetSuite;