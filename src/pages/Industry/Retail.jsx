import React from "react";
import { motion } from "framer-motion";
import { FaWallet, FaMobileAlt, FaVrCardboard, FaLink } from "react-icons/fa";

const Retail = () => {
  const testimonials = [
    {
      quote: `We were looking to create a hybrid mobile app to accompany our Magento platform but only had 45 days before a huge trade show to make this happen. Thankfully, the team at Ptek took complete control and delivered a week ahead of schedule.`,
      author: "Director of Operations",
      company: "Retail Manufacturing Company",
    },
    {
      quote: `Ptek built us the website and app we needed. Their updates, skills, and transparency made them incredible partners. Our project manager was phenomenal.`,
      author: "Vice President",
      company: "Healthcare Industry",
    },
  ];

  const solutions = [
    {
      title: "Retail Loyalty Software Solutions",
      description:
        "Encompass all operational components, including membership, customer account management, and member self-service.",
      icon: <FaWallet className="text-pink-600 text-3xl" />,
    },
    {
      title: "Mobile Retail Application Solutions",
      description:
        "Develop solutions for customers, retailers, and distributors to manage mobile POS, inventory, and orders.",
      icon: <FaMobileAlt className="text-purple-600 text-3xl" />,
    },
    {
      title: "AR & VR Retail Solutions",
      description:
        "Showcase virtual fitting rooms, AR product catalogs, VR showrooms, and more immersive experiences.",
      icon: <FaVrCardboard className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Omnichannel Retail Solutions",
      description:
        "Feature-rich customer service and care management solutions with self-service options and communication tools.",
      icon: <FaLink className="text-gray-600 text-3xl" />,
    },
  ];

  const cards = [
    {
      title: "Retail Loyalty Software Solutions",
      description: `Our custom loyalty solutions encompass all operational components, including membership, customer account management, member self-service, rewards, and more.`,
      points: [
        "Membership management",
        "Customer account management",
        "Member self-service portals",
        "Reward program integration",
      ],
      image: "public/retail1.webp",
    },
    {
      title: "AR & VR Retail Solutions",
      description: `We develop immersive augmented & virtual reality solutions that showcase virtual fitting rooms, AR product catalogs, VR & touchscreen showrooms, and more.`,
      points: [
        "Virtual fitting rooms",
        "AR product catalogs",
        "VR & touchscreen showrooms",
        "Interactive product demonstrations",
      ],
      image: "public/retail2.webp",
    },
    {
      title: "Mobile Retail Application Solutions",
      description: `We create mobile retail solutions for customers, retailers, and distributors to manage mobile POS, inventory management, order processing, and more.`,
      points: [
        "Mobile POS systems",
        "Inventory management",
        "Order processing",
        "Customer engagement tools",
      ],
      image: "public/retail3.webp",
    },
  ];

  const featuredCards = [
    {
      title:
        "The Evolution of Customer Engagement: Omni-Channel Retailing Platforms",
      image: "/radek-grzybowski-eBRTYyjwpRY-unsplash.jpg",
    },
    {
      title:
        "Prestashop vs Magento: Choosing the E-Commerce Framework That Best Showcases Your Business",
      image: "/ExperiencedWearable.jpg",
    },
    {
      title:
        "Custom Software for Convenience and Grocery Store Inventory Management",
      image: "/christopher-gower-m_HRfLhgABo-unsplash (1).jpg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/retail-bg.png')",
        }}
      >
        <div className=" text-black px-6 py-10 rounded-lg max-w-4xl text-center mx-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Retail Software Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8">
            We develop tailored software for the retail industry, enhancing engagement,
            streamlining operations, and increasing profitability across channels.
          </p>
        <Link to="/contactsection">
  <button className="bg-white text-black hover:bg-black hover:text-white transition duration-300 px-6 py-3 rounded-lg font-semibold">
    Start Your Project →
  </button>
</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 px-4 md:px-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Hear What Our Clients Have to Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-700 italic text-lg mb-4">“{item.quote}”</p>
              <p className="font-semibold text-gray-900">
                {item.author}, <span className="italic">{item.company}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-full font-medium transition duration-300">
            Get AI-Powered Retail Solutions
          </button>
        </div>
      </section>

      {/* Icon List */}
      <section className="bg-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Custom Retail & Wholesale Software Development
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We develop full-featured retail systems and integrated modules for your
              corporate infrastructure.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="/cardmapr-nl-aU-tyT7E0lw-unsplash.jpg"
                alt="Retail Software"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <div className="space-y-8">
              {solutions.map((sol, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <div>{sol.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {sol.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{sol.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition"
            >
              Get Retail Solutions
            </motion.button>
          </div>
        </div>
      </section>

      {/* Detail Cards */}
      <section className="bg-white py-20 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-white py-20 px-4 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Additional Services
        </h2>
        <p className="text-gray-700 mb-6">
          Beyond core software solutions, we offer a range of services to further enhance
          your retail operations:
        </p>
        <div className="text-gray-700 space-y-2">
          <p>Custom e-commerce software development</p>
          <p>Omnichannel retail solutions</p>
          <p>Shopping cart integration and support</p>
          <p>Product Information Management (PIM) solutions</p>
          <p>Inventory management software</p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Featured Content
          </h2>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="bg-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {featuredCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 overflow-hidden"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Retail;