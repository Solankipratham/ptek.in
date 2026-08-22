import { useState } from "react";
import {
  FaArrowRight,
  FaTable,
  FaFileAlt,
  FaChartBar,
  FaPhoneAlt,
  FaCheck,
  FaServer,
  FaRoute,
  FaRobot,
  FaBrain,
  FaPhoneVolume,
  FaProjectDiagram,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaLightbulb,
  FaShieldAlt,
  FaExpand,
  FaUsers,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Telephony = () => {
  const [activeSolution, setActiveSolution] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const solutions = [
    {
      title: "VoIP Solutions",
      description: "Leverage Voice over IP technology to streamline communication while reducing costs. Our VoIP solutions ensure high-quality calls with advanced features.",
      icon: <FaPhoneVolume className="text-blue-500" />,
      features: ["Crystal-clear HD audio", "Advanced call routing", "Conference calling", "Mobile integration"]
    },
    {
      title: "Unified Communications",
      description: "Integrate all communication channels into a unified platform. Enhance collaboration and productivity with our advanced solutions.",
      icon: <FaUsers className="text-purple-500" />,
      features: ["Voice, video & messaging", "Presence indicators", "File sharing", "Team collaboration"]
    },
    {
      title: "Cloud Telephony",
      description: "Modernize your communication infrastructure with cloud telephony. Enjoy flexibility, scalability, and secure access from anywhere.",
      icon: <FaServer className="text-green-500" />,
      features: ["No hardware required", "Automatic updates", "Global accessibility", "Pay-as-you-go pricing"]
    }
  ];

  const aiFeatures = [
    {
      title: "Automated Calling System",
      description: "Ptek uses AI to enhance automated calling services for call center agents, enabling personalized interactions and real-time responses.",
      icon: <FaPhoneVolume className="w-8 h-8" />
    },
    {
      title: "AI Sentiment Analysis",
      description: "AI-based tools determine the emotional tone of customer discussions, monitoring customer emotions to enhance services and reputation.",
      icon: <FaBrain className="w-8 h-8" />
    },
    {
      title: "AI Call Analysis",
      description: "AI analyzes calls and interacts with patrons to optimize workflows, enhancing responses and ignoring unwanted calls.",
      icon: <FaChartBar className="w-8 h-8" />
    },
    {
      title: "Automated Screen Pop",
      description: "Ptek developers implement screen pop features for call agents to view detailed caller information automatically.",
      icon: <FaProjectDiagram className="w-8 h-8" />
    },
    {
      title: "Predictive Dialer System",
      description: "Predictive dialer systems automate messaging and recalls while improving agents' efficiency and productivity.",
      icon: <FaRobot className="w-8 h-8" />
    },
    {
      title: "Smart Call Center Analytics",
      description: "AI analyzes call data, trends, and customer interactions to improve organizational efficiency.",
      icon: <FaChartLine className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      icon: <FaExpand className="text-blue-500" />,
      title: "Scalable Infrastructure",
      description: "Solutions designed to grow with your business and adapt to evolving requirements."
    },
    {
      icon: <FaShieldAlt className="text-green-500" />,
      title: "Enhanced Security",
      description: "Secure telephony solutions with end-to-end encryption to protect your communications."
    },
    {
      icon: <FaLightbulb className="text-yellow-500" />,
      title: "Innovative Technology",
      description: "Stay ahead with cutting-edge telephony features powered by AI and machine learning."
    },
    {
      icon: <FaCheck className="text-purple-500" />,
      title: "Proven Expertise",
      description: "Trusted by businesses across industries for reliable and efficient telephony services."
    }
  ];

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
       <div className="w-full px-6 lg:px-24 py-28 flex flex-col lg:flex-row items-center justify-between">
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
            className="text-gray-500 text-base md:text-lg leading-relaxed ml-2"
          >
            Event Ticketing Platforms
          </motion.p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90">
           Telephony for <br className="hidden md:block" />  Seamless Communication
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Transform your communication infrastructure with our advanced telephony solutions. From VoIP to unified
           communications, we provide scalable, efficient, and secure services tailored for modern businesses.
          </p>
          <Link
            to="/contactsection"
            className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
           Start your Project →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 mt-12 lg:mt-0"
        >
          <div className="relative">
            <div className="absolute -inset-4  rounded-2xl transform rotate-3 opacity-30"></div>
            <img
              src="/team.png"
              alt="Fraud Protection"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Solutions Carousel */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advanced Telephony Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of telephony services designed to meet all your communication needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-2 ${activeSolution === index
                    ? "border-blue-500"
                    : "border-white"
                  }`}
                onMouseEnter={() => setActiveSolution(index)}
              >
                <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600">
                  <div className="bg-white p-8 h-full">
                    <div className="text-blue-500 text-4xl mb-6">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg transition hover:from-blue-600 hover:to-indigo-700">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTI Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hire Experienced Computer Telephony Integration Developers
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ptek provides seamless computer telephony integration (CTI) software to enhance call center operations, elevate service quality, and create enriching customer experiences.
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-white rounded-xl shadow-md flex items-start">
                  <div className="bg-blue-100 p-4 rounded-lg mr-6">
                    <FaTable className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Click-to-Call Software</h3>
                    <p className="text-gray-600">
                      We customize click-to-dial software to augment personnel by enabling seamless digital communication, streamlining customer service processes in real-time.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-md flex items-start">
                  <div className="bg-green-100 p-4 rounded-lg mr-6">
                    <FaFileAlt className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Call Logging Solutions</h3>
                    <p className="text-gray-600">
                      Ptek designs cutting-edge call logging software to automatically capture call data, delivering valuable insights into agent performance metrics.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl shadow-md flex items-start">
                  <div className="bg-purple-100 p-4 rounded-lg mr-6">
                    <FaRoute className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Omnichannel Routing</h3>
                    <p className="text-gray-600">
                      Our solutions incorporate omnichannel routing, automatic call distribution (ACD), and interactive voice response (IVR) software integrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative bg-white p-1 rounded-2xl shadow-2xl">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                        <FaServer className="text-blue-600 text-2xl" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">CTI Dashboard</h3>
                      <p className="text-gray-500">Visualization of telephony integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Call Center Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionize Customer Service with <span className="text-blue-600">AI Call Center</span> Software
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We incorporate AI-powered technology to automate processes, expedite resolutions, and drive improved business outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 text-blue-500">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className={`text-gray-600 transition-all duration-300 ${expandedFeature === index ? 'block' : 'line-clamp-2'}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-blue-600 font-medium">Learn more</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    {expandedFeature === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3 mx-auto">
              Develop Call Intelligence Software <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Telephony Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages that set our telephony services apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support Availability</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Uptime Guarantee</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Businesses Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-20 px-4 sm:px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Ready to Transform Your Communication?
    </h2>
    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
      Contact us today to discover how our telephony solutions can enhance your business communication and drive growth.
    </p>

    <Link
      to="/contactsection"
      className="group inline-block bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-4 px-12 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 items-center gap-3 mx-auto"
    >
      <span>Get Started Now</span>
    </Link>
  </div>
</section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute -top-12 right-0 text-white text-2xl"
              onClick={() => setIsVideoPlaying(false)}
            >
              &times;
            </button>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <div className="text-center">
                <FaPhoneVolume className="mx-auto text-blue-500 text-6xl mb-4" />
                <p className="text-gray-500 text-xl">Telephony System Demo</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Telephony;