import React, { useState } from "react";
import { Check } from "lucide-react"; // Optional: install with `npm install lucide-react`
import SEO from '../../components/SEO';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Contact' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">Thank you</h1>
        <Check className="w-16 h-16 text-blue-600 mb-6" strokeWidth={3} />
        <p className="text-gray-600 mb-8 max-w-md">
          Thanks for contacting us! We will get in touch with you as soon as possible.
        </p>
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition"
        >
          Back to homepage
        </a>
      </div>
    );
  }

  return (
    <section className="w-full py-16 px-6 md:px-12">
      <SEO
        title="Contact Ptek - Start Your Software Development Project"
        description="Get in touch with Ptek to discuss your custom software, mobile app, AI, or digital transformation project. Let us help you build something exceptional."
        url="/contactsection"
        keywords="contact Ptek, software development inquiry, project consultation, tech partner"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Form Side */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
            Looking for a tech partner?
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-4">
            We are the best choice on the market.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Connect with us, detail your needs, and we’ll analyse the requirements to craft
            a custom proposal to make it happen. <br />
            <strong>Get in touch to begin!</strong>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name *</label>
                <input
                  type="text"
                  placeholder=""
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company name</label>
                <input
                  type="text"
                  placeholder=". "
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  placeholder=""
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  How did you discover us?
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-blue-500"
                >
                  <option>Search Engine (Google, Yahoo etc.)</option>
                  <option>Recommended by friend or colleague</option>
                  <option>Social Media</option>
                  <option>Clutch</option>
                  <option>ChatGPT</option>
                  <option>DesignRush</option>
                  <option>GoodFirm</option>
                  <option>Freelancer</option>
                  <option>TechBehemoths</option>
                  <option>TheManifest</option>
                  <option>Software world</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Describe your project *
              </label>
              <textarea
                rows={4}
                required
                placeholder="E.g. I want to build a mobile app for iOS and Android..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-blue-500"
              />
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" required className="mt-1" />
              <p className="text-sm text-gray-600">
                I allow Ptek to send me an email and discuss the requirements of my project *
              </p>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send request
            </button>
          </form>
        </div>

        {/* Right Info Side */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 py-8 px-4">
          <img
            src="/ptek-logo.png"
            alt="PTEK Logo"
            className="w-full max-w-[180px] object-contain"
          />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Powering Innovation with PTEK
          </h2>
          <p className="max-w-lg text-gray-700 text-base md:text-lg">
            At PTEK, we specialize in building future-ready digital solutions. Our team of expert
            full-stack developers, UI/UX designers, and product strategists collaborate to deliver
            scalable web, mobile, XR/VR, and AI-driven applications. <br />
            Trusted by global partners, we embrace Agile methodologies to drive high-quality
            software development at speed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
