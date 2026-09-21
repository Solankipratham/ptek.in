import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SEO from '../../components/SEO';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import portfolioProjects, { portfolioCategories } from '../../data/portfolioProjects';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Portfolio' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Portfolio - Our Projects and Work"
        description="Explore Ptek's portfolio of custom software, SaaS platforms, mobile apps, VR/AR experiences, and AI solutions built for enterprises across 20+ industries."
        url="/portfolio"
        keywords="software development portfolio, SaaS projects, mobile app portfolio, VR AR projects, AI solutions portfolio"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="pt-8 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A selection of projects we have delivered across industries — from SaaS platforms and mobile apps to VR experiences and AI solutions.
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <section className="mb-16">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects in this category yet.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-52 overflow-hidden bg-gray-100 relative">
                    {project.imageType === 'video' ? (
                      <video
                        src={project.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">{project.industry}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.services.map((service, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.caseStudySlug ? (
                      <Link
                        to={`/case-studies/${project.caseStudySlug}`}
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all"
                      >
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-gray-400 font-semibold text-sm">
                        Coming Soon <ExternalLink className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to See Your Project Here?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">Let Ptek build your next innovative solution. From concept to deployment, we deliver excellence.</p>
          <Link to="/contactsection" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Start Your Project <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
