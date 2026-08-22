import React, { useState, useEffect } from 'react';
import {
    FaCogs,
    FaFileContract,
    FaShieldAlt,
    FaPalette,
    FaStore,
    FaArrowRight,
    FaChevronDown,
    FaStar,
    FaUserShield,
    FaRocket
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        title: 'Custom Blockchain Development',
        icon: <FaCogs className="text-3xl" />,
        description: 'Tailored blockchain solutions designed specifically for your business needs, from private networks to custom consensus mechanisms.',
        color: 'bg-blue-100'
    },
    {
        title: 'NFT Development',
        icon: <FaPalette className="text-3xl" />,
        description: 'Transform collectibles, such as artwork, sports cards, stamps, or event tickets, into unique digital assets for trading and exchanging those on a tamper-proof blockchain.',
        color: 'bg-purple-100'
    },
    {
        title: 'Secure Cryptocurrency Exchanges',
        icon: <FaShieldAlt className="text-3xl" />,
        description: 'Highly secure and scalable cryptocurrency exchange platforms with multi-layer security protocols and liquidity solutions.',
        color: 'bg-green-100'
    },
    {
        title: 'Smart Contract Development',
        icon: <FaFileContract className="text-3xl" />,
        description: 'Secure, audited smart contracts for DeFi, DAOs, tokenization, and other blockchain applications with comprehensive testing.',
        color: 'bg-yellow-100'
    },
    {
        title: 'NFT Marketplace Development',
        icon: <FaStore className="text-3xl" />,
        description: 'Feature-rich NFT marketplaces with minting, bidding, auctions, and royalty systems tailored for your specific use case.',
        color: 'bg-pink-100'
    },
];

const circlePositions = [
    { top: '10%', left: '35%' },
    { top: '25%', left: '70%' },
    { top: '65%', left: '60%' },
    { top: '65%', left: '10%' },
    { top: '25%', left: '0%' },
];

const Nft = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleExpand = () => {
        setExpanded(!expanded);
        if (expanded) setActiveIndex(null);
    };

    return (
        <section className="py-2 px-2 sm:px-6 text-center relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
            >
                <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-8 gap-8">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Blockchain Software Development Services
                        </h2>
                        <p className="text-md text-gray-600 max-w-xl">
                            Take advantage of our expertise. We specialize in accelerating businesses by identifying where blockchain technology can give you a competitive edge.
                        </p>
                        <motion.p
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center text-blue-600 font-semibold mt-6 cursor-pointer group"
                        >
                            Let's get in touch
                            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </motion.p>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:w-1/2"
                    >
                        <img
                            src="/tobias-CyX3ZAti5DA-unsplash.jpg"
                            alt="Blockchain Illustration"
                            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                        />
                    </motion.div>
                </div>

                {/* Circular Service Layout */}
                {isMobile ? (
                    <div className="mt-12">
                        <button
                            onClick={toggleExpand}
                            className="flex items-center justify-center mx-auto px-6 py-3 bg-blue-600 text-white rounded-full mb-6"
                        >
                            {expanded ? 'Hide Services' : 'View Our Services'}
                            <FaChevronDown className={`ml-2 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {expanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="grid gap-6 max-w-md mx-auto">
                                        {services.map((service, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`p-6 rounded-2xl shadow-md ${service.color} text-left`}
                                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                            >
                                                <div className="flex items-center">
                                                    <div className="p-3 bg-white rounded-full mr-4">
                                                        {service.icon}
                                                    </div>
                                                    <h3 className="text-lg font-semibold">{service.title}</h3>
                                                </div>
                                                <AnimatePresence>
                                                    {activeIndex === index && (
                                                        <motion.p
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="mt-3 text-gray-700"
                                                        >
                                                            {service.description}
                                                        </motion.p>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="relative mt-16 w-full max-w-5xl h-[600px] mx-auto">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border border-dashed border-blue-200 rounded-full opacity-30"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 border border-dashed border-purple-200 rounded-full opacity-20"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                            <div className="text-center text-white">
                                <p className="text-sm font-medium">Blockchain</p>
                                <p className="text-xl font-bold mt-1">Solutions</p>
                            </div>
                        </div>

                        {services.map((service, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`absolute w-48 h-48 flex flex-col items-center justify-center rounded-full text-center ${service.color} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${isActive ? 'z-10' : ''}`}
                                    style={{ top: circlePositions[index].top, left: circlePositions[index].left }}
                                    onClick={() => setActiveIndex(isActive ? null : index)}
                                >
                                    <div className={`p-4 bg-white rounded-full mb-3 ${isActive ? 'ring-2 ring-blue-500' : ''}`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-md font-semibold px-2">{service.title}</h3>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ type: 'spring', stiffness: 300 }}
                                                className={`absolute ${index % 2 === 0 ? 'left-full ml-4' : 'right-full mr-4'} w-64 p-4 text-sm text-left bg-white border border-gray-200 shadow-2xl rounded-xl z-20`}
                                            >
                                                {service.description}
                                                <div className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border-t border-l ${index % 2 === 0 ? '-left-1.5 rotate-45 border-l-gray-200 border-t-gray-200' : '-right-1.5 -rotate-45 border-r-gray-200 border-b-gray-200'}`} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                )}

                {/* Extra Content: Why Choose Us */}
                <div className="mt-24 text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                        We are more than just developers — we are your strategic partners in building secure, scalable, and future-ready blockchain applications.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                icon: <FaStar className="text-3xl text-yellow-400" />,
                                title: 'Proven Expertise',
                                desc: 'Years of experience delivering successful blockchain solutions across industries.'
                            },
                            {
                                icon: <FaUserShield className="text-3xl text-green-500" />,
                                title: 'End-to-End Security',
                                desc: 'Security-first design, rigorous audits, and compliance checks for peace of mind.'
                            },
                            {
                                icon: <FaRocket className="text-3xl text-blue-500" />,
                                title: 'Faster Go-to-Market',
                                desc: 'Agile development approach with iterative feedback ensures quick launch.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-2xl shadow-md p-6 text-center"
                            >
                                <div className="mb-4">{item.icon}</div>
                                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
         

            {/* Technology Stack */}
            <div className="mt-24 text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Technology We Use</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    We employ the latest and most reliable technologies to ensure high performance, scalability, and security.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {['Solidity', 'Ethereum', 'Polygon', 'Hyperledger', 'Binance Smart Chain', 'React', 'Node.js', 'IPFS'].map((tech, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white shadow-sm border rounded-xl px-4 py-6 text-center text-gray-800 font-medium"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Case Studies */}
            <div className="mt-24 text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    A few highlights from our work with global clients and disruptive startups.
                </p>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "NFT Marketplace for Digital Artists",
                            summary: "Enabled 1,000+ artists to mint and sell NFTs securely with custom royalty logic.",
                        },
                        {
                            title: "DeFi Platform on Ethereum",
                            summary: "Launched a secure, audited DeFi protocol with yield farming and staking support.",
                        },
                    ].map((caseStudy, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-xl shadow-md p-6 text-left"
                        >
                            <h4 className="text-xl font-semibold mb-2">{caseStudy.title}</h4>
                            <p className="text-gray-600">{caseStudy.summary}</p>
                        </motion.div>
                    ))}
                </div>
            
                
            </div>


        </section>
    );
};

export default Nft;
