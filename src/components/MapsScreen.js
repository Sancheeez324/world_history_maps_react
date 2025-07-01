// src/components/MapsScreen.js
import React, { useEffect, useState } from 'react';

function MapsScreen({ setCurrentScreen, onSelectMap }) {
  const [mapsList, setMapsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/maps.json')
      .then((res) => res.json())
      .then((data) => {
        setMapsList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error cargando maps.json:', error);
        setLoading(false);
      });
  }, []);

  const handleSelect = (map) => {
    onSelectMap(map);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">Selecciona un mapa</h2>

      {loading ? (
        <p className="text-lg">Cargando mapas...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {mapsList.map((map) => (
            <button
              key={map.year}
              onClick={() => handleSelect(map)}
              className="p-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {map.name}
            </button>
          ))}
        </div>
      )}

      <button
        onClick={() => setCurrentScreen('globe')}
        className="mt-10 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-full"
      >
        Volver
      </button>
    </div>
  );
}

export default MapsScreen;
