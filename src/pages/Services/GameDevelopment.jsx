import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { FaPen, FaCogs, FaRocket, FaMobileAlt, FaVrCardboard, FaCube, FaGamepad,FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
const AppLaunchProcess = () => {
  const steps = [
    { number: "01", title: "Preparation" },
    { number: "02", title: "Build & Validation" },
    { number: "03", title: "Submission" },
    { number: "04", title: "Review & Approval" },
    { number: "05", title: "Launch & Maintenance" },
  ];

  return (
    <div className="text-center py-16 bg-gradient-to-r from-blue-50 to-gray-50 rounded-3xl my-20 mx-4 sm:mx-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-8 mb-6">
          <FaApple className="text-blue-700 text-5xl" />
          <FaGooglePlay className="text-blue-700 text-5xl" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Launch your app on App Store and Play Store
        </h2>

        <p className="text-gray-600 text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
          We maximize visibility and reach during our game launches, delivering a
          successful go-to-market strategy that drives downloads and engagement.
          With each title's launch, we deliver tangible results for our clients,
          ensuring an impactful market entry.
        </p>

        <div className="flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-0 pt-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <div className="absolute -top-8 -left-8 text-blue-100 text-8xl font-bold -z-10">{step.number}</div>
              <div className="text-blue-700 text-xl font-bold z-10">{step.number}</div>
              <div className="text-gray-900 font-medium text-sm mt-2 z-10">{step.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const GameDevelopment = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative text-white  overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 "></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-20">
            <div className="grid grid-cols-4 gap-8 transform rotate-12 translate-y-20">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-48 bg-gradient-to-br from-blue-500 to-gray-700 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
        

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                <span className="block">Game</span>
                <span className="block text-blue-900">Development</span>
              </h1>
              <p className="text-xl text-blue-900 mb-8 max-w-xl">
                Crafting captivating gaming experiences with passion, precision,
                and artistry. Our game development solutions combine cutting-edge
                technology with creative storytelling to create immersive worlds
                that captivate players.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg transition-all hover:bg-blue-700 hover:shadow-lg"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full opacity-20"></div>
                <img 
                  src="/Platform-removebg-preview.png" 
                  alt="Game Development" 
                  className="relative z-10 w-full  h-20 max-w-md  border-8 border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transforming Concepts Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-blue-600 font-semibold mb-4">Dreaming of the next big game hit?</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Transforming Concepts into Gaming Reality
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We specialize in converting gaming ideas into fully developed,
                multi-platform experiences. Leveraging our technical expertise, we
                construct compelling narratives, integrate robust gameplay
                mechanics, and create striking visuals. Our proficiency extends
                across iOS, Android, Web, Desktop, and immersive VR/AR environments.
                Our goal is to ensure your game concept effectively engages its
                intended audience.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg transition-all hover:bg-gray-800 hover:shadow-md"
              >
                Get a quote
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gray-200 rounded-2xl"></div>
                <img
                  src="/Alien-min-300x267.png"
                  alt="Game development"
                  className="relative z-10 w-full max-w-md rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Platforms Section */}
    <div className="bg-gray-50 py-16 px-4 text-center relative overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
        Platforms we support
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-6">
        We specialize in game development, providing a seamless experience across mobile platforms, web browsers, and virtual reality.
        With our talented team of developers and designers, we bring your imaginative ideas to life, creating captivating gaming
        experiences for diverse audiences.
      </p>
      <a href="#" className="text-blue-600 font-semibold inline-flex items-center mb-12 hover:underline">
        Let&apos;s get in touch <span className="ml-1">→</span>
      </a>

      {/* Cards Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 z-10">
        {/* Web Games */}
        <div className="hexagon-card">
          <FaGlobe className="text-3xl text-blue-600 mb-2" />
          <h3 className="font-bold text-lg text-gray-900">Web games</h3>
          <p className="text-sm text-gray-500">Web3 and NFTs</p>
        </div>

        {/* Mobile Games */}
        <div className="hexagon-card">
          <FaGamepad className="text-3xl text-blue-600 mb-2" />
          <h3 className="font-bold text-lg text-gray-900">Mobile games</h3>
          <p className="text-sm text-gray-500">iOS and Android</p>
        </div>

        {/* VR Games */}
        <div className="hexagon-card">
          <FaVrCardboard className="text-3xl text-blue-600 mb-2" />
          <h3 className="font-bold text-lg text-gray-900">VR games</h3>
          <p className="text-sm text-gray-500">Meta Quest, Vision Pro</p>
        </div>
      </div>

      {/* Mascot Image Overlap */}
      <div className="">
        <img
          src="/Platform-removebg-preview.png"
          alt="Mascot"
          className="w-32 md:w-56"
        />
      </div>

      {/* Hexagon Styling */}
      <style jsx>{`
        .hexagon-card {
          width: 12rem;
          height: 12rem;
          background-color: white;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
          clip-path: polygon(
            50% 0%,
            93% 25%,
            93% 75%,
            50% 100%,
            7% 75%,
            7% 25%
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
      `}</style>
    </div>

      {/* Cross-platform Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cross-platform compatibility
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We adopt a meticulous approach to develop games that are universally
                compatible. Using advanced cross-platform technology, our games run
                flawlessly on Android and iOS devices alike. We adhere to a
                stringent process that ensures optimal performance and user
                experience, regardless of the platform chosen. This guarantees users
                the flexibility to engage with the game on their device of choice,
                thus enhancing user satisfaction and reach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
               <video
  src="/AppiOS-insurance.mp4" // Replace with your video path
  autoPlay
  muted
  loop
  playsInline
  className="w-96 "
/>
 <video
    src="/AppAndroid-insurance.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-96 "
  />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl"></div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gray-200 rounded-2xl"></div>
                <img
                  src="/Alien-min-300x267.png"
                  alt="Mobile gaming"
                  className="relative z-10 w-full max-w-md rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Development Process Section */}
    

      {/* VR & AR Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience the VR & AR gaming
            </h2>
            <p className="text-lg text-gray-600">
              Step into the future of gaming with our captivating Virtual Reality
              (VR) and Augmented Reality (AR) games. Explore unimaginable
              landscapes, face thrilling challenges, and immerse yourself in
              extraordinary worlds that feel real.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              <div className="row-span-2 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/Rectangle-19854-min.jpg"
                  alt="VR Gaming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/Group-427318827-min.png"
                  alt="AR Gaming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/Frame-427321411-min.jpg"
                  alt="VR Experience"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <p className="text-lg text-gray-600 mb-8">
                Each game we craft is a blend of stunning graphics, intuitive controls, 
                and engaging narratives, all designed to transport you beyond the screen 
                and into the heart of the action. With our VR and AR games, you're not 
                just playing - you're part of the story.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800"
              >
                Let's get in touch
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AppLaunchProcess />
    </div>
  );
};

export default GameDevelopment;