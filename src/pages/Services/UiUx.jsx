import React from "react";
import { FaUserCircle, FaMagic, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import ImageSlider from "../../components/ImageSlider";

const Design = () => {
   const technologies = [
    'React', 'Unity', 'Vue.js', 'Typescript', 'Redux', 
    'Rust', 'PostgreessSQL', 'Redis', 'Python', 'MongoDB'
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Updated */}
      <div className="relative ">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                Transform Your Digital Experience with Exceptional 
                <span className="text-blue-900"> UI/UX Design</span>
              </h1>
              <p className="text-xl text-blue-900 mb-8 max-w-2xl">
                Create intuitive, engaging interfaces that delight users and drive business results. 
                Our human-centered approach delivers experiences that users love and remember.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to={"/contact"} 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-center"
                >
                  Start Your Project
                </Link>
                <Link 
                  to={"/services"} 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition duration-300 text-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-6"></div>
                <img 
                  src="/uiuxhero0.png" 
                  alt="UI/UX Design" 
                  className="relative  w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* Stats Section - New */}
  <div className="max-w-7xl mx-auto px-6 py-12 font-sans">
  <div className="flex flex-col lg:flex-row items-start gap-12">
    
    {/* Left Column: Text */}
    <div className="lg:w-1/2">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        <span className="text-blue-600">01.</span> Web and SaaS Platform Development
      </h1>

      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Turn your vision into a digital reality with Ptek. We are experts in cutting-edge web and SaaS platform development, utilizing innovative technologies, robust tools, and Agile methodologies to deliver tailored solutions. Whether you need a utility tool, a well-structured web application, or a comprehensive SaaS platform, we bring your ideas to life with seamless execution. Join us in embracing the future of digital transformation and make your mark in the ever-evolving digital realm.
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition mb-10">
        Discover more
      </button>

      {/* Technology Icons */}
     <div className="flex ">
  <div className="  ">
    <img 
      src="/reactlanguage.png" 
      alt="React" 
      className="w-54 h-40 object-contain" // You can make it even larger by increasing w/h
    />
  </div>
</div>

    </div>

    {/* Right Column: Image */}
    <div className="lg:w-1/2">
      <img 
        src="/saas-min (1).jpg" 
        alt="Web SaaS Development" 
        className="w-full rounded-xl shadow-lg"
      />
    </div>
  </div>
</div>



      {/* Our UI/UX Design Process - Updated */}
      <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            <span className="text-blue-600">02.</span> Android and iOS apps
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Ignite your app's potential and transform your vision into reality with Ptek. As trailblazers in iOS and Android app development, we harness the power of innovative technologies, unleash the capabilities of robust tools, and embrace agile methodologies to deliver bespoke solutions...
          </p>
          <div className="flex gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 text-lg font-medium text-gray-900">
                <i className="fab fa-apple text-2xl"></i>
                iOS
              </div>
              <p className="text-sm text-gray-500">React Native allows you to have a iOS compatible app</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-lg font-medium text-gray-900">
                <i className="fab fa-android text-2xl"></i>
                Android
              </div>
              <p className="text-sm text-gray-500">React Native allows you to have an Android compatible app</p>
            </div>
          </div>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
            Discover more
          </button>
        </div>

        {/* RIGHT PHONES (VIDEO) */}
        <div className="flex justify-center gap-6">
          <div className="w-[180px] h-[380px]  ">
            <video src="/AppiOS-insurance.mp4" autoPlay loop muted className="w-full h-full object-cover" />
          </div>
          <div className="w-[180px] h-[380px]  ">
            <video src="/AppAndroid-insurance.mp4" autoPlay loop muted className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

     <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SECTION */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            <span className="text-blue-600 font-bold">03.</span> Custom software
            development
          </h2>
          <p className="text-gray-600 mb-6">
            Ptekis the tech arm of enterprises around the globe:
            this service is a turnkey solution that provides you with a
            dedicated team of critical-thinking product owners and project
            managers, UI/UX innovators, full-stack senior developers,
            cloud-infrastructure architects, and quality assurance experts,
            turning business ideas into high-end digital products.
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
            Discover more
          </button>

          <div className="mt-10">
            <img
              src="/all-services-custom-software-development-removebg-preview.png"
              alt="Custom Software Illustration"
              className="w-full rounded"
            />
          </div>

          {/* Opinion Section */}
          <div className="mt-10 border rounded-lg p-6 bg-white shadow-sm">
            <h4 className="text-sm text-gray-500 mb-3">OUR OPINION</h4>
            <p className="text-lg font-semibold mb-2">
              5 Proven Reasons Why You Need a Custom Software Development Firm
              in 2021
            </p>
            <p className="text-gray-600 text-sm mb-3">
              The role of a custom software development firm in the modern world
              is invaluable. They are crucial to the success of any startup or
              small business, and without their support, it would be very
              difficult to succeed.
            </p>
            <a
              href="#"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Learn more about it →
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              title: "SaaS Platforms",
              desc: "Provide your services and solutions in a cloud-based platform, where all users can access it by subscribing to a yearly or monthly plan.",
            },
            {
              title: "Neuroscience",
              desc: "Hi-tech software solutions tailored for specific hardwares meant to collect and analyse big data, also using machine learning and deep learning.",
            },
            {
              title: "Blockchain & Fintech",
              desc: "Banks, insurers and other financial companies that get closer to their customers thanks to digitalized solutions and improved user experience.",
            },
            {
              title: "IoT & AI",
              desc: "Software for smart devices, internet of things, artificial intelligence, machine learning. Research and development dedicated teams to experiment and discover brand new high-tech solutions.",
            },
            {
              title: "E-Commerce",
              desc: "Custom and innovative solutions for e-commerce, to improve customer experience, conversion rate and data analysis.",
            },
            {
              title: "CRM & ERP",
              desc: "For companies that need a custom solution to organize better the workflow and improve their productivities.",
            },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full"></div>
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Projects Showcase - Updated */}
      <div className="px-4 py-20 space-y-24 max-w-7xl mx-auto">
      {/* Before / After Section */}
      <div className="flex flex-col items-center space-y-4 relative">
        <h1 className="text-8xl font-light text-gray-400 absolute top-0">before</h1>
        <img src="/before-dbcloud-application-software-for-neuroscience-lasting-dynamics-ui-ux-design-min.png" alt="Before" className="mt-24 w-[500px] shadow-lg" />
        <h1 className="text-8xl font-black text-gray-900">after</h1>
      <video 
  src="/after-dbcloud-software-neuroscience-ui-ux-design-lasting-dynamics.mp4" 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="w-[500px] shadow-lg rounded-lg"
/>

      </div>

      {/* Section 2: Diagnostic and Roundrush */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Diagnostic Text */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-blue-600">Diagnostic</h3>
          <h2 className="text-2xl font-semibold">Innovate your product</h2>
          <p className="text-gray-600">
            Our designers are always up for a challenge, even if it means studying MIT textbooks... 
            In this instance, our designers were able to successfully transform a complex and technical software into a more visually appealing and user-friendly interface.
          </p>
          <a href="#" className="text-blue-600 underline">Discover DBCloud →</a>
        </div>

        {/* Right - Diagnostic Image */}
       <div>
  <video 
    src="/roundrush-workflow-managment-system-lasting-dynamics-ui-ux-product.mp4" 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="w-full shadow-lg rounded-lg"
  />
</div>

      </div>

      {/* Section 3: Roundrush and Vetrinalive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Roundrush Image */}
     <div>
  <video 
    src="/vetrinalive-wizard-improvements-for-ux-design-in-lasting-dynamics.mp4" 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="w-full shadow-lg rounded-lg"
  />
</div>

        {/* Right - Roundrush Text */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-black">Roundrush</h3>
          <h2 className="text-2xl font-semibold">Our products</h2>
          <p className="text-gray-600">
            The UX/UI team designed also our own products. Roundrush is a whole new agile methodology that merges the best practices from SCRUM, KANBAN, TOC, OKRs... It provides you a quality workflow that...
          </p>
          <a href="#" className="text-blue-600 underline">Discover Roundrush →</a>
        </div>
      </div>

      {/* Section 4: Vetrinalive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Vetrinalive Text */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-blue-600">vetrinalive</h3>
          <h2 className="text-2xl font-semibold">Growth hacking and product ownership</h2>
          <p className="text-gray-600">
            Change the UI to improve conversion rates – UX/UI process is not just about creativity and innovation but it's a pragmatic data analysis...
          </p>
          <a href="#" className="text-blue-600 underline">Discover VetrinaLive →</a>
        </div>

        {/* Right - Vetrinalive Image */}
        <div>
          <img src="/rosmariano-wireframes-lasting-dynamics-ui-ux-design-min.png" alt="VetrinaLive App" className="w-full shadow-lg" />
        </div>
      </div>
    </div>
      {/* Clients Section - Updated */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-10"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            We partner with visionary companies across sectors to create digital experiences 
            that drive measurable results and user satisfaction.
          </p>
          {/* <ImageSlider /> */}
          <Link
            to="/contact"
            className="mt-12 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300"
          >
            Start Your Project
          </Link>
        </div>
      </div>

      {/* Why Choose Us - Updated */}
      <section className="py-20  text-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Our UI/UX Design Stands Out
            </h2>
            <div className="h-1 w-24 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-900">
              We combine strategic thinking with creative excellence to deliver experiences 
              that users love and businesses benefit from.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" bg-opacity-20 p-8 rounded-xl border border-blue-700 backdrop-blur-sm">
              <div className="text-center mb-6">
                <FaUserCircle className="text-blue-400 mx-auto text-5xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                User-Centered Approach
              </h3>
              <p className="text-blue-900 text-center">
                We prioritize user needs through research and testing, creating intuitive 
                interfaces that solve real problems and drive engagement.
              </p>
            </div>
            
            <div className="bg-opacity-20 p-8 rounded-xl border border-blue-700 backdrop-blur-sm">
              <div className="text-center mb-6">
                <FaMagic className="text-blue-400 mx-auto text-5xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Strategic Innovation
              </h3>
              <p className="text-blue-900 text-center">
                We blend creativity with business strategy to deliver designs that not only 
                look beautiful but also achieve measurable results and competitive advantage.
              </p>
            </div>
            
            <div className=" bg-opacity-20 p-8 rounded-xl border border-blue-700 backdrop-blur-sm">
              <div className="text-center mb-6">
                <FaMobileAlt className="text-blue-400 mx-auto text-5xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Future-Proof Solutions
              </h3>
              <p className="text-blue-900 text-center">
                We create responsive, accessible designs that work flawlessly across all 
                devices and adapt to evolving user expectations and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - New */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Let's collaborate to create intuitive, engaging interfaces that your users will love.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition duration-300"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;