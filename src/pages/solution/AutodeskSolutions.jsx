import React from "react";
import { Link } from "react-router-dom";
import { 
  FaTools,
  FaPencilRuler,
  FaExchangeAlt,
  FaCogs,
  FaCube,
  FaCode,
  FaProjectDiagram,
  FaMicrochip
} from "react-icons/fa";
import HeroAuto from "/Recruiting_Training-min.jpg"
import auto from "/auto.jpg"
import autodesk1 from "/autodesk1.webp"
import autodesk2 from "/autodesk2.webp"
import autodesk3 from "/autodesk3.webp"
import autodesk4 from "/autodesk4.webp"

const AutodeskSolutionsSection = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Autodesk Solutions
              </span>{' '}
              for Precision and Innovation
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Streamline design, engineering, and manufacturing processes with our tailored Autodesk solutions. 
              From CAD to BIM and beyond, we empower businesses to create, innovate, and build with precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/contactsection"
                className="bg-black hover:bg-red-800 text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project →
              </a>
            </div>
          </div>

          {/* Right side - Autodesk showcase */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-2xl  overflow-hidden ">
                <img 
                  src={HeroAuto}
                  alt="Autodesk solutions in action showing CAD and BIM workflows"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const AutodeskServices = () => {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div>
        {/* Hero Section */}
        <section className="text-center py-12">
          <h1 className="text-2xl font-bold text-blue-600">PTEK is a Leading Autodesk Certified Partner</h1>
          <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
            AUTODESK - PTEK is a certified Autodesk partner providing customers with seamless Autodesk integrations and support resources. Our Autodesk experts specialize in the installation and implementation of leading Autodesk products, including Revit, BIM 360, AutoCAD, Maya, Inventor, and more.
          </p>
          <div className="relative mt-12 flex justify-center">
            <img 
              src={auto} 
              alt="Main Autodesk Products Screen" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Support Solutions Section */}
        <section className="py-12">
          <h2 className="text-xl font-bold text-blue-600 text-center">Advanced Autodesk Support Solutions</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {/* Support Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 w-80 text-left hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <FaTools className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Certified Technical Support for Autodesk Products</h3>
              <p className="text-gray-600 mt-2">
                PTEK's certified Autodesk support team provides expert technical guidance to exceed the demands of the evolving business landscape...
              </p>
            </div>

            {/* Support Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 w-80 text-left hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <FaPencilRuler className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">CAD Software Expertise and Drafting Support</h3>
              <p className="text-gray-600 mt-2">
                Autodesk enables nuanced, accurate 2D and 3D drafting designs that augment design professionals' complete, high-quality deliverables...
              </p>
            </div>

            {/* Support Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 w-80 text-left hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <FaExchangeAlt className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Streamlined Data Management and Migration</h3>
              <p className="text-gray-600 mt-2">
                PTEK understands the value of quality data and provides clients with error-free data analysis and fully streamlined data monitoring...
              </p>
            </div>

            {/* Support Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 w-80 text-left hover:shadow-xl transition-shadow">
              <div className="mb-4">
                <FaCogs className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Seamless Integration with Third-Party Software</h3>
              <p className="text-gray-600 mt-2">
                Our software specialists create customized integration solutions to ensure compatibility and full functionality within all third-party software programs...
              </p>
            </div>
          </div>
        </section>

        {/* Complete Services Section */}
        <div className="py-12">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Complete Autodesk Services: From Consulting to Implementation</h1>
          <p className="text-center text-gray-600 mb-10">
            PTEK's comprehensive Autodesk services provide consulting, implementation, support solutions, and more. Our Autodesk services are set apart by expert, industry-informed customizations and integrations specifically designed to meet your needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaTools className="text-blue-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Autodesk Consulting Services</h3>
              </div>
              <p className="text-gray-600">
                As certified Autodesk Service Provider Select partners, PTEK's expert Autodesk consultants seamlessly integrate Autodesk products with your existing business workflows to bring ideas to life.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaPencilRuler className="text-blue-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Drawing & Drafting Services</h3>
              </div>
              <p className="text-gray-600">
                PTEK offers best-in-class 2D & 3D drawing and drafting services, leveraging feature-rich Autodesk editing, design, and annotation tools for engineers, architects, and construction professionals.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaCube className="text-blue-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Autodesk Plug-in Design</h3>
              </div>
              <p className="text-gray-600">
                We harness Autodesk's API to design Autodesk plug-ins, leveraging specific features and functionalities to create and integrate custom tools.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaCode className="text-blue-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Custom Autodesk Programming</h3>
              </div>
              <p className="text-gray-600">
                Our programming solutions extend Autodesk's functionality, expanding Autodesk products like Revit, AutoCAD, Fusion 360, and beyond with custom-made APIs, AI integrations, and more.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaProjectDiagram className="text-blue-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Personalized Design & Modeling</h3>
              </div>
              <p className="text-gray-600">
                Our Autodesk experts leverage 3D CAD and 3D design tools for modeling, engineering, drafting, and visualization to unleash the power of design technology.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaMicrochip className="text-blue-500 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Autodesk IoT Integrations</h3>
              </div>
              <p className="text-gray-600">
                We expertly connect IoT devices with Autodesk software for real-time data usage from physical assets like buildings, enabling smarter operations.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img 
              src={autodesk1}
              alt="CAD Design Solutions" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">CAD Design Solutions</h2>
            <p className="text-black text-sm sm:text-base">
              Create precise and detailed designs with our Autodesk CAD solutions. Perfect for architectural, mechanical, and product design projects.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img 
              src={autodesk2} 
              alt="Building Information Modeling (BIM)" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Building Information Modeling (BIM)</h2>
            <p className="text-black text-sm sm:text-base">
              Leverage BIM tools to enhance collaboration and optimize construction processes. Transform ideas into actionable 3D models and workflows.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img 
              src={autodesk3}
              alt="3D Visualization and Animation" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">3D Visualization and Animation</h2>
            <p className="text-black text-sm sm:text-base">
              Bring designs to life with stunning 3D visualizations and animations. Communicate your concepts effectively with immersive experiences.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
            <img 
              src={autodesk4}
              alt="Manufacturing and Fabrication" 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Manufacturing and Fabrication</h2>
            <p className="text-black text-sm sm:text-base">
              Optimize manufacturing and fabrication processes with Autodesk tools. From prototypes to production, achieve precision and efficiency.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#f5f7fa] p-8 rounded-lg mt-10 shadow-md">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-6">Why Choose Our Autodesk Solutions?</h2>
          <ul className="list-disc list-inside space-y-3 text-black max-w-2xl mx-auto">
            <li className="text-lg"><strong>Comprehensive Expertise:</strong> Deep experience across Autodesk products, including AutoCAD, Revit, Maya, and more.</li>
            <li className="text-lg"><strong>Tailored Solutions:</strong> Customized workflows and tools to fit your business needs.</li>
            <li className="text-lg"><strong>Cutting-Edge Technology:</strong> Access the latest Autodesk tools for design, visualization, and manufacturing.</li>
            <li className="text-lg"><strong>Proven Success:</strong> Trusted by businesses worldwide for delivering impactful design and engineering solutions.</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="mt-10 text-center">
          <a 
            className="inline-block bg-black text-white py-3 px-8 rounded-lg font-medium hover:bg-gray-800 transition-colors" 
            href="/contactsection"
          >
            Contact Us for Autodesk Solutions
          </a>
        </div>
      </div>
    </div>
  );
};


const AutodeskSolutions = () => {
  return (
    <>
      <AutodeskSolutionsSection/>
      <AutodeskServices/>
    </>
  )
}

export default AutodeskSolutions
