import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';
import { BreadcrumbSchema, ArticleSchema } from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import caseStudies from '../../data/caseStudies';

const CaseStudiesListing = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Case Studies' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Case Studies - Our Work and Results"
        description="Explore Ptek's case studies showcasing custom software, AI, VR/AR, and digital transformation projects across healthcare, finance, gaming, and enterprise industries."
        url="/case-studies"
        keywords="software development case studies, technology projects, SaaS, AI solutions, VR development, digital transformation results"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="pt-8 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover how Ptek delivers tailored software solutions across industries. From gaming to healthcare, our work speaks for itself.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study) => (
            <ArticleSchema
              key={`schema-${study.id}`}
              title={study.title}
              description={study.shortDescription}
              url={`/case-studies/${study.slug}`}
              image={study.image}
            />
          ))}
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-56 overflow-hidden bg-gray-100 relative">
                {study.imageType === 'video' ? (
                  <video
                    src={study.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition">
                  {study.title}
                </h2>
                <p className="text-gray-600 text-sm mb-3">{study.subtitle}</p>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{study.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.services.map((service, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-600 mb-6">Let us help you build something exceptional. Reach out to discuss your project requirements.</p>
          <Link to="/contactsection" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CaseStudiesListing;
