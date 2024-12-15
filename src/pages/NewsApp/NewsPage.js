import React from "react";
import { useParams } from "react-router-dom";
import NewsNavbar from "../../components/NewsNavbar";

const NewsPage = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p>Article not found!</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <div className="bg-white shadow-md mb-6">
          <NewsNavbar />
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6 bg-white shadow rounded">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <p className="text-lg text-gray-700">{article.description}</p>
      </div>
    </div>
  );
};

export default NewsPage;
