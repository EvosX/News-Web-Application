import React from "react";
import { useLocation, Link } from "react-router-dom";

const Article = () => {
  const { state } = useLocation();
  const article = state?.article;

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-gray-800">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            No article found
          </h2>
          <Link to="/" className="mt-4 inline-block text-blue-600">
            Go back
          </Link>
        </div>
      </div>
    );
  }

  const {
    title,
    author,
    content,
    description,
    urlToImage,
    publishedAt,
    source,
    url,
  } = article;

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-800 py-24 px-4 md:px-0">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
        {urlToImage && (
          <img
            src={urlToImage}
            alt={title}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h1>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            <span>
              By <span className="font-semibold">{author || "Unknown"}</span>
            </span>
            <span className="mx-2">•</span>
            <span>{new Date(publishedAt).toLocaleString()}</span>
            <span className="mx-2">•</span>
            <span className="text-blue-500">{source?.name}</span>
          </div>

          <p className="mt-4 text-gray-700 dark:text-gray-200">
            {content || description}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 font-medium"
            >
              Read original
            </a>
            <Link to="/" className="text-gray-600 dark:text-gray-300">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
