import React from 'react';
import HeroImage from '/ptek-logo.png'; // Replace with your actual image path
import FeatureAI from '/ptek-logo.png'; // Replace with AI-related icon
import FeatureBlockchain from '/ptek-logo.png'; // Replace with blockchain icon
import FeatureCloud from '/ptek-logo.png'; // Replace with cloud icon
import ContactImage from '/ISOQuality.png'; // Ensure this path matches public folder or Vite asset handling
import { Link } from "react-router-dom";
import {
  FaBrain as Brain,
  FaHeartPulse as HeartPulse,
  FaStopwatch as Timer,
  FaGamepad as Gamepad,
  FaIndustry as Factory,
  FaDatabase as Database,
  FaDiagramProject as Workflow,
  FaVrCardboard as VirtualReality
} from 'react-icons/fa6'; import { motion } from 'framer-motion';



const Home = () => {
  const services = [
    {
      category: "Consulting",
      items: [
        {
          title: "Custom Software Development",
          desc: "Web and mobile custom software development tailored to your business.",
          img: "/download.png",
        },
        {
          title: "Digital Transformation",
          desc: "Digital transformation is a set of tools that takes your company from today to the future.",
          img: "/download (8).png",
        },
        {
          title: "Development Team Augmentation",
          desc: "Hire a dedicated Agile team that will work with your in-house developers.",
          img: "/download (2).png",
        },
        {
          title: "Presales & Bidding",
          desc: "Finding tenders in the EU, creating consortiums, and applying together.",
          img: "/download (3).png",
        },
      ],
    },
    {
      category: "Development",
      items: [
        {
          title: "Web SaaS Platform Development",
          desc: "Building scalable web SaaS platforms with cutting-edge technology.",
          img: "/download (2) copy.png",
        },
        {
          title: "Android & iOS Development",
          desc: "Empower your business with expert Android and iOS app development.",
          img: "/download (5).png",
        },
        {
          title: "UI/UX Design",
          desc: "Improve your digital product with a beautiful and easy-to-use interface.",
          img: "/download (6).png",
        },
        {
          title: "Software Quality Assurance",
          desc: "Bug-free software, ensured through manual and automated testing by expert QA teams.",
          img: "/download (7).png",
        },
      ],
    },
    {
      category: "Innovation",
      items: [
        {
          title: "VR/AR/MR Development",
          desc: "Software solutions for VR, AR, and MR across platforms, reshaping interaction and learning.",
          img: "/download (8).png",
        },
        {
          title: "NFT & Blockchain Development",
          desc: "Blockchain and NFTs create massive opportunities.",
          img: "/download.png",
        },
        {
          title: "Artificial Intelligence",
          desc: "Upgrade your products, accelerate analysis, and keep your competitive edge with AI.",
          img: "/download (6).png",
        },
        {
          title: "Gamification",
          desc: "Crafting captivating gaming experiences with passion, precision, and artistry.",
          img: "/download (7).png",
        },
      ],
    },
  ];
  const caseStudies = [
    {
      title: "Roundrush",
      subtitle: "The VR future of workflow management",
      tags: ["SaaS", "Workflow Management", "Virtual Reality"],
      videoUrl: "/VR-RoundRush-home.mp4"
    },
    {
      title: "Diognostic",
      subtitle: "The first SaaS platform for neuroscience",
      tags: ["SaaS", "Neuroscience", "Big Data"],
      videoUrl: "/WEBheroservices.mp4"
    },
    {
      title: "Gaming",
      subtitle: "Revolutionizing insurance with an engaging app",
      tags: ["Blockchain", "Game", "Healthcare", "Sustainability", "Insurance", "Engagement"],
      videoUrl: "/MOBILEhero.mp4"
    },
    {
      title: "FALL",
      subtitle: "Carlo FALL",
      tags: ["Game", "Engagement", "Entertainment"],
      videoUrl: "/VR-hero.mp4"
    }
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-2 px-6 text-center relative overflow-hidden bg-white">
        {/* Background Infinity-Like Decoration */}
        <div className="absolute inset-0 flex justify-center items-center opacity-10 pointer-events-none z-0">
          <video
            src="/WEBhero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>


        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Powering Innovation with PTEK
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            At <strong>PTEK</strong>, we specialize in building future-ready digital solutions.
            Our team of expert full-stack developers, UI/UX designers, and product strategists
            collaborate to deliver scalable web, mobile, XR/VR, and AI-driven applications. <br />
            Trusted by global partners, we embrace Agile methodologies to drive high-quality software development at speed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link
    to="/contactsection"
    className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition text-center"
  >
    Work with PTEK
  </Link>
  <Link
    to="/Recruit-Training"
    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition text-center"
  >
    See Our Projects
  </Link>
</div>
        </div>

      </section>


      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Core Industry Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing sectors experiencing high-quality, innovative work with tangible results.
            </p>
          </div>

          {/* Grid */}
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all flex flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Healthcare & Medtech
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Accelerating analysis and model training in oncology, diabetology, and neuroscience through artificial intelligence, cloud-based platforms, and intuitive user interfaces tailored for clinical and research workflows.
              </p>
              <a href="#" className="text-sm text-blue-600 font-medium hover:underline mb-4">
                Discover more →
              </a>
              <img
                src="/Neuroscience-v6.png"
                alt="Healthcare & Medtech"
                className="w-full h-44 object-contain mt-auto"
              />
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all flex flex-col h-full">
              {/* Image at the top */}
              <div className="flex justify-center mb-4">
                <img
                  src="/Research-Innovation-v5.png"
                  alt="Research & Innovation"
                  className="w-44 h-44 object-contain"
                />
              </div>

              {/* Content below image */}
              <div className="flex flex-col justify-between flex-1 text-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Research & Innovation
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Focusing on cutting-edge AI technologies like green AI, quantum computing, cybersecurity, knowledge representation and reasoning (KRR), large language models (LLM), and generative AI.
                  </p>
                </div>
                <a href="#" className="text-sm text-blue-600 font-medium hover:underline">
                  View our AI case studies →
                </a>
              </div>
            </div>


            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all flex flex-col h-full">
              <img
                src="/FintechV6.png"
                alt="Finance, Banking & Insurance"
                className="w-full h-44 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Finance, Banking & Insurance
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Banking and financial services, compliance, underwriting, and risk analysis. Innovating with cutting-edge solutions such as gamification, carbon offsets, and AI.
              </p>
              <a href="#" className="text-sm text-blue-600 font-medium hover:underline mt-auto">
                Discover more →
              </a>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all flex flex-col h-full">
              <img
                src="/Innovationv8.png"
                alt="Extended & Virtual Reality"
                className="w-full h-44 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Extended & Virtual Reality, Digital Twins
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Specializing in extended & virtual reality, augmented reality and digital twins. Creating immersive experiences that improve training, design, and efficiency.
              </p>
              <a href="#" className="text-sm text-blue-600 font-medium hover:underline mt-auto">
                View our VR case studies →
              </a>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all flex flex-col h-full">
              <img
                src="/Presales-Bidding-Home.png"
                alt="Presales & Tenders"
                className="w-full h-44 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Presales & Tenders
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Finding public and private tenders in the EU, including research projects and Horizon initiatives. Creating consortiums and applying together.
              </p>
              <a href="#" className="text-sm text-blue-600 font-medium hover:underline mt-auto">
                Discover more →
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Services</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Adding value to every kind of company, from small start-ups to large enterprises.
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              See all services &rarr;
            </a>
          </div>

          {/* Services */}
          {services.map((section, i) => (
            <div key={i} className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{section.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {section.items.map((item, j) => (
                  <div
                    key={j}
                    className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[120px] object-contain mb-4"
                    />
                    <h4 className="text-md font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-50 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore. Inquire. Begin.
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Inquire about building quality products.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            Explore options. Begin a lasting partnership.
          </p>
         
<Link to="/contactsection">
  <button className="bg-blue-600 text-white font-medium text-lg px-6 py-3 rounded-md hover:bg-blue-700 transition">
    Contact us
  </button>
</Link>
        </div>

        {/* Right image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ContactImage}
            alt="Illustration"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>

      *
      {/* Stats Section */}
      <section className="py-16 px-6 relative bg-white overflow-hidden">
        {/* Background pattern grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-20 z-0 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              By The Numbers
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Our achievements speak to our commitment to excellence and innovation.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Single Stat */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300 text-center">
              <h2 className="text-5xl font-extrabold text-blue-700 mb-2">150+</h2>
              <p className="text-gray-600 text-lg font-medium">Projects Delivered</p>
              <div className="mt-4 h-1 w-3/4 mx-auto bg-gradient-to-r from-blue-300 to-blue-500 rounded-full" />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300 text-center">
              <h2 className="text-5xl font-extrabold text-blue-700 mb-2">98%</h2>
              <p className="text-gray-600 text-lg font-medium">Client Satisfaction</p>
              <div className="mt-4 h-1 w-3/4 mx-auto bg-gradient-to-r from-blue-300 to-blue-500 rounded-full" />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300 text-center">
              <h2 className="text-5xl font-extrabold text-blue-700 mb-2">20+</h2>
              <p className="text-gray-600 text-lg font-medium">Industries Served</p>
              <div className="mt-4 h-1 w-3/4 mx-auto bg-gradient-to-r from-blue-300 to-blue-500 rounded-full" />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300 text-center">
              <h2 className="text-5xl font-extrabold text-blue-700 mb-2">24/7</h2>
              <p className="text-gray-600 text-lg font-medium">Support Availability</p>
              <div className="mt-4 h-1 w-3/4 mx-auto bg-gradient-to-r from-blue-300 to-blue-500 rounded-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase mb-2">About Us</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Giving partners a fresh start.
            </h2>
            <p className="text-gray-700 mb-4">
              Many companies try budget providers first, only to realize the true cost of doing so.
              Missed deadlines. Low-quality work. Poor communication.
            </p>
            <p className="text-gray-700 mb-4">
              Partners with bad past experiences with development teams are understandably hesitant. Still, we specialize in bringing ailing projects back to life.
            </p>
            <p className="text-gray-700 mb-6">
              PTEK is an international, award-winning software development company. Quality meets sustainability and innovation here.
            </p>
            <a
              href="#"
              className="text-blue-600 font-semibold hover:underline inline-flex items-center"
            >
              Learn more about us →
            </a>
          </div>

          {/* Right Section (Top Row - 2 Images) */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/LD-partner-NEUM-min.png"
              alt="Podcast"
              className="w-full h-full object-cover rounded-xl"
            />
            <img
              src="/download (4).jpeg"
              alt="Meeting"
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Middle Section - Full Width VR Image */}
            <img
              src="/ar.jpg"
              alt="VR Team"
              className="col-span-2 w-full h-full object-cover rounded-xl"
            />

            {/* Bottom Left - UAE Partner */}
            <div className="flex flex-col">
              <img
                src="/female-hand-with-pencil-writing-on-notebook-woman-hand-with-pencil-writing-on-notebook-at-coffee-shop-photo.jpg"
                alt="UAE Partner"
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              {/* <h3 className="text-sm font-semibold text-gray-900">
                Official Partner of Al Maktoum Royal Family
              </h3> */}            </div>

            {/* Bottom Right - NEOM Tech Supplier */}
            <div className="flex flex-col">
              <img
                src="/home-aboutus02-min (1).png"
                alt="Tech Supplier"
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
             
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CASE STUDIES</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Working across industries</h3>
            <p className="text-gray-600 mb-6">
              Delivering tailored software solutions across industries, from gaming to manufacturing.
            </p>
          </div>
          <div className="self-start">
            <a href="#" className="flex items-center text-blue-600 font-medium hover:underline">
              View all case studies
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {/* Video Preview */}
              <div className="h-48 overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  src={study.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{study.title}</h4>
                <p className="text-gray-600 mb-4">{study.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>.


      {/* CTA Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Get in touch
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Your project is unique. So is the right approach. Reach out today, and share your requirements. Let us envision and develop a path towards mutual success.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;