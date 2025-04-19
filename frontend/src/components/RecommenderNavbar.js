import { Link } from "react-router-dom";

const RecommenderNavbar = () => (
  <nav className="bg-green-600 text-white px-6 py-4 mb-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Smart Recommender System</h1>
      <ul className="flex space-x-4">
        <li><Link to="/recommendations/dashboard" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/recommendations/dictionary" className="hover:underline">Dictionary</Link></li>
        <li><Link to="/recommendations/recommender" className="hover:underline">Recommender</Link></li>
      </ul>
    </div>
  </nav>
);

export default RecommenderNavbar;
