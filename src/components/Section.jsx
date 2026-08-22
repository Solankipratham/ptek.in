import React from 'react'

const Section = () => {
  return (
     <div className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Cross-Platform and Native Development
          </h2>
          <p className="text-gray-600 mb-4">
            Our mastery in mobile software development spans across the utilization of
            cutting-edge cross-platform technologies such as Unity, React Native, and Flutter,
            without compromising on our ability to deliver pristine native applications, or
            modules that we bridge to other apps, like Netflix does.
          </p>
          <p className="text-gray-600 mb-6">
            We recognize the unique demands of every project and accordingly choose the most
            suitable technology to ensure optimal performance, seamless user experience, and
            maximized cost efficiency. Whether it's crafting visually stunning, interactive mobile
            games using Unity, or harnessing the power of React Native and Flutter for rapid,
            scalable application development, or even diving deep into native coding for enhanced
            performance and integration, we are equipped to transform your vision into a robust,
            user-centric mobile application.
          </p>

          {/* App Store Buttons */}
          <div className="flex space-x-4 mt-6">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-12"
            />
          </div>
        </div>

        {/* Right Video Section */}
        <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
          {/* Video 1 */}
          <video
            src="/AppiOS-insurance.mp4"
            className="rounded-2xl border shadow-lg w-[180px] h-[360px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Video 2 */}
          <video
            src="/AppAndroid-insurance.mp4"
            className="rounded-2xl border shadow-lg w-[180px] h-[360px] object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      <div className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/DashboardCrud-min.png"
            alt="Quality Assurance Graphic"
            className="w-full max-w-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Assuring unmatched quality in every app
          </h2>
          <p className="text-gray-600 mb-4">
            At Ptek, we embrace a 'quality-first' approach to software development.
            Our rigorous testing across multiple environments ensures that your software stands
            firm and performs optimally under diverse circumstances. Each line of code, every
            new feature, and each bug fix is meticulously tested through a stringent process.
          </p>
          <p className="text-gray-600 mb-4">
            Our Quality Assurance (QA) team, skilled in detecting bugs and regressions, also
            utilizes automated tests to enhance reliability. Our QA engineers strive to ensure
            the impeccable quality of your product by deeply understanding your business values.
            Whether it's a nascent product concept, an ongoing development, or a launched
            product, our quality assurance services are designed to fortify your success.
          </p>
          <p className="text-gray-600 mb-6">
            Our QA process extends beyond formulating and executing tests, involving the
            establishment of robust procedures and their automation.
          </p>

          <a
            href="#"
            className="text-blue-600 font-medium hover:underline inline-flex items-center space-x-1"
          >
            <span>Click here to delve into quality assurance</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>.  
      <div className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      {/* CRUD Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Text Left */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Privileges based administration tools allowing all CRUD operations
          </h2>
          <p className="text-gray-600 text-sm">
            Manage your database entities with unparalleled ease using our intuitively designed web administration panels.
            Whether you require an entirely new development or need an integration into an existing system, Ptekhas the expertise to deliver.
          </p>
          <p className="text-gray-600 text-sm">
            Our panels provide robust CRUD (Create, Read, Update, Delete) operations, giving you full control and streamlined management of your database entities.
            Make complex tasks straightforward with our reliable and user-friendly administrative solutions.
          </p>
          <button className="mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
            Get a quote
          </button>
        </div>

        {/* Image Right */}
        <div className="lg:w-1/2">
          <img src="/analythics-graph-min-768x552.png" alt="Admin Panel" className="rounded-lg shadow-md w-full" />
        </div>
      </div>

      {/* Analytics Section */}
      <div className="mt-24 flex flex-col lg:flex-row items-start gap-12">
        {/* Chart + Logos */}
        <div className="lg:w-1/2 space-y-6">
          <img src="/getty-images-hgoJwkl49dc-unsplash.jpg" alt="Analytics Chart" className="rounded-lg shadow-md w-full" />
         
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Data analytics and tracking: unleashing insights from day 0
          </h2>

          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <span className="text-blue-600 font-semibold">01. Goals definition</span>
              <p>
                Jumpstart your data analytics journey with our expertise in integrating the best third-party tools. We’ll equip your platform with powerful analytics tools that align with your unique requirements, enabling the efficient tracking and analysis of user data from the start.
              </p>
            </div>

            <div>
              <span className="text-blue-600 font-semibold">02. Conversion goal definition</span>
              <p>
                Maximize your platform’s performance by defining clear and easurable conversion goals. Our team assists in establishing tangible objectives, providing clarity on what drives user engagement and conversions.
              </p>
            </div>

            <div>
              <span className="text-blue-600 font-semibold">03. Data tracking and monitoring</span>
              <p>
                Ensure constant vigilance over your platform’s performance with our robust data tracking and monitoring services. Gain real-time insights into user behavior and interaction.
              </p>
            </div>

            <div>
              <span className="text-blue-600 font-semibold">04. In-depth data analysis</span>
              <p>
                Dive into your data with our comprehensive analytics services. Convert raw data into actionable insights, helping you understand your users better and uncover opportunities for growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Section
