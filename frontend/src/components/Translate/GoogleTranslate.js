import React, { useEffect } from 'react';
import ErrorBoundary from '../ErrorBoundary';
const GoogleTranslate = () => {
  useEffect(() => {
    <ErrorBoundary/>
    try {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,ta,te,kn,ml,bn,gu,pa,ur',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      };

      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onerror = (error) => {
        console.warn('Google Translate script failed to load:', error);
      };
      document.body.appendChild(script);

    } catch (error) {
      console.warn('Error initializing Google Translate:', error);
    }
    <ErrorBoundary/>
  }, []);

  return <div id="google_translate_element" className="text-sm" />;
};

export default GoogleTranslate;
