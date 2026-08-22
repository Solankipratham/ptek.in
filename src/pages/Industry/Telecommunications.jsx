import React, { useState } from "react";
import { FaHeadset, FaTools, FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Telecommunications = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative  text-black  py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 "></div>
          <div className="absolute inset-0 "></div>
          <div className="absolute top-0 right-0 w-1/3 h-full">
            <div className="absolute inset-0  to-transparent"></div>
          </div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Telecommunications Software Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-blue-900 mb-8 max-w-2xl">
              We develop custom software solutions tailored for the telecommunications industry to enhance network performance, streamline operations, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={"/contact"} 
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-center"
              >
                Start Your Project →
              </Link>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
                View Our Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hire Experienced Telecommunications Systems Developers
            </h2>
            <p className="text-xl text-gray-600">
              Our dedicated development team has extensive telecommunications industry experience building custom software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* OSS Section */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <div className="bg-blue-200 w-12 h-12 rounded-md flex items-center justify-center">
                    <span className="text-blue-800 font-bold">OSS</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Operations Support Systems</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                Our developers program custom OSS Telecom solutions to optimize operations including:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Network Resources Inventory",
                  "Fault Management",
                  "Fraud Protection",
                  "Performance Management",
                  "Troubleshooting",
                  "Trouble Ticketing",
                  "Customer Billing",
                  "Data Dashboards"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-2 text-green-500">
                      <FaCheckCircle />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* BSS Section */}
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <div className="bg-blue-200 w-12 h-12 rounded-md flex items-center justify-center">
                    <span className="text-blue-800 font-bold">BSS</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Business Support Systems</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                We build custom BSS Telecom solutions to manage products, orders, and customer processes:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "CRM Systems",
                  "ERP Solutions",
                  "Billing Systems",
                  "Self-Service Portals",
                  "Personnel Management",
                  "Predictive Analytics",
                  "Data Visualization",
                  "Sales Automation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-2 text-green-500">
                      <FaCheckCircle />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Get Telecom Developers
            </button>
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Telecom Solutions
            </h2>
            <p className="text-xl text-gray-600">
              We develop top-of-the-line telecommunication systems designed to optimize workflows and deliver operational value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Telecom BI Solutions",
                items: [
                  "Strategic Performance Management",
                  "Campaign Management",
                  "Revenue Management",
                  "Customer Management",
                  "Payment Risk Management"
                ]
              },
              {
                title: "Application Support Services",
                items: [
                  "Comprehensive support services",
                  "Optimal performance",
                  "Long-term efficiency",
                  "Proactive monitoring",
                  "Rapid issue resolution"
                ]
              },
              {
                title: "VoIP-Based Solutions",
                items: [
                  "Video, Audio & SMS Applications",
                  "Data Security & Encryption",
                  "Connection Stability",
                  "Interactive Dashboards",
                  "Real-time Analytics"
                ]
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <ul className="space-y-3">
                  {solution.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mt-1 mr-3 text-blue-600">
                        <FaCheckCircle size={14} />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeadset className="w-8 h-8 text-blue-700" />,
                title: "Responsive 24/7 Help Desk",
                description: "Promptly address issues and ensure uninterrupted service with advanced systems."
              },
              {
                icon: <FaTools className="w-8 h-8 text-blue-700" />,
                title: "Extended Support & Maintenance",
                description: "Monitor applications to identify issues before they impact operations."
              },
              {
                icon: <FaCheckCircle className="w-8 h-8 text-blue-700" />,
                title: "Quality Assurance & Testing",
                description: "Ensure optimal performance and security with rigorous testing protocols."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Telecom Software: Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our telecommunications solutions.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What is telecommunications software?",
                  answer: "Telecommunications software encompasses a wide array of tools that cater to diverse aspects of network planning, management, service delivery, and customer engagement in the telecom industry."
                },
                {
                  question: "How is AI being used in telecommunications?",
                  answer: "AI is revolutionizing telecommunications through predictive maintenance, network optimization, intelligent routing, fraud detection, and enhanced customer service via chatbots and virtual assistants."
                },
                {
                  question: "What are the challenges of AI in telecom?",
                  answer: "Key challenges include data privacy concerns, integration with legacy systems, high implementation costs, skill shortages, and ensuring AI decisions are explainable and trustworthy."
                },
                {
                  question: "What is SAP telecom?",
                  answer: "SAP for telecommunications is a suite of enterprise solutions tailored for telecom providers, offering modules for CRM, billing, revenue management, and network operations."
                },
                {
                  question: "What are software support services for telecom?",
                  answer: "These include 24/7 monitoring, troubleshooting, performance optimization, security updates, system upgrades, and technical assistance for telecom software platforms."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'shadow-md' : ''}`}
                >
                  <button
                    className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <span className="text-blue-700 ml-4">
                      {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>
                  
                  {activeIndex === index && (
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Telecom Operations?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Contact our experts today to discuss how our custom software solutions can help your business stay competitive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to={"/contactsection"} 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Get Started Now
            </Link>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-colors duration-300">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Telecommunications;