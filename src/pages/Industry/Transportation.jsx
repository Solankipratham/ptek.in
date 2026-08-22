import React from "react";
import { Link } from "react-router-dom";

const Transportation = () => {
  // ... (fleetSolutions and transportSolutions arrays remain unchanged)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
        <img 
          src="/anonymous-medical-researcher-working-modern-260nw-2615909777.webp" 
          alt="Transportation" 
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Transportation <span className="text-blue-600">Facilities</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                At our company, we prioritize the convenience and comfort of our
                employees, which is why we offer a range of transportation options
                to ensure that commuting is never a hassle.
              </p>
              <Link 
                to={"/contact"} 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded transition duration-300"
              >
                Start Your Project
                {/* <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg> */}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fleet Management Software Solutions
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our fleet management software solutions and transportation
              management systems (TMS) facilitate fleet telematics, GPS fleet
              tracking, fuel management, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* <div className="space-y-8">
              {fleetSolutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="text-4xl text-blue-600 mr-5">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            
            <div className="flex justify-center">
              <img
                src="/transport2.webp"
                alt="Fleet Management"
                className="rounded-xl shadow-lg w-20 h-20  max-w-lg"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-md transition duration-300">
              GET FLEET MGMT SOFTWARE SOLUTIONS
            </button>
          </div>
        </div>
      </section>

      {/* Public Transportation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Public Transportation Software Solutions
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our public transportation software solutions provide transit
              agencies with enhanced fleet and passenger-oriented features for
              safe, simplified transit experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-1 lg:order-2">
              <img
                src="/transport1.webp"
                alt="Public Transportation"
                className="rounded-xl shadow-lg w-full max-w-lg"
              />
            </div>
            
            {/* <div className="space-y-8 order-2 lg:order-1">
              {transportSolutions.map((solution, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="text-4xl text-blue-600 mr-5">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-md transition duration-300">
              GET PUBLIC TRANSPORT SOFTWARE SOLUTIONS
            </button>
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Employee Transportation Options
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We prioritize convenient commuting options for all our employees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Near Metro Station</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our office is conveniently located just 100 meters away from the
                nearest metro station for easy access to public transport.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100 meters from metro station</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quick access to public transport</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Convenient for metro commuters</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Company Transport</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We provide company transport services for employees who prefer a
                comfortable and direct commute across the city.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Shuttle services to key city areas</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comfortable air-conditioned buses</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Scheduled pick-up and drop-off</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transportation;