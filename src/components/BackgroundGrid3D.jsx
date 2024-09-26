import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import styled from 'styled-components';

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const BackgroundGrid3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    console.log("BackgroundGrid3D component mounted");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const gridSize = 20;
    const gridStep = 2;
    const gridGroup = new THREE.Group();

    for (let x = -gridSize; x <= gridSize; x += gridStep) {
      for (let y = -gridSize; y <= gridSize; y += gridStep) {
        for (let z = -gridSize; z <= gridSize; z += gridStep) {
          const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
          const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
          const cube = new THREE.Mesh(geometry, material);
          cube.position.set(x, y, z);
          gridGroup.add(cube);
        }
      }
    }

    scene.add(gridGroup);

    camera.position.set(15, 15, 15);
    camera.lookAt(scene.position);

    const animate = () => {
      requestAnimationFrame(animate);
      gridGroup.rotation.x += 0.001;
      gridGroup.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      console.log("Resizing 3D background grid to fit new window dimensions.");
    };

    window.addEventListener('resize', handleResize);

    return () => {
      console.log("BackgroundGrid3D component unmounted");
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      console.log("Cleaned up 3D background grid on component unmount.");
    };
  }, []);

  return <CanvasContainer ref={mountRef} />;
};

export default BackgroundGrid3D;