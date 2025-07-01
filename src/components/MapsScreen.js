// src/components/MapsScreen.js
import React, { useState } from 'react';

const AVAILABLE_MAP_FILES = [
  {
    id: 'countries_1938',
    name: 'Mapa de 1938',
    year: 1938,
    geojsonPath: '/data/countries_1938.geojson',
  },
  {
    id: 'countries_2025',
    name: 'Mapa Actual (2025)',
    year: 2025,
    geojsonPath: '/data/countries_2025.geojson',
  },
];

function MapsScreen({ setCurrentScreen, onSelectMap }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleMapSelect = async (mapItem) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(mapItem.geojsonPath);
      if (!response.ok) {
        throw new Error(`Error HTTP! Estado: ${response.status}. Archivo: ${mapItem.geojsonPath}`);
      }
      await response.json();
      onSelectMap(mapItem);
    } catch (err) {
      console.error(`Error al cargar el mapa "${mapItem.name}":`, err);
      setError(`No se pudo cargar el mapa "${mapItem.name}". Revisa la consola del navegador y asegúrate de que el archivo existe en public/data/.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center p-4">
      <h2 className="text-4xl font-extrabold mb-8 text-blue-700 dark:text-blue-300 animate-fade-in-down">
        Selecciona un Mapa
      </h2>

      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-lg text-blue-600">Cargando mapa...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-8 text-red-600 bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="font-semibold text-xl mb-2">¡Error al cargar el mapa!</p>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {AVAILABLE_MAP_FILES.map((mapItem) => (
            <div
              key={mapItem.id}
              className="rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer bg-white dark:bg-gray-700"
              onClick={() => handleMapSelect(mapItem)}
            >
              <img
                src={`https://placehold.co/300x200/4CAF50/FFFFFF?text=${mapItem.name.replace(/\s/g, '+')}`}
                alt={`Miniatura de ${mapItem.name}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-gray-800 dark:text-gray-100">
                <h3 className="font-bold text-xl mb-2">{mapItem.name}</h3>
                <p className="text-sm">Año: {mapItem.year}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => setCurrentScreen('globe')}
        className="mt-8 py-3 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 bg-gray-500 hover:bg-gray-600 text-white focus:ring-gray-400"
      >
        Volver al Inicio
      </button>
    </div>
  );
}

export default MapsScreen;
