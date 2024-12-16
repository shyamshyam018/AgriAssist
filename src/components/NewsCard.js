import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ id, title, description, imageUrl }) => {
  // Truncate the description to 8-10 words
  const truncatedDescription = description.split(" ").slice(0, 30).join(" ") + "...";

  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{truncatedDescription}</p>
        {/* Link to the dynamic news page */}
        <Link to={`/news/${id}`} className="text-blue-500 hover:underline mt-2 inline-block">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
