import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPalette, FaMobileAlt, FaLaptopCode, FaUserCheck, FaVectorSquare, FaRegLightbulb } from 'react-icons/fa';
import {
  FaFigma,
  FaSketch,
  FaLayerGroup,
  FaComments,
} from 'react-icons/fa';
const UIDesignServices = () => {
  return (
     <div className="bg-white text-gray-800 font-sans">
          {/* Hero Section (unchanged) */}
          <div className="w-full px-6 lg:px-24 py-28 flex flex-col lg:flex-row items-center justify-between">
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
                        Crafting Experiences
                  </motion.p>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-90">
                 UI/UX Design <br className="hidden md:block" />  That Elevates Brands
              </h1>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We build user-centric, modern and intuitive interfaces that blend usability with visual excellence.
              </p>
              <Link
                to="/"
                className="inline-block mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition shadow-lg hover:shadow-xl"
              >
                Let’s Design Together →
              </Link>
            </motion.div>
    
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 mt-12 lg:mt-0"
            >
              <div className="relative">
                <div className="absolute -inset-4  rounded-2xl transform rotate-3 opacity-30"></div>
                <img
                  src="/ui.jpg"
                  alt="Fraud Protection"
                  className="rounded-xl w-full max-h-96 object-cover relative z-10 border-4 border-white shadow-xl"
                />
              </div>
            </motion.div>
          </div>
  
      {/* Services Section */}
    <div className="pt-18  px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">UI/UX Design Capabilities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end design solutions tailored for web, mobile, and enterprise products that focus on delight and usability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "User Interface Design",
              icon: <FaLaptopCode className="text-blue-600 text-2xl" />,
              desc: "We design clean, modern, and responsive interfaces that offer seamless user interaction across devices."
            },
            {
              title: "User Experience Research",
              icon: <FaUserCheck className="text-blue-600 text-2xl" />,
              desc: "We conduct user research, wireframes, and usability testing to ensure intuitive flows and minimal friction."
            },
            {
              title: "Mobile App UI",
              icon: <FaMobileAlt className="text-blue-600 text-2xl" />,
              desc: "Pixel-perfect mobile UI design for iOS & Android that aligns with platform-specific guidelines."
            },
            {
              title: "Wireframing & Prototyping",
              icon: <FaVectorSquare className="text-blue-600 text-2xl" />,
              desc: "We create low/high-fidelity wireframes and clickable prototypes using Figma, XD, and Sketch."
            },
            {
              title: "Design Systems",
              icon: <FaPalette className="text-blue-600 text-2xl" />,
              desc: "We build scalable, reusable component libraries and atomic design systems to speed up product delivery."
            },
            {
              title: "Creative Direction",
              icon: <FaRegLightbulb className="text-blue-600 text-2xl" />,
              desc: "Visual storytelling, branding, and design strategy support to align with your business goals."
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-left hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
  {/* Why UI/UX Matters */}
      <section className="  px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why UI/UX Matters</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            A great user experience is the cornerstone of a successful product. It boosts engagement, builds trust, and drives conversions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { icon: <FaLaptopCode />, title: 'First Impressions Count', desc: 'Users decide in seconds if they trust your product. Good design makes that easy.' },
              { icon: <FaUserCheck />, title: 'Boost Conversions', desc: 'Clear UX design guides users to take action—sign up, buy, or explore more.' },
              { icon: <FaComments />, title: 'Reduce Support Costs', desc: 'Well-designed products reduce confusion, support requests, and bounce rates.' },
            ].map(({ icon, title, desc }, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-sm transition">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 text-xl">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
         {/* Design Services */}
      <section className=" px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our UI/UX Design Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive services to shape digital interfaces that balance beauty with usability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <FaLaptopCode />, title: 'Interface Design', desc: 'Custom UI designs for web and mobile applications that reflect your brand.' },
            { icon: <FaVectorSquare />, title: 'Wireframes & Prototypes', desc: 'Low and high-fidelity prototypes built for feedback and testing.' },
            { icon: <FaUserCheck />, title: 'UX Research & Testing', desc: 'User personas, journey maps, A/B tests to refine product decisions.' },
            { icon: <FaMobileAlt />, title: 'Mobile-first Design', desc: 'Responsive and adaptive design for modern mobile experiences.' },
            { icon: <FaPalette />, title: 'Design Systems', desc: 'Reusable components and guidelines for consistent design and development.' },
            { icon: <FaRegLightbulb />, title: 'Creative Direction', desc: 'Visual storytelling and UI concepts aligned with business goals.' },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow transition"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 text-xl">
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Design Process */}
      <section className=" px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A user-centered design workflow that ensures your product meets expectations—and exceeds them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {[
            { step: '1. Research', desc: 'Understand the audience, define goals, and benchmark competitors.' },
            { step: '2. Wireframes', desc: 'Build skeleton screens, flows, and architecture.' },
            { step: '3. UI Design', desc: 'Apply color, typography, grids, and visual hierarchy.' },
            { step: '4. Test & Iterate', desc: 'Validate with users and iterate to perfection.' },
          ].map(({ step, desc }, i) => (
            <div key={i} className="border-l-4 border-blue-600 pl-4 py-4 bg-gray-50 rounded">
              <h4 className="text-lg font-bold text-blue-600 mb-2">{step}</h4>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Tools We Use</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10">
            Our team uses best-in-class software to deliver world-class designs.
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-blue-600 text-4xl">
            <FaFigma />
            <FaSketch />
            <FaLayerGroup />
            <FaLaptopCode />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <div className="py-14 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Design Something Beautiful</h2>
          <p className="text-blue-100 mb-6">
            Ready to elevate your product’s user experience? Our design team is eager to help you craft intuitive, engaging, and scalable digital solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UIDesignServices;
