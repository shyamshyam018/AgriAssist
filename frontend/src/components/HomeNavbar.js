import { Link } from "react-router-dom";

const HomeNavbar = () => (
  <nav className="bg-green-600 text-white px-6 py-4 mb-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">AgriAssist Home</h1>
      <ul className="flex space-x-4 ">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
        <li><Link to="/contact" className="hover:underline">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default HomeNavbar;
