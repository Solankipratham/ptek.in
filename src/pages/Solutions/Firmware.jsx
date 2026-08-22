import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaMicrochip, FaCodeBranch, FaCogs, FaNetworkWired,
  FaBug, FaTools, FaFigma, FaSketch, FaLayerGroup, FaLaptopCode, FaIndustry, FaBrain, FaRocket, FaChartLine
} from 'react-icons/fa';
import {
  FaShieldAlt
} from 'react-icons/fa';

const FirmwareSolutions = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
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
            Built for Performance
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
          >
            Firmware Solutions <br className="hidden md:block" /> That Power Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed p-2"
          >
            We deliver robust and scalable embedded firmware for devices across industries—from IoT to automotive. Our solutions ensure performance, security, and seamless integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-base md:text-lg  transition font-medium shadow-md"
            >
              Build with Us →
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
              className="absolute -inset-4 rounded-2xl transform rotate-3"
            ></motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              src="/firmares.jpg"
              alt="Firmware Solutions"
              className="rounded-xl w-full max-w-md lg:max-w-lg object-contain relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>


      {/* Capabilities Section */}
      <div className="pt-18 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Firmware Capabilities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From bare-metal programming to RTOS integration, we engineer firmware that drives efficiency and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Embedded Firmware",
              icon: <FaMicrochip className="text-blue-600 text-2xl" />,
              desc: "Low-level programming on microcontrollers, optimized for performance and memory."
            },
            {
              title: "RTOS Integration",
              icon: <FaCodeBranch className="text-blue-600 text-2xl" />,
              desc: "Real-Time Operating System setup for multitasking, timing, and reliability."
            },
            {
              title: "Device Drivers",
              icon: <FaCogs className="text-blue-600 text-2xl" />,
              desc: "Custom drivers for peripherals and communication protocols like I2C, SPI, UART."
            },
            {
              title: "Connectivity & Protocols",
              icon: <FaNetworkWired className="text-blue-600 text-2xl" />,
              desc: "Bluetooth, Zigbee, LoRa, Modbus, and other connectivity stacks for smart devices."
            },
            {
              title: "Debugging & Validation",
              icon: <FaBug className="text-blue-600 text-2xl" />,
              desc: "Rigorous testing using tools like JTAG, SWD, oscilloscopes, and logic analyzers."
            },
            {
              title: "Production Support",
              icon: <FaTools className="text-blue-600 text-2xl" />,
              desc: "Assistance in flashing, test jig development, and over-the-air updates (OTA)."
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Design Process Timeline */}
      <section className="py-2 px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        {/* <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A modular development approach that ensures fast delivery, stability, and future scalability.
          </p>
        </div> */}

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto space-y-10">
          {[
            {
              step: "Requirement Gathering",
              desc: "We begin by collaborating closely with stakeholders to gather detailed hardware specifications, business goals, and technical constraints. This helps us define clear requirements that align with project expectations and ensure feasibility from the start."
            },
            {
              step: "Architecture Design",
              desc: "Once requirements are finalized, we craft a modular and scalable architecture that outlines data flow, system modules, and component interfaces. This foundational design ensures adaptability for future enhancements and seamless integration with hardware and cloud systems."
            },
            {
              step: "Development",
              desc: "Our engineering team develops clean, maintainable embedded firmware by writing and integrating modular code blocks. We focus on efficiency, reliability, and memory optimization while maintaining compatibility with sensors, actuators, and communication protocols."
            },
            {
              step: "Testing & Debugging",
              desc: "Each module undergoes rigorous unit testing, integration testing, and hardware-in-the-loop validation. We use debugging tools and simulators to identify performance bottlenecks, firmware bugs, and edge case failures—ensuring robust and stable operation."
            },
            {
              step: "Deployment",
              desc: "After thorough validation, the firmware is prepared for production. We assist in flashing to devices, enabling secure OTA (Over-The-Air) updates, and establishing monitoring mechanisms for post-deployment diagnostics and lifecycle maintenance."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-blue-600 flex items-center justify-center font-bold text-lg text-blue-600 shadow-md">
                {i + 1}
              </div>

              {/* Step Content */}
              <div>
                <h4 className="text-xl mb-1">{item.step}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      <section className=" px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our firmware powers smart products in a variety of sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { icon: <FaIndustry />, title: "Industrial Automation" },
            { icon: <FaBrain />, title: "Healthcare Devices" },
            { icon: <FaRocket />, title: "Consumer Electronics" },
            { icon: <FaChartLine />, title: "Automotive Systems" },
          ].map(({ icon, title }, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <div className="text-blue-600 text-4xl mb-4">{icon}</div>
              <h3 className="font-semibold text-lg">{title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
      <section className=" py-2 px-6 md:px-12 lg:px-24 ">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Firmware Team?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Proven track record. Deep tech expertise. Seamless collaboration.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { title: "Experienced Engineers", desc: "Years of experience building embedded systems." },
            { title: "Agile Development", desc: "Sprint-based delivery for continuous feedback." },
            { title: "Device Lifecycle Support", desc: "From prototyping to post-deployment updates." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Hardware Integration</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We build firmware that integrates with a wide range of sensors, actuators, communication modules, and cloud systems.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm">
          {[
            "MCUs: STM32, ESP32, NRF52",
            "Sensors: Bosch, ST, Honeywell",
            "Protocols: UART, I2C, SPI, CAN",
            "Wireless: BLE, Wi-Fi, LoRa",
            "Cloud: AWS IoT, Azure, GCP",
            "Security: Secure Boot, TLS, AES"
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-blue-50 px-4 py-2 rounded-full border border-blue-200"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default FirmwareSolutions;
