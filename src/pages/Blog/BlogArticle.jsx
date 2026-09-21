import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import SEO from '../../components/SEO';
import { ArticleSchema, BreadcrumbSchema } from '../../components/SchemaMarkup';
import Breadcrumbs from '../../components/Breadcrumbs';
import blogPosts from '../../data/blogPosts';

const BlogArticle = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you are looking for does not exist.</p>
          <Link to="/blog" className="text-blue-600 hover:underline font-medium">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title },
  ];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <article className="bg-white min-h-screen">
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        type="article"
        author={post.author}
        publishedTime={post.date}
        keywords={post.tags.join(', ')}
      />
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        image={post.image}
        author={post.author}
        datePublished={post.date}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <Link to="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <header className="mb-8">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">{post.category}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
            <span>By {post.author}</span>
          </div>
        </header>

        {post.imageType === 'video' ? (
          <div className="mb-8 rounded-xl overflow-hidden">
            <video src={post.image} className="w-full h-auto rounded-xl" muted loop playsInline />
          </div>
        ) : (
          <img src={post.image} alt={post.title} className="w-full h-auto rounded-xl mb-8 object-cover max-h-96" loading="lazy" />
        )}

        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm font-medium text-gray-700">Share this article:</span>
          <a href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition" aria-label="Share on Twitter"><Share2 className="w-5 h-5" /></a>
        </div>

        <div className="flex flex-wrap gap-2 mb-16">
          {post.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{tag}</span>
          ))}
        </div>

        {relatedPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} to={`/blog/${rp.slug}`} className="group border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition">
                  <div className="h-40 overflow-hidden bg-gray-100">
                    {rp.imageType === 'video' ? (
                      <video src={rp.image} className="w-full h-full object-cover" muted loop playsInline />
                    ) : (
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover" loading="lazy" />
                    )}
                  </div>
                  <div className="p-4">
                    <span className="text-blue-600 text-xs font-semibold uppercase">{rp.category}</span>
                    <h3 className="text-sm font-bold text-gray-900 mt-1 group-hover:text-blue-600 transition line-clamp-2">{rp.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
};

export default BlogArticle;
