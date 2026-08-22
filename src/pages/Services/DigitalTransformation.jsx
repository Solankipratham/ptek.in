import React from "react";
import {
  FaClipboardList,
  FaUserCheck,
  FaUsers,
  FaLaptopCode,
  FaCogs,
  FaHandHolding,
  FaRobot,
  FaDev,
  FaDatabase,
  FaChartLine,
  FaShieldAlt,
  FaLightbulb,
  FaMobileAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

const PlanningAndStrategy = () => {
  const steps = [
    {
      step: "STEP 1",
      title: "We kick off with a consulting session",
      description:
        "Define your project objectives, outline the project scope, create the high-level architecture of your cyber-physical system, and assess development costs.",
    },
    {
      step: "STEP 2",
      title: "Sit down and find the best strategy",
      description:
        "Create an iterative project roadmap to deliver business benefits (a technical vision, prototype, features) with each phase.",
    },
    {
      step: "STEP 3",
      title: "Then we can start the implementation process",
      description:
        "We follow software and hardware development best practices, including DevOps, to create a scalable, secure product.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planning and strategy
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            This is a brief overview of the process we follow when working on
            improving your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-700 font-bold text-lg">{index + 1}</span>
              </div>
              <h3 className="text-blue-700 text-sm font-semibold mb-4 tracking-wider">
                {step.step}
              </h3>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#how-we-develop"
            className="inline-flex items-center text-blue-700 font-medium hover:underline group"
          >
            Learn more about How we develop
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const DigitalTransformation = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* New Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6">
                Accelerate Your <span className="text-blue-400">Digital</span> Transformation
              </h1>
              <p className="text-xl text-blue-900 mb-8 max-w-2xl">
                We help businesses embrace digital transformation to enhance operational efficiency, 
                improve customer experience, and stay competitive in the ever-evolving digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contactsection" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition duration-300 text-lg font-medium shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/services" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg transition duration-300 text-lg font-medium"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <img 
                  src="/Screenshot_2025-07-19_at_2.10.27_PM-removebg-preview.png" 
                  alt="Digital Transformation" 
                  className="relative  max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Drive Growth and Innovation With Our Digital Transformation Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              Ptek's digital transformation experts will help your business reach
              optimal performance through innovative strategies and implementation
              of digital transformation initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaRobot className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-600">
                We automate repetitive business processes with intelligent technologies
                including robotic process automation (RPA). Our tools handle document
                recognition, data extraction, and image processing.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaDev className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps Success Teams</h3>
              <p className="text-gray-600">
                Our specialists provide technical solutions and consulting services including
                planning, QA testing, and onboarding to ensure your IT infrastructure needs are met.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCogs className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development & Implementation</h3>
              <p className="text-gray-600">
                We develop and implement custom technical solutions with continuous integration,
                delivery, monitoring, and incident response to maintain your IT system health.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaDatabase className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">IT Infrastructure Support</h3>
              <p className="text-gray-600">
                We provide outsourced infrastructure support for enhanced scalability, with
                cross-platform support for cloud-based and on-premises databases.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <Link 
              to="/contact" 
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 font-medium"
            >
              WORK WITH DX EXPERTS
            </Link>
          </div>
        </div>
      </section>

      {/* Team Augmentation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What is <span className="text-blue-700">Team Augmentation</span>?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Team augmentation allows businesses to expand their development capabilities by 
                adding experienced developers to their in-house teams. Whether you need full-stack 
                developers, mobile developers, or blockchain experts, we can provide the right talent 
                to complement your team.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mt-1">
                    <FaChartLine className="text-blue-700 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Flexibility</h3>
                    <p className="text-gray-600">
                      Scale your development team up or down according to your project's needs, 
                      ensuring flexibility and cost efficiency.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mt-1">
                    <FaShieldAlt className="text-blue-700 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise</h3>
                    <p className="text-gray-600">
                      Access specialized skills and knowledge that complement your existing team's 
                      capabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 mt-1">
                    <FaLightbulb className="text-blue-700 text-xl" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Seamless Integration</h3>
                    <p className="text-gray-600">
                      Our developers integrate smoothly with your existing workflows and processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <img 
                  src="/Screenshot_2025-07-19_at_2.14.22_PM-removebg-preview.png" 
                  alt="Team Flexibility" 
                  className="relative  max-w-full border-8 border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

   <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Discover the greatest Digital Transformation examples
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Digital transformation is the process of adapting one's business to the digital age and the most important companies in the world have already been through it.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-start relative">
        {/* Sidebar Icons */}
       

        {/* Content Card */}
        <div className="bg-white shadow-md rounded-2xl p-8 lg:w-2/3 relative z-10">
          <h3 className="text-xl font-semibold mb-4">Audi</h3>
          <p className="text-gray-700 mb-4">
            Audi introduced an innovative showroom concept in 2012 called Audi City. It enables visitors to
            browse the entire car catalogue and try out different models in urban city centers.
          </p>
          <p className="text-gray-700 mb-4">
            These spaces that contain a central warehouse are making car shopping more accessible and enjoyable
            by bringing a great experience to city center.
          </p>
          <p className="text-gray-700 mb-4">
            You'll be able to configure and inspect a car before buying it in store by using an interactive screen.
            This way, you'll have a better understanding of what options are available for the car.
          </p>
          <p className="text-gray-700">
            Thanks to these solutions in Audi City, where there are only 4 cars permanently exhibited (savings for the
            company!), they were able to increase sales by 60% compared to their traditional showrooms.
          </p>
        </div>

        {/* Right Circular Image */}
        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-0">
          <img
            src="/audi-use-case-min.jpg" // Replace with actual image path
            alt="Audi showroom"
            className="w-96 h-96 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>.   

      <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/mobile-and-web-applications-lastingdynamics.png" // Replace with your actual image path
            alt="Mobile and Web Apps"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        {/* Right text content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Mobile & web applications
          </h2>
          <p className="text-gray-700 mb-4">
            Digital transformation has been a big trend in marketing in recent years. New technologies have
            changed the way we communicate with one another, and make it easier than ever to send messages
            on-the-go for smartphones. Mobile applications are becoming more popular as people spend more time
            on their devices.
          </p>
          <p className="text-gray-700 mb-4">
            They allow us to stay connected and up-to-date without being at a computer most of the time.
            In today’s world, where digital transformation is a must, it is important for businesses to have
            a mobile application.
          </p>
          <p className="text-gray-700">
            The app gives the user a way to interact with the company and find out about current products or services.
            Companies should make sure their apps offer more value than just information, especially for customers.
            They should focus on delivering a seamless experience for their customers and ensure that they are not
            missing out on any features or functionalities.
          </p>
        </div>
      </div>
    </section>.    
      {/* Social Presence Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                <img 
                  src="/digital-transformation-services-company-min-1.jpeg" 
                  alt="Social Presence" 
                  className="relative rounded-xl shadow-lg max-w-full border-8 border-white/10"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Elevate Your <span className="text-blue-700">Social Presence</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                A social presence is crucial for any modern business. It's how you communicate with customers 
                and potential clients, promote products and services, and build brand awareness.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Social media has become an integral part of every business strategy. We help you leverage 
                social platforms for marketing, customer service, and brand awareness as part of your 
                digital transformation journey.
              </p>
              <p className="text-gray-600 text-lg">
                Our integrated approach creates automated funnels that connect all your channels - from 
                marketing to customer service - providing valuable audience insights that give you a 
                competitive edge in understanding and serving your customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planning and Strategy Section */}
      <PlanningAndStrategy />

      {/* Free Analysis Section */}
      <section className="py-20  text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let us analyse your digital transformation requirements
                <span className="text-blue-300"> for free</span>
              </h2>
              <p className="text-blue-900 text-lg mb-8">
                We help our clients build industry-defining businesses by delivering unique capabilities 
                that unify human experiences, unlock new value, create new revenue streams, and transform 
                customer engagement.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 font-medium"
              >
                Get a Free Quote
              </Link>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                {/* <img 
                  src="/Images/monitor.jpg" 
                  alt="Free Analysis" 
                  className="relative rounded-xl shadow-lg max-w-full border-8 border-white/10"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-700">Collaborative</span> Process
            </h2>
            <p className="text-gray-600 text-lg">
              Our team augmentation model is designed to be flexible and adaptive, ensuring your team has 
              the right skills and support to succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaLaptopCode className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consultation</h3>
              <p className="text-gray-600">
                We start by understanding your project needs and the skills required to support your team.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUserCheck className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Developer Selection</h3>
              <p className="text-gray-600">
                We match you with qualified developers based on your technology stack and requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:border-blue-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMobileAlt className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
              <p className="text-gray-600">
                Our developers integrate with your team, ensuring smooth collaboration and communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-700">Ptek</span>?
            </h2>
            <p className="text-gray-600 text-lg">
              We understand that finding the right talent for your project is crucial. Our developers bring 
              the expertise and experience needed to deliver high-quality software solutions, on time and 
              within budget. With our team augmentation services, you can scale quickly without compromising 
              on quality.
            </p>
          </div>

          <Link 
            to="/contactsection" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 font-medium"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;