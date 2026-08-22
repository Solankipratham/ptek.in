import React from "react";
import { motion } from "framer-motion";
import {
  FiMap,
  FiGrid,
  FiCpu,
  FiDroplet,
  FiSettings,
  FiLayers,
} from "react-icons/fi";
import {
  FaSearch,
  FaDesktop,
  FaCog,
  FaRobot,
  FaQuestionCircle,
} from "react-icons/fa";
// import FAQ from "../../components/FAQ";
import { Link } from "react-router-dom";
import agritechVideo from "/WEBhero.mp4"; // Adjust path if needed

const AgriTech = () => {
  // const faqs = [
  //   {
  //     question: "What is agriculture software development?",
  //     answer:
  //       "Agriculture software development involves the creation of custom software solutions to support the farming and agricultural industry, including tools for managing crops, inventory, and data analytics.",
  //   },
  //   {
  //     question: "What technologies are commonly used in agriculture software?",
  //     answer:
  //       "Technologies like AI, IoT, cloud computing, machine learning, and GIS are commonly used to enhance agricultural software solutions.",
  //   },
  //   {
  //     question: "What is AgTech?",
  //     answer:
  //       "AgTech refers to agricultural technology, which is the use of innovative tools and techniques such as data analysis, AI, and automation in farming and agriculture.",
  //   },
  //   {
  //     question: "How is AI used in Agriculture?",
  //     answer:
  //       "AI in agriculture is used for tasks like crop prediction, disease detection, and soil analysis, helping optimize farming processes and reduce labor costs.",
  //   },
  //   {
  //     question: "What is the benefit of AI in agriculture?",
  //     answer:
  //       "AI improves productivity, accuracy, and sustainability in agriculture by enabling predictive analytics, real-time monitoring, and optimization of resources.",
  //   },
  //   {
  //     question: "Is AgTech the future?",
  //     answer:
  //       "Yes, AgTech is the future of agriculture, driving innovation and efficiency in farming practices through automation and digitalization.",
  //   },
  // ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 bg-white">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="text-blue-600 text-lg font-semibold">
            Eager to digitize your vision?
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            AgriTech Software <br /> Solutions
          </h1>
          <p className="text-gray-600 text-lg max-w-xl">
            Custom-built software services to increase agricultural
            productivity, automate processes, and drive sustainability.
          </p>
          <Link
            to={"/contactsection"}
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition"
          >
            Start Your Project →
          </Link>
        </div>

        {/* Right Video Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
          className="lg:w-1/2 mt-12 lg:mt-0"
        >
          <video
            src={agritechVideo}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl w-full h-40 md:h-96 object-cover border-2 border-blue-100 shadow-md"
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AgriTech Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions designed specifically for modern
              agriculture challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiMap className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Land Mapping & GPS Software
              </h3>
              <p className="text-gray-600 mb-4">
                We program GIS & GPS technologies and integrate them with your
                current systems for site-specific data mapping optimization.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more →
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiGrid className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3D Field Design Applications
              </h3>
              <p className="text-gray-600 mb-4">
                We engineer custom 3D field design apps to seamlessly integrate
                with topography mapping software.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more →
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiCpu className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Smart Controllers & Sensors
              </h3>
              <p className="text-gray-600 mb-4">
                We implement smart controllers & sensors that screen yields for
                environmental factors and changes.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more →
              </button>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiSettings className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Autonomous Farming Systems
              </h3>
              <p className="text-gray-600 mb-4">
                We incorporate prescriptive technology and decision support
                systems to maximize operational performance.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more →
              </button>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiDroplet className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Irrigation System Management
              </h3>
              <p className="text-gray-600 mb-4">
                We design irrigation software with computer-aided designs and
                digital terrain modeling.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more →
              </button>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FiLayers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Operations Management
              </h3>
              <p className="text-gray-600 mb-4">
                We integrate UAV software with third-party APIs to streamline
                consistent operational workflows.
              </p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* IT Support Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Support Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT services designed specifically for agricultural
              software needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <img
                src="/IT Support.jpg" // <-- your image path
                alt="IT Support Visualization"
                className="bg-gray-200 border-dashed rounded-xl w-full h-96 object-cover flex items-center justify-center text-gray-500 mb-8"
              />

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Why Choose Our IT Support?
                </h3>
                <p className="text-gray-600">
                  Ptek's IT specialists and support team design, implement, and
                  monitor the performance of today's agriculture software
                  solutions.
                </p>
                <p className="text-gray-600">
                  Our support services team provides scalable solutions to
                  exceed evolving demands and offers continuous guidance and
                  troubleshooting.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Get Support Now
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Service 1 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaSearch className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Agricultural Software Integration
                  </h4>
                  <p className="text-gray-600">
                    Ptek's unrivaled integration expertise produces seamless
                    solutions utilizing the newest programs to propel your
                    business strategies forward.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaDesktop className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Comprehensive Managed IT Support
                  </h4>
                  <p className="text-gray-600">
                    Ptek creates individualized, comprehensive IT support plans
                    for your unique needs to ensure all resources run optimally.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaCog className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Remote Assistance
                  </h4>
                  <p className="text-gray-600">
                    Our adept software development teams create remote-based
                    support service solutions to enable your business to grow.
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaRobot className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Smart Agriculture Technology
                  </h4>
                  <p className="text-gray-600">
                    Ptek's AI experts leverage powerful resources to modernize
                    operations and streamline tasks, enabling optimization of
                    resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our AgriTech software solutions
            </p>
          </div>
          {/* <FAQ faqs={faqs} /> */}
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive software solutions for all aspects of modern
              agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Farm Management */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <img
                src="/Farm Management.jpg" // <-- your image path here
                alt="Farm Management"
                className="bg-gray-200  border-dashed rounded-xl w-full h-48 mb-6 object-cover"
              />

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Farm Management Software
              </h3>
              <p className="text-gray-600 mb-4">
                Our farm management solutions provide real-time insights into
                crop health, soil conditions, and weather patterns.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Crop management</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Soil health monitoring</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Weather forecasting</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Data analytics and reporting</span>
                </li>
              </ul>
              <button className="text-blue-600 font-medium hover:text-blue-800">
                Learn more →
              </button>
            </div>

            {/* Livestock Management */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <img
                src="/Livestock Management Software.jpg" // <-- your image path here
                alt="Farm Management"
                className="bg-gray-200  border-dashed rounded-xl w-full h-48 mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Livestock Management Software
              </h3>
              <p className="text-gray-600 mb-4">
                Our livestock management systems streamline breeding, feeding,
                and health monitoring.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Breeding management</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Feeding schedules</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Health tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Inventory management</span>
                </li>
              </ul>
              <button className="text-blue-600 font-medium hover:text-blue-800">
                Learn more →
              </button>
            </div>

            {/* Supply Chain */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <img
                src="/Supply Chain Management Software.jpg" // <-- your image path here
                alt="Farm Management"
                className="bg-gray-200  border-dashed rounded-xl w-full h-48 mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Supply Chain Management Software
              </h3>
              <p className="text-gray-600 mb-4">
                Our supply chain solutions ensure efficient tracking of produce
                from farm to market.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Inventory tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Logistics management</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Supplier coordination</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  <span>Real-time analytics</span>
                </li>
              </ul>
              <button className="text-blue-600 font-medium hover:text-blue-800">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Beyond core software solutions, we offer specialized services to
              enhance your AgriTech operations
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Comprehensive AgriTech Solutions
                </h3>
                <p className="text-gray-600 mb-6">
                  We provide a full spectrum of services to support your
                  agricultural technology needs from concept to implementation
                  and beyond.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <span className="text-gray-900">
                      Precision agriculture solutions
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <span className="text-gray-900">
                      Drone and UAV integration
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <span className="text-gray-900">
                      IoT sensor integration
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">✓</span>
                    </div>
                    <span className="text-gray-900">
                      Mobile application development
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 border-dashed rounded-xl w-full h-64 flex items-center justify-center overflow-hidden">
                <img
                  src="/agritech solution.jpg"
                  alt="Additional Services Visualization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Transform Your Agricultural Operations
          </h2>
          <p className="text-black text-lg mb-8 max-w-3xl mx-auto">
            Partner with us to develop customized software solutions that meet
            the unique needs of your AgriTech business. Our team is dedicated to
            delivering high-quality, scalable, and user-friendly applications.
          </p>
          <Link
            to={"/contactsection"}
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgriTech;
