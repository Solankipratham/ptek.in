import React from "react";
import {
  FaCogs,
  FaPlayCircle,
  FaReact,
  FaRobot,
  FaSitemap,
  FaRegPlayCircle,
  FaFileAlt,
  FaGitAlt,
  FaLink,
  FaCheckCircle,
  FaCalendarCheck,
  FaRegClock,
  FaProjectDiagram,
  FaLightbulb,
  FaRegCheckCircle,
  FaClipboardList,
  FaMousePointer,
  FaTachometerAlt,
  FaArrowRight
} from "react-icons/fa";

// import heroImage from "../../assets/Images/softwarequality-hero.jpg";
// import techBackground from "../../assets/Images/tech-bg.jpg";
// import qualityIcon from "../../assets/Images/quality-icon.png";
import {
  MdSpeed,
  MdBuild,
  MdPhoneIphone,
  MdCheckCircle,
  MdInsertDriveFile,
  MdSecurity,
} from "react-icons/md";
import { Link } from "react-router-dom";

const SoftwareQuality = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden ">
        <div className="container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10 mb-10 md:mb-0">
            <div className="flex items-center mb-6">
              {/* <div className="bg-blue-800 rounded-full p-2 mr-3">
                <img src={qualityIcon} alt="Quality" className="h-8 w-8" />
              </div> */}
              <span className="text-blue-900 font-medium">Software Quality Assurance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Excellence in Every <span className="text-blue-900">Software Release</span>
            </h1>
            <p className="text-xl text-blue-900 mb-8 max-w-2xl">
              Bug-free software ensured through manual and automated testing by our expert QA teams. 
              We provide comprehensive solutions that ensure your product performs flawlessly and 
              meets all user requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to={"/contact"} 
                className="bg-blue-600 hover:bg-blue-700 text-black px-8 py-4 rounded-lg transition flex items-center justify-center"
              >
                Start Your Project <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                to={"/services"} 
                className="bg-transparent hover:bg-blue-900 border-2 border-blue-600 text-black px-8 py-4 rounded-lg transition flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center z-10">
            <div className="relative">
              <div className="absolute -inset-4"></div>
              <div className="absolute -inset-4 "></div>
              <div className="relative  rounded-xl overflow-hidden w-full max-w-md h-80 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
                {/* <img 
                  src={heroImage} 
                  alt="Software Quality Assurance" 
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-800 to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-700 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-20 right-1/4 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Process Section */}
      <div className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2  rounded-full mb-4">
              <span className="text-blue-900 font-medium">Our Methodology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Our Software Quality Process
            </h2>
            <p className="text-xl text-blue-900">
              We follow a rigorous process to ensure the highest level of quality in every software 
              project. From functional testing to performance testing, our process guarantees that 
              your software delivers superior results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* Step 1 */}
            <div className=" border border-blue-700 rounded-2xl rounded-2xl p-8 transform transition-all hover:-translate-y-2">
              <div className=" flex items-center mb-6">
                <div className="text-black  rounded-lg p-3 mr-4">
                  <span className="text-2xl font-bold">01</span>
                </div>
                <FaRegCheckCircle className="text-black text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Requirement Analysis</h3>
              <p className="text-blue-900">
                We begin by analyzing project requirements and defining the testing scope to ensure 
                the software meets all specifications.
              </p>
            </div>

            {/* Step 2 */}
            <div className=" border border-blue-700 rounded-2xl p-8 transform transition-all hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="text-black  rounded-lg p-3 mr-4">
                  <span className="text-2xl font-bold">02</span>
                </div>
                <FaClipboardList className="text-black  text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-black  mb-4">Test Planning</h3>
              <p className="text-blue-900">
                We develop detailed test plans, outlining strategies, tools, and timelines to ensure 
                thorough test coverage.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border border-blue-700 rounded-2xl p-8 transform transition-all hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="text-black  rounded-lg p-3 mr-4">
                  <span className="text-2xl font-bold">03</span>
                </div>
                <FaPlayCircle className="text-black 0 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Test Execution</h3>
              <p className="text-blue-900">
                Our expert QA team conducts manual and automated testing to identify bugs, ensure 
                functionality, and verify performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testing Services Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-800 font-medium">Comprehensive Testing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Largest Testing Spectrum
            </h2>
            <p className="text-xl text-gray-600">
              Quality assurance ensures consistent functionality across browsers, operating systems, 
              and devices. We offer a holistic suite of testing services tailored to diverse software needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <MdSpeed className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Testing</h3>
              <p className="text-gray-600">
                Ensuring that systems operate efficiently, even under load.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <MdBuild className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regression Testing</h3>
              <p className="text-gray-600">
                Making certain that new code changes don't disrupt existing functionalities.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <MdPhoneIphone className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compatibility Testing</h3>
              <p className="text-gray-600">
                Validating consistent operation across browsers, devices, and operating systems.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <MdCheckCircle className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UI Testing</h3>
              <p className="text-gray-600">
                Evaluating interfaces for intuitiveness, responsiveness, and user satisfaction.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <MdInsertDriveFile className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">User Acceptance Testing (UAT)</h3>
              <p className="text-gray-600">
                Collaborating with end-users to ensure alignment with expectations and requirements.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                <MdSecurity className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Domain Testing</h3>
              <p className="text-gray-600">
                Targeting specific application areas to ensure all paths are clear of potential pitfalls.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-800 font-medium">Why It Matters</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Significance of Quality Assurance
            </h2>
            <p className="text-xl text-gray-600">
              Even for seasoned engineers, external validation remains essential. A separate party is 
              crucial to rigorously examine every detail, ensuring nothing is overlooked.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaCogs className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Improve Product Quality</h3>
              <p className="text-gray-600">
                Ensure end users won't discover embarrassing errors in your software.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaCheckCircle className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lower Overall QA Costs</h3>
              <p className="text-gray-600">
                Investing in QA drastically reduces development and maintenance costs.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaCalendarCheck className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wider Test Coverage</h3>
              <p className="text-gray-600">
                Strategic combination of automated and manual tests ensures comprehensive coverage.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaRegClock className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Faster Releases</h3>
              <p className="text-gray-600">
                CI/CD integration increases deployment speed and helps execute large test suites.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaProjectDiagram className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Monitoring</h3>
              <p className="text-gray-600">
                Crucial to have accurate testing as performance can change over time.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaLightbulb className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimize Team Activities</h3>
              <p className="text-gray-600">
                Automated tests decrease manual testing time, freeing your team for other tasks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="py-20 relative overflow-hidden ">
        <div className="absolute inset-0">
          {/* <img 
            src={techBackground} 
            alt="Technology background" 
            className="w-full h-full object-cover opacity-20"
          /> */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-4 py-2  rounded-full mb-4">
              <span className="text-black font-medium">Our Tools</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-blue-900">
              We leverage the latest and most advanced technologies to deliver innovative 
              software solutions that are high-performance, scalable, and future-proof.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Tech 1 */}
            <div className=" backdrop-blur-sm border border-blue-800 rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center mx-auto mb-4">
                <FaCogs className="text-2xl text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-black">Cypress</h3>
              <p className="text-blue-900 text-sm mt-2">
                Modern testing framework for dynamic web applications
              </p>
            </div>

            {/* Tech 2 */}
            <div className="0 backdrop-blur-sm border border-blue-800 rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center mx-auto mb-4">
                <FaRobot className="text-2xl text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-black">Bitrise</h3>
              <p className="text-blue-900 text-sm mt-2">
                Automates integration and delivery for mobile apps
              </p>
            </div>

            {/* Tech 3 */}
            <div className="0 backdrop-blur-sm border border-blue-800 rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center mx-auto mb-4">
                <FaSitemap className="text-2xl text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-black">Protractor</h3>
              <p className="text-blue-900 text-sm mt-2">
                Specialized end-to-end testing for Angular
              </p>
            </div>

            {/* Tech 4 */}
            <div className="0 backdrop-blur-sm border border-blue-800 rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center mx-auto mb-4">
                <FaRegPlayCircle className="text-2xl text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-black">Selenium</h3>
              <p className="text-blue-900 text-sm mt-2">
                Open-source tool for automating web browsers
              </p>
            </div>

            {/* Tech 5 */}
            <div className="0 backdrop-blur-sm border border-blue-800 rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center mx-auto mb-4">
                <FaLink className="text-2xl text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-black">BrowserStack</h3>
              <p className="text-blue-900 text-sm mt-2">
                Cloud-based cross-browser and device testing
              </p>
            </div>

            {/* Tech 6 */}
            <div className="0 backdrop-blur-sm border border-blue-800 rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center mx-auto mb-4">
                <FaReact className="text-2xl text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-black">React Testing Library</h3>
              <p className="text-blue-900 text-sm mt-2">
                User interaction-focused UI testing for React
              </p>
            </div>

            {/* Tech 7 */}
            <div className="0 backdrop-blur-sm border border-blue-800 rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center mx-auto mb-4">
                <FaFileAlt className="text-2xl text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-black">Jest</h3>
              <p className="text-blue-900 text-sm mt-2">
                Swift JavaScript testing framework for unit tests
              </p>
            </div>

            {/* Tech 8 */}
            <div className="0 backdrop-blur-sm border border-blue-800 rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center mx-auto mb-4">
                <FaGitAlt className="text-2xl text-blue-300" />
              </div>
              <h3 className="text-xl font-bold text-black">TestRail</h3>
              <p className="text-blue-900 text-sm mt-2">
                Collaborative test management tool for teams
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-700 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Ready to Ensure Software Excellence?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our expert QA teams use the latest tools and techniques to ensure your software is 
              thoroughly tested, meets high-quality standards, and exceeds user expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={"/contactsection"} 
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-medium transition hover:bg-blue-50 flex items-center justify-center"
              >
                Get Started <FaArrowRight className="ml-2" />
              </Link>
              <Link 
                to={"/services"} 
                className="bg-transparent border-2 border-white text-black px-8 py-4 rounded-lg font-medium transition hover:bg-white/10 flex items-center justify-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareQuality;