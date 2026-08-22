import React from 'react';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Lightbulb, 
  BarChart3, 
  Shield, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Award,
  Zap
} from 'lucide-react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { FaApple, FaAndroid } from 'react-icons/fa';


const Allservices = () => {
  const categories = [
    "SaaS Platforms", "Neuroscience", "Blockchain & Fintech",
    "IoT & AI", "E-Commerce", "CRM & ERP"
  ];
  const mainServices = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Strategic Planning & Consulting",
      description: "Comprehensive strategic planning services to align your business objectives with market opportunities and drive sustainable growth.",
      features: [
        "Market Analysis & Competitive Intelligence",
        "Business Model Innovation",
        "Strategic Roadmap Development",
        "Risk Assessment & Mitigation",
        "Performance Metrics & KPIs"
      ],
      color: "blue"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Performance Optimization",
      description: "Data-driven approaches to optimize your business performance, streamline operations, and maximize efficiency across all departments.",
      features: [
        "Process Improvement & Automation",
        "Operational Excellence Programs",
        "Cost Reduction Strategies",
        "Quality Management Systems",
        "Digital Transformation"
      ],
      color: "green"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Leadership & Team Development",
      description: "Building high-performing teams through leadership development, organizational culture transformation, and talent optimization.",
      features: [
        "Executive Coaching & Mentoring",
        "Team Building & Collaboration",
        "Change Management",
        "Succession Planning",
        "Performance Management"
      ],
      color: "purple"
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Innovation & Growth Strategy",
      description: "Fostering innovation culture and developing growth strategies that position your organization for long-term success.",
      features: [
        "Innovation Framework Development",
        "Product & Service Innovation",
        "Market Expansion Strategies",
        "Partnership & Alliance Development",
        "Technology Integration"
      ],
      color: "orange"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Financial Planning & Analysis",
      description: "Comprehensive financial planning services to optimize your capital structure and improve financial performance.",
      features: [
        "Financial Modeling & Forecasting",
        "Budget Planning & Control",
        "Investment Analysis",
        "Cash Flow Optimization",
        "Financial Risk Management"
      ],
      color: "indigo"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Risk Management & Compliance",
      description: "Protecting your business through comprehensive risk management strategies and ensuring regulatory compliance.",
      features: [
        "Risk Assessment & Analysis",
        "Compliance Program Development",
        "Business Continuity Planning",
        "Crisis Management",
        "Regulatory Advisory"
      ],
      color: "red"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "We begin with a comprehensive analysis of your current situation, challenges, and objectives."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Our experts develop customized strategies tailored to your specific needs and industry requirements."
    },
    {
      number: "03",
      title: "Implementation Planning",
      description: "We create detailed implementation plans with clear timelines, milestones, and success metrics."
    },
    {
      number: "04",
      title: "Execution & Support",
      description: "Our team works alongside yours to execute the plan and provide ongoing support throughout the process."
    },
    {
      number: "05",
      title: "Monitoring & Optimization",
      description: "We continuously monitor progress and optimize strategies to ensure sustained success and growth."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Faster Results",
      description: "Accelerated implementation with proven methodologies"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Access to industry-leading consultants and specialists"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Sustainable Growth",
      description: "Long-term solutions that drive continuous improvement"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      green: "bg-green-50 text-green-600 border-green-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      orange: "bg-orange-50 text-orange-600 border-orange-200",
      indigo: "bg-indigo-50 text-indigo-600 border-indigo-200",
      red: "bg-red-50 text-red-600 border-red-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive business solutions designed to transform your organization, 
              optimize performance, and drive sustainable growth in today's dynamic marketplace.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>500+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-12 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-blue-600 font-bold text-xl mb-2">01. Web and SaaS Platform Development</h2>
        <p className="text-gray-700 mb-6">
          Turn your vision into a digital reality... utilizing innovative technologies, robust tools, and Agile methodologies.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Discover more
        </button>

        {/* Icons Row */}
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-4 text-center text-sm text-gray-500">
          <div className="flex flex-col items-center"><FaReact className="text-blue-500" size={30}/>React</div>
          <div className="flex flex-col items-center"><span>TS</span>Typescript</div>
          <div className="flex flex-col items-center">Redux</div>
          <div className="flex flex-col items-center"><FaNodeJs className="text-green-500" size={30}/>Node.js</div>
          <div className="flex flex-col items-center">Go</div>
          <div className="flex flex-col items-center"><FaPython className="text-yellow-400" size={30}/>Python</div>
        </div>
      </div>

      {/* Right Side Image */}
      <div>
        <img src="/Header_750_X_500-removebg-preview.png" alt="SaaS platform" className="" />
      </div>
    </section>

    <section className="px-6 md:px-20 py-12 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-blue-600 font-bold text-xl mb-2">02. Android and iOS apps</h2>
        <p className="text-gray-700 mb-6">
          Ignite your app’s potential... we breathe life into your ideas with flawless execution.
        </p>
        <div className="flex items-center gap-4 text-gray-600">
          <FaApple size={28} /> iOS - React Native compatible
          <FaAndroid size={28} className="ml-4" /> Android - React Native compatible
        </div>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Discover more
        </button>
      </div>
      <div className="flex justify-center">
        <img src="/THE-ULTIMATE-GUIDE-ON-HOW-TO-CONVERT-ANDROID-TO-IOS-APP--removebg-preview.png" alt="Mobile apps" className="max-h-96" />
      </div>
    </section>


      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full spectrum of consulting services to address every aspect of your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className={`inline-flex p-3 rounded-xl mb-6 ${getColorClasses(service.color)}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group">
                  Learn More 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-12">
      <h2 className="text-blue-600 font-bold text-xl mb-2">03. Custom software development</h2>
      <p className="text-gray-700 mb-4 max-w-3xl">
        We offer turnkey solutions from UX/UI to full-stack engineering...
      </p>
      <button className="mb-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
        Discover more
      </button>

      {/* Grid of categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-600">
        {categories.map((cat, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded-md shadow">
            <h4 className="font-bold text-gray-800">{cat}</h4>
            <p>Short description of {cat}</p>
          </div>
        ))}
      </div>
    </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures successful outcomes and measurable results for every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ptek
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to unlock your organization's full potential and achieve lasting success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our services can help you achieve your strategic objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Allservices;
