import React from 'react';
import {
  FaTachometerAlt,
  FaSearch,
  FaSync,
  FaLaptop,
  FaUserCheck,
  FaBrain, FaShoppingCart, FaNetworkWired, FaBuilding, FaHeartbeat,
  FaStopwatch, FaGraduationCap, FaShieldAlt, FaGamepad, FaProjectDiagram,
  FaCloud, FaBolt, FaComments, FaBullhorn, FaCar
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Section from '../../components/Section';

const industries = [
  { title: 'SaaS Platforms', icon: <FaCloud /> },
  { title: 'Neuroscience', icon: <FaBrain /> },
  { title: 'Blockchain & Fintech', icon: <FaNetworkWired /> },
  { title: 'IoT & AI', icon: <FaBolt /> },
  { title: 'E-Commerce', icon: <FaShoppingCart /> },
  { title: 'Workflow Management', icon: <FaProjectDiagram /> },
  { title: 'Automotive', icon: <FaCar /> },
  { title: 'Education', icon: <FaGraduationCap /> },
  { title: 'Healthcare', icon: <FaHeartbeat /> },
  { title: 'Time Tracking', icon: <FaStopwatch /> },
  { title: 'Social Networking', icon: <FaComments /> },
  { title: 'Marketing & Advertising', icon: <FaBullhorn /> },
  { title: 'Construction', icon: <FaBuilding /> },
  { title: 'Cybersecurity', icon: <FaShieldAlt /> },
  { title: 'Gaming', icon: <FaGamepad /> },
];

const CustomSoftwareDevelopment = () => {
  return (
    <section className="py-2 px-4 sm:px-8 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        {/* Hero Section for Industry Block */}
        <div className="w-full px-6 lg:px-24 py-14 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full text-center lg:text-left space-y-6 max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-gray-500 text-lg font-medium"
            >
              Industries We Serve
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
            >
              Domain and Industry Agnostic
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              Our teams have years of experience across all application domains: mobile, web, and desktop. We've developed deep expertise in healthcare, neuroscience, e-commerce, workflow management, agile tools, construction, automotive, time tracking, social networking, and much more.
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full mt-12 lg:mt-0 flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -inset-4 rounded-2xl transform rotate-3 "
              ></motion.div>
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                src="/iot.jpg"
                alt="Industry Overview"
                className="rounded-xl w-full h-auto object-contain relative z-10"
              />
            </div>
          </motion.div>
        </div>



        {/* Industry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center p-4 border rounded-lg bg-white hover:bg-gray-50 transition"
            >
              <div className="text-2xl mb-2 text-gray-800">
                {industry.icon}
              </div>
              <h3 className="text-sm font-medium text-gray-800">{industry.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl p-6 md:p-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-20 ">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Experience software excellence with <br /> Ptek
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Discover a quality assurance approach that sets new standards. Partner with Lasting
            Dynamics for thoughtfully crafted software solutions that seamlessly fuse sophistication
            with user-centric design. Witness how our steadfast commitment to superior quality
            can truly enhance your software experience.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
            Schedule a Consultation Today
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <img
            src="/unsplash_2FPjlAyMQTA-min.jpg" // Replace with your image path
            alt="Software excellence"
            className="rounded-2xl w-full object-cover max-h-[400px]"
          />
        </div>
      </div>.


      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Top Left: Image with Labels */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <img
              src="/automated-test-min.png" // Replace with your actual image
              alt="Testing levels"
              className="w-full max-w-sm"
            />
            {/* Labels */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 text-sm font-medium text-gray-600">
              Unit tests
            </div>
            <div className="absolute bottom-4 left-0 text-sm font-medium text-gray-600">
              E2E tests
            </div>
            <div className="absolute bottom-4 right-0 text-sm font-medium text-gray-600">
              Integration tests
            </div>
          </div>
        </div>

        {/* Top Right: Text Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
            Automated tests
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            At Ptek, we believe that automated testing forms the bedrock of dependable
            software. Recognizing its importance, our approach encompasses various levels of testing
            to ensure robustness and reliability. Beginning at the code level, our developers employ
            unit tests. These tests validate individual components or functions, ensuring that each
            piece of the codebase performs its intended task. Next, we integrate these units and
            validate their combined behavior using integration tests. Lastly, end-to-end tests are
            employed. These tests mimic real-world user behaviors and scenarios, ensuring that the
            entire application, from start to finish, operates seamlessly and meets the desired
            expectations.
          </p>
        </div>

        {/* Bottom Left: Peak Performance Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">
            Achieving peak performance: <br /> our testing approach
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Performance can quickly become a bottleneck for scaling software and large projects meant
            for public administration or massive adoption. At Ptek, we prioritize it by
            utilizing cutting-edge testing methodologies. We simulate diverse user loads and scenarios
            to measure response times, throughput rates, and system stability. This rigorous approach
            not only identifies bottlenecks but also ensures that our software solutions can handle
            high traffic and usage spikes, guaranteeing a smooth and efficient user experience every
            time.
          </p>
        </div>

        {/* Bottom Right: Load Chart Image */}
        <div className="flex items-center justify-center">
          <img
            src="/download (19).png" // Replace with your actual image
            alt="Load Testing Chart"
            className="w-full max-w-sm"
          />
        </div>
      </div>.
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Text + Image */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The largest testing spectrum <br /> you can have
          </h2>
          <p className="text-gray-700 mb-4">
            Within the multifaceted domain of software development, quality assurance plays
            a pivotal role. It goes beyond detecting defects; it ensures consistent
            functionality across various browsers, operating systems, and devices.
            Prioritizing optimal performance, user experience, and interface design is
            essential. As software undergoes updates and enhancements, maintaining stability
            in pre-existing modules becomes equally vital to prevent regression.
          </p>
          <p className="text-gray-700 mb-6">
            At Ptek, we pride ourselves on offering a holistic suite of testing
            services tailored to diverse software needs:
          </p>

          <video
            src="/QA-testing.mp4" // Replace with your actual video path
            className="rounded-xl w-full max-w-md"
            autoPlay
            muted
            loop
            playsInline
          ></video>

        </div>

        {/* Right Column: Testing Types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Item */}
          <div className="flex items-start space-x-3">
            <FaTachometerAlt className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Performance Testing</h4>
              <p className="text-sm text-gray-600">
                Ensuring that systems operate efficiently, even under load.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaLaptop className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">UI Testing</h4>
              <p className="text-sm text-gray-600">
                Evaluating the user interfaces for intuitiveness and satisfaction.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaSearch className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Regression Testing</h4>
              <p className="text-sm text-gray-600">
                Making certain that new code changes don’t disrupt existing features.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaUserCheck className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">
                User Acceptance Testing (UAT)
              </h4>
              <p className="text-sm text-gray-600">
                Collaborating with users to ensure expectations and goals are met.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaSync className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Compatibility Testing</h4>
              <p className="text-sm text-gray-600">
                Ensuring consistent performance across browsers, devices, and OS versions.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FaProjectDiagram className="text-blue-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Domain Testing</h4>
              <p className="text-sm text-gray-600">
                Targeting specific application areas to uncover hidden issues.
              </p>
            </div>
          </div>
        </div>

      </div>.
      <Section />

    </section>


  );
};

export default CustomSoftwareDevelopment;
