import React from "react";
// import FAQ from "../../components/FAQ";
import { Link } from "react-router-dom";

const RealEstate = () => {
  const faqs = [
    {
      question:
        "What is software for real estate, and how can it benefit realtors?",
      answer:
        "Software for real estate helps streamline processes, manage listings, and enhance client communication.",
    },
    {
      question: "What is the difference between RETS and IDX?",
      answer:
        "RETS is a framework for data sharing between MLS systems,while IDX is a tool for realtors to display MLS listings on their websites.",
    },
    {
      question: "What is HOA software?",
      answer:
        "HOA software manages homeowner association tasks like billing, maintenance, and communication.",
    },
    {
      question: "Why is IT support essential for real estate businesses?",
      answer:
        "IT support ensures smooth operations, enhances security, and minimizes downtime for real estate businesses.",
    },
    {
      question:
        "How can IT support help real estate businesses with backup solutions?",
      answer:
        "IT support provides robust backup solutions to prevent data loss and ensure business continuity.",
    },
  ];

  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative ] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 "></div>
          <div className="absolute bottom-0 left-0 right-0 h-48 "></div>
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <div className="" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Real Estate Software Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-black max-w-2xl">
              Our company specializes in developing custom software solutions
              tailored for the real estate industry. We offer a comprehensive
              suite of services designed to enhance property management,
              streamline transactions, and improve client engagement, ensuring
              seamless operations for real estate professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={"/contactsection"} 
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Start Your Project →
              </Link>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg border border-white/30">
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Ptek Real Estate Software Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to optimize your real estate operations and enhance client experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👩‍💼",
                title: "Real Estate Management Software",
                description: "Streamline operations with comprehensive management tools"
              },
              {
                icon: "📄",
                title: "Multiple Listing Service (MLS)",
                description: "Access and manage property listings efficiently"
              },
              {
                icon: "🔗",
                title: "IDX Integration",
                description: "Display MLS listings directly on your website"
              },
              {
                icon: "📂",
                title: "Property Management",
                description: "Manage residential and commercial properties with ease"
              },
              {
                icon: "📈",
                title: "Real Estate Valuation Engines",
                description: "Accurate property valuation tools for better decision making"
              },
              {
                icon: "🏘️",
                title: "HOA Management",
                description: "Comprehensive homeowner association management solutions"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-8">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium text-lg shadow-md hover:shadow-lg">
              Get MLS Solutions
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
     <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Specialized Real Estate Solutions
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Industry-specific software designed to address the unique challenges of real estate professionals
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Property Management Software */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
        <img
          src="/retail2.webp" // 🔁 Replace with your actual image path
          alt="Property Management"
          className="w-full h-48 object-cover"
        />
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Property Management Software
          </h3>
          <p className="text-gray-600 mb-4">
            Our property management solutions streamline the management of
            residential and commercial properties, ensuring efficient operations
            and enhanced tenant satisfaction.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Tenant and lease tracking</li>
            <li>Maintenance management</li>
            <li>Accounting and financial reporting</li>
          </ul>
        </div>
      </div>

      {/* MLS Software */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
        <img
          src="/real2.avif" // 🔁 Replace with your actual image path
          alt="MLS Software"
          className="w-full h-48 object-cover"
        />
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Multiple Listing Service (MLS) Software
          </h3>
          <p className="text-gray-600 mb-4">
            Our MLS software solutions facilitate property listings, search
            functionalities, and agent collaboration, enhancing the property
            search experience for clients.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Property listing management</li>
            <li>Advanced search and filter options</li>
            <li>Agent collaboration tools</li>
          </ul>
        </div>
      </div>

      {/* CRM Software */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
        <img
          src="/real3.webp" // 🔁 Replace with your actual image path
          alt="Real Estate CRM"
          className="w-full h-48 object-cover"
        />
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Real Estate CRM Software
          </h3>
          <p className="text-gray-600 mb-4">
            Our CRM solutions help real estate professionals manage client
            relationships, track leads, and automate marketing efforts, driving
            sales and client retention.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Lead management and tracking</li>
            <li>Email marketing automation</li>
            <li>Client communication tools</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Expertise Section */}
      <section className="py-16 bg-gradient-to-r from-[#0A2540] to-[#1A365D] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              We Have Experienced Real Estate Software Developers
            </h3>
            <p className="text-lg text-gray-200 mb-8">
              We augment your current IT team to ensure your real estate software
              solutions align with specialized, multi-purpose technologies and
              industry-specific expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                "📑 MLS Software Development Services",
                "💼 Real Estate Accounting Software",
                "🔒 Real Estate Transaction Software",
                "🌐 RESO Web API Integration"
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-lg flex items-center justify-center gap-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strict Adherence To Regulatory Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Chista’s real estate software development company, integration, and
              implementation experts are fully compliant with strict regulatory
              standards inherent to the real estate, payments, and financial
              industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Data Security", description: "Enterprise-grade encryption and security protocols" },
              { title: "Industry Compliance", description: "Adherence to RESO, NAR, and other industry standards" },
              { title: "Audit Trails", description: "Comprehensive tracking for regulatory compliance" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="text-blue-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                Frequently Asked Questions about Real Estate
              </h2>
              {/* <FAQ faqs={faqs} /> */}
              <div className="mt-12 text-center">
                <Link 
                  to={"/contacsection"} 
                  className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg shadow-md hover:shadow-lg inline-block"
                >
                  Contact Us for More Information
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;