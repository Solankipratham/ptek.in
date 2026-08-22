import React from "react";
import {
  FaHandsHelping,
  FaDonate,
  FaUsers,
  FaHandHoldingHeart,
  FaSnowflake,
  FaGift,
  FaMobileAlt,
  FaChartLine,
  FaChurch,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Nonprofit = () => {
  const platforms = [
    {
      name: "Jotform",
      description:
        "Ptek's software experts can integrate Jotform to customize all your documentation needs to grow your nonprofit's presence. Streamline all donor online forms, organize volunteer applications, and mobilize partnerships with persuasive applications customized to boost sponsorships and co-branding.",
      icon: <FaHandsHelping className="text-blue-600 w-10 h-10" />,
    },
    {
      name: "Fundly",
      description:
        "Our expert software developers understand how critical effective fundraising is for nonprofits. We can integrate your nonprofit platform with Fundly to streamline all digital fundraising efforts and propel your nonprofit organization forward.",
      icon: <FaDonate className="text-blue-600 w-10 h-10" />,
    },
    {
      name: "Donorbox",
      description:
        "Ptek's dedicated software developers can leverage Donorbox to modernize fundraising, enabling your nonprofit to safely and efficiently receive donations via the Internet. Our expert-level developers work to ensure all transactions are secure by implementing trusted and proven resources, enabling expedient receipt of all donations.",
      icon: <FaUsers className="text-blue-600 w-10 h-10" />,
    },
    {
      name: "Donately",
      description:
        "Our software experts can integrate Donately to provide multiple donor payment options with embedded tools such as WordPress, Squarespace, and Webflow, enabling the creation of customized, interactive campaigns to attract multiple donors to boost your nonprofit’s messaging campaign.",
      icon: <FaHandHoldingHeart className="text-blue-600 w-10 h-10" />,
    },
    {
      name: "Snowball",
      description:
        "Ptek's expert-level developers can leverage Snowball to deploy an intuitive CRM software that optimizes donor data, efficiently tracks donations and gifts, and enables creation of a fully customized online store to sell products to raise funds for your nonprofit. Ptek’s skilled software experts can seamlessly program and integrate this one-stop-shop resource to modernize your nonprofit operations.",
      icon: <FaSnowflake className="text-blue-600 w-10 h-10" />,
    },
    {
      name: "Qgiv",
      description:
        "Attract top donors with Qgiv fully customized and integrated with your nonprofit management system by Ptek. Our expert developers utilize Qgiv to create intuitive donation receipts detailing every donation's direct impact, enabling donors to gain unique insight and transparency into how their charitable funding is making positive gains within your nonprofit.",
      icon: <FaGift className="text-blue-600 w-10 h-10" />,
    },
    {
      name: "OneCause",
      description:
        "Ptek's adept nonprofit software developers seamlessly integrate OneCause, an intuitive platform for nonprofits that promotes mobile auctions and enables gamification of donor drives, keeping prospective donors engaged while providing a rich, end-user experience.",
      icon: <FaMobileAlt className="text-blue-600 w-10 h-10" />,
    },
    {
      name: "RaiseDonors",
      description:
        "Ptek's dedicated developers integrate RaiseDonors and utilize its custom reporting options to enable real-time campaign monitoring and generate customized thank-you and donor acknowledgment reports to individualize donor end-user experiences.",
      icon: <FaChartLine className="text-blue-600 w-10 h-10" />,
    },
    {
      name: "Vision2",
      description:
        "Ptek's nonprofit software specialists configure and integrate Vision2 to help meet the demands of church donor campaigns. Our software experts enable mobile text-to-give with unlimited transaction options and the ability to create recurring gifts. With customized donor self-service tools, Vision2 facilitates donor independence that adheres to all tax-free donation regulations.",
      icon: <FaChurch className="text-blue-600 w-10 h-10" />,
    },
  ];

  const features = [
    "Custom donation forms",
    "Recurring donation management",
    "Donor analytics and reporting",
    "Volunteer scheduling",
    "Event management",
    "Real-time campaign monitoring"
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative  text-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0"></div>
          <div className="absolute top-0 right-0 bottom-0 w-full md:w-2/3"></div>
          <div className="" />
        </div>
        
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Nonprofit Software Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-900">
              Our company specializes in developing custom software solutions
              tailored for nonprofit organizations. We offer a comprehensive suite
              of services designed to enhance operational efficiency, improve
              donor engagement, and streamline fundraising efforts, enabling
              nonprofits to focus on their mission-driven goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={"/contact"} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition flex items-center justify-center font-medium">
                Start Your Project <FaArrowRight className="ml-2" />
              </Link>
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg transition font-medium">
                View Our Solutions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">95%</div>
              <div className="text-gray-600">Fundraising Efficiency</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">300+</div>
              <div className="text-gray-600">Nonprofits Served</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">$2.1B+</div>
              <div className="text-gray-600">Funds Managed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Technical Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Nonprofit Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Our integrated platforms help nonprofits maximize impact through technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-2 bg-blue-100"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                  <FaDonate className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fundraising Platforms</h3>
                <p className="text-gray-600 mb-6">
                  Our fundraising platforms empower nonprofits to create and manage
                  campaigns, track donations, and engage with donors effectively.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Customizable donation forms</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Recurring donation management</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Donor analytics and reporting</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-2 bg-blue-100"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                  <FaUsers className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Membership Management</h3>
                <p className="text-gray-600 mb-6">
                  Our membership management systems streamline member registration,
                  renewals, and communication, fostering a strong community.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Online member portals</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Automated renewal reminders</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Event registration and management</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-2 bg-blue-100"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6">
                  <FaHandsHelping className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer Management</h3>
                <p className="text-gray-600 mb-6">
                  Our solutions facilitate volunteer recruitment, scheduling, and
                  tracking, ensuring effective utilization of volunteer resources.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Volunteer registration and profiles</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Shift scheduling and reminders</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Volunteer performance tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Integrations */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Nonprofit Platform Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Ptek's software developers can seamlessly integrate intuitive software for nonprofits with third-party platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-8 flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-6">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {platform.name}
                </h3>
                <p className="text-gray-600 flex-grow">{platform.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition font-medium">
              Integrate Your Nonprofit Management Solutions
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Nonprofit Operations
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Our custom software solutions are designed to help nonprofits achieve greater efficiency, transparency, and impact through technology.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to={"/contactsection"} className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg transition font-medium inline-flex items-center">
                  Get Started Today <FaArrowRight className="ml-3" />
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg z-10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold">95%</div>
                    <div className="text-sm">Fundraising Efficiency</div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-white text-blue-900 rounded-lg z-10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold">300+</div>
                    <div className="text-sm">Nonprofits Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Nonprofit?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Schedule a free consultation with our nonprofit technology experts to discover how our solutions can help you achieve your mission.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={"/contact"} className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg transition font-medium">
                Schedule a Demo
              </Link>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg transition font-medium">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nonprofit;