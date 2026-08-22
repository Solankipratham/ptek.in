import { 
  FaPhone, FaChartBar, FaClipboardList, FaEnvelope, FaProjectDiagram, 
  FaFileAlt, FaChartLine, FaShoppingCart, FaRobot, FaUserCog, 
  FaComments, FaSmile, FaEnvelopeOpenText, FaTags
} from 'react-icons/fa';
import HeroImg from "/Presales-Bidding-Home.png"
import { FiArrowRight } from 'react-icons/fi';
import software from "/software.png"
import crm from "/CRM.png"
import { Link } from "react-router-dom";

const CRMSolutions = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center  px-4 sm:px-8 lg:px-16 py-10 sm:py-20">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Text Content */}
              <div className="lg:w-1/2">
                  <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                     CRM DEVELOPMENT 
                  </span>{' '}
                 SERVICES
                </h1>
                <p className="text-gray-700 text-xl sm:text-2xl pt-6 pb-8 leading-relaxed">
                  Unleashing the Power of AI for Custom CRM Solutions
                </p>
               <Link
  to="/contactsection"
  className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-medium text-center transition-transform duration-300 transform hover:scale-105"
>
  Start Your Project →
</Link>
              </div>
      
              {/* Image */}
              <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                <img 
                  src={HeroImg}
                  alt="Blockchain technology visualization"
                  className=" object-cover w-full h-auto max-h-[500px]"
                />
              </div>
            </div>
          </div>

      {/* CRM Services Section */}
      <div className="w-full">
        <section className="py-12 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Custom CRM Development Services</h2>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto mb-10">
            Chetu develops custom-tailored CRM systems, implementing application development software features & functionalities that drive businesses forward.
          </p>
        </section>

        {/* CRM Software Services */}
        <div className="py-12 px-5">
          <h1 className="text-3xl font-bold text-center mb-4">CRM Software Services</h1>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Chetu provides <a href="#" className="text-blue-500 underline">custom CRM software services</a> focused on automating sales, marketing, and customer service business processes for <span className="font-semibold">healthcare, banking, real estate</span>, and other industries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="flex items-start">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-blue-500 w-10 h-10 mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 0 1 144-53.5L537 318.9a32.05 32.05 0 0 0 0 45.3l124.5 124.5a32.05 32.05 0 0 0 45.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z"></path>
              </svg>
              <div>
                <h2 className="text-lg font-semibold mb-2">Industry Specific CRM</h2>
                <p className="text-gray-600">Overcome unique challenges with a customizable CRM that meets needs across finance, e-commerce, supply chain industries, and more, maintaining consistent alignment with industry regulations to streamline operations and drive success.</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-blue-500 w-10 h-10 mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"></path>
              </svg>
              <div>
                <h2 className="text-lg font-semibold mb-2">CRM Mobile App Development</h2>
                <p className="text-gray-600">Engineer custom mobile CRM applications, allowing users to view calendars, check & create emails, review account updates, join a video conference call, view dashboards & reports, and so much more to help businesses close more deals and provide faster support.</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-blue-500 w-10 h-10 mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 0 1-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 0 1 140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0 1 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z"></path>
              </svg>
              <div>
                <h2 className="text-lg font-semibold mb-2">Cloud Based CRM Software</h2>
                <p className="text-gray-600">Develop custom cloud CRM solutions and provide hassle-free cloud-based CRM system installation, enabling round-the-clock accessibility to all essential client information both in the office and remotely so that you're always connected to your customers.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto mb-12">
            <p className="text-gray-700 max-w-lg">
              Our CRM software services help organizations with industry-specific needs, offering unparalleled CRM customization and integration. Whether it's for healthcare, e-commerce, or real estate, we ensure your business stays ahead.
            </p>
            <img src={software} alt="CRM Desktop" className="w-96 mt-6 lg:mt-0" />
          </div>

          <div className="text-center">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              DEVELOP CUSTOM CRM SOLUTIONS
            </button>
          </div>
        </div>

        {/* CRM Support and Maintenance */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-6">CRM Support and Maintenance</h2>
          <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
            Our CRM maintenance services include fixing bugs, managing data, performing system updates, and ensuring the security, integration, and performance monitoring of your CRM database. Our expertise comprises a wide range of CRM platforms, making our support services unparalleled.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="flex items-start">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-blue-500 w-10 h-10 mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 272a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path>
              </svg>
              <div>
                <h3 className="text-lg font-semibold mb-2">CRM System Support</h3>
                <p className="text-gray-600">At Chetu, we recognize the indispensable role that seamless CRM operation plays in the success of your business. Our expert team excels in troubleshooting and resolving issues, leaving no room for uncertainties that could disrupt your daily operations.</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-blue-500 w-10 h-10 mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
              </svg>
              <div>
                <h3 className="text-lg font-semibold mb-2">Customized CRM Solutions</h3>
                <p className="text-gray-600">Our CRM maintenance services go beyond just fixing bugs. We offer extended support to ensure long-term application reliability. We make sure your CRM system remains resilient and secure by providing security updates and technology upgrades.</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-blue-500 w-10 h-10 mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
              <div>
                <h3 className="text-lg font-semibold mb-2">CRM Integration & Migration</h3>
                <p className="text-gray-600">Chetu specializes in CRM implementation, data migration, system auditing, and server administration, ensuring your CRM software stays up-to-date and seamlessly integrated with your other business systems.</p>
              </div>
            </div>

            <div className="flex items-start">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-blue-500 w-10 h-10 mr-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
              <div>
                <h3 className="text-lg font-semibold mb-2">Reliable CRM Support Services</h3>
                <p className="text-gray-600">Exceptional service is at the core of our CRM maintenance and support services. With our advanced ticketing system and transparent communication, your queries and concerns are addressed promptly.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              HIRE CRM CONSULTING SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* CRM Features Section */}
      <section className="py-12 px-6 grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaPhone className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Call Center Integrations</h3>
            <p className="text-gray-600">Incorporate tools like Twilio and RingCentral for scheduling, routing, and recording, reducing wait times and enhancing customer experience.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaChartBar className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Sales Management</h3>
            <p className="text-gray-600">Integrate third-party apps and plugins for accurate sales data directly in your custom CRM, enabling better sales decisions.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaClipboardList className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Opportunity Management</h3>
            <p className="text-gray-600">View critical details like deal stages and necessary actions for closing deals in real-time.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaChartBar className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Lead Capture</h3>
            <p className="text-gray-600">Gain visibility and control of marketing campaigns, enabling successful lead management from capture to close.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaEnvelope className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Email Integrations</h3>
            <p className="text-gray-600">Seamlessly integrate email tools like Outlook or Gmail to enable full visibility of emails, calendars, and more.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaProjectDiagram className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Workflow Management</h3>
            <p className="text-gray-600">Automate tasks with drag-and-drop tools to assign tasks, approve deals, and generate email alerts.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaFileAlt className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Reports & Dashboards</h3>
            <p className="text-gray-600">Create customized reports to track leads, conversion rates, and other metrics in real-time.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaChartLine className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Sales Forecasting</h3>
            <p className="text-gray-600">Use pipeline data to anticipate market trends and predict future sales for better decision-making.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <img src={crm} alt="CRM Software Dashboard" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center">
        <button className="bg-black text-white px-6 py-3 rounded-full transition hover:bg-gray-800">
          HIRE CRM SOFTWARE DEVELOPERS
        </button>
      </section>

      {/* AI-Powered CRM Section */}
      <div className="py-10 px-5 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">AI-Powered CRM Solutions</h1>
        <p className="text-center text-gray-700 mb-12">
          AI in Customer Relationship Management (CRM) development services can significantly enhance the customer experience and help businesses improve their sales and marketing efforts. CRM artificial intelligence can be integrated into businesses to optimize and improve their work operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <FaChartBar className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Data Analysis</h2>
              <p className="text-gray-600">We can integrate AI to analyze large amounts of customer data collected from social media, email interactions, website behavior, and purchase history. Leveraging machine learning algorithms, AI can identify patterns and trends in data to make predictions about customer behavior, preferences, and churn prediction, enabling businesses to make data-driven decisions. Data entry automation can also help minimize the time spent on repetitive tasks.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <FaUserCog className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Personalization and Customer Segmentation</h2>
              <p className="text-gray-600">Our experts can develop AI that segments customers based on their preferences, behaviors, and demographics. Understanding individual customers' needs enables AI-powered CRM systems to deliver personalized recommendations, offers, and content, leading to higher customer satisfaction and increased engagement.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <FaRobot className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Chatbots and Virtual Assistants</h2>
              <p className="text-gray-600">We can implement AI capabilities to power chatbots and virtual assistants. They can provide instant customer support by handling routine inquiries, addressing frequently asked questions, and resolving simple issues, improving customer service and reducing the workload on human agents, allowing them to focus on more complex tasks.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <FaSmile className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Sentiment Analysis</h2>
              <p className="text-gray-600">Our experts can leverage AI that analyzes customer interactions, emails, chat transcripts, and social media posts to gauge customer sentiment. It helps businesses understand customers' feelings about their products and services, enabling them to respond appropriately to any negative feedback or issues.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <FaEnvelopeOpenText className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Automated Marketing Campaigns</h2>
              <p className="text-gray-600">We can implement AI that automates marketing solutions by optimizing the process of content creation, email campaigns, and social media scheduling. AI analyzes customer behavior to determine the most appropriate time and channel to engage, improving customer retention and churn prediction within the effectiveness of targeted marketing campaigns.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="text-blue-500 mr-4">
              <FaTags className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Cross-Selling and Upselling</h2>
              <p className="text-gray-600">Our experts can develop AI that identifies opportunities for cross-selling and upselling by analyzing customer purchase history and behavior. It allows businesses to offer relevant products and services to customers, increasing revenue and customer loyalty.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Develop CRM with AI
          </button>
        </div>
      </div>
    </div>
  );
};

export default CRMSolutions;