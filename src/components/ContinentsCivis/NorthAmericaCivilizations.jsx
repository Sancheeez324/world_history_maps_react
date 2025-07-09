// src/components/ContinentsCivis/NorthAmericaCivilizations.jsx
import React from 'react';

const eraTitles = {
  es: {
    'Civilizaciones': 'Civilizaciones',
    'Nativos': 'Nativos',
  },
  en: {
    'Civilizaciones': 'Civilizations',
    'Nativos': 'Natives',
  },
};

const eras = [
  {
    title: 'Civilizaciones',
    path: 'Civilizaciones',
    civs: [
      { name: 'Imperio Mexica (Aztecas)', img: 'aztecas.png', years: 'c. 1325–1521 d.C.' },
      { name: 'Mayas', img: 'mayas.png', years: 'c. 2000 a.C–1500 d.C.' },
      { name: 'Olmecas', img: 'olmeca.jpg', years: 'c. 1400–400 a.C.' },
      { name: 'Zapotecas', img: 'zapoteca.jpg', years: 'c. 500 a.C–900 d.C.' },
    ],
  },
  {
    title: 'Nativos',
    path: 'Nativos',
    civs: [
      { name: 'Comanches', img: 'comanche.jpg', years: 'c. 1700 d.C–Actualidad' },
      { name: 'Sioux', img: 'siux.jpg', years: 'c. 500 d.C–Actualidad' },
      { name: 'Cherokees', img: 'cherokees.png', years: 'c. 1000 d.C–Actualidad' },
      { name: 'Iroqueses', img: 'iroqueses.png', years: 'c. 1570–1779 d.C.' },
    ],
  },
  
];

function NorthAmericaCivilizations({ setCurrentScreen, language, currentText }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-500">
        {language === 'es' ? 'Civilizaciones de Norteamerica' : 'North America Civilizations'}
      </h2>

      {eras.map((era) => (
        <div key={era.title} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 underline">
            {eraTitles[language][era.title] || era.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {era.civs.map((civ) => (
              <button
                key={civ.name}
                className="flex flex-col items-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition"
                onClick={() => alert(`${civ.name} (${civ.years})`)}
              >
                <img
                  src={`/assets/flags/civis/america/${era.path}/${civ.img}`}
                  alt={civ.name}
                  className="w-16 h-16 object-contain mb-2"
                />
                <span className="font-medium text-gray-900 dark:text-white text-center">
                      {civ.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400 text-center">
                      {civ.years}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={() => setCurrentScreen('continents')}
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition"
      >
        {language === 'es' ? 'Volver a Continentes' : 'Back to Continents'}
      </button>
    </div>
  );
}

export default NorthAmericaCivilizations;
