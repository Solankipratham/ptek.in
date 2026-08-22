import React from "react";
import {
  FaPlane,
  FaCalendarAlt,
  FaTools,
  FaCogs,
  FaUsers,
  FaChartLine,
  FaSuitcase,
  FaDolly,
  FaCloud,
  FaRegHandshake,
  FaCheck,
  FaArrowRight,
  FaHeadset,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Aviation = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative  text-black py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
              AVIATION SOFTWARE DEVELOPMENT
            </h1>
            <p className="text-xl mb-8 max-w-lg opacity-90">
              Revolutionize aviation operations with AI-powered solutions for
              seamless integration and enhanced efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={"/contact"}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2 text-lg"
              >
                Start Your Project <FaArrowRight />
              </Link>
              <button className="bg-transparent  border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium flex items-center justify-center gap-2">
                <FaHeadset /> Contact Sales
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-full h-full bg-blue-600 rounded-xl overflow-hidden shadow-2xl transform rotate-3">
                <div className="bg-gray-200  border-dashed rounded-xl w-full h-96" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* MRO Solutions Section */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Custom Maintenance, Repair, & Overhaul (MRO) Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 text-lg">
              Ptek delivers aviation maintenance, repair, and overhaul (MRO)
              software solutions to aircraft maintenance directors, flight
              schedulers & dispatchers, inventory parts managers, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaTools className="text-4xl mx-auto" />,
                title: "Custom MRO Tracking Software",
                description:
                  "Harness the power of machine learning and AI technologies to engineer MRO tracking solutions with automated mechanic assignments, assisted discrepancy reporting, auto part suggestions, and much more.",
              },
              {
                icon: <FaChartLine className="text-4xl mx-auto" />,
                title: "Aviation MRO System Integrations",
                description:
                  "Aviation MRO systems integrate with performance reporting, information systems (PRISM), inventory management & order processing systems (IMOPS), accounting systems, OEM databases, and ERP programs.",
              },
              {
                icon: <FaSuitcase className="text-4xl mx-auto" />,
                title: "MRO Compliance Software Development",
                description:
                  "Our custom MRO compliance systems are built with document, risk, vendor, staff, and CAPA management modules to ensure full compliance with regulatory standards, including FAA, CAB, FAR, ADC, EFL, NPWrs, and others.",
              },
              {
                icon: <FaCloud className="text-4xl mx-auto" />,
                title: "Aviation Human Capital Management (HCM)",
                description:
                  "Develop comprehensive aviation HCM platforms to streamline employee management, recruitment & onboarding, workforce planning, payroll & benefits, and more to support a thriving, results-oriented culture.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium text-lg transition-colors duration-300">
              Get MRO Software Developers
            </button>
          </div>
        </div>
      </section>

      {/* Drone Software Section */}
      <section className="py-20 px-4 sm:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Custom Drone Software Development
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 text-lg">
              Ptek develops custom drone software for agriculture, construction,
              cinematography, indoor/outdoor inspections, search-and-rescue, and
              many other industry sectors.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/Custom Drone Software Development.jpg"
                    alt="Aviation Software Development"
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="bg-gray-200  border-dashed rounded-xl w-full h-96" /> */}
                </div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full shadow-xl z-10"></div>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaDolly className="text-3xl" />,
                  title: "Mission Critical Drone Software Development",
                  description:
                    "Develop drone software for mission-critical operations, enabling the inspection of assets in metropolitan and remote areas using advanced LIDAR sensor configurations and high-resolution 3D photogrammetry.",
                },
                {
                  icon: <FaRegHandshake className="text-3xl" />,
                  title: "Drone Mapping Software Development",
                  description:
                    "Our cross-platform drone mapping software allows users to gain aerial views, consolidate hundreds of acres of land into consumable maps, share maps, visualize temperature ranges, and gain valuable insights in real-time.",
                },
                {
                  icon: <FaCloud className="text-3xl" />,
                  title: "Drone Photogrammetry Software Development",
                  description:
                    "Leverage third-party GIS solutions to engineer geospatial mapping interfaces for photogrammetry software, transforming thermal, infrared, and RGB imagery into 3D terrain models & orthomosaic maps.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium text-lg transition-colors duration-300">
              Get Drone Software Developers
            </button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Aviation Software Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 text-lg">
              Comprehensive software solutions tailored to meet the unique needs
              of the aviation industry
            </p>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {[
    {
      title: "Flight Operations Software",
      description:
        "Our flight operations solutions streamline scheduling, dispatching, and real-time tracking, ensuring efficient flight management.",
      features: [
        "Flight scheduling and dispatching",
        "Real-time tracking and monitoring",
        "Automated reporting and analytics",
        "Integration with existing systems",
      ],
      image: "/Flight Operations Software.jpg",
    },
    {
      title: "Maintenance, Repair, and Overhaul (MRO) Software",
      description:
        "Our MRO solutions optimize maintenance workflows, track compliance, and manage inventory, ensuring aircraft readiness and safety.",
      features: [
        "Maintenance scheduling and tracking",
        "Compliance management",
        "Inventory and parts management",
        "Work order management",
      ],
      image: "/IT Support.jpg",
    },
    {
      title: "Passenger Service Systems (PSS)",
      description:
        "Our PSS solutions enhance the passenger experience through efficient booking, check-in, and boarding processes.",
      features: [
        "Online booking and reservation systems",
        "Check-in and boarding management",
        "Mobile application development",
        "Customer relationship management (CRM) integration",
      ],
      image: "/Passenger Service Systems.jpg",
    },
  ].map((service, index) => (
    <div
      key={index}
      className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
    >
      <img
        src={service.image}
        alt={service.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-blue-900">
          {service.title}
        </h3>
        <p className="text-gray-700 mb-4">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 sm:px-8  text-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Aviation Technology Solutions
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Beyond core software solutions, we offer a range of services to
                further enhance your aviation operations:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Drone software development",
                  "Flight planning and scheduling systems",
                  "Digital twinning for aircraft maintenance",
                  "AI-powered flight operations solutions",
                  "Aviation cybersecurity services",
                  "Flight data analytics platforms",
                  "Crew management systems",
                  "Fuel optimization software",
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center mr-3">
                      <FaCheck className="text-white" />
                    </div>
                    <span className="text-lg">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 bg-blue-200 rounded-2xl p-8 shadow-2xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Why Choose Our Aviation Solutions?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Industry-specific expertise with 15+ years in aviation",
                    "Compliance with FAA, EASA, and other global regulations",
                    "Scalable solutions for airlines of all sizes",
                    "24/7 technical support and maintenance",
                    "Seamless integration with existing systems",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                        <FaCheck className="text-white text-xs" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="font-bold mb-3">
                  Ready to Transform Your Operations?
                </h4>
                <p className="mb-4 opacity-90">
                  Schedule a free consultation with our aviation experts
                </p>
                <button className="bg-white text-blue-900 hover:bg-blue-100 py-3 px-6 rounded-lg font-medium w-full transition-colors duration-300">
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-8  text-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Aviation Operations
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Partner with us to develop customized software solutions that meet
            the unique needs of your aviation business. Our team is dedicated to
            delivering high-quality, scalable, and user-friendly applications
            that drive efficiency and enhance safety.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={"/contactsection"}
              className="bg-white text-blue-900 hover:bg-blue-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300"
            >
              Contact Us Today
            </Link>
            <button className="bg-transparent  border-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aviation;
