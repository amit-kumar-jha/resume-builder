"use client";
import React from "react";
import { motion } from "framer-motion";
import "./about.css"; // Import your CSS for styling

const About: React.FC = () => {
  // Animation variants for different sections
  const headerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 70, duration: 0.8 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const listVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2, staggerChildren: 0.3 },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div className="about-container" initial="hidden" animate="visible">
      {/* Animated Header */}
      <motion.header className="about-header" variants={headerVariants}>
        <h1>About ResumeBuilder</h1>
        <p>Your one-stop solution for creating professional resumes.</p>
      </motion.header>

      {/* Animated Sections */}
      <motion.section className="about-content" variants={sectionVariants}>
        <h2>Our Mission</h2>
        <p>
          At ResumeBuilder, our mission is to empower job seekers by providing
          them with the tools and resources to create compelling resumes that
          stand out in today's competitive job market.
        </p>

        <h2>Why Choose ResumeBuilder?</h2>
        {/* Animated List */}
        <motion.ul initial="hidden" animate="visible" variants={listVariants}>
          <motion.li variants={listItemVariants}>
            <strong>User-Friendly Interface:</strong> Our platform is designed
            with simplicity in mind, making it easy for anyone to create a
            professional resume.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Variety of Templates:</strong> Choose from a diverse
            selection of professionally designed templates.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Real-Time Editing:</strong> Make changes to your resume on
            the fly and see updates in real-time.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Expert Tips and Guidance:</strong> Access a wealth of
            resources, including expert tips on resume writing.
          </motion.li>
          <motion.li variants={listItemVariants}>
            <strong>Export Options:</strong> Download your resume in various
            formats.
          </motion.li>
        </motion.ul>

        <h2>Our Story</h2>
        <p>
          ResumeBuilder was founded by a team of career experts and tech
          enthusiasts who recognized the challenges that job seekers face when
          creating resumes.
        </p>
        <p>
          Since our launch, we have helped thousands of users create standout
          resumes that have led to job interviews and career opportunities.
        </p>

        <h2>Join Our Community</h2>
        <p>
          We believe in the power of community and collaboration. Join our
          growing network of job seekers and share your success stories with us!
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or feedback, feel free to reach out to us at{" "}
          <a href="mailto:support@resumebuilder.com">
            support@resumebuilder.com
          </a>
          .
        </p>
      </motion.section>
    </motion.div>
  );
};

export default About;
