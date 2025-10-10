import React, { useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import { useState } from "react";
import { Loader } from "lucide-react";

const News = ({ country, category, articles, setArticles }) => {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );

        setArticles(res.data.articles);
        console.log(res.data.articles);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllNews();
  }, [category, country, setArticles]);
  return (
    <>
      {Loading ? (
        <div className=" h-screen flex flex-col mx-auto gap-3 items-center justify-center">
          <Loader className=" px-4 h-12 w-12 animate-spin dark:text-gray-200" />
          <h1 className="text-gray-800 text-xl font-semibold dark:text-gray-200">
            Loading...
          </h1>
        </div>
      ) : (
        <div className="py-24 px-4 md:px-0 ">
          <div className="px-2 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            {articles.map((article, index) => {
              return <NewsCard key={index} article={article} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default News;
