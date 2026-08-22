import React from "react";
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaEdit,
  FaUsers,
  FaLaptop,
  FaCogs,
  FaCommentDots,
  FaGamepad,
  FaPuzzlePiece,
  FaRobot,
  FaApple,
  FaAndroid,
  FaWindows,
  FaMobileAlt,
  FaCloud,
  FaVideo,
  FaLightbulb,
  FaChartLine,
  FaShieldAlt,
  FaHandshake
} from "react-icons/fa";

import { Link } from "react-router-dom";
import CourseImage from "/course.jpg"; // replace with your actual image path
import TrainingImage from "/training.jpg";
import SelfPacedImage from "/self-paced.jpg";
const ELearning = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative  text-black-900">
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              E-Learning & Education
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              At our company, we are committed to fostering a culture of
              continuous learning. We understand that staying updated with the
              latest technologies is key to personal and professional growth.
              That’s why we provide our employees with access to high-quality
              e-learning courses, resources, and training programs that ensure
              they are always at the cutting edge.
            </p>
            <Link
              to={"/contactsection"}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 transform hover:-translate-y-1"
            >
              Start Your Project →
            </Link>
          </div>
        </div>
      </div>

      {/* LMS Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Scalable Learning Management System (LMS) Development
            </h2>
            <p className="text-lg text-gray-700">
              Our industry-experienced e-learning software developers create{" "}
              <span className="text-blue-600 font-semibold">
                custom LMS software solutions
              </span>{" "}
              to manage, track, and achieve your corporate learning goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
                <img
                  src="/E-learning1.png"
                  alt="LMS Development"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                LMS Software Development
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaCommentDots className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      Custom Communication Interfaces
                    </h4>
                    <p className="text-gray-600">
                      We program and interface blended learning applications
                      with features for social learning, messaging, multimedia,{" "}
                      <span className="text-blue-600 font-medium">
                        web & video conferencing
                      </span>
                      , streaming, recording, VoIP, and more.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaGamepad className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      Custom Gamified Environments
                    </h4>
                    <p className="text-gray-600">
                      We create e-learning solutions with added gamification
                      features to bring courses alive, built with 2D and 3D
                      graphics for a more immersive, fun-filled, and engaging
                      learning experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPuzzlePiece className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      Custom Plugins & Extensions
                    </h4>
                    <p className="text-gray-600">
                      We extend your LMS with custom activity modules, themes,
                      course formats, enrollment & authentication, filters,
                      document repositories, and many other plugins and
                      extensions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaRobot className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      Custom AI-Powered LMS
                    </h4>
                    <p className="text-gray-600">
                      Modifying learning through the latest algorithms,
                      personalized features, inherent interface, and consistent
                      user experience for an exceptional educational drive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 mb-8">
              We provide custom integrations with industry-leading LMS solutions
              for added functionality, flexibility, and usability.
            </p>
            <div className="flex justify-center space-x-8 text-blue-600">
              <div className="bg-blue-100 p-4 rounded-full">
                <FaApple className="text-3xl" />
              </div>
              <div className="bg-blue-100 p-4 rounded-full">
                <FaAndroid className="text-3xl" />
              </div>
              <div className="bg-blue-100 p-4 rounded-full">
                <FaWindows className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Services */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Personalized eLearning Software Development Services
            </h2>
            <p className="text-lg text-gray-700">
              Chetu's custom e-learning software developers create solutions that
              enable higher education establishments, colleges/universities,
              primary schools, trade schools, high schools, enterprise-level
              corporations, and SMBs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 transform transition duration-500 hover:scale-105">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FaGraduationCap className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Learning Management Systems
                  </h3>
                  <p className="text-gray-600">
                    Build and implement powerful LMS platforms tailored to your
                    needs for better management of learning content.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 transform transition duration-500 hover:scale-105">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Student Information Systems
                  </h3>
                  <p className="text-gray-600">
                    Manage student data effectively with custom-built student
                    information systems that streamline administrative
                    processes.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 transform transition duration-500 hover:scale-105">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FaLaptop className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Web-Based Training
                  </h3>
                  <p className="text-gray-600">
                    Create engaging and interactive web-based training modules
                    for online education.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 transform transition duration-500 hover:scale-105">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <FaEdit className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Content Authoring
                  </h3>
                  <p className="text-gray-600">
                    Develop custom content authoring tools to create, manage,
                    and distribute educational materials effectively.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
                <img
                  src="/E-learning2.png"
                  alt="eLearning Platforms"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Services */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              E-Learning Software Support Services
            </h2>
            <p className="text-lg text-gray-700">
              Our support services team provides responsive around-the-clock
              eLearning software support. We troubleshoot issues and carefully
              monitor the performance of all e-learning resources to eliminate
              latency and costly workflow interruption and ensure high-performing
              education materials that are SCORM compliant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition duration-500 hover:-translate-y-2">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Virtual Classroom Platform Assistance
              </h3>
              <p className="text-gray-600">
                Chetu designs and customizes virtual classroom platforms to
                facilitate seamless instruction, maximum course content
                comprehension, and intuitive dashboards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition duration-500 hover:-translate-y-2">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaChalkboardTeacher className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Student Management Software Support
              </h3>
              <p className="text-gray-600">
                Chetu’s software specialists enhance e-classroom resources for
                student management, providing insights into performance,
                patterns, and anomalies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition duration-500 hover:-translate-y-2">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaMobileAlt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Mobile Learning App Assistance
              </h3>
              <p className="text-gray-600">
                Chetu’s developers design custom mobile learning apps to create
                new access points to education, providing smooth transitions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition duration-500 hover:-translate-y-2">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaCloud className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Cloud-Based eLearning Support
              </h3>
              <p className="text-gray-600">
                Cloud-based resources enable collaborative workflow, reduced
                expenses, and secure data access across multiple devices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition duration-500 hover:-translate-y-2">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaVideo className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Video Conferencing Integration Assistance
              </h3>
              <p className="text-gray-600">
                Chetu integrates video conferencing capabilities for
                instructors, providing tools to eliminate lag time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition duration-500 hover:-translate-y-2">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <FaCogs className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                LMS Customization Services
              </h3>
              <p className="text-gray-600">
                Learning Management Systems allow for independent, self-guided
                learning with customized courses tailored to individual needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Solutions */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Custom AI-Powered eLearning Solutions
            </h2>
            <p className="text-lg text-gray-700">
              With eLearning representing an interesting facet of modern
              education, Artificial Intelligence represents a revolutionary path
              to make the learning experience more engaging and fruitful for
              learners!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-xl shadow-xl transform transition duration-500 hover:-translate-y-2">
              <div className="">
                <FaLightbulb className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">
                A Tailored AI-Powered eLearning Approach
              </h3>
              <p>
                Revolutionize learning with intelligent systems that adapt to
                specific learning styles, explore data, and identify patterns.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-xl shadow-xl transform transition duration-500 hover:-translate-y-2">
              <div className="">
                <FaChartLine className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">
                Seamless Implementation
              </h3>
              <p>
                Integrate AI automation into your eLearning platform to
                streamline content creation, repetitive tasks, and assessments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-xl shadow-xl transform transition duration-500 hover:-translate-y-2">
              <div className="">
                <FaShieldAlt className="text-2xl " />
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">
                Natural Language Processing (NLP) for eLearning
              </h3>
              <p>
                Unlock eLearning’s potential with AI-driven NLP solutions for
                personalized and engaging educational experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Services */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
              Course, Training, and Learning Services
            </h2>
            <p className="text-lg text-gray-700">
              We offer a comprehensive suite of learning solutions designed to
              empower your team with the latest skills and knowledge.
            </p>
          </div>

       <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition duration-500 hover:-translate-y-2">
        <div className="mb-6">
          <div className="bg-blue-100 h-48 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
            <img src={CourseImage} alt="Comprehensive Courses" className="object-cover h-full w-full rounded-xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Comprehensive Courses</h3>
          <p className="text-gray-600 mb-4">
            We provide a wide range of courses across various fields to help our employees enhance their skills and knowledge.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Programming and Web Development</li>
            <li>Data Science and Machine Learning</li>
            <li>Digital Marketing and SEO</li>
          </ul>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition duration-500 hover:-translate-y-2">
        <div className="mb-6">
          <div className="bg-blue-100 h-48 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
            <img src={TrainingImage} alt="Training Programs" className="object-cover h-full w-full rounded-xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Training Programs</h3>
          <p className="text-gray-600 mb-4">
            We offer live training sessions and workshops conducted by industry experts.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Live coding boot camps</li>
            <li>Technology and leadership webinars</li>
            <li>Soft skills development programs</li>
          </ul>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 transform transition duration-500 hover:-translate-y-2">
        <div className="mb-6">
          <div className="bg-blue-100 h-48 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
            <img src={SelfPacedImage} alt="Self-Paced Learning" className="object-cover h-full w-full rounded-xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Self-Paced Learning</h3>
          <p className="text-gray-600 mb-4">
            We offer flexible learning options for employees who prefer to learn at their own pace.
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Video tutorials and courses</li>
            <li>Access to eBooks and online reading materials</li>
            <li>Self-assessment quizzes and certifications</li>
          </ul>
        </div>
      </div>
    </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-black">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Empowering Your Learning Journey
            </h3>
            <p className="text-lg mb-8 leading-relaxed">
              At our company, we believe in empowering our employees with the
              knowledge and skills needed to excel in their careers. Through our
              e-learning and education programs, we provide them with the
              resources they need to stay ahead in today’s fast-paced digital
              world.
            </p>
            <Link
              to={"/contact"}
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-md transition duration-300 transform hover:scale-105"
            >
              Transform Your Learning Experience
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-10 text-center text-white max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Learning Experience?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Partner with us for high-quality e-learning courses and training
              programs. We provide the resources to help you stay ahead in the
              competitive business world.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to={"/contactsection"}
                className="bg-white text-blue-900 font-bold py-3 px-8 rounded-md transition duration-300 hover:bg-gray-100"
              >
                Contact Us Today
              </Link>
              <Link
                to={"/services"}
                className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-md transition duration-300 hover:bg-white hover:text-blue-900"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ELearning;