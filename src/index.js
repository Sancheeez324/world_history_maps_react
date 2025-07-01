import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar de 'react-dom/client' para React 18+
import App from './App'; // Importa el componente principal App

// Importa los CSS por defecto si existen, pero puedes eliminarlos si usas solo Tailwind
// import './index.css'; // Comenta o elimina si borraste index.css
// import './App.css';   // Comenta o elimina si borraste App.css

// Crea un root de React para tu aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente App dentro del root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
