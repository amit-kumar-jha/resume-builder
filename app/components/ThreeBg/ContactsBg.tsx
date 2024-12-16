// components/ThreeBackground.tsx
import { useEffect } from "react";
import * as THREE from "three";

const ThreeBackground: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create stars
    const starCount = 10000;
    const stars = new Float32Array(starCount * 3); // Each star has an x, y, z position

    for (let i = 0; i < starCount; i++) {
      stars[i * 3] = Math.random() * 2000 - 1000; // x
      stars[i * 3 + 1] = Math.random() * 2000 - 1000; // y
      stars[i * 3 + 2] = Math.random() * 2000 - 1000; // z
    }

    // Create BufferGeometry for stars
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(stars, 3));

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff, // Color of the stars
      size: 0.5, // Size of the stars
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending, // Blending mode for better appearance
      depthTest: false, // Disable depth test for stars to appear correctly
    });

    const starField = new THREE.Points(geometry, starMaterial);
    scene.add(starField);

    camera.position.z = 1000;

    const animate = () => {
      requestAnimationFrame(animate);
      starField.rotation.y += 0.001; // Rotate the star field for dynamic effect
      starField.rotation.x += 0.0005; // Additional rotation for depth
      renderer.render(scene, camera);
    };

    animate();

    // Resize the renderer on window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Cleanup on unmount
    return () => {
      document.body.removeChild(renderer.domElement);
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return null;
};

export default ThreeBackground;
