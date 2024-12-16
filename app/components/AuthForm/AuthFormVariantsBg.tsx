"use client";
import { motion } from "framer-motion";
import React, { useState, FormEvent, useEffect } from "react";
// import { MeshStandardMaterial, TorusKnotGeometry } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

interface PageProps {
  isSignup: boolean;
}

const AuthFormVariantsBg: React.FC<PageProps> = ({ isSignup }) => {
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
      {/* 2nd animations */}
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
        </p>

        {/* Background Animations */}
        <motion.div
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
      </motion.div>
      {/* <div className="w-1/2 relative overflow-hidden"> */}
      {/* Three.js Canvas for Dynamic Background */}
      {/* <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <AnimatedBackground />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas> */}
      {/* </div> */}
    </div>
  );
};
export default AuthFormVariantsBg;
