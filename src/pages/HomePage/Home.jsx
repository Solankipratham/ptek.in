import React from 'react';
import { Link } from "react-router-dom";
import { FaHeartPulse, FaBrain, FaGamepad, FaIndustry, FaArrowRight, FaStar, FaQuoteLeft } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { OrganizationSchema, FAQSchema, BreadcrumbSchema } from '../../components/SchemaMarkup';
import VideoBanner from '../../components/VideoBanner';
import blogPosts from '../../data/blogPosts';
import caseStudies from '../../data/caseStudies';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Home = () => {
  const services = [
    {
      category: "Consulting",
      items: [
        { title: "Custom Software Development", desc: "Web and mobile custom software development tailored to your business.", img: "/download.png", link: "/custom-software" },
        { title: "Digital Transformation", desc: "Digital transformation is a set of tools that takes your company from today to the future.", img: "/download (8).png", link: "/digitaltransform" },
        { title: "Development Team Augmentation", desc: "Hire a dedicated Agile team that will work with your in-house developers.", img: "/download (2).png", link: "/Recruit-Training" },
        { title: "Presales & Bidding", desc: "Finding tenders in the EU, creating consortiums, and applying together.", img: "/download (3).png", link: "/contactsection" },
      ],
    },
    {
      category: "Development",
      items: [
        { title: "Web SaaS Platform Development", desc: "Building scalable web SaaS platforms with cutting-edge technology.", img: "/download (2) copy.png", link: "/websass" },
        { title: "Android & iOS Development", desc: "Empower your business with expert Android and iOS app development.", img: "/download (5).png", link: "/android-ios" },
        { title: "UI/UX Design", desc: "Improve your digital product with a beautiful and easy-to-use interface.", img: "/download (6).png", link: "/ui-uxDesign" },
        { title: "Software Quality Assurance", desc: "Bug-free software, ensured through manual and automated testing by expert QA teams.", img: "/download (7).png", link: "/software-quality" },
      ],
    },
    {
      category: "Innovation",
      items: [
        { title: "VR/AR/MR Development", desc: "Software solutions for VR, AR, and MR across platforms, reshaping interaction and learning.", img: "/download (8).png", link: "/vrdeployement" },
        { title: "NFT & Blockchain Development", desc: "Blockchain and NFTs create massive opportunities.", img: "/download.png", link: "/nft" },
        { title: "Artificial Intelligence", desc: "Upgrade your products, accelerate analysis, and keep your competitive edge with AI.", img: "/download (6).png", link: "/artifical-intelligence" },
        { title: "Gamification", desc: "Crafting captivating gaming experiences with passion, precision, and artistry.", img: "/download (7).png", link: "/gamedeployement" },
      ],
    },
  ];

  const faqs = [
    { question: 'What services does Ptek offer?', answer: 'Ptek offers custom software development, mobile app development, SaaS platform development, VR/AR/MR solutions, AI and machine learning, blockchain and NFT development, UI/UX design, software quality assurance, and digital transformation consulting.' },
    { question: 'What industries does Ptek serve?', answer: 'Ptek serves 20+ industries including healthcare, finance and banking, gaming, e-learning, retail, real estate, energy and utilities, telecommunications, transportation, agriculture, aviation, hospitality, and more.' },
    { question: 'How does Ptek ensure project quality?', answer: 'Ptek follows Agile methodologies with dedicated teams, transparent workflow management, regular quality reviews, and comprehensive testing to ensure high-quality deliverables.' },
    { question: 'Does Ptek offer team augmentation services?', answer: 'Yes, Ptek provides development team augmentation services, allowing you to hire dedicated Agile teams that integrate with your in-house developers.' },
  ];

  return (
    <div className="bg-white text-gray-800">
      <SEO
        title="Custom Software Development Company | AI, VR/AR, Mobile Apps"
        description="Ptek is an international, award-winning software development company delivering custom software, SaaS platforms, AI solutions, VR/AR experiences, and mobile apps for enterprises across 20+ industries."
        url="/"
        keywords="custom software development, SaaS development, AI solutions, VR AR development, mobile app development, digital transformation, enterprise software"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Home' }]} />
      <FAQSchema faqs={faqs} />

      {/* Explainer Video Banner */}
      <VideoBanner />

      {/* Hero Section - refined overlay */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
          <video src="/WEBhero.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h1
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Powering Innovation with <span className="text-blue-600">PTEK</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
          >
            At <strong>PTEK</strong>, we specialize in building future-ready digital solutions.
            Our team of expert full-stack developers, UI/UX designers, and product strategists
            collaborate to deliver scalable web, mobile, XR/VR, and AI-driven applications. <br />
            Trusted by global partners, we embrace Agile methodologies to drive high-quality software development at speed.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contactsection" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition text-center shadow-lg shadow-blue-600/20">
              Work with PTEK
            </Link>
            <Link to="/portfolio" className="border-2 border-blue-600 text-blue-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition text-center">
              See Our Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Industry Solutions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Industries We Serve</span>
            <h2 className="text-4xl font-bold mt-2 mb-4 text-gray-900">Core Industry Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing sectors experiencing high-quality, innovative work with tangible results.
            </p>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8">
            {[
              { title: "Healthcare & Medtech", desc: "Accelerating analysis and model training in oncology, diabetology, and neuroscience through artificial intelligence, cloud-based platforms, and intuitive user interfaces tailored for clinical and research workflows.", img: "/Neuroscience-v6.png", link: "/healthcare" },
              { title: "Research & Innovation", desc: "Focusing on cutting-edge AI technologies like green AI, quantum computing, cybersecurity, knowledge representation and reasoning (KRR), large language models (LLM), and generative AI.", img: "/Research-Innovation-v5.png", link: "/artifical-intelligence" },
              { title: "Finance, Banking & Insurance", desc: "Banking and financial services, compliance, underwriting, and risk analysis. Innovating with cutting-edge solutions such as gamification, carbon offsets, and AI.", img: "/FintechV6.png", link: "/bankingfinance" },
              { title: "Extended & Virtual Reality, Digital Twins", desc: "Specializing in extended & virtual reality, augmented reality and digital twins. Creating immersive experiences that improve training, design, and efficiency.", img: "/Innovationv8.png", link: "/vrdeployement" },
              { title: "Presales & Tenders", desc: "Finding public and private tenders in the EU, including research projects and Horizon initiatives. Creating consortiums and applying together.", img: "/Presales-Bidding-Home.png", link: "/contactsection" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-all flex flex-col h-full group"
              >
                <img src={item.img} alt={item.title} className="w-full h-44 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">{item.desc}</p>
                <Link to={item.link} className="text-sm text-blue-600 font-medium hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Discover more <FaArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Services</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Adding value to every kind of company, from small start-ups to large enterprises.
            </p>
            <Link to="/Recruit-Training" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline">
              See all services <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {services.map((section, i) => (
            <div key={i} className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{section.category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {section.items.map((item, j) => (
                  <Link
                    key={j}
                    to={item.link}
                    className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all group"
                  >
                    <img src={item.img} alt={item.title} className="w-full h-[120px] object-contain mb-4 group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    <h4 className="text-md font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6">
        <div className="bg-gray-50 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto shadow-sm">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore. Inquire. Begin.</h2>
            <p className="text-gray-600 text-lg mb-2">Inquire about building quality products.</p>
            <p className="text-gray-600 text-lg mb-6">Explore options. Begin a lasting partnership.</p>
            <Link to="/contactsection" className="bg-blue-600 text-white font-medium text-lg px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block shadow-lg shadow-blue-600/20">
              Contact us
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/ISOQuality.png" alt="Quality illustration" className="w-full max-w-sm object-contain" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 relative bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-20 z-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Track Record</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">By The Numbers</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">Our achievements speak to our commitment to excellence and innovation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '150+', label: 'Projects Delivered' },
              { num: '98%', label: 'Client Satisfaction' },
              { num: '20+', label: 'Industries Served' },
              { num: '24/7', label: 'Support Availability' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-blue-100 hover:border-blue-300 text-center"
              >
                <h2 className="text-5xl font-extrabold text-blue-700 mb-2">{stat.num}</h2>
                <p className="text-gray-600 text-lg font-medium">{stat.label}</p>
                <div className="mt-4 h-1 w-3/4 mx-auto bg-gradient-to-r from-blue-300 to-blue-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Giving partners a fresh start.</h2>
            <p className="text-gray-700 mb-4">
              Many companies try budget providers first, only to realize the true cost of doing so.
              Missed deadlines. Low-quality work. Poor communication.
            </p>
            <p className="text-gray-700 mb-4">
              Partners with bad past experiences with development teams are understandably hesitant. Still, we specialize in bringing ailing projects back to life.
            </p>
            <p className="text-gray-700 mb-6">
              PTEK is an international, award-winning software development company. Quality meets sustainability and innovation here.
            </p>
            <Link to="/about-us" className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-2">
              Learn more about us <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/LD-partner-NEUM-min.png" alt="Podcast" className="w-full h-full object-cover rounded-xl" loading="lazy" />
            <img src="/download (4).jpeg" alt="Meeting" className="w-full h-full object-cover rounded-xl" loading="lazy" />
            <img src="/ar.jpg" alt="VR Team" className="col-span-2 w-full h-full object-cover rounded-xl" loading="lazy" />
            <img src="/female-hand-with-pencil-writing-on-notebook-woman-hand-with-pencil-writing-on-notebook-at-coffee-shop-photo.jpg" alt="Documentation" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
            <img src="/home-aboutus02-min (1).png" alt="Tech solutions" className="w-full h-48 object-cover rounded-xl" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="max-w-lg">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-900">Case Studies</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Working across industries</h3>
            <p className="text-gray-600 mb-6">
              Delivering tailored software solutions across industries, from gaming to manufacturing.
            </p>
          </div>
          <div className="self-start">
            <Link to="/case-studies" className="flex items-center text-blue-600 font-medium hover:underline gap-1">
              View all case studies <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              to={`/case-studies/${study.slug}`}
              className="group border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-52 overflow-hidden bg-gray-100">
                {study.imageType === 'video' ? (
                  <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={study.image} muted loop playsInline />
                ) : (
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={study.image} alt={study.title} loading="lazy" />
                )}
              </div>
              <div className="p-6">
                <span className="text-blue-600 text-xs font-semibold uppercase">{study.industry}</span>
                <h4 className="text-xl font-bold mt-1 mb-2 group-hover:text-blue-600 transition">{study.title}</h4>
                <p className="text-gray-600 mb-4">{study.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Insights</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">From Our Blog</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Stay updated with the latest trends and insights in technology and software development.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition">
                <div className="h-44 overflow-hidden bg-gray-100">
                  {post.imageType === 'video' ? (
                    <video src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" muted loop playsInline />
                  ) : (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  )}
                </div>
                <div className="p-5">
                  <span className="text-blue-600 text-xs font-semibold uppercase">{post.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 group-hover:text-blue-600 transition line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
              View all articles <FaArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Get in touch</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Your project is unique. So is the right approach. Reach out today, and share your requirements. Let us envision and develop a path towards mutual success.
          </p>
          <Link to="/contactsection" className="mt-8 inline-block bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
