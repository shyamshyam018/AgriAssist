import React from "react";
import { useParams } from "react-router-dom";
import NewsNavbar from "../../components/NewsNavbar";

import img1 from '../../components/img/kisanmela.jpg';
import img2 from '../../components/img/k.jpg';
import img3 from '../../components/img/w.jpg';
import img4 from '../../components/img/a.jpg';
import img5 from '../../components/img/m.jpg';
import img6 from '../../components/img/s.jpg';
import img7 from '../../components/img/t.jpg';
import img8 from '../../components/img/wheat.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const NewsPage = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p>Article not found!</p>;
  }

  // Assign image based on article id (adjust to index if needed)
  const imageForArticle = images[images.length - parseInt(id)] ;

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
          src={imageForArticle}
          alt={article.title}
          className="w-full h-64 object-cover mb-4 rounded"
        />
        <p className="text-lg text-gray-700">{article.description}</p>
      </div>
    </div>
  );
};

export default NewsPage;
