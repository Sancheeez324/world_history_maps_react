// src/components/GlobeScreen.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function GlobeScreen({ setCurrentScreen, currentText }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    let scene, camera, renderer, globe, controls, animationFrameId;

    const init = () => {
      scene = new THREE.Scene();
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.appendChild(renderer.domElement);

      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 3, 5);
      scene.add(directionalLight);

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
          const material = new THREE.MeshStandardMaterial({ color: 0x333333 });
          globe = new THREE.Mesh(geometry, material);
          scene.add(globe);
        }
      );

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 2;
      controls.maxDistance = 2;

      window.addEventListener('resize', handleResize);
    };

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
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
      <div className="relative z-0 mt-4 mb-6 w-64 h-64 rounded-full overflow-hidden shadow-lg bg-black">
        <div ref={mountRef} className="w-full h-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center space-y-6">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-400 drop-shadow-lg text-center">
          {currentText?.welcomeTitle || 'Bienvenido a Mapas Históricos'}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setCurrentScreen?.('maps')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >
            {currentText?.exploreMaps || 'Explorar Mapas'}
          </button>
          <button
            onClick={() => setCurrentScreen?.('civilizations')}
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >
            {currentText?.civilizations || 'Civilizaciones'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GlobeScreen;
