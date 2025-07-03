// src/components/CivilizationsScreen.jsx
import React from 'react';

const europeanCivs = {
  'edad antigua': [
    { name: 'Minoicos', year: '3000–1100 a.C.', flag: '/assets/flags/civis/europa/edad antigua/minoicos.png' },
  ],
  'edad clasica': [
    { name: 'Atenas', year: '508–322 a.C.', flag: '/assets/flags/civis/europa/edad clasica/atenas.png' },
    { name: 'Esparta', year: '900–192 a.C.', flag: '/assets/flags/civis/europa/edad clasica/esparta.png' },
    { name: 'Imperio Macedonio', year: '336–323 a.C.', flag: '/assets/flags/civis/europa/edad clasica/macedonian_empire.png' },
    { name: 'Roma', year: '27 a.C.–476 d.C.', flag: '/assets/flags/civis/europa/edad clasica/roma.png' },
    { name: 'Imperio Romano Occidental', year: '395–476 d.C.', flag: '/assets/flags/civis/europa/edad clasica/roma_occidente.png' },
  ],
  'edad media': [
    { name: 'Al-Ándalus', year: '711–1492', flag: '/assets/flags/civis/europa/edad media/al_andalus.png' },
    { name: 'Bizantinos', year: '330–1453', flag: '/assets/flags/civis/europa/edad media/bizantinos.png' },
    { name: 'Imperio Carolingio', year: '800–888', flag: '/assets/flags/civis/europa/edad media/carolingio.png' },
    { name: 'Castilla y León', year: '1037–1230', flag: '/assets/flags/civis/europa/edad media/castilla_leon.png' },
    { name: 'Orden Teutónica', year: '1190–1525', flag: '/assets/flags/civis/europa/edad media/estado_orden_teutonica.png' },
    { name: 'Estados Pontificios', year: '754–1870', flag: '/assets/flags/civis/europa/edad media/estados_pontificios.png' },
    { name: 'Inglaterra (Plantagenet)', year: '1154–1485', flag: '/assets/flags/civis/europa/edad media/inglaterra.png' },
    { name: 'Reino de Francia', year: '843–1791', flag: '/assets/flags/civis/europa/edad media/reino_francia.png' },
    { name: 'Sacro Imperio Romano Germánico', year: '962–1806', flag: '/assets/flags/civis/europa/edad media/sacro_imperio_romano_germanico.png' },
    { name: 'Vikingos', year: '800–1100', flag: '/assets/flags/civis/europa/edad media/vikingos.png' },
  ],
  'edad moderna': [
    { name: 'Génova', year: '1005–1797', flag: '/assets/flags/civis/europa/edad moderna/genova.png' },
    { name: 'Imperio Británico', year: '1583–1997', flag: '/assets/flags/civis/europa/edad moderna/imperio_britanico.png' },
    { name: 'Imperio Español', year: '1492–1975', flag: '/assets/flags/civis/europa/edad moderna/imperio_español.png' },
    { name: 'Imperio Francés', year: '1804–1815', flag: '/assets/flags/civis/europa/edad moderna/imperio_frances.png' },
    { name: 'Confederación Polaco-Lituana', year: '1569–1795', flag: '/assets/flags/civis/europa/edad moderna/polaco_lituano.png' },
    { name: 'Principado de Moscú', year: '1283–1547', flag: '/assets/flags/civis/europa/edad moderna/principado_moscu.png' },
    { name: 'Prusia', year: '1525–1947', flag: '/assets/flags/civis/europa/edad moderna/prusia.png' },
    { name: 'República de Venecia', year: '697–1797', flag: '/assets/flags/civis/europa/edad moderna/republica_venecia.png' },
  ],
  'edad contemporanea': [
    { name: 'Imperio Alemán', year: '1871–1918', flag: '/assets/flags/civis/europa/edad contemporanea/imperio_aleman.png' },
    { name: 'Imperio Austriaco', year: '1804–1867', flag: '/assets/flags/civis/europa/edad contemporanea/imperio_austriaco.png' },
    { name: 'Imperio Ruso', year: '1721–1917', flag: '/assets/flags/civis/europa/edad contemporanea/imperio_ruso.png' },
    { name: 'Alemania Nazi', year: '1933–1945', flag: '/assets/flags/civis/europa/edad contemporanea/nazi_germany.png' },
    { name: 'URSS', year: '1922–1991', flag: '/assets/flags/civis/europa/edad contemporanea/urss.png' },
  ]
};

function CivilizationsScreen({ language, setCurrentScreen }) {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-500">
        🏛️ {language === 'en' ? 'European Civilizations' : 'Civilizaciones Europeas'}
      </h2>

      {Object.entries(europeanCivs).map(([era, civs]) => (
        <div key={era} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-400 dark:border-gray-600 pb-2">
            {era.charAt(0).toUpperCase() + era.slice(1)}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {civs.map((civ) => (
              <button
                key={civ.name}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition p-3 flex flex-col items-center"
                onClick={() => alert(`${civ.name}: ${civ.year}`)}
              >
                <img
                  src={civ.flag}
                  alt={civ.name}
                  className="w-16 h-16 object-contain mb-2"
                />
                <span className="font-medium text-sm text-gray-800 dark:text-white text-center">
                  {civ.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {civ.year}
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
