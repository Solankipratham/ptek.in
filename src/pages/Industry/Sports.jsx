import React from "react";
import { Link } from "react-router-dom";

const Sports = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative  min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-tight">
              Indoor Sports & Recreation
            </h1>
            <p className="mt-6 text-xl text-blue-900 max-w-2xl">
              At our company, we believe in maintaining a healthy balance between
              work and relaxation. Our indoor sports facilities are designed to
              provide our employees with a fun and stress-free environment where
              they can unwind, recharge, and boost their productivity.
            </p>
            <div className="mt-10">
              <Link 
                to="/contactsection" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-100 transition-all duration-300 shadow-lg"
              >
                Start Your Project →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
    <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Hire Experienced Sports Software Developers
      </h2>
      <p className="text-gray-700 text-lg">
        Our team specializes in developing custom sports management software solutions for fitness clubs, athletic programs, and sports medicine practices.
      </p>
    </div>

    {/* Image + Features */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="rounded-xl overflow-hidden shadow-xl">
        <img
          src="/tabletennis.jpg"
          alt="Sports Software Illustration"
          className="w-full h-80 object-cover rounded-xl"
        />
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-6">
        {[
          { title: "Fitness Club Management", icon: "🏋️" },
          { title: "Golf", icon: "⛳" },
          { title: "Sports Analytics & Athlete Performance", icon: "📊" },
          { title: "Training", icon: "🤸" },
          { title: "Kinesiology", icon: "🏃" },
          { title: "Sports Health", icon: "🩺" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>

    {/* CTA Button */}
    <div className="text-center mt-16">
      <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-lg transition duration-300 shadow-lg">
        Hire Sports Software Developers
      </button>
    </div>
  </div>
</section>


      {/* AI Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Artificial Intelligence Solutions for Sports Management
            </h2>
            <p className="text-gray-700 text-lg">
              We leverage cutting-edge AI analysis to modernize sports
              management by designing intuitive wearables for customized
              training and performance monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Driven Health Athlete Metrics",
                description: "Custom AI solutions to measure health metrics in real-time using parameters like agility, speed, and endurance.",
                icon: "📈",
              },
              {
                title: "Player Biometrics System",
                description: "Monitor player heart rate, fatigue, and oxygen rates in real-time to provide data-driven insights.",
                icon: "💓",
              },
              {
                title: "AI Voice Recognition Software",
                description: "Voice recognition software to aid athletes with visual or mobility impairments.",
                icon: "🎙️",
              },
              {
                title: "Game Strategy Optimization",
                description: "Elevate your digital playbook with AI enhancements and tools for data-driven game adjustments.",
                icon: "🎮",
              },
              {
                title: "AI-Driven Virtual Reality Sports Training",
                description: "VR training solutions with AI to simulate real-life scenarios for athletic improvement.",
                icon: "🕶️",
              },
              {
                title: "Intelligent Video Assistant Referee",
                description: "Enhance officiating with intelligent video assistants optimized for multi-view capture.",
                icon: "🎥",
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-lg transition duration-300 shadow-lg">
              Optimize Sports Software with AI
            </button>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
     <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Sports Analytics & Athlete Performance Solutions
      </h2>
      <p className="text-gray-700 text-lg">
        Our sports software developers build a suite of sports analytics tools designed for ultimate performance intelligence.
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
        <img
          src="/Fitness.jpg"
          alt="Sports Analytics"
          className="w-full h-80 object-cover rounded-xl"
        />
      </div>

      {/* Features */}
      <div className="space-y-8 order-1 md:order-2">
        {[
          {
            title: "Athlete Performance Tracking",
            description:
              "We develop solutions to monitor athlete performance with wearable devices, RFID, and GPS technology.",
            icon: "📡",
          },
          {
            title: "Sports Performance Analysis Software",
            description:
              "Engineer tools for sports performance analysis through video tracking, biometrics, and motion capture.",
            icon: "📊",
          },
          {
            title: "Sports Data Management",
            description:
              "Collect, store, and analyze sports data with EDI capabilities and big data analytics for improved efficiency.",
            icon: "💾",
          },
          {
            title: "Sports Performance Integrations",
            description:
              "Integrate analytics platforms with apps for video recording, data exporting, and live feedback.",
            icon: "🔗",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="text-3xl mr-4 mt-1">{item.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-lg transition duration-300 shadow-lg">
        Develop Sports Analytics Software
      </button>
    </div>
  </div>
</section>


      {/* Gym Management Section */}
     <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Fitness Club and Gym Management Web Platform
      </h2>
      <p className="text-gray-700 text-lg">
        We engineer custom fitness & gym management solutions to enhance efficiency, reduce costs, and provide seamless management.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Features List */}
      <div className="space-y-8">
        {[
          {
            title: "Membership Management Software",
            description:
              "Streamline membership registration, automate payments, and integrate digital ID capturing.",
            icon: "🧾",
          },
          {
            title: "Fitness Equipment Software Technology",
            description:
              "Preventative maintenance software, user-friendly interfaces, and tracking analysis tools.",
            icon: "🏋️",
          },
          {
            title: "Fitness Club Management Software",
            description:
              "Custom solutions to enhance operational efficiency and streamline workflows.",
            icon: "📋",
          },
          {
            title: "Gym Mobile App Development",
            description:
              "Branded mobile apps to boost engagement with features like class bookings and fitness tracking.",
            icon: "📱",
          },
        ].map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="text-3xl mr-4 mt-1">{item.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="rounded-xl overflow-hidden shadow-xl">
        <img
          src="/SmartWe.webp"
          alt="Gym and Fitness Platform"
          className="w-full h-80 object-cover rounded-xl"
        />
      </div>
    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-lg transition duration-300 shadow-lg">
        Hire Gym Management Software Developers
      </button>
    </div>
  </div>
</section>


      {/* Sports Facilities Section */}
    <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Sports Facilities
      </h2>
      <p className="text-gray-700 text-lg">
        Designed to provide our employees with a fun and stress-free environment
        where they can unwind, recharge, and boost their productivity.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Carrom */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img
          src="/sports1.webp"
          alt="Carrom Game"
          className="h-56 w-full object-cover rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Carrom</h3>
          <p className="text-gray-700 mb-4">
            A classic game that brings our employees together for friendly
            competition in a relaxing space.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">•</span> Perfect for quick breaks
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Ideal for team bonding
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Strategic gameplay for mental relaxation
            </li>
          </ul>
        </div>
      </div>

      {/* Table Tennis */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img
          src="/sports2.webp"
          alt="Table Tennis"
          className="h-56 w-full object-cover rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Table Tennis</h3>
          <p className="text-gray-700 mb-4">
            A fast-paced game that lets our employees break away from their desks
            and get moving.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">•</span> Improves concentration and reflexes
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Great for short breaks
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Ideal for friendly competitions
            </li>
          </ul>
        </div>
      </div>

      {/* Badminton */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img
          src="/sport3.webp"
          alt="Badminton"
          className="h-56 w-full object-cover rounded-t-xl"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Badminton</h3>
          <p className="text-gray-700 mb-4">
            Our indoor badminton courts offer a chance to get exercise while
            having fun with colleagues.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">•</span> Helps improve coordination
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Provides a full-body workout
            </li>
            <li className="flex items-center">
              <span className="mr-2">•</span> Ideal for stress relief
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
    <section className="py-20">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
      Ready to Transform Your Sports Management?
    </h2>
    <p className="text-xl text-blue-900 max-w-2xl mx-auto mb-10">
      Our experts are ready to help you build custom solutions for your sports organization.
    </p>

    <Link
      to="/contactsection"
      className="inline-block bg-white text-blue-900 font-bold py-4 px-12 rounded-lg hover:bg-blue-100 transition duration-300 shadow-lg"
    >
      Get Started Today
    </Link>
  </div>
</section>
    </div>
  );
};

export default Sports;