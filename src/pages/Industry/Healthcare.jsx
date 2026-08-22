import React from "react";
import {
  FaRobot,
  FaHeartbeat,
  FaStethoscope,
  FaLaptopMedical,
  FaChartLine,
  FaMobileAlt,
  FaCogs,
  FaCloud,
  FaArrowRight,
  FaCheck
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Healthcare = () => {
  return (
    <div className="font-sans">
      {/* Modern Hero Section */}
      <div className="relative  text-black">
        <div className="absolute inset-0 bg-[url('/Images/healthcare-bg-pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Employee Healthcare & Wellness
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
              At our company, we prioritize the health and well-being of our
              employees. We understand that a healthy and happy workforce is the
              backbone of our success, and we are dedicated to providing
              comprehensive healthcare services and support to all of our team
              members.
            </p>
            <Link
              to={"/contact"}
              className="inline-flex items-center bg-[#0066cc] hover:bg-[#0052a3] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 group"
            >
              Start Your Project
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-xl p-6 shadow-xl max-w-md">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-500 rounded-xl p-4 shadow-lg">
                <div className="bg-blue-300 border-2 border-dashed rounded-xl w-24 h-24" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI-Powered Solutions Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A142F] mb-6">
              AI-Powered Custom Healthcare Software Development Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Our expert-level software developers leverage the power and
              versatility of Artificial Intelligence (AI) to design and
              implement innovative solutions to meet the healthcare industry’s
              evolving needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaRobot className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0A142F] mb-3">
                AI-Enabled Remote Monitoring
              </h3>
              <p className="text-gray-600">
                Our skilled software developers enable healthcare professionals
                to monitor patients remotely in real-time.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaHeartbeat className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0A142F] mb-3">
                AI-Powered EHRs
              </h3>
              <p className="text-gray-600">
                Electronic Health Record platforms are integral to streamlining
                patient documents.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaStethoscope className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0A142F] mb-3">
                Natural Language Processing
              </h3>
              <p className="text-gray-600">
                We transform complex data into a medically-based language to
                support medical providers.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaLaptopMedical className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0A142F] mb-3">
                Medical AI Chatbots
              </h3>
              <p className="text-gray-600">
                Our AI chatbots utilize Natural Language Processing (NLP) to
                increase patient engagement.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaChartLine className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0A142F] mb-3">
                Medical Imaging Analysis
              </h3>
              <p className="text-gray-600">
                We seamlessly integrate AI-based, predictive analytics to
                monitor and analyze medical images.
              </p>
            </div>

            {/* Service Card 6 - Image Placeholder */}

          </div>
        </div>
      </div>

      {/* EHR App Development Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A142F] mb-6">
              Electronic Health Record / Medical Record App Development
            </h2>
            <p className="text-lg text-gray-600">
              We engineer custom web, desktop, or mobile apps that promote
              enhanced interoperability and streamline clinical workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* EHR Card 1 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <FaMobileAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0A142F] mb-3">
                Mobile App Development
              </h3>
              <p className="text-gray-600 mb-4">
                Provide custom design and development of eHealth apps that
                allow seamless exchange of health-related information.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Patient data tracking</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Secure messaging</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Medication reminders</span>
                </li>
              </ul>
            </div>

            {/* EHR Card 2 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <FaCogs className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0A142F] mb-3">
                Implementation Services
              </h3>
              <p className="text-gray-600 mb-4">
                Healthcare app developers facilitate the implementation of
                legacy record of medical software systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Data migration</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>User training</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>ICD-10 codes integration</span>
                </li>
              </ul>
            </div>

            {/* EHR Card 3 */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <FaCloud className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0A142F] mb-3">
                Integration Services
              </h3>
              <p className="text-gray-600 mb-4">
                Integrate third-party technologies for seamless healthcare operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Cloud-based billing</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Lab data transfers</span>
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" />
                  <span>Insurance databases</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to={"/contact"}
              className="inline-flex items-center bg-[#0A142F] hover:bg-[#1a365d] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 group"
            >
              Consultation for EHR
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A142F] mb-6">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-lg text-gray-600">
              We provide a wide range of healthcare services to ensure the well-being of your team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Health Insurance */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FaHeartbeat className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0A142F]">Health Insurance</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We offer comprehensive health insurance coverage for all our
                employees, included in their salary package.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Full medical coverage for employees and families</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Prescription medication coverage</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Annual health check-ups</span>
                </li>
              </ul>
            </div>

            {/* Medical Services */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FaStethoscope className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0A142F]">Medical Services</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our company ensures that all medical services are readily
                available to employees.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>On-site healthcare professionals</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Access to medical consultations</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Emergency medical support</span>
                </li>
              </ul>
            </div>

            {/* Wellness Programs */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FaChartLine className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-[#0A142F]">Wellness Programs</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We offer various wellness programs that promote physical and mental well-being.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Fitness and yoga classes</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Stress management programs</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Nutrition workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-10 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold text-[#0A142F] mb-6">
                  Additional Healthcare & Wellness Services
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our comprehensive healthcare and wellness services also include:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <FaCheck className="text-blue-600" />
                    </div>
                    <span className="text-lg font-medium">Employee Assistance Programs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <FaCheck className="text-blue-600" />
                    </div>
                    <span className="text-lg font-medium">Mental Health Support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <FaCheck className="text-blue-600" />
                    </div>
                    <span className="text-lg font-medium">Flexible Working Arrangements</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <FaCheck className="text-blue-600" />
                    </div>
                    <span className="text-lg font-medium">Health and Fitness Challenges</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16  text-black">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Invest in Your Health Today
          </h3>
          <p className="text-lg max-w-2xl mx-auto mb-10 opacity-90">
            We prioritize the well-being of our employees by providing
            comprehensive healthcare services and wellness programs. Join us in
            fostering a healthy, happy, and productive workforce that drives
            success.
          </p>
          <Link
            to={"/contactsection"}
            className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 group"
          >
            Contact Us Today
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;