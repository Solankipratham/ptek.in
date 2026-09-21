import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="relative bg-[#135293] text-white clip-footer pt-10">
                {/* Newsletter Section */}
                <div className="relative py-16 px-6 lg:px-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-70 blur-2xl z-0" />
                    <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white/10 backdrop-blur-md rounded-xl p-10 shadow-lg">
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-3">Stay Updated</h4>
                            <p className="text-blue-100 text-sm">
                                Subscribe to our newsletter to receive the latest updates on tech innovations, services, and exclusive offers.
                            </p>
                        </div>
                        <form className="flex flex-col sm:flex-row gap-4 w-full md:justify-end">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Email for newsletter"
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
                        <Link to="/">
                            <img src="/ptek-logo.png" alt="Ptek Logo" className="h-10 w-auto mb-4" />
                        </Link>
                        <p className="text-blue-100 text-sm leading-relaxed">
                            Empowering businesses with cutting-edge technology solutions tailored for growth and success. International, award-winning software development company.
                        </p>
                        <div className="flex gap-4 mt-6 text-white text-xl">
                            <a href="https://www.instagram.com/ptek" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300 transition">
                                <FaInstagram />
                            </a>
                            <a href="https://twitter.com/ptek" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300 transition">
                                <FaTwitter />
                            </a>
                            <a href="https://www.linkedin.com/company/ptek" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300 transition">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://www.youtube.com/@ptek" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gray-300 transition">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/Recruit-Training" className="hover:text-gray-300 transition">Services</Link></li>
                            <li><Link to="/about-us" className="hover:text-gray-300 transition">About</Link></li>
                            <li><Link to="/portfolio" className="hover:text-gray-300 transition">Portfolio</Link></li>
                            <li><Link to="/case-studies" className="hover:text-gray-300 transition">Case Studies</Link></li>
                            <li><Link to="/blog" className="hover:text-gray-300 transition">Blog</Link></li>
                            <li><Link to="/contactsection" className="hover:text-gray-300 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/custom-software" className="hover:text-gray-300 transition">Custom Software</Link></li>
                            <li><Link to="/websass" className="hover:text-gray-300 transition">Web SaaS Platform</Link></li>
                            <li><Link to="/android-ios" className="hover:text-gray-300 transition">Mobile Apps</Link></li>
                            <li><Link to="/ui-uxDesign" className="hover:text-gray-300 transition">UI/UX Design</Link></li>
                            <li><Link to="/artifical-intelligence" className="hover:text-gray-300 transition">AI Solutions</Link></li>
                            <li><Link to="/vrdeployement" className="hover:text-gray-300 transition">VR/AR/MR Development</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Social */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                        <p className="text-blue-100 text-sm mb-4">
                            Ready to start your project? Get in touch with our team.
                        </p>
                        <Link to="/contactsection" className="inline-block bg-white text-[#135293] font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition text-sm mb-6">
                            Get in Touch
                        </Link>
                        <div>
                            <p className="text-blue-100 text-sm mb-2">Follow us on social media:</p>
                            <div className="flex gap-4 text-white text-xl">
                                <a href="https://www.instagram.com/ptek" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300 transition">
                                    <FaInstagram />
                                </a>
                                <a href="https://twitter.com/ptek" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300 transition">
                                    <FaTwitter />
                                </a>
                                <a href="https://www.linkedin.com/company/ptek" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300 transition">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://www.youtube.com/@ptek" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gray-300 transition">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/20 pt-6 pb-6 text-center text-white/80 text-sm px-6">
                    <p>&copy; {new Date().getFullYear()} Ptek. All rights reserved.</p>
                    <p className="mt-1 text-white/60 text-xs">
                        Ptek SRL &mdash; International Software Development Company
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
