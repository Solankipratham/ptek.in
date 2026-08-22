import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiActivity, FiBriefcase, FiCode, FiSettings, FiTool,
  FiServer, FiUser, FiBarChart2, FiShield, FiTrendingUp,
  FiDatabase, FiCloud, FiLock, FiBox, FiMessageSquare, FiClock,
  FiChevronDown, FiChevronUp, FiCheck, FiX, FiPlay, FiDownload
} from 'react-icons/fi';
import { Link } from 'react-router-dom';

const UiPathAutomation = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
      {/* Hero Section (unchanged) */}
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
            className="text-gray-500 text-base md:text-lg leading-relaxed ml-2 "
          >
            Robotic Process Automation            </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90 ">
            Transform Your Business with<br className="hidden md:block" />UiPath Automation
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Accelerate digital transformation with enterprise-grade RPA solutions.
            UiPath delivers scalable automation to boost productivity and efficiency.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Start Free Trial
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
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Wearable Tech"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive UiPath Solutions
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end automation services to transform your business operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-10">
              <motion.div
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiActivity className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Process Discovery</h3>
                  <p className="text-gray-600">
                    Identify automation opportunities using AI-powered process mining and task capture.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiBriefcase className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">RPA Implementation</h3>
                  <p className="text-gray-600">
                    End-to-end implementation of UiPath platform tailored to your business needs.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiCode className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Custom Automation</h3>
                  <p className="text-gray-600">
                    Build bespoke automation solutions for your unique business processes.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="UiPath automation dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <motion.div
              className="flex justify-center order-2 lg:order-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Automation process"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="space-y-10 order-1 lg:order-2">
              <motion.div
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiSettings className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Managed Services</h3>
                  <p className="text-gray-600">
                    Ongoing support, maintenance, and optimization of your automation ecosystem.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiTool className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">AI Integration</h3>
                  <p className="text-gray-600">
                    Enhance automation with AI capabilities like document understanding and NLP.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                  <FiServer className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Scalable Orchestration</h3>
                  <p className="text-gray-600">
                    Manage and scale your automation across the enterprise with UiPath Orchestrator.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE AUTOMATION SOLUTIONS
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              UiPath Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools for end-to-end automation lifecycle management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* NEW: Timeline Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Automation Journey
            </h2>
            <p className="text-xl text-gray-600">
              How we transform your business step by step
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative z-10 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                      <div className="text-blue-600 font-bold mb-2">{item.step}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold z-10 border-4 border-white shadow-lg">
                    {index + 1}
                  </div>

                  <div className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-gray-50 rounded-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Seamless Enterprise Integration
            </h2>
            <p className="text-xl text-gray-600">
              UiPath connects with your existing technology ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrationData.map((integration, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {integration.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{integration.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* NEW: Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your automation needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingData.map((plan, index) => (
              <motion.div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-xl ${plan.popular
                    ? 'relative border-2 border-blue-500 transform scale-105 z-10'
                    : 'border border-gray-200'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}

                <div className={`p-8 text-center ${plan.popular ? 'bg-blue-600 text-white' : 'bg-white'}`}>
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      ${plan.price}
                    </span>
                    <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>/month</span>
                  </div>
                  <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  <Link to="/contactsection" className="w-full">
  <motion.button
    className={`w-full py-3 rounded-lg font-semibold ${
      plan.popular
        ? 'bg-white text-blue-600 hover:bg-gray-100'
        : 'bg-blue-600 text-white hover:bg-blue-700'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Get Started
  </motion.button>
</Link>
                </div>

                <div className="bg-white p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featIndex) => (
                      <li key={featIndex} className="flex items-center">
                        <FiCheck className="text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose UiPath Automation?
            </h2>
            <p className="text-xl text-blue-100">
              Transform your business with the industry-leading RPA platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl text-blue-200 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Hear what our customers say about UiPath automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl font-bold mr-4">
                  AS
                </div>
                <div>
                  <h4 className="font-bold text-lg">Alex Johnson</h4>
                  <p className="text-gray-600">CTO, FinTech Solutions</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "UiPath reduced our invoice processing time by 85% and eliminated human errors. The ROI was evident within the first quarter."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl font-bold mr-4">
                  MR
                </div>
                <div>
                  <h4 className="font-bold text-lg">Maria Rodriguez</h4>
                  <p className="text-gray-600">Operations Director, HealthFirst</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The automation center of excellence we built with UiPath transformed our patient onboarding process and saved 12,000+ hours annually."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl font-bold mr-4">
                  TK
                </div>
                <div>
                  <h4 className="font-bold text-lg">Thomas Kim</h4>
                  <p className="text-gray-600">CIO, Global Retail Group</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "UiPath's AI capabilities allowed us to automate complex decision-making processes we never thought possible. Truly game-changing."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <motion.h3
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Automate Your Business?
              </motion.h3>
              <motion.p
                className="text-blue-100 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Our automation experts will help you implement the perfect UiPath solution for your needs.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Demo
                </motion.button>
              </motion.div>
            </div>
            <div className="hidden lg:block relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Automation interface"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-600/30 to-blue-800/30"></div>
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
    icon: <FiActivity className="text-blue-600 text-xl" />,
    title: "Process Mining",
    description: "Discover automation opportunities by analyzing your existing business processes."
  },
  {
    icon: <FiCloud className="text-blue-600 text-xl" />,
    title: "Automation Cloud",
    description: "Deploy and manage automations at scale with our secure cloud platform."
  },
  {
    icon: <FiLock className="text-blue-600 text-xl" />,
    title: "Governance & Security",
    description: "Enterprise-grade security and compliance frameworks for your automations."
  },
  {
    icon: <FiBox className="text-blue-600 text-xl" />,
    title: "AI-Powered Automation",
    description: "Leverage AI for document processing, email classification, and more."
  },
  {
    icon: <FiMessageSquare className="text-blue-600 text-xl" />,
    title: "Chatbot Integration",
    description: "Combine RPA with conversational AI for end-to-end automation."
  },
  {
    icon: <FiDatabase className="text-blue-600 text-xl" />,
    title: "Data Services",
    description: "Extract, transform, and load data across multiple systems automatically."
  }
];

const integrationData = [
  {
    icon: <FiDatabase className="text-blue-600 text-2xl" />,
    name: "SAP"
  },
  {
    icon: <FiServer className="text-blue-600 text-2xl" />,
    name: "Salesforce"
  },
  {
    icon: <FiActivity className="text-blue-600 text-2xl" />,
    name: "Oracle"
  },
  {
    icon: <FiBarChart2 className="text-blue-600 text-2xl" />,
    name: "Microsoft 365"
  },
  {
    icon: <FiTool className="text-blue-600 text-2xl" />,
    name: "ServiceNow"
  },
  {
    icon: <FiSettings className="text-blue-600 text-2xl" />,
    name: "Workday"
  }
];

const benefitsData = [
  {
    icon: <FiTrendingUp className="text-3xl" />,
    title: "Boost Productivity",
    description: "Automate repetitive tasks to free up your team for higher-value work."
  },
  {
    icon: <FiShield className="text-3xl" />,
    title: "Ensure Compliance",
    description: "Maintain audit trails and enforce business rules consistently."
  },
  {
    icon: <FiUser className="text-3xl" />,
    title: "Enhance Experiences",
    description: "Improve customer and employee satisfaction with faster processes."
  },
  {
    icon: <FiClock className="text-3xl" />,
    title: "Accelerate Operations",
    description: "Reduce process cycle times from days to minutes with automation."
  }
]
const timelineData = [
  {
    step: "STEP 1",
    title: "Process Discovery",
    description: "We identify automation opportunities using AI-powered process mining tools.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    step: "STEP 2",
    title: "Solution Design",
    description: "Our experts design tailored automation solutions for your business needs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    step: "STEP 3",
    title: "Development & Testing",
    description: "We build and rigorously test automation workflows to ensure reliability.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  },
  {
    step: "STEP 4",
    title: "Deployment & Scaling",
    description: "We deploy automations and help you scale across the organization.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
  }
];

const pricingData = [
  {
    name: "Starter",
    price: "499",
    description: "Ideal for small teams getting started with automation",
    popular: false,
    features: [
      "Up to 5 automations",
      "Basic process discovery",
      "Email support",
      "Community resources",
      "Unlimited users"
    ]
  },
  {
    name: "Professional",
    price: "1999",
    description: "For growing businesses scaling automation",
    popular: true,
    features: [
      "Up to 20 automations",
      "Advanced process mining",
      "Priority support",
      "AI capabilities",
      "Orchestrator access",
      "Training resources"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex needs",
    popular: false,
    features: [
      "Unlimited automations",
      "Enterprise-grade security",
      "24/7 dedicated support",
      "Custom AI models",
      "Center of Excellence setup",
      "Managed services"
    ]
  }
];


export default UiPathAutomation;