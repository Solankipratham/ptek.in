import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import SEO from '../../components/SEO';
import { BreadcrumbSchema } from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import blogPosts from '../../data/blogPosts';

const BlogListing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(blogPosts.map((p) => p.category))];
    return cats;
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = blogPosts[0];

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog' },
  ];

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Blog - Software Development Insights & Technology News"
        description="Read the latest insights on software development, AI, blockchain, mobile apps, and digital transformation from Ptek's expert team."
        url="/blog"
        keywords="software development blog, technology insights, AI, blockchain, SaaS, digital transformation, mobile app development"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Page Header */}
        <header className="pt-8 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ptek Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Insights, trends, and expertise from our team on software development, emerging technologies, and digital transformation.
          </p>
        </header>

        {/* Featured Article */}
        {featuredPost && (
          <section className="mb-16" aria-label="Featured article">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-full overflow-hidden bg-gray-200">
                  {featuredPost.imageType === 'video' ? (
                    <video
                      src={featuredPost.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-3">
                    {featuredPost.category} — Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Search and Filter */}
        <div className="mb-10 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <section className="mb-16" aria-label="Blog articles">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link to={`/blog/${post.slug}`}>
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
                      <span className="text-blue-600 text-xs font-semibold uppercase tracking-wide">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2 group-hover:text-blue-600 transition line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Internal Links */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/custom-software" className="bg-white p-4 rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">Custom Software Development</h3>
              <p className="text-sm text-gray-600 mt-1">Tailored solutions for your business needs.</p>
            </Link>
            <Link to="/digitaltransform" className="bg-white p-4 rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">Digital Transformation</h3>
              <p className="text-sm text-gray-600 mt-1">Modernize your business with technology.</p>
            </Link>
            <Link to="/artifical-intelligence" className="bg-white p-4 rounded-lg hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">Artificial Intelligence</h3>
              <p className="text-sm text-gray-600 mt-1">AI solutions that drive innovation.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogListing;
