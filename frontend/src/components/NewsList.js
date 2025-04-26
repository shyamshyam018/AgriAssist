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
          key={article.id}
          id={article.id}
          title={article.title}
          description={article.description}
          index={index}  // Pass the index to each NewsCard
        />
      ))}
    </div>
  );
};

export default NewsList;
