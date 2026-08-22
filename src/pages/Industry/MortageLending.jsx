import React from "react";
import {
  FaChartPie,
  FaFileInvoiceDollar,
  FaLaptopCode,
  FaNetworkWired,
  FaArrowRight,
  FaCheck,
  FaLightbulb,
  FaHandshake,
  FaShieldAlt,
  FaUsers,
  FaSyncAlt
} from "react-icons/fa";
// import FAQ from "../../components/FAQ";
import { Link } from "react-router-dom";

const MortageLending = () => {
  // const faqs = [
  //   {
  //     question: "What is lending software?",
  //     answer:
  //       "Lending software is a tool for lending institutions that provide many benefits, including reduced manual labor, monitoring risk, improved decision-making, and streamlined loan management.",
  //   },
  //   {
  //     question: "Can lending software help automate routines?",
  //     answer:
  //       "This software can automate routine lending processes like application processing and document verification, freeing up staff to tackle more complex tasks.",
  //   },
  //   {
  //     question: "What is commercial lending software?",
  //     answer:
  //       "Commercial lending software is a platform that is designed to assist commercial lenders in managing their lending operations more efficiently.",
  //   },
  //   {
  //     question: "Can lending software help the real estate industry?",
  //     answer:
  //       "The real estate industry, in particular, benefits from lending software, as it simplifies loan procedures and speeds up loan approval times. It enables real estate lenders to efficiently process loan applications, verify creditworthiness, and track loan repayment schedules.",
  //   },
  //   {
  //     question: "Why integrate AI into my loan software?",
  //     answer:
  //       "AI integration enhances risk assessment, automates decision-making, detects fraud patterns, and provides predictive analytics for better loan performance forecasting.",
  //   },
  //   {
  //     question: "How can CRM platforms improve lending industries?",
  //     answer:
  //       "CRM can improve lending industries by providing a central system to manage customer interactions and data, automate loan origination processes, and track leads and sales.",
  //   },
  // ];
  
  const features = [
    {
      icon: <FaLightbulb className="text-blue-600 text-2xl" />,
      title: "AI-Powered Decision Making",
      description: "Intelligent algorithms for accurate risk assessment and faster approvals"
    },
    {
      icon: <FaHandshake className="text-blue-600 text-2xl" />,
      title: "Seamless Integrations",
      description: "Connect with credit bureaus, payment processors, and CRM systems"
    },
    {
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
      title: "Bank-Level Security",
      description: "End-to-end encryption and compliance with financial regulations"
    },
    {
      icon: <FaUsers className="text-blue-600 text-2xl" />,
      title: "Customer Portal",
      description: "Self-service options for borrowers to track applications and payments"
    }
  ];
  
  const benefits = [
    "Reduce processing time by up to 70%",
    "Minimize human errors in documentation",
    "Improve compliance with regulatory requirements",
    "Enhance customer satisfaction with faster approvals",
    "Gain real-time insights into loan portfolio performance"
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative  text-black">
        <div className="absolute inset-0  z-0"></div>
        <div className="container mx-auto px-4 py-28 md:py-36 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Mortgage & Lending Software Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-900">
              Our company specializes in developing custom software solutions for
              the mortgage and lending industry. We offer a comprehensive suite of
              services designed to streamline loan origination, enhance risk
              assessment, and improve customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={"/contact"} 
                className="bg-blue-900 text-white hover:bg-blue-900 font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center"
              >
                Start Your Project <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                to={"/services"} 
                className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20000+", label: "Apps Built" },
              { value: "7000+", label: "Happy Customers" },
              { value: "47%", label: "Repeat Business" },
              { value: "2800+", label: "Developers" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-blue-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICE Mortgage Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ICE Mortgage Technology Integration & Support
            </h2>
            <p className="text-gray-600 text-lg">
              Ptek is one of the few ICE Mortgage Technology Pro-Select and
              Developer Partners to assist with ICE Mortgage Technology development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <FaLaptopCode className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  ICE Mortgage Technology Encompass® Lending Platform Development
                </h3>
              </div>
              <p className="text-gray-600">
                We harness the power of the Encompass® Lending Platform to
                facilitate workflow automation processes and improve operational efficiency.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <FaNetworkWired className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Encompass® Developer Connect Assistance
                </h3>
              </div>
              <p className="text-gray-600">
                We leverage ICE Mortgage Technology's Encompass® Developer
                Connect Assistance to provide full developer resources and integration support.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-all">
              GET ICE MORTGAGE TECHNOLOGY SUPPORT
            </button>
          </div>
        </div>
      </section>

      {/* Debt Collection Software Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Debt Collection Software Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              We engineer custom debt collection software solutions for advanced
              case management and reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <FaChartPie className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Credit Risk Reporting
                </h3>
              </div>
              <p className="text-gray-600">
                We develop credit risk reporting software integrated with
                Experian, Equifax, and TransUnion for advanced scoring and analysis.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <FaFileInvoiceDollar className="text-blue-600 text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Debt Collection Case Management
                </h3>
              </div>
              <p className="text-gray-600">
                We engineer custom solutions for debt collection case management
                to streamline operations and improve recovery rates.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-all">
              GET DEBT COLLECTION SOLUTIONS
            </button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Lending Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              Our suite of lending solutions covers every aspect of the loan lifecycle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Loan Origination Systems */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-4 rounded-xl mb-6">
                <img
                  src="/mortagage3.webp"
                  alt="Loan Origination Systems"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Loan Origination Systems
              </h2>
              <p className="text-gray-600 mb-4">
                Our Loan Origination Systems (LOS) streamline the loan application
                process, from initial application to approval, ensuring efficiency
                and compliance at every step.
              </p>
              <ul className="space-y-2">
                {["Online application portals", "Automated underwriting", "Credit pull and decision support"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Loan Servicing Software */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-4 rounded-xl mb-6">
                <img
                  src="/mortagage1.webp"
                  alt="Loan Servicing Software"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Loan Servicing Software
              </h2>
              <p className="text-gray-600 mb-4">
                Our loan servicing solutions manage the entire loan lifecycle,
                including payment processing, escrow management, and customer
                communications.
              </p>
              <ul className="space-y-2">
                {["Automated payment processing", "Escrow management", "Customer portals for account access"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risk Assessment Tools */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all">
              <div className="bg-blue-100 p-4 rounded-xl mb-6">
                <img
                  src="/mortagage2.webp"
                  alt="Risk Assessment Tools"
                  className="w-full h-48 object-cover rounded-md"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Risk Assessment Tools
              </h2>
              <p className="text-gray-600 mb-4">
                Our advanced risk assessment tools utilize AI and machine learning
                to evaluate borrower creditworthiness and predict loan performance.
              </p>
              <ul className="space-y-2">
                {["AI-powered credit scoring", "Fraud detection algorithms", "Predictive analytics for loan performance"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mt-1 mr-2" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16  text-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features of Our Lending Software
            </h2>
            <p className="text-black text-lg">
              Advanced capabilities designed to transform your lending operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl border border-white border-opacity-20 shadow-xl">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-black">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/transforming-lending-at-leading-global-bank.webp" 
                alt="Lending Benefits" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Transform Your Lending Operations
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Our mortgage and lending solutions deliver measurable results across your organization
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <FaSyncAlt className="text-blue-700" />
                    </div>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link 
                  to={"/contact"} 
                  className="inline-flex items-center text-blue-700 font-bold hover:text-blue-900"
                >
                  Schedule a personalized demo
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Everything you need to know about our lending software solutions
            </p>
          </div>

          <div>
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section> */}

      {/* Resources Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Insights & Resources
            </h2>
            <p className="text-gray-600">
              Latest trends and best practices in lending technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "ICE Mortgage Technology Spotlight",
                image: "/HireExperienced (1).png",
                category: "Technology"
              },
              {
                title: "How to Create a Crowdfunding Site",
                image: "/ExperiencedWearable (1).jpg",
                category: "Strategy"
              },
              {
                title: "3 Must-Have Features for Your BHPH Dealership Software",
                image: "/SmartWe (1).webp",
                category: "Features"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-blue-700 font-medium text-sm mb-2 inline-block">
                    {feature.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <button className="text-blue-700 font-bold flex items-center group">
                    Read more
                    <span className="ml-2 group-hover:ml-4 transition-all">
                      <FaArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Lending Operations?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
            Schedule a personalized demo to see how our solutions can streamline your lending processes and improve efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to={"/contact"} 
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-4 rounded-lg transition-all"
            >
              Request a Demo
            </Link>
            <Link 
              to={"/contact"} 
              className="bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 text-blue-900 font-bold px-8 py-4 rounded-lg transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MortageLending;