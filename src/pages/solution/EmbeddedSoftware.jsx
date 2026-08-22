import { FaArrowRight, FaCogs, FaSlidersH, FaDatabase, FaUsers, FaMicrochip, FaNetworkWired, FaCode } from 'react-icons/fa';
import HeroImg from "/greenshift-min.png"
import erp from "/ERP.jpg"
import digital4 from "/digital4.webp"
import digital5 from "/digital5.webp"
import digital6 from "/digital6.webp"
import { Link } from "react-router-dom";
const EmbeddedSoftware = () => {
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
              Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              PTEK develops cutting-edge ERP software solutions to help businesses streamline operations, manage resources effectively, and boost productivity across all departments.</p>


            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/contact"
                className="bg-black hover:bg-red-800 text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Learn More →
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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-shrink-0">
            <img
              src={erp}  // Replace with your image path or URL
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

      {/* What We Offer Section */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="text-center">
          <h2 className="text-4xl font-semibold text-blue-700 mb-6">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800 hover:scale-105 transition-transform duration-300">
              {/* Replace with your image */}
              <img
                src={digital4}
                alt="Descriptive alt text"
                className="w-full h-48 object-cover bg-gray-200 rounded-t-lg mb-4"
              />

              <h3 className="text-2xl font-semibold mb-4 text-black">Custom Embedded Systems</h3>
              <p className="text-black">
                We specialize in creating tailored embedded systems for diverse industries. Our expertise helps optimize device performance and reliability.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800 hover:scale-105 transition-transform duration-300">
              {/* Replace with your image */}
              <img
                src={digital5}
                alt="Descriptive alt text"
                className="w-full h-48 object-cover bg-gray-200 rounded-t-lg mb-4"
              />

              <h3 className="text-2xl font-semibold mb-4 text-black">IoT Solutions</h3>
              <p className="text-black">
                We offer cutting-edge Internet of Things (IoT) solutions, integrating hardware and software to enable smart communication between devices.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-gray-800 hover:scale-105 transition-transform duration-300">
              {/* Replace with your image */}
              <img
                src={digital5}
                alt="Descriptive alt text"
                className="w-full h-48 object-cover bg-gray-200 rounded-t-lg mb-4"
              />

              <h3 className="text-2xl font-semibold mb-4 text-black">Firmware Development</h3>
              <p className="text-black">
                Our firmware development services ensure optimized and secure software for your embedded devices.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
   <section className="text-black py-12 mt-16">
  <div className="text-center">
    <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
    <p className="mb-4">We would love to hear about your embedded system project!</p>
    <Link
      to="/contactsection"
      className="bg-black text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out hover:bg-gray-800 inline-flex items-center gap-2"
    >
      Contact Us
    </Link>
  </div>
</section>
      </main>
    </main>
  );
};

export default EmbeddedSoftware;