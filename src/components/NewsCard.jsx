import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ article }) => {
  const { source, author, title, description, urlToImage, publishedAt } =
    article;
  return (
    <div
      className="max-w-md md:bg-white dark:bg-gray-900 hover:scale-105 
    transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300"
    >
      <Link to={"/article"} state={{ article }}>
      <div>
      <img
        src={
          urlToImage
            ? urlToImage
            : "https://tse3.mm.bing.net/th/id/OIP.u5FXGNMuIWLUWBSkLPxTXwHaGP?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
        }
        alt={title}
        className="w-full h-48 object-cover bg-gray-400"
      />
      <div className="p-4">
        <Link to={"/article"} state={{ article }}>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 transition">
            {title}{}
          </h2>
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {description?.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          <span>
            {" "}
            By <span className="font-bold "> {author || "Unknown"}</span>
            {" on "}
          </span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
        <div className="mt-1 text-xs text-blue-500 font-medium">
          source: {source.name}
        </div>
      </div>
      </div>
      </Link>
    </div>
  );
};

export default NewsCard;
