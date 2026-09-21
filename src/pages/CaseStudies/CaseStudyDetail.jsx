import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Briefcase, Code, Lightbulb, BarChart3 } from 'lucide-react';
import SEO from '../../components/SEO';
import { ArticleSchema, BreadcrumbSchema, ServiceSchema } from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import caseStudies from '../../data/caseStudies';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-6">The case study you are looking for does not exist.</p>
          <Link to="/case-studies" className="text-blue-600 hover:underline font-medium">Back to Case Studies</Link>
        </div>
      </div>
    );
  }

  const relatedStudies = caseStudies.filter((s) => s.id !== study.id).slice(0, 2);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: study.title },
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title={`${study.title} - Case Study`}
        description={study.shortDescription}
        url={`/case-studies/${study.slug}`}
        type="article"
        author="Ptek Team"
        keywords={study.tags.join(', ')}
      />
      <ArticleSchema
        title={study.title}
        description={study.shortDescription}
        url={`/case-studies/${study.slug}`}
        image={study.image}
        author="Ptek Team"
        datePublished="2024-01-01"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      {study.services.map((service, i) => (
        <ServiceSchema key={i} name={service} description={`${service} services provided by Ptek`} />
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <Link to="/case-studies" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{study.industry}</span>
            {study.tags.map((tag, i) => (
              <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{study.title}</h1>
          <p className="text-xl text-gray-600">{study.subtitle}</p>
        </header>

        {study.imageType === 'video' ? (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <video src={study.image} className="w-full h-auto rounded-2xl" muted loop playsInline />
          </div>
        ) : (
          <img src={study.image} alt={study.title} className="w-full h-auto rounded-2xl mb-12 object-cover max-h-96" loading="lazy" />
        )}

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-50 rounded-xl p-5">
            <Briefcase className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900 text-sm mb-1">Industry</h3>
            <p className="text-gray-600 text-sm">{study.industry}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <Lightbulb className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900 text-sm mb-1">Services</h3>
            <p className="text-gray-600 text-sm">{study.services.join(', ')}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <Code className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900 text-sm mb-1">Technologies</h3>
            <p className="text-gray-600 text-sm">{study.technologies.join(', ')}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <BarChart3 className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900 text-sm mb-1">Tags</h3>
            <p className="text-gray-600 text-sm">{study.tags.join(', ')}</p>
          </div>
        </div>

        <div className="space-y-10 mb-16">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">The Challenge</h2>
            <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Solution</h2>
            <p className="text-gray-600 leading-relaxed">{study.solution}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Implementation</h2>
            <p className="text-gray-600 leading-relaxed">{study.implementation}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Results</h2>
            <p className="text-gray-600 leading-relaxed">{study.results}</p>
          </section>
        </div>

        {relatedStudies.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Case Studies</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedStudies.map((rs) => (
                <Link key={rs.id} to={`/case-studies/${rs.slug}`} className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition">
                  <div className="h-40 overflow-hidden bg-gray-100">
                    {rs.imageType === 'video' ? (
                      <video src={rs.image} className="w-full h-full object-cover" muted loop playsInline />
                    ) : (
                      <img src={rs.image} alt={rs.title} className="w-full h-full object-cover" loading="lazy" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition">{rs.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{rs.subtitle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6">Let Ptek help you build a solution that delivers real results.</p>
          <Link to="/contactsection" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
