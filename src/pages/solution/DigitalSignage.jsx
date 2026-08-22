import { FaFileAlt, FaLock, FaGlobe, FaLaptop, FaCloud, FaMobileAlt } from 'react-icons/fa';
import HeroImg from "/artificial-intelligence-min.png"
import crew from "/crew-4Hg8LH9Hoxc-unsplash.jpg"
import hire from "/HireExperienced.png"
import digital1 from "/digital1.webp"
import digital2 from "/digital2.webp"
import digital3 from "/digital3.webp"
import digital4 from "/digital4.webp"
import digital5 from "/digital5.webp"
import digital6 from "/digital6.webp"
import { Link } from "react-router-dom";
const DigitalSignage = () => {
  return (
    <main className="min-h-screen w-full overflow-y-auto relative">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Digital Signage Solutions  for
              </span>{' '}
              Enhanced Customer Engagement
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Accelerate your brand's growth with comprehensive digital marketing strategies that drive engagement and increase ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/contact"
                className="bg-black hover:bg-red-800 text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started
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


      {/* Experience Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">
            We've Got Experienced Digital Signage Software Developers-for-Hire
          </h2>
          <p className="text-center text-lg mb-12">
            Our developers have years of experience creating world-class digital signage software solutions/platforms that empower designers and writers to create visually stunning, interactive, and user-friendly experiences directly from the custom digital signage platform.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500">
                  <FaFileAlt />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Digital Signage CMS Repositories</h3>
                  <p className="text-gray-600">
                    Our engineers build digital signage central repositories or digital asset management (DAM) systems jam-packed with stunning visuals, info-rich immersive experiences, and visual craft communication models to capture audiences' attention/engagement on all devices.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500">
                  <FaLock />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Security & Compliance Protocols</h3>
                  <p className="text-gray-600">
                    We use end-to-end encrypted data, SSL, multi-factor authentication encryptions, Role-based access permissions (RBAC), and integrations with Single Sign-On (SSO) tools to ensure that all digital signage solutions are compliant with SOC 2, GLBA, SOX, and HIPAA standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500">
                  <FaGlobe />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Scalable Network Management</h3>
                  <p className="text-gray-600">
                    We engineer systems that monitor and manage messaging changes and software updates in real-time, custom-tailored to help companies effectively communicate with other team members all while managing their in-house or overseas teams.
                  </p>
                </div>
              </div>

              {/* Replace with your image */}
              <img
                src={crew}  // Replace with your image path or URL
                alt="Descriptive alt text"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />

            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500">
                  <FaLaptop />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Digital Signage Software Development</h3>
                  <p className="text-gray-600">
                    We develop state-of-the-art digital signage software with touch screen capabilities, sensor apps, beacons, RFID, QR Codes, NFC, SMS, and Bluetooth features with intuitive interfaces that showcase impressive graphics & animation, custom branded templates, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500">
                  <FaCloud />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Cloud-Based Digital Signage Software</h3>
                  <p className="text-gray-600">
                    Our developers program intelligent cloud-based digital signage platforms using HTML5 (markup language written in HTML) as well as web-based applications that facilitate easy updates, seamless scalability, and easy remote access and management.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-4xl text-blue-500">
                  <FaMobileAlt />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Digital Signage Web & Mobile Applications</h3>
                  <p className="text-gray-600">
                    Chetu experts develop digital signage applications for meeting rooms, dashboards, LED displays, wayfinding displays, information display systems, elevators, storefronts, ad engines, and much more with interactive and user-friendly UX/UI elements.
                  </p>
                </div>
              </div>

              {/* Replace with your image */}
              <img
                src={hire} // Replace with your image path or URL
                alt="Descriptive alt text"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />

            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow hover:bg-gray-800 transition-colors">
              HIRE DIGITAL SIGNAGE EXPERTS
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <div className="max-w-7xl py-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Content Management",
              description:
                "Easily manage and schedule your digital signage content through a powerful content management system (CMS) that allows for real-time updates.",
              image: digital1
            },
            {
              title: "Interactive Displays",
              description:
                "Engage your audience with interactive displays that allow for dynamic content interaction, enhancing the customer experience in various settings.",
              image: digital2
            },
            {
              title: "Advertising Solutions",
              description:
                "Maximize the impact of your digital signage by displaying targeted advertisements that attract attention and drive conversions.",
              image: digital3
            },
            {
              title: "Real-Time Updates",
              description:
                "Keep your content fresh and relevant with the ability to update signage in real-time, offering the latest information or promotions instantly.",
              image: digital4
            },
            {
              title: "Remote Management",
              description:
                "Manage and monitor your entire digital signage network from anywhere with cloud-based remote management tools that provide full control.",
              image: digital5
            },
            {
              title: "Video Wall Integration",
              description:
                "Create stunning visual experiences with multi-screen video walls that deliver high-definition content to a large audience.",
              image: digital6
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium text-lg sm:text-xl hover:bg-gray-800 transition-colors"
          >
            Get Started with Our Digital Signage Solutions
          </a>
        </div>
      </div>

    </main>
  );
};

export default DigitalSignage;