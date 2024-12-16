// components/ThreeBackground.tsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreePrivacyBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    if (mountRef.current) {
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5; // Random position
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      color: "#ffffff",
      size: 0.005,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    camera.position.z = 5;

    let clock = new THREE.Clock(); // For smooth transitions

    const animate = () => {
      requestAnimationFrame(animate);

      let elapsedTime = clock.getElapsedTime();

      // Rotate particles
      particlesMesh.rotation.x = 0.1 * elapsedTime;
      particlesMesh.rotation.y = 0.1 * elapsedTime;

      // Animate camera zoom for smooth transition
      camera.position.z = 5 + Math.sin(elapsedTime) * 0.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute top-0 left-0 w-full h-full -z-10" />
  );
};

export default ThreePrivacyBackground;
