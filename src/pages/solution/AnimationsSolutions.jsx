import React from "react";
import {
  FaBullhorn,
  FaPlayCircle,
  FaCube,
  FaGamepad,
  FaMobileAlt,
  FaVrCardboard,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaRegPlayCircle,
  FaProjectDiagram,
  FaMagic,
  FaLaptopCode,
} from "react-icons/fa";
import { MdMotionPhotosOn } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import animation from "/Animation.jpg";
import graphic from "/GraphicDesign.jpg";
import an1 from "/animation1.webp";
import an2 from "/animation2.webp";
import an3 from "/animation3.webp";
import an4 from "/animation4.avif";

const ASFirst = () => {
  return (
    <div className="max-w-7xl mx-auto py-6">
      {/* Animation Section */}
      <div className="min-h-screen w-full ">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between pt-12 md:pt-24 gap-12">
            {/* Left side - Text content */}
            <div className="w-full lg:w-1/2 space-y-8">
              <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Animation Solutions for{" "}
                <span className="text-blue-600">Visual Excellence</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Bring your ideas to life with our cutting-edge animation
                solutions. From 2D and 3D animations to motion graphics and
                visual effects, we create immersive experiences that captivate
                audiences and deliver powerful messages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="/contactsection"
                  className="bg-black hover:bg-blue-800 text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Start Your Project →
                </a>
              </div>
            </div>

            {/* Right side - Animation showcase */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-2xl  overflow-hidden ">
                {/* Replace with your animation/video component or image */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="https://Ptek.com/wp-content/uploads/2023/07/mobile-New-2-0-00-00-00-min.png"
                  preload="none"
                  className="w-full h-full object-cover"
                  webkit-playsinline="true"
                  x5-playsinline="true"
                  data-cmp-info="10"
                >
                  <source
                    src="https://Ptek.com/wp-content/uploads/2023/07/MOBILEhero.mp4"
                    type="video/mp4"
                  />
                  {/* Fallback image for browsers that don't support video */}
                  <img
                    src="/your-animation-showcase.jpg"
                    alt="Animation Showcase"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="text-center py-10 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">
          Custom Graphic Design Solutions
        </h1>
        <p className="text-lg mb-6">
          Chetu offers Custom Graphic Design Solutions to create custom logos,
          personalized email marketing campaigns, digital brochures, social
          media graphics, videos, and other one-of-a-kind digital marketing
          materials.
        </p>
      </section>
    </div>
  );
};

const ASGraphic = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {/* Product Promotions */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
          <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
            <FaBullhorn />
          </div>
          <h3 className="text-xl font-bold mb-2">Product Promotions</h3>
          <p className="text-gray-600">
            We design product promotion videos to achieve shorter conversion
            timelines, highlighting functionalities, integrations, and critical
            features for enhanced branding.
          </p>
        </div>

        {/* Animated Web Demos */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
          <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
            <FaPlayCircle />
          </div>
          <h3 className="text-xl font-bold mb-2">Animated Web Demos</h3>
          <p className="text-gray-600">
            We design animated web demos for businesses to provide the perfect
            medium for showcasing step-by-step processes on multiple digital
            channels.
          </p>
        </div>

        {/* 3D & Hybrid Videos */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
          <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
            <FaCube />
          </div>
          <h3 className="text-xl font-bold mb-2">3D &amp; Hybrid Videos</h3>
          <p className="text-gray-600">
            We develop professional-grade, high-definition 3D and hybrid videos
            that incorporate live-action video and animation/realism components.
          </p>
        </div>

        {/* Gamification Solutions */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
          <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
            <FaGamepad />
          </div>
          <h3 className="text-xl font-bold mb-2">Gamification Solutions</h3>
          <p className="text-gray-600">
            We apply various methods to gamify an existing application or
            website to better attract, reward, motivate, and connect with
            audiences.
          </p>
        </div>

        {/* Web & Mobile Apps */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
          <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
            <FaMobileAlt />
          </div>
          <h3 className="text-xl font-bold mb-2">
            Web &amp; Mobile Application Solutions
          </h3>
          <p className="text-gray-600">
            Our expert team develops high-quality, responsive, and reliable
            enterprise applications to optimize your business solutions.
          </p>
        </div>

        {/* VR & AR */}
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center">
          <div className="flex items-center justify-center text-blue-500 text-5xl mb-4">
            <FaVrCardboard />
          </div>
          <h3 className="text-xl font-bold mb-2">
            VR &amp; AR Software Solutions
          </h3>
          <p className="text-gray-600">
            We create immersive Augmented Reality (AR) and Virtual Reality (VR)
            solutions to bring your vision to life through stunning interactive
            designs.
          </p>
        </div>
      </div>

      <div className="flex justify-center lg:w-1/2">
        <img
          src={graphic}
          alt="Graphic Design Solutions"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

const WebDesignAnimationSection = () => {
  return (
    <section className="text-center py-10 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">
        Custom Web Design &amp; Animation Solutions
      </h1>
      <p className="text-lg mb-6 max-w-4xl mx-auto px-4">
        We develop, integrate, and customize attention-grabbing 2D and 3D
        animations with CRO in mind, capturing real-time interactions, and
        providing live data analytics to improve user experience and increase
        ROI.
      </p>
      <a
        href="/contact"
        className="px-6 py-3 bg-black text-white font-bold rounded-full inline-block"
      >
        Get Animation Solutions
      </a>
    </section>
  );
};

const AnimationServices = () => {
  const services = [
    {
      icon: <FaRegPlayCircle className="text-blue-500 text-5xl mb-4" />,
      title: "Web Animation",
      desc: "Our skilled designers create vibrant 2D, 3D, and motion graphics to enhance interactivity and engagement.",
    },
    {
      icon: <MdMotionPhotosOn className="text-blue-500 text-5xl mb-4" />,
      title: "Motion Graphics Design",
      desc: "Showcasing products creatively using motion graphics, UX/UI animations, and landing pages.",
    },
    {
      icon: <AiOutlineRise className="text-blue-500 text-5xl mb-4" />,
      title: "CRO Design",
      desc: "Optimizing web design with conversion rate in mind to increase clicks and capture data.",
    },
    {
      icon: <FaLaptopCode className="text-blue-500 text-5xl mb-4" />,
      title: "UX/UI Design",
      desc: "Implementing innovative design solutions like buttons, chatbots, and interactive dashboards.",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
      <div className="grid md:grid-cols-2 gap-8 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center lg:w-1/2">
        <img
          src={animation}
          alt="Augmented Reality or Custom Web Design"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

const AnimationExplain = () => {
  const services = [
    {
      title: "2D and 3D Animation",
      image: an1,
      alt: "2D and 3D Animation",
      description:
        "Create visually stunning 2D and 3D animations that bring characters, products, and ideas to life. Engage your audience with dynamic and high-quality visuals.",
    },
    {
      title: "Motion Graphics",
      image: an2,
      alt: "Motion Graphics",
      description:
        "Enhance your marketing and storytelling efforts with motion graphics. Deliver complex ideas with engaging visuals that resonate with your audience.",
    },
    {
      title: "Visual Effects (VFX)",
      image: an3,
      alt: "Visual Effects (VFX)",
      description:
        "Add breathtaking visual effects to your videos, films, and commercials. From realistic explosions to futuristic scenes, we make your vision a reality.",
    },
    {
      title: "Explainer Videos",
      image: an4,
      alt: "Explainer Videos",
      description:
        "Simplify complex concepts with engaging explainer videos. Communicate your message effectively with animations tailored to your brand and goals.",
    },
  ];

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-48 rounded-md object-cover mb-4"
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
    </div>
  );
};

const WhyChooseAnimation = () => {
  const reasons = [
    "Creative Excellence: Our team of skilled animators delivers high-quality, captivating animations that elevate your brand.",
    "Custom Solutions: Tailored animation services designed to meet your specific business and creative needs.",
    "Advanced Technology: Leverage the latest tools and techniques for stunning visuals and seamless animations.",
    "Proven Expertise: Trusted by businesses across industries for exceptional animation solutions.",
  ];

  return (
    <>
      <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-4">
          Why Choose Our Animation Solutions?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-black text-base">
          {reasons.map((reason, index) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10 text-center">
        <a
          href="/contactsection"
          className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
        >
          Contact Us for Animation Solutions
        </a>
      </div>
    </>
  );
};

const AnimationsSolutions = () => {
  return (
    <>
      <ASFirst />
      <ASGraphic />
      <WebDesignAnimationSection />
      <AnimationServices />
      <AnimationExplain />
      <WhyChooseAnimation />
    </>
  );
};

export default AnimationsSolutions;
