// src/App.js
import React, { useState, useEffect } from 'react';
import GlobeScreen from './components/GlobeScreen';
import MapsScreen from './components/MapsScreen';
import MapDetailScreen from './components/MapDetailScreen';
import ContinentsScreen from './components/ContinentsScreen';
import {
  EuropeanCivilizations,
  AsianCivilizations,
  AfricanCivilizations
} from './components/ContinentsCivis';

import 'leaflet/dist/leaflet.css';

const translations = {
  es: {
    appName: 'Mapas de Historia Mundial',
    welcomeTitle: 'Bienvenido a Mapas Históricos',
    exploreMaps: 'Explorar Mapas',
    back: 'Volver',
    noMapSelected: 'No se ha seleccionado ningún mapa.',
    year: 'Año',
    modeClear: 'Modo Claro',
    modeDark: 'Modo Oscuro',
    language: 'es',
    civilizations: 'Civilizaciones'
  },
  en: {
    appName: 'World History Maps',
    welcomeTitle: 'Welcome to Historical Maps',
    exploreMaps: 'Explore Maps',
    back: 'Back',
    noMapSelected: 'No map selected.',
    year: 'Year',
    modeClear: 'Light Mode',
    modeDark: 'Dark Mode',
    language: 'en',
    civilizations: 'Civilizations'
  },
};

function App() {
  const [currentScreen, setCurrentScreen] = useState('globe');
  const [selectedMapData, setSelectedMapData] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) return JSON.parse(savedMode);
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const currentText = translations[language];

  const handleMapSelect = (mapData) => {
    setSelectedMapData(mapData);
    setCurrentScreen('mapDetail');
  };

  const handleBack = () => {
    if (currentScreen === 'mapDetail') {
      setCurrentScreen('maps');
      setSelectedMapData(null);
    } else if (
      currentScreen === 'maps' ||
      currentScreen === 'continents' ||
      currentScreen === 'european_civs' ||
      currentScreen === 'asian_civs' ||
      currentScreen === 'african_civs'
    ) {
      setCurrentScreen('globe');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <header className={`py-4 px-6 flex justify-between items-center shadow-md ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <button onClick={handleBack} className="flex items-center focus:outline-none">
          <img
            src="/assets/earth.png"
            alt="Volver al inicio"
            className="w-8 h-8 mr-3 hover:scale-110 transition-transform"
          />
          <h1 className="text-2xl font-bold">
            {currentText.appName}
          </h1>
        </button>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage('es')}
              className={`p-2 rounded-full transition-all duration-300 ${language === 'es' ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} ${darkMode ? (language === 'es' ? 'bg-blue-600' : 'bg-gray-600 text-gray-200 hover:bg-gray-500') : ''}`}
              title="Cambiar a Español"
            >
              🇨🇱
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`p-2 rounded-full transition-all duration-300 ${language === 'en' ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} ${darkMode ? (language === 'en' ? 'bg-blue-600' : 'bg-gray-600 text-gray-200 hover:bg-gray-500') : ''}`}
              title="Change to English"
            >
              🇺🇸
            </button>
          </div>

          <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
            <span className={`mr-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{darkMode ? currentText.modeDark : currentText.modeClear}</span>
            <div className="relative">
              <input
                type="checkbox"
                id="darkModeToggle"
                className="sr-only"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className={`block w-14 h-8 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${darkMode ? 'transform translate-x-full bg-blue-500' : ''}`}></div>
            </div>
          </label>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        {currentScreen === 'globe' && (
          <GlobeScreen
            setCurrentScreen={setCurrentScreen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            language={language}
            setLanguage={setLanguage}
            currentText={currentText}
          />
        )}
        {currentScreen === 'maps' && (
          <MapsScreen
            setCurrentScreen={setCurrentScreen}
            onSelectMap={handleMapSelect}
            language={language}
          />
        )}
        {currentScreen === 'mapDetail' && selectedMapData && (
          <MapDetailScreen
            selectedMapYear={selectedMapData.year}
            setCurrentScreen={setCurrentScreen}
            language={language}
          />
        )}
        {currentScreen === 'continents' && (
          <ContinentsScreen
            setCurrentScreen={setCurrentScreen}
            language={language}
          />
        )}
        {currentScreen === 'european_civs' && (
          <EuropeanCivilizations
            setCurrentScreen={setCurrentScreen}
            language={language}
            currentText={currentText}
          />
        )}
        {currentScreen === 'asian_civs' && (
          <AsianCivilizations
            setCurrentScreen={setCurrentScreen}
            language={language}
            currentText={currentText}
          />
        )}
        {currentScreen === 'african_civs' && (
          <AfricanCivilizations
            setCurrentScreen={setCurrentScreen}
            language={language}
            currentText={currentText}
          />
        )}
      </main>
    </div>
  );
}

export default App;
