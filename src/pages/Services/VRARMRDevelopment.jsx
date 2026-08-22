import React from "react";
import { motion } from 'framer-motion';
import {
  FaCog,
  FaUsers,
  FaRocket,
  FaHandshake,
  FaCode,
  FaHeadset,
  FaBuilding,
  FaHeartbeat,
  FaGamepad,
  FaShoppingCart,
  FaCheckCircle,
  FaTools,
  FaLaptopCode,
  FaSearch,
  FaBullseye,
} from "react-icons/fa";
import { MdTour } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { GiBrain } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";
// import loopVideo from "../../assets/Images/pteck1.mp4";
// import InteractiveSection from "../../components/InteractiveSection";

const QualityAssuranceSection = () => {
  const testingFeatures = [
    {
      icon: <FaCheckCircle className="text-blue-600 text-2xl" />,
      title: "User acceptance testing",
      description:
        "Automated tests will find bugs that you can't get a read of, and prevent them from happening again and again.",
    },
    {
      icon: <FaTools className="text-blue-600 text-2xl" />,
      title: "Sanity and smoke testing",
      description:
        "Unlike manual testing, automated testing can process larger data volumes, providing much test coverage.",
    },
    {
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      title: "Regression testing",
      description:
        "Reducing the time required to perform tests, automation can definitely increase overall productivity.",
    },
    {
      icon: <FaCog className="text-blue-600 text-2xl" />,
      title: "Compatibility testing",
      description:
        "Thanks to automated tests, your QA teams can focus on important tasks without wasting time looking for bugs or regressions manually.",
    },
    {
      icon: <FaBullseye className="text-blue-600 text-2xl" />,
      title: "Performance testing",
      description:
        "You can accelerate the time-to-market of your software because automated tests can be run quickly, decreasing the overall testing time.",
    },
    {
      icon: <FaSearch className="text-blue-600 text-2xl" />,
      title: "Unit testing",
      description:
        "While automated tests are running, your teams can focus on testing different and most important functionality.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Error-free adventures: why quality assurance testing is essential
            for seamless VR journeys
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With an unwavering commitment to excellence, we meticulously test
            and optimize every aspect of our VR experiences, ensuring flawless
            performance and uninterrupted immersion for users to embark on
            captivating virtual adventures.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 w-full">
            <img
              src="/ui.jpg"
              alt="Quality Assurance VR"
              className="rounded-xl shadow-lg w-full"
            />
          </div>

          {/* Features Section */}
          <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {testingFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all duration-300"
              >
                {feature.icon}
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DomainIndustryApplication = () => {
  const industries = [
    {
      icon: <FaBuilding className="text-blue-600 text-3xl" />,
      label: "Real Estate",
    },
    {
      icon: <FaHeartbeat className="text-blue-600 text-3xl" />,
      label: "Healthcare",
    },
    { icon: <MdTour className="text-blue-600 text-3xl" />, label: "Tourism" },
    { icon: <FaGamepad className="text-blue-600 text-3xl" />, label: "Gaming" },
    {
      icon: <FaShoppingCart className="text-blue-600 text-3xl" />,
      label: "Retail",
    },
    {
      icon: <IoSchool className="text-blue-600 text-3xl" />,
      label: "Education",
    },
    {
      icon: <GiBrain className="text-blue-600 text-3xl" />,
      label: "Neuroscience",
    },
    {
      icon: <AiOutlineShareAlt className="text-blue-600 text-3xl" />,
      label: "Social",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Domain and Industry Application
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Virtual Reality and Augmented Reality are shaping a range of
              industries worldwide. Whether it's about giving your customers a
              virtual tour of a travel destination or an interactive shopping
              experience, VR and AR technologies are making it happen. By
              fostering customer engagement, streamlining operations, and
              sparking innovation, they're playing a crucial role in modern
              business growth.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                {industry.icon}
                <h3 className="mt-4 text-base font-semibold text-gray-800">
                  {industry.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MRDevelopment = () => {
  const testingFeatures = [
    {
      icon: <FaCheckCircle className="text-blue-600 text-2xl" />,
      title: "User acceptance testing",
      description:
        "Automated tests will find bugs that you can't get a read of, and prevent them from happening again and again.",
    },
    {
      icon: <FaTools className="text-blue-600 text-2xl" />,
      title: "Sanity and smoke testing",
      description:
        "Unlike manual testing, automated testing can process larger data volumes, providing much test coverage.",
    },
    {
      icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
      title: "Regression testing",
      description:
        "Reducing the time required to perform tests, automation can definitely increase overall productivity.",
    },
    {
      icon: <FaCog className="text-blue-600 text-2xl" />,
      title: "Compatibility testing",
      description:
        "Thanks to automated tests, your QA teams can focus on important tasks without wasting time looking for bugs or regressions manually.",
    },
    {
      icon: <FaBullseye className="text-blue-600 text-2xl" />,
      title: "Performance testing",
      description:
        "You can accelerate the time-to-market of your software because automated tests can be run quickly, decreasing the overall testing time.",
    },
    {
      icon: <FaSearch className="text-blue-600 text-2xl" />,
      title: "Unit testing",
      description:
        "While automated tests are running, your teams can focus on testing different and most important functionality.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                VR/AR/MR <span className="text-blue-600">Development</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-2xl">
                As a leading software company, we specialize in developing
                cutting-edge Virtual Reality (VR), Augmented Reality (AR), and
                Mixed Reality (MR) solutions. Our immersive technologies transform
                user experiences and revolutionize industries.
              </p>
              <div className="mt-10">
                <Link
                  to="/contactsection"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Project →
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/ai4.webp"
                alt="VR/AR/MR Development"
                className="rounded-xl shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <InteractiveSection /> */}

      <DomainIndustryApplication />

      {/* Free Consultancy Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get a free <span className="text-blue-600">consultancy</span> today
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Let our experienced team of designers and developers bring your
                vision to life, crafting a captivating and immersive experience
                that will leave users spellbound.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
              >
                Get in touch
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 w-full mt-12 lg:mt-0 flex justify-center"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl w-full max-w-md lg:max-w-lg">
                <video
                  className="w-full h-auto"
                  loop
                  autoPlay
                  muted
                  playsInline
                >
                  <source src="/VR-hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <QualityAssuranceSection />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why <span className="text-blue-600">Choose Us</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              As a software company specializing in VR/AR/MR development, we have
              the expertise to create innovative and immersive experiences. Our team
              uses the latest technologies and industry best practices to deliver
              exceptional results that will transform your business.
            </p>
            <Link
              to="/contactsection"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MRDevelopment;