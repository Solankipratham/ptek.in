import React from 'react'
import Section from '../../components/Section'

const AndroidiOSDevelopmnet = () => {
  return (
   <div className="bg-white text-gray-800">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div>
          <p className="text-sm text-gray-400 mb-2">Thinking mobile-first?</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Expert iOS, Android &<br />
            Cross-Platform App<br />
            Development Services
          </h1>
          <p className="text-base text-gray-600 mb-6">
            At Ptek, we transform your mobile aspirations into digital excellence.
            We specialize in iOS, Android, and cross-platform development, leveraging the latest
            technologies and agile approaches. From utility tools to robust mobile applications and
            intricate SaaS platforms, we're committed to precision and innovation. Embark on a
            transformative digital journey with us and redefine mobile possibilities.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Start your mobile journey
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
         <video
  src="/MOBILEhero (1).mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full max-w-md "
></video>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            50+ Android and iOS apps developed in 10 years
          </h2> */}
          {/* <p className="text-gray-600 mb-10 max-w-3xl">
            With a decade of unparalleled experience, we stand tall as the creators behind 50+
            extraordinary Android and iOS apps. Our track record shines with bespoke solutions
            crafted for diverse sectors, including Banking, Insurance, Neuroscience, Construction,
            Real Estate, Education, Healthcare, and more. Our exceptional expertise in software
            development and digital tools is proven and ready to transform your industry.
          </p> */}

          {/* Icons List */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <img src="/icons/real-estate.svg" alt="Real Estate" className="w-6 h-6" />
              <span>Real Estate</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/icons/neuroscience.svg" alt="Neuroscience" className="w-6 h-6" />
              <span>Neuroscience</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/icons/banking.svg" alt="Banking" className="w-6 h-6" />
              <span>Banking</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/icons/insurance.svg" alt="Insurance" className="w-6 h-6" />
              <span>Insurance</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/icons/construction.svg" alt="Construction" className="w-6 h-6" />
              <span>Constructions</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/icons/education.svg" alt="Education" className="w-6 h-6" />
              <span>Education</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/icons/workflow.svg" alt="Workflow" className="w-6 h-6" />
              <span>Workflow Management</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/icons/healthcare.svg" alt="Healthcare" className="w-6 h-6" />
              <span>Healthcare</span>
            </div>
          </div> */}
        </div>
        <Section/>
      </div>

    </div>
  )
}

export default AndroidiOSDevelopmnet
