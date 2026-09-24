import React, { useState } from "react";
import {
  FaDollarSign,
  FaBell,
  FaFileAlt,
  FaChartLine,
  FaWallet,
  FaFileInvoice,
  FaChevronDown,
  FaChevronUp,
  FaMobileAlt,
  FaExchangeAlt,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BankingFintech = () => {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFAQ = (index) => {
    setFaqOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqData = [
    {
      question: "What is banking software?",
      answer:
        "Banking software enables financial institutions to manage accounts, process transactions, and offer services such as online banking, mobile apps, and digital wallets.",
    },
    {
      question: "How can AI improve customer experience in banking software?",
      answer:
        "AI can improve customer experiences through personalized recommendations, fraud detection, predictive analytics, and chatbots for customer support.",
    },
    {
      question: "What is a Loan Origination System?",
      answer:
        "A Loan Origination System helps automate the process of managing and approving loan applications, ensuring efficiency and compliance.",
    },
    {
      question:
        "How does AI improve risk management in Loan Origination Systems?",
      answer:
        "AI evaluates credit risk by analyzing data trends, ensuring better decision-making and reducing potential defaults.",
    },
    {
      question:
        "What are some emerging technologies used in Mobile Banking Software?",
      answer:
        "Emerging technologies include blockchain for secure transactions, biometric authentication, and AI-driven analytics for enhanced customer engagement.",
    },
    {
      question:
        "How can Mobile Banking Software be integrated with other banking systems?",
      answer:
        "Mobile banking software can be integrated with APIs to connect with core banking systems, allowing seamless data synchronization and transactions.",
    },
  ];

  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <div
        className="relative  w-full min-h-screen flex items-center pb-32"
        style={{
          background: "",
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <div className="pattern-dots  w-full h-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue leading-tight mb-6">
                Banking & Fintech Solutions
              </h1>
              <p className="text-xl text-blue-900 max-w-2xl mb-8 leading-relaxed">
                Transforming banking with AI, powering fraud detection, wealth
                management, KYC automation, and predictive analytics.
              </p>
              <Link
                to={"/contact"}
                className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                HIRE BANKING SOFTWARE DEVELOPERS
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-blue-600 rounded-xl w-80 h-80 md:w-96 md:h-96 transform rotate-6 opacity-20 absolute -inset-4"></div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl w-80 h-80 md:w-96 md:h-96 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="bg-gray-100 rounded-lg p-6 w-full max-w-xs shadow-lg">
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-blue-900 font-bold text-lg">
                          BankSecure
                        </div>
                        <div className="w-10 h-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-md"></div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4 text-white mb-6">
                        <div className="text-xs opacity-80">
                          Current Balance
                        </div>
                        <div className="text-xl font-bold">$42,567.89</div>
                      </div>

                      <div className="flex space-x-4 mb-6">
                        <div className="flex-1 bg-white rounded-lg p-3 shadow text-center">
                          <div className="text-blue-700 font-bold">Send</div>
                        </div>
                        <div className="flex-1 bg-white rounded-lg p-3 shadow text-center">
                          <div className="text-blue-700 font-bold">Pay</div>
                        </div>
                        <div className="flex-1 bg-white rounded-lg p-3 shadow text-center">
                          <div className="text-blue-700 font-bold">Invest</div>
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 text-center">
                        Secure Banking Platform
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banking Software Support */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Banking Software Support
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Banking and fiscal services have seen a significant transformation
              because of the use of new software solutions and apps. Our banking
              software support enhances efficiency, reliability, and regulatory
              compliance while improving the customer experience.
            </p>
          </div>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Currency Exchange Support",
                description:
                  "Currency Exchange Support enables real-time currency conversion. Our engineers can enable your software or app to integrate and maintain data exchanges with international banking systems while monitoring and updating exchange rates.",
                icon: <FaExchangeAlt className="text-3xl text-blue-600" />,
                color: "bg-blue-50",
              },
              {
                title: "Automated Alerts Configuration",
                description:
                  "Our engineers can program automated alert configurations for your banking software to aid users in receiving fully automated alerts for potential fraud, fiscal updates, or regular account activities.",
                icon: <FaBell className="text-3xl text-blue-600" />,
                color: "bg-blue-50",
              },
              {
                title: "Electronic Statement Issues",
                description:
                  "Our software experts write code that enables your software users to avoid electronic statement issues. They can access their electronic statements on desktop and mobile devices securely.",
                icon: <FaFileAlt className="text-3xl text-blue-600" />,
                color: "bg-blue-50",
              },
              {
                title: "Tax Reporting Guidance",
                description:
                  "Our engineers help with tax reporting guidance for your banking software. Automation ensures compliance with financial reporting and tax standards.",
                icon: <FaChartLine className="text-3xl text-blue-600" />,
                color: "bg-blue-50",
              },
              {
                title: "Virtual Wallet Support",
                description:
                  "With virtual wallet support, our coders enable virtual wallets to function seamlessly in your banking software, allowing secure and easy-to-use payment systems.",
                icon: <FaWallet className="text-3xl text-blue-600" />,
                color: "bg-blue-50",
              },
              {
                title: "Automatic Bill Pay Assistance",
                description:
                  "Our software team supports automatic bill pay assistance banking software, enabling recurring payments for subscriptions, utilities, and other services.",
                icon: <FaFileInvoice className="text-3xl text-blue-600" />,
                color: "bg-blue-50",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`${service.color} rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100`}
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-lg bg-white shadow-sm mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Fintech Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              We provide cutting-edge solutions across all areas of modern
              banking and financial technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Digital Banking */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-[1.02]">
              <div className="relative h-56">
                <img
                  src="/Digital Banking.jpg"
                  alt="Digital Banking"
                  className="w-56 h-56 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaMobileAlt className="text-white text-6xl opacity-30" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaMobileAlt className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Digital Banking
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Our digital banking solutions are designed to provide
                  customers with convenient, secure, and accessible banking
                  services at their fingertips. We focus on creating
                  user-friendly mobile applications and web platforms that allow
                  individuals and businesses to manage their finances with ease.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Mobile banking and e-wallets
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Real-time transaction tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Advanced encryption and security features
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payments & Transactions */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-[1.02]">
              <div className="relative h-56 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaExchangeAlt className="text-white text-6xl opacity-30" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaExchangeAlt className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Payments & Transactions
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  We offer innovative payment solutions that make financial
                  transactions faster, more secure, and efficient. From
                  contactless payments to blockchain technology, we are
                  revolutionizing the way people transfer and receive money.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Instant payment processing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Blockchain and cryptocurrency solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Secure cross-border payments
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Fintech Innovation */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-[1.02]">
              <div className="relative h-56 bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaLightbulb className="text-white text-6xl opacity-30" />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <FaLightbulb className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Fintech Innovation
                  </h3>
                </div>
                <p className="text-gray-700 mb-6">
                  We are at the forefront of fintech innovation, working on
                  solutions that leverage AI, machine learning, and big data to
                  transform financial services. Our goal is to make financial
                  products smarter, more accessible, and personalized for every
                  user.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">
                      AI-driven financial analytics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Personalized investment strategies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Automated loan and credit scoring systems
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Find answers to common questions about our banking and fintech
              solutions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 mb-4 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left py-6 px-4 flex justify-between items-center hover:bg-blue-50 rounded-lg transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <span className="text-blue-600 ml-4">
                    {faqOpen[index] ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>
                {faqOpen[index] && (
                  <div className="px-4 pb-6 text-gray-700 bg-blue-50 rounded-lg mx-4 mb-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Beyond core software solutions, we offer a range of services to
              further enhance your banking and fintech operations:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Blockchain Consulting
                </h3>
                <p className="text-gray-700">
                  Expert guidance on implementing blockchain technology for
                  secure, transparent financial transactions.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Regulatory Compliance Solutions
                </h3>
                <p className="text-gray-700">
                  Ensure adherence to financial regulations with our
                  comprehensive compliance frameworks.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Mobile & Web App Development
                </h3>
                <p className="text-gray-700">
                  Custom mobile and web applications tailored to your financial
                  institution's specific needs.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Cloud-based Payment Platforms
                </h3>
                <p className="text-gray-700">
                  Scalable, secure payment solutions hosted on robust cloud
                  infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Financial Operations
            </h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Partner with us to develop customized banking and fintech
              solutions that meet the unique needs of your business. Our team is
              dedicated to delivering high-quality, scalable, and user-friendly
              applications that drive efficiency and enhance security.
            </p>
            <Link
              to={"/contactsection"}
              className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-lg text-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              Contact Us Today
              <svg
                className="inline-block ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingFintech;
