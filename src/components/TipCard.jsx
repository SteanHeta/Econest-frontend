import React from 'react';

const TipCard = ({ tip }) => {
    if (!tip) {
    return null;
  }

  const authorName = tip.author_username || 'Anonymous';
  const title = tip.title || 'Untitled Post';
  const excerpt = tip.excerpt || 'No summary available.';
  const formattedDate = tip.created_at 
    ? new Date(tip.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) 
    : 'Unknown date';

  return (
    <article className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={tip.created_at} className="text-gray-500">
          {formattedDate}
        </time>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href="#"> 
            <span className="absolute inset-0" />
            {title}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
          {excerpt}
        </p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 font-semibold">
          {authorName.charAt(0).toUpperCase()}
        </div>
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            {authorName}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TipCard;