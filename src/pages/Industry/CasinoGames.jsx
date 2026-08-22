import React from "react";
import { FaMobileAlt, FaGamepad, FaClipboardList, FaChevronRight, FaShieldAlt, FaCoins, FaDice, FaChartLine, FaServer, FaLock, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const CasinoGames = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-black text-white">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Casino Games Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Transform your vision into reality with our advanced casino game
              development services, combining cutting-edge technology, captivating
              designs, and immersive experiences.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project <FaChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Game Development Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-blue-900">
                Mobile Game Development Services
              </h2>
              <p className="text-lg text-gray-700">
                Ptek's mobile game software solutions allow you to deliver
                engaging and highly immersive games to players worldwide, built
                with cutting-edge technology & monetization solutions.
              </p>
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-lg mr-4">
                    <FaMobileAlt className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900 mb-2">Mobile Game Design</h3>
                    <p className="text-gray-700">
                      Proficient in building role-playing games (RPGs), casino,
                      racing, adventure, e-learning, sports, and other games
                      designed and coded to play on Android and iOS devices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-lg mr-4">
                    <FaGamepad className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900 mb-2">
                      Mobile Game Animation
                    </h3>
                    <p className="text-gray-700">
                      Our in-house team of game animators leverage
                      industry-standard tools, like Blender and Maya, to model
                      and animate realistic game characters, environments, and
                      other details.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-lg mr-4">
                    <FaClipboardList className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900 mb-2">
                      Mobile AR & VR Solutions
                    </h3>
                    <p className="text-gray-700">
                      Engineer cross-platform mobile AR & VR gaming solutions
                      utilizing popular programming languages, including C++,
                      Java, JavaScript, Python, Swift, Kotlin, and many more.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to={"game-development"}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mt-6 transition-colors"
              >
                Get Mobile Gaming Software Solutions <FaChevronRight className="ml-1" />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/sport3.webp"
                  alt="Mobile Game"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Casino Solutions */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Custom Casino Game Software Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaDice className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Online Casino Games
              </h3>
              <p className="text-gray-700 mb-4">
                Develop a wide variety of casino games, including slots,
                poker, bingo, blackjack, roulette, and more, tailored to your
                brand with advanced security and compliance.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>Slots & Poker</li>
                <li>Bingo & Baccarat</li>
                <li>Roulette & Blackjack</li>
              </ul>
              <div className="w-full h-0.5 bg-gradient-to-r from-blue-100 to-gray-100 mb-6"></div>
              <Link to="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                Learn more <FaChevronRight className="ml-2 text-sm" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaChartLine className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                AI-Powered Game Development
              </h3>
              <p className="text-gray-700 mb-4">
                Leverage AI to enhance player engagement with personalization,
                fraud detection, and optimized gameplay experiences.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>AI-driven fraud detection</li>
                <li>Personalized user experiences</li>
                <li>Optimized gameplay mechanics</li>
              </ul>
              <div className="w-full h-0.5 bg-gradient-to-r from-blue-100 to-gray-100 mb-6"></div>
              <Link to="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                Learn more <FaChevronRight className="ml-2 text-sm" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaCoins className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Sweepstakes Solutions
              </h3>
              <p className="text-gray-700 mb-4">
                Create captivating sweepstakes platforms with unique game
                skins, animations, and multi-platform compatibility.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>Custom game skins</li>
                <li>Multi-platform compatibility</li>
                <li>Intuitive UX/UI designs</li>
              </ul>
              <div className="w-full h-0.5 bg-gradient-to-r from-blue-100 to-gray-100 mb-6"></div>
              <Link to="#" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                Learn more <FaChevronRight className="ml-2 text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Fantasy Sports Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1 flex items-center justify-center">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/sports1.webp"
                  alt="Fantasy Sports"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h2 className="text-3xl font-semibold text-blue-900">
                Fantasy Sports Software Solutions
              </h2>
              <p className="text-lg text-gray-700">
                Ptek provides players with personalized gaming and fantasy
                league drafting experiences via our custom fantasy sports
                software solutions.
              </p>
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-lg mr-4">
                    <FaServer className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900 mb-2">
                      Fantasy Sports Software Development
                    </h3>
                    <p className="text-gray-700">
                      Develop fantasy sports software for games, platforms, and
                      websites, covering all sports and engineering RESTful APIs
                      to retrieve sports, league, and player information.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-lg mr-4">
                    <FaMobileAlt className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900 mb-2">
                      Fantasy Sports App Development
                    </h3>
                    <p className="text-gray-700">
                      Engineer custom fantasy sports applications with
                      integrated payment portals to collect dues and entry fees
                      and generate informative reports and create/delete games.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-lg mr-4">
                    <FaCog className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-blue-900 mb-2">
                      Fantasy Sports League & Draft Solutions
                    </h3>
                    <p className="text-gray-700">
                      Create software solutions for H2H, total points, salary
                      cap, auction, dynasty, keeper style, two quarterback, and
                      other league types with integrated STATS & SportDirect
                      live feeds.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to={"/sports"}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold mt-6 transition-colors"
              >
                Get Fantasy Sports Software Solutions <FaChevronRight className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Additional Casino Game Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaMobileAlt className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Mobile Casino Game Development</h3>
              </div>
              <p className="text-gray-700">
                Cutting-edge mobile solutions optimized for all devices with seamless gameplay and secure transactions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaDice className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Live Casino Integration</h3>
              </div>
              <p className="text-gray-700">
                Real-time streaming solutions with professional dealers for an authentic casino experience.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaCoins className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Crypto Casino Game Solutions</h3>
              </div>
              <p className="text-gray-700">
                Secure cryptocurrency payment integration and blockchain-based gaming solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaChartLine className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">Game Marketing and Promotion</h3>
              </div>
              <p className="text-gray-700">
                Strategic player acquisition and retention campaigns with analytics and optimization.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-center mb-12">
              We ensure all our casino games meet industry regulations and are
              equipped with robust security features, providing a safe and seamless
              experience for players.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-800 bg-opacity-30 p-8 rounded-xl border border-blue-700">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-700 p-4 rounded-full">
                    <FaShieldAlt className="text-white text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Regulatory Compliance</h3>
                <p className="text-center">
                  Adherence to GLI-11 through GLI-31 standards and global gaming regulations.
                </p>
              </div>
              
              <div className="bg-blue-800 bg-opacity-30 p-8 rounded-xl border border-blue-700">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-700 p-4 rounded-full">
                    <FaLock className="text-white text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Secure Transactions</h3>
                <p className="text-center">
                  PCI-DSS compliant payment gateways with end-to-end encryption.
                </p>
              </div>
              
              <div className="bg-blue-800 bg-opacity-30 p-8 rounded-xl border border-blue-700">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-700 p-4 rounded-full">
                    <FaServer className="text-white text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Fraud Prevention</h3>
                <p className="text-center">
                  Advanced AI-powered fraud detection and prevention systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-700 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Casino Game Project Today
          </h3>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Partner with us for professional casino game development services. We
            bring innovation, creativity, and technical expertise to every
            project, ensuring your casino games stand out and engage players
            across the globe.
          </p>
          <Link
            to={"/contactsection"}
            className="inline-flex items-center bg-black hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today <FaChevronRight className="ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CasinoGames;