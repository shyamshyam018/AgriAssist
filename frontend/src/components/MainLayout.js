import React, { useState , useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaHome, FaNewspaper, FaLeaf, FaRegLightbulb, FaCog, FaSignOutAlt } from 'react-icons/fa';
import ChatBot from './chatbox/chatBot';
import SettingsMenu from './Settings/SettingsMenu';

const MainLayout = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.onerror = function (message, source, lineno, colno, error) {
      if (message === 'Script error.') return true;
    };
  }, []);
  
  // Function to toggle modal visibility
  const toggleModal = () => setShowModal(!showModal);

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      {!showModal && (
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
                <a
                  href="http://127.0.0.1:2000"
                  target="_blank" // optional: open in new tab
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 hover:bg-green-600 p-3 rounded-lg transition ease-in-out"
                >
                  <FaLeaf className="text-lg" />
                  <span>Plant Research</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Footer with buttons */}
          <div className="mt-auto flex">
            <div className="flex items-center space-x-4">
              <button onClick={toggleModal} className="flex items-center space-x-4 hover:bg-green-600 p-3 rounded-lg transition ease-in-out">
                <FaCog className="text-lg" />
                <span>Settings</span>
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/logout" className="flex items-center space-x-4 hover:bg-green-600 p-3 rounded-lg transition ease-in-out">
                <FaSignOutAlt className="text-lg" />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <main className={`flex-1 p-6 overflow-y-auto ${showModal ? 'opacity-50' : ''}`}>
        <Outlet />
        <ChatBot />
      </main>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-2xl font-bold mb-4">Choose Language</h2>
            <SettingsMenu toggleModal={toggleModal} /> {/* Pass toggleModal to SettingsMenu */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-xl font-semibold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
