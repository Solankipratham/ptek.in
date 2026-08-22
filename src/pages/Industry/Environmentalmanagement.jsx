import React from "react";
import {
  FaCogs,
  FaShieldAlt,
  FaClipboardCheck,
  FaDatabase,
  FaCloudRain,
  FaChartBar,
  FaBell,
  FaClipboardList,
  FaRecycle,
  FaWater,
  FaLeaf,
  FaLightbulb,
  FaUsers,
  FaGlobeAmericas,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const EnvironmentalManagement = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-extrabold  text-black">
                Environmental Management
              </h1>
              <p className="mt-6 text-xl text-blue-900 max-w-3xl">
                At our company, we take pride in being responsible stewards of the
                environment. We are dedicated to implementing sustainable practices
                across all our operations, ensuring that we not only meet current
                environmental standards but also work towards a greener future.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contactsection"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-300 transition duration-300"
                >
                  Start Your Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 "></div>
      </div>

      {/* Environmental Management Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Environmental Management Software Solutions
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-900">
              Chetu developers create custom environmental management software
              built with custom database reporting platforms that track, store,
              and manage essential environmental compliance requirements for
              air, water, and waste emissions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaCogs className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Environmental Management System Development
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Develop software tailored to environmental systems that
                      ensure compliance and efficient tracking of environmental
                      metrics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaShieldAlt className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Risk Management Assessment Software
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Identify, assess, and mitigate environmental risks
                      effectively with our custom assessment tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaClipboardCheck className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Compliance for Audits, Inspections, & Permits
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Ensure regulatory compliance with tools designed for
                      seamless audits, inspections, and permit management.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaDatabase className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Inventory Management & Waste Tracking
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Optimize waste tracking and inventory management with our
                      advanced software solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaCloudRain className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Weather Management Software
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Leverage software to analyze and respond to weather patterns
                      affecting environmental strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/EnvironmentManagements.png"
                  alt="Environmental Management"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              HIRE EMS DEVELOPERS
            </Link>
          </div>
        </div>
      </section>

      {/* Environmental Management System Development */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Environmental Management System Development
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Chetu's custom environmental management system incorporates
              customizable features to monitor & manage parameters, regulatory
              limits, and compliance aspects with cutting-edge Artificial
              Intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/ManagementSystem.png"
                  alt="Environmental Management System"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-blue-50 rounded-2xl p-8">
                <ul className="space-y-4">
                  {[
                    "Compliance Management Tracker & Calendar",
                    "Hazardous Materials Management",
                    "Permit & Regulation Tracker",
                    "Inventory Management",
                    "Air, Water, & Waste Tracker/Log",
                    "Performance Metrics",
                    "Reporting & Analytics Dashboards",
                    "Supplier Management",
                    "KPI Monitoring Tools"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="bg-blue-600 p-1 rounded-full">
                          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <p className="ml-3 text-lg font-medium text-gray-900">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              CALL EMS DEVELOPERS NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Environmental Risk Management */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Environmental Risk Management Assessment Database Software
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              We develop Enterprise Resource Planning (ERP) and Energy Trading
              Risk Management (ETRM) software systems that document policies,
              trade investigations in the energy sector, and ensure code
              compliance at local, state, and federal levels to maintain
              cleaner-greener ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaChartBar className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Internal Activity Status, Escalation & Log Reporting
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Integrated with JIRA ticketing systems, we design
                      customizable activity logging & reporting modules for
                      employees to maintain internal processes during corrective
                      instances.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaBell className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Notification Automation & Trigger Solutions
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Create customizable alert triggers and personalized
                      notifications to detect inconsistencies in real time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaShieldAlt className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Internal Risk Assessment Auditing
                    </h3>
                    <p className="mt-2 text-gray-600">
                      We enable Role-Based Access Control (RBAC) modules and other
                      robust auditing features to ensure policy and operational
                      integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/EnvironmentalRisk.png"
                  alt="Risk Management"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
            >
              ASSESS ENVIRONMENTAL RISKS WITH EASE
            </Link>
          </div>
        </div>
      </section>

      {/* Environmental Health and Safety */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Environmental Health and Safety Software Systems for Audits,
              Inspections, & Permits
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Chetu's custom EHS software integrates Digital Asset Management
              (DAM) solutions to store inspections, permits, and audit documents
              from local municipalities, state, federal, and EU governance
              bodies to ensure compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaClipboardList className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Environmental Permit Management Software
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Ensure consistent permit management across your organization
                      with workflows to track and report real-time intelligence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaCloudRain className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Environmental Air-Compliance Management Software
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Seamlessly integrate to monitor, configure, and track air
                      permit compliance and emission requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaWater className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Environmental Marine & Runoff Compliance Solutions
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Manage compliance for water treatments with configured
                      triggers and notifications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <FaRecycle className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">
                      Environmental Waste Emissions Software
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Develop solutions for waste management tracking and
                      compliance with the U.S. Environmental Protection Act.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src="/RiskManagement.png"
                  alt="Risk Management"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas of Environmental Management */}
      <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              Key Areas of Environmental Management
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sustainable Practices */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <FaLeaf className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  Sustainable Practices
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Our commitment to sustainability is embedded in our operations,
                  from sourcing materials responsibly to reducing waste at every
                  stage.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Use of renewable energy sources</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Minimizing waste and optimizing recycling</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Promoting eco-friendly materials and packaging</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Environmental Compliance */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <FaLightbulb className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  Environmental Compliance
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  We adhere to all environmental regulations and strive to exceed
                  industry standards to maintain cleaner-greener ecosystems.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Adherence to environmental laws and regulations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Continuous monitoring of environmental performance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Green certifications and partnerships</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Eco-Friendly Initiatives */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <FaGlobeAmericas className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  Eco-Friendly Initiatives
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  Our eco-friendly initiatives focus on fostering a culture of
                  sustainability within our workforce and community.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Energy-efficient office practices</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Encouraging green building and LEED certification</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Supporting environmental community outreach programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Environmental Goals */}
          <div className="mt-20  rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Our Environmental Goals
            </h3>
            <p className="text-blue-900 max-w-3xl mx-auto">
              As a forward-thinking company, we are constantly setting and reviewing
              our environmental goals to ensure we are doing our part to create a
              more sustainable world. Our objectives include reducing energy
              consumption by 30%, minimizing waste by 50%, and ensuring that all
              operations comply with the highest environmental standards.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Us in Our Environmental Mission
            </h3>
            <p className="text-blue-100 max-w-3xl mx-auto mb-8">
              We believe in creating a sustainable future, and we encourage everyone
              – from our employees to our partners – to take part in our mission. By
              adopting green practices and working together, we can make a
              significant positive impact on the planet.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-blue-400 hover:bg-blue-300 transition duration-300"
            >
              Learn More About Our Green Initiatives
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalManagement;