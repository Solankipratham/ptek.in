import React from "react";
import {
  FaDesktop,
  FaWifi,
  FaCogs,
  FaMapMarkerAlt,
  FaVideo,
  FaFileAlt,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MeetingsEvents = () => {
  return (
    <div className="bg-white">
      {/* New Hero Section */}
      <div className="relative ">
        <div className="absolute inset-0 "></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
              Meetings & Events at Our Office
            </h1>
            <p className="text-xl text-blue-900 mt-6 mb-8">
              Our office is equipped with state-of-the-art facilities designed to
              ensure your meetings and events are successful and memorable.
              Whether you're hosting a corporate meeting, a team brainstorming
              session, or a large conference, we have the perfect space for you.
            </p>
            <Link
              to={"/contact"}
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg transition-all hover:from-blue-600 hover:to-blue-800 hover:shadow-xl"
            >
              Start Your Project
              <FaChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Technology Solutions Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Technology Solutions
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-8">
              We engineer and program{" "}
              <strong>event technology solutions</strong> to create AR/VR
              experiences, integrate with wearable technologies, and produce
              digital presentations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  icon: <FaDesktop className="text-blue-600 text-3xl" />,
                  title: "Event Technology Software",
                  content:
                    "Our custom event technology software creates brand interactivity and enhances social promotion, content distribution, and blended live & digital experiences.",
                },
                {
                  icon: <FaWifi className="text-blue-600 text-3xl" />,
                  title: "Beacon Software Integrations",
                  content:
                    "We develop beacon applications that enable resource tracking, navigation, interactive maps, proximity marketing, and more via Bluetooth and iBeacon technologies.",
                },
                {
                  icon: <FaCogs className="text-blue-600 text-3xl" />,
                  title: "AR/VR Event Technology Solutions",
                  content:
                    "We develop event technology solutions that integrate with AR & VR headsets and other wearable tech solutions to create highly immersive experiences.",
                },
                {
                  icon: <FaMapMarkerAlt className="text-blue-600 text-3xl" />,
                  title: "Digital Presentation Software",
                  content:
                    "We develop digital presentation software to enable interactive virtual presentations with existing Word, Excel, PDF, PowerPoint/Google Slides, and other media files.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-6">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}

              <Link
                to={"/custom-software-development"}
                className="inline-flex items-center text-blue-600 font-semibold mt-6 group"
              >
                Get Event Tech Solutions
                <FaChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="/EventTechnology.png"
                alt="Event Technology"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Support Solutions Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="/Meeting.png"
                alt="Event Support"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ptek Powers Up Your Events and Meetings with Advanced Support
                Solutions
              </h2>
              <div className="h-1 w-24 bg-blue-600"></div>
              <p className="text-lg text-gray-600 mt-8">
                Ptek's developers offer the best technical support for meeting
                software, event feedback software, and virtual meeting software.
                Our mobile event apps ensure seamlessness for users, and our
                integration capabilities will enhance your event and meetings.
              </p>

              {[
                {
                  icon: <FaVideo className="text-blue-600 text-3xl" />,
                  title: "IT Support for Event Apps",
                  content:
                    "Our IT support for event apps provides technical assistance and maintenance to ensure smooth event operations. We integrate real-time event analytics, meeting scheduling tools, and software for corporate events to enhance functionality and efficiency.",
                },
                {
                  icon: <FaDesktop className="text-blue-600 text-3xl" />,
                  title: "Event Networking Platforms",
                  content:
                    "We develop event networking platforms to facilitate communication among attendees at conferences, trade shows, and corporate meetings. They enable real-time meetings and have capabilities like conference planning software, agenda and scheduling, and attendee profiles.",
                },
                {
                  icon: <FaCogs className="text-blue-600 text-3xl" />,
                  title: "Event Software System Integrations",
                  content:
                    "Our team performs integrations into event software systems for maximized functionality. We integrate event logistics software for streamlined venue and attendee management and event agenda planning tools for easy-to-use interfaces and interactive features.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start mt-8">
                  <div className="flex-shrink-0 mt-1 mr-6">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              ))}

              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold mt-6 group"
              >
                Get Event Support Solutions
                <FaChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spaces Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Event Spaces
            </h2>
            <div className="h-1 w-24 bg-blue-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-8">
              Flexible spaces designed for every type of meeting and event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/meeting1.webp",
                title: "Meeting Rooms",
                description:
                  "Our meeting rooms are designed to provide a comfortable, collaborative environment, equipped with the latest technology and high-speed internet. Perfect for small to medium-sized groups.",
                features: [
                  "Seating for up to 10 people",
                  "Projector and whiteboard available",
                  "High-speed internet",
                ],
              },
              {
                image: "/meeting2.webp",
                title: "Conference Room",
                description:
                  "For larger events or conferences, our conference room offers ample space and all the necessary amenities to make your event a success.",
                features: [
                  "Seating for up to 50 people",
                  "High-quality AV system",
                  "Video conferencing equipment",
                ],
              },
              {
                image: "/meeting3.webp",
                title: "Event Spaces",
                description:
                  "Whether you're hosting a product launch, seminar, or networking event, our event spaces are versatile and customizable to meet your needs.",
                features: [
                  "Capacity for up to 100 guests",
                  "Flexible room layouts",
                  "Catering and event planning support",
                ],
              },
            ].map((space, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
              >
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {space.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{space.description}</p>
                  <ul className="space-y-2 mb-6">
                    {space.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-2 text-blue-600">
                          •
                        </div>
                        <span className="text-gray-700">{feature}</span>
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
      <div className="py-16 bg-gradient-to-r from-blue-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to host your next event?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            We are committed to making your meetings and events as smooth and
            successful as possible. Contact us today to book your space or learn
            more about our services.
          </p>
          <Link
            to={"/contactsection"}
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-lg transition-all hover:from-blue-600 hover:to-blue-800 hover:shadow-xl"
          >
            Contact Us Today
            <FaChevronRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MeetingsEvents;