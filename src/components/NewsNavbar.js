import { Link } from "react-router-dom";

const NewsNavbar = () => (
    <nav className="bg-green-600 text-white px-6 py-4 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">AgriAssist News</h1>
        <ul className="flex space-x-4 ">
        <li><Link to="/news/" className="hover:underline">Home</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
  export default NewsNavbar;