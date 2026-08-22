import { Link } from "react-router-dom";
import React from 'react';
import { 
  FaDesktop, 
  FaChartBar, 
  FaBullhorn, 
  FaDollarSign, 
  FaTools, 
  FaHashtag,
  FaMobileAlt,
  FaChartLine,
  FaCloud,
  FaDatabase,
  FaServer,
  FaRobot,
  FaWarehouse
} from 'react-icons/fa';
import { 
  FiTrendingUp,
  FiBarChart2,
  FiPieChart,
  FiDatabase,
  FiCloud
} from 'react-icons/fi';
import hero from "/Custom-software-development-service-min.jpg"
import aipower from "/AIpower.png"
import bipower from "/BI Software.jpg"
import bicloud from "/BIcloud.png"
import dashboardpreview from "/dashboard-preview.png"


const BusinessIntelligenceHero = () => {
  return (
    <div className="min-h-screen flex items-center px-4 sm:px-8 lg:px-16 py-10 sm:py-20 ">
      <div className="flex flex-col items-start w-full sm:w-1/2 space-y-6 sm:space-y-8">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500 font-bold text-4xl sm:text-5xl mt-10 sm:mt-20 transition-transform duration-500 transform hover:scale-105">
          Business Intelligence Dashboard
        </h1>
        <p className="text-gray-800 text-xl sm:text-2xl pt-5 w-[90%] sm:w-[80%] opacity-90 hover:opacity-100 transition-opacity duration-300">
          Empower decision-making with comprehensive analytics and reporting. Gain actionable insights with real-time data visualization.
        </p>
      <Link
  to="/contactsection"
  className="bg-black max-w-fit mt-2 sm:mt-5 text-white px-8 py-3 rounded-lg transition transform hover:scale-105 hover:bg-gray-800"
>
  Start Your Project →
</Link>
      </div>

      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img 
          src={hero}
          alt="Business Intelligence Dashboard"
          className="object-cover w-full h-auto max-h-[500px]"
        />
      </div>
    </div>
  );
};



const BISolutions = () => {
  return (
    <div className="bg-gray-50">
      {/* First Section */}
      <section className="py-12 px-6">
        <h2 className="text-center text-3xl font-bold mb-6">Custom BI Data Visualization & Reporting Solutions</h2>
        <p className="text-center text-gray-700 text-lg max-w-4xl mx-auto mb-10">
          Our BI services create interactive and data-rich visualization and reporting tools with a variety of custom displays such as tables, charts, candlesticks, gauges, diagrams, maps, and more.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaDesktop className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Custom BI Software Solutions</h3>
            <p className="text-gray-600">
              We build BI solutions for desktops, mobile devices, and browser apps with personalized dashboards, big data processing, and predictive analytics.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaChartBar className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Sales Analytics Solutions</h3>
            <p className="text-gray-600">
              Accurate, scalable, real-time analytics for sales data, automatic QBR dashboards, and notifications.
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaBullhorn className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Marketing Analytics Solutions</h3>
            <p className="text-gray-600">
              Maximize ROI by combining marketing data with API-connected sales data for actionable insights.
            </p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaDollarSign className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Finance Analytics Solutions</h3>
            <p className="text-gray-600">
              Consolidate KPIs, analyze revenue, and create actionable metrics for productivity and profitability.
            </p>
          </div>
          
          {/* Card 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaTools className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">IT & Helpdesk Analytics</h3>
            <p className="text-gray-600">
              Scale business users with secured data and governance for fast and centralized query responses.
            </p>
          </div>
          
          {/* Card 6 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaHashtag className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Social Media Analytics Solutions</h3>
            <p className="text-gray-600">
              Analyze and monitor social media campaigns and performance analytics in real-time.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-black text-white px-6 py-3 rounded-full transition hover:bg-gray-800">
            GET CUSTOM BI SOLUTIONS
          </button>
        </div>
      </section>
      
      {/* Second Section */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-6">Custom BI Software Features</h2>
        <p className="text-center text-gray-700 text-lg max-w-4xl mx-auto mb-10">
          We customize your BI platform's features to best fit your unique business needs while turning raw data into actionable insights that can be analyzed in real-time.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="flex justify-center lg:w-1/2">
            <img
                src={bipower}  // Replace with your image path or URL
                alt="Descriptive alt text"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
          </div>
          
          <div className="space-y-8 lg:w-1/2">
            {/* Feature 1 */}
            <div className="flex items-start">
              <FiDatabase className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Data Preparation & Integrations</h3>
                <p className="text-gray-600">
                  Acquire data from diverse sources and streamline it into one secure hub for optimized analysis.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-start">
              <FaMobileAlt className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Mobile BI Applications</h3>
                <p className="text-gray-600">
                  Build custom apps to promote enhanced scalability, better connectivity, and unlimited data storage.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex items-start">
              <FaChartLine className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Real-Time Visual Data Analysis</h3>
                <p className="text-gray-600">
                  Use real-time data monitoring with graphs, charts, and dashboards for easy-to-use interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Third Section */}
      <section className="py-12 px-6">
        <h2 className="text-center text-3xl font-bold mb-6">Custom BI Cloud Solutions</h2>
        <p className="text-center text-gray-700 text-lg max-w-4xl mx-auto mb-10">
          Chetu's engineers create custom business intelligence (BI) cloud app solutions that utilize AI-powered software, IoT technologies, and/or big data storage to optimize core business operations.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="flex justify-center lg:w-1/2">
            {/* Replace with your image */}
            <img
                src={bicloud}  // Replace with your image path or URL
                alt="Descriptive alt text"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
          </div>
          
          <div className="space-y-8 lg:w-1/2">
            {/* Cloud Solution 1 */}
            <div className="flex items-start">
              <FaRobot className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">AI Cloud Solutions</h3>
                <p className="text-gray-600">
                  We leverage the power of custom AI solutions to create cloud machine learning platforms, launch intelligent chatbots, and optimize external data storage.
                </p>
              </div>
            </div>
            
            {/* Cloud Solution 2 */}
            <div className="flex items-start">
              <FiCloud className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">IoT Cloud Solutions</h3>
                <p className="text-gray-600">
                  We combine the power of IoT and the cloud to create robust, highly functional cloud IoT solutions that support connected applications.
                </p>
              </div>
            </div>
            
            {/* Cloud Solution 3 */}
            <div className="flex items-start">
              <FaDatabase className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Big Data Cloud Solutions</h3>
                <p className="text-gray-600">
                  We unlock the power of cloud computing to enhance big data storage processing & visualization, adjusting data volume and variety.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <button className="bg-black text-white px-6 py-3 rounded-full transition hover:bg-gray-800">
            GET BI CLOUD SOLUTIONS
          </button>
        </div>
      </section>
      
      {/* Fourth Section */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-6">AI-Powered Business Intelligence</h2>
        <p className="text-center text-gray-700 text-lg max-w-4xl mx-auto mb-10">
          Artificial Intelligence propels business intelligence forward by creating actionable insights based on accurate, data-driven decisions. Modern tools elevate performance and implement cutting-edge strategies to drive innovation.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 lg:w-1/2">
            {/* AI Feature 1 */}
            <div className="flex items-start">
              <FiBarChart2 className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">Artificial Intelligence with Power BI</h3>
                <p className="text-gray-600">
                  Chetu's integration specialists leverage AI-powered algorithms within Power BI to enhance decision-making processes and extract deeper data insights for modernized operations.
                </p>
              </div>
            </div>
            
            {/* AI Feature 2 */}
            <div className="flex items-start">
              <FiPieChart className="text-blue-500 text-4xl mr-4" />
              <div>
                <h3 className="text-xl font-bold">AI in Business Analytics</h3>
                <p className="text-gray-600">
                  Our analytics experts harness AI's power to give end-users actionable insights into business operations, detailed marketing performance, and data intelligence.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:w-1/2">
            <img
                src={aipower}  // Replace with your image path or URL
                alt="Descriptive alt text"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
          </div>
        </div>
      </section>
      
      {/* Fifth Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Hire Experienced and Dedicated BI Developers</h2>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          As Business Intelligence (BI) developers continue to advance the technology's ability to automate mission-critical business decisions, enterprises that fail to invest will find themselves unable to catch up to their more modern competitors. We expertly program and implement BI solutions for market forecasting, trend analysis, and operations optimization.
        </p>
      </section>
      
      {/* Sixth Section */}
      <section className="py-12 px-6 grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
        <div className="space-y-8">
          {/* Dev Feature 1 */}
          <div className="flex items-start">
            <FaWarehouse className="text-blue-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold">Custom BI Development</h3>
              <p className="text-gray-600">
                As a BI developer, we provide comprehensive business intelligence development using Online Analytical Processing (OLAP) to analyze multi-dimensional data from multiple sources.
              </p>
            </div>
          </div>
          
          {/* Dev Feature 2 */}
          <div className="flex items-start">
            <FaServer className="text-blue-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold">BI Data Warehouse Development</h3>
              <p className="text-gray-600">
                We engineer BI data warehouses, including the Extract, Transform, and Load (ETL) processes, to manage data from disparate platforms.
              </p>
            </div>
          </div>
          
          {/* Dev Feature 3 */}
          <div className="flex items-start">
            <FiDatabase className="text-blue-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold">On-Premise BI Software Development</h3>
              <p className="text-gray-600">
                We develop self-service and server-based dashboard software for on-premise environments, ensuring seamless installation.
              </p>
            </div>
          </div>
          
          {/* Dev Feature 4 */}
          <div className="flex items-start">
            <FiTrendingUp className="text-blue-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-bold">BI Reporting & Dashboards</h3>
              <p className="text-gray-600">
                Build robust and customizable dashboards with data analytics tools that provide real-time insights and visualized reports.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <img
                src={dashboardpreview}  // Replace with your image path or URL
                alt="Descriptive alt text"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
        </div>
      </section>
      
      {/* Seventh Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Small Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FiCloud className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Science & Machine Learning</h3>
            <p className="text-gray-600">
              Leverage data science and machine learning tools to configure data, create predictive models, and analyze trends.
            </p>
          </div>
          
          {/* Small Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <FaDatabase className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Cloud BI Development</h3>
            <p className="text-gray-600">
              Deploy lightweight cloud-based BI applications with compliance, governance, and advanced security protocols.
            </p>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 px-6">
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-blue-700">Revenue: Q1 2020</h2>
          <p className="text-3xl font-bold">$2.32M</p>
          <span className="text-green-500">▲ $1.87M Q4 2019</span>
        </div>
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-blue-700">Profit: Q1 2020</h2>
          <p className="text-3xl font-bold">$516.76K</p>
          <span className="text-green-500">▲ $471.63K Q4 2019</span>
        </div>
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold text-blue-700">Active Customers</h2>
          <p className="text-3xl font-bold">3.63K</p>
        </div>
      </section>
    </div>
  );
};


const BusinessIntelligence = () => {
  return (
    <>
      <BusinessIntelligenceHero/>
      <BISolutions/>
    </>
  )
}

export default BusinessIntelligence
