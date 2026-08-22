import {
  FaTools,
  FaCogs,
  FaHeadset,
  FaBrain,
  FaNetworkWired,
  FaChartLine,
  FaDatabase,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaMicrochip,
  FaFileAlt,
  FaBook,
  FaShieldAlt,
} from "react-icons/fa";
import img1 from "/AI Operating Systems & Machine Learning.jpg"
import img2 from "/ai1.webp"
import img3 from "/ai1.webp"
import img4 from "/ai3.webp"
import img5 from "/ai4.webp"

const AISolutions = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen w-full ">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row items-center justify-between">
      {/* Left side - Text content */}
      <div className="w-full md:w-1/2 space-y-6 py-12 md:py-24">
        <h1 className="text-4xl sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Artificial Intelligence Solutions <span className="text-blue-600">for Smarter Businesses</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Transform your business operations with advanced Artificial
          Intelligence (AI) solutions. From predictive analytics to intelligent
          automation, our AI services empower businesses to innovate, optimize,
          and stay ahead in the competitive market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="/contactsection"
            className="bg-black hover:bg-gray-800 text-white font-medium rounded-lg px-8 py-3.5 text-center transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project →
          </a>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <video
  className="w-full max-w-xl h-auto md:h-[32rem] object-contain rounded-xl "
  poster="https://Ptek.com/wp-content/uploads/2023/07/WEBhero.png"
  preload="auto"
  muted
  autoPlay
  loop
  playsInline
  webkit-playsinline="true"
  x5-playsinline="true"
  data-cmp-info="10"
>
  <source src="https://www.Ptek.com/wp-content/uploads/2023/07/WEBhero.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

      </div>
    </div>
  </div>
</div>

      {/* Generative AI Solutions */}
      <div className="bg-gray-50">
        <section className="py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Generative AI Solutions
          </h2>
          <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-10">
            Transform your workflows with our custom generative AI solutions
            tailored to your unique needs. We ensure seamless integration and
            ongoing support for optimal performance.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaTools className="text-blue-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">
                Techniques and Tools Used in Generative AI
              </h3>
              <p className="text-gray-600">
                Leverage tools like GANs and VAEs to enable applications that
                represent content, designs, and more—reaping the rewards of
                cutting-edge technology.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaCogs className="text-blue-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">
                Seamless Generative AI Implementation
              </h3>
              <p className="text-gray-600">
                Implement Generative AI with minimal disruptions. We provide
                scalable solutions while ensuring maximum efficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaHeadset className="text-blue-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">
                Support and Continuous Improvement
              </h3>
              <p className="text-gray-600">
                Receive continuous support to monitor and improve your
                Generative AI models as your needs evolve.
              </p>
            </div>
          </div>
        </section>

        {/* Deep Learning Solutions */}
        <section className="py-12 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center mb-6">
            Deep Learning Solutions
          </h2>
          <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-10">
            Leveraging advanced techniques, we create deep learning models
            designed to deliver the most impactful results for your business.
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaBrain className="text-blue-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">
                Tailored Deep Learning Solutions
              </h3>
              <p className="text-gray-600">
                Develop models tailored to your needs using NLP, Image
                Recognition, and Predictive Analytics.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaNetworkWired className="text-blue-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">
                Leveraging Several Architectures for Maximum Impact
              </h3>
              <p className="text-gray-600">
                Use CNNs, RNNs, and transformers to handle your unique tasks and
                optimize results.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <FaChartLine className="text-blue-500 text-5xl mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">
                Solving Conflicts within Deep Learning
              </h3>
              <p className="text-gray-600">
                Provide post-deployment support and continuous monitoring for a
                reliable deep learning model.
              </p>
            </div>
          </div>
        </section>

        {/* Predictive AI */}
        <section className="py-12 px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Predictive AI</h2>
          <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-10">
            Make informed decisions more effectively with our custom predictive
            AI solutions. Our models leverage robust algorithms for accurate
            forecasting.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="flex items-start">
              <FaChartLine className="text-blue-500 text-4xl mr-4 mt-1" />
              <div>
                <h4 className="text-xl font-bold">
                  Robust Predictive Algorithms for Accurate Forecasting
                </h4>
                <p className="text-gray-600">
                  Use historical data and trends to provide accurate
                  predictions, enabling better business decisions.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <FaDatabase className="text-blue-500 text-4xl mr-4 mt-1" />
              <div>
                <h4 className="text-xl font-bold">
                  Data Preprocessing and Management
                </h4>
                <p className="text-gray-600">
                  Ensure high-quality data with pipelines for cleaning,
                  normalizing, and extracting relevant data.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const AIAdvance = () => {
  return (
    <main className="container mx-auto px-6">
      <div className="bg-white py-12">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Advanced Artificial Intelligence Solutions
          </h1>
          <p className="text-gray-600 md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
            At Chetu, we develop customized AI systems using advanced
            technologies such as machine learning models and natural language
            processing. Our solutions enhance enterprise process management,
            improve efficiency, and elevate customer experiences. We specialize
            in chatbots, predictive analytics, and image recognition. Let us
            transform your business with our AI development services.
          </p>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <FaMicrochip className="text-blue-600" />
                AI Operating Systems & Machine Learning
              </h2>
              <p className="text-gray-600 text-lg">
                Our AI developers utilize operating systems, statistical
                algorithms, and machine learning tools to develop{" "}
                <span className="text-blue-600 font-medium">
                  business intelligence (BI)
                </span>{" "}
                solutions from the ground up or integrate them into pre-existing
                corporate infrastructures. Our AI solutions include creating
                problem-solving tools prioritizing self-service capabilities,
                empowering analysts and top AI firms to identify performance
                gaps, and minimizing their reliance on IT.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <FaBrain className="text-blue-600" />
                Machine Learning
              </h2>
              <p className="text-gray-600 text-lg">
                We program machine learning, deep learning, and other AI-powered
                network operating systems into your current IT infrastructure,
                enabling it to find patterns amongst your business data and
                automate mission-critical processes. We use machine learning
                models in industries as diverse as cybersecurity, healthcare,
                marketing automation, finance, and banking.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <FaRobot className="text-blue-600" />
                Robotic Process Automation (RPA)
              </h2>
              <p className="text-gray-600 text-lg">
                Our AI developers create and integrate{" "}
                <span className="text-blue-600 font-medium">
                  robotic process automation (RPA)
                </span>{" "}
                programs to streamline workflows, including extracting
                structured & semi-structured data from documents, copying &
                pasting data, moving files & folders, scraping browsers, making
                calculations, and more to allow for superior scalability and
                flexibility within an enterprise.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-4/3 md:w-3/4 mx-auto">
            <img
              src={img1}
              alt="Mockup of AI assistant on mobile"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 mt-18 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaBook className="bg-blue-700 text-white p-2 mx-auto text-4xl rounded-full" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Natural Language Processing
            </h3>
            <p className="text-gray-400">
              We develop NLP programming languages for analysts to analyze
              structured and semi-structured content, such as search queries,
              web-mined data, company information repositories, and audio
              sources.
            </p>
          </div>

          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaFileAlt className="bg-blue-700 text-white p-2 mx-auto text-4xl rounded-full" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Intelligent Document Recognition
            </h3>
            <p className="text-gray-400">
              Our expert AI developer teams build intelligent, robust, and
              reliable document recognition programs for AI applications.
            </p>
          </div>

          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-4">
              <FaShieldAlt className="bg-blue-700 text-white p-2 mx-auto text-4xl rounded-full" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Regulatory Compliance Monitoring
            </h3>
            <p className="text-gray-400">
              We leverage AI programming languages to process large volumes of
              big data with advanced speed and accuracy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

const AISolutionsFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto py-6">
      <div className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={img2}
              alt="Predictive Analytics"
              className="w-full h-48 rounded-md object-cover mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Predictive Analytics
            </h2>
            <p className="text-black text-sm sm:text-base">
              Leverage AI-powered predictive analytics to forecast trends, optimize operations, and make data-driven decisions. Stay ahead by identifying patterns and predicting outcomes.
            </p>
          </div>

          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={img3}
              alt="Natural Language Processing (NLP)"
              className="w-full h-48 rounded-md object-cover mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Natural Language Processing (NLP)
            </h2>
            <p className="text-black text-sm sm:text-base">
              Automate text and speech-based tasks with NLP. Enhance customer engagement through chatbots, sentiment analysis, and smart text recognition systems.
            </p>
          </div>

          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={img4}
              alt="Intelligent Automation"
              className="w-full h-48 rounded-md object-cover mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Intelligent Automation
            </h2>
            <p className="text-black text-sm sm:text-base">
              Automate repetitive and time-consuming processes with AI-driven solutions. Boost efficiency and reduce costs while ensuring high accuracy and productivity.
            </p>
          </div>

          <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={img5}
              alt="Computer Vision"
              className="w-full h-48 rounded-md object-cover mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              Computer Vision
            </h2>
            <p className="text-black text-sm sm:text-base">
              Unlock the potential of image and video data with AI-powered computer vision. From facial recognition to object detection, we deliver robust and scalable solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#f5f7fa] p-6 rounded-lg mt-10 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-4">
          Why Choose Our AI Solutions?
        </h2>
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-black">
          <li>
            <strong>Industry Expertise:</strong> Proven experience in delivering AI solutions across diverse industries.
          </li>
          <li>
            <strong>Custom AI Models:</strong> Tailored AI algorithms and models to meet your business requirements.
          </li>
          <li>
            <strong>End-to-End Services:</strong> From AI strategy development to deployment and maintenance.
          </li>
          <li>
            <strong>Cutting-Edge Technology:</strong> Leverage the latest AI tools and techniques for superior results.
          </li>
        </ul>
      </div>

  <div className="mt-10 text-center">
  <Link
    to="/contactsection"
    className="inline-block bg-black text-white py-3 px-6 rounded-lg font-medium"
  >
    Contact Us for AI Solutions
  </Link>
</div>
    </div>
  );
};

const ArtificialIntelligence = () => {
  return (
    <>
      <AISolutions />
      <AIAdvance />
      <AISolutionsFeatures/>
    </>
  );
};

export default ArtificialIntelligence;
