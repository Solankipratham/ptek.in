
import { FaCode, FaExchangeAlt, FaMobileAlt, FaTools, FaPlug, FaShieldAlt } from 'react-icons/fa';
import { SiWordpress, SiJoomla, SiDrupal, SiJavascript, SiPhp, SiAngular, SiHtml5 } from 'react-icons/si';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";
import HeroImg from "/ISOQuality.png"
import cms from "/CMS.png"
import cmr2 from "/CMR2.png"
import cms1 from "/cms1.webp"
import cms2 from "/cms2.avif"
import cms3 from "/cms3.webp"
import cms4 from "/cms4.webp"
import cms5 from "/cms5.webp"
import cms6 from "/cms6.webp"

const CMSSolutions = () => {
  return (
      <div className="min-h-screen w-full">
          <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left side - Text content */}
              <div className="w-full lg:w-1/2 space-y-8">
                <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                      CMS Solutions Tailored to your 
                  </span>{' '}
                Business Needs
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
               Our CMS solutions provide scalable,
                flexible, and secure content management systems designed to optimize your digital presence.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="/contactsection"
                    className="bg-black hover:bg-red-800 text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Start Your Project →
                  </a>
                </div>
              </div>
    
              {/* Right side - Autodesk showcase */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-2xl  overflow-hidden ">
                    <img 
                     src={HeroImg}
                      alt="Autodesk solutions in action showing CAD and BIM workflows"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

const CMSDevelopment = () => {
  return (
    <>
      {/* First Section */}
      <div className="bg-gray-50">
        <section className="py-12 px-6">
          <h2 className="text-center text-3xl font-bold mb-4">We’ve Got Experienced CMS Developers</h2>
          <p className="text-center text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            Chetu's Custom CMS Solutions are SEO-friendly and success-driven, designed to integrate with existing content management systems to enhance and elevate your website, application, social media network, <span className="text-blue-500">e-commerce store</span>, or blog.
          </p>
        </section>

        <section className="py-12 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaCode className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">CMS Development Services</h3>
            <p className="text-gray-600">
              Our CMS developers are proficient in building and customizing CMS solutions for all industries. We specialize in platforms like <span className="text-blue-500">Joomla</span> and <span className="text-blue-500">WordPress</span>.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaExchangeAlt className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">CMS Integration</h3>
            <p className="text-gray-600">
              Integrate plugins, extensions, and tools for a streamlined workflow, designed to maximize efficiency and boost your ROI.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaMobileAlt className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">CMS Application Development</h3>
            <p className="text-gray-600">
              Utilize the latest technologies to deliver SEO-optimized, user-friendly, and customizable CMS applications for <span className="text-blue-500">digital marketing</span>.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaExchangeAlt className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">CMS Migration</h3>
            <p className="text-gray-600">
              We'll redesign and migrate your website to newer platforms, improving speed, protocols, and capacity to handle larger traffic.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaPlug className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">CMS Plugin Development</h3>
            <p className="text-gray-600">
              Create and implement effective plugins to add features like drag-and-drop buttons, themes, or SEO-boosting modules.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaTools className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">CMS Support & Maintenance</h3>
            <p className="text-gray-600">
              Performance tuning, caching, testing, and database query optimization for maintenance of your CMS.
            </p>
          </div>
        </section>

        <section className="py-12 px-6">
          <div className="flex justify-center">
            {/* Replace with your image */}
            <img src={cms} alt="CMS Applications" className="rounded-lg shadow-lg" />
          </div>
        </section>
      </div>

      {/* Second Section */}
      <div className="bg-gray-50">
        <section className="py-12 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">CMS Plugins & Integrations</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            Adding custom features, integrating plugins, and implementing add-ons to your new and improved website allows you to turn your vision into a feature-rich, custom-tailored software reality. Chetu takes your existing content management system (CMS) and elevates it to new heights.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full transition hover:bg-gray-800 flex items-center mx-auto">
            INTEGRATE YOUR CMS NOW <FiArrowRight className="ml-2" />
          </button>
        </section>

        <section className="py-12 px-6 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-center mb-6">CMS Platforms</h3>
            <p className="text-gray-600 text-center mb-6">
              We implement customizable features, modules, plugins, and extensions within existing CMS platforms like WordPress, Drupal, Joomla, Brightspot, and Sitecore to optimize workflows.
            </p>
            <div className="flex justify-center space-x-6">
              <SiWordpress className="text-blue-500 text-5xl" />
              <SiJoomla className="text-blue-500 text-5xl" />
              <SiDrupal className="text-blue-500 text-5xl" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-6">Open-Source Technologies</h3>
            <p className="text-gray-600 text-center mb-6">
              We utilize open-source technologies like Javascript, PHP, Angular.js, and HTML5 to develop your custom CMS solution to enable workflow management and maintain content.
            </p>
            <div className="flex justify-center space-x-6">
              <SiJavascript className="text-yellow-500 text-5xl" />
              <SiPhp className="text-blue-500 text-5xl" />
              <SiAngular className="text-red-500 text-5xl" />
              <SiHtml5 className="text-orange-500 text-5xl" />
            </div>
          </div>
        </section>

        <section className="py-12 px-6">
          <h3 className="text-2xl font-bold text-center mb-6">Our CMS Software Development Solutions</h3>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="space-y-8 lg:w-1/2">
              <div className="flex items-start">
                <SiWordpress className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold">CMS Microsoft SharePoint Services</h4>
                  <hr className="my-2 border-gray-300" />
                </div>
              </div>
              <div className="flex items-start">
                <SiDrupal className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold">Custom CMS Drupal Development Services</h4>
                  <hr className="my-2 border-gray-300" />
                </div>
              </div>
              <div className="flex items-start">
                <SiJoomla className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold">CMS Sitecore Developers</h4>
                  <hr className="my-2 border-gray-300" />
                </div>
              </div>
              <div className="flex items-start">
                <SiWordpress className="text-blue-500 text-4xl mr-4" />
                <div>
                  <h4 className="text-xl font-bold">Joomla CMS Development</h4>
                  <hr className="my-2 border-gray-300" />
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:w-1/2">
              {/* Replace with your image */}
              <img src={cmr2} alt="CMS Development Solutions" className="rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="bg-black text-white px-6 py-3 rounded-full transition hover:bg-gray-800">
              HIRE CMS DEVELOPMENT COMPANY
            </button>
          </div>
        </section>
      </div>

      {/* Third Section */}
      <div className="max-w-7xl mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            {/* Replace with your image */}
            <img src={cms1} alt="CMS Solution 1" className="w-full h-auto rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">CMS for Content Creation</h2>
            <p className="text-black">
              Empower your team to create and manage content effortlessly with our intuitive CMS, designed for seamless content creation and editing.
            </p>
            <p className="text-black mt-4">
              Our platform provides a user-friendly interface, allowing your content creators to focus on crafting high-quality content while ensuring smooth collaboration within your team.
            </p>
          </div>

          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            {/* Replace with your image */}
            <img src={cms2} alt="CMS Solution 2" className="w-full h-auto rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Scalable CMS Solutions</h2>
            <p className="text-black">
              Our CMS platforms are built to scale with your business, ensuring seamless growth and expansion without compromising performance.
            </p>
            <p className="text-black mt-4">
              Whether you're running a small blog or managing an enterprise-level content system, our CMS solutions adapt to your specific needs, providing flexibility and efficiency.
            </p>
          </div>

          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            {/* Replace with your image */}
            <img src={cms3} alt="CMS Solution 3" className="w-full h-auto rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Secure CMS for Enterprise</h2>
            <p className="text-black">
              Our CMS solutions provide top-level security to protect sensitive data, ensuring compliance and peace of mind for your enterprise.
            </p>
            <p className="text-black mt-4">
              From user authentication to data encryption, our CMS platforms offer built-in security features designed to safeguard your organization's digital content and assets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            {/* Replace with your image */}
            <img src={cms4} alt="CMS Solution 4" className="w-full h-auto rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Advanced Analytics Integration</h2>
            <p className="text-black">
              Integrate advanced analytics into your CMS to gain real-time insights into user engagement, content performance, and site metrics.
            </p>
            <p className="text-black mt-4">
              Leverage data-driven decisions to optimize content strategies and improve your audience's experience with actionable insights.
            </p>
          </div>

          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            {/* Replace with your image */}
            <img src={cms5} alt="CMS Solution 5" className="w-full h-auto rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Mobile-Friendly CMS</h2>
            <p className="text-black">
              Make your content management system accessible from anywhere with our mobile-friendly CMS platform.
            </p>
            <p className="text-black mt-4">
              Manage content on-the-go with responsive design and mobile-specific features that ensure smooth operation across all devices.
            </p>
          </div>

          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg flex flex-col items-center sm:items-start">
            {/* Replace with your image */}
            <img src={cms6} alt="CMS Solution 6" className="w-full h-auto rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Multi-Language CMS Support</h2>
            <p className="text-black">
              Reach a global audience with a CMS that supports multiple languages and localization features.
            </p>
            <p className="text-black mt-4">
              Our multi-language support ensures that your content is accessible to a diverse audience, making your website truly international.
            </p>
          </div>
        </div>

      <div className="mt-10 text-center">
  <Link
    to="/contactsection"
    className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium text-lg sm:text-xl hover:bg-gray-800"
  >
    Get Started with Our CMS Solutions
  </Link>
</div>
      </div>
    </>
  );
};


const CMS = () => {
  return (
    <>
      <CMSSolutions/>
      <CMSDevelopment/>
    </>
  )
}

export default CMS
