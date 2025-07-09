// src/components/ContinentsScreen.jsx
import React from 'react';

const continents = [
  { name: 'África', img: 'africa.png', screen: 'african_civs' },
  { name: 'América del Norte', img: 'north_america.png', screen: 'northamericans_civs' },
  { name: 'América del Sur', img: 'south_america.png', screen: 'southamericans_civs' },
  { name: 'Asia', img: 'asia.png', screen: 'asian_civs' },
  { name: 'Europa', img: 'europa.png', screen: 'european_civs' },
  { name: 'Oceanía', img: 'oceania.png', screen: 'oceania_civs' },
];

function ContinentsScreen({ setCurrentScreen, language }) {
  const continentLabels = {
    es: {
      'África': 'África',
      'América del Norte': 'América del Norte',
      'América del Sur': 'América del Sur',
      'Asia': 'Asia',
      'Europa': 'Europa',
      'Oceanía': 'Oceanía',
    },
    en: {
      'África': 'Africa',
      'América del Norte': 'North America',
      'América del Sur': 'South America',
      'Asia': 'Asia',
      'Europa': 'Europe',
      'Oceanía': 'Oceania',
    }
  };

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-500">
        {language === 'es' ? 'Selecciona un Continente' : 'Select a Continent'}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
        {continents.map((continent) => (
          <button
            key={continent.name}
            className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transition"
            onClick={() => setCurrentScreen(continent.screen)}
          >
            <img
              src={`/assets/continents/${continent.img}`}
              alt={continent.name}
              className="w-20 h-20 mb-2 object-contain"
            />
            <span className="font-semibold text-gray-900 dark:text-white text-center">
              {continentLabels[language][continent.name] || continent.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ContinentsScreen;
