import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

// const AnimatedBackgroundSignIn: React.FC = () => {
//   const planeRef = useRef<THREE.Mesh>(null);

//   useFrame(({ clock, mouse }) => {
//     const time = clock.getElapsedTime();

//     // Calculate the hue for the dynamic color
//     const hue = (time * 30) % 360;
//     const saturation = 70 + 20 * Math.sin(time);
//     const lightness = 55 + 10 * Math.cos(time);

//     // Dynamic background color
//     const color = new THREE.Color(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
//     document.body.style.background = `radial-gradient(circle, ${color.getStyle()} 0%, #000 100%)`;

//     // Rotate plane based on time and mouse position
//     if (planeRef.current) {
//       planeRef.current.rotation.x = time * 0.5 + mouse.y * 0.5;
//       planeRef.current.rotation.y = time * 0.5 + mouse.x * 0.5;
//     }

//     // Update material color of the plane
//     if (planeRef.current) {
//       planeRef.current.material.color.set(color);
//     }
//   });

//   // Generate particles with dynamic colors
//   const particles = Array.from({ length: 100 }).map((_, i) => {
//     const time = performance.now() * 0.0005; // Add this line to get consistent animation timing
//     const hue = (time * 30 + i * 10) % 360; // Calculate hue for each particle
//     const color = new THREE.Color(`hsl(${hue}, 100%, 50%)`);

//     return (
//       <mesh
//         key={i}
//         position={[
//           (Math.random() - 0.5) * 20,
//           (Math.random() - 0.5) * 20,
//           (Math.random() - 0.5) * 20,
//         ]}
//       >
//         <sphereGeometry args={[0.1, 32, 32]} />
//         <meshStandardMaterial color={color} />
//       </mesh>
//     );
//   });

//   return (
//     <>
//       {/* Animated Plane */}
//       <mesh ref={planeRef} position={[0, 0, -5]}>
//         <planeGeometry args={[100, 100]} />
//         <meshStandardMaterial color="#ffffff" opacity={0.1} transparent />
//       </mesh>

//       {/* Dynamic Particles */}
//       <group>{particles}</group>
//     </>
//   );
// };
const AnimatedBackgroundSignIn: React.FC = () => {
  const planeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, mouse }) => {
    const time = clock.getElapsedTime();

    // Calculate the hue for the dynamic color
    const hue = (time * 30) % 360;
    const saturation = 70 + 20 * Math.sin(time);
    const lightness = 55 + 10 * Math.cos(time);

    // Dynamic background color
    const color = new THREE.Color(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    document.body.style.background = `radial-gradient(circle, ${color.getStyle()} 0%, #000 100%)`;

    // Rotate plane based on time and mouse position
    if (planeRef.current) {
      planeRef.current.rotation.x = time * 0.5 + mouse.y * 0.5;
      planeRef.current.rotation.y = time * 0.5 + mouse.x * 0.5;

      // Update material color of the plane
      const material = planeRef.current.material;

      if (Array.isArray(material)) {
        // If multiple materials, update the color of the first one
        (material[0] as THREE.MeshStandardMaterial).color.set(color);
      } else if (material) {
        // If a single material, update its color
        (material as THREE.MeshStandardMaterial).color.set(color);
      }
    }
  });

  // Generate particles with dynamic colors
  const particles = Array.from({ length: 100 }).map((_, i) => {
    const time = performance.now() * 0.0005; // Consistent animation timing
    const hue = (time * 30 + i * 10) % 360; // Calculate hue for each particle
    const color = new THREE.Color(`hsl(${hue}, 100%, 50%)`);

    return (
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ]}
      >
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color={color} />
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
      <group>{particles}</group>
    </>
  );
};

export default AnimatedBackgroundSignIn;
