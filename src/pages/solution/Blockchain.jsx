import React from "react";
import { Link } from "react-router-dom";
import { 
  FaShieldAlt, 
  FaLink, 
  FaCode, 
  FaFileInvoiceDollar, 
  FaClinicMedical, 
  FaShoppingCart,
  FaChartLine,
  FaRobot,
  FaFileContract,
  FaLock,
  FaNetworkWired
} from "react-icons/fa";
import HeroBlockchain from "/Frame-40008.png"
import blockchain from "/BlockChain.jpg"
import blockchainapp from "/Blockchain Applications.jpg"
import blockchain1 from "/blockchain1.webp"
import blockchain2 from "/blockchain2.webp"
import blockchain3 from "/blockchain3.webp"
import blockchain4 from "/blockchain4.webp"

const BlockchainHero = () => {
  return (
     <div className="min-h-screen w-full">
          <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left side - Text content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                     Blockchain Solutions 
                  </span>{' '}
             for Transparent Innovation
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
             Revolutionize your business operations with our advanced blockchain solutions. From smart contracts to decentralized
              applications (DApps), we empower businesses with secure, transparent, and scalable blockchain technology.
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
                      src={HeroBlockchain}
                      alt="Autodesk solutions in action showing CAD and BIM workflows"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

const BlockchainServices = () => {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div>
        <section className="py-12 px-6">
          <h2 className="text-center text-3xl font-bold mb-6">
            We Provide Blockchain Development Services
          </h2>
          <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-10">
            Our software developers are highly proficient in building blockchain technologies from scratch and customizing existing blockchain solutions through software integrations, functionality modifications, and feature implementations.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <FaShieldAlt className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blockchain Security</h3>
              <p className="text-gray-600">
                We create blockchain security software that identifies and addresses the fundamental elements of a cross-industry standard for secure transactions.
              </p>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <FaLink className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Public & Private Blockchain</h3>
              <p className="text-gray-600">
                We develop customized and protected private blockchain solutions and decentralized public blockchain systems for businesses.
              </p>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <FaCode className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Decentralized Applications</h3>
              <p className="text-gray-600">
                We create custom decentralized applications (dApps) for various business transactions and collaboration.
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img
    src={blockchain}  // Replace with your image path or URL
    alt="Descriptive alt text"
    className="rounded-lg shadow-lg w-full h-64 object-cover"
  />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Comprehensive Blockchain Solutions</h3>
              <p className="text-gray-600 text-lg">
                Our blockchain development services include secure and scalable solutions tailored to your business needs. We provide expertise in creating robust blockchain platforms, enhancing business operations, and enabling seamless transactions. Discover the power of blockchain for your industry today.
              </p>
            </div>
          </div>
        </section>
        
        <div className="bg-gray-50">
          {/* Testimonials Section */}
          <section className="py-12 bg-white">
            <h2 className="text-center text-3xl font-bold mb-8">Hear What Our Clients Have to Say</h2>
            <div className="grid md:grid-cols-2 gap-6 px-6 max-w-6xl mx-auto">
              <div className="text-center border p-6 rounded-lg shadow-md">
                <p className="italic text-gray-700 mb-4">
                  "The developer was quick to provide deliverables of code commits and daily video. They clearly understand Python and Blockchain which resulted in quick and efficient results."
                </p>
                <h4 className="font-bold text-gray-900">Director of Operations, Gaming Industry</h4>
              </div>
              <div className="text-center border p-6 rounded-lg shadow-md">
                <p className="italic text-gray-700 mb-4">
                  "As we approach the finish line of our project, we give appreciation for the work put in. It's been challenging days, but thanks to your efforts and problem-solving, we are here."
                </p>
                <h4 className="font-bold text-gray-900">Director of Technology, Marketing Solutions Provider</h4>
              </div>
            </div>
          </section>
          
          {/* Blockchain Applications Section */}
          <section className="py-12 px-6 bg-gray-100">
            <h2 className="text-center text-3xl font-bold mb-6">We Build Custom Blockchain Applications</h2>
            <div className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto">
              <div className="lg:w-1/2">
  <img
    src={blockchainapp}  // Replace with your image path or URL
    alt="Descriptive alt text"
    className="rounded-lg shadow-lg w-full h-64 object-cover"
  />
</div>

              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold">Blockchain Application Development</h3>
                <p className="text-gray-700">
                  We leverage third-party blockchain software solutions to develop scalable Blockchain Applications designed to reduce losses, avoid fraud, and eliminate intermediary fees.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaShieldAlt className="text-blue-500 text-3xl mr-4" />
                    <div>
                      <h4 className="font-bold">Strengthen Security</h4>
                      <p className="text-gray-600">We build breach-resistant applications to prevent fraud and cyberattacks while managing sensitive data.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaLink className="text-blue-500 text-3xl mr-4" />
                    <div>
                      <h4 className="font-bold">Bust Operational Bottlenecks</h4>
                      <p className="text-gray-600">Automate workflows to replace error-prone and time-consuming processes.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCode className="text-blue-500 text-3xl mr-4" />
                    <div>
                      <h4 className="font-bold">Cut Intermediary Costs</h4>
                      <p className="text-gray-600">Enable secure transactions and data exchange without financial restraints.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Industry Solutions Section */}
          <section className="py-12 px-6">
            <h2 className="text-center text-3xl font-bold mb-6">Custom Blockchain Solutions</h2>
            <p className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
              We develop Custom Blockchain Solutions from scratch or integrate customized features & components into existing systems for finance, healthcare, and gaming markets.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <FaFileInvoiceDollar className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Finance & Banking</h3>
                <p className="text-gray-600">Develop high-speed platforms for trading, payments, and international money transfers.</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <FaClinicMedical className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Healthcare Solutions</h3>
                <p className="text-gray-600">Maintain compliance and protect sensitive patient data with blockchain technologies.</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
                <FaShoppingCart className="text-blue-500 text-5xl mb-4" />
                <h3 className="text-xl font-bold mb-2">Retail & E-Commerce</h3>
                <p className="text-gray-600">Secure transactions and improve supply chain transparency with blockchain.</p>
              </div>
            </div>
          </section>
        </div>
        
        {/* AI Blockchain Section */}
        <section className="py-12 px-6 bg-gray-100">
          <h2 className="text-center text-3xl font-bold mb-6">Custom AI Blockchain Development Services</h2>
          <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-10">
            Our developers can combine Artificial Intelligence (AI) and Blockchain to develop transformative solutions across various industries.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <FaChartLine className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
              <p className="text-gray-600">Our experts combine AI and blockchain to analyze large volumes of data and detect anomalies for better predictions.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <FaShieldAlt className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security and Fraud Detection</h3>
              <p className="text-gray-600">AI-powered blockchain security enhances fraud detection, monitors activity, and ensures the integrity of blockchain networks.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <FaFileContract className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Contract Optimization</h3>
              <p className="text-gray-600">AI-enhanced smart contract optimization automates creation, validation, and enforcement for greater efficiency.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <FaLock className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Privacy and Confidentiality</h3>
              <p className="text-gray-600">AI techniques like federated learning protect data privacy and provide encrypted computations for sensitive blockchain data.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
              <FaNetworkWired className="text-blue-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Enhanced Consensus Mechanisms</h3>
              <p className="text-gray-600">AI algorithms optimize consensus protocols, improving scalability, efficiency, and fault tolerance in blockchain networks.</p>
            </div>
          </div>
        </section>
      </div>
      
      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
          <img
    src={blockchain1}  // Replace with your image path or URL
    alt="Descriptive alt text"
    className="rounded-lg shadow-lg w-full h-64 object-cover"
  />
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Blockchain Development</h2>
          <p className="text-black text-sm sm:text-base">Build secure and robust blockchain applications tailored to your business needs. From private to public blockchains, we deliver custom solutions.</p>
        </div>
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
          <img
    src={blockchain2}  // Replace with your image path or URL
    alt="Descriptive alt text"
    className="rounded-lg shadow-lg w-full h-64 object-cover"
  />
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Smart Contracts</h2>
          <p className="text-black text-sm sm:text-base">Automate and secure transactions with smart contracts. We design, deploy, and audit smart contracts to ensure transparency and efficiency.</p>
        </div>
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
          <img
    src={blockchain3}  // Replace with your image path or URL
    alt="Descriptive alt text"
    className="rounded-lg shadow-lg w-full h-64 object-cover"
  />
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Decentralized Applications (DApps)</h2>
          <p className="text-black text-sm sm:text-base">Develop decentralized applications for enhanced security and transparency. From gaming to finance, our DApps cater to diverse industries.</p>
        </div>
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center">
          <img
    src={blockchain4}  // Replace with your image path or URL
    alt="Descriptive alt text"
    className="rounded-lg shadow-lg w-full h-64 object-cover"
  />
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">Blockchain Integration</h2>
          <p className="text-black text-sm sm:text-base">Seamlessly integrate blockchain with your existing systems. Optimize operations and improve data security with customized blockchain solutions.</p>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-4">Why Choose Our Blockchain Solutions?</h2>
        <ul className="list-disc list-inside space-y-2 text-black">
          <li><strong>Comprehensive Expertise:</strong> Skilled in multiple blockchain platforms like Ethereum, Hyperledger, and Binance Smart Chain.</li>
          <li><strong>Custom Solutions:</strong> Tailored blockchain applications to fit your business needs.</li>
          <li><strong>Enhanced Security:</strong> Leverage decentralized technology to ensure data integrity and transparency.</li>
          <li><strong>End-to-End Services:</strong> From development to deployment and maintenance, we handle every aspect of blockchain solutions.</li>
        </ul>
      </div>
      
      {/* CTA Button */}
     <div className="mt-10 text-center">
  <Link
    to="/contactsection"
    className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
  >
    Contact Us for Blockchain Solutions
  </Link>
</div>
    </div>
  );
};



const Blockchain = () => {
  return (
    <>
      <BlockchainHero/>
      <BlockchainServices/>
    </>
  )
}

export default Blockchain
