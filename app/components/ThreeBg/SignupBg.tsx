import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Howl } from "howler";

const AnimatedBackgroundSignUp: React.FC = () => {
  const planeRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Group>(null);

  // Initialize sound effects
  const swooshSound = new Howl({
    src: ["swoosh.mp3"],
    volume: 0.5,
  });

  const clickSound = new Howl({
    src: ["click.mp3"],
    volume: 0.3,
  });

  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime();

    // Dynamic background color
    const hue = (time * 30) % 360;
    const saturation = 70 + 20 * Math.sin(time);
    const lightness = 55 + 10 * Math.cos(time);

    const color = new THREE.Color(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    document.body.style.background = `radial-gradient(circle, ${color.getStyle()} 0%, #000 100%)`;

    // Rotate plane based on time and mouse position
    if (planeRef.current) {
      planeRef.current.rotation.x = time * 0.5 + mouse.y * 0.5;
      planeRef.current.rotation.y = time * 0.5 + mouse.x * 0.5;
    }

    // Update particles
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, index) => {
        const speed = 0.5 + index * 0.01;
        const scale = Math.sin(time * speed) * 0.5 + 1;
        particle.scale.set(scale, scale, scale);

        // Sinusoidal movement
        particle.position.x += Math.sin(time * speed + index) * 0.02;
        particle.position.y += Math.cos(time * speed + index) * 0.02;

        // Rotate around center
        particle.position.x += Math.sin(time * 0.1 + index) * 0.1;
        particle.position.y += Math.cos(time * 0.1 + index) * 0.1;

        // Attraction towards mouse
        particle.position.x += (mouse.x - particle.position.x) * 0.01;
        particle.position.y += (mouse.y - particle.position.y) * 0.01;

        // Play sound when particles reach a certain position
        if (
          Math.abs(particle.position.x) < 0.1 &&
          Math.abs(particle.position.y) < 0.1
        ) {
          swooshSound.play();
        }

        // Update particle color
        const particleHue = (hue + index * 10) % 360;
        const particleColor = new THREE.Color(`hsl(${particleHue}, 100%, 50%)`);

        // Check if the material is a MeshStandardMaterial
        const mesh = particle as THREE.Mesh;
        const material = mesh.material;

        if (Array.isArray(material)) {
          // If it's an array, set the color of the first material
          const firstMaterial = material[0] as THREE.MeshStandardMaterial;
          if (firstMaterial && firstMaterial.color) {
            firstMaterial.color.set(particleColor);
          }
        } else if (material instanceof THREE.MeshStandardMaterial) {
          // If it's a single MeshStandardMaterial, set the color directly
          material.color.set(particleColor);
        }
      });
    }
  });

  useEffect(() => {
    const handleMouseClick = () => {
      clickSound.play();
    };

    // Add event listener for mouse click
    window.addEventListener("click", handleMouseClick);

    return () => {
      window.removeEventListener("click", handleMouseClick);
    };
  }, [clickSound]);

  // Generate particles with dynamic effects
  const particles = Array.from({ length: 200 }).map((_, i) => {
    return (
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ]}
      >
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color="#fff" opacity={0.8} transparent />
      </mesh>
    );
  });

  return (
    <>
      {/* Animated Plane */}
      <mesh ref={planeRef} position={[0, 0, -5]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#ffffff" opacity={0.1} transparent />
      </mesh>

      {/* Dynamic Particles */}
      <group ref={particlesRef}>{particles}</group>
    </>
  );
};

export default AnimatedBackgroundSignUp;
