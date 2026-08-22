import { 
  FiBarChart2, FiSettings, FiLayout, FiSearch, 
  FiShare2, FiEdit, FiMail, FiDollarSign, FiUsers 
} from 'react-icons/fi';
import { Link } from "react-router-dom";
import { FiArrowRight } from 'react-icons/fi';
import HeroImg from "/Games-development-min.png"
import soluciones from "/soluciones.png"
import digital1 from "/digital1.webp"
import digital2 from "/digital2.webp"
import digital3 from "/digital3.webp"
import digital4 from "/digital4.webp"
import digital5 from "/digital5.webp"
import digital6 from "/digital6.webp"
const DigitalMarketing = () => {
  return (
    <main className="min-h-screen w-full overflow-y-auto relative">
       <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left side - Text content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                      <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                           Digital Marketing Solutions 
                        </span>{' '}
                    for your Business Growth
                      </h1>
                      <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                 Accelerate your brand's growth with comprehensive digital marketing strategies that drive engagement and increase ROI.
                      </p>
                      
                      
<div className="flex flex-col sm:flex-row gap-4 pt-2">
  <Link
    to="/contactsection"
    className="bg-black hover:bg-red-800 text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
  >
    Get Started
  </Link>
</div>
                    </div>
          
                    {/* Right side - Autodesk showcase */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                      <div className="relative w-full max-w-2xl  overflow-hidden ">
                          <img 
                           src={HeroImg}
                            alt="Autodesk solutions in action showing CAD and BIM workflows"
                          />
                      </div>
                    </div>
                  </div>
                </div>

        {/* Digital Marketing Solutions Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl mt-10 font-extrabold text-gray-900 mb-6">
            Custom Digital Marketing Software Solutions
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            We develop full-scale digital marketing software solutions built with workflow automation modules, reporting & analysis tools, CRM & marketing automation software, competitor analysis, ERP integration, and more for startups, SMBs, and enterprise-level businesses.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img 
                src={soluciones}
                alt="Digital Marketing Dashboard" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <div className="flex items-start space-x-4 mb-8">
                <FiBarChart2 className="text-blue-500 text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Custom CRM Solutions</h3>
                  <p className="text-gray-600">
                    We design integrated CRM modules and standalone solutions for generating, nurturing, scoring, and capturing qualified leads across all channels while providing full visibility of every client and information relative to their account.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-8">
                <FiSettings className="text-blue-500 text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Custom ERP Solutions</h3>
                  <p className="text-gray-600">
                    Based on your preferences, we can integrate your custom digital marketing solution with your current ERP solution, allowing you to maintain daily workflow management, including accounting, project management, supply chain operations, and so much more.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-8">
                <FiLayout className="text-blue-500 text-4xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Custom Landing Pages</h3>
                  <p className="text-gray-600">
                    We develop portfolio-worthy, conversion-focused landing pages perfectly aligned with showcasing your marketing campaign or exciting new product launch in a way that brings users through a customer journey designed to drive traffic & increase sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* SEO Optimization */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start hover:shadow-xl transition-shadow">
              <img 
                src={digital1} 
                alt="SEO Optimization" 
                className="w-full h-auto rounded-md mb-4"
              />
              <div className="flex items-center mb-2">
                <FiSearch className="text-blue-500 mr-2 text-xl" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">
                  SEO Optimization
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Improve your website's visibility on search engines with effective SEO strategies that increase organic traffic and help you stay ahead of the competition.
              </p>
            </div>

            {/* Social Media Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start hover:shadow-xl transition-shadow">
              <img 
                src={digital2}
                alt="Social Media Marketing" 
                className="w-full h-auto rounded-md mb-4"
              />
              <div className="flex items-center mb-2">
                <FiShare2 className="text-blue-500 mr-2 text-xl" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">
                  Social Media Marketing
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Engage with your audience on popular social media platforms. Our social media marketing services build brand awareness, drive traffic, and increase conversions.
              </p>
            </div>

            {/* Content Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start hover:shadow-xl transition-shadow">
              <img 
                src={digital3}
                alt="Content Marketing" 
                className="w-full h-auto rounded-md mb-4"
              />
              <div className="flex items-center mb-2">
                <FiEdit className="text-blue-500 mr-2 text-xl" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">
                  Content Marketing
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Craft high-quality content that resonates with your target audience. Our content marketing strategies help in establishing thought leadership and enhancing engagement.
              </p>
            </div>

            {/* Email Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start hover:shadow-xl transition-shadow">
              <img 
                src={digital4}
                alt="Email Marketing" 
                className="w-full h-auto rounded-md mb-4"
              />
              <div className="flex items-center mb-2">
                <FiMail className="text-blue-500 mr-2 text-xl" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">
                  Email Marketing
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Reach your customers directly in their inbox with personalized email marketing campaigns that drive engagement, conversions, and customer retention.
              </p>
            </div>

            {/* PPC Advertising */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start hover:shadow-xl transition-shadow">
              <img 
                src={digital5}
                alt="PPC Advertising" 
                className="w-full h-auto rounded-md mb-4"
              />
              <div className="flex items-center mb-2">
                <FiDollarSign className="text-blue-500 mr-2 text-xl" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">
                  PPC Advertising
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Drive targeted traffic to your website with pay-per-click advertising. Our PPC campaigns maximize your return on investment by focusing on high-value keywords.
              </p>
            </div>

            {/* Affiliate Marketing */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start hover:shadow-xl transition-shadow">
              <img 
                src={digital6}
                alt="Affiliate Marketing" 
                className="w-full h-auto rounded-md mb-4"
              />
              <div className="flex items-center mb-2">
                <FiUsers className="text-blue-500 mr-2 text-xl" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-700">
                  Affiliate Marketing
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Leverage affiliate partnerships to boost sales. Our affiliate marketing strategies connect you with influencers who promote your products to a wider audience.
              </p>
            </div>
          </div>

          {/* CTA Button */}
<div className="mt-10 text-center">
  <Link 
    to="/contactsection" 
    className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium text-lg sm:text-xl md:text-2xl hover:bg-gray-800 transition items-center justify-center mx-auto"
  >
    Get Started with Our Digital Marketing Solutions
    <FiArrowRight className="ml-2 inline-block" />
  </Link>
</div>
        </div>
    </main>
  );
};

export default DigitalMarketing;