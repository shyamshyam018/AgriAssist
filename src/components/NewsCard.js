const NewsCard = ({ title, description, imageUrl, link }) => (
    <div className="bg-white rounded shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
        <a href={link} className="text-blue-500 hover:underline mt-2 inline-block">Read More</a>
      </div>
    </div>
  );
  
  export default NewsCard;