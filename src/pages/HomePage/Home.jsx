import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search, ShieldCheck, Zap, UserCheck,
  Globe, ShoppingCart, Cloud, HeartPulse, Landmark, GraduationCap,
  Palette, Code2, Lightbulb,
  ArrowRight, ArrowLeft, ChevronRight, Star,
  Monitor, Smartphone, Database, Layout,
  PenTool, Layers, Settings, Rocket,
  Eye, TrendingUp, MessageSquare,
} from 'lucide-react';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiSupabase, SiPostgresql } from 'react-icons/si';
import SEO from '../../components/SEO';
import VideoBanner from '../../components/VideoBanner';
import { OrganizationSchema, FAQSchema, BreadcrumbSchema } from '../../components/SchemaMarkup';
import blogPosts from '../../data/blogPosts';
import portfolioProjects from '../../data/portfolioProjects';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const SectionHeading = ({ tag, title, subtitle, light = false }) => (
  <div className="text-center mb-14">
    {tag && (
      <span className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 ${light ? 'text-blue-300' : 'text-blue-600'}`}>
        {tag}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-gray-500'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const Home = () => {
  const faqs = [
    { question: 'What services does Ptek offer?', answer: 'Ptek offers custom software development, mobile app development, web application development, SaaS platform development, UI/UX design, and full-stack consultancy services across modern technologies like React, Node.js, and Supabase.' },
    { question: 'What industries does Ptek serve?', answer: 'Ptek serves startups, eCommerce, SaaS platforms, healthcare and medtech, finance and fintech, and edtech and e-learning industries with tailored digital solutions.' },
    { question: 'How does Ptek ensure project quality?', answer: 'Ptek follows Agile methodologies with discovery-first engagements, quality-first delivery practices, transparent sprint cycles, and comprehensive testing to ensure every release meets high standards.' },
    { question: 'Does Ptek work with early-stage startups?', answer: 'Yes, Ptek specializes in helping startups build MVPs and scale products from idea to launch, offering flexible engagement models and NDA & IP protection for every project.' },
  ];

  const portfolioRef = useRef(null);
  const [activePortfolioCategory, setActivePortfolioCategory] = useState('All');
  const portfolioCategories = ['All', 'SaaS', 'Mobile App', 'Healthcare', 'Game Development', 'Enterprise Software'];

  const filteredProjects = activePortfolioCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activePortfolioCategory);

  const [activeServiceTab, setActiveServiceTab] = useState('Design');

  const serviceTabs = {
    Design: {
      intro: 'We craft intuitive, visually compelling interfaces grounded in real user research. Every pixel serves a purpose, and every interaction tells a story.',
      items: [
        { label: 'User Research & Personas', href: '/ui-uxDesign' },
        { label: 'Wireframing & Prototyping', href: '/ui-uxDesign' },
        { label: 'Visual Design Systems', href: '/ui-uxDesign' },
        { label: 'Responsive Web Design', href: '/ui-uxDesign' },
        { label: 'Mobile UI Design', href: '/ui-uxDesign' },
      ],
    },
    Development: {
      intro: 'We build robust, scalable applications using modern frameworks and battle-tested architectures. From MVPs to enterprise platforms, our code is clean, maintainable, and production-ready.',
      items: [
        { label: 'React & Next.js Web Apps', href: '/websass' },
        { label: 'React Native Mobile Apps', href: '/android-ios' },
        { label: 'Node.js & Express Backends', href: '/websass' },
        { label: 'Supabase & PostgreSQL APIs', href: '/websass' },
        { label: 'Cloud Deployment & DevOps', href: '/websass' },
      ],
    },
    Consultancy: {
      intro: 'We guide businesses through digital transformation with strategic technical consulting, architecture planning, and team augmentation that aligns with your growth goals.',
      items: [
        { label: 'Product Strategy & Roadmapping', href: '/contactsection' },
        { label: 'Technical Architecture Review', href: '/contactsection' },
        { label: 'Team Augmentation', href: '/Recruit-Training' },
        { label: 'Digital Transformation Consulting', href: '/digitaltransform' },
        { label: 'MVP Validation & Launch Strategy', href: '/contactsection' },
      ],
    },
  };

  const testimonials = [
    {
      quote: 'Ptek transformed our outdated system into a modern, scalable platform. Their team was responsive, detail-oriented, and genuinely invested in our success.',
      name: 'Sarah Mitchell',
      role: 'CTO, HealthSync Solutions',
      stars: 5,
    },
    {
      quote: 'Working with Ptek felt like having an in-house team without the overhead. They delivered our MVP in 12 weeks and it handled 10x our projected launch traffic.',
      name: 'James Rodriguez',
      role: 'Founder, NovaPay Finance',
      stars: 5,
    },
    {
      quote: 'The attention to design and user experience was outstanding. Our app store ratings went from 3.2 to 4.8 after Ptek rebuilt the interface from scratch.',
      name: 'Priya Sharma',
      role: 'Product Lead, EduLeap',
      stars: 5,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialInterval = useRef(null);

  useEffect(() => {
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval.current);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    clearInterval(testimonialInterval.current);
    setCurrentTestimonial(index);
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const prevTestimonial = () => goToTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () => goToTestimonial((currentTestimonial + 1) % testimonials.length);

  return (
    <div className="bg-white text-gray-800">
      <SEO
        title="Custom Software Development Company | React, Node.js, Mobile Apps"
        description="Ptek is a modern software development company building scalable web apps, mobile apps, and SaaS platforms with React, Node.js, and Supabase for startups and enterprises."
        url="/"
        keywords="custom software development, SaaS development, React development, mobile app development, Node.js, web application development, UI/UX design"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: 'Home' }]} />
      <FAQSchema faqs={faqs} />

      {/* ─── 1. EXPLAINER VIDEO BANNER ────────────────────────────── */}
      <VideoBanner />

      {/* ─── 2. HERO SECTION ──────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.12)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(99,102,241,0.08)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeUp} className="mb-4">
                <span className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full">
                  <Zap className="w-3.5 h-3.5" /> Modern Software Studio
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Build Scalable Digital Products{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">That Grow</span>{' '}
                With Your Business
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                We design and engineer high-performance web applications, mobile apps, and SaaS platforms
                using React, React Native, Node.js, and Supabase — built to scale from day one.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  to="/contactsection"
                  className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition text-center shadow-lg shadow-blue-600/25 inline-flex items-center justify-center gap-2"
                >
                  Start Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border border-gray-600 text-gray-300 px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-center inline-flex items-center justify-center gap-2"
                >
                  View Our Work <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-blue-400" /> Trusted by startups & enterprises</span>
                <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-blue-400" /> Agile delivery</span>
                <span className="flex items-center gap-1.5"><UserCheck className="w-4 h-4 text-blue-400" /> NDA & IP protection</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="bg-slate-800/80 backdrop-blur border border-slate-700/60 rounded-2xl p-6 shadow-2xl shadow-blue-900/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-xs text-gray-500 font-mono">App.jsx</span>
                </div>
                <pre className="text-sm font-mono leading-relaxed overflow-hidden">
                  <code>
                    <span className="text-purple-400">import</span>
                    <span className="text-gray-300"> {'{ '}</span>
                    <span className="text-blue-300">useState</span>
                    <span className="text-gray-300">{' }'} </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-400"> 'react'</span>
                    <span className="text-gray-400">;</span>{'\n'}
                    <span className="text-purple-400">import</span>
                    <span className="text-gray-300"> {'{ '}</span>
                    <span className="text-blue-300">motion</span>
                    <span className="text-gray-300">{' }'} </span>
                    <span className="text-purple-400">from</span>
                    <span className="text-green-400"> 'framer-motion'</span>
                    <span className="text-gray-400">;</span>{'\n\n'}
                    <span className="text-purple-400">export default</span>
                    <span className="text-blue-300"> function</span>
                    <span className="text-yellow-300"> App</span>
                    <span className="text-gray-300">() {'{'}</span>{'\n'}
                    <span className="text-gray-300">  {'  const '}</span>
                    <span className="text-blue-300">[ready, setReady]</span>
                    <span className="text-gray-300"> = </span>
                    <span className="text-yellow-300">useState</span>
                    <span className="text-gray-300">(</span>
                    <span className="text-orange-300">false</span>
                    <span className="text-gray-300">);</span>{'\n\n'}
                    <span className="text-gray-300">  {'  return ('}</span>{'\n'}
                    <span className="text-gray-300">    {'    <'}</span>
                    <span className="text-blue-300">motion.div</span>
                    <span className="text-gray-300">{' initial={'}</span>
                    <span className="text-orange-300">{'{ opacity: 0 }'}</span>
                    <span className="text-gray-300">{' animate={'}</span>
                    <span className="text-orange-300">{'{ opacity: 1 }'}</span>
                    <span className="text-gray-300">{'>'}</span>{'\n'}
                    <span className="text-gray-300">      {'    <'}</span>
                    <span className="text-blue-300">h1</span>
                    <span className="text-gray-300">{'>'}</span>
                    <span className="text-white">{'Build. Scale. Ship.'}</span>
                    <span className="text-gray-300">{'</'}</span>
                    <span className="text-blue-300">h1</span>
                    <span className="text-gray-300">{'>'}</span>{'\n'}
                    <span className="text-gray-300">    {'    </'}</span>
                    <span className="text-blue-300">motion.div</span>
                    <span className="text-gray-300">{'>'}</span>{'\n'}
                    <span className="text-gray-300">  {'  );'}</span>{'\n'}
                    <span className="text-gray-300">{'}'}</span>
                  </code>
                </pre>
                <div className="mt-4 pt-4 border-t border-slate-700/60 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-gray-500 font-mono">Ptek Dev Server — ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 2. GUIDING PRINCIPLES ────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="How We Work"
            title="Guiding Principles"
            subtitle="The values that shape every engagement, sprint, and deliverable at Ptek."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: <Search className="w-6 h-6" />,
                title: 'Discovery First',
                desc: 'We invest time understanding your business goals, users, and constraints before writing a single line of code. Strategy drives execution.',
              },
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: 'Quality-First Delivery',
                desc: 'Clean architecture, automated testing, and code reviews are baked into every sprint — not bolted on after launch.',
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: 'Agile & Fast Iteration',
                desc: 'Short sprints, frequent demos, and rapid feedback loops keep momentum high and ensure we are always building what matters most.',
              },
              {
                icon: <UserCheck className="w-6 h-6" />,
                title: 'Ownership Mindset',
                desc: 'We treat your product as our own. From proactive suggestions to post-launch support, we are accountable for outcomes — not just outputs.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 3. CORE SERVICES GRID ────────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="What We Do"
            title="Core Services"
            subtitle="End-to-end product development services, from concept to launch and beyond."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: <Globe className="w-7 h-7" />,
                title: 'Web App Development',
                desc: 'High-performance, responsive web applications built with React, Next.js, and modern APIs. Engineered for speed, accessibility, and scale.',
                gradient: 'from-blue-500 to-blue-700',
                link: '/websass',
              },
              {
                icon: <Smartphone className="w-7 h-7" />,
                title: 'Mobile App Development',
                desc: 'Cross-platform mobile apps with React Native that feel native on iOS and Android. One codebase, two platforms, zero compromises.',
                gradient: 'from-teal-500 to-teal-700',
                link: '/android-ios',
              },
              {
                icon: <Database className="w-7 h-7" />,
                title: 'Custom Software & Backend',
                desc: 'Scalable APIs, microservices, and database architectures built with Node.js, Supabase, and PostgreSQL. The invisible backbone of your product.',
                gradient: 'from-indigo-500 to-indigo-700',
                link: '/custom-software',
              },
              {
                icon: <Layout className="w-7 h-7" />,
                title: 'UI/UX & Product Design',
                desc: 'Research-driven interfaces, design systems, and prototypes that turn complex workflows into intuitive user experiences.',
                gradient: 'from-purple-500 to-purple-700',
                link: '/ui-uxDesign',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl p-8 md:p-10 text-white hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/80 mb-6 leading-relaxed max-w-md">{service.desc}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold bg-white/15 backdrop-blur hover:bg-white/25 px-5 py-2.5 rounded-lg transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 4. PROCESS SECTION ───────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="Our Process"
            title="From Idea to Launch"
            subtitle="A proven five-step process that turns ambitious ideas into reliable, scalable products."
          />

          <div className="relative mt-16">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-400" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
              {[
                { icon: <Search className="w-5 h-5" />, num: '01', title: 'Discover', desc: 'Deep-dive into goals, users, and constraints to define a clear product roadmap.' },
                { icon: <PenTool className="w-5 h-5" />, num: '02', title: 'Design', desc: 'Wireframes, prototypes, and a polished UI/UX system ready for engineering.' },
                { icon: <Code2 className="w-5 h-5" />, num: '03', title: 'Develop', desc: 'Agile sprints with clean code, CI/CD pipelines, and weekly stakeholder demos.' },
                { icon: <Rocket className="w-5 h-5" />, num: '04', title: 'Deploy', desc: 'Infrastructure setup, performance tuning, and a smooth production launch.' },
                { icon: <Settings className="w-5 h-5" />, num: '05', title: 'Support', desc: 'Ongoing monitoring, bug fixes, feature迭代, and scaling as your product grows.' },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative text-center lg:text-center"
                >
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-600 mb-4 mx-auto">
                    <span className="text-xs font-bold text-blue-400 absolute -top-1 -right-1 bg-white rounded-full w-6 h-6 flex items-center justify-center border border-blue-200">{step.num}</span>
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link
              to="/about-us"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              See Our Process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 5. PORTFOLIO / WORK SHOWCASE ──────────────────────────── */}
      <section ref={portfolioRef} className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="Our Work"
            title="Featured Projects"
            subtitle="A selection of products we have designed, built, and shipped for clients across industries."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActivePortfolioCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activePortfolioCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            key={activePortfolioCategory}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  {project.imageType === 'video' ? (
                    <video
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={project.image}
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  )}
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{project.shortDescription}</p>
                  {project.caseStudySlug ? (
                    <Link
                      to={`/case-studies/${project.caseStudySlug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      View Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      View Project <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 6. SERVICES DEEP-DIVE (TABBED) ──────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="Services Deep-Dive"
            title="Explore What We Offer"
            subtitle="Three pillars of expertise, each backed by deep domain knowledge and technical skill."
          />

          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1.5">
              {Object.keys(serviceTabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveServiceTab(tab)}
                  className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeServiceTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeServiceTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center">
              {serviceTabs[activeServiceTab].intro}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {serviceTabs[activeServiceTab].items.map((item, i) => (
                <Link
                  key={i}
                  to={item.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
                >
                  <ChevronRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 7. INDUSTRIES ────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="Industries"
            title="Domain Expertise"
            subtitle="We combine technical depth with industry knowledge to solve real problems in specific verticals."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Rocket className="w-6 h-6" />,
                title: 'Startups & MVPs',
                desc: 'From validation to launch, we help founders ship fast, iterate smart, and find product-market fit with lean, scalable MVPs.',
              },
              {
                icon: <ShoppingCart className="w-6 h-6" />,
                title: 'eCommerce',
                desc: 'Custom storefronts, headless commerce, and conversion-optimized shopping experiences built for modern buyers.',
              },
              {
                icon: <Cloud className="w-6 h-6" />,
                title: 'SaaS Platforms',
                desc: 'Multi-tenant architectures, subscription billing, and real-time dashboards that power B2B software at scale.',
              },
              {
                icon: <HeartPulse className="w-6 h-6" />,
                title: 'Healthcare & Medtech',
                desc: 'HIPAA-aware platforms, telehealth apps, and clinical data tools that prioritize security and usability.',
              },
              {
                icon: <Landmark className="w-6 h-6" />,
                title: 'Finance & Fintech',
                desc: 'Secure payment systems, banking apps, and compliance-ready platforms built for regulated environments.',
              },
              {
                icon: <GraduationCap className="w-6 h-6" />,
                title: 'EdTech & E-Learning',
                desc: 'Learning management systems, interactive course platforms, and student engagement tools for modern education.',
              },
            ].map((industry, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 8. TECH STACK STRIP ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="Tech Stack"
            title="Built With Modern Technology"
            subtitle="We pick the right tools for the job. Here are the frameworks and platforms we reach for most."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mt-8"
          >
            {[
              { icon: <FaReact className="text-[42px] text-cyan-500" />, label: 'React' },
              { icon: <FaReact className="text-[42px] text-cyan-400" />, label: 'React Native' },
              { icon: <FaNodeJs className="text-[42px] text-green-600" />, label: 'Node.js' },
              { icon: <SiSupabase className="text-[42px] text-green-500" />, label: 'Supabase' },
              { icon: <SiTailwindcss className="text-[42px] text-sky-500" />, label: 'Tailwind CSS' },
              { icon: <SiPostgresql className="text-[42px] text-blue-700" />, label: 'PostgreSQL' },
              { icon: <FaDocker className="text-[42px] text-blue-500" />, label: 'Docker' },
              { icon: <FaAws className="text-[42px] text-orange-500" />, label: 'AWS' },
            ].map((tech, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center gap-2 group cursor-default"
              >
                <div className="w-20 h-20 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-200 group-hover:shadow-lg transition-all duration-300">
                  {tech.icon}
                </div>
                <span className="text-xs font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
                  {tech.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 9. TESTIMONIALS CAROUSEL ─────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="Testimonials"
            title="What Our Clients Say"
            subtitle="Real feedback from founders and teams who have built with Ptek."
          />

          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[currentTestimonial].stars }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToTestimonial(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 10. STATS BAR ────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { num: '150+', label: 'Projects Delivered' },
              { num: '10+', label: 'Years Experience' },
              { num: '30+', label: 'Technologies Mastered' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  {stat.num}
                </h3>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 11. BLOG PREVIEW ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            tag="Insights"
            title="From Our Blog"
            subtitle="Thoughts on engineering, product strategy, and the technologies shaping modern software."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  {post.imageType === 'video' ? (
                    <video
                      src={post.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-6">
                  <span className="text-blue-600 text-xs font-semibold uppercase">{post.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View all articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 12. FINAL CTA BANNER ─────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
            <div className="relative z-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Let's Build Something<br />Great Together
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed">
                  Whether you have a detailed spec or just a rough idea on a napkin, we would love to hear about it. Let's figure out the best path forward.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contactsection"
                    className="bg-white text-blue-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition text-center shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition text-center inline-flex items-center justify-center gap-2"
                  >
                    View Our Work
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
