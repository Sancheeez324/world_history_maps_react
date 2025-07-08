// src/components/ContinentsCivis/AfricanCivilizations.jsx
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
      { name: 'Antiguo Egipto', img: 'egipto.jpg', years: 'c. 3100–31 a.C.' },
      { name: 'Reino de Kush', img: 'kush.jpg', years: 'c. 1070 a.C–350 d.C.' },
    ],
  },
  {
    title: 'Edad Clásica',
    path: 'edad clasica',
    civs: [
      { name: 'Cartago', img: 'cartago.png', years: 'c. 814–146 a.C.' },
    ],
  },
  {
    title: 'Edad Media',
    path: 'edad media',
    civs: [
      { name: 'Califato Abasí', img: 'abasi.png', years: '750–1258' },
      { name: 'Dinastía Ayubí', img: 'ayubi.png', years: '1171–1260' },
      { name: 'Imperio de Malí', img: 'imperio_mali.png', years: '1235–1670' },
      { name: 'Sultanato Mameluco', img: 'mamelucos.png', years: '1250–1517' },
    ],
  },
  {
    title: 'Edad Moderna',
    path: 'edad moderna',
    civs: [
      { name: 'Estados Hausa', img: 'hausa.png', years: '900–1800' },
    ],
  },
  {
    title: 'Edad Contemporánea',
    path: 'edad contemporanea',
    civs: [
      { name: 'Imperio Etíope', img: 'imperio_etiope.png', years: '1270–1974' },
      { name: 'Reino Zulú', img: 'zulu.png', years: '1816–1897' },
      { name: 'Union Sudafricana', img: 'union_sudafricana.png', years: '1910–1961' },
      { name: 'Reino de Egipto', img: 'reino_egipto.png', years: '1922–1953' },
    ],
  },
];

function AfricanCivilizations({ setCurrentScreen, language, currentText }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-500">
        {language === 'es' ? 'Civilizaciones de Africa' : 'Africa Civilizations'}
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
                  src={`/assets/flags/civis/africa/${era.path}/${civ.img}`}
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

export default AfricanCivilizations;
