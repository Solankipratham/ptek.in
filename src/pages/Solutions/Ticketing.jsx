import { useState, useEffect } from 'react';
import { FaArrowRight, FaCalendarAlt, FaMusic, FaMobileAlt, FaChartLine, FaCode, FaClock, FaMap, FaTicketAlt, FaQrcode, FaLock, FaUsers, FaGlobe, FaSyncAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Ticketing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full overflow-y-auto relative bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section - Redesigned */}

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
            Transform Your <br className="hidden md:block" />  Event Experience
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Create, manage, and analyze events with our cutting-edge platform.
            Everything you need to sell tickets, delight attendees, and grow your events.
          </p>
          <Link
            to="/contactsection"
            className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Get Started →
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
              src="/tiketing.jpg"
              alt="Fraud Protection"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>


      {/* Event Management Solutions */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Event Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create, manage, and sell tickets for your events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 transition-all hover:shadow-xl">
                  <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <FaMusic className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Event Integrations</h3>
                  <p className="text-gray-600">
                    Scanning, ticket validation, admission control, and fraud prevention in one platform.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-500 transition-all hover:shadow-xl">
                  <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <FaTicketAlt className="text-purple-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Online Ticketing</h3>
                  <p className="text-gray-600">
                    Multi-channel ticketing solutions for web, mobile, and reseller platforms.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-cyan-500 transition-all hover:shadow-xl">
                  <div className="bg-cyan-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <FaUsers className="text-cyan-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Attendee Management</h3>
                  <p className="text-gray-600">
                    Track attendees, manage check-ins, and analyze audience data.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500 transition-all hover:shadow-xl">
                  <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <FaChartLine className="text-green-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Real-time Analytics</h3>
                  <p className="text-gray-600">
                    Monitor sales, track revenue, and gain insights into event performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="inline-block bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-6">
                        <FaTicketAlt className="text-white text-5xl mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Event Dashboard</h3>
                      <p className="text-blue-200 max-w-md">
                        Real-time management for all your events in one place
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <FaSyncAlt className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Real-time Sync</p>
                      <p className="font-semibold">All Platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Ticketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Custom solutions tailored to your specific event needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-6 w-72 relative z-10">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-xl mb-6">
                    <div className="text-center">
                      <FaTicketAlt className="text-3xl mx-auto mb-3" />
                      <h3 className="text-xl font-bold">VIP Concert</h3>
                      <p className="text-sm opacity-80">Front Row Experience</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-500">Date:</span>
                      <span className="font-medium">Oct 31, 2023</span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-500">Time:</span>
                      <span className="font-medium">8:00 PM</span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-500">Venue:</span>
                      <span className="font-medium">Grand Theater</span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-500">Seat:</span>
                      <span className="font-medium">A12</span>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                      <span className="text-gray-500">Price:</span>
                      <span className="text-lg font-bold text-blue-600">$149.99</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 w-72 rotate-3">
                  <div className="bg-gradient-to-r from-green-600 to-cyan-600 text-white p-5 rounded-xl mb-6">
                    <div className="text-center">
                      <FaMusic className="text-3xl mx-auto mb-3" />
                      <h3 className="text-xl font-bold">Festival Pass</h3>
                      <p className="text-sm opacity-80">3-Day Access</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Status:</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
                    </div>

                    <div className="h-24 bg-gray-200 rounded-xl flex items-center justify-center">
                      <FaQrcode className="text-4xl text-gray-400" />
                    </div>

                    <div className="text-center pt-2">
                      <p className="text-xs text-gray-500">Scan for entry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <FaCode className="text-blue-600 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Ticketing App Development</h3>
                      <p className="text-gray-600">
                        Custom mobile and web applications for seamless ticket purchasing and management.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <FaTicketAlt className="text-purple-600 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Software Design</h3>
                      <p className="text-gray-600">
                        Intuitive interfaces optimized for e-ticketing and smooth user experiences.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-xl">
                      <FaMap className="text-amber-600 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Venue Mapping</h3>
                      <p className="text-gray-600">
                        Interactive seat maps integrated with ticketing platforms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <FaMobileAlt className="text-green-600 text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Mobile Scanning</h3>
                      <p className="text-gray-600">
                        Ticket verification, payments, and VIP recognition apps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Ticketing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage successful events
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all flex flex-col">
              <div className="bg-blue-500 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Online Ticketing</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Sell tickets through your website with customizable checkout flows and secure payments.
              </p>
              <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                Learn More
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all flex flex-col">
              <div className="bg-purple-500 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <FaMobileAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mobile Ticketing</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Mobile-optimized ticketing with QR codes for easy entry and mobile wallet integration.
              </p>
              <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                Learn More
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-2xl shadow-lg border border-cyan-100 hover:shadow-xl transition-all flex flex-col">
              <div className="bg-cyan-500 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Event Analytics</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Real-time dashboards with sales data, attendance tracking, and revenue reporting.
              </p>
              <div className="bg-cyan-50 text-cyan-700 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                Learn More
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl shadow-lg border border-amber-100 hover:shadow-xl transition-all flex flex-col">
              <div className="bg-amber-500 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <FaLock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Custom Solutions</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Tailored ticketing systems with branded experiences and specialized features.
              </p>
              <div className="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Ticketing Platform?
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              The complete solution for event organizers and venues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold text-blue-300 mb-4">99.9%</div>
              <h3 className="text-xl font-bold mb-3">Uptime Guarantee</h3>
              <p className="text-blue-100">
                Reliable platform with guaranteed availability during critical sales periods.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold text-purple-300 mb-4">24/7</div>
              <h3 className="text-xl font-bold mb-3">Support</h3>
              <p className="text-blue-100">
                Dedicated support team available anytime to assist with your events.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold text-green-300 mb-4">100+</div>
              <h3 className="text-xl font-bold mb-3">Integrations</h3>
              <p className="text-blue-100">
                Connect with payment processors, CRMs, and marketing platforms.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold text-cyan-300 mb-4">0%</div>
              <h3 className="text-xl font-bold mb-3">Hidden Fees</h3>
              <p className="text-blue-100">
                Transparent pricing with no surprise charges or commission fees.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-1 rounded-full flex-shrink-0">
                <div className="bg-gray-900 rounded-full p-4">
                  <FaTicketAlt className="text-white text-4xl" />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Event Experience?</h3>
                <p className="text-blue-200 mb-6">
                  Join thousands of event organizers using our platform to sell tickets and manage events.
                </p>
                <a
                  href="/contactsection"
                  className="inline-block bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.2; }
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </main>
  );
};

export default Ticketing;