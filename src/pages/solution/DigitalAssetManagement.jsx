import { FiLock, FiFilm, FiFileText, FiGitBranch, FiArrowRight } from 'react-icons/fi';
import HeroImg from "/VR-AR-XR-and-Spatial-Computing-min.png"
import markus from "/markus-spiske-iar-afB0QQw-unsplash.jpg"
import christopher from "/christopher-gower-m_HRfLhgABo-unsplash.jpg"
import { Link } from "react-router-dom";
import asset from "/asset33.webp"
const DigitalAssetManagement = () => {
  return (
    <main className="min-h-screen w-full overflow-y-auto relative">
          <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left side - Text content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                     Digital Asset Management (DAM)
                  </span>{' '}
               Software Solutions
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Empower your team with top-tier talent acquisition and customized training programs to help them thrive in the competitive software industry.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="/contact"
                    className="bg-black hover:bg-red-800 text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                Get DAM Developers
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
 

        {/* Main Content */}
        <main className="flex-grow flex flex-col justify-center items-center bg-white">
          {/* Custom DAM Solutions Section */}
          <section className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h2 className="text-center text-3xl font-extrabold pt-10 text-gray-900">
                Custom Digital Asset Management (DAM) Solutions
              </h2>
              <p className="text-center text-lg text-gray-600 mb-12">
                Our custom DAM solutions provide a central hub for your team to manage all of your essential content from ideation to publication.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <img 
                    src={markus}
                    alt="DAM Dashboard" 
                    className="rounded-lg shadow-lg"
                  />
                </div>

                <div>
                  <div className="flex items-start space-x-4 mb-8">
                    <FiLock className="text-blue-500 text-4xl flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Digital Rights Management (DRM) Solutions
                      </h3>
                      <p className="text-gray-600">
                        We integrate GDPR-compliant digital rights management (DRM) solutions for tracking the release and possession of rich media while protecting your intellectual property.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 mb-8">
                    <FiFilm className="text-blue-500 text-4xl flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Rich Media DAM Software Solutions
                      </h3>
                      <p className="text-gray-600">
                        Our Digital Asset Management software solutions are designed to support rich media, enabling you to view large previews of your files and customize your own presets to batch convert your digital assets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 mb-8">
                    <FiFileText className="text-blue-500 text-4xl flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        DAM & CMS Software Solutions
                      </h3>
                      <p className="text-gray-600">
                        We integrate content publication and content management system (CMS) capabilities, such as comprehensive editing modules, marketing automation, and social media publishing, with your Digital Asset Management Solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 mb-8">
                    <FiGitBranch className="text-blue-500 text-4xl flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        Audit Trail & Version Control Solutions
                      </h3>
                      <p className="text-gray-600">
                        We integrate a powerful and fully scalable digital engine to enable the creation and management of multiple versions of an asset with varying quality standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <button className="px-6 py-3 bg-black text-white text-lg font-semibold rounded-full shadow hover:bg-gray-800">
                  INTEGRATE YOUR DAM NOW!
                </button>
              </div>
            </div>
          </section>

          {/* DAM Software Integrations Section */}
          <section className="w-full bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h3 className="text-center text-2xl font-extrabold text-gray-900 mb-6">
                Custom DAM Software Integrations
              </h3>
              <p className="text-center text-lg text-gray-600 mb-12">
                We integrate leading Digital Asset Management (DAM) Software with your existing business systems to enable scalability and performance so that you can manage all content and digital assets on a single platform.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Bynder</h4>
                  <p className="text-gray-600">
                    We integrate Bynder with your current business systems to provide you with a smart template tool to create branded materials and publish content on-demand.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Cloudinary</h4>
                  <p className="text-gray-600">
                    We integrate with Cloudinary for its AI-powered tagging asset functions, allowing you to set automatic tagging features by facial recognition, color, or object.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Canto</h4>
                  <p className="text-gray-600">
                    We integrate with Canto to enable users to preview their visual content on a gallery-style interface, plus an easy-to-use admin dashboard to run reports.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Aprimo</h4>
                  <p className="text-gray-600">
                    We integrate Aprimo with your existing systems to streamline both content ideation and content planning processes in a robust, reliable asset repository system.
                  </p>
                </div>
              </div>

              <div className="my-12 flex justify-center">
                <img 
                  src={christopher}
                  alt="Integration Diagram" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="w-full bg-white">
            <div className="container mx-auto text-center px-4 py-16">
              <h3 className="text-3xl font-bold text-black mb-8">About Us</h3>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-full lg:w-1/2">
                  <img 
                    src={asset}
                    alt="About Us Image" 
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="w-full lg:w-1/2 text-left">
                  <p className="text-lg text-black mb-4">
                    We are revolutionizing the financial industry by integrating blockchain technology into everyday transactions. Our platform provides secure, scalable, and efficient solutions tailored to the needs of modern enterprises.
                  </p>
                  <p className="text-lg text-black mb-4">
                    By leveraging the latest innovations, we enable businesses to simplify complex processes, reduce operational costs, and build trust with their clients.
                  </p>
                  <a 
                    className="bg-black px-8 py-2 text-lg rounded-lg text-white transition hover:bg-gray-800 inline-flex items-center"
                    href="/about-us"
                  >
                    Learn More <FiArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features Section */}
          <section id="features" className="w-full ">
            <div className="container mx-auto text-center px-4 py-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 py-10 lg:grid-cols-3 gap-12">
                <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg">
                  <h4 className="text-2xl text-black font-semibold mb-4">Real-time Transactions</h4>
                  <p className="text-black">
                    Experience instant settlement with blockchain-powered smart contracts.
                  </p>
                </div>

                <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg">
                  <h4 className="text-2xl text-black font-semibold mb-4">Privacy-First Protocol</h4>
                  <p className="text-black">
                    Data is kept private with end-to-end encryption and only shared with authorized parties.
                  </p>
                </div>

                <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg">
                  <h4 className="text-2xl text-black font-semibold mb-4">Scalable Network</h4>
                  <p className="text-black">
                    The Canton network scales as you grow, handling complex financial transactions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
    </main>
  );
};

export default DigitalAssetManagement;