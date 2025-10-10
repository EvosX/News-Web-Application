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
            {content.slice(0,-16) || description} lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cumque illum commodi magnam id dolores eligendi doloribus? Beatae error non doloribus tempora soluta vitae deserunt libero voluptatem omnis voluptas ut laudantium, quasi numquam est ex fugiat voluptate deleniti voluptatibus dolore nisi? Omnis modi molestias sint libero doloribus commodi qui dolorem quasi. Autem maxime tempore, ipsum nemo quaerat obcaecati in nihil, quae ea aperiam cum aliquid rerum. Pariatur saepe accusamus impedit animi ipsum repellendus recusandae? Eligendi aspernatur enim voluptas perspiciatis? Nisi facere accusantium exercitationem aliquid, debitis est incidunt nostrum unde cupiditate recusandae? Ipsa nisi consectetur perspiciatis officiis excepturi tenetur dicta quae voluptatibus id porro neque adipisci, ab et placeat doloribus voluptate facere, sequi similique, praesentium eligendi minus itaque! Iusto ratione maxime reiciendis possimus tempore similique labore repellat expedita vitae minus cum, fugiat quia dolor aut officia nostrum perspiciatis natus accusantium ut incidunt. Totam dolore accusantium, labore doloremque magni iure odit, ab facilis animi, eveniet neque veniam at cumque ex expedita necessitatibus voluptatibus atque voluptate! Repellat porro sint quam hic, necessitatibus ullam ipsam. Fuga unde dolorum nihil delectus assumenda laborum quidem, officia quas nesciunt saepe sequi in optio similique, eos non. Eligendi earum, repudiandae nobis blanditiis ipsam debitis suscipit unde magni consequatur.
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
