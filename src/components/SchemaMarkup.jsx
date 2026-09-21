import React from 'react';

const SchemaMarkup = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const OrganizationSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ptek',
    alternateName: 'Ptek SRL',
    url: 'https://www.ptek.in',
    logo: 'https://www.ptek.in/ptek-logo.png',
    description: 'International, award-winning software development company specializing in custom software, mobile apps, AI, VR/AR/MR, and digital transformation solutions.',
    email: 'info@ptek.in',
    sameAs: [
      'https://www.instagram.com/ptek',
      'https://twitter.com/ptek',
      'https://www.linkedin.com/company/ptek',
      'https://www.youtube.com/@ptek',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@ptek.in',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
    },
    foundingDate: '2010',
    founder: {
      '@type': 'Person',
      name: 'Michele Criminisi',
    },
  };

  return <SchemaMarkup data={schema} />;
};

export const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ptek',
    image: 'https://www.ptek.in/ptek-logo.png',
    url: 'https://www.ptek.in',
    telephone: '',
    email: 'info@ptek.in',
    description: 'Custom software development, mobile app development, AI solutions, VR/AR/MR development, and digital transformation services.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.instagram.com/ptek',
      'https://twitter.com/ptek',
      'https://www.linkedin.com/company/ptek',
      'https://www.youtube.com/@ptek',
    ],
  };

  return <SchemaMarkup data={schema} />;
};

export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `https://www.ptek.in${item.url}` : undefined,
    })),
  };

  return <SchemaMarkup data={schema} />;
};

export const FAQSchema = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <SchemaMarkup data={schema} />;
};

export const ServiceSchema = ({ name, description, url }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: url ? `https://www.ptek.in${url}` : undefined,
    provider: {
      '@type': 'Organization',
      name: 'Ptek',
      url: 'https://www.ptek.in',
    },
  };

  return <SchemaMarkup data={schema} />;
};

export const ArticleSchema = ({ title, description, url, image, author, datePublished, dateModified }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: url ? `https://www.ptek.in${url}` : undefined,
    image: image ? (image.startsWith('http') ? image : `https://www.ptek.in${image}`) : undefined,
    author: {
      '@type': 'Person',
      name: author || 'Ptek Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ptek',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ptek.in/ptek-logo.png',
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
  };

  return <SchemaMarkup data={schema} />;
};

export default SchemaMarkup;
