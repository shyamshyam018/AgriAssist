import React, { useState, useRef, useEffect } from "react";
import { XMarkIcon, TrashIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Listbox, ListboxLabel, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';

const languageOptions = {
  en: {
    name: 'English',
    title: 'Agri Assist',
    settingsLabel: 'Select Language',
    askButton: 'Ask',
    inputPlaceholder: 'ask me anything...',
    clearChat: 'Clear Chat'
  },
  hi: {
    name: 'Hindi',
    title: 'कृषि सहायक',
    settingsLabel: 'भाषा चुनें',
    askButton: 'पूछें',
    inputPlaceholder: 'मुझसे कुछ भी पूछें...',
    clearChat: 'चैट साफ़ करें'
  },
  gu: {
    name: 'Gujarati',
    title: 'કૃષિ સહાયક',
    settingsLabel: 'ભાષા પસંદ કરો',
    askButton: 'પૂછો',
    inputPlaceholder: 'મને કંઈપણ પૂછો...',
    clearChat: 'ચેટ સાફ કરો'
  },
  ma: {
    name: 'Marathi',
    title: 'कृषी सहाय्यक',
    settingsLabel: 'भाषा निवडा',
    askButton: 'विचारा',
    inputPlaceholder: 'मला काहीही विचारा...',
    clearChat: 'चॅट साफ करा'
  },
  ta: {
    name: 'Tamil',
    title: 'வேளாண் உதவி',
    settingsLabel: 'மொழியைத் தேர்ந்தெடு',
    askButton: 'கேள்வி கேள்',
    inputPlaceholder: 'என்னிடம் என்ன வேண்டுமானாலும் கேளுங்கள்...',
    clearChat: 'சாட்டை அழி'
  }
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatMessagesRef = useRef(null);
  const [selectedLanguageCode, setSelectedLanguageCode] = useState('en'); 
  const [showSettings, setShowSettings] = useState(false);

  const currentLanguage = languageOptions[selectedLanguageCode] || languageOptions['en']; 

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);
  const toggleSettings = () => setShowSettings(!showSettings);

  const clearChat = () => {
    setMessages([]); 
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: input,
          language: selectedLanguageCode,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botMsg = { sender: "bot", text: data.response };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Error calling Google Gemini API:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: currentLanguage.errorMessage || "Sorry, something went wrong." }
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-96 bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
          <div className="bg-green-600 text-white py-3 px-4 flex justify-between items-center">
            <h5 className="text-lg font-semibold">{currentLanguage.title}</h5>
            <div className="flex items-center space-x-2">
              <button onClick={toggleSettings} className="focus:outline-none text-white hover:text-green-200">
                <Cog6ToothIcon className="h-5 w-5" />
              </button>
              <button onClick={clearChat} className="focus:outline-none text-white hover:text-red-300">
                <TrashIcon className="h-5 w-5" />
              </button>
              <button className="focus:outline-none text-white hover:text-gray-300" onClick={toggleChat}>
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {showSettings && (
            <div className="bg-gray-50 p-4 border-b border-gray-200">
              <Listbox value={selectedLanguageCode} onChange={setSelectedLanguageCode}>
                <ListboxLabel className="block text-sm font-medium text-gray-700">{currentLanguage.settingsLabel}</ListboxLabel>
                <div className="relative mt-1">
                  <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500 sm:text-sm">
                    <span className="block truncate">{currentLanguage.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400">
                      {/* Heroicon: Chevron Down */}
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.17 8.23a.75.75 0 01.06-1.02z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </ListboxButton>
                  <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {Object.entries(languageOptions).map(([code, lang]) => (
                      <ListboxOption
                        key={code}
                        className={({ active, selected }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-green-100 text-green-900' : 'text-gray-900'
                          } ${
                            selected ? 'font-semibold' : 'font-normal'
                          }`
                        }
                        value={code}
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                              {lang.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                {/* Heroicon: Check */}
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </span>
                            ) : null}
                          </>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>
          )}

          <div ref={chatMessagesRef} className="chat-messages h-72 overflow-y-auto p-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-3 p-3 rounded-lg ${
                  msg.sender === "user" ? "bg-gray-100 text-gray-800 self-end" : "bg-green-50 text-green-800 self-start"
                }`}
              >
                <p className="text-sm break-words">{msg.text}</p>
              </div>
            ))}
          </div>

          <div className="chat-input p-4 border-t border-gray-200 flex items-center">
            <input
              className="flex-grow border rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={currentLanguage.inputPlaceholder}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="ml-3 bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
              onClick={sendMessage}
            >
              {currentLanguage.askButton}
            </button>
          </div>
        </div>
      )}

      <button
        className="rounded-full bg-green-600 text-white p-4 shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={toggleChat}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>
    </div>
  );
 };

 export default Chatbot;