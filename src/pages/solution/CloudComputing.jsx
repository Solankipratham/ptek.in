import React from "react";
import { FaCloud, FaLock, FaDatabase, FaServer, FaShieldAlt, FaCogs } from "react-icons/fa";
import { MdCloudQueue } from "react-icons/md";
import HeroCloud from "/Development-team-augmentation-service-min.jpg"
import cloud from "/cloudComputer.png"
import { Link } from "react-router-dom";

const CloudDevelopersSection = () => {
  return (
    <div className="min-h-screen w-full ">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 space-y-8">
              <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                  Hire Experienced 
              </span>{' '}
            Cloud Application Developers
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              PTEK's expert developers bring wealth of knowledge and experience in building 
              custom cloud applications from scratch using best practices, or modernizing 
              existing cloud apps to fit your unique business needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
  <a
    href="#contactsection"
    className="bg-black text-white font-medium rounded-lg px-8 py-4 text-center transition-all duration-300 hover:scale-105 shadow-lg"
  >
    Start Your Project →
  </a>
</div>
          </div>

          {/* Right side - Cloud development showcase */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-2xl overflow-hidden ">
              <img
                src={HeroCloud}
                alt="Cloud application development dashboard"
                className="w-full h-full object-cover"
              />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const services = [
  {
    icon: <FaCloud className="text-blue-500 text-5xl mb-4" />,
    title: "Cloud-Native Application Development",
    description:
      "We develop cloud-native apps with domain-driven designs using powerful DevOps tools, enabling automated management experiences across public, private, hybrid, and multi-cloud computing environments."
  },
  {
    icon: <FaLock className="text-blue-500 text-5xl mb-4" />,
    title: "Private Cloud App Development Solutions",
    description:
      "We create custom-tailored private cloud apps for businesses that require the same flexibility & openness as a public cloud solution while retaining complete control over large datasets & mission-critical business workflows."
  },
  {
    icon: <MdCloudQueue className="text-blue-500 text-5xl mb-4" />,
    title: "Hybrid & Multi Cloud App Development",
    description:
      "Our developers apply our expertise in cloud computing to create robust multi-cloud applications, designed for businesses that require the use of several cloud services to promote flexibility, performance optimization, and cost control."
  }
];

const additionalServices = [
  {
    icon: <FaCloud className="text-blue-500 text-5xl mb-4" />,
    title: "Google Cloud Solutions",
    description:
      "We integrate your current business software with Google Cloud-based applications to increase your entire IT infrastructure, promoting additional robustness, reliability, and cost-efficiency."
  },
  {
    icon: <FaShieldAlt className="text-blue-500 text-5xl mb-4" />,
    title: "Cloud Security Services",
    description:
      "We implement reliable security protocols like SSL/TLS, end-to-end encryption, 2F authentication, private keys, API credentials, password protection, and so much more."
  },
  {
    icon: <FaDatabase className="text-blue-500 text-5xl mb-4" />,
    title: "Cloud Backup Services",
    description:
      "We develop all-in-one cloud-based data protection, backup, and recovery solutions housed in proprietary off-site data centers, colocation facilities, or a hybrid combination of servers."
  }
];

const CloudAppDevSection = () => {
  return (
    <div>
      <section className="flex flex-col lg:flex-row items-center gap-8 px-10 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-black shadow rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center lg:w-1/2">
          <img
            src={cloud}
            alt="Cloud Application Development"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="text-center py-10 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">
          PTEK’s Cloud Application Development Services
        </h2>
        <p className="text-lg mb-6">
          Our cloud app development process helps businesses of all sizes unlock their
          business workflow’s full potential by offering our unbeatable cloud app
          development services.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-10">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="text-black shadow rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};



const CloudAppServices = () => {
  const services = [
    {
      icon: <FaCloud className="text-blue-500 text-5xl mb-4" />,
      title: "Google Cloud Solutions",
      description:
        "We integrate your current business software with Google Cloud-based applications to increase your entire IT infrastructure, promoting additional robustness, reliability, and cost-efficiency.",
    },
    {
      icon: <FaCogs className="text-blue-500 text-5xl mb-4" />,
      title: "Cloud Security Services",
      description:
        "We implement reliable security protocols like SSL/TLS, end-to-end encryption, 2F authentication, private keys, API credentials, password protection, and so much more.",
    },
    {
      icon: <FaLock className="text-blue-500 text-5xl mb-4" />,
      title: "Cloud Backup Services",
      description:
        "We develop all-in-one cloud-based data protection, backup, and recovery solutions housed in proprietary off-site data centers, colocation facilities, or a hybrid combination of servers.",
    },
  ];

  return (
    <section className="text-center py-10 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">
        PTEK’s Cloud Application Development Services
      </h2>
      <p className="text-lg mb-6 px-4 sm:px-0">
        Our cloud app development process helps businesses of all sizes unlock
        their business workflow’s full potential by offering our unbeatable
        cloud app development services.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="text-black shadow rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


const CloudServiceComparison = () => {
  return (
    <section className="py-10 bg-white">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">
          Cloud Service Comparison
        </h1>
        <p className="text-lg text-black mt-2">
          Compare top cloud providers to choose the best for your needs.
        </p>
      </header>

      <div className="grid md:grid-cols-3 p-10 gap-8">
        {/* AWS Card */}
        <div className="bg-[#f5f7fa] rounded-lg shadow-lg p-4">
          <div className="text-center flex items-center gap-x-5 text-7xl justify-center mb-2">
            {/* AWS Icon */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z" />
            </svg>
            <h2 className="text-2xl font-semibold text-black">AWS</h2>
          </div>
          <p className="text-black mb-4">
            Amazon Web Services provides on-demand cloud computing platforms and APIs.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-black">
            <li>Compute</li>
            <li>Storage</li>
            <li>Networking</li>
            <li>AI & ML</li>
          </ul>
        </div>

        {/* Azure Card */}
        <div className="bg-[#f5f7fa] rounded-lg shadow-lg p-4">
          <div className="text-center flex items-center gap-x-5 text-7xl justify-center mb-2">
            {/* Azure Icon */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.3702 13.6799L11.3702 1.67989C11.3006 1.47291 11.1652 1.29438 10.9846 1.17159C10.804 1.0488 10.5882 0.988513 10.3702 0.999896H5.63017C5.42052 0.999354 5.21598 1.0647 5.04551 1.18672C4.87504 1.30875 4.74724 1.48127 4.68015 1.67989L0.630165 13.6799C0.577646 13.8346 0.56382 13.9998 0.589943 14.1611C0.616066 14.3225 0.681335 14.4749 0.780007 14.6052C0.878678 14.7354 1.00778 14.8395 1.15598 14.9083C1.30419 14.9771 1.46699 15.0086 1.63017 14.9999H4.56016C4.76809 14.9984 4.97035 14.932 5.13883 14.8101C5.30731 14.6883 5.43363 14.5169 5.50016 14.3199L6.11015 12.5399L9.11015 14.8099C9.28448 14.9362 9.49495 15.0028 9.71018 14.9999H14.3902C14.5517 15.0052 14.7121 14.9712 14.8576 14.901C15.0032 14.8307 15.1295 14.7263 15.2259 14.5965C15.3222 14.4668 15.3856 14.3156 15.4107 14.156C15.4359 13.9963 15.422 13.833 15.3702 13.6799ZM9.75016 14.3399C9.67748 14.3399 9.60693 14.3153 9.55015 14.2699L3.90018 10.0799L3.81016 10.0099H6.81016L6.89017 9.79988L7.89017 7.26988L10.1302 13.8999C10.1482 13.9555 10.1515 14.0148 10.1399 14.072C10.1283 14.1293 10.1022 14.1826 10.064 14.2269C10.0258 14.2711 9.97689 14.3047 9.92191 14.3245C9.86694 14.3443 9.80778 14.3496 9.75016 14.3399V14.3399ZM14.4201 14.3399H10.7002C10.7749 14.1262 10.7749 13.8935 10.7002 13.6799L6.65018 1.67989H10.3702C10.4408 1.68024 10.5095 1.70258 10.5669 1.74379C10.6242 1.78501 10.6673 1.84308 10.6902 1.9099L14.7402 13.9099C14.7538 13.9597 14.756 14.012 14.7464 14.0628C14.7369 14.1136 14.7159 14.1615 14.6851 14.203C14.6542 14.2444 14.6144 14.2783 14.5685 14.302C14.5226 14.3257 14.4718 14.3387 14.4201 14.3399V14.3399Z" />
            </svg>
            <h2 className="text-2xl font-semibold text-black">Azure</h2>
          </div>
          <p className="text-black mb-4">
            Microsoft Azure offers a variety of cloud services including hosting, AI, and databases.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-black">
            <li>VMs</li>
            <li>Databases</li>
            <li>Serverless</li>
            <li>Security</li>
          </ul>
        </div>

        {/* Google Cloud Card */}
        <div className="bg-[#f5f7fa] rounded-lg shadow-lg p-4">
          <div className="text-center flex items-center gap-x-5 text-7xl justify-center mb-2">
            {/* Google Cloud Icon */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z" />
            </svg>
            <h2 className="text-2xl font-semibold text-black">Google Cloud</h2>
          </div>
          <p className="text-black mb-4">
            Google Cloud provides cloud storage, data analytics, and machine learning services.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-black">
            <li>Big Data</li>
            <li>AI</li>
            <li>Cloud Storage</li>
            <li>Kubernetes</li>
          </ul>
        </div>
      </div>
    </section>
  );
};




const CloudComputing = () => {
  return (
    <>
      <CloudDevelopersSection/>
      <CloudAppDevSection/>
      <CloudAppServices/>
      <CloudServiceComparison/>
    </>
  )
}

export default CloudComputing
