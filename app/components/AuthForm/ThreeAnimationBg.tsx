"use client";
import { motion } from "framer-motion";
import React, { useState, FormEvent, useEffect, useRef } from "react";
// import { MeshStandardMaterial, TorusKnotGeometry } from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import AnimatedBackground from "../ThreeBg/SignupBg";
import AnimatedBackgroundSignIn from "../ThreeBg/SignInBg";
import "./Authform.css";
import Link from "next/link";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import OtpVerify from "../OtpVerify";

interface PageProps {
  isSignup: boolean;
}

interface FormData {
  email: string;
  password: string;
  username: string;
  confirmPassword?: string;
}

interface ResponseType {
  error?: string;
  ok?: boolean;
}

const ThreeAnimationBg: React.FC<PageProps> = ({ isSignup }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>(); // Type the form data

  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (isSignup) {
      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        console.log(res);
        if (res.ok) {
          router.push("/");
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        console.error("Signup error:", error);
        toast.error("Something went wrong");
      }
    } else {
      try {
        const res = (await signIn("credentials", {
          ...data,
          redirect: false, // Prevent automatic redirection
        })) as ResponseType;

        if (res.error) {
          toast.error("Invalid email or password.");
        } else if (res.ok) {
          //   toast.success("Login successful!");
          //   router.push("/dashBoard");
          setOtpSent(true);
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error("An error occurred during login. Please try again.");
      }
    }
  };

  //   console.log(User);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  //   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  //   // Use effect to load the user's preference
  //   useEffect(() => {
  //     const savedMode = localStorage.getItem("darkMode") === "true";
  //     setIsDarkMode(savedMode);
  //     document.documentElement.classList.toggle("dark", savedMode);
  //   }, []);

  //   // Toggle dark mode
  //   const toggleDarkMode = () => {
  //     setIsDarkMode((prev) => {
  //       const newMode = !prev;
  //       localStorage.setItem("darkMode", String(newMode));
  //       document.documentElement.classList.toggle("dark", newMode);
  //       return newMode;
  //     });
  //   };
  const [otpSent, setOtpSent] = useState(false);

  return (
    <>
      <div className="flex h-screen w-100">
        {/* Left Side - Form */}
        {!otpSent ? (
          <motion.div
            className="w-full md:w-1/2 bg-white p-6 flex flex-col justify-center mx-auto"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              {isSignup ? "Sign Up" : "Sign In"}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              {/* <div className="input">
            <input
              type="email"
              placeholder="Email"
              value={email}
              // onChange={(e) => setEmail(e.target.value)}
              {...register("email")}
              className={`input-field ${errors.email ? "border-red-500" : ""}`}
              required
            />
          </div> */}
              {isSignup && (
                <>
                  <div className="input">
                    <input
                      defaultValue=""
                      {...register("username", {
                        required: "Username is required",
                        validate: (value) => {
                          if (value.length < 3) {
                            return "Username must be at least 3 characters";
                          }
                        },
                      })}
                      type="text"
                      placeholder="Username"
                      className="input-field"
                    />
                  </div>
                  {errors.username && (
                    <p className="text-red-500">{errors.username.message}</p>
                  )}
                </>
              )}
              <div className="input">
                <input
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                  className={`input-field ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}

              <div className="input">
                <input
                  // type="password"

                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className={` input-field ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  required
                />
              </div>
              <div className="w-64">
                <motion.button
                  type="submit"
                  className="button "
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSignup ? "Sign Up" : "Sign In"}
                </motion.button>
              </div>
            </form>
            {isSignup ? (
              <p className="text-center">
                Already have an account?{" "}
                <Link href="/" className="link">
                  Sign In
                </Link>
              </p>
            ) : (
              <p className="text-center">
                Don't have an account?{" "}
                <Link href="/register" className="link">
                  Register
                </Link>
              </p>
            )}
          </motion.div>
        ) : (
          <OtpVerify setOtpSent={setOtpSent} />
        )}
        {/* Right Side - Informative Section (Visible only on larger screens) */}
        <div className="hidden md:flex w-1/2 relative overflow-hidden">
          {/* Three.js Canvas for Dynamic Background */}
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            {!isSignup ? <AnimatedBackgroundSignIn /> : <AnimatedBackground />}
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
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
    </>
  );
};
export default ThreeAnimationBg;
