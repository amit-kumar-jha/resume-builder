// pages/help.tsx
"use client";
import ThreeCanvas from "@/app/components/DashboardBg";
import { motion } from "framer-motion";
import "../dashBoard/dashboard.css";
import FaqAccordion from "@/app/components/FaqAccordion";

// import ThreeBackground from '@/components/ThreeBackground'; // Assuming you've already created this component

const HelpPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden  text-black">
      {/* Three.js Background */}
      <ThreeCanvas />

      {/* Terms and Service Content */}
      <div className="dashboard-container">
        <div className="content">
          <motion.div
            className="card-privacy"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
            }} // Hover effect
          >
            <h1 className="text-4xl font-bold mb-6">Help and Support</h1>
            <p className="text-lg mb-4">
              We are here to help you with any issues you may encounter while
              using our platform. Below are the most common help topics, but
              feel free to contact us if you need further assistance.
            </p>

            <h2 className="text-2xl font-semibold mb-4">1. Account Setup</h2>
            <p className="mb-4">
              If you're having trouble setting up your account, ensure that all
              required fields are filled out correctly. If you still encounter
              problems, contact our support team.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              2. Resetting Your Password
            </h2>
            <p className="mb-4">
              You can reset your password by clicking on the "Forgot Password"
              link on the login page. An email will be sent with instructions on
              how to reset it.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              3. Navigating the Platform
            </h2>
            <p className="mb-4">
              Our platform is designed to be user-friendly, but if you need
              guidance on where to find specific features, you can explore our
              Help Center or watch our video tutorials.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              4. Contacting Support
            </h2>
            <p className="mb-4">
              If you need further assistance, please don't hesitate to{" "}
              <a href="/contact" className="text-blue-500 underline">
                contact our support team
              </a>
              . We're available 24/7 to help you.
            </p>

            <h2 className="text-2xl font-semibold mb-4">5. FAQs</h2>
            <p className="mb-4">
              For more common issues, you can visit our{" "}
              <a href="/faq" className="text-blue-500 underline">
                FAQ section
              </a>{" "}
              to find answers to the most frequently asked questions.
            </p>

            <p className="text-lg mt-8">
              If your issue isn't listed above, please reach out and we'll be
              happy to help.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
