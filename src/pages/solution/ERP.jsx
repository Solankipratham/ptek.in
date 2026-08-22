import { FaArrowRight, FaRobot, FaCogs, FaSlidersH, FaDatabase, FaUsers, FaChartLine, FaCodeBranch, FaCloudUploadAlt } from 'react-icons/fa';
import { AiOutlineDeploymentUnit, AiOutlineSolution } from 'react-icons/ai';
import { BsGearFill, BsGraphUp } from 'react-icons/bs';
import HeroImg from "/TechIcon_AI.png"
import { Link } from "react-router-dom";
import erp from "/ERP.jpg"

const ERP = () => {
  return (
    <main className="min-h-screen w-full overflow-y-auto relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Custom ERP Software
              </span>{' '}
              Development Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Unleashing the Power of AI-Integrated Custom ERP Solutions with Expert Consulting for Optimal Business Efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/contact"
                className="bg-black hover:bg-red-800 text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get ERP Development Now →
              </a>
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

   
        {/* Features Section */}
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 py-12 space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold">Custom ERP Software Solutions</h1>
            <p className="text-gray-700 max-w-4xl mx-auto">
              PTEK develops cutting-edge ERP software solutions to help businesses streamline operations, manage resources effectively, and boost productivity across all departments.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="flex-shrink-0">
              <img
                src={erp} // Replace with your image path or URL
                alt="Descriptive alt text"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />

            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <FaCogs className="text-blue-500 text-4xl" />
                <div>
                  <h2 className="text-xl font-bold">Business Process Automation</h2>
                  <p className="text-gray-700">
                    Automate key business processes such as inventory management, finance, and procurement for increased efficiency and reduced costs.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaSlidersH className="text-blue-500 text-4xl" />
                <div>
                  <h2 className="text-xl font-bold">Customizable Modules</h2>
                  <p className="text-gray-700">
                    Create tailored ERP modules to meet your unique business needs, including HR, CRM, and supply chain management.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaDatabase className="text-blue-500 text-4xl" />
                <div>
                  <h2 className="text-xl font-bold">Centralized Data Management</h2>
                  <p className="text-gray-700">
                    Access all business data from a centralized platform, enabling better decision-making and real-time reporting.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaUsers className="text-blue-500 text-4xl" />
                <div>
                  <h2 className="text-xl font-bold">Collaboration Tools</h2>
                  <p className="text-gray-700">
                    Enhance team collaboration across departments with integrated communication tools and shared workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors">
            Develop ERP Software Solutions
          </button>
        </div>

        {/* AI-Powered ERP Solutions Section */}
        <section className="mt-16 py-10 bg-gray-50">
          <div className="text-center px-6">
            <h2 className="text-3xl font-semibold text-blue-900">Upgrade Your ERP Software with AI-Powered Solutions</h2>
            <p className="mt-4 text-black max-w-3xl mx-auto">
              With Artificial Intelligence (AI) representing the next step towards efficiency, innovation, and more, we're ready to leverage it for your Enterprise Resource Planning needs.
            </p>
          </div>

          <div className="mt-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaRobot className="text-blue-400 text-3xl mx-auto" />,
                title: "Intelligent ERP System Management",
                description: "Leverage AI and Machine Learning to adapt, optimize, and improve ERP systems in real time."
              },
              {
                icon: <AiOutlineDeploymentUnit className="text-blue-400 text-3xl mx-auto" />,
                title: "Automated ERP System Development",
                description: "Develop systems to optimize deployment and operational efficiency."
              },
              {
                icon: <BsGearFill className="text-blue-400 text-3xl mx-auto" />,
                title: "Innovative AI Solutions for ERP",
                description: "Incorporate NLP and AI to improve automation and understanding of unstructured data."
              },
              {
                icon: <BsGraphUp className="text-blue-400 text-3xl mx-auto" />,
                title: "Machine Learning Within ERP Systems",
                description: "Implement predictive analytics and fraud detection to stay ahead of the curve."
              }
            ].map((feature, index) => (
              <article key={index} className="text-center bg-white text-black shadow-md rounded-lg p-6 relative hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 mx-auto rounded-full border-4 border-white bg-white -mt-12 flex items-center justify-center shadow-md">
                  {feature.icon}
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-blue-400">{feature.title}</h3>
                  <p className="mt-4">{feature.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              GET AI-POWERED ERP SOLUTIONS
            </button>
          </div>
        </section>

        {/* Custom ERP Services Section */}
        <section className="py-10 bg-white">
          <div className="text-center px-6">
            <h2 className="text-3xl font-semibold text-black">Custom ERP Services & Solutions from Experts</h2>
            <p className="mt-4 text-black max-w-3xl mx-auto">
              We offer custom ERP solutions that enable administrators to take control of their entire business, from inventory and supply chain to distribution and sales.
            </p>
          </div>

          <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            {[
              {
                icon: <FaCodeBranch className="text-blue-600 text-3xl mx-auto" />,
                title: "Custom ERP Development",
                description: "Customize off-the-shelf ERP solutions by automating workflows and integrating data."
              },
              {
                icon: <AiOutlineSolution className="text-blue-600 text-3xl mx-auto" />,
                title: "Expert ERP Implementation",
                description: "Deploy and configure systems to maintain data integrity with zero downtime."
              },
              {
                icon: <FaCloudUploadAlt className="text-blue-600 text-3xl mx-auto" />,
                title: "Seamless Data Migrations",
                description: "Migrate data from current environments to new ERP platforms."
              }
            ].map((service, index) => (
              <article key={index} className="text-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
                <p className="mt-4 text-black">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              REQUEST A CUSTOM ERP CONSULTATION
            </button>
          </div>
        </section>
    </main>
  );
};

export default ERP;