import React from "react";
import {
  FaTools,
  FaSyncAlt,
  FaCogs,
  FaWrench,
  FaOilCan,
  FaShieldAlt,
  FaChartLine,
  FaRobot,
  FaHeadset,
  FaFaucet,
  FaTachometerAlt,
  FaFileAlt,
  FaCheck
} from "react-icons/fa";

import { Link } from "react-router-dom";

const OilGas = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative text-black">
        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Oil & Gas Software Solutions
            </h1>
            <p className="text-xl mb-8 text-blue-00 leading-relaxed">
              Our company specializes in developing custom software solutions
              tailored for the oil and gas industry. We offer a comprehensive
              suite of services designed to enhance operational efficiency,
              improve safety protocols, and optimize production processes,
              enabling companies to navigate the complexities of the energy sector
              effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={"/contactsection"} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition duration-300 text-lg font-medium flex items-center justify-center">
                Start Your Project →
              </Link>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg transition duration-300 text-lg font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-blue-800 rounded-xl w-full h-full absolute -bottom-4 -right-4 z-0"></div>
              <div className="relative z-10">
                <img 
                  src="/oil&gas.jpg" 
                  alt="Oil Rig" 
                  className="rounded-xl shadow-2xl w-full max-w-lg"
                />
               
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-800 bg-opacity-30 rounded-xl">
              <p className="text-3xl font-bold">200+</p>
              <p className="text-blue-200">Projects Completed</p>
            </div>
            <div className="text-center p-6 bg-blue-800 bg-opacity-30 rounded-xl">
              <p className="text-3xl font-bold">98%</p>
              <p className="text-blue-200">Client Satisfaction</p>
            </div>
            <div className="text-center p-6 bg-blue-800 bg-opacity-30 rounded-xl">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-blue-200">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-blue-800 bg-opacity-30 rounded-xl">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-blue-200">Industry Experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Oil and Gas Software Development Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ptek creates fully integrated oil & gas software that connects
              upstream, midstream, and downstream operations in a fully loaded &
              comprehensive platform.
            </p>
          </div>

          {/* Icons Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md text-center transition-transform hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaOilCan className="text-blue-600 text-2xl" />
              </div>
              <p className="text-gray-800 font-semibold">Upstream</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center transition-transform hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaRobot className="text-blue-600 text-2xl" />
              </div>
              <p className="text-gray-800 font-semibold">AI-Powered Solutions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center transition-transform hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaFaucet className="text-blue-600 text-2xl" />
              </div>
              <p className="text-gray-800 font-semibold">Midstream</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center transition-transform hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCogs className="text-blue-600 text-2xl" />
              </div>
              <p className="text-gray-800 font-semibold">Custom ERP</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center transition-transform hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeadset className="text-blue-600 text-2xl" />
              </div>
              <p className="text-gray-800 font-semibold">IT Support</p>
            </div>
          </div>

          {/* AI Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Leveraging AI to Enhance Oil & Gas Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                At Ptek, we offer tailored AI-powered solutions that aim to
                transform your processes for the better.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mt-1 mr-4">
                    <FaTools className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">
                      AI-Enabled Field Service Management
                    </h4>
                    <p className="text-gray-600">
                      Being efficient at field service management with advanced
                      maintenance algorithms ensures better control over
                      operations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mt-1 mr-4">
                    <FaChartLine className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">
                      Refinery Performance Boost with AI
                    </h4>
                    <p className="text-gray-600">
                      AI-enabled solutions boost refinery performance by
                      predicting failures and optimizing operations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mt-1 mr-4">
                    <FaTachometerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg">
                      AI-Driven Midstream & Downstream Solutions
                    </h4>
                    <p className="text-gray-600">
                      Streamline supply chain logistics with AI-powered
                      forecasting and compliance systems.
                    </p>
                  </div>
                </li>
              </ul>
              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
                Get Oil Production Software
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-blue-100 rounded-xl w-full h-full absolute -bottom-4 -right-4 z-0"></div>
                <img
                  src="/sarah-dorweiler-QeVmJxZOv3k-unsplash.jpg"
                  alt="AI in Oil & Gas"
                  className="relative z-10 rounded-xl shadow-lg max-w-full"
                />
              </div>
            </div>
          </div>

          {/* Upstream Solutions */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Custom Upstream Software Solutions
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="bg-blue-100 rounded-xl w-full h-full absolute -bottom-4 -right-4 z-0"></div>
                  <img
                    src="/oil&gas.jpg"
                    alt="Upstream Solutions"
                    className="relative z-10 rounded-xl shadow-lg max-w-full"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mt-1 mr-4">
                      <FaOilCan className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">
                        Oil & Gas Production Software
                      </h4>
                      <p className="text-gray-600">
                        Our custom upstream oil & gas software solutions are
                        built with geophysical modeling software, HDD
                        directional drilling software, daily drilling report
                        software, and more.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mt-1 mr-4">
                      <FaTools className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">
                        Field Service Management Software
                      </h4>
                      <p className="text-gray-600">
                        We engineer feature-rich field service management
                        applications with built-in GPS functionality,
                        automated time & date stamping, and more.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mt-1 mr-4">
                      <FaChartLine className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">
                        Oil & Gas Analytics Software
                      </h4>
                      <p className="text-gray-600">
                        Our team programs automated production analytics and
                        reporting modules for real-time forecasting, lifecycle
                        tracking, and more.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mt-1 mr-4">
                      <FaFileAlt className="text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">
                        Land Management Software
                      </h4>
                      <p className="text-gray-600">
                        Seamlessly integrate cloud-based land management
                        systems with your ERP system to optimize land
                        agreements, automate workflows, and more.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-8">
              Ptek designs custom exploration & production (E&P) software
              solutions to enhance productivity and minimize risks.
            </p>
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
              Get Upstream Software Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Oil & Gas Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end solutions for every aspect of the oil and gas industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Upstream Solutions */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200">
              <div className="bg-blue-100 p-4 rounded-lg mb-6">
                <FaOilCan className="text-blue-600 text-3xl mx-auto" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Upstream Solutions
              </h2>
              <p className="text-gray-600 mb-4">
                Our upstream solutions streamline exploration and production
                activities, from seismic data analysis to drilling operations,
                ensuring efficient resource extraction.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Seismic data processing</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Drilling optimization</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Reservoir management</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Well planning</span>
                </li>
              </ul>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition">
                Learn More →
              </button>
            </div>

            {/* Midstream Solutions */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200">
              <div className="bg-blue-100 p-4 rounded-lg mb-6">
                <FaFaucet className="text-blue-600 text-3xl mx-auto" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Midstream Solutions
              </h2>
              <p className="text-gray-600 mb-4">
                Our midstream solutions enhance the transportation and storage of
                oil and gas, ensuring safe and efficient movement of resources from
                production sites to refineries.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Pipeline monitoring</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Logistics management</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Storage facility optimization</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Compliance tracking</span>
                </li>
              </ul>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition">
                Learn More →
              </button>
            </div>

            {/* Downstream Solutions */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200">
              <div className="bg-blue-100 p-4 rounded-lg mb-6">
                <FaCogs className="text-blue-600 text-3xl mx-auto" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Downstream Solutions
              </h2>
              <p className="text-gray-600 mb-4">
                Our downstream solutions focus on refining processes, distribution,
                and marketing, ensuring high-quality products and compliance with
                industry standards.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Refinery scheduling</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Supply chain management</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Energy trading platforms</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span className="text-gray-700">Quality control systems</span>
                </li>
              </ul>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Solutions */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Optimizing Oil & Gas Operations With Custom ERP Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in customized ERP software solutions, offering
              expertise in tailoring systems to meet the specific needs of diverse
              industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Section 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaCogs className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Streamlined Efficiency Through ERP Customization
                </h3>
              </div>
              <p className="text-gray-600">
                ERP for oil and gas industries integrates data from various
                departments, ensuring accuracy and eliminating silos. It plays a
                vital role in compliance management, automating reporting
                processes to meet regulatory requirements, including finance and
                billing.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaSyncAlt className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Seamless Integration for Real-Time Insights
                </h3>
              </div>
              <p className="text-gray-600">
                ERP systems are crucial for streamlined business operations.
                Integrating CRMs enhances customer-centric processes, IoT cloud
                enables real-time data collection, and CMMMs ensure proactive
                maintenance.
              </p>
            </div>

            {/* Section 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaTools className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  ERP Software Integrations
                </h3>
              </div>
              <p className="text-gray-600">
                We provide scalable ERP integrations tailored to businesses of
                various sizes. Our solutions encompass industry-leading SaaS
                solutions such as Oracle Netsuite, SAP Business ByDesign, and
                more.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaWrench className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Tailoring Functionality to Industry Needs
                </h3>
              </div>
              <p className="text-gray-600">
                ERP customization allows systems to be tailored to specific
                needs. Asset management tracks assets throughout their
                lifecycle, including predictive maintenance and IoT integration.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaOilCan className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Specialized ERP Services For Oil & Gas
                </h3>
              </div>
              <p className="text-gray-600">
                Chetu is a leader in end-to-end solutions in ERP services,
                offering expertise in consulting, implementation, integration,
                migration, customization, testing, support, and maintenance.
              </p>
            </div>

            {/* Section 6 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaShieldAlt className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Enhanced Data Security Measures
                </h3>
              </div>
              <p className="text-gray-600">
                Our experts can develop custom ERP solutions that help you
                safeguard your critical oil & gas data. We implement robust
                security measures such as encryption, data backups, and access
                controls.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 inline-flex items-center">
              GET OIL & GAS ERP SOLUTIONS
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Oil & Gas Operations?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Our experts are ready to help you implement cutting-edge software solutions that drive efficiency, safety, and profitability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={"/contact"} className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300">
              Schedule a Consultation
            </Link>
            <button className="bg-transparent border-2 border-white hover:bg-blue-800 px-8 py-4 rounded-lg text-lg font-semibold transition duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OilGas;