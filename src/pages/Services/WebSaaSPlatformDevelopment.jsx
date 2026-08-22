import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaCogs, FaRocket, FaLock, FaChartLine, FaServer, FaShieldAlt, FaCode } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <FaCloud className="text-blue-500 text-3xl" />,
    title: "Cloud-Native Architecture",
    desc: "Build scalable SaaS solutions with our cloud-first approach leveraging AWS, Azure, or GCP.",
    bg: "bg-blue-50",
  },
  {
    icon: <FaCogs className="text-indigo-500 text-3xl" />,
    title: "Custom Integrations",
    desc: "Seamless API integrations with your existing business systems and third-party services.",
    bg: "bg-indigo-50",
  },
  {
    icon: <FaRocket className="text-purple-500 text-3xl" />,
    title: "Performance Optimized",
    desc: "Lightning-fast applications with optimized databases, CDN, and caching strategies.",
    bg: "bg-purple-50",
  },
  {
    icon: <FaLock className="text-green-500 text-3xl" />,
    title: "Enterprise Security",
    desc: "End-to-end encryption, compliance, and regular security audits for your peace of mind.",
    bg: "bg-green-50",
  },
  {
    icon: <FaChartLine className="text-teal-500 text-3xl" />,
    title: "Analytics Dashboard",
    desc: "Built-in analytics to track user behavior, growth metrics, and business performance.",
    bg: "bg-teal-50",
  },
  {
    icon: <FaServer className="text-amber-500 text-3xl" />,
    title: "DevOps Automation",
    desc: "CI/CD pipelines, infrastructure as code, and automated scaling for zero downtime.",
    bg: "bg-amber-50",
  },
  {
    icon: <FaShieldAlt className="text-red-500 text-3xl" />,
    title: "Data Protection",
    desc: "GDPR, HIPAA, and SOC2 compliant solutions with regular backups and disaster recovery.",
    bg: "bg-red-50",
  },
  {
    icon: <FaCode className="text-cyan-500 text-3xl" />,
    title: "Clean Codebase",
    desc: "Modular, well-documented code following best practices for easy maintenance.",
    bg: "bg-cyan-50",
  },
];

const WebSaaSPlatformDevelopment = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        <div className="w-full px-6 lg:px-20 py-2 flex flex-col lg:flex-row items-center justify-between">
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
              className="text-blue-600 text-sm font-semibold bg-blue-100 inline-block px-3 py-1 rounded-full"
            >
              SaaS Platform Development
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
            >
              Build Scalable SaaS Platforms <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                That Users Love
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl"
            >
              From MVP to enterprise-grade solutions, we craft high-performance SaaS platforms with intuitive UX, robust architecture, and seamless scalability to accelerate your growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
            <Link to="/contactsection">
  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-xl font-semibold shadow-md flex items-center justify-center gap-2">
    Get Started <FiArrowRight />
  </button>
</Link>
              <Link
                to="/case-studies"
                className="px-6 py-3 bg-white text-gray-800 border border-gray-200 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all text-center"
              >
                View Case Studies
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
                animate={{ scale: 1, opacity: 0.15 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-3 z-0"
              ></motion.div>
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                src="training.jpg" // Replace with your actual image path
                alt="SaaS Development Illustration"
                className="rounded-xl w-full max-w-md lg:max-w-lg object-contain relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-2">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Enterprise-Grade SaaS Development
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We combine cutting-edge technology with industry best practices to deliver SaaS platforms
            that stand out in competitive markets.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${feature.bg} rounded-2xl p-6 hover:shadow-lg transition-all`}
            >
              <div className="mb-5 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Modern Technology Stack
            </h2>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              We leverage the best tools and frameworks to build future-proof SaaS applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "React/Next.js", desc: "Frontend frameworks" },
              { name: "Node.js/NestJS", desc: "Backend solutions" },
              { name: "PostgreSQL/MongoDB", desc: "Database systems" },
              { name: "Docker/Kubernetes", desc: "Containerization" },
              { name: "AWS/Azure", desc: "Cloud providers" },
              { name: "GraphQL/REST", desc: "API architectures" },
              { name: "TypeScript", desc: "Primary language" },
              { name: "Jest/Cypress", desc: "Testing frameworks" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-400">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://ptek.com/wp-content/uploads/2023/03/dots-pattern.png')]"></div>
          <div className="relative z-10 px-8 py-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl  mb-6">
              Ready to Build Your SaaS Platform?
            </h2>
            <p className="text-blue-500 text-xl max-w-2xl mx-auto mb-8">
              Let's discuss how we can help you create a scalable, secure, and user-friendly SaaS solution.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-blue-600 cursor-pointer rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
            >
              Schedule a Consultation <FiArrowRight />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WebSaaSPlatformDevelopment;