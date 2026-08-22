import { useState } from 'react';
import { FaStar, FaCogs, FaLink, FaMobileAlt, FaSyncAlt, FaTools, FaChevronDown, FaChevronUp, FaArrowRight, FaCheck, FaUsers, FaChartLine, FaShieldAlt, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const SAP = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [activeTab, setActiveTab] = useState('implementation');
  const [activeFaq, setActiveFaq] = useState(null);

  // Toggle service expansion
  const toggleService = (index) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  // Toggle FAQ
  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  // Mock data for client testimonials
  const testimonials = [
    {
      id: 1,
      name: "Michael Reynolds",
      position: "CTO, Global Logistics Inc.",
      content: "Ptek's SAP implementation transformed our supply chain operations. We reduced processing time by 40% and improved inventory accuracy to 99.8%.",
      logo: "🛳️",
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Director of Operations, TechSolutions",
      content: "The SAP integration services helped us consolidate 5 legacy systems into one unified platform. Our reporting time went from days to minutes.",
      logo: "💻",
    },
    {
      id: 3,
      name: "David Rodriguez",
      position: "CFO, HealthFirst Medical",
      content: "With Ptek's SAP customization, we automated 85% of our financial processes. Our month-end closing now takes 3 days instead of 12.",
      logo: "🏥",
    }
  ];

  // Mock data for statistics
  const stats = [
    { value: "40%", label: "Average process improvement" },
    { value: "500+", label: "SAP projects delivered" },
    { value: "99.5%", label: "Client satisfaction rate" },
    { value: "24/7", label: "Global support coverage" }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How long does a typical SAP implementation take?",
      answer: "Implementation timelines vary based on business size and complexity. For mid-sized companies, implementation typically takes 4-8 months. We follow a phased approach to ensure minimal disruption to your operations."
    },
    {
      question: "Can you integrate SAP with our existing systems?",
      answer: "Absolutely. Our team specializes in integrating SAP with various third-party systems including CRM platforms, e-commerce systems, legacy databases, and custom applications using SAP PI/PO, APIs, and middleware solutions."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have extensive experience across multiple industries including manufacturing, healthcare, retail, logistics, financial services, and energy. Our consultants have industry-specific certifications and knowledge."
    },
    {
      question: "Do you provide training for our staff?",
      answer: "Yes, we offer comprehensive training programs tailored to different user roles - from end-users to administrators. Training includes system navigation, process workflows, reporting, and troubleshooting."
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "SAP Implementation Lead",
      experience: "12+ years in ERP solutions",
      expertise: "SAP S/4HANA, FI/CO"
    },
    {
      name: "Maria Rodriguez",
      role: "Integration Specialist",
      experience: "8 years in system integration",
      expertise: "SAP PI/PO, API Management"
    },
    {
      name: "David Chen",
      role: "SAP Solutions Architect",
      experience: "15 years in business transformation",
      expertise: "Supply Chain, Manufacturing"
    },
    {
      name: "Sarah Williams",
      role: "SAP Support Manager",
      experience: "10 years in managed services",
      expertise: "System Monitoring, Upgrades"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section (unchanged) */}
      <div className="w-full px-6 lg:px-24 py-28 flex flex-col lg:flex-row items-center justify-between ">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 text-center lg:text-left space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-500 text-base md:text-lg leading-relaxed ml-2 "
          >
          SAP Gold Partner         </motion.p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90 ">
               Transform your Business with <br className="hidden md:block" />SAP Excellence
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Streamline operations and drive innovation with our tailored SAP solutions. From implementation to integration and support, we help organizations harness SAP to achieve measurable results.
          </p>
          <Link
            to="/"
            className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
          >
            Explore Solutions
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 mt-12 lg:mt-0"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Wearable Tech"
              className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600">{stat.value}</div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits of Our SAP Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business operations with these measurable advantages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Operational Efficiency</h3>
              <p className="text-gray-600">
                Streamline workflows and reduce manual processes by up to 70% with automated SAP solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enhanced Collaboration</h3>
              <p className="text-gray-600">
                Break down silos with unified data and processes across departments and locations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compliance & Security</h3>
              <p className="text-gray-600">
                Meet regulatory requirements with built-in compliance features and enterprise-grade security.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCloud className="text-yellow-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalability</h3>
              <p className="text-gray-600">
                Grow without constraints with cloud-based SAP solutions that adapt to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our SAP Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to transform your business operations
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: <FaStar className="text-blue-500" />,
                title: "SAP Implementation Services",
                content: "We implement SAP solutions tailored to your business needs by deploying customized SAP modules, ensuring seamless system integration, and optimizing processes for enhanced efficiency."
              },
              {
                icon: <FaCogs className="text-blue-500" />,
                title: "SAP Configurations & Customizations",
                content: "We configure unique SAP software settings, applications, features, and overall user experiences with customizable dashboards, graphs, forms, reports, layouts, and other extending functionalities."
              },
              {
                icon: <FaLink className="text-blue-500" />,
                title: "SAP Integration Services",
                content: "Our team enhances your business processes by integrating SAP solutions with your systems, including third-party applications, databases, and ERP systems."
              },
              {
                icon: <FaMobileAlt className="text-blue-500" />,
                title: "SAP Consulting Services",
                content: "Our SAP consultant team provides insights on system selection, customization, and best practices, ensuring that your SAP environment aligns with your goals."
              },
              {
                icon: <FaSyncAlt className="text-blue-500" />,
                title: "SAP Migration Services",
                content: "We leverage SAP tools to migrate your business operation processes to public cloud environments, as well as update your current software systems to ensure that they're always up-to-date."
              },
              {
                icon: <FaTools className="text-blue-500" />,
                title: "SAP Managed Services",
                content: "Our team offers 24/7 system monitoring, proactive maintenance, strategy planning, and expert support to ensure your SAP environment is always up-to-date and functioning at peak performance."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleService(index)}
                >
                  <div className="flex items-center">
                    <div className="bg-blue-50 p-4 rounded-lg mr-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  {expandedService === index ? (
                    <FaChevronUp className="text-gray-400" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </button>

                {expandedService === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-600 mb-4">{service.content}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {[...Array(4)].map((_, i) => (
                        <li key={i} className="flex items-center">
                          <FaCheck className="text-green-500 mr-2" />
                          <span className="text-gray-700">Feature {i + 1} description</span>
                        </li>
                      ))}
                    </ul>
                    <button className="text-blue-600 font-medium flex items-center">
                      Learn more <FaArrowRight className="ml-2 text-sm" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition">
              Request a Custom SAP Solution
            </button>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven SAP Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to ensure your SAP success
            </p>
          </div>

          <div className="relative">
            {/* Timeline bar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

            <div className="space-y-12">
              {[
                {
                  title: "Discovery & Planning",
                  content: "We begin with a comprehensive analysis of your business processes, goals, and requirements to develop a tailored implementation roadmap.",
                  icon: "🔍"
                },
                {
                  title: "Solution Design",
                  content: "Our experts design a solution architecture that aligns with your business objectives and technical environment.",
                  icon: "📐"
                },
                {
                  title: "Development & Configuration",
                  content: "We configure SAP modules to your specifications and develop any custom components needed for your unique workflows.",
                  icon: "💻"
                },
                {
                  title: "Testing & Quality Assurance",
                  content: "Rigorous testing ensures all components work seamlessly together before deployment.",
                  icon: "🧪"
                },
                {
                  title: "Deployment & Go-Live",
                  content: "We manage the deployment process with minimal disruption and provide immediate post-launch support.",
                  icon: "🚀"
                },
                {
                  title: "Optimization & Support",
                  content: "Continuous monitoring, optimization, and support services ensure your SAP system evolves with your business.",
                  icon: "🛠️"
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  {/* Circle on timeline */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 bg-blue-600 rounded-full items-center justify-center text-white z-10">
                    {step.icon}
                  </div>

                  <div className={`bg-gray-50 rounded-xl p-6 shadow-md md:w-5/12 ${index % 2 === 0 ? 'md:float-left' : 'md:float-right'} hover:shadow-lg transition`}>
                    <div className="md:hidden w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.content}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[...Array(3)].map((_, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          Deliverable {i + 1}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="clear-both"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that transformed their operations with our SAP solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="text-yellow-400 flex mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.logo}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our SAP services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {activeFaq === index ? (
                    <FaChevronUp className="text-gray-400" />
                  ) : (
                    <FaChevronDown className="text-gray-400" />
                  )}
                </button>

                {activeFaq === index && (
                  <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SAP;