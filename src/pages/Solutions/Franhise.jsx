import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaUsers, FaStore, FaClipboardList, FaChartPie,
  FaTools, FaHandshake, FaIndustry, FaChartLine, FaShieldAlt, FaCogs
} from 'react-icons/fa';

const FranchiseManagement = () => {
  return (
    <div className="bg-white text-gray-800 ">
      {/* Hero Section (unchanged) */}
      <div className="w-full px-6 lg:px-24 py-28 flex flex-col lg:flex-row items-center justify-between">
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
            className="text-blue-600 text-lg font-medium uppercase tracking-wide"
          >
            Franchise Leadership
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
          >
            Manage & Monitor <br className="hidden md:block" /> Your Franchise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed p-2"
          >
            We provide end-to-end franchise management solutions for streamlined operations and rapid expansion.
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
              Partner with Us →
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
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
              className="absolute -inset-4  rounded-2xl transform rotate-3"
            ></motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              src="/firmware.jpg"
              alt="Franchise Management"
              className="rounded-xl w-full max-w-md lg:max-w-lg object-contain relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>


      {/* Key Features */}
      <section className="px-6 md:px-12 lg:px-24 py-2 ">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Franchise Management Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tools and technologies to simplify operations and ensure growth across franchise networks.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Franchise Onboarding", icon: <FaHandshake />, desc: "Streamline partner registration, approvals, and contract management." },
            { title: "Operations Oversight", icon: <FaClipboardList />, desc: "Track compliance, inventory, staffing, and more in real-time." },
            { title: "Performance Analytics", icon: <FaChartPie />, desc: "Gain insights on sales, ROI, and performance trends per location." },
            { title: "Marketing Support", icon: <FaShieldAlt />, desc: "Distribute campaigns and brand assets to maintain consistency." },
            { title: "Training & Knowledge Base", icon: <FaTools />, desc: "Centralize SOPs, training videos, and onboarding materials." },
            { title: "Multi-location Management", icon: <FaStore />, desc: "Monitor and manage all franchise units from a single dashboard." }
          ].map(({ title, icon, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 text-xl">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-2 px-6 md:px-12 lg:px-24 ">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Our Global Franchise Reach</h2>
          <p className="text-gray-600 max-w-xl mx-auto">We’re growing across countries and continents.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start justify-between">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="/team.png"
              alt="Global Franchise Map"
              className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 space-y-4 text-left">
            <div className="bg-white p-4 rounded shadow-md">🇮🇳 <strong>India</strong> – 48+ franchises</div>
            <div className="bg-white p-4 rounded shadow-md">🇺🇸 <strong>USA</strong> – 20+ franchises</div>
            <div className="bg-white p-4 rounded shadow-md">🇦🇺 <strong>Australia</strong> – 10+ franchises</div>
            <div className="bg-white p-4 rounded shadow-md">🌍 <strong>Middle East</strong> – 8+ franchises</div>
          </div>
        </div>
      </section>
      <section className=" py-2 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">Start Your Franchise in 4 Steps</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">Launching your franchise has never been simpler.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            ["Apply Online", "Submit interest & initial documentation."],
            ["Get Approved", "Our team verifies and approves applications."],
            ["Onboard & Train", "Access training tools and SOPs."],
            ["Launch & Scale", "Start operating and track everything live."],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="w-10 h-10 mb-4 mx-auto bg-blue-600 text-white font-bold rounded-full flex items-center justify-center">{i + 1}</div>
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className=" py-2 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Franchise Partners Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Hear from partners who’ve scaled profitably with our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Priya Sharma",
              text: "We opened 3 outlets in 8 months. The dashboard and onboarding support made everything simple and scalable.",
              location: "Bangalore, India"
            },
            {
              name: "Michael Reid",
              text: "From training modules to marketing templates—everything is ready-made. We could focus purely on operations.",
              location: "Sydney, Australia"
            },
            {
              name: "Ahmed El-Sayed",
              text: "Real-time reporting helped us make smarter staffing and stock decisions across our 5 branches.",
              location: "Cairo, Egypt"
            },
          ].map(({ name, text, location }, i) => (
            <motion.div
              key={i}
              className="bg-blue-50 p-6 rounded-xl shadow-sm border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-800 mb-4 italic">“{text}”</p>
              <div className="font-semibold text-blue-700">{name}</div>
              <div className="text-gray-500 text-sm">{location}</div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-2 px-6 md:px-12 lg:px-24 ">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Our Platform Beats Spreadsheets
          </h2>
          <p className="text-blue-900 mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Upgrade from manual operations to smart automation and insight-driven growth.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full bg-white text-left rounded-xl overflow-hidden">
            <thead className="bg-blue-600 text-white text-sm md:text-base">
              <tr>
                <th className="p-5 font-medium">Feature</th>
                <th className="p-5 font-medium">Traditional Tools</th>
                <th className="p-5 font-medium">Our Platform</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm md:text-base">
              {[
                ["Franchise Tracking", "Manual Sheets", "Central Dashboard"],
                ["Reporting", "Email Reports", "Real-Time Analytics"],
                ["Training", "PDF Docs", "Interactive LMS"],
                ["Marketing", "Ad Hoc", "Templated Campaigns"],
                ["Support", "Email/Phone", "Integrated Ticketing"],
              ].map(([feature, traditional, modern], i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition duration-200`}
                >
                  <td className="p-5 font-medium text-gray-800">{feature}</td>
                  <td className="p-5">{traditional}</td>
                  <td className="p-5 font-semibold text-blue-600">{modern}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>



    </div>
  );
};

export default FranchiseManagement;
