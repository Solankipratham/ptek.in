import React from "react";
import {
  FaBolt,
  FaTint,
  FaSolarPanel,
  FaWind,
  FaFire,
  FaTrashAlt,
  FaAtom,
  FaCog,
  FaShieldAlt,
  FaRecycle,
  FaChartLine,
  FaUsers,
  FaNetworkWired,
  FaCogs,
} from "react-icons/fa";
import { FaWater, FaTools, FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";

const EnergyUtilities = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Modern Design */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Energy & Utilities Solutions
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Our company is dedicated to driving innovation in the Energy &
                Utilities sector. With an increasing global demand for sustainable
                energy solutions, we are working to integrate cutting-edge
                technologies and practices that optimize energy production,
                distribution, and consumption.
              </p>
              <div className="mt-10">
                <Link
                  to={"/contactsection"}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition duration-300"
                >
                  Start Your Project →
                </Link>
              </div>
            </div>
          </div>
        
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Custom Energy and Utilities Software Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our experts produce cutting-edge energy management solutions that
              cater to the growing technical needs of the energy & utilities
              industry.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { icon: <FaBolt className="text-blue-600" />, name: "Electric" },
              { icon: <FaTint className="text-blue-600" />, name: "Water" },
              { icon: <FaNetworkWired className="text-blue-600" />, name: "Smart Grid" },
              { icon: <FaFire className="text-blue-600" />, name: "Heat" },
              { icon: <FaSolarPanel className="text-blue-600" />, name: "Solar" },
              { icon: <FaTrashAlt className="text-blue-600" />, name: "Waste Management" },
              { icon: <FaWind className="text-blue-600" />, name: "Wind" },
              { icon: <FaAtom className="text-blue-600" />, name: "Nuclear" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col items-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Energy Management Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/Energy&Utilities1.png"
                alt="Energy Management"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Custom Energy Management Software Solutions
              </h3>
              <div className="space-y-8">
                {[
                  {
                    icon: <FaBolt className="text-blue-600 text-3xl" />,
                    title: "Utility Tracking Software",
                    description: "Our developers create tailored cloud-based utility tracking software to accurately capture data such as cost and consumption."
                  },
                  {
                    icon: <FaNetworkWired className="text-blue-600 text-3xl" />,
                    title: "Energy Portfolio Management",
                    description: "Facilitate the organization of your entire energy portfolio while significantly lowering costs & balancing energy needs."
                  },
                  {
                    icon: <FaCogs className="text-blue-600 text-3xl" />,
                    title: "Utility Asset Management",
                    description: "Our developers assist utility businesses with tracking, documentation, and performance monitoring."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-10 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
                GET AI ENERGY DEVELOPERS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Water Management Solutions */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Custom Water Management Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We develop custom water quality monitoring solutions to help businesses manage and meet all of their water and wastewater management needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/WaterManagement.png"
                alt="Water Management"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <div className="space-y-8">
                {[
                  {
                    icon: <FaWater className="text-blue-600 text-3xl" />,
                    title: "Water Software Development",
                    description: "We develop software to accurately and efficiently manage day-to-day operations for any water treatment plant or water service provider."
                  },
                  {
                    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
                    title: "Water Quality Monitoring",
                    description: "Our water industry experts program custom features for water sample management, pollutant identification, chemical analysis, and more."
                  },
                  {
                    icon: <FaTools className="text-blue-600 text-3xl" />,
                    title: "Utility Management Software",
                    description: "Our custom cloud-based solutions automate billing, invoicing, process payments, and more."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-10 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
                GET WATER MANAGEMENT SOLUTIONS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Smart Grid Technology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Custom Smart Grid Technology Software
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our developers can either augment existing systems or provide custom solutions to fit specific business needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    icon: <FaWifi className="text-blue-600 text-3xl" />,
                    title: "Smart Grid Communication",
                    description: "Reduce energy consumption and maximize grid operation with actual-time status notifications and automatic resource detection features."
                  },
                  {
                    icon: <FaCogs className="text-blue-600 text-3xl" />,
                    title: "Grid Integrations & IoT",
                    description: "We develop solutions for smart grid data analytics, automation workflows, machine-to-machine communications, and smart grid technology interfaces."
                  },
                  {
                    icon: <FaTools className="text-blue-600 text-3xl" />,
                    title: "Smart Grid Meter Programming",
                    description: "Program smart grid meters with features like automatic meter reading, advanced metering infrastructure, and more."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-10 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
                HIRE SMART GRID DEVELOPERS
              </button>
            </div>
            <div>
              <img
                src="/GridTechnology.png"
                alt="Smart Grid Technology"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Solutions */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              AI-Powered Energy and Utilities Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our experts design powerful AI solutions for energy and utility companies that want more efficiency, productivity, and resourcefulness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCog className="text-blue-600 text-4xl" />,
                title: "Optimized Workflows",
                description: "AI and machine learning systems can automate the backend processes of energy and utility spaces, enhancing grid operations, field schedules, and work orders."
              },
              {
                icon: <FaChartLine className="text-blue-600 text-4xl" />,
                title: "Predictive Maintenance Analysis",
                description: "Our AI solutions predict potential maintenance malfunctions that could interrupt user activities, like power outages, ensuring safety and efficiency."
              },
              {
                icon: <FaRecycle className="text-blue-600 text-4xl" />,
                title: "Damage Assessment and Recovery",
                description: "Assess damages caused by natural disasters promptly, creating actionable plans to restore essential services."
              },
              {
                icon: <FaShieldAlt className="text-blue-600 text-4xl" />,
                title: "AI-Based Cybersecurity",
                description: "Protect critical energy and utility data from cyber threats with robust AI-based security systems, identifying suspicious activity."
              },
              {
                icon: <FaRecycle className="text-blue-600 text-4xl" />,
                title: "Emission Tracking for Sustainability",
                description: "Track greenhouse gas emissions, optimize energy consumption, and preserve the environment with AI-driven sustainability solutions."
              },
              {
                icon: <FaUsers className="text-blue-600 text-4xl" />,
                title: "Customer Engagement Solutions",
                description: "Use AI-driven virtual assistants and chatbots to streamline customer interactions, improving satisfaction and efficiency."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electric Utility Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Electric Utility Software Solutions
              </h3>
              <div className="space-y-8">
                {[
                  {
                    icon: <FaBolt className="text-blue-600 text-3xl" />,
                    title: "Electric Software Services",
                    description: "We develop software to provide Distribution Management Systems (DMS) for network monitoring and operations support."
                  },
                  {
                    icon: <FaCog className="text-blue-600 text-3xl" />,
                    title: "Electrical Estimating Software",
                    description: "Our energy management developers construct estimating software to provide fast and accurate results."
                  },
                  {
                    icon: <FaBolt className="text-blue-600 text-3xl" />,
                    title: "Electric Mobile App Software",
                    description: "We program custom mobile apps for field service tools, document management, and more."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-10 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
                GET ELECTRIC MANAGEMENT DEVELOPERS
              </button>
            </div>
            <div>
              <img
                src="/Electric.png"
                alt="Electric Utility"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Renewable Energy Solutions",
                description: "We are actively working to bring clean, renewable energy sources to the forefront. Our renewable energy solutions include solar, wind, and geothermal power, all aimed at reducing reliance on fossil fuels and promoting a more sustainable energy future.",
                features: [
                  "Solar and wind power generation",
                  "Energy storage systems for renewable sources",
                  "Reducing carbon footprints and environmental impact"
                ],
                image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
              },
              {
                title: "Smart Grid & Utilities",
                description: "Our smart grid solutions aim to modernize the way energy is distributed and consumed. By integrating smart meters, sensors, and data analytics, we help utilities better manage energy distribution, reduce losses, and improve efficiency across the grid.",
                features: [
                  "Real-time energy monitoring and control",
                  "Smart meters and data analytics",
                  "Efficient energy management and distribution"
                ],
                image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              },
              {
                title: "Energy Efficiency & Sustainability",
                description: "We help businesses and communities optimize their energy use through energy-efficient solutions. Our focus is on creating systems that minimize energy consumption while ensuring comfort, productivity, and sustainability for future generations.",
                features: [
                  "Energy-efficient buildings and systems",
                  "Smart thermostats and energy-saving devices",
                  "Building green, sustainable communities"
                ],
                image: "https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1496&q=80"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Start Your Sustainable Energy Journey Today
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Partner with us to implement innovative energy solutions that drive
            sustainability, efficiency, and reduce your carbon footprint.
          </p>
          <Link
            to={"/contactsection"}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-lg transition duration-300 text-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EnergyUtilities;