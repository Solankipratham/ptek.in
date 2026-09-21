import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.ptek.in';

const SEO = ({
  title,
  description,
  url,
  image,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  keywords,
}) => {
  const fullTitle = title ? `${title} | Ptek` : 'Ptek - Custom Software Development Company';
  const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const ogImage = image ? (image.startsWith('http') ? image : `${BASE_URL}${image}`) : `${BASE_URL}/ptek-logo.png`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || 'Ptek is an international, award-winning software development company delivering custom software, mobile apps, AI, and digital transformation solutions.'} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Ptek" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Article specific */}
      {type === 'article' && author && <meta name="author" content={author} />}
      {type === 'article' && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === 'article' && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
    </Helmet>
  );
};

export default SEO;
