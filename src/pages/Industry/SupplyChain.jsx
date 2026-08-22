import React from 'react';
import { Link } from "react-router-dom";

const SupplyChain = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative  text-white">
        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="block">Supply Chain Management</span>
              <span className="text-black">Software Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-900 mb-8 leading-relaxed">
              Our company specializes in developing custom software solutions tailored for supply chain management. We offer a comprehensive suite of services designed to enhance operational efficiency, improve decision-making, and drive profitability across the entire supply chain.
            </p>
            <Link 
              to={"/contactsection"} 
              className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project →
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-blue-600 rounded-xl w-80 h-80 absolute -top-6 -left-6 z-0"></div>
              <div className="bg-blue-500 rounded-xl w-80 h-80 absolute -bottom-6 -right-6 z-0"></div>
              <div className="relative z-10 bg-gray-200 border-2 border-dashed rounded-xl w-72 h-72" />
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-blue-700 opacity-20"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-blue-600 opacity-15"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-blue-800 opacity-10"></div>
        </div>
      </section>

      {/* SCM Software Development Section */}
  <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Supply Chain Management (SCM) Software Development
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We develop SCM software to enable inventory management, electronic data interchange (EDI), material requirements planning (MRP), order management systems (OMS), and more.
      </p>
    </div>

    <div className="flex flex-col md:flex-row gap-12 items-center">
      
      {/* Image Section */}
      <div className="md:w-1/2">
        <div className="bg-white rounded-xl shadow-lg p-2">
          <img
            src="/tobias-CyX3ZAti5DA-unsplash.jpg" // Replace this with your actual image path or URL
            alt="SCM Illustration"
            className="rounded-xl w-full h-64 object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="md:w-1/2">
        <ul className="space-y-6">
          <li className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Inventory & Manufacturing Processes</h3>
              <p className="text-gray-600">We implement analytical and material planning tools within your SCM workflows to manage end-to-end inventory and manufacturing processes.</p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Shipping & Logistics Support</h3>
              <p className="text-gray-600">We integrate custom shipping & logistics modules to manage all functions needed for LTL, TL, and intermodal freight operations.</p>
            </div>
          </li>

          <li className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Reverse Logistics Management</h3>
              <p className="text-gray-600">We incorporate logistics and return logistics post-delivery customer support processes to minimize relationship disturbances.</p>
            </div>
          </li>
        </ul>

        <div className="mt-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Get SCM Solutions
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* AI-Enabled Supply Chain Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              AI-Enabled Supply Chain Software Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI experts can create custom software solutions that leverage AI in supply chain and logistics to enable capabilities such as predictive forecasting, AI-powered inventory management, route optimization, and smart warehouse management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8 transition-all hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Predictive Forecasting</h3>
              </div>
              <p className="text-gray-600">
                Leverage market trends, historical data, and other external sources to provide cutting-edge predictive forecasting. Accurately anticipate demand through pattern recognition.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 transition-all hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">AI-Powered Inventory Management</h3>
              </div>
              <p className="text-gray-600">
                Monitor real-time inventory levels, proactively respond to market changes, and streamline your supply chain operations with AI assistance.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 transition-all hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Streamlining Operations with RPA</h3>
              </div>
              <p className="text-gray-600">
                Automate tasks like order processing and invoice generation using robotic process automation (RPA) to minimize manual errors.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 transition-all hover:shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Enhanced Decision Making with AI Assistance</h3>
              </div>
              <p className="text-gray-600">
                Provide intelligent real-time support for strategic and tactical decision-making with AI-enabled tools.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Get AI Enabled SCM Solutions
            </button>
          </div>
        </div>
      </section>

      {/* SCM Inventory Management Section */}
  



      {/* Service Areas */}
  <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Comprehensive Supply Chain Solutions
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We provide end-to-end solutions covering all aspects of supply chain management
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Inventory Management */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
        <div className="h-48 bg-blue-100 flex items-center justify-center">
          <img
            src="/supply3.webp"  // Change this to your image path
            alt="Inventory Management"
            className="w-16 h-16 object-cover rounded-xl"
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Inventory Management Software Solutions</h3>
          <p className="text-gray-600 mb-6">
            Our inventory management solutions ensure stock synchronization, full visibility, and precise quantity adjustments, utilizing RFID and QR code scanners to identify supply chain inventory items.
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Real-time inventory tracking</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Automated stock replenishment</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Integration with existing business systems</span>
            </li>
          </ul>
          <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
            Learn More
            <svg className="h-5 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Warehouse Management */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
        <div className="h-48 bg-blue-100 flex items-center justify-center">
          <img
            src="/supply1.webp"  // Change this to your image path
            alt="Warehouse Management"
            className="w-16 h-16 object-cover rounded-xl"
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Warehouse Management Software Solutions</h3>
          <p className="text-gray-600 mb-6">
            Our warehouse management systems optimize stock management, inventory status updates, and channel-specific stocking, ensuring efficient warehouse operations.
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Seamless stock management</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Inventory status updates</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Channel-specific stocking</span>
            </li>
          </ul>
          <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
            Learn More
            <svg className="h-5 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Shipping & Logistics */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
        <div className="h-48 bg-blue-100 flex items-center justify-center">
          <img
            src="/supply2.webp"  // Change this to your image path
            alt="Shipping and Logistics"
            className="w-16 h-16 object-cover rounded-xl"
          />
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Shipping & Logistics Software Solutions</h3>
          <p className="text-gray-600 mb-6">
            Our shipping and logistics solutions enable real-time tracking and monitoring of product shipments, deliveries, and fuel supply, enhancing supply chain visibility.
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Real-time tracking</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Delivery monitoring</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fuel supply management</span>
            </li>
          </ul>
          <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
            Learn More
            <svg className="h-5 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Custom Solutions Section */}
      <section className="py-20  text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Custom Supply Chain Management (SCM) Software Solutions
            </h2>
            <p className="text-xl text-blue-900 max-w-3xl mx-auto">
              Ptek's custom supply chain management (SCM) software solutions offer a streamlined, automated, and highly interoperable approach to all of your operational workflows and business processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Card 1 */}
            <div className=" shadow-lg rounded-xl p-8 transition-all hover:scale-105">
              <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Multi-Channel Inventory Solutions</h3>
              <p className="text-blue-900">
                Ptek builds custom inventory management solutions that sync across multiple channels, locations, and warehouses using RFID barcodes and QR code scanners.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="shadow-lg rounded-2xl p-8 transition-all hover:scale-105">
              <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Order Management Solutions</h3>
              <p className="text-blue-900">
                We develop custom order management software solutions with seamless integrations of orders from multiple inventory channels across the entire order fulfillment network.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className=" shadow-lg rounded-2xl p-8 transition-all hover:scale-105">
              <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Fleet Management Solutions</h3>
              <p className="text-blue-900">
                We integrate custom fleet management software into your SCM solution for full visibility and control over GPS fleet tracking, maintenance, fuel, assets, and telematics.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="shadow-lg rounded-2xl p-8 transition-all hover:scale-105">
              <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Warehouse Management Solutions</h3>
              <p className="text-blue-900">
                We design, develop, and integrate warehouse management solutions into your current business systems to maintain peak efficiency and control throughout your entire warehouse.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between  rounded-2xl p-8">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Supply Chain?</h3>
              <p className="text-blue-900">
                Our experienced team is ready to help you build custom SCM solutions tailored to your business needs. Contact us today to discuss your project.
              </p>
            </div>
            <div className="md:w-1/3">
              <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-lg w-full hover:bg-blue-100 transition">
                Get SCM Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Transform Your Supply Chain Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Partner with us to develop customized software solutions that meet the unique needs of your supply chain. Our team is dedicated to delivering high-quality, scalable, and user-friendly applications that drive efficiency and enhance decision-making.
          </p>
          <Link
            to={"/contactsection"}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SupplyChain;