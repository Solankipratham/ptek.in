import React from 'react';
import { Link } from 'react-router-dom';

const HCM = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
       <div className="relative py-24 px-6 sm:px-12 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div className="text-black">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Human Capital Management (HCM)
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              At our company, we understand that our employees are our greatest
              asset. Human Capital Management (HCM) is at the core of our strategy
              for ensuring a productive, engaged, and happy workforce.
            </p>
            <Link
              to="/contactsection"
              className="inline-block bg-white text-[#2563eb] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
            >
              Start Your Project →
            </Link>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <img
              src="/Screenshot_2025-07-18_at_3.40.34_PM-removebg-preview.png" // Replace with your actual path
              alt="Human Capital Management"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
            />
          </div>
        </div>
      </div>
    </div>

      {/* Key Areas of HCM */}
     <div className="py-16 px-6 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2c6d] mb-4">
            Key Areas of HCM
          </h2>
          <div className="h-1 w-24 bg-[#2563eb] mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recruitment & Onboarding */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
            <img
              src="/hcm1.webp" // 🔁 Replace with your actual image path
              alt="Recruitment"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0f2c6d] mb-4">
                Recruitment & Onboarding
              </h3>
              <p className="text-gray-700 mb-4">
                Our recruitment process is designed to attract the best talent from around the world. We aim to bring in diverse skills and backgrounds to foster innovation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2563eb] mr-2">•</span>
                  <span className="text-gray-700">Attracting top talent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563eb] mr-2">•</span>
                  <span className="text-gray-700">Comprehensive onboarding programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563eb] mr-2">•</span>
                  <span className="text-gray-700">Personalized training and mentorship</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Employee Development */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
            <img
              src="/hcm2.webp" // 🔁 Replace with your actual image path
              alt="Employee Development"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0f2c6d] mb-4">
                Employee Development
              </h3>
              <p className="text-gray-700 mb-4">
                We are committed to the continuous growth of our employees through personalized development plans, leadership training, and skills enhancement programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2563eb] mr-2">•</span>
                  <span className="text-gray-700">Personalized development plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563eb] mr-2">•</span>
                  <span className="text-gray-700">Leadership and management training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563eb] mr-2">•</span>
                  <span className="text-gray-700">Skills enhancement workshops</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Employee Engagement & Retention */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100">
            <img
              src="/hcm3.webp" // 🔁 Replace with your actual image path
              alt="Engagement & Retention"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#0f2c6d] mb-4">
                Employee Engagement & Retention
              </h3>
              <p className="text-gray-700 mb-4">
                Our employees' well-being and engagement are essential to our success. We focus on fostering a supportive and inclusive environment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#2563eb] mr-2">•</span>
                  <span className="text-gray-700">Employee well-being programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563eb] mr-2">•</span>
                  <span className="text-gray-700">Work-life balance initiatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2563eb] mr-2">•</span>
                  <span className="text-gray-700">Recognition and rewards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Additional Services */}
      <div className="py-16 px-6 sm:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#0f2c6d] mb-4">Additional HCM Services</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our comprehensive HCM services also include a range of specialized solutions to meet all your human capital needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-[#2563eb] text-3xl mb-4">01</div>
                <h3 className="text-xl font-semibold text-[#0f2c6d] mb-2">Performance Management</h3>
                <p className="text-gray-700">
                  Strategic approaches to employee performance evaluation and growth.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-[#2563eb] text-3xl mb-4">02</div>
                <h3 className="text-xl font-semibold text-[#0f2c6d] mb-2">Compensation & Benefits</h3>
                <p className="text-gray-700">
                  Competitive and fair compensation packages tailored to your workforce.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-[#2563eb] text-3xl mb-4">03</div>
                <h3 className="text-xl font-semibold text-[#0f2c6d] mb-2">Employee Relations</h3>
                <p className="text-gray-700">
                  Building positive relationships between management and employees.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-[#2563eb] text-3xl mb-4">04</div>
                <h3 className="text-xl font-semibold text-[#0f2c6d] mb-2">Talent Management</h3>
                <p className="text-gray-700">
                  Identifying, developing, and retaining your organization's top talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-6 sm:px-8 lg:px-16 ">
        <div className="max-w-5xl mx-auto text-center text-black">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Start Investing in Your Team Today
          </h3>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Our commitment to Human Capital Management ensures that we not only
            attract the best talent but also nurture, grow, and retain our
            employees for long-term success.
          </p>
          <Link
            to="/contactsection"
            className="inline-block bg-white text-[#2563eb] font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HCM;