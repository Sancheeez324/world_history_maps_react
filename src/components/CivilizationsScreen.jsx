// src/components/CivilizationsScreen.jsx
import React, { useState } from 'react';

const continents = [
  { key: 'africa', nameEs: 'África', nameEn: 'Africa', image: '/assets/continents/africa.png' },
  { key: 'asia', nameEs: 'Asia', nameEn: 'Asia', image: '/assets/continents/asia.png' },
  { key: 'europe', nameEs: 'Europa', nameEn: 'Europe', image: '/assets/continents/europa.png' },
  { key: 'north-america', nameEs: 'América del Norte', nameEn: 'North America', image: '/assets/continents/north_america.png' },
  { key: 'south-america', nameEs: 'América del Sur', nameEn: 'South America', image: '/assets/continents/south_america.png' },
  { key: 'oceania', nameEs: 'Oceanía', nameEn: 'Oceania', image: '/assets/continents/oceania.png' },
];

const europeanPeriods = [
  {
    titleEs: 'Edad Antigua',
    titleEn: 'Ancient Age',
    civs: [
      { name: 'Minoicos', years: 'c. 3000–1450 a.C.', image: '/assets/flags/civis/europa/edad antigua/minoicos.png' },
    ],
  },
  {
    titleEs: 'Edad Clásica',
    titleEn: 'Classical Age',
    civs: [
      { name: 'Atenas', years: 'c. 508–322 a.C.', image: '/assets/flags/civis/europa/edad clasica/atenas.png' },
      { name: 'Esparta', years: 'c. 900–192 a.C.', image: '/assets/flags/civis/europa/edad clasica/esparta.png' },
      { name: 'Imperio Macedonio', years: 'c. 336–323 a.C.', image: '/assets/flags/civis/europa/edad clasica/macedonian_empire.png' },
      { name: 'Roma', years: 'c. 753 a.C.–476 d.C.', image: '/assets/flags/civis/europa/edad clasica/roma.png' },
      { name: 'Roma Occidental', years: '285–476 d.C.', image: '/assets/flags/civis/europa/edad clasica/roma_occidente.png' },
    ],
  },
  {
    titleEs: 'Edad Media',
    titleEn: 'Middle Ages',
    civs: [
      { name: 'Al-Ándalus', years: '711–1492', image: '/assets/flags/civis/europa/edad media/al_andalus.png' },
      { name: 'Bizantinos', years: '330–1453', image: '/assets/flags/civis/europa/edad media/bizantinos.png' },
      { name: 'Imperio Carolingio', years: '800–888', image: '/assets/flags/civis/europa/edad media/carolingio.png' },
      { name: 'Castilla y León', years: 'c. 1037–1230', image: '/assets/flags/civis/europa/edad media/castilla_leon.png' },
      { name: 'Orden Teutónica', years: '1190–1525', image: '/assets/flags/civis/europa/edad media/estado_orden_teutonica.png' },
      { name: 'Estados Pontificios', years: '754–1870', image: '/assets/flags/civis/europa/edad media/estados_pontificios.png' },
      { name: 'Inglaterra (Plantagenet)', years: '1154–1485', image: '/assets/flags/civis/europa/edad media/inglaterra.png' },
      { name: 'Reino de Francia', years: '843–1792', image: '/assets/flags/civis/europa/edad media/reino_francia.png' },
      { name: 'Sacro Imperio Romano Germánico', years: '962–1806', image: '/assets/flags/civis/europa/edad media/sacro_imperio_romano_germanico.png' },
      { name: 'Vikingos', years: 'c. 800–1050', image: '/assets/flags/civis/europa/edad media/vikingos.png' },
    ],
  },
  {
    titleEs: 'Edad Moderna',
    titleEn: 'Modern Age',
    civs: [
      { name: 'Génova', years: '1005–1797', image: '/assets/flags/civis/europa/edad moderna/genova.png' },
      { name: 'Imperio Británico', years: '1583–1997', image: '/assets/flags/civis/europa/edad moderna/imperio_britanico.png' },
      { name: 'Imperio Español', years: '1492–1898', image: '/assets/flags/civis/europa/edad moderna/imperio_español.png' },
      { name: 'Imperio Francés', years: '1804–1814', image: '/assets/flags/civis/europa/edad moderna/imperio_frances.png' },
      { name: 'Polaco-Lituano', years: '1569–1795', image: '/assets/flags/civis/europa/edad moderna/polaco_lituano.png' },
      { name: 'Principado de Moscú', years: '1263–1547', image: '/assets/flags/civis/europa/edad moderna/principado_moscu.png' },
      { name: 'Prusia', years: '1525–1947', image: '/assets/flags/civis/europa/edad moderna/prusia.png' },
      { name: 'República de Venecia', years: '697–1797', image: '/assets/flags/civis/europa/edad moderna/republica_venecia.png' },
    ],
  },
  {
    titleEs: 'Edad Contemporánea',
    titleEn: 'Contemporary Age',
    civs: [
      { name: 'Imperio Alemán', years: '1871–1918', image: '/assets/flags/civis/europa/edad contemporanea/imperio_aleman.png' },
      { name: 'Imperio Austriaco', years: '1804–1867', image: '/assets/flags/civis/europa/edad contemporanea/imperio_austriaco.png' },
      { name: 'Imperio Ruso', years: '1721–1917', image: '/assets/flags/civis/europa/edad contemporanea/imperio_ruso.png' },
      { name: 'Alemania Nazi', years: '1933–1945', image: '/assets/flags/civis/europa/edad contemporanea/nazi_germany.png' },
      { name: 'URSS', years: '1922–1991', image: '/assets/flags/civis/europa/edad contemporanea/urss.png' },
    ],
  },
];

function CivilizationsScreen({ language, setCurrentScreen }) {
  const [selectedContinent, setSelectedContinent] = useState(null);
  const getName = (es, en) => (language === 'en' ? en : es);

  if (!selectedContinent) {
    return (
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">
          🌍 {getName('Selecciona un Continente', 'Select a Continent')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {continents.map((cont) => (
            <button
              key={cont.key}
              onClick={() =>
                cont.key === 'europe'
                  ? setSelectedContinent('europe')
                  : alert(`Próximamente civilizaciones de ${getName(cont.nameEs, cont.nameEn)}`)
              }
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-4 flex flex-col items-center"
            >
              <img
                src={cont.image}
                alt={getName(cont.nameEs, cont.nameEn)}
                className="w-32 h-32 object-contain mb-4"
              />
              <span className="text-lg font-semibold text-gray-800 dark:text-white">
                {getName(cont.nameEs, cont.nameEn)}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center max-w-6xl mx-auto p-4">
      <button
        onClick={() => setSelectedContinent(null)}
        className="mb-6 text-blue-600 underline hover:text-blue-800"
      >
        ← {getName('Volver a Continentes', 'Back to Continents')}
      </button>

      <h2 className="text-4xl font-bold mb-6 text-blue-400">
        🏛 {getName('Civilizaciones de Europa', 'European Civilizations')}
      </h2>

      {europeanPeriods.map((period) => (
        <div key={period.titleEs} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 underline">
            {getName(period.titleEs, period.titleEn)}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {period.civs.map((civ) => (
              <button
                key={civ.name}
                onClick={() => alert(`${civ.name} (${civ.years})`)}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg p-4 shadow hover:shadow-lg transition text-center flex flex-col items-center space-y-2 min-h-[160px] justify-between"
              >
                <img
                  src={civ.image}
                  alt={civ.name}
                  className="w-20 h-20 object-contain"
                />
                <span className="block text-sm font-semibold text-gray-800 dark:text-white text-center">
                  {civ.name}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-300 text-center">
                  {civ.years}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CivilizationsScreen;
