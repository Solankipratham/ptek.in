import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const partners = [
        '/anonymous-medical-researcher-working-modern-260nw-2615909777.webp',
        '/ptek-logo.png',
        '/ptek-logo.png',
        '/ptek-logo.png',
        '/ptek-logo.png',
        '/ptek-logo.png',
    ];

    return (
        <>
            <footer className="relative bg-[#135293] text-white clip-footer pt-10">
                {/* Trusted By Section */}
                {/* <div className="text-center mb-12 px-6 mt-20">
                    <h3 className="text-lg font-semibold tracking-wide uppercase text-blue-100 mb-2">
                        Trusted By Global Brands
                    </h3>
                    {/* <p className="text-sm text-blue-200">
                        Building future-ready solutions for startups, enterprises, and everything in between.
                    </p> */}
                {/* </div> */} 
                {/* Partner Marquee Section
                <div className="overflow-hidden relative w-full mt-20 mb-10">
                    <div className="whitespace-nowrap animate-partner-scroll">
                        <div className="inline-flex gap-12 px-6">
                            {partners.concat(partners).map((logo, index) => (
                                <div key={index} className="h-12 w-28 flex items-center justify-center">
                                    <img
                                        src={logo}
                                        alt={`Partner ${index + 1}`}
                                        className="max-h-full max-w-full object-contain  transition duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}



                {/* Newsletter Section */}
                <div className="relative py-16 px-6 lg:px-20  overflow-hidden">
                    {/* Gradient Overlay for Style */}
                    <div className="absolute inset-0  opacity-70 blur-2xl z-0" />

                    <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white/10 backdrop-blur-md rounded-xl p-10 shadow-lg">
                        {/* Left Content */}
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-3">Stay Updated</h4>
                            <p className="text-blue-100 text-sm">
                                Subscribe to our newsletter to receive the latest updates on tech innovations, services, and exclusive offers.
                            </p>
                        </div>

                        {/* Right Content - Form */}
                        <form className="flex flex-col sm:flex-row gap-4 w-full md:justify-end">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-5 py-3 rounded-md bg-white/20 text-white placeholder:text-blue-100 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full sm:w-auto flex-1 transition"
                            />
                            <button
                                type="submit"
                                className="bg-yellow-400 cursor-pointer text-[#135293] font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition shadow-md"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>


                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 lg:px-20 pt-16 pb-10">
                    {/* Column 1: Logo and Description */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Ptek</h2>
                        <p>
                            Empowering businesses with cutting-edge technology solutions tailored for growth and success.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                            <li><a href="#about" className="hover:text-gray-300">About</a></li>
                            <li><a href="#industry" className="hover:text-gray-300">Industry</a></li>
                            <li><a href="#solutions" className="hover:text-gray-300">Solutions</a></li>
                            <li><a href="#career" className="hover:text-gray-300">Careers</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Support & Resources */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#faq" className="hover:text-gray-300">FAQs</a></li>
                            <li><a href="#terms" className="hover:text-gray-300">Terms & Conditions</a></li>
                            <li><a href="#privacy" className="hover:text-gray-300">Privacy Policy</a></li>
                            <li><a href="#support" className="hover:text-gray-300">Help Center</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    
              <div className="p-2rounded-lg max-w-md font-semibold  "> Network
  <p className="text-white  text-base font-medium mt-2">
    Sign up to <span className="font-semibold">Ptek Global</span> weekly newsletter to get the latest updates.
  </p>

  <div className="flex items-center mt-4">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-400 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
    <button className="ml-3 px-6 py-2 bg-white text-black  rounded-full font-semibold hover:bg-white  transition">
      SEND
    </button>
  </div>

  <div className="flex gap-5 mt-6 text-white  text-xl">
    <a href="#" aria-label="Instagram" className="hover:text-gray-500">
      <FaInstagram />
    </a>
    <a href="#" aria-label="Twitter" className="hover:text-gray-500">
      <FaTwitter />
    </a>
    <a href="#" aria-label="LinkedIn" className="hover:text-gray-500">
      <FaLinkedinIn />
    </a>
    <a href="#" aria-label="YouTube" className="hover:text-gray-500">
      <FaYoutube />
    </a>
  </div>
</div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white pt-6 text-center text-white text-sm px-6 mb-10">
                    © {new Date().getFullYear()} Ptek All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default Footer;
