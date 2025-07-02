// src/components/CivilizationsScreen.jsx
import React from 'react';

const continents = [
  { key: 'africa', nameEs: 'África', nameEn: 'Africa', image: '/assets/continents/africa.png' },
  { key: 'asia', nameEs: 'Asia', nameEn: 'Asia', image: '/assets/continents/asia.png' },
  { key: 'europe', nameEs: 'Europa', nameEn: 'Europe', image: '/assets/continents/europa.png' },
  { key: 'north-america', nameEs: 'América del Norte', nameEn: 'North America', image: '/assets/continents/north_america.png' },
  { key: 'south-america', nameEs: 'América del Sur', nameEn: 'South America', image: '/assets/continents/south_america.png' },
  { key: 'oceania', nameEs: 'Oceanía', nameEn: 'Oceania', image: '/assets/continents/oceania.png' },
];

function CivilizationsScreen({ language, setCurrentScreen }) {
  const getContinentName = (cont) => (language === 'en' ? cont.nameEn : cont.nameEs);

  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-8">
        🌍 {language === 'en' ? 'Select a Continent' : 'Selecciona un Continente'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {continents.map((cont) => (
          <button
            key={cont.key}
            onClick={() => alert(`Mostrar civilizaciones de ${getContinentName(cont)}`)}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-4 flex flex-col items-center"
          >
            <img
              src={cont.image}
              alt={getContinentName(cont)}
              className="w-32 h-32 object-contain mb-4"
            />
            <span className="text-lg font-semibold text-gray-800 dark:text-white">
              {getContinentName(cont)}
            </span>
          </button>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        🌐 {language === 'en'
          ? 'Continent illustrations by '
          : 'Ilustraciones de continentes por '}
        <a
          href="https://www.freepik.com/author/amoghdesign"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-500"
        >
          amoghdesign
        </a>{' '}
        - Freepik
      </p>
    </div>
  );
}

export default CivilizationsScreen;
