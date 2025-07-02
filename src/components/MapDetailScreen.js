// src/components/MapDetailScreen.js
import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

function MapDetailScreen({ selectedMapYear, setCurrentScreen, language = 'es' }) {
  const [geoData, setGeoData] = useState(null);
  const [selectedCountryData, setSelectedCountryData] = useState(null);
  const geoJsonLayerRef = useRef(null);

  useEffect(() => {
    const fileMap = {
      1938: 'countries_1938.geojson',
      2025: 'countries_2025.geojson',
    };

    const selectedFile = fileMap[selectedMapYear];
    if (!selectedFile) return;

    fetch(`/data/${selectedFile}`)
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error('Error cargando mapa:', err));
  }, [selectedMapYear]);

  const countryStyle = {
    fillColor: '#4ade80',
    weight: 1,
    opacity: 1,
    color: 'white',
    fillOpacity: 0.3,
  };

  const highlightStyle = {
    weight: 2,
    color: '#38bdf8',
    fillColor: '#38bdf8',
    fillOpacity: 0.6,
  };

  const resetHighlight = (e) => {
    geoJsonLayerRef.current?.resetStyle(e.target);
  };

  const onEachCountry = (feature, layer) => {
    const props = feature.properties;

    layer.on({
      click: () => {
        setSelectedCountryData(props);
      },
      mouseover: (e) => {
        e.target.setStyle(highlightStyle);
      },
      mouseout: resetHighlight,
    });
  };

  const renderCountryInfo = () => {
    if (!selectedCountryData) return null;

    const {
      name,
      [`description_${language}`]: description,
      [`landmark_name_${language}`]: landmarkName,
      image_country,
      image_landmark,
    } = selectedCountryData;

    return (
      <div className="mt-6 w-full max-w-xl px-6 py-5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg shadow-md animate-fadeIn">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>

        {image_country && (
          <img
            src={`/assets/flags/2025/${image_country}`}
            alt={`Bandera de ${name}`}
            className="w-24 h-auto mx-auto mb-4 border rounded"
          />
        )}

        {description && (
          <p className="mb-4 text-base leading-relaxed">{description}</p>
        )}

        {image_landmark && (
          <div className="mt-4 text-center">
            {landmarkName && <p className="font-semibold">{landmarkName}</p>}
            <img
              src={`/assets/buildings/${image_landmark}`}
              alt={landmarkName}
              className="w-64 h-auto mx-auto mt-2 rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center px-4 pb-10">
      <h1 className="text-2xl font-bold my-4">Mapa del año {selectedMapYear}</h1>

      <div className="w-full h-[500px] max-w-6xl mb-4">
        {geoData && (
          <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <GeoJSON
              data={geoData}
              style={countryStyle}
              onEachFeature={onEachCountry}
              ref={geoJsonLayerRef}
            />
          </MapContainer>
        )}
      </div>

      {renderCountryInfo()}

      <button
        onClick={() => setCurrentScreen('maps')}
        className="mt-6 px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-full"
      >
        Volver a Mapas
      </button>
    </div>
  );
}

export default MapDetailScreen;
