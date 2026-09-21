import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && <ChevronRight className="w-3 h-3 mx-1 text-gray-400" />}
            {item.url ? (
              <Link
                to={item.url}
                className="hover:text-blue-600 transition"
                itemProp="item"
              >
                <span itemProp="name">{item.name}</span>
              </Link>
            ) : (
              <span className="text-gray-700 font-medium" itemProp="name">{item.name}</span>
            )}
            <meta itemProp="position" content={index + 1} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
