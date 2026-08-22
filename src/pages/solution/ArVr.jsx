
import React from "react";
import { FaVrCardboard, FaGlobe, FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaCubes,
  FaShoppingCart,
  FaBullhorn,
  FaHeartbeat,
  FaChartPie,
  FaMobileAlt,
  FaEye
} from "react-icons/fa";
import vrand from "/VrandAr.jpg"
import ar from "/ar.jpg"
import arvr1 from "/arvr1.webp"
import arvr2 from "/arvr2.webp"
import arvr3 from "/arvr3.webp"
import arvr4 from "/arvr4.webp"

const ArVrHero = () => {
  return (
    <div className="min-h-screen w-full ">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                AR/VR Solutions
              </span>{' '}
              for Immersive Experiences
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              Transform the way your business interacts with customers and employees using
              cutting-edge Augmented Reality (AR) and Virtual Reality (VR) solutions. We deliver
              immersive experiences that enhance engagement, training, and decision-making.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="/contactsection"
                className="bg-black hover:bg-indigo-800 text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Project →
              </a>
            </div>
          </div>

          {/* Right side - AR/VR showcase */}
          <div className="w-full lg:w-1/2 flex justify-center">
  <div className="relative w-full max-w-2xl aspect-square rounded-xl overflow-hidden">
    <video
      preload="none"
      poster="https://www.Ptek.com/wp-content/uploads/2024/06/UIUX-layer00-00.png"
      muted
      autoPlay
      loop
      playsInline
      webkit-playsinline="true"
      x5-playsinline="true"
      data-cmp-info="10"
      className="w-full h-full object-cover"
    >
      <source src="https://www.Ptek.com/wp-content/uploads/2024/06/UIUXslow_comp.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};


const VrSolutions = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="text-center py-10 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">
          Hire Experienced XR / Virtual Reality (VR) Developers
        </h1>
        <p className="text-lg mb-6">
          Our VR software engineers are highly experienced in VR software development,
          engineering new VR software solutions from scratch and modifying existing
          solutions to create a custom-tailored approach.
        </p>
      </section>

      {/* Cards Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">

          {/* VR Games */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaVrCardboard />
            </div>
            <h3 className="text-xl font-bold mb-2">VR Games</h3>
            <p className="text-gray-600">
              With Chetu’s high-definition rendering pipeline, rapid iteration capabilities,
              authoring tools, adaptive systems, and industry-leading XR development
              experience, we engineer a highly immersive VR game development experience.
            </p>
          </div>

          {/* 3D Tourism */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaGlobe />
            </div>
            <h3 className="text-xl font-bold mb-2">3D Tourism</h3>
            <p className="text-gray-600">
              We develop VR-enabled 360-degree tours designed to showcase locations in full view
              and virtual maps connected to interactive 3D maps, along with CMS integrations for
              fast and convenient content updates.
            </p>
          </div>

          {/* Corporate Training */}
          <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
            <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
              <FaChalkboardTeacher />
            </div>
            <h3 className="text-xl font-bold mb-2">Corporate Training</h3>
            <p className="text-gray-600">
              We customize simulation-based employee training software to help companies achieve
              organizational and instructional objectives for overcoming workplace challenges in
              a safe, immersive learning environment.
            </p>
          </div>

        </div>

        {/* Image on the Right */}
        <div className="flex justify-center lg:w-1/2">
          <img
            src={vrand}
            alt="VR / AR Solutions"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};



const ArSolutions = () => {
  const solutions = [
    {
      icon: <FaCubes />,
      title: "Mixed Reality (MR) Software Development",
      description:
        "We provide full-cycle MR software solutions involving 3D modeling, rendering, texturing, content development, and system integration to build spatially aware, cloud-based, and cross-platform MR applications."
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce",
      description:
        "We develop AR software solutions for the e-commerce industry, enabling shoppers to experience products in 3D within their real environment to make decisions confidently."
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing & Advertising",
      description:
        "We develop highly interactive and immersive XR experiences that add excitement to marketing campaigns, product launch advertisements, corporate events, social media campaigns, and more."
    },
    {
      icon: <FaHeartbeat />,
      title: "Industrial & Medical",
      description:
        "We engineer AR software solutions designed to boost efficiency and minimize errors for medical professionals and industrial technicians during complex processes and high-pressure procedures."
    },
    {
      icon: <FaChartPie />,
      title: "3D Data Visualization Platforms",
      description:
        "We design 3D data visualization platforms to provide a clearer understanding of large data sets at a glance, allowing users to uncover distinct data trends and patterns."
    },
    {
      icon: <FaMobileAlt />,
      title: "Internet of Things (IoT) Integration",
      description:
        "We enable your existing virtual, augmented, and mixed reality headsets & hardware solutions to communicate with sensors, controllers, cameras, and other IoT connected devices through seamless integration."
    },
    {
      icon: <FaEye />,
      title: "Computer Vision Software",
      description:
        "We integrate computer vision software with image analysis, facial & emotion recognition, biometrics, intelligent agents and medical image analysis for optimized workflow automation, bolstered security, and data analysis acceleration."
    }
  ];

  return (
    <div>
      <section className="text-center py-10 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">
          Hire Experienced XR / Augmented Reality (AR) Developers
        </h1>
        <p className="text-lg mb-6">
          Our augmented reality software experts engineer new AR software solutions from the ground up or revamp your current solution with custom integrations to generate the ultimate immersive & cinematic experience.
        </p>
      </section>

      <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{sol.title}</h3>
              <p className="text-gray-600">{sol.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img
            src={ar}
            alt="Augmented Reality Solutions"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};


const ARVRSolutions = () => {
  const services = [
    {
      title: "Augmented Reality (AR)",
      image: arvr1,
      alt: "Augmented Reality (AR)",
      description:
        "Enhance real-world environments with digital overlays. From product visualization to interactive AR apps, we bring innovative AR solutions to life.",
    },
    {
      title: "Virtual Reality (VR)",
      image: arvr2,
      alt: "Virtual Reality (VR)",
      description:
        "Create fully immersive virtual environments for training, gaming, and simulation. Engage users with high-quality VR experiences tailored to your needs.",
    },
    {
      title: "Mixed Reality (MR)",
      image: arvr3,
      alt: "Mixed Reality (MR)",
      description:
        "Combine the real and virtual worlds with mixed reality solutions. Enable users to interact with digital objects in physical spaces seamlessly.",
    },
    {
      title: "AR/VR App Development",
      image: arvr4,
      alt: "AR/VR App Development",
      description:
        "Develop custom AR/VR applications for mobile, web, and wearable devices. Enhance user engagement with tailored interactive solutions.",
    },
  ];

  const benefits = [
    "Innovative Designs: Leverage state-of-the-art AR/VR technology to deliver unmatched immersive experiences.",
    "Custom Solutions: Tailored AR/VR applications to meet your specific industry needs.",
    "Cross-Platform Development: Create solutions compatible with mobile, desktop, and wearable devices.",
    "Proven Expertise: Trusted by businesses across sectors for delivering impactful AR/VR solutions.",
  ];

  return (
    <div className="max-w-7xl mx-auto py-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg text-center"
          >
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              {service.title}
            </h2>
            <p className="text-black text-sm sm:text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-4">
          Why Choose Our AR/VR Solutions?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-black">
          {benefits.map((item, index) => (
            <li key={index}>
              <strong>{item.split(":")[0]}:</strong>
              {item.split(":")[1]}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 text-center">
        <a
          href="/contactsection"
          className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
        >
          Contact Us for AR/VR Solutions
        </a>
      </div>
    </div>
  );
};



const ArVr = () => {
  return (
    <>
      <ArVrHero/>
      <VrSolutions/>
      <ArSolutions/>
      <ARVRSolutions/>
    </>
  )
}

export default ArVr
