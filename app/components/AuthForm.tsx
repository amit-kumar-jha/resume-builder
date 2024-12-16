"use client";
import { motion } from "framer-motion";
import React, { useState, FormEvent, useEffect } from "react";
// import { MeshStandardMaterial, TorusKnotGeometry } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// 3D Background Animation
// const AnimatedBackground: React.FC = () => {
//   useFrame(({ clock }) => {
//     const time = clock.getElapsedTime();
//     const color = new THREE.Color(`hsl(${(time * 50) % 360}, 100%, 50%)`);
//     document.body.style.backgroundColor = color.getStyle();
//   });

//   return (
//     <mesh>
//       <planeGeometry args={[10, 10]} />
//       <meshStandardMaterial color="#ffffff" opacity={0.1} transparent />
//     </mesh>
//   );
// };

// Particle system component
const Particles: React.FC<{ count: number; mouse: THREE.Vector2 }> = ({
  count,
  mouse,
}) => {
  const particlesRef = React.useRef<THREE.Points>(null);
  const [positions] = useState(() => new Float32Array(count * 3));
  const [colors] = useState(() => new Float32Array(count * 3));

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z

      colors[i * 3] = Math.random(); // r
      colors[i * 3 + 1] = Math.random(); // g
      colors[i * 3 + 2] = Math.random(); // b
    }
  }, [count, positions, colors]);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({ size: 0.1, vertexColors: true });

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.01; // Rotate the particles for animation

      // Move particles towards the mouse position
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        positions[i * 3] += (mouse.x - positions[i * 3]) * 0.01;
        positions[i * 3 + 1] += (mouse.y - positions[i * 3 + 1]) * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return <points ref={particlesRef} geometry={geometry} material={material} />;
};

const AnimatedBackground: React.FC = () => {
  const [mouse, setMouse] = useState(new THREE.Vector2());

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse(
        new THREE.Vector2(
          (event.clientX / window.innerWidth) * 2 - 1,
          -(event.clientY / window.innerHeight) * 2 + 1
        )
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <Particles count={1000} mouse={mouse} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
    </>
  );
};

interface PageProps {
  isSignup: boolean;
}

const AuthForm: React.FC<PageProps> = ({ isSignup }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form handling logic
  };

  // Variants for background animation
  const backgroundVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: [0.5, 1, 0.5],
      y: [50, 0, -50],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const ResumeBlock: React.FC<{
    position: [number, number, number];
    color: string;
  }> = ({ position, color }) => (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );

  const AnimatedResumeBuilder: React.FC = () => {
    return (
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        {/* Blocks symbolizing the building of a resume */}
        <ResumeBlock position={[-1.5, 0, 0]} color="lightblue" />
        <ResumeBlock position={[-0.5, 1, 0]} color="lightgreen" />
        <ResumeBlock position={[0.5, -1, 0]} color="lightcoral" />
        <ResumeBlock position={[1.5, 0, 0]} color="lightyellow" />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    );
  };

  // A chain three js animation
  //   const AnimatedMesh: React.FC = () => {
  //     return (
  //       <mesh>
  //         {/* Pass the parameters directly as props */}
  //         <torusKnotGeometry args={[1, 0.4, 128, 64]} />
  //         <meshStandardMaterial color="orange" />
  //       </mesh>
  //     );
  //   };

  //   const ThreeDBackground: React.FC = () => {
  //     return (
  //       <Canvas>
  //         <ambientLight intensity={0.5} />
  //         <directionalLight position={[2, 5, 2]} intensity={1} />
  //         <AnimatedMesh />
  //         <Stars
  //           radius={100}
  //           depth={50}
  //           count={5000}
  //           factor={4}
  //           saturation={0}
  //           fade
  //           speed={1}
  //         />
  //         <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
  //       </Canvas>
  //     );
  //   };

  return (
    //     <div className="flex h-screen items-center justify-center bg-gray-800">
    //       <motion.div
    //         className="bg-white p-8 rounded-lg shadow-lg"
    //         initial={{ opacity: 0, y: -50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5 }}
    //       >
    //         <h2 className="text-2xl font-bold mb-6">
    //           {isSignup ? "Sign Up" : "Sign In"}
    //         </h2>
    //         <form onSubmit={handleFormSubmit} className="space-y-4">
    //           <input
    //             type="email"
    //             placeholder="Email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             className="w-full p-2 border border-gray-300 rounded"
    //             required
    //           />
    //           <input
    //             type="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             className="w-full p-2 border border-gray-300 rounded"
    //             required
    //           />
    //           <motion.button
    //             type="submit"
    //             className="w-full bg-blue-500 text-white py-2 rounded mt-4"
    //             whileHover={{ scale: 1.05 }}
    //             whileTap={{ scale: 0.95 }}
    //           >
    //             {isSignup ? "Sign Up" : "Sign In"}
    //           </motion.button>
    //         </form>
    //       </motion.div>
    //     </div>
    //   );
    // };
    <div className="flex h-screen">
      {/* Left Side - Form */}
      <motion.div
        className="w-1/2 bg-white p-12 flex flex-col justify-center"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-bold mb-8">
          {isSignup ? "Sign Up" : "Sign In"}
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded mt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </motion.button>
        </form>
      </motion.div>

      {/* Right Side - Informative Section */}
      {/* <motion.div
        className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 flex flex-col justify-center relative overflow-hidden"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
        <p className="text-lg mb-6">
          {isSignup
            ? "Sign up today to enjoy exclusive benefits and stay connected with the community."
            : "Sign in to continue where you left off. We're glad to have you back!"}
        </p> */}
      {/* Background animations can be added here */}
      {/* <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        /> */}
      {/* </motion.div> */}

      {/* 2nd animations
      <motion.div
        className="w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-12 flex flex-col justify-center relative overflow-hidden"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
        <p className="text-lg mb-6">
          {isSignup
            ? "Sign up today to enjoy exclusive benefits and stay connected with the community."
            : "Sign in to continue where you left off. We're glad to have you back!"}
        </p> */}

      {/* Background Animations */}
      {/* <motion.div
          className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          style={{ filter: "blur(60px)" }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 bg-pink-400 opacity-20 rounded-full"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          style={{ filter: "blur(100px)" }}
        />

        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-yellow-400 opacity-20 rounded-full"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          style={{ filter: "blur(50px)" }}
        />
      </motion.div> */}

      {/* A chain three js animation */}
      {/* <div className="w-1/2 relative">
        <ThreeDBackground />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center p-12 z-10"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">Welcome Back!</h2>
          <p className="text-lg mb-6 text-white">
            {isSignup
              ? "Sign up today to enjoy exclusive benefits and stay connected with the community."
              : "Sign in to continue where you left off. We're glad to have you back!"}
          </p>
        </motion.div>
      </div> */}
      {/* <div className="w-1/2 relative"> */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 z-0" /> */}
      {/* <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 z-0"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        /> */}
      <div className="w-1/2 relative overflow-hidden">
        {/* Three.js Canvas for Dynamic Background */}
        {/* <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <AnimatedBackground />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas> */}
        {/* Three.js Canvas for Dynamic Background */}
        <Canvas>
          <AnimatedBackground />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
        {/* 3D Animation */}
        {/* <div className="absolute inset-0 z-10">
          <AnimatedResumeBuilder />
        </div> */}
        {/* 3D Animations in Corners */}
        <div className="absolute top-0 left-0 w-1/4 h-1/4 z-10">
          <AnimatedResumeBuilder />
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-1/4 z-10">
          <AnimatedResumeBuilder />
        </div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 z-10">
          <AnimatedResumeBuilder />
        </div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 z-10">
          <AnimatedResumeBuilder />
        </div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center p-12 z-20"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Resume Builder
          </motion.h2>
          <motion.p
            className="text-lg mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Start building your professional resume today. Our tools make it
            easy to create and refine your resume with ease.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};
export default AuthForm;
