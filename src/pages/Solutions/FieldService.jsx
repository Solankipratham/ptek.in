import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCalendarAlt, FaMapMarkerAlt, FaTools, FaClipboardCheck,
  FaMobileAlt, FaChartLine, FaCloud, FaUserFriends,
  FaIndustry, FaHome, FaHospital, FaBuilding, FaPlug, FaTruck
} from 'react-icons/fa';

const FieldServiceSolutions = () => {
  return (
    <div className="bg-white text-gray-800 ">
      {/* Hero Section */}
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
            className="text-gray-500 text-lg font-medium"
          >
            Optimize Field Operations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
          >
            Field Service Solutions <br className="hidden md:block" /> That Drive Efficiency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            Transform your field operations with our comprehensive platform that streamlines scheduling, dispatch, and real-time tracking for maximum productivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-block mt-4 px-6 py-3 bg-blue-500 rounded-md hover:bg-blue-600 text-white text-base md:text-lg  transition font-medium shadow-md"
            >
              Request Demo →
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.3 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -inset-4  rounded-2xl transform rotate-3"
            ></motion.div>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              src="/The-Benefits-of-Farm-Management-Software-for-Small-Scale-Farmers-copy-scaled.jpg" // ← Replace with your image path
              alt="Field Service Management"
              className="rounded-xl w-full max-w-md lg:max-w-lg object-contain relative z-10"
            />
          </div>
        </motion.div>
      </div>


      {/* Capabilities Section */}
      <div className="pt-2 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900"
          >
            Our Field Service Capabilities
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            Comprehensive tools to optimize every aspect of your field operations and service delivery.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Scheduling & Dispatch",
              icon: <FaCalendarAlt className="text-blue-600 text-2xl" />,
              desc: "Intelligent scheduling algorithms for optimal technician assignment and route planning."
            },
            {
              title: "Real-time Tracking",
              icon: <FaMapMarkerAlt className="text-blue-600 text-2xl" />,
              desc: "Live GPS tracking of technicians with ETA updates for customers."
            },
            {
              title: "Work Order Management",
              icon: <FaTools className="text-blue-600 text-2xl" />,
              desc: "Complete lifecycle management from creation to completion."
            },
            {
              title: "Mobile Field Service",
              icon: <FaMobileAlt className="text-blue-600 text-2xl" />,
              desc: "Field apps for technicians to access job details, capture signatures, and record work."
            },
            {
              title: "Asset Management",
              icon: <FaClipboardCheck className="text-blue-600 text-2xl" />,
              desc: "Track equipment history, maintenance schedules, and warranty information."
            },
            {
              title: "Analytics & Reporting",
              icon: <FaChartLine className="text-blue-600 text-2xl" />,
              desc: "Performance insights to improve efficiency and customer satisfaction."
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 text-left"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Service Process Timeline */}
      <section className="py-2 px-6 md:px-12 lg:px-24 ">
        {/* <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Our Field Service Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            A streamlined workflow that ensures efficient service delivery from request to completion.
          </motion.p>
        </div> */}

        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              step: "Service Request",
              desc: "Customers can initiate service requests conveniently via web portals, mobile apps, or by calling support. The request is instantly recorded, categorized, and queued for intelligent processing, ensuring no task is missed."
            },
            {
              step: "Intelligent Scheduling",
              desc: "Advanced scheduling algorithms automatically assign the most suitable technician based on location, availability, skill set, and urgency of the job—minimizing delays and optimizing workforce efficiency."
            },
            {
              step: "Technician Dispatch",
              desc: "Once assigned, technicians receive instant mobile notifications that include job details, priority, customer info, and an optimized route—allowing them to prepare and respond quickly while reducing travel time."
            },
            {
              step: "On-site Service",
              desc: "Technicians arrive fully informed and equipped, perform the required service efficiently, and document their work using mobile devices—capturing notes, photos, checklists, and materials used, all in real time."
            },
            {
              step: "Customer Sign-off",
              desc: "After service completion, customers can digitally review and approve the work done. They can sign directly on the technician’s device and optionally leave feedback or a satisfaction rating on the spot."
            },
            {
              step: "Reporting & Analysis",
              desc: "All service data is automatically fed into analytics dashboards. Management teams can access real-time KPIs, performance metrics, and historical data to identify trends, improve decision-making, and enhance service quality."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              {/* Step Number */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-blue-600 flex items-center justify-center font-bold text-lg text-blue-600 shadow-md">
                {i + 1}
              </div>


              {/* Step Content */}
              <div>
                <h1 className="text-xl mb-1">{item.step}</h1>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      {/* Industries Section */}
      <section className="px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Our solutions are tailored to meet the unique needs of various service industries.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { icon: <FaPlug className="text-blue-600" />, title: "Utilities" },
            { icon: <FaBuilding className="text-blue-600" />, title: "Facilities Management" },
            { icon: <FaHome className="text-blue-600" />, title: "HVAC Services" },
            { icon: <FaHospital className="text-blue-600" />, title: "Medical Equipment" },
            { icon: <FaTruck className="text-blue-600" />, title: "Transportation" },
            { icon: <FaIndustry className="text-blue-600" />, title: "Industrial Maintenance" },
            { icon: <FaTools className="text-blue-600" />, title: "Equipment Repair" },
            { icon: <FaCloud className="text-blue-600" />, title: "IT Field Services" }
          ].map(({ icon, title }, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="font-semibold text-lg">{title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 px-6 md:px-12 lg:px-24 ">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Our Field Service Solution?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            Transform your field operations with our powerful, user-friendly platform.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "30% Increase in Productivity",
              desc: "Optimize scheduling and reduce travel time between jobs"
            },
            {
              title: "25% Faster Response Times",
              desc: "Intelligent dispatch gets the right technician to the job faster"
            },
            {
              title: "95% Customer Satisfaction",
              desc: "Real-time updates and professional service delivery"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology Integration */}
        <div className="max-w-7xl mx-auto mt-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Integrated Technology Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Seamlessly connects with your existing business systems
          </motion.p>

          <motion.div
            className="relative bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-8">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <FaCloud className="text-blue-600 text-2xl" />
                </div>
                <p className="font-medium">Cloud Platform</p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <FaMobileAlt className="text-blue-600 text-2xl" />
                </div>
                <p className="font-medium">Mobile Apps</p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <FaChartLine className="text-blue-600 text-2xl" />
                </div>
                <p className="font-medium">Analytics</p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <FaUserFriends className="text-blue-600 text-2xl" />
                </div>
                <p className="font-medium">CRM Integration</p>
              </motion.div>
            </div>

            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-blue-200 z-[-1]"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-2 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Customers Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="bg-blue-50 p-8 rounded-2xl relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl transform rotate-1 opacity-30 z-[-1]"></div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-gray-600">Operations Manager, City Utilities</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Since implementing this field service platform, our response times have improved by 40% and customer complaints have dropped significantly. The mobile app has been a game-changer for our technicians in the field."
            </p>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-8 rounded-2xl relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl transform -rotate-1 opacity-30 z-[-1]"></div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="font-bold">Michael Rodriguez</h4>
                <p className="text-sm text-gray-600">Service Director, TechMed Solutions</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The real-time tracking and scheduling optimization have transformed how we manage our field teams. We've reduced overtime by 25% while increasing the number of daily service calls per technician."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-2 px-6 md:px-12 lg:px-24 ">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Field Service Operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-blue-800 max-w-2xl mx-auto mb-10 text-lg"
          >
            Schedule a personalized demo to see how our platform can streamline your field operations and boost productivity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Schedule a Demo
            </Link>
            <Link
              to="/"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
            >
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FieldServiceSolutions;