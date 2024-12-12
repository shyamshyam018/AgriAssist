import { Outlet, Link } from "react-router-dom";
import { FaHome, FaNewspaper, FaLeaf, FaRegLightbulb, FaCog, FaSignOutAlt } from 'react-icons/fa'; 

const MainLayout = () => (
  <div className="flex h-screen bg-gray-200">
    {/* Sidebar */}
    <aside className="w-64 bg-gradient-to-b from-green-700 to-green-800 text-white p-4 flex flex-col shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-white border-b-2 pb-4">AgriAssist</h2>

      {/* Navigation */}
      <nav className="flex-grow">
        <ul className="space-y-6">
          <li>
            <Link to="/" className="flex items-center space-x-4 hover:bg-green-600 p-3 rounded-lg transition ease-in-out">
              <FaHome className="text-lg" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/news" className="flex items-center space-x-4 hover:bg-green-600 p-3 rounded-lg transition ease-in-out">
              <FaNewspaper className="text-lg" />
              <span>News</span>
            </Link>
          </li>
          <li>
            <Link to="/recommendations" className="flex items-center space-x-4 hover:bg-green-600 p-3 rounded-lg transition ease-in-out">
              <FaRegLightbulb className="text-lg" />
              <span>Recommendations</span>
            </Link>
          </li>
          <li>
            <Link to="/plant-research" className="flex items-center space-x-4 hover:bg-green-600 p-3 rounded-lg transition ease-in-out">
              <FaLeaf className="text-lg" />
              <span>Plant Research</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer with buttons */}
      <div className="mt-auto  flex">
        <div className="flex items-center space-x-4">
          <Link to="/settings" className="flex items-center space-x-4 hover:bg-green-600 p-3 rounded-lg transition ease-in-out">
            <FaCog className="text-lg" />
            <span>Settings</span>
          </Link>
        </div>
        <div className=" flex items-center space-x-4">
          <Link to="/logout" className="flex items-center space-x-4 hover:bg-green-600 p-3 rounded-lg transition ease-in-out">
            <FaSignOutAlt className="text-lg" />
            <span>Logout</span>
          </Link>
        </div>
      </div>

    </aside>

    {/* Main Content */}
    <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
