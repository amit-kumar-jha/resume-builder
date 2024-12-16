"use client";
import { motion } from "framer-motion";
import React, { useState, FormEvent, useEffect } from "react";

interface PageProps {
  isSignup: boolean;
}

const AuthFormSimpleBg: React.FC<PageProps> = ({ isSignup }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add form handling logic
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
        {/* Background animations can be added here */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>
    </div>
  );
};
export default AuthFormSimpleBg;
