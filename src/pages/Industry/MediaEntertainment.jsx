import React from "react";
import { Link } from "react-router-dom";
import { Database, Tv, FileText } from "lucide-react"; // icons used: DAM, Streaming, CMS
 
const MediaEntertainment = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
<div className="relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Side */}
      <div className="text-black">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Media & Entertainment Software Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-900 mb-8">
          Our company specializes in developing custom software solutions for
          the media and entertainment industry. We offer a comprehensive suite
          of services designed to enhance content creation, distribution, and
          consumption, ensuring seamless experiences for both creators and
          audiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to={"/contactsection"} 
            className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-4 rounded-lg transition duration-300 text-center"
          >
            Start Your Project →
          </Link>
          <Link 
            to={"/services"} 
            className="bg-white hover:bg-gray-100 text-[#0a192f] font-semibold px-8 py-4 rounded-lg transition duration-300 text-center"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Right Side with Image */}
      <div className="flex justify-center">
        <div className="relative">
          <img
            src="/media.png" // 👈 Replace with actual image path
            alt="Media & Entertainment"
            className=" w-full h-96 object-cover  "
          />
          
        </div>
      </div>
    </div>
  </div>
</div>


      {/* Service Areas */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
          Our Service Areas
        </h2>
        <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          We provide cutting-edge solutions tailored to the unique needs of the media and entertainment industry.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Digital Asset Management */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="bg-blue-50 text-blue-600 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
              Digital Asset Management
            </h3>
            <p className="text-gray-600 mb-4">
              Our Digital Asset Management (DAM) solutions enable efficient
              organization, storage, and retrieval of digital assets, streamlining
              workflows and enhancing collaboration across teams.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Centralized asset storage</li>
              <li>Advanced search and retrieval capabilities</li>
              <li>Version control and metadata management</li>
            </ul>
          </div>
          <div className="bg-[#f8fafc] px-6 py-4 border-t border-gray-100">
            <Link to="/services/digital-asset-management" className="text-[#2563eb] font-medium hover:underline">
              Explore Service
            </Link>
          </div>
        </div>

        {/* Streaming Solutions */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="bg-blue-50 text-blue-600 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
              <Tv className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
              Streaming Solutions
            </h3>
            <p className="text-gray-600 mb-4">
              We develop robust streaming platforms that support live and
              on-demand content delivery, ensuring high-quality experiences across
              various devices and networks.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Live streaming platforms</li>
              <li>On-demand video services</li>
              <li>Adaptive bitrate streaming</li>
            </ul>
          </div>
          <div className="bg-[#f8fafc] px-6 py-4 border-t border-gray-100">
            <Link to="/services/streaming-solutions" className="text-[#2563eb] font-medium hover:underline">
              Explore Service
            </Link>
          </div>
        </div>

        {/* Content Management Systems */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="bg-blue-50 text-blue-600 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#0a192f] mb-4">
              Content Management Systems
            </h3>
            <p className="text-gray-600 mb-4">
              Our CMS solutions empower organizations to create, manage, and
              distribute content efficiently, enhancing audience engagement and
              operational efficiency.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Customizable content workflows</li>
              <li>Multi-channel content distribution</li>
              <li>Analytics and reporting tools</li>
            </ul>
          </div>
          <div className="bg-[#f8fafc] px-6 py-4 border-t border-gray-100">
            <Link to="/services/content-management" className="text-[#2563eb] font-medium hover:underline">
              Explore Service
            </Link>
          </div>
        </div>
      </div>
    </div>

      {/* Additional Services */}
      <div className="bg-[#f8fafc] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-4">
              Additional Services
            </h2>
            <div className="w-24 h-1 bg-[#2563eb] mx-auto"></div>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond core software solutions, we offer a range of services to
              further enhance your media and entertainment operations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#0a192f] mb-3">Mobile Apps</h3>
              <p className="text-gray-600">Cross-platform application development</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#0a192f] mb-3">AR/VR</h3>
              <p className="text-gray-600">Immersive augmented and virtual reality experiences</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#0a192f] mb-3">AI/ML</h3>
              <p className="text-gray-600">Artificial Intelligence and Machine Learning integration</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-[#0a192f] mb-3">Blockchain</h3>
              <p className="text-gray-600">Technology for content rights management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#0a192f] to-[#1a365d] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">250+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-white">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Industry Experts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className=" rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Transform Your Media Business
              </h3>
              <p className="text-lg text-black mb-6">
                Partner with us to develop customized software solutions that meet the
                unique needs of your media and entertainment business. Our team is
                dedicated to delivering high-quality, scalable, and user-friendly
                applications that drive efficiency and enhance audience engagement.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Link
                to={"/contactsection"}
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition duration-300 shadow-lg"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaEntertainment;