import React from "react";
import {
  FaVrCardboard,
  FaShieldAlt,
  FaUserFriends,
  FaBug,
  FaRobot,
  FaCube,
  FaMobileAlt,
  FaGamepad,
  FaPaintBrush,
  FaFootballBall,
  FaEye,
  FaDice,
  FaUnity,
  FaUsers,
  FaImage,
  FaCode,
  FaCogs,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Games = () => {
  return (
    <div className="bg-white">
      {/* Hero Section Redesign */}
      <div className="relative text-black ">
        <div className="absolute inset-0 z-0"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center mb-4">
              <div className="h-1 w-12 bg-blue-500 mr-3"></div>
              <span className="text-blue-900 font-medium">GAME DEVELOPMENT SERVICES</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your Vision into <span className="text-blue-500">Immersive</span> Gaming Experiences
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-900 mb-8 max-w-3xl">
              We specialize in providing cutting-edge game development services to create captivating and interactive experiences across various platforms. Whether it's mobile, console, or PC games, our team brings your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={"/contactsection"} 
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Start Your Project →
              </Link>
              <button className="bg-transparent border-2 border-blue-500 hover:bg-blue-500/20 transition-all duration-300 text-black px-8 py-4 rounded-lg font-semibold text-lg">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-blue-200">Games Developed</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-blue-200">Players Worldwide</div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Development Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Game Development Solutions
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our certified gaming software development experts create video game projects from scratch or revamp existing solutions to align with current industry trends.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full mb-4">
              OUR TECHNOLOGIES
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Game Development Stack
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build immersive gaming experiences across all platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-3xl mb-3">
                  {tech.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{tech.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-1 rounded-full mb-4">
              OUR PROCESS
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Streamlined Game Development Workflow
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
       <div className="space-y-12">
      {processSteps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          } items-center`}
        >
          {/* Text Content */}
          <div className="md:w-1/2 mb-6 md:mb-0 px-4">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-3">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 px-4">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Next Game?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Our team of expert game developers is ready to bring your vision to life. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to={"/contact"} 
              className="bg-white text-blue-800 hover:bg-blue-100 transition-all duration-300 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 transition-all duration-300 text-white px-8 py-4 rounded-lg font-semibold text-lg">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Service data
const services = [
  {
    icon: <FaGamepad className="text-4xl" />,
    title: "Game Development",
    description: "We create engaging games with top-tier visuals and performance across all platforms.",
    features: [
      "Custom Game Engines",
      "3D/2D Game Development",
      "Cross-Platform Games",
      "Real-Time Multiplayer"
    ]
  },
  {
    icon: <FaVrCardboard className="text-4xl" />,
    title: "AR/VR Solutions",
    description: "Immersive experiences using cutting-edge augmented and virtual reality technologies.",
    features: [
      "VR Game Development",
      "AR Mobile Applications",
      "Mixed Reality Experiences",
      "Interactive Simulations"
    ]
  },
  {
    icon: <FaMobileAlt className="text-4xl" />,
    title: "Mobile Gaming",
    description: "Engaging mobile games optimized for performance on iOS and Android devices.",
    features: [
      "iOS & Android Development",
      "Mobile Game Optimization",
      "In-App Purchase Systems",
      "Social Integration"
    ]
  },
  {
    icon: <FaRobot className="text-4xl" />,
    title: "AI Integration",
    description: "Intelligent game mechanics powered by artificial intelligence.",
    features: [
      "Smart NPC Behavior",
      "Procedural Content Generation",
      "Player Behavior Analytics",
      "Adaptive Difficulty"
    ]
  },
  {
    icon: <FaPaintBrush className="text-4xl" />,
    title: "Game Design",
    description: "Creative concepts and stunning visuals that captivate players.",
    features: [
      "Character & Environment Design",
      "Game Concept Art",
      "UI/UX Design",
      "Animation & Visual Effects"
    ]
  },
  {
    icon: <FaShieldAlt className="text-4xl" />,
    title: "Testing & QA",
    description: "Comprehensive testing to ensure flawless gameplay experience.",
    features: [
      "Functional Testing",
      "Performance Optimization",
      "Compatibility Testing",
      "Security Audits"
    ]
  }
];

// Technology data
const technologies = [
  { icon: <FaUnity />, name: "Unity" },
  { icon: <FaCube />, name: "Unreal Engine" },
  { icon: <FaCode />, name: "C++" },
  { icon: <FaCode />, name: "C#" },
  { icon: <FaMobileAlt />, name: "iOS & Android" },
  { icon: <FaVrCardboard />, name: "AR/VR SDKs" }
];

// Process data
const processSteps = [
  {
    title: "Concept & Design",
    description:
      "We start by understanding your vision and creating detailed game design documents, storyboards, and prototypes to establish the foundation of your game.",
    image: "/download.jpeg",
  },
  {
    title: "Development",
    description:
      "Our expert developers bring your game to life using cutting-edge technologies and agile methodologies to ensure high-quality results and timely delivery.",
    image: "/developmentgaming.webp",
  },
  {
    title: "Testing & Refinement",
    description:
      "We conduct rigorous testing across all platforms to identify and fix issues, optimize performance, and refine gameplay mechanics.",
    image: "/download (1).jpeg",
  },
  {
    title: "Launch & Support",
    description:
      "We assist with game deployment across all target platforms and provide ongoing support, updates, and maintenance to ensure long-term success.",
    image: "/LS-blackIndep.png",
  },
];

export default Games;