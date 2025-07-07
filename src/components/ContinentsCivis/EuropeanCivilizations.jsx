// src/components/ContinentsCivis/EuropeanCivilizations.jsx
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
      { name: 'Minoicos', img: 'minoicos.png', years: 'c. 3000–1450 a.C.' },
    ],
  },
  {
    title: 'Edad Clásica',
    path: 'edad clasica',
    civs: [
      { name: 'Atenas', img: 'atenas.png', years: 'c. 508–322 a.C.' },
      { name: 'Esparta', img: 'esparta.png', years: 'c. 900–192 a.C.' },
      { name: 'Imperio Macedónico', img: 'macedonian_empire.png', years: 'c. 336–323 a.C.' },
      { name: 'Roma', img: 'roma.png', years: 'c. 753 a.C.–476 d.C.' },
      { name: 'Roma Occidental', img: 'roma_occidente.png', years: '285–476 d.C.' },
    ],
  },
  {
    title: 'Edad Media',
    path: 'edad media',
    civs: [
      { name: 'Al-Ándalus', img: 'al_andalus.png', years: '711–1492' },
      { name: 'Bizantinos', img: 'bizantinos.png', years: '330–1453' },
      { name: 'Imperio Carolingio', img: 'carolingio.png', years: '800–888' },
      { name: 'Castilla y León', img: 'castilla_leon.png', years: 'c. 1037–1230' },
      { name: 'Orden Teutónica', img: 'estado_orden_teutonica.png', years: '1190–1525' },
      { name: 'Estados Pontificios', img: 'estados_pontificios.png', years: '754–1870' },
      { name: 'Inglaterra', img: 'inglaterra.png', years: '1154–1485 (Plantagenet)' },
      { name: 'Reino de Francia', img: 'reino_francia.png', years: '843–1792' },
      { name: 'Sacro Imperio', img: 'sacro_imperio_romano_germanico.png', years: '962–1806' },
      { name: 'Vikingos', img: 'vikingos.png', years: 'c. 800–1050' },
    ],
  },
  {
    title: 'Edad Moderna',
    path: 'edad moderna',
    civs: [
      { name: 'Génova', img: 'genova.png', years: '1005–1797' },
      { name: 'Imperio Británico', img: 'imperio_britanico.png', years: '1583–1997' },
      { name: 'Imperio Español', img: 'imperio_español.png', years: '1492–1976' },
      { name: 'Imperio Francés', img: 'imperio_frances.png', years: '1804–1815 / 1852–1870' },
      { name: 'Conf. Polaco-Lituana', img: 'polaco_lituano.png', years: '1569–1795' },
      { name: 'Principado de Moscú', img: 'principado_moscu.png', years: '1263–1547' },
      { name: 'Prusia', img: 'prusia.png', years: '1525–1947' },
      { name: 'Rep. de Venecia', img: 'republica_venecia.png', years: '697–1797' },
    ],
  },
  {
    title: 'Edad Contemporánea',
    path: 'edad contemporanea',
    civs: [
      { name: 'Imperio Alemán', img: 'imperio_aleman.png', years: '1871–1918' },
      { name: 'Imperio Austriaco', img: 'imperio_austriaco.png', years: '1804–1867' },
      { name: 'Imperio Ruso', img: 'imperio_ruso.png', years: '1721–1917' },
      { name: 'Alemania Nazi', img: 'nazi_germany.png', years: '1933–1945' },
      { name: 'URSS', img: 'urss.png', years: '1922–1991' },
    ],
  },
];

function EuropeanCivilizations({ setCurrentScreen, language }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-500">
        {language === 'es' ? 'Civilizaciones de Europa' : 'European Civilizations'}
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
                className="flex flex-col items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition"
                onClick={() => alert(`${civ.name} (${civ.years})`)}
              >
                <img
                  src={`/assets/flags/civis/europa/${era.path}/${civ.img}`}
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

export default EuropeanCivilizations;
