// src/components/ContinentsCivis/AsianCivilizations.jsx
import React from 'react';

const eraTitles = {
  es: {
    'Edad Antigua': 'Edad Antigua',
    'Edad Clásica': 'Edad Clásica',
    'Edad Media': 'Edad Media',
    'Edad Moderna': 'Edad Moderna',
    'Edad Contemporánea': 'Edad Contemporánea',
  },
  en: {
    'Edad Antigua': 'Ancient Age',
    'Edad Clásica': 'Classical Age',
    'Edad Media': 'Middle Ages',
    'Edad Moderna': 'Modern Age',
    'Edad Contemporánea': 'Contemporary Age',
  },
};

const eras = [
  {
    title: 'Edad Antigua',
    path: 'edad antigua',
    civs: [
      { name: 'Asiria', img: 'asiria.png', years: 'c. 2500–605 a.C.' },
      { name: 'Fenicios', img: 'fenicios.png', years: 'c. 1500–300 a.C.' },
      { name: 'Aqueménidas', img: 'aquemenida.png', years: '550–330 a.C.' },
    ],
  },
  {
    title: 'Edad Clásica',
    path: 'edad clasica',
    civs: [
      { name: 'Partos', img: 'partos.png', years: '247 a.C.–224 d.C.' },
    ],
  },
  {
    title: 'Edad Media',
    path: 'edad media',
    civs: [
      { name: 'Horda de Oro', img: 'horda_oro.png', years: '1240–1502' },
      { name: 'Mongoles', img: 'mongoles.png', years: '1206–1368' },
      { name: 'Sultanato de Delhi', img: 'sultanato_delhi.png', years: '1206–1526' },
      { name: 'Sultanato de Rum', img: 'sultanato_rum.png', years: '1077–1308' },
      { name: 'Dinastía Tang', img: 'tang.png', years: '618–907' },
      { name: 'Imperio Timúrida', img: 'timuridas.png', years: '1370–1507' },
    ],
  },
  {
    title: 'Edad Moderna',
    path: 'edad moderna',
    civs: [
      { name: 'Imperio Mogol', img: 'mogoles.png', years: '1526–1857' },
      { name: 'Imperio Otomano', img: 'otomanos.png', years: '1299–1922' },
      { name: 'Shogunato Tokugawa', img: 'shogunato.png', years: '1603–1868' },
    ],
  },
  {
    title: 'Edad Contemporánea',
    path: 'edad contemporanea',
    civs: [
      { name: 'Raj Británico', img: 'raj_britanico.png', years: '1858–1947' },
      { name: 'Imperio Japonés', img: 'imperio_japones.png', years: '1868–1945' },
      { name: 'Imperio Coreano', img: 'imperio_corea.png', years: '1897–1910' },
      { name: 'Imperio Chino (Qing)', img: 'imperio_chino.png', years: '1644–1912' },
      { name: 'China Moderna', img: 'china.png', years: '1949–presente' },
    ],
  },
];

function AsianCivilizations({ setCurrentScreen, language, currentText }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-500">
        {language === 'es' ? 'Civilizaciones de Asia' : 'Asian Civilizations'}
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
                  src={`/assets/flags/civis/asia/${era.path}/${civ.img}`}
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

export default AsianCivilizations;
