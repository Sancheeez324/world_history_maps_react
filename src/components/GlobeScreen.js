// src/components/GlobeScreen.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function GlobeScreen({ setCurrentScreen, currentText }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current; // 🔥 guarda el DOM una vez
    let scene, camera, renderer, globe, controls, animationFrameId;

    const init = () => {
      // Escena
      scene = new THREE.Scene();

      // Cámara
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      //renderer.setClearColor(0xff0000); // 🔴 fondo rojo para ver si el canvas aparece
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      mountRef.current.appendChild(renderer.domElement);

      // Luz
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 3, 5);
      scene.add(directionalLight);

      // Textura y globo
      const textureLoader = new THREE.TextureLoader();
      const geometry = new THREE.SphereGeometry(1, 64, 64);
      textureLoader.load(
        '/assets/planet_earth.png',
        (texture) => {
          const material = new THREE.MeshStandardMaterial({ map: texture });
          globe = new THREE.Mesh(geometry, material);
          scene.add(globe);
        },
        undefined,
        (error) => {
          console.error("Error al cargar la textura:", error);
          const material = new THREE.MeshStandardMaterial({ color: 0x333333 });
          globe = new THREE.Mesh(geometry, material);
          scene.add(globe);
        }
      );

      // Controles
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 2;
      controls.maxDistance = 2;

      // Resize
      window.addEventListener('resize', handleResize);
    };

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (globe) globe.rotation.y += 0.0015;
      controls?.update();
      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      renderer?.dispose();
      controls?.dispose();
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
            container.removeChild(renderer.domElement);
        }

    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      {/* Canvas 3D */}
      <div className="relative z-0 mt-4 mb-6 w-64 h-64 rounded-full overflow-hidden shadow-lg bg-black">
         <div ref={mountRef} className="w-full h-full" />
      </div>

      {/* UI sobre el globo */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-400 drop-shadow-lg text-center">
          {currentText?.welcomeTitle || 'Bienvenido a Mapas Históricos'}
        </h1>
        <button
          onClick={() => setCurrentScreen?.('maps')}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105"
        >
          {currentText?.exploreMaps || 'Explorar Mapas'}
        </button>
      </div>
    </div>
  );
}

export default GlobeScreen;
