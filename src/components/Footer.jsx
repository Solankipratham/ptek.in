import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-extrabold text-white tracking-tight">Ptek</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              We design and build scalable digital products — from MVPs to enterprise platforms.
              Full-stack web & mobile development with React, Node.js, and modern cloud infrastructure.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaLinkedinIn className="w-4 h-4" />, href: 'https://www.linkedin.com/company/ptek', label: 'LinkedIn' },
                { icon: <FaGithub className="w-4 h-4" />, href: 'https://github.com/ptek', label: 'GitHub' },
                { icon: <FaTwitter className="w-4 h-4" />, href: 'https://twitter.com/ptek', label: 'Twitter' },
                { icon: <FaInstagram className="w-4 h-4" />, href: 'https://www.instagram.com/ptek', label: 'Instagram' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', link: '/about-us' },
                { label: 'Work', link: '/portfolio' },
                { label: 'Case Studies', link: '/case-studies' },
                { label: 'Blog', link: '/blog' },
                { label: 'Contact', link: '/contactsection' },
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.link} className="text-sm hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Web Development', link: '/custom-software' },
                { label: 'Mobile Apps', link: '/android-ios' },
                { label: 'UI/UX Design', link: '/ui-uxDesign' },
                { label: 'SaaS Platforms', link: '/websass' },
                { label: 'AI Solutions', link: '/artifical-intelligence' },
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.link} className="text-sm hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
            <p className="text-sm mb-4 leading-relaxed">
              Ready to start your project? Let's talk about your vision and how we can bring it to life.
            </p>
            <Link
              to="/contactsection"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Ptek. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
