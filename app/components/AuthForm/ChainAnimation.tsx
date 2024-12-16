"use client";
import { motion } from "framer-motion";
import React, { useState, FormEvent, useEffect } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

interface PageProps {
  isSignup: boolean;
}

const ChainAnimation: React.FC<PageProps> = ({ isSignup }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form handling logic
  };

  //   A chain three js animation
  const AnimatedMesh: React.FC = () => {
    return (
      <mesh>
        {/* Pass the parameters directly as props */}
        <torusKnotGeometry args={[1, 0.4, 128, 64]} />
        <meshStandardMaterial color="brown" />
      </mesh>
    );
  };

  const ThreeDBackground: React.FC = () => {
    return (
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <AnimatedMesh />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    );
  };

  return (
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

      {/* A chain three js animation */}
      <div className="w-1/2 relative">
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
      </div>
    </div>
  );
};
export default ChainAnimation;
