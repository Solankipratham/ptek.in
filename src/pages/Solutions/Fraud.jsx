import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaShieldAlt, FaSearch, FaLock, FaChartLine,
  FaFileAlt, FaUserSecret, FaNetworkWired, FaChevronDown, FaChevronUp
} from 'react-icons/fa';

const faqs = [
  { q: "How does your fraud engine detect anomalies?", a: "We use machine learning models trained on thousands of data points including device, IP, user patterns, and transaction history." },
  { q: "Can we integrate your system with our CRM?", a: "Yes, we offer RESTful APIs and webhooks to integrate fraud alerts with CRMs, ERPs, or ticketing tools." },
  { q: "Do you offer rule-based customization?", a: "Absolutely. Teams can define dynamic rules and override machine decisions with manual inputs." },
  { q: "How quickly can we implement your solution?", a: "Most customers go live within 2-3 weeks with our implementation specialists guiding you through the process." },
  { q: "What compliance standards do you meet?", a: "We are SOC 2 Type II certified and GDPR compliant with regular third-party security audits." }
];

const FraudProtection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section (unchanged) */}
      <div className="w-full px-6 lg:px-24 py-28 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content with Motion Enhancements */}
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
            className="text-blue-600 text-lg font-medium uppercase tracking-wide"
          >
            Fraud Intelligence
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
          >
            Detect & Prevent <br className="hidden md:block" /> Suspicious Activities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed p-2"
          >
            Advanced fraud protection platform to safeguard your operations, detect anomalies early, and build stronger customer trust using real-time intelligence and automation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-base md:text-lg transition font-medium shadow-md"
            >
              Secure Your Business →
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image with Motion Enhancements */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -inset-4 rounded-2xl transform rotate-3"
            ></motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Fraud Protection"
              className="rounded-xl w-full max-w-md lg:max-w-lg object-contain relative z-10 "
            />
          </div>
        </motion.div>
      </div>


      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "99.8%", label: "Detection Accuracy" },
            { value: "300ms", label: "Avg. Response Time" },
            { value: "500+", label: "Fraud Patterns" },
            { value: "24/7", label: "Security Monitoring" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100 text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Features */}
      <section className="px-6 md:px-12 lg:px-24  bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Fraud Protection Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive suite of tools designed to secure your operations and respond in real-time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Anomaly Detection", icon: <FaSearch />, desc: "AI-powered monitoring for unusual patterns across transactions." },
            { title: "Access Controls", icon: <FaLock />, desc: "Granular role-based permissions and session tracking." },
            { title: "Risk Analytics", icon: <FaChartLine />, desc: "Dynamic scoring for user behavior, geolocation, and device data." },
            { title: "Audit Trail", icon: <FaFileAlt />, desc: "Tamper-proof logging for complete investigation history." },
            { title: "Threat Intelligence", icon: <FaUserSecret />, desc: "Integrate external blacklists and threat feeds for early action." },
            { title: "Network Behavior", icon: <FaNetworkWired />, desc: "Monitor internal user interactions and data transfers." }
          ].map(({ title, icon, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Fraud Response Process */}
      <section className="py-2 px-6 md:px-12 lg:px-24 ">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Fraud Handling Workflow</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">Here’s how we contain and mitigate fraud fast.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            ["Flag Suspicious Activity", "AI flags based on risk score.", "bg-blue-100 text-blue-800"],
            ["Verify & Investigate", "Analyst reviews and confirms intent.", "bg-indigo-100 text-indigo-800"],
            ["Isolate & Block", "Session/device/user gets locked.", "bg-purple-100 text-purple-800"],
            ["Report & Learn", "Incident is documented for future ML tuning.", "bg-violet-100 text-violet-800"],
          ].map(([title, desc, colorClass], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className={`p-6 rounded-2xl shadow-md hover:shadow-lg transition-all ${colorClass}`}
            >
              <div className="w-12 h-12 mb-4 mx-auto bg-white text-gray-900 font-bold rounded-full flex items-center justify-center text-lg shadow-sm">{i + 1}</div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Alert Ticker */}
      <section className=" py-3 overflow-hidden">
        <motion.div
          className="whitespace-nowrap text-gray-800 text-sm font-medium flex items-center"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        >
          {[
            { color: 'bg-red-500', text: '🚨 Login anomaly detected in Berlin' },
            { color: 'bg-yellow-500', text: '🚨 3 Failed payment attempts blocked' },
            { color: 'bg-green-500', text: '🚀 User spoofing stopped in real-time' },
            { color: 'bg-red-500', text: '🚨 Suspicious API traffic blocked from China' },
            { color: 'bg-yellow-500', text: '⚠️ Fraudulent device fingerprint detected' }
          ].map((alert, index) => (
            <span
              key={index}
              className="inline-flex items-center mx-4 bg-white rounded-full px-4 py-1 shadow-sm border"
            >
              <span className={`w-2 h-2 ${alert.color} rounded-full mr-2`}></span>
              {alert.text}
            </span>
          ))}
        </motion.div>
      </section>


      {/* Dashboard Preview */}
      <section className="py-2 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Real-Time Monitoring Dashboard
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Experience a visual breakdown of user behavior and threats as they happen.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100"
        >
          {/* Browser bar style */}
          <div className="p-4 bg-gray-100 border-b flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-gray-500 text-sm font-mono">live-dashboard.fraudshield.com</div>
            <div className="w-8"></div>
          </div>

          {/* Dashboard content */}
          <div className="p-1">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="bg-gray-100 border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-gray-700 text-sm font-medium">Risk Score</div>
                      <div className="text-green-600 text-xs font-bold">-12%</div>
                    </div>
                    <div className="h-3 bg-gray-300 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-green-400 w-3/4 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-64 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 p-6 flex items-center justify-center rounded-b-2xl">
                <div className="text-center">
                  <div className="text-gray-800 text-xl font-bold mb-1">Live Threat Map</div>
                  <div className="text-gray-500 text-sm">Visualizing global fraud attempts in real-time</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      {/* FAQ Section */}
      <section className=" py-2 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our fraud protection platform.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => toggleFaq(i)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.q}</h3>
                  <div className="text-blue-600">
                    {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>

                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-700"
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <div className="inline-flex flex-col items-center">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <button className="inline-block mt-4 px-6 py-3 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white text-base md:text-lg  transition font-medium shadow-md">
                Contact our security team
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FraudProtection;