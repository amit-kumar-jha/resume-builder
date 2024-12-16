"use client";
import ThreeCanvas from "@/app/components/DashboardBg";
import { motion } from "framer-motion";
import "./dashboard.css";
// import ThreeCanvas from "./ThreeCanvas"; // Import the particle effect component

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* 3D Background with Particles */}
      <ThreeCanvas />

      <div className="content">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
          }} // Hover effect
        >
          <h2>Your Resume</h2>
          <p>Manage and build your resume</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
          }} // Hover effect
        >
          <h2>Templates</h2>
          <p>Explore available resume templates</p>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
          }} // Hover effect
        >
          <h2>Analytics</h2>
          <p>Track views and performance of your resume</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;

// import { motion } from "framer-motion";
// import { useRef } from "react";

// const Dashboard = () => {
//   // Refs for each section
//   const userOverviewRef = useRef(null);
//   const resumeInfoRef = useRef(null);
//   const keyPointsRef = useRef(null);
//   const mistakesRef = useRef(null);
//   const templatesRef = useRef(null);
//   const settingsRef = useRef(null);

//   // Scroll function
//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       {/* Topbar */}
//       <div className="fixed top-0 w-full bg-gray-800 text-white py-4 px-8 flex justify-between z-50">
//         <h1 className="text-xl font-bold">Resume Builder Dashboard</h1>
//         <nav className="space-x-4">
//           <button
//             onClick={() => scrollToSection(userOverviewRef)}
//             className="hover:text-yellow-300"
//           >
//             User Overview
//           </button>
//           <button
//             onClick={() => scrollToSection(resumeInfoRef)}
//             className="hover:text-yellow-300"
//           >
//             What is a Resume?
//           </button>
//           <button
//             onClick={() => scrollToSection(keyPointsRef)}
//             className="hover:text-yellow-300"
//           >
//             Key Points
//           </button>
//           <button
//             onClick={() => scrollToSection(mistakesRef)}
//             className="hover:text-yellow-300"
//           >
//             Common Mistakes
//           </button>
//           <button
//             onClick={() => scrollToSection(templatesRef)}
//             className="hover:text-yellow-300"
//           >
//             Templates
//           </button>
//           <button
//             onClick={() => scrollToSection(settingsRef)}
//             className="hover:text-yellow-300"
//           >
//             Settings
//           </button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="pt-20 overflow-y-auto h-screen">
//         {/* User Overview Section */}
//         <motion.div
//           ref={userOverviewRef}
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-10"
//         >
//           <h1 className="text-4xl font-bold">Welcome, User</h1>
//           <p className="mt-5 text-lg">
//             Keep track of your resume creation progress and access your saved
//             templates.
//           </p>
//         </motion.div>

//         {/* What is a Resume Section */}
//         <motion.div
//           ref={resumeInfoRef}
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-10"
//         >
//           <h2 className="text-3xl font-bold">What is a Resume?</h2>
//           <p className="mt-4 text-lg text-center max-w-3xl">
//             A resume is a formal document that provides an overview of your
//             professional qualifications. It's used by employers to understand
//             your experience, skills, and qualifications for a role.
//           </p>
//         </motion.div>

//         {/* Key Points to Keep in Mind Section */}
//         <motion.div
//           ref={keyPointsRef}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, staggerChildren: 0.2 }}
//           className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-10"
//         >
//           <h2 className="text-3xl font-bold">Key Points to Keep in Mind</h2>
//           <ul className="mt-5 space-y-4 text-lg">
//             <motion.li
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               Keep your resume relevant to the job you're applying for.
//             </motion.li>
//             <motion.li
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//             >
//               Use keywords from the job description to increase visibility.
//             </motion.li>
//             <motion.li
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6 }}
//             >
//               Ensure a clean and readable format with professional fonts.
//             </motion.li>
//             <motion.li
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8 }}
//             >
//               Highlight achievements, not just responsibilities.
//             </motion.li>
//             <motion.li
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.0 }}
//             >
//               Limit your resume to one or two pages at most.
//             </motion.li>
//           </ul>
//         </motion.div>

//         {/* Common Resume Mistakes Section */}
//         <motion.div
//           ref={mistakesRef}
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="min-h-screen flex flex-col items-center justify-center bg-red-100 p-10"
//         >
//           <h2 className="text-3xl font-bold">Common Resume Mistakes</h2>
//           <div className="mt-5 w-full max-w-3xl text-lg space-y-4">
//             <p>✘ Including irrelevant personal information.</p>
//             <p>✘ Using an unprofessional email address.</p>
//             <p>✘ Typos and grammatical errors.</p>
//             <p>✘ Too much text and clutter.</p>
//           </div>
//         </motion.div>

//         {/* Resume Templates Section */}
//         <motion.div
//           ref={templatesRef}
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5, staggerChildren: 0.2 }}
//           className="min-h-screen flex flex-col items-center justify-center bg-purple-100 p-10"
//         >
//           <h2 className="text-3xl font-bold">Choose Your Template</h2>
//           <div className="mt-5 grid grid-cols-3 gap-4">
//             {[1, 2, 3, 4, 5, 6].map((template) => (
//               <motion.div
//                 key={template}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-5 bg-white shadow-lg rounded-lg"
//               >
//                 <h3 className="text-xl font-bold">Template {template}</h3>
//                 <p className="mt-2 text-sm">Professional and clean design</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* User Settings Section */}
//         <motion.div
//           ref={settingsRef}
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10"
//         >
//           <h2 className="text-3xl font-bold">User Settings</h2>
//           {/* Add user settings form here */}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// components/LandingPage.tsx

// components/LandingPage.tsx

// import React from "react";
// import { motion } from "framer-motion";
// import ThreeCanvas from "@/app/components/DashboardBg";

// const LandingPage: React.FC = () => {
//   const sections = [
//     {
//       title: "Why Choose Us?",
//       content:
//         "Our resume builder offers intuitive features, customizable templates, and expert tips to create resumes that stand out. With user-friendly design and powerful tools, we make the resume-building process a breeze. Whether you're a student, a professional, or looking to change careers, we have something for everyone.",
//     },
//     {
//       title: "Key Features",
//       content:
//         "1. **Easy-to-use Interface**: Designed for simplicity and efficiency.\n2. **Variety of Templates**: Choose from a selection of professional templates.\n3. **Real-time Previews**: See your changes instantly.\n4. **Download Options**: Save your resume in PDF or DOCX format.\n5. **AI-Powered Suggestions**: Get smart recommendations to enhance your content.",
//     },
//     {
//       title: "How It Works",
//       content:
//         "1. **Choose a Template**: Select a template that fits your style.\n2. **Fill in Your Details**: Enter your information in our guided format.\n3. **Preview Your Resume**: Watch your resume update in real-time.\n4. **Download or Share**: Get your resume ready for applications.",
//     },
//     {
//       title: "Get Started Today",
//       content:
//         "Join thousands of satisfied users and take the first step towards your dream job. Sign up now to build your perfect resume! With our tool, you can confidently present your skills and experience, giving you the best chance to impress potential employers.",
//     },
//   ];

//   return (
//     <div className="relative overflow-hidden">
//       <ThreeCanvas />
//       {/* <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
//         <motion.h1
//           className="text-white text-5xl font-bold mt-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Build Your Perfect Resume
//         </motion.h1>
//         <motion.p
//           className="text-white text-lg mt-4 max-w-xl text-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Create stunning resumes that stand out and get you hired.
//         </motion.p>
//         <motion.button
//           className="mt-6 px-6 py-2 bg-white text-blue-500 font-semibold rounded shadow-lg hover:bg-gray-100"
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           Get Started
//         </motion.button>
//       </div> */}
//       <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
//         {/* Background circles for additional animation */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-40"
//           animate={{
//             scale: [1, 1.1, 1],
//             opacity: [0.5, 0.7, 0.5],
//           }}
//           transition={{
//             duration: 4,
//             ease: "easeInOut",
//             repeat: Infinity,
//           }}
//         />
//         <motion.h1
//           className="text-white text-5xl md:text-6xl font-bold mt-10"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Build Your Perfect Resume
//         </motion.h1>

//         <motion.p
//           className="text-white text-lg mt-4 max-w-xl text-center"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Create stunning resumes that stand out and get you hired. Our platform
//           offers intuitive tools and customizable templates to help you craft a
//           professional resume tailored to your unique skills and experience.
//         </motion.p>

//         <motion.p
//           className="text-white text-lg mt-4 max-w-xl text-center"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           Whether you're a recent graduate, a seasoned professional, or someone
//           looking to make a career change, we have everything you need to
//           present your best self to potential employers.
//         </motion.p>

//         <motion.button
//           className="mt-6 px-8 py-3 bg-white text-blue-500 font-semibold rounded shadow-lg hover:bg-gray-100 transition duration-300"
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           Get Started
//         </motion.button>
//       </div>

//       {/* Sections with advanced scroll animations */}
//       <div className="flex flex-col items-center justify-start p-10 bg-white text-gray-800">
//         {sections.map((section, index) => (
//           <motion.div
//             key={index}
//             className="w-full max-w-2xl my-10 p-5 bg-gray-100 rounded shadow-lg flex flex-col"
//             initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Slide in from left or right
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.3 }}
//             viewport={{ once: false }} // Allows animations to trigger on scroll
//           >
//             <h2 className="text-3xl font-semibold">{section.title}</h2>
//             <p className="mt-2 whitespace-pre-line">{section.content}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
