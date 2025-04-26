import React from 'react';
import GoogleTranslate from '../Translate/GoogleTranslate';
import ErrorBoundary from '../ErrorBoundary';
const SettingsMenu = ({ toggleModal }) => {
  return (
    
    <div className="space-y-4">
      <ErrorBoundary/>
      <h2 className="text-lg font-semibold">Language Settings</h2>
      <GoogleTranslate />
      <div className="mt-4 text-right">
        <button
          onClick={toggleModal}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Close
        </button>
      </div>
      <ErrorBoundary/>
    </div>
  );
};

export default SettingsMenu;
