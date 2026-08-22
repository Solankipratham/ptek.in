import React from "react";
import {
  FaRegClipboard,
  FaConciergeBell,
  FaBuilding,
  FaGamepad,
  FaHotel,
  FaConnectdevelop,
  FaPlaneDeparture,
  FaCogs,
  FaTools,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Hospitality = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative  flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0"></div>
         
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-black py-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Hospitality <span className="text-black">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-black mb-8 leading-relaxed max-w-2xl">
                We have the Best Solution for Hospitality Management Software. Our cutting-edge tools are designed to streamline operations, enhance guest experiences, and optimize resource management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2 text-lg"
                >
                  Start Your Project <FaArrowRight />
                </Link>
                <Link 
                  to="/services" 
                  className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center text-lg"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SOLUTIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hospitality Management Software Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Hospitality Management System software solutions are tailored to your hospitality technology needs. It integrates into our powerful travel inventory management software and is designed to optimize your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg">
                <div className="p-6">
                  <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/custom-software-development"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300"
            >
              CONSULTATION FOR HOSPITALITY SOFTWARE
            </Link>
          </div>
        </div>
      </div>

      {/* Travelport Section */}
      <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-md w-full h-96">
              <img
                src="/Travelport.png" // Replace with your image path
                alt="Travelport Integration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              TRAVELPORT INTEGRATION
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Travelport API Integration Solutions
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              Chetu's developers ensure Travelport technologies connect effortlessly with your business's proprietary software, bringing together leading travel providers with online and offline travel buyers to facilitate travel commerce through their B2B travel platform.
            </p>

            <div className="space-y-8">
              {travelportServices.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="w-14 h-14 rounded-lg bg-blue-100 flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/custom-software-development"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300"
              >
                GET TRAVELPORT SOFTWARE SOLUTIONS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Hospitality Areas */}
 <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            OUR APPROACH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Hospitality Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We aim to create a welcoming environment for everyone who interacts with our company. Our goals include fostering meaningful relationships with guests and providing world-class service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hospitalityAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* CTA Section */}
      <div className="py-20 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Experience Our Hospitality
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto mb-10">
            Whether you're visiting for a business meeting or an event, we ensure your experience is seamless and enjoyable. Reach out to us today to learn more about our hospitality services.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition duration-300"
          >
            Book Your Visit Now
          </Link>
        </div>
      </div>
    </div>
  );
};

// Service data
const services = [
  {
    icon: <FaRegClipboard className="text-blue-600 text-2xl" />,
    title: "Booking and Reservation Systems",
    description: "Our centralized guest management platform manages guest profiles, preferences, and communications.",
    features: [
      "Easy-to-navigate tools for online bookings",
      "Phone reservation management",
      "Walk-in guest handling"
    ]
  },
  {
    icon: <FaConciergeBell className="text-blue-600 text-2xl" />,
    title: "Restaurant and Food Service Software",
    description: "Integrate restaurant online ordering for seamless food delivery and increased revenue.",
    features: [
      "Restaurant inventory management",
      "Automated ordering systems",
      "Waste minimization tools"
    ]
  },
  {
    icon: <FaBuilding className="text-blue-600 text-2xl" />,
    title: "Vacation Rentals and Timeshare Management",
    description: "Manage your bookings, activities, and experiences with our tourism booking software.",
    features: [
      "Effective hotel budgeting software",
      "Timeshare management tools",
      "Activity and experience booking"
    ]
  },
  {
    icon: <FaGamepad className="text-blue-600 text-2xl" />,
    title: "Software for Gaming and Entertainment",
    description: "Casinos, amusement parks, and attractions can manage ticketing, admissions, and guest flow.",
    features: [
      "Ticketing and admissions management",
      "Guest flow optimization",
      "Concessions management"
    ]
  },
  {
    icon: <FaHotel className="text-blue-600 text-2xl" />,
    title: "PMS Software for Hotels and Resorts",
    description: "Streamline tasks like reservations, housekeeping, guest communication, and revenue management.",
    features: [
      "Advanced property management system",
      "Housekeeping coordination",
      "Revenue management tools"
    ]
  },
  {
    icon: <FaConnectdevelop className="text-blue-600 text-2xl" />,
    title: "Travelport Portal and API Integration",
    description: "Our hospitality management solutions integrate with existing travel platforms.",
    features: [
      "Cruise line management",
      "Passenger transportation solutions",
      "Broad audience connectivity"
    ]
  }
];

// Travelport services
const travelportServices = [
  {
    icon: <FaPlaneDeparture className="text-blue-600 text-xl" />,
    title: "Travelport API Integration",
    description: "Our expert developers provide custom integrations with Travelport solutions including Travelport Universal API, Travelport Universal Profile, and more."
  },
  {
    icon: <FaCogs className="text-blue-600 text-xl" />,
    title: "Travelport Configuration",
    description: "We configure and customize Travelport solutions and platforms to your exact needs, programming custom workflows and integrating data."
  },
  {
    icon: <FaTools className="text-blue-600 text-xl" />,
    title: "Travelport System Upgrades",
    description: "Any necessary Travelport upgrades of the Universal API, development mobile, branding, and digital media solutions."
  }
];

// Hospitality areas
const hospitalityAreas = [
  {
    title: "Personalized Services",
    description:
      "We understand that every guest is unique. Our team is committed to providing personalized services tailored to meet the specific needs of each visitor.",
    features: [
      "Customized room settings and preferences",
      "Personalized concierge services",
      "Dedicated event and meeting planning",
    ],
    image: "/healthy2.webp", // Replace with your actual image
  },
  {
    title: "Comfortable Environment",
    description:
      "We believe in providing an environment that promotes relaxation and productivity. Our facilities are designed to create a comfortable atmosphere.",
    features: [
      "Comfortable meeting and event spaces",
      "Relaxing lounge areas",
      "State-of-the-art amenities",
    ],
    image: "/hosipital1.webp", // Replace with your actual image
  },
  {
    title: "Professional Service",
    description:
      "Our hospitality team is highly trained and dedicated to providing exceptional service at every touchpoint.",
    features: [
      "Friendly and professional staff",
      "Seamless event coordination",
      "24/7 guest assistance",
    ],
    image: "/hospital2.webp", // Replace with your actual image
  },
];


export default Hospitality;