import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapDetailScreen({ selectedMapYear, setCurrentScreen }) {
  const [geoData, setGeoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // esto lo podrías reemplazar después con un modal
  const handleShowMore = (countryProps) => {
    alert(`Aquí podrías abrir un modal con más info de ${countryProps.name}`);
    // más adelante puedes poner un setSelectedCountry(countryProps)
    // para un modal o un componente de detalle
  };

  useEffect(() => {
    const geoJsonPath = `/data/countries_${selectedMapYear}.geojson`;
    setLoading(true);
    fetch(geoJsonPath)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error al cargar el archivo GeoJSON: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setGeoData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(`No se pudo cargar el mapa: ${err.message}`);
        setLoading(false);
      });
  }, [selectedMapYear]);

  const onEachCountry = (feature, layer) => {
    const props = feature.properties;

    const popupContent = `
      <div style="
        font-family: Arial, sans-serif;
        background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url('${window.location.origin}/assets/buildings/${props.image_landmark}');
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        padding: 10px;
        max-width: 260px;
        min-height: 180px;
        color: #f9fafb;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      ">
        <div>
          <div style="display:flex; align-items:center; gap:8px;">
            <img
              src="${window.location.origin}/assets/flags/${selectedMapYear}/${props.image_country}"
              alt="Bandera"
              style="width:40px; border-radius:4px;"
            />
            <h2 style="font-size:1rem;margin:0;">${props.name}</h2>
          </div>
          <p style="font-size:0.75rem; margin-top:4px;">${props.description_es}</p>
        </div>
        <button
          data-country="${props.name}"
          style="
            margin-top:8px;
            background-color: #2563eb;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            align-self: flex-end;
          "
        >
          Ver más
        </button>
      </div>
    `;

    layer.bindPopup(popupContent);

    // evento para enganchar el botón
    layer.on('popupopen', function (e) {
      const button = e.popup.getElement().querySelector('button[data-country]');
      if (button) {
        button.addEventListener('click', () => {
          handleShowMore(props);
        });
      }
    });
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl mx-auto">
      <h2 className="text-4xl font-extrabold text-blue-800 dark:text-blue-300 mb-6">
        Mapa del Mundo en {selectedMapYear}
      </h2>

      {loading && (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <p className="ml-4 text-lg text-gray-700 dark:text-gray-300">Cargando mapa...</p>
        </div>
      )}

      {error && (
        <div className="text-red-600 dark:text-red-400 p-4 bg-red-100 dark:bg-red-900 rounded-lg mb-4">
          {error}
        </div>
      )}

      {geoData && (
        <div className="w-full h-[60vh] border-2 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
          <MapContainer
            center={[20, 0]}
            zoom={2}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={geoData} onEachFeature={onEachCountry} />
          </MapContainer>
        </div>
      )}

      <button
        onClick={() => setCurrentScreen('maps')}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 flex items-center space-x-2"
      >
        <span>Volver a Seleccionar Mapa</span>
      </button>
    </div>
  );
}

export default MapDetailScreen;
