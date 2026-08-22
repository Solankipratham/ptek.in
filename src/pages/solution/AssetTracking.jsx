
import React from "react";
import { Link } from "react-router-dom";
import { 
  FaCogs, 
  FaDesktop, 
  FaMobileAlt, 
  FaWarehouse,
  FaSearchLocation,
  FaChartLine,
  FaShieldAlt,
  FaFileAlt,
  FaBuilding,
  FaMoneyBillWave,
  FaExchangeAlt,
  FaFileInvoiceDollar,
  FaArchive,
  FaCheckCircle,
  FaHeadset,
  FaTools,
  FaClipboardCheck
} from "react-icons/fa";
import heroImg from "/Presales-Bidding-Home.png"
import jon from "/jon-tyson-FlHdnPO6dlw-unsplash.jpg"
import asset1 from "/asset1.webp"
import asset2 from "/asset2.webp"
import asset3 from "/asset3.webp"
import asset4 from "/asset4.webp"

const AssetTrackingHero = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Asset Tracking
              </span>{' '}
              Solutions for Enhanced Visibility
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Streamline your operations and maximize asset utilization with our cutting-edge 
              tracking solutions. From real-time monitoring to predictive analytics, our services 
              ensure efficiency, transparency, and cost optimization for businesses of all sizes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/contactsection"
                className="bg-black hover:bg-blue-800 text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project →
              </a>
            </div>
          </div>

          {/* Right side - Asset Tracking showcase */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-2xl rounded-xl overflow-hidden">
              <img 
                src={heroImg}
                alt="Asset tracking dashboard showing real-time monitoring"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const AssetIntelligence = () => {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div>
        {/* Hero Section */}
        <section className="text-center py-10 bg-gray-100">
          <h1 className="text-3xl font-semibold mb-4">Hire Experienced Asset Tracking Software Developers</h1>
          <p className="text-lg mb-6">
            Our expert developers have many years of combined experience in the supply chain industry and developing shipping & logistics, warehouse management, freight forwarding, and order processing software solutions to simplify asset tracking workflows throughout the transportation of goods from start to finish.
          </p>
          <button className="px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors">
            Get Asset Tracking Developers
          </button>
        </section>

        {/* Features Section */}
        <section className="flex flex-col lg:flex-row items-center gap-8 px-6 lg:px-10 py-10">
          <div className="flex justify-center lg:w-1/2">
            <img 
              src={jon} 
              alt="Asset Tracking Software" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {/* Feature 1 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaCogs />
              </div>
              <h3 className="text-xl font-bold mb-2">Asset Performance Management</h3>
              <p className="text-gray-600">
                We develop systems equipped with data capture abilities, visualizations, and analytics to provide condition monitoring and predictive forecasting so that critical assets can be thoroughly monitored and equipment failures can be anticipated before they occur.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaDesktop />
              </div>
              <h3 className="text-xl font-bold mb-2">Computerized Maintenance Management</h3>
              <p className="text-gray-600">
                We develop Computerized Maintenance Management (CMMS) software to minimize downtime and enhance asset performance by managing work orders, tracking & scheduling preventive maintenance, managing service requests, and more.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile Asset Management</h3>
              <p className="text-gray-600">
                We build native iOS and Android and cross-platform mobile apps with GPS-powered asset tracking maps, camera scanners, and full database functionality, equipped with notification systems for alerting users of when assets have been relocated without proper permissions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                <FaWarehouse />
              </div>
              <h3 className="text-xl font-bold mb-2">Fixed Asset Tracking Software</h3>
              <p className="text-gray-600">
                We develop customized fixed asset tracking software equipped with interactive maps, customizable fields, asset directories, photo tagging capabilities, reporting tools, third-party integrations, and more using leading data systems like Oracle, SQL Server, and MySQL.
              </p>
            </div>
          </div>
        </section>

        {/* AI Solutions Section */}
        <div className="bg-gray-50 text-gray-800">
          <section className="py-10 px-6 text-center">
            <h1 className="text-3xl font-bold">AI-Powered Asset Tracking Software Solutions</h1>
            <p className="mt-4 text-lg text-gray-600">
              Our AI-enabled asset-tracking solutions redefine asset management by providing real-time tracking, optimizing efficiency, and enhancing security through AI anomaly detection. Our advanced reporting and analytics features ensure valuable insights for informed decision-making.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 py-10">
            {/* AI Feature 1 */}
            <div className="text-center">
              <FaSearchLocation className="mx-auto mb-4 text-blue-500 text-5xl" />
              <h3 className="text-xl font-semibold">Real-Time Tracking and Location with AI</h3>
              <p className="mt-2 text-gray-600">
                Our team can develop AI algorithms to power computer vision that analyzes images or video feeds in real-time to identify and track assets...
              </p>
            </div>

            {/* AI Feature 2 */}
            <div className="text-center">
              <FaChartLine className="mx-auto mb-4 text-green-500 text-5xl" />
              <h3 className="text-xl font-semibold">Enhanced Operational Efficiency with AI</h3>
              <p className="mt-2 text-gray-600">
                Our AI-driven predictive analytics analyze historical data and usage patterns to forecast when assets will likely require maintenance...
              </p>
            </div>

            {/* AI Feature 3 */}
            <div className="text-center">
              <FaShieldAlt className="mx-auto mb-4 text-yellow-500 text-5xl" />
              <h3 className="text-xl font-semibold">Security and Anomaly Detection Enhanced by AI</h3>
              <p className="mt-2 text-gray-600">
                Our Machine Learning models are trained to recognize normal patterns of asset behavior. When deviations or anomalies occur...
              </p>
            </div>
          </section>

          <div className="text-center py-6">
            <button className="bg-black text-white py-3 px-8 rounded hover:bg-gray-800 transition-colors">
              GET AI-POWERED ASSET TRACKING SOLUTIONS
            </button>
          </div>

          {/* Custom Solutions Section */}
          <section className="bg-white py-10 px-6">
            <h2 className="text-2xl font-bold text-center mb-6">Custom Asset Tracking Solutions</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
              Our asset tracking experts develop custom solutions for the tracking and management of assets such as heavy equipment, tools, vehicles, and technology with features to effectively monitor assets throughout your entire organization and supply chain.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
              {/* Solution 1 */}
              <div className="text-center">
                <FaFileAlt className="mx-auto mb-4 text-purple-500 text-4xl" />
                <h3 className="text-xl font-semibold">IT Asset Tracking Solutions</h3>
                <p className="mt-2 text-gray-600">
                  Our solutions help manage software and hardware components of IT assets with barcodes, perform system-wide audits...
                </p>
              </div>

              {/* Solution 2 */}
              <div className="text-center">
                <FaBuilding className="mx-auto mb-4 text-teal-500 text-4xl" />
                <h3 className="text-xl font-semibold">Facility Management Solutions</h3>
                <p className="mt-2 text-gray-600">
                  We develop solutions that optimize record-keeping and ensure all assets are accounted for by allowing you to manage...
                </p>
              </div>

              {/* Solution 3 */}
              <div className="text-center">
                <FaMoneyBillWave className="mx-auto mb-4 text-yellow-500 text-4xl" />
                <h3 className="text-xl font-semibold">Funding Management Solutions</h3>
                <p className="mt-2 text-gray-600">
                  Our custom solutions can manage approved funds and assets purchased with them, disperse them accordingly...
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* EDI Solutions Section */}
        <div className="bg-gray-50 text-gray-800">
          <section className="py-10 px-6">
            <h2 className="text-2xl font-bold text-center mb-6">Custom EDI Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20">
              {/* EDI Feature 1 */}
              <div className="flex items-center">
                <FaWarehouse className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Custom EDI Solutions</h3>
                  <p className="text-gray-600">
                    Our expert team of Asset Tracking Software Developers engineer custom web-based, on-premise, and hybrid systems to enable reliable EDI software communications that conform to prominent standards.
                  </p>
                </div>
              </div>

              {/* EDI Feature 2 */}
              <div className="flex items-center">
                <FaExchangeAlt className="text-green-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">EDI Development</h3>
                  <p className="text-gray-600">
                    Our expert EDI developers have extensive experience with all types of EDI methodologies, including Direct EDI, Mobile EDI, and EDI Outsourcing.
                  </p>
                </div>
              </div>

              {/* EDI Feature 3 */}
              <div className="flex items-center">
                <FaFileInvoiceDollar className="text-yellow-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">EDI Translations</h3>
                  <p className="text-gray-600">
                    We translate your existing EDI to adhere to ANSI ASC, EDIFACT, JSON, or TRADACOMS standards to effectively communicate codes.
                  </p>
                </div>
              </div>

              {/* EDI Feature 4 */}
              <div className="flex items-center">
                <FaArchive className="text-red-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Digital EDI Filing & Storage</h3>
                  <p className="text-gray-600">
                    Our EDI solutions ensure all information is securely stored with advanced access controls like Role-Based User Controls (RBAC).
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-6">
              <button className="bg-[#171717] text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors">
                GET CUSTOM EDI INTEGRATIONS
              </button>
            </div>
          </section>

          {/* Support Services Section */}
          <section className="py-10 px-6 bg-white">
            <h2 className="text-2xl font-bold text-center mb-6">Asset Tracking Software Support Services</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              Asset tracking software is crucial for organizations as it optimizes asset utilization, reduces costs, enhances efficiency, mitigates risks, and provides supply chain visibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20">
              {/* Support 1 */}
              <div className="flex items-center">
                <FaCheckCircle className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Comprehensive Application Support</h3>
                  <p className="text-gray-600">
                    Our technical application support assists organizations with integration, usability improvements, and addressing data integrity issues.
                  </p>
                </div>
              </div>

              {/* Support 2 */}
              <div className="flex items-center">
                <FaHeadset className="text-green-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Responsive 24/7 Help Desk</h3>
                  <p className="text-gray-600">
                    Our experts provide around-the-clock support powered by an advanced ticketing system to minimize downtime.
                  </p>
                </div>
              </div>

              {/* Support 3 */}
              <div className="flex items-center">
                <FaTools className="text-yellow-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Extended Support & Maintenance</h3>
                  <p className="text-gray-600">
                    Our extended support enhances resilience and keeps systems updated with the latest advancements.
                  </p>
                </div>
              </div>

              {/* Support 4 */}
              <div className="flex items-center">
                <FaClipboardCheck className="text-red-500 text-4xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold">Quality Assurance & Testing</h3>
                  <p className="text-gray-600">
                    We ensure reliability through rigorous quality assurance and performance assessments.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center py-6">
              <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors">
                GET APPLICATION SUPPORT
              </button>
            </div>
          </section>
        </div>

        {/* Asset Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img 
              src={asset1} 
              alt="Real-Time Asset Tracking" 
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Real-Time Asset Tracking</h2>
            <p className="text-black text-sm sm:text-base">
              Monitor the location and status of your assets in real time. Improve visibility across your supply chain and reduce operational delays with our advanced tracking systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img 
              src={asset2} 
              alt="IoT-Enabled Sensors" 
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">IoT-Enabled Sensors</h2>
            <p className="text-black text-sm sm:text-base">
              Leverage IoT sensors to collect and analyze asset data. Track parameters like temperature, movement, and utilization to optimize performance and prevent losses.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img 
              src={asset3}
              alt="Predictive Analytics" 
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Predictive Analytics</h2>
            <p className="text-black text-sm sm:text-base">
              Use predictive analytics to anticipate asset maintenance needs and prevent downtime. Make informed decisions based on accurate, real-time data.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img 
              src={asset4}
              alt="Custom Asset Management" 
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Custom Asset Management</h2>
            <p className="text-black text-sm sm:text-base">
              Develop tailored asset management solutions to meet your unique business needs. Enhance operational efficiency and optimize resource allocation with our customized platforms.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-8 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-6">Why Choose Our Asset Tracking Solutions?</h2>
          <ul className="list-disc list-inside space-y-3 text-black max-w-2xl mx-auto">
            <li className="text-lg"><strong>Comprehensive Monitoring:</strong> Real-time tracking and analytics for complete visibility of your assets.</li>
            <li className="text-lg"><strong>Advanced Technology:</strong> Leverage IoT, GPS, and predictive analytics for superior performance.</li>
            <li className="text-lg"><strong>Custom Solutions:</strong> Tailored asset tracking systems designed to fit your specific requirements.</li>
            <li className="text-lg"><strong>Proven Expertise:</strong> Trusted by businesses across industries for reliable and scalable solutions.</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center">
          <a 
            className="inline-block bg-black text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-800 transition-colors" 
            href="/contactsection"
          >
            Contact Us for Asset Tracking Solutions
          </a>
        </div>
      </div>
    </div>
  );
};



const AssetTracking = () => {
  return (
    <>
      <AssetTrackingHero/>
      <AssetIntelligence/>
    </>
  )
}

export default AssetTracking
