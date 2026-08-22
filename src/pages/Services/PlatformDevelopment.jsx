import React from "react";
import { FaLock, FaChartLine, FaServer } from "react-icons/fa";
import { FaShieldAlt, FaEye, FaProjectDiagram } from "react-icons/fa";
import { FaSyncAlt, FaShareAlt } from "react-icons/fa";
import { 
  FaBuilding, FaBrain, FaUniversity, FaTools, FaLaptopMedical,
  FaCogs, FaLaptopCode, FaPenFancy, FaCheckCircle
} from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";
import { GiHealthNormal } from "react-icons/gi";
import { CiCreditCard1 } from "react-icons/ci";
import { Link } from "react-router-dom";

// Hero background image
// import heroBg from "../../assets/Images/webdevelopment.jpg";

const TeamSolution = () => {
  const services = [
    {
      title: "Front End",
      description:
        "Responsive interface, grid-based, reusable components, design pattern, state management",
      icon: <FaLaptopCode size={40} className="text-blue-600" />,
    },
    {
      title: "Back End & DevOps",
      description:
        "Clusters design, micro-services, RDBMS & NoSQL, REST & Graph API",
      icon: <FaCogs size={40} className="text-blue-600" />,
    },
    {
      title: "Full Stack Developer & Tech Leads",
      description:
        "Software architectures, reviews, boilerplate decisions, R&D, feasibility assessment",
      icon: <FaTools size={40} className="text-blue-600" />,
    },
    {
      title: "UI/UX Design & Illustration",
      description:
        "User flows, wireframes, hi-fi prototypes, animations, web design, and game assets",
      icon: <FaPenFancy size={40} className="text-blue-600" />,
    },
    {
      title: "Agile Project Manager",
      description:
        "SCRUM, OKRs, team management, blockers analysis, communication, retrospectives, daily updates",
      icon: <FaProjectDiagram size={40} className="text-blue-600" />,
    },
    {
      title: "Quality Assurance",
      description:
        "UAT, regression, performance, compatibility, UI, sanity, and smoke testing",
      icon: <FaCheckCircle size={40} className="text-blue-600" />,
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Full team turnkey solution
          </h2>
          <p className="text-lg text-gray-600">
            Our dedicated agile teams guarantee the success of your web
            development products. With expertise and collaboration, we deliver
            high-quality results on time. Trust us to bring your vision to life
            for outstanding digital projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const industries = [
    { icon: <MdOutlineRealEstateAgent size={40} className="text-blue-600" />, name: "Real Estate" },
    { icon: <FaBrain size={40} className="text-blue-600" />, name: "Neuroscience" },
    { icon: <AiOutlineBank size={40} className="text-blue-600" />, name: "Banking" },
    { icon: <CiCreditCard1 size={40} className="text-blue-600" />, name: "Insurance" },
    { icon: <FaTools size={40} className="text-blue-600" />, name: "Constructions" },
    { icon: <FaUniversity size={40} className="text-blue-600" />, name: "Education" },
    { icon: <FaLaptopMedical size={40} className="text-blue-600" />, name: "Workflow Management System" },
    { icon: <GiHealthNormal size={40} className="text-blue-600" />, name: "Healthcare" },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Decade of experience, 30+ SaaS platforms across diverse industries
          </h2>
          <p className="text-lg text-gray-600">
            With a decade of experience under our belt, we've successfully
            developed over 30 SaaS platforms and web applications, delivering
            bespoke solutions for an array of sectors. We've demonstrated
            exceptional expertise in developing software and digital tools for the
            Banking, Insurance, Neuroscience, Constructions, Real Estate,
            Education, Healthcare, and several other sectors.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{industry.icon}</div>
              <span className="font-medium text-gray-900">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SaaSPlatformPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/Images/grid-pattern.svg')] bg-[size:40px] opacity-10 z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Web SaaS Platform Development
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                We specialize in creating scalable, secure, and decentralized SaaS
                platforms powered by blockchain technology. Our blockchain-based
                SaaS solutions are designed to transform businesses and provide
                unmatched transparency and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/contactsection" 
                  className="bg-white text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg"
                >
                  Start Your Project →
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500">
                  {/* <img 
                    src={heroBg} 
                    alt="SaaS Platform Development" 
                    className="w-full h-auto object-cover"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Our Blockchain SaaS Platform
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our SaaS platform leverages the power of blockchain to provide a
                secure, transparent, and decentralized environment for your business
                operations. We offer tailored solutions that enhance performance,
                reduce fraud, and improve operational efficiency, all while ensuring
                the integrity of your data and transactions.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">Enhanced security with blockchain encryption</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">Transparent and immutable transaction records</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="ml-3 text-gray-600">Scalable architecture for growing businesses</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
            </div>
          </div>
        </div>
      </div>

      {/* Blockchain Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blockchain-Powered Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Our platform includes advanced features that harness blockchain
              technology to streamline your business processes. From secure data
              storage to efficient contract execution, discover how our SaaS
              platform can help your company grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blockchain Security Feature */}
            <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaShieldAlt className="text-blue-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Blockchain Security
              </h3>
              <p className="text-gray-600">
                Blockchain technology ensures the highest level of security with
                decentralized control and cryptographic hashing, reducing risks
                and ensuring data integrity.
              </p>
            </div>

            {/* Full Transparency Feature */}
            <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaEye className="text-blue-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Full Transparency
              </h3>
              <p className="text-gray-600">
                Our SaaS platform offers full transparency by making transaction
                data visible to all parties involved, creating an ecosystem built
                on trust.
              </p>
            </div>

            {/* Decentralized Management Feature */}
            <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaProjectDiagram className="text-blue-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Decentralized Management
              </h3>
              <p className="text-gray-600">
                With decentralized architecture, our platform eliminates single
                points of failure, enhancing scalability and reducing operational
                risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Development Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-blue-600 font-semibold mb-4">
                Eager to digitize your vision?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Custom Web & SaaS Platform Development Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Turn your business ideas into tangible web solutions. From
                enterprise tools to comprehensive SaaS platforms, we harness the
                latest in web technologies and trends to offer you a competitive
                edge in the digital world.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
              >
                Receive a quotation
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <ExperienceSection />

      {/* SaaS Platform Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Features of Our Blockchain SaaS Platform
            </h2>
            <p className="text-lg text-gray-600">
              Our platform includes advanced features that harness blockchain
              technology to streamline your business processes. From secure data
              storage to efficient contract execution, discover how our SaaS
              platform can help your company grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Smart Contracts */}
            <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaLock className="text-blue-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Smart Contracts
              </h3>
              <p className="text-gray-600">
                Automate agreements and streamline business workflows with
                blockchain-based smart contracts, ensuring secure and
                self-executing transactions.
              </p>
            </div>

            {/* Feature 2 - Real-Time Data Analytics */}
            <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaChartLine className="text-blue-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Real-Time Data Analytics
              </h3>
              <p className="text-gray-600">
                Leverage blockchain’s transparent and immutable data for real-time
                analytics, gaining valuable insights and driving informed
                decisions.
              </p>
            </div>

            {/* Feature 3 - Scalable Infrastructure */}
            <div className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="mb-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaServer className="text-blue-600 text-2xl" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Scalable Infrastructure
              </h3>
              <p className="text-gray-600">
                Our platform is designed to scale with your business needs,
                offering flexible infrastructure to accommodate growth and
                increase efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Design Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Responsive design approach
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Responsive web design, or RWD, is a design approach that addresses
                the range of devices and device sizes, enabling automatic adaption
                to the screen, whether the content is viewed on a tablet, phone,
                television, or watch.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Mobile-First</h4>
                  <p className="text-sm text-gray-600">Designing for small screens first ensures better performance and usability</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Fluid Grids</h4>
                  <p className="text-sm text-gray-600">Layouts adapt seamlessly to any screen size using flexible grid systems</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Flexible Images</h4>
                  <p className="text-sm text-gray-600">Images scale appropriately to prevent overflow and maintain quality</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-700 mb-2">Media Queries</h4>
                  <p className="text-sm text-gray-600">CSS techniques that apply styles based on device characteristics</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-100">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Solution Section */}
      <TeamSolution />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              As pioneers in blockchain-based SaaS development, we offer tailored
              solutions that optimize your business processes while ensuring
              security, scalability, and trust.
            </p>
            <Link 
              to="/contactsection" 
              className="inline-block bg-white text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:bg-blue-50 hover:shadow-lg"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaaSPlatformPage;