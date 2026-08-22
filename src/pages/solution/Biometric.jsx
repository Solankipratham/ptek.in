
import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFingerprint,
  FaLock,
  FaDoorOpen,
  FaUserCog,
  FaDatabase,
  FaUserShield,
  FaBuilding,
  FaHospital,
  FaShoppingCart,
  FaHotel,
  FaIndustry,
  FaServer,
  FaMobileAlt,
  FaShieldAlt,
  FaBrain,
  FaEye,
  FaChartLine,
  FaCode
} from "react-icons/fa";
import biometric from "/Biometric.jpg"
import biometric1 from "/biometric1.webp"
import biometric2 from "/biometric2.webp"
import biometric3 from "/biometric3.webp"
import biometric4 from "/biometric4.webp"

const BiometricSolutions = () => {
  return (
        <div className="min-h-screen w-full">
          <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left side - Text content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                     Biometric Solutions for Secure and 
                  </span>{' '}
                 Seamless Authentication
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
               Enhance security and streamline access control with our cutting-edge biometric solutions.
            From fingerprint scanning to facial recognition, we deliver tailored solutions to meet
            the unique needs of your business.
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
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      alt="Autodesk solutions in action showing CAD and BIM workflows"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

const BiometricActions = () => {
  return (
    <div className="max-w-7xl mx-auto py-6">
      {/* Hero Section */}
      <section className="text-center py-10 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">Modernizing Identity Verification and Access Control with Advanced Biometric Solutions</h1>
        <p className="text-lg mb-6">
          Our biometric system development services empower businesses with advanced solutions. Our customized applications cater to diverse industries, ensuring optimal data encryption and unparalleled user confidence in today's digital landscape.
        </p>
        <button className="px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors">
          Get Biometric Solutions
        </button>
      </section>

      {/* Features Section 1 */}
      <section className="flex flex-col lg:flex-row items-center gap-8 px-6 lg:px-10 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Feature 1 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaFingerprint />
            </div>
            <h3 className="text-xl font-bold mb-2">Biometric Identification</h3>
            <p className="text-gray-600">
              We develop biometric identification solutions to provide the highest level of security and seamless authentication processes. By implementing advanced facial recognition technology, we ensure accurate and quick user identification based on facial features.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaLock />
            </div>
            <h3 className="text-xl font-bold mb-2">Biometric Authentication</h3>
            <p className="text-gray-600">
              Our specialized tech experts engineer biometric authentication systems that deliver cutting-edge security with an extensive range of features. Multi-factor authentication (MFA) systems ensure robust protection by incorporating various verification methods.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaDoorOpen />
            </div>
            <h3 className="text-xl font-bold mb-2">Biometric Access Control</h3>
            <p className="text-gray-600">
              We seamlessly integrate biometric access control solutions that employ the latest technologies to reinforce security. By deploying biometric door lock systems, access is granted only to authorized personnel, assuring restricted entry.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img 
            src={biometric1} 
            alt="Biometric Solutions" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section 2 */}
      <section className="flex flex-col lg:flex-row items-center gap-8 px-6 lg:px-10 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Feature 4 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaUserCog />
            </div>
            <h3 className="text-xl font-bold mb-2">Custom Biometric System Solutions</h3>
            <p className="text-gray-600">
              Our custom biometric system solutions cater to your specific requirements, integrating biometric functionalities into existing systems.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaDatabase />
            </div>
            <h3 className="text-xl font-bold mb-2">Biometric System Integrations</h3>
            <p className="text-gray-600">
              We integrate biometric solutions with your enterprise systems to maximize security and efficiency. Ensure secure access control with seamless integrations.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaUserShield />
            </div>
            <h3 className="text-xl font-bold mb-2">Biometric Consulting Services</h3>
            <p className="text-gray-600">
              Our biometric consulting services provide expert guidance to optimize your biometric implementations and maximize system security.
            </p>
          </div>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img 
            src={biometric}
            alt="Biometric Solutions" 
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Industry Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-10">
          {/* Industry 1 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaBuilding />
            </div>
            <h3 className="text-xl font-bold mb-2">Financial Services</h3>
            <p className="text-gray-600">
              We implement biometric banking solutions to ensure secure access and protect sensitive financial data, enhancing customer trust and security.
            </p>
          </div>

          {/* Industry 2 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaHospital />
            </div>
            <h3 className="text-xl font-bold mb-2">Healthcare</h3>
            <p className="text-gray-600">
              We provide biometric solutions for healthcare, streamlining patient verification and ensuring medical staff security with biometric authentication.
            </p>
          </div>

          {/* Industry 3 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaShoppingCart />
            </div>
            <h3 className="text-xl font-bold mb-2">Retail & E-Commerce</h3>
            <p className="text-gray-600">
              We engineer biometric solutions for the retail and e-commerce sectors, enabling seamless transactions and protecting customer data.
            </p>
          </div>

          {/* Industry 4 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaHotel />
            </div>
            <h3 className="text-xl font-bold mb-2">Hospitality and Tourism</h3>
            <p className="text-gray-600">
              We deploy biometric solutions for the hospitality industry, improving customer experiences and optimizing access control with biometric verification.
            </p>
          </div>

          {/* Industry 5 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaIndustry />
            </div>
            <h3 className="text-xl font-bold mb-2">Manufacturing</h3>
            <p className="text-gray-600">
              We provide biometric solutions for the manufacturing sector, enhancing security and streamlining employee access with biometric verification.
            </p>
          </div>

          {/* Industry 6 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaServer />
            </div>
            <h3 className="text-xl font-bold mb-2">IT and Technology</h3>
            <p className="text-gray-600">
              We deploy biometric solutions to safeguard network security, ensuring secure access to sensitive data and protecting critical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="bg-gray-100 py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">AI-Powered Biometric System Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-10">
          {/* AI Solution 1 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaBrain />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Powered Biometric Identification</h3>
            <p className="text-gray-600">
              Our dedicated AI specialists utilize facial recognition with deep learning technologies for precise and rapid identification. We employ fingerprint matching using neural networks to boost security.
            </p>
          </div>

          {/* AI Solution 2 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaShieldAlt />
            </div>
            <h3 className="text-xl font-bold mb-2">Advanced Biometric Authentication Algorithms</h3>
            <p className="text-gray-600">
              Our software engineers employ advanced solutions for heightened security using multi-modal biometric fusion techniques. We integrate behavioral biometrics and AI models for user-specific authentication.
            </p>
          </div>

          {/* AI Solution 3 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-bold mb-2">Machine Learning for Biometric Accuracy</h3>
            <p className="text-gray-600">
              We leverage machine learning (ML) for biometric accuracy and deliver a solution with elevated precision. Our team enhances biometric system accuracy with machine learning.
            </p>
          </div>

          {/* AI Solution 4 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaEye />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Driven Biometric Surveillance</h3>
            <p className="text-gray-600">
              Our AI-driven biometric surveillance systems development provide top-notch security. We activate real-time facial recognition for surveillance, identifying individuals swiftly and accurately.
            </p>
          </div>

          {/* AI Solution 5 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaCode />
            </div>
            <h3 className="text-xl font-bold mb-2">Deep Neural Networks for Biometric Security</h3>
            <p className="text-gray-600">
              We integrate deep neural networks for biometric security to offer superior protection. We develop deep neural network (DNN) models for anti-spoofing and liveness detection.
            </p>
          </div>

          {/* AI Solution 6 */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaDatabase />
            </div>
            <h3 className="text-xl font-bold mb-2">Biometric Data Analysis using AI</h3>
            <p className="text-gray-600">
              Our biometric data analysis using AI algorithms delivers insightful solutions. We implement AI-enabled biometric pattern recognition for precise identification.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="bg-gray-100 py-10">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Biometric Mobile Application Development</h2>
          <p className="text-lg mb-6">
            We elevate your mobile applications with our biometric mobile application development services that integrate advanced biometric features. Enhance user experience and security with biometric user authentication for mobile apps.
          </p>
        </div>
        <div className="flex justify-center">
          <FaMobileAlt className="text-blue-500 text-6xl" />
        </div>
      </section>
    </div>
  );
};


const biometricData = [
  {
    title: "Fingerprint Recognition",
    imgSrc: biometric4,
    description:
      "Ensure secure and quick access with fingerprint recognition technology. Ideal for authentication, attendance systems, and access control.",
  },
  {
    title: "Facial Recognition",
    imgSrc: biometric3,
    description:
      "Leverage advanced facial recognition for seamless and contactless identification. Enhance security and improve user experiences.",
  },
  {
    title: "Iris Scanning",
    imgSrc: biometric1,
    description:
      "Experience unparalleled security with iris scanning technology. Suitable for high-security environments and sensitive data protection.",
  },
  {
    title: "Voice Recognition",
    imgSrc: biometric2,
    description:
      "Enable secure and convenient authentication with voice recognition. Enhance user experience with advanced biometric solutions.",
  },
];

const BiometricFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {biometricData.map((item, index) => (
          <div
            key={index}
            className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center"
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              {item.title}
            </h2>
            <p className="text-black text-sm sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-4">
          Why Choose Our Biometric Solutions?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-black">
          <li>
            <strong>Comprehensive Biometric Services:</strong> From fingerprint to facial
            recognition, we offer a wide range of solutions.
          </li>
          <li>
            <strong>Enhanced Security:</strong> Reduce fraud and ensure secure authentication
            with our advanced biometric technologies.
          </li>
          <li>
            <strong>Custom Solutions:</strong> Tailored biometric systems to meet your specific
            business requirements.
          </li>
          <li>
            <strong>Proven Expertise:</strong> Trusted by businesses worldwide for reliable and
            scalable biometric solutions.
          </li>
        </ul>
      </div>

     <div className="mt-10 text-center">
  <Link
    to="/contactsection"
    className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
  >
    Contact Us for Biometric Solutions
  </Link>
</div>
    </div>
  );
};




const Biometric = () => {
  return (
    <>
      <BiometricSolutions/>
      <BiometricActions/>
      <BiometricFeatures/>
    </>
  )
}

export default Biometric
