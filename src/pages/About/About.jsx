import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import LeftImage from "/Award-Wall-LD-1.png"; // Replace with actual image
import RightImage from "/aboutus-award01-min.png"; // Replace with actual image
import AcademyImage from "/all-services-rectruiment-and-academy-min.jpg"; // Replace with your actual image path


const partners = ["Samsung", "FWD", "Capgemini", "IBM"];
const teamImages = [
  "/about90.png",
  "/guide.webp",
  "/people-with-internet-browser.jpg",
  "/about7.png",
  "/about76.png"
];
 const values = [
    {
      title: "Partners, not customers",
      description: "We focus on building relationships with partners and growing together. This growth is stable, safe, and organic.",
      image: "/ISOPartners-not-customers.png"
    },
    {
      title: "Quality",
      description: "We accept only a few projects per year. This focus and exclusivity allows us to give everyone the same high-quality, turnkey service.",
      image: "/ISOQuality (1).png"
    },
    {
      title: "Transparency",
      description: "We track all our daily work. Partners can follow progress on the board of our workflow management system.",
      image: "/ISOTransparency-1.png"
    },
    {
      title: "Flexibility",
      description: "You can dismiss the Ptek team with only 30 days' notice, and payments are monthly – no percentage is upfront.",
      image: "/ISOFlexibility.png"
    },
    {
      title: "Team-oriented",
      description: "We don't just assign one person to work on a project part-time. Ptek puts a dedicated team focused 100% on your project.",
      image: "/ISOTeamOriented.png"
    },
    {
      title: "Innovation",
      description: "We are forward-looking innovators. Our team was pioneering the use of AI years before it became popular.",
      image: "/ISOInnovation-1.png"
    },
    {
      title: "Reinvesting profits",
      description: "The group was built and grown from day 0 by reinvesting profits. We deeply understand how to provide value to partners – we have to.",
      image: "/ISOReinvesting-profits.png"
    },
    {
      title: "Agile process",
      description: "The Ptek development process is smooth and Agile. Our products always come with the latest tech stack, too.",
      image: "/ISOAgile-process.png"
    },
    {
      title: "Carbon Neutral",
      description: "We offset our carbon emissions to achieve carbon neutrality. Verra – which builds standards for climate action – certifies our carbon offsets.",
      image: "/ISOCarbonNeutral-1.png"
    }
  ];

const About = () => {
  return (
    <div className="px-6 py-16 md:px-20 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Our partners have often <br /> tried other teams, failed, <br /> then found success with us.
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            For many of our partners, we are a second chance at success.
          </p>
          <div className="flex items-center space-x-6 mb-8">
            {partners.map((name) => (
              <span
                key={name}
                className="text-gray-500 uppercase text-sm font-semibold tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="text-lg font-medium mb-4">
            We started with nothing – no external investments. <br /> We didn't follow the canonical startup path. <br /> We've grown through determination and by reinvesting profits.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Michele "Mike" Criminisi began working as a freelance software engineer in 2010. He started an individual firm a few years later. In 2015, Mike registered Ptek as an SRL in Italy.
            <br /><br />
            This is a software house, where businesses find lasting opportunities and turnkey solutions. With our partners, we keep improving our services, learning from the past and planning for the future.
            <br /><br />
            Ptek is now an extended group, all owned by our founder Michele Criminisi. It extends in four directions: software development, real estate, education, and fintech.
          </p>

          <div className="border-l-2 border-blue-600 pl-4 mb-6">
            <p className="font-semibold text-black">
              Our company helps partners develop, implement, and maintain successful digital products across all devices.
            </p>
            <p className="text-sm text-gray-600 mt-2">
              We aim for long-term partnerships – potentially lifelong. <br /> Potential partners can join our waiting list.
            </p>
          </div>

          <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:underline">
            Want to work with us? Inquire now <FaArrowRight className="ml-2 mt-[2px]" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <video
              src="/videos/lasting-dynamics-intro.mp4"
              controls
              className="rounded-xl w-full h-52 object-cover mb-4"
            />
          </div>
          <img src="/2965738.jpg" alt="preview" className="rounded-xl w-full h-52 object-cover" />
          <img src="/corporate-connection-collaboration-teamwork-support-concept.jpg" alt="preview" className="rounded-xl w-full h-52 object-cover" />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Team ${index + 1}`}
            className="rounded-xl object-cover w-full h-64"
          />
        ))}
      </div>
       <div className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            OUR VALUES
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
            See the principles that define us, drive us, and distinguish us.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our values stand at the core of everything we do. They are the foundation upon which we build our success and foster connections.
          </p>
        </div>

         <section className="py-16 px-6 text-center">
      <h4 className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wide">
        Our Values
      </h4>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        See the principles that define us, <br />
        drive us, and distinguish us.
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-12">
        Our values stand at the core of everything we do. They are the foundation upon which we build our success and foster connections.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {values.map((value, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            <img src={value.image} alt={value.title} className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
            <p className="text-gray-600 text-sm">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden">
          <img src={LeftImage} alt="Awards Wall" className="w-full h-auto object-cover" />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <div className="rounded-2xl overflow-hidden">
            <img src={RightImage} alt="Royal Award" className="w-full h-auto object-cover" />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Recognized by the <br className="hidden sm:block" />
              industry and royal families
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Ptek has won 20+ awards. Clutch, Tech Behemoths, DesignRush,
              SoftwareWorld, and SuperbCompanies have recognized our excellent work.
              We're proud to have won awards for mobile app development, React development,
              machine learning, and more.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-blue-600 font-medium hover:underline transition"
            >
              See our awards in more detail →
            </a>
          </div>
        </div>
      </div>
    </section>
      </div>
        <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Free Quotation and Analysis.
            </h2>
            <p className="text-gray-600 max-w-xl">
              Your project is unique. So is our approach. Reach out today, and share
              your requirements. Let us envision and develop the path towards mutual
              success.
            </p>
          </div>
          <a
            href="#"
            className="text-blue-600 text-lg font-medium flex items-center hover:underline"
          >
            <span className="text-3xl mr-2">( ( (</span>
            Get in touch
            <span className="text-3xl ml-2">) ) )</span>
          </a>
        </div>

        {/* Divider */}
        <div className="border-t mt-20 mb-8 w-1/3 lg:w-1/4"></div>

        {/* Bottom Row */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            We are transparent and straightforward.
          </h2>
          <p className="text-gray-600 max-w-2xl">
            From a contract perspective, working with Ptek is easy.
            <br />
            There is no upfront commitment. Payments are monthly.
          </p>
        </div>
      </div>
    </section>
      <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="w-full">
          <img
            src={AcademyImage}
            alt="Our Academy"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            Our Academy
          </h2>

          <div className="text-gray-600 space-y-5 text-base leading-relaxed">
            <p>
              The Academy is free. We have offered jobs to 93% of graduates.
            </p>
            <p>
              The Academy gets people up to speed with the knowledge and skills
              we want them to have. Students receive 2–3 things to learn or do,
              per week, for up to 2 months. The work takes 1–3 hours a day to complete.
            </p>
            <p>
              Most people complete the Academy before working at Lasting
              Dynamics. Some complete the Academy at the same time as working at LD.
            </p>
            <p>
              Ptek trains roughly 200 people annually across Europe
              and the MENA region. Graduates get a certificate badge to post on
              LinkedIn. We attract the best minds available – out of 1000
              applications per month, we usually select the top 1%.
            </p>
          </div>

          <a
            href="#"
            className="inline-block mt-6 text-blue-600 font-medium hover:underline transition"
          >
            Apply now →
          </a>
        </div>
      </div>
    </section>
    </div>
   
    </div>
  );
};

export default About;
