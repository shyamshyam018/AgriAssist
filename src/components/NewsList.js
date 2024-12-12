import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ articles = [] }) => {
  if (!articles.length) {
    return <p>No news articles available.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <NewsCard
          key={index}
          title={article.title}
          description={article.description}
          imageUrl={article.imageUrl}
          link={article.link}
        />
      ))}
    </div>
  );
};

export default NewsList;
