import React from "react";
import { Link } from "react-router-dom";
import img1 from './img/kisanmela.jpg';
import img2 from './img/k.jpg';
import img3 from './img/w.jpg';
import img4 from './img/a.jpg';
import img5 from './img/m.jpg';
import img6 from './img/s.jpg';
import img7 from './img/t.jpg';
import img8 from './img/wheat.jpeg';

// Array of 8 images
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const NewsCard = ({ id, title, description, index }) => {
  // Truncate the description to 8-10 words
  const truncatedDescription = description.split(" ").slice(0, 30).join(" ") + "...";

  // Assign an image based on the sequential index (0 to 7) and wrap around using modulo operation
  const imageIndex = index % 8;
  const selectedImage = images[imageIndex];

  return (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img src={selectedImage} alt={title} className="h-40 w-full object-cover" />
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
